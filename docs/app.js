// IoT Vize Sınav Uygulaması — app.js

const STORAGE_KEYS = {
  wrong: "iot_wrong_questions_v1",
  history: "iot_history_v1",
  theme: "iot_theme_v1",
};

// Durum
const state = {
  selectedTopics: new Set(), // boşsa tümü
  count: 20,
  type: "all",
  mode: "practice",
  quiz: null,
};

function $(id) { return document.getElementById(id); }
function el(tag, opts = {}, ...children) {
  const e = document.createElement(tag);
  if (opts.class) e.className = opts.class;
  if (opts.text !== undefined) e.textContent = opts.text;
  if (opts.html !== undefined) e.innerHTML = opts.html;
  if (opts.attrs) for (const [k, v] of Object.entries(opts.attrs)) e.setAttribute(k, v);
  if (opts.on) for (const [k, v] of Object.entries(opts.on)) e.addEventListener(k, v);
  for (const ch of children) if (ch) e.appendChild(typeof ch === "string" ? document.createTextNode(ch) : ch);
  return e;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(id).classList.add("active");
  const navQuiz = $("navQuizLink");
  if (navQuiz) navQuiz.style.display = id === "screen-quiz" ? "inline" : "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function applyTheme(theme) {
  const t = theme === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", t);
  try { localStorage.setItem(STORAGE_KEYS.theme, t); } catch (_) {}
  document.querySelectorAll(".theme-toggle button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-theme") === t);
  });
}

function getWrongIds() {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.wrong) || "[]")); }
  catch { return new Set(); }
}
function saveWrongIds(set) {
  localStorage.setItem(STORAGE_KEYS.wrong, JSON.stringify([...set]));
}
function addWrongId(qid) {
  const s = getWrongIds(); s.add(qid); saveWrongIds(s);
}
function removeWrongId(qid) {
  const s = getWrongIds(); s.delete(qid); saveWrongIds(s);
}

// Soru id üretimi (deterministic index tabanlı)
function qid(i) { return `q${i}`; }

// ===================== ANA EKRAN =====================
function renderTopics() {
  const grid = $("topicList");
  grid.innerHTML = "";
  Object.keys(TOPICS).forEach(k => {
    const kn = parseInt(k, 10);
    const t = TOPICS[kn];
    const qs = QUESTIONS.filter(q => q.topic === kn);
    const byType = {
      mc: qs.filter(q => q.type === "mc").length,
      tf: qs.filter(q => q.type === "tf").length,
      fill: qs.filter(q => q.type === "fill").length,
    };
    const card = el("div", {
      class: "topic-card" + (state.selectedTopics.has(kn) ? " selected" : ""),
      on: { click: () => toggleTopic(kn) },
      attrs: { role: "button", tabindex: "0", "aria-pressed": state.selectedTopics.has(kn) ? "true" : "false" }
    },
      el("div", { class: "num", text: `Bölüm ${k}` }),
      el("div", { class: "name", text: t.short }),
      el("div", { class: "meta", html:
        `<span>Toplam: <b style="color:#e8ecff">${qs.length}</b></span>` +
        `<span>ÇS: ${byType.mc}</span>` +
        `<span>D/Y: ${byType.tf}</span>` +
        `<span>Boşluk: ${byType.fill}</span>` })
    );
    grid.appendChild(card);
  });
}

function toggleTopic(k) {
  if (state.selectedTopics.has(k)) state.selectedTopics.delete(k);
  else state.selectedTopics.add(k);
  renderTopics();
  updateGlobalStats();
}

function updateGlobalStats() {
  const total = QUESTIONS.length;
  const wrongCount = getWrongIds().size;
  const filtered = filterPool().length;
  $("globalStats").innerHTML =
    `<span>Toplam soru: <b>${total}</b></span>` +
    `<span>Seçilen havuz: <b>${filtered}</b></span>` +
    `<span>Yanlış defteri: <b>${wrongCount}</b></span>`;
}

function filterPool() {
  let pool = QUESTIONS.map((q, i) => ({ ...q, _id: qid(i), _idx: i }));
  if (state.selectedTopics.size > 0) {
    pool = pool.filter(q => state.selectedTopics.has(q.topic));
  }
  if (state.type !== "all") {
    pool = pool.filter(q => q.type === state.type);
  }
  return pool;
}

function bindChips(groupId, onChange) {
  const group = $(groupId);
  group.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    group.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    onChange(btn);
  });
}

// ===================== SINAV =====================
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz(customPool = null) {
  let pool = customPool || filterPool();
  if (pool.length === 0) {
    alert("Seçtiğin filtreye uyan soru yok. Lütfen farklı bir seçim yap.");
    return;
  }
  pool = shuffle(pool);
  if (state.count !== -1 && pool.length > state.count) {
    pool = pool.slice(0, state.count);
  }

  state.quiz = {
    pool,
    idx: 0,
    correct: 0,
    wrong: 0,
    skipped: 0,
    answers: [], // { q, picked, isCorrect, skipped }
    mode: state.mode,
  };
  renderQuestion();
  showScreen("screen-quiz");
  $("screen-quiz").focus();
}

function renderQuestion() {
  const q = state.quiz.pool[state.quiz.idx];
  $("qIndex").textContent = state.quiz.idx + 1;
  $("qTotal").textContent = state.quiz.pool.length;
  $("progressFill").style.width = `${((state.quiz.idx) / state.quiz.pool.length) * 100}%`;
  $("scoreText").textContent = `${state.quiz.correct} / ${state.quiz.idx}`;
  const ml = $("modeLabel");
  if (ml) ml.textContent = state.quiz.mode === "exam" ? "Sınav modu" : "Pratik modu";

  $("topicTag").textContent = TOPICS[q.topic].short;
  const typeLabel = { mc: "Çoktan Seçmeli", tf: "Doğru / Yanlış", fill: "Boşluk Doldurma" }[q.type];
  $("typeTag").textContent = typeLabel;

  $("questionText").textContent = q.q;
  $("feedback").className = "feedback";
  $("feedback").innerHTML = "";

  $("submitBtn").style.display = "inline-block";
  $("submitBtn").disabled = true;
  $("nextBtn").style.display = "none";

  const area = $("answerArea");
  area.innerHTML = "";

  if (q.type === "mc") {
    q.options.forEach((opt, i) => {
      const node = el("div", {
        class: "option",
        on: { click: () => selectOption(node, i) }
      },
        el("div", { class: "bullet", text: String.fromCharCode(65 + i) }),
        el("div", { text: opt })
      );
      area.appendChild(node);
    });
  } else if (q.type === "tf") {
    [{ v: true, label: "Doğru" }, { v: false, label: "Yanlış" }].forEach((it, i) => {
      const node = el("div", {
        class: "option",
        on: { click: () => selectOption(node, it.v) }
      },
        el("div", { class: "bullet", text: i === 0 ? "D" : "Y" }),
        el("div", { text: it.label })
      );
      area.appendChild(node);
    });
  } else if (q.type === "fill") {
    const input = el("input", {
      class: "fill-input",
      attrs: { type: "text", placeholder: "Cevabı yazın…", id: "fillInput", autocomplete: "off" },
      on: {
        input: () => { $("submitBtn").disabled = input.value.trim().length === 0; },
        keydown: (e) => {
          if (e.key === "Enter" && !$("submitBtn").disabled && $("submitBtn").style.display !== "none") {
            submitAnswer();
          } else if (e.key === "Enter" && $("nextBtn").style.display !== "none") {
            nextQuestion();
          }
        }
      }
    });
    area.appendChild(input);
    setTimeout(() => input.focus(), 50);
  }
}

function selectOption(node, value) {
  if (node.parentElement.querySelector(".option.locked")) return;
  node.parentElement.querySelectorAll(".option").forEach(n => n.classList.remove("selected"));
  node.classList.add("selected");
  node.dataset.value = JSON.stringify(value);
  $("submitBtn").disabled = false;
}

function normalize(s) {
  return String(s).trim().toLowerCase()
    .replace(/ı/g, "i").replace(/İ/g, "i")
    .replace(/ş/g, "s").replace(/Ş/g, "s")
    .replace(/ğ/g, "g").replace(/Ğ/g, "g")
    .replace(/ç/g, "c").replace(/Ç/g, "c")
    .replace(/ö/g, "o").replace(/Ö/g, "o")
    .replace(/ü/g, "u").replace(/Ü/g, "u")
    .replace(/\s+/g, " ");
}

function checkAnswer(q, picked) {
  if (q.type === "mc") return picked === q.answer;
  if (q.type === "tf") return picked === q.answer;
  if (q.type === "fill") {
    const p = normalize(picked);
    return q.answer.some(a => normalize(a) === p);
  }
  return false;
}

function submitAnswer() {
  const q = state.quiz.pool[state.quiz.idx];
  let picked;
  if (q.type === "mc" || q.type === "tf") {
    const sel = $("answerArea").querySelector(".option.selected");
    if (!sel) return;
    picked = JSON.parse(sel.dataset.value);
  } else if (q.type === "fill") {
    picked = $("fillInput").value.trim();
    if (!picked) return;
  }

  const isCorrect = checkAnswer(q, picked);
  state.quiz.answers.push({ q, picked, isCorrect, skipped: false });
  if (isCorrect) {
    state.quiz.correct++;
    removeWrongId(q._id);
  } else {
    state.quiz.wrong++;
    addWrongId(q._id);
  }

  // Kilit ve görsel geri bildirim
  if (state.quiz.mode === "practice") {
    showQuestionFeedback(q, picked, isCorrect);
  } else {
    // Sınav modunda sessizce devam et
    nextQuestion();
    return;
  }

  $("submitBtn").style.display = "none";
  $("nextBtn").style.display = "inline-block";
  $("scoreText").textContent = `${state.quiz.correct} / ${state.quiz.idx + 1}`;
}

function showQuestionFeedback(q, picked, isCorrect) {
  const area = $("answerArea");
  if (q.type === "mc") {
    const opts = area.querySelectorAll(".option");
    opts.forEach((n, i) => {
      n.classList.add("locked");
      if (i === q.answer) n.classList.add("correct");
      if (i === picked && i !== q.answer) n.classList.add("wrong");
    });
  } else if (q.type === "tf") {
    const opts = area.querySelectorAll(".option");
    opts.forEach((n) => {
      n.classList.add("locked");
      const v = JSON.parse(n.dataset.value);
      if (v === q.answer) n.classList.add("correct");
      if (v === picked && v !== q.answer) n.classList.add("wrong");
    });
  } else if (q.type === "fill") {
    const inp = $("fillInput");
    inp.readOnly = true;
    inp.classList.add(isCorrect ? "correct" : "wrong");
  }

  const fb = $("feedback");
  fb.className = "feedback show " + (isCorrect ? "ok" : "bad");
  const correctText = q.type === "mc" ? q.options[q.answer]
    : q.type === "tf" ? (q.answer ? "Doğru" : "Yanlış")
    : q.answer[0];
  fb.innerHTML = (isCorrect
    ? `<strong>Doğru!</strong> ${q.exp || ""}`
    : `<strong>Yanlış.</strong> Doğru cevap: <b>${correctText}</b>. ${q.exp || ""}`);
}

function nextQuestion() {
  state.quiz.idx++;
  if (state.quiz.idx >= state.quiz.pool.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function skipQuestion() {
  const q = state.quiz.pool[state.quiz.idx];
  state.quiz.answers.push({ q, picked: null, isCorrect: false, skipped: true });
  state.quiz.skipped++;
  nextQuestion();
}

// ===================== SONUÇ =====================
function finishQuiz() {
  const { correct, wrong, skipped, pool } = state.quiz;
  const pct = Math.round((correct / pool.length) * 100);
  $("resultScore").textContent = `${pct}%`;
  $("resultCorrect").textContent = correct;
  $("resultWrong").textContent = wrong;
  $("resultSkipped").textContent = skipped;

  $("reviewArea").innerHTML = "";
  $("reviewArea").style.display = "none";
  $("reviewBtn").textContent = "Soruları incele";

  showScreen("screen-result");
}

function renderReview(container, entries) {
  container.innerHTML = "";
  entries.forEach((entry, i) => {
    const q = entry.q;
    const item = el("div", { class: "review-item" });
    item.appendChild(el("div", { class: "meta-row", html:
      `<span class="tag">${TOPICS[q.topic].short}</span>` +
      `<span class="tag alt">${({mc:"ÇS", tf:"D/Y", fill:"Boşluk"})[q.type]}</span>` +
      (entry.skipped
        ? `<span class="tag yellow">Boş bırakıldı</span>`
        : (entry.isCorrect
          ? `<span class="tag" style="background:rgba(47,208,122,0.15);color:#aaf0c8;border-color:rgba(47,208,122,0.4)">Doğru</span>`
          : `<span class="tag" style="background:rgba(255,95,120,0.15);color:#ffc1cc;border-color:rgba(255,95,120,0.4)">Yanlış</span>`)) }));

    item.appendChild(el("div", { class: "q", text: `${i + 1}. ${q.q}` }));

    if (q.type === "mc") {
      q.options.forEach((opt, k) => {
        let cls = "opt";
        if (k === q.answer) cls += " correct";
        if (entry.picked === k && k !== q.answer) cls += " picked-wrong";
        item.appendChild(el("div", { class: cls, text: `${String.fromCharCode(65 + k)}) ${opt}` }));
      });
    } else if (q.type === "tf") {
      [["Doğru", true], ["Yanlış", false]].forEach(([label, v]) => {
        let cls = "opt";
        if (v === q.answer) cls += " correct";
        if (entry.picked === v && v !== q.answer) cls += " picked-wrong";
        item.appendChild(el("div", { class: cls, text: label }));
      });
    } else if (q.type === "fill") {
      item.appendChild(el("div", { class: "opt correct", text: `Doğru cevap: ${q.answer[0]}` }));
      if (entry.picked !== null && !entry.isCorrect) {
        item.appendChild(el("div", { class: "opt picked-wrong", text: `Senin cevabın: ${entry.picked}` }));
      }
    }

    if (q.exp) item.appendChild(el("div", { class: "exp", html: `<b>Açıklama:</b> ${q.exp}` }));
    container.appendChild(item);
  });
}

// ===================== YANLIŞ DEFTERİ =====================
function renderWrongList() {
  const ids = getWrongIds();
  const list = $("wrongList");
  list.innerHTML = "";
  if (ids.size === 0) {
    list.appendChild(el("div", { class: "review-item", html:
      `<p class="q">Tebrikler! Kayıtlı yanlış sorun yok.</p>` +
      `<div class="exp">Bir sınav tamamladığında yanlış yaptığın sorular buraya otomatik eklenir. Aynı soruyu doğru cevapladığında da listeden çıkar.</div>` }));
    return;
  }
  const entries = [...ids].map(id => {
    const idx = parseInt(id.slice(1), 10);
    const q = QUESTIONS[idx];
    return { q: { ...q, _id: id, _idx: idx }, picked: null, isCorrect: false, skipped: false };
  });
  renderReview(list, entries);
}

// ===================== EVENT BINDING =====================
window.addEventListener("DOMContentLoaded", () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.theme);
    applyTheme(saved === "light" ? "light" : "dark");
  } catch (_) {
    applyTheme("dark");
  }
  $("themeLight").addEventListener("click", () => applyTheme("light"));
  $("themeDark").addEventListener("click", () => applyTheme("dark"));

  renderTopics();
  updateGlobalStats();

  bindChips("countChips", (btn) => { state.count = parseInt(btn.dataset.count, 10); });
  bindChips("typeChips", (btn) => { state.type = btn.dataset.type; updateGlobalStats(); });
  bindChips("modeChips", (btn) => { state.mode = btn.dataset.mode; });

  $("selectAllTopics").addEventListener("click", () => {
    [1, 2, 3, 4, 5, 6].forEach((n) => state.selectedTopics.add(n));
    renderTopics();
    updateGlobalStats();
  });
  $("clearTopics").addEventListener("click", () => {
    state.selectedTopics.clear();
    renderTopics();
    updateGlobalStats();
  });

  $("startBtn").addEventListener("click", () => startQuiz());
  $("wrongReviewBtn").addEventListener("click", () => {
    renderWrongList();
    showScreen("screen-wrong");
  });
  $("resetBtn").addEventListener("click", () => {
    if (confirm("Yanlış defteri dahil tüm geçmiş sıfırlansın mı?")) {
      localStorage.removeItem(STORAGE_KEYS.wrong);
      localStorage.removeItem(STORAGE_KEYS.history);
      updateGlobalStats();
    }
  });

  $("quitBtn").addEventListener("click", () => {
    if (confirm("Sınavdan çıkmak istediğine emin misin? İlerleme kaybolacak.")) {
      showScreen("screen-home");
      updateGlobalStats();
    }
  });
  $("submitBtn").addEventListener("click", submitAnswer);
  $("nextBtn").addEventListener("click", nextQuestion);
  $("skipBtn").addEventListener("click", skipQuestion);

  $("reviewBtn").addEventListener("click", () => {
    const area = $("reviewArea");
    if (area.style.display === "none" || !area.style.display) {
      renderReview(area, state.quiz.answers);
      area.style.display = "block";
      $("reviewBtn").textContent = "İncelemeyi gizle";
    } else {
      area.style.display = "none";
      $("reviewBtn").textContent = "Soruları incele";
    }
  });
  $("retryWrongBtn").addEventListener("click", () => {
    const wrongs = state.quiz.answers.filter(a => !a.isCorrect).map(a => a.q);
    if (wrongs.length === 0) { alert("Yanlışın yok, harikasın!"); return; }
    startQuiz(wrongs);
  });
  $("homeBtn").addEventListener("click", () => { showScreen("screen-home"); updateGlobalStats(); });

  $("wrongBack").addEventListener("click", () => { showScreen("screen-home"); updateGlobalStats(); });
  $("wrongClear").addEventListener("click", () => {
    if (confirm("Yanlış listesi temizlensin mi?")) {
      saveWrongIds(new Set());
      renderWrongList();
      updateGlobalStats();
    }
  });
  $("practiceWrongBtn").addEventListener("click", () => {
    const ids = getWrongIds();
    if (ids.size === 0) { alert("Kayıtlı yanlışın yok."); return; }
    const pool = [...ids].map(id => {
      const idx = parseInt(id.slice(1), 10);
      return { ...QUESTIONS[idx], _id: id, _idx: idx };
    });
    startQuiz(pool);
  });

  // Klavye kısayolları (quiz ekranında)
  document.addEventListener("keydown", (e) => {
    if (!$("screen-quiz").classList.contains("active")) return;
    if (document.activeElement && document.activeElement.tagName === "INPUT") return;
    if (e.key === "Enter") {
      if ($("nextBtn").style.display !== "none") nextQuestion();
      else if (!$("submitBtn").disabled) submitAnswer();
    } else if (/^[1-9a-dA-D]$/.test(e.key)) {
      const area = $("answerArea");
      const opts = area.querySelectorAll(".option");
      let idx = -1;
      if (/[1-9]/.test(e.key)) idx = parseInt(e.key, 10) - 1;
      else idx = e.key.toUpperCase().charCodeAt(0) - 65;
      if (idx >= 0 && idx < opts.length) opts[idx].click();
    }
  });
});
