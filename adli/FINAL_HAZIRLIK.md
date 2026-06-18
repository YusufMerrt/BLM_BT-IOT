# Adli Bilişim — Final Hazırlık Soru Bankası

> Kaynak: `8adli.pdf` – `14adli.pdf` (SUNU 8–14). Vize konuları (SUNU 1–7) finalde de çıkabilir; bu dosya **8’den sonraki final slaytları** odaklıdır.
> İnteraktif test: `docs/index.html` → **Adli Bilişim** → bölüm seç veya **Final hazırlık** (tüm 8–14).

---

## Bölüm özeti

| Bölüm | Konu | Test soru sayısı (uygulama) |
|-------|------|-----------------------------|
| SUNU 8 | Görüntü karşılaştırma ve ölçme (2): stereo, eşikleme, morfoloji, şekil, manipülasyon | 33 |
| SUNU 9 | Görüntü işleme ve iyileştirme: kalibrasyon, renk, düzeltme, interpolation | 29 |
| SUNU 10 | Kanıtın yorumlanması ve sunulması | 20 |
| SUNU 11 | Bilirkişilik kanunu ve süreç | 29 |
| SUNU 12 | Uzman mütalaa (CMK 67, HMK 293) | 19 |
| SUNU 13 | Adli belge incelemeleri | 26 |
| SUNU 14 | Laboratuvar yazılımları ve karşılaştırma | 30 |
| **Final (8–14)** | Tüm final konuları birlikte | **186** |

---

## SUNU 8 — Görüntü karşılaştırma ve ölçme (2)

### Kavram soruları

1. Stereografik çift (stereo pairs) nedir? İki giriş görüntüsünden ne hesaplanır?
2. Stereo ölçümde S (kaydırma mesafesi), alt rakım ve paralaks (d1−d2) kavramlarını açıklayın. Yükseklik farkı ile ilişkisini yazın.
3. Kalabalık yoğunluğu tahmininde neden doğrudan “kafa sayımı” her zaman mümkün değildir? Google Haritalar örneği ne işe yarar?
4. Toprak/ayakkabı/lastik parçacık görüntüleri Locard ilkesiyle nasıl ilişkilendirilir?
5. Manuel eşikleme neden şüpheli ve tercih edilmez? Otsu ve Student's t-test yöntemlerini karşılaştırın.
6. Morfolojik genişleme (dilation), aşınma (erosion), açıklık (opening) ve kapanış (closing) ne yapar?
7. Watershed bölütleme hangi probleme çözüm sunar?
8. Boolean AND, OR, XOR, NOT ikili görüntülerde nasıl kullanılır?
9. Dijital kamera neden mutlak renk ölçümünde spektrofotometre gerektirebilir? RGB ile 41 mavi mürekkep örneğinde %94 başarı ne anlama gelir?
10. Alan, çevre, en/boy oranı, iskelet ve fraktal boyut ölçümlerini tanımlayın.
11. Görüntü manipülasyonunda “ilk kural”, “ikinci kural” ve “genel kural” nedir?
12. Copy-move sahteciliği neden kesin işaret sayılır? JPEG 8×8 blok hizası ipucu verir mi?

### Hızlı test (kendin cevapla)

- Stereo kameralar kaç mercekle tasarlanır?
- Otomatik eşikleme ayak izi/kan sıçraması gibi yüzeylerde neden zayıf?
- Görüntüye kopyala-yapıştır ile ekleme slaytta nasıl nitelenir?

---

## SUNU 9 — Temel görüntü işleme ve iyileştirme

### Kavram soruları

1. Kanıt görüntülerinde boyut kalibrasyonu neden gerekir? Piksel başına uzunluk nasıl kurulur?
2. ABFO No. 2 ölçeği ve L şeklinde cetvelin avantajı nedir?
3. Renk kalibrasyonu için ColorChecker / GretagMacbeth ne sağlar?
4. Çocuk yüzündeki morluk örneğinde renk neden kritik? Taze vs eski çürük renkleri?
5. RGB, HSI ve Lab renk uzaylarını karşılaştırın. Ton (Hue), doygunluk, intensity (parlaklık) tanımlayın.
6. Medyan filtre/kenar keskinleştirmeyi RGB’ye ayrı uygulamak neden renk kaymasına yol açar?
7. Nötr nokta renk ayarı (siyah-beyaz-gri) nasıl yapılır?
8. Perspektif düzeltme: kan sıçraması fayans ve ayak izi örneklerinde referans noktaları?
9. Zoom/cep telefon lenslerinde distorsiyon düzeltmesi neden zordur?
10. nearest-neighbor, bilinear, bicubic ara değerleme: avantaj/dezavantaj; adli bağlamda uyarı?
11. Adli görüntüde değişiklik yapıldığında orijinal ve işlenmiş kopya kuralı?
12. Histogram eşitleme ve kümülatif histogram mantığı? Gri görüntüde 255 neyi ifade eder?
13. Renkli görüntüde histogram eşitleme neden Lab L kanalında yapılmalı?

### Hızlı test

- İkili toplamada elde olarak hangi sayının katları bir sonraki basamağa geçer? (SUNU 3 ile bağlantı)
- Çift kübik ara değerleme adli incelemede neden önerilmez?

---

## SUNU 10 — Kanıtın yorumlanması ve sunulması

### Kavram soruları

1. Görüntüleri jüriye basılı kopya yerine nasıl sunmak daha iyidir? Yanlış renklerin etkisi?
2. Sadece sonuç göstermek neden “sihir” gibi görünür? Adım adım gösterim ne sağlar?
3. Yan yana karşılaştırmada ölçek, yönelim, parlaklık ve kontrast eşleştirmesi?
4. Örgü deseni ve kumaş izi karşılaştırmasının zorlukları?
5. Bilgisayar grafikleri ve animasyonlar hangi durumlarda faydalı? Bıçak yarası örneği?
6. Dinamik modeller (kaza animasyonu): veri kaynakları ve küçük parametre değişikliğinin etkisi?
7. Mahkemede adli animasyonun gereklilikleri: uygunluk, özgünlük, uzman görüşü?
8. SWGTREAD, SWGMAT, ASTM standart veritabanları ne için?
9. Ölçüm belirsizliği (79.3 ± 1.2 cm) jüri için neden zor? Olasılık dilinde sunum örneği?

### Hızlı test

- Ters evrişim (deconvolution) slaytta hangi örnek için gösterilmiş?
- Yaşlandırma tahmini hangi pratik amaçla kullanılır?

---

## SUNU 11 — Bilirkişilik

### Kavram soruları

1. Bilirkişi tanımı (6754 sayılı kanun). Hakim–bilirkişi ilişkisi?
2. Dürüstlük, bağımsızlık, tarafsızlık, yetkinlik, güvenilirlik — açıklayın.
3. TCK 276 (gerçeğe aykırı bilirkişilik) cezası?
4. Sicile kayıt: temel eğitim zorunluluğu, 5 yıl kıdem, başvuru belgeleri?
5. Bilirkişinin yetkileri: ücret (HMK 283), çekinme (HMK 270), bilgi alma?
6. Tanıklıktan çekinme sebepleri bilirkişi için nasıl uygulanır?
7. Yükümlülükler listesinden en önemli 5 tanesini yazın.
8. Etik ilkeler: menfaat elde etme yasağı, reklam yasağı, bildirim yükümlülüğü?
9. Bilirkişi hangi konuda inceleme yapabilir / yapamaz?
10. Görevlendirme: bölge listeleri, çoklu bilirkişi, süre ve ek süre?
11. Rapor içeriği (a–ı maddeleri özetle). Hukuki nitelendirme bilirkişiye ait mi?
12. Rapora itiraz: iki hafta kuralı. Rapor teslimi sonrası değişiklik?
13. Temel eğitim: 24 saat, 3 yıl geçerlilik, yenileme eğitimi (6 saat / 3 yıl)?
14. UYAP Bilirkişi Portal ne sağlar?

### Hızlı test

- Listeye kayıtlı bilirkişi görevi kabulden kaçınabilir mi (genel kural)?
- Adlî Tıp / Yüksek Sağlık Şurası görevden kaçınabilir mi?

---

## SUNU 12 — Uzman mütalaa

### Kavram soruları

1. Mütalaa, bilimsel mütalaa, uzman mütalaa tanımları?
2. CMK 67 maddesinin bilirkişi raporuna ilişkin 6 fıkrasını özetleyin.
3. CMK 67/3: Bilirkişi ne yapamaz? (hukuki nitelendirme)
4. HMK 293: Tarafların uzman görüşü alması; uzman gelmezse rapor değerlendirilmez kuralı?
5. Listede olmayan bilim insanı uzman mütalaası verebilir mi?
6. Uzman mütalaası vs bilirkişi raporu: hukuki üstünlük var mı? Kim atar?
7. Uzman mütalaası hangi amaçlarla talep edilir? (çelişki giderme, iddia destekleme vb.)
8. Ne zaman alınmalı? (resmi rapor öncesi/sonrası, çelişkili raporlar)
9. Avantajları: derin uzmanlık, literatür, çapraz sorgulama, delil zinciri değerlendirmesi?
10. Ücretli mütalaa güvenilirliği nasıl sınanır?
11. CMK 67/6 ve HMK 293: ayrıca süre istenemez kuralı?
12. Kimler pratikte mütalaa verebilir? Görevdeki bilirkişi kendi davasında verebilir mi?
13. Adli belge incelemesi: asıl belge vs fotokopi kısıtlılığı?

### Hızlı test

- Birden çok bilirkişi farklı görüşte ne yapmalı? (CMK 67/2)

---

## SUNU 13 — Adli belge incelemeleri

### Kavram soruları

1. Adli belge incelemesi tanımı ve Adli Bilimler içindeki yeri?
2. Çalışılan konular: sahte belge, silinti, karalanmış yazı, imza aidiyeti, pul/mühür?
3. İnceleme yapılan kurumlar (Kriminal Polis, Jandarma, ATK Fizik İhtisas, serbest uzman)?
4. Belgelerin toplumsal önemi ve tahrifat türleri (çek, kimlik, vasiyetname, külli sahtecilik)?
5. Külli vs kısmi sahtecilik; değer, zaman, mana yönünden kısmi türler?
6. Kısmi sahtecilik yöntemleri: ekleme, sürşarj, silme, fotoğraf değişikliği — örneklerle?
7. Videospektral yöntemler: VSC, Projectina, Foster & Freeman, TÜBİTAK Forensic XP?
8. ESDA (fulaj/baskı izi), TLC, mikroskop, lup kullanımı?
9. Üzeri karalanmış yazılar: infrared, UV, luminesans; mürekkep/kağıt türüne bağlı fark?
10. Grafoloji: tanım, Camillo Baldi, sahtecilik tespitinde hangi unsurlar?
11. Dijital belge sahteciliği: metadata, PDF, yapay zekâ; imza sahteciliği ve CEDAR veri seti?

### Hızlı test

- Külli sahtecilikte hologram/filigran genelde nasıl olur?
- “Onüçbin” yazısına “on” eklenmesi hangi sahtecilik türü?

---

## SUNU 14 — Laboratuvar yazılımları

### Kavram soruları

1. FISWG ve DIWG nedir? Türkiye’de ortak çalışma grubu durumu?
2. Laboratuvar çalışma kategorileri: iyileştirme, manipülasyon, karşılaştırma, yüz?
3. **Amped FIVE**: amaç, filtreleme konsepti, 6 adımlı iş akışı, raporlama/tekrarlanabilirlik?
4. **Amped Replay** vs **DVRConv**: saha vs format dönüştürme?
5. **Cognitech Tri-Suite**: AutoMeasure, VideoActive, Video Investigator özellikleri?
6. **Ocean Systems**: dTective, dVeloper, SpotLight, arithMATIC, ClearID?
7. **MotionDSP**, **FOCLAR Impress**, **Forevid** (Finlandiya), **Videntifier**, **IYON** (TÜBİTAK)?
8. **iNPUT-ACE**, **Kinesense LE/Redact**?
9. Halistoprak (2023) tezinde 4 problem türü ve 5 yazılım karşılaştırması?
10. Tez sonucu: Amped Five, Foclar Impress, Cognitech VI, Forevid, IYON — artı/eksiler?

### Hızlı test

- Amped FIVE’te orijinal materyal neden “filtre” mantığıyla korunur?
- arithMATIC filtresi oda kamerası önce/sonra örneğinde ne için?

---

## FINAL — Karma hazırlık (tüm bölümler)

Aşağıdaki sorular birden fazla slaytı birleştirir; finalde “çapraz” soru tipi için idealdir.

### Çoktan seçmeli mantık (kendin şıkları üret)

1. Adli görüntüde orijinal saklama kuralı hangi SUNU’larda vurgulanır? (9 ve 8)
2. Yan yana karşılaştırma koşulları SUNU 7 ve 10’da ortak olan üç unsur?
3. Bilirkişi raporu vs uzman mütalaa: atayan merci, bağlayıcılık, CMK/HMK maddeleri?
4. Belge aslı inceleme ilkesi hangi slaytta adli belge + mütalaa bağlamında geçer?
5. Histogram/parlaklık işlemleri renkli görüntüde neden Lab/HSI parlaklık kanalında yapılır?
6. Stereo ölçüm ve fotogrametri/AutoMeasure: ölçek aralığı ve kullanım farkı?
7. JPEG blok hizası ipucu ve kopyala-yapıştır sahteciliği: hangi manipülasyon tespiti bölümü?
8. ESDA fulaj incelemesi ve grafoloji: fiziksel vs el yazısı delili?
9. Amped FIVE rapor tekrarlanabilirliği ve bilirkişi raporunda “inceleme yöntemi” maddesi ilişkisi?
10. TCK 276 ve gerçeğe aykırı bilirkişilik: bilirkişi etik ile bağlantı?

### Doğru–yanlış hızlı tur (20 madde)

| # | İfade | D/Y |
|---|--------|-----|
| 1 | Stereo görüntüler kilometreden mikrometreye ölçeklenebilir. | D |
| 2 | Watershed temas eden nesneleri ayırmak için kullanılır. | D |
| 3 | Görüntüye her şey eklemek slaytta her zaman kabul edilebilir. | Y |
| 4 | Bicubic büyütme adli incelemede ince detay için her zaman uygundur. | Y |
| 5 | Histogram eşitleme farklı aydınlatmadaki sahneleri karşılaştırmayı kolaylaştırabilir. | D |
| 6 | Jüriye basılı renkli kopya, geniş ekran sunumdan daha iyidir. | Y |
| 7 | Adli animasyon mevcut kanıtları desteklemelidir. | D |
| 8 | Bilirkişi hukuki nitelendirme yapabilir. | Y |
| 9 | Uzman mütalaa için mahkeme izni şart değildir (taraflar doğrudan başvurabilir). | D |
| 10 | Mahkeme bilirkişi raporuna uymak zorundadır. | Y |
| 11 | Külli sahtecilikte güvenlik öğeleri genelde eksik kalır. | D |
| 12 | ESDA yazıdan önce/sonra fulajı ayırt edebilir. | D |
| 13 | Görevdeki bilirkişi kendi davasında uzman görüşü veremez. | D |
| 14 | CMK 67/6 ayrıca süre istenemez der. | D |
| 15 | FISWG yüz tanımlama çalışma grubudur. | D |
| 16 | Amped FIVE işlemler orijinali değiştirmemek için filtre mantığı kullanır. | D |
| 17 | Forevid tezde fotoğraf karelerinde etkili bulunmuştur. | Y |
| 18 | IYON Suite TÜBİTAK yerli yazılımıdır. | D |
| 19 | Cognitech VI tezde kullanım kolaylığı en yüksek yazılımdır. | Y |
| 20 | Videntifier medyada şüpheli video taraması yapar. | D |

### Boşluk tamamlama (final mix)

1. Bilirkişilik Kanunu: **6754** sayılı; gerçeğe aykırı bilirkişilik TCK **276**.
2. Uzman mütalaa: ceza **CMK 67**, hukuk **HMK 293**.
3. Stereo ölçümde kaydırma mesafesi **S**, alt **rakım**.
4. Morfolojik **watershed** bölütleme; Boolean **XOR** (EXOR).
5. Renk kalibrasyon **ColorChecker**; ABFO **Odontoloji** Kurulu ölçeği.
6. Ara değerleme: **nearest-neighbor**, **bilinear**, **bicubic** — adlide sonuncu dikkatli.
7. Lastik veritabanı **SWGTREAD**; boya standartları **SWGMAT** / **ASTM**.
8. Külli sahtecilik = belgenin tamamı sahte; kısmi türler: değer, zaman, **mana**.
9. Belge cihazı **VSC**; fulaj için **ESDA**.
10. Amped **Replay** (saha), **DVRConv** (CCTV dönüştürme); yerli **IYON Suite**.

---

## Çalışma önerisi

1. Her SUNU için önce bu dosyadaki **kavram sorularını** kağıda yazarak cevapla.
2. `docs/index.html` → Adli Bilişim → ilgili bölüm → **20–30 soru** quiz.
3. Son gün: **Final hazırlık** bölümünü seç → 50+ soru karma test.
4. Vize konularını da unutma: final genelde tüm dönemi kapsar; SUNU 1–7 için mevcut 240 soru uygulamada duruyor.

**Toplam uygulama havuzu:** 426 soru (1–14 + final seçeneği).
