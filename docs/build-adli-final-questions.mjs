/** Final slaytları (8adli–14adli) soru üretici — build-adli-questions.mjs ile birleştirilir. */
export function addFinalQuestions(T) {
  // ===== SUNU 8 — Görüntü karşılaştırma ve ölçme (2) =====
  const s8 = [
    [8, "Stereo (stereografik) çift görüntülerde derinlik haritaları nasıl hesaplanır?", ["Tek kameradan zoom", "Yanlamasına kaydırılmış iki giriş görüntüsünden", "Sadece EXIF meta verisinden", "Sadece histogram eşitlemeden"], 1, "Stereo pairs: iki konumdan görüntü (8adli)."],
    [8, "Stereo kameralar slayta göre nasıl tasarlanır?", ["Tek mercek", "İki merceğe sahip özel tasarım", "Sadece yazılım simülasyonu", "Sadece termal sensör"], 1, "İki mercekli stereo kamera (8adli)."],
    [8, "Stereo ölçümde paralaks mesafeleri (d1-d2) hangi büyüklükle orantılıdır?", ["Sadece dosya boyutu", "İki nokta arasındaki yükseklik farkı (A ve B)", "Sadece renk kanalı", "Sadece GPS"], 1, "Denklem 1: paralaks → yükseklik farkı (8adli)."],
    [8, "Stereo ölçüm hangi ölçek aralığında rutin yapılabilir?", ["Sadece nanometre", "Kilometreden mikrometreye kadar", "Sadece metre", "Sadece piksel"], 1, "Hava fotoğrafçılığından SEM'e (8adli)."],
    [8, "Kalabalık yoğunluğu tahmininde mors örneğinde yakın plan fotoğraf ne için kullanılır?", ["Sadece renk", "Mors başına ortalama alanı belirlemek", "Sadece GPS", "Sadece ses"], 1, "Şekil 3.1: başına alan (8adli)."],
    [8, "Konser/siyasi etkinlik kalabalık görüntülerinde neden doğrudan kafa sayımı zor olabilir?", ["Kamera yok", "Görüş açısı ve ışıklandırma birçok kafayı gizleyebilir", "Sadece gece", "Sadece analog"], 1, "Şekil 3.2: açı ve ışık (8adli)."],
    [8, "Kalabalık yoğunluğu tahmininde Google Haritalar slaytta nasıl kullanılabilir?", ["Sadece navigasyon", "Seyircilerin büyük kısmının nerede durduğunu belirlemek", "Sadece hava durumu", "Sadece trafik"], 1, "Şekil 4: harita üzerinden yoğunluk (8adli)."],
    [8, "Toprak parçacığı görüntüleri Locard ilkesiyle nasıl ilişkilendirilir?", ["Sadece dijital hash", "Kişi olay yerine bırakmış veya olay yerinden almış olabilir", "Sadece ağ logu", "Sadece RAM"], 1, "Nesne ölçümleri: ayakkabı/lastik malzeme (8adli)."],
    [8, "Manuel eşikleme neden genellikle tercih edilmez?", ["Çok hızlı", "Tekrar üretilemezlik ve beklenti/arzu etkisi", "Yasak", "Sadece renkli görüntüde"], 1, "Eşikleme slaytı (8adli)."],
    [8, "Otsu yöntemi eşik seçiminde ne yapar?", ["Rastgele piksel seçer", "Her eşik ayarında grupları karşılaştırır; en ayırt edilebilir olanı seçer", "Sadece medyan", "Sadece XOR"], 1, "Otsu vs Student's t-test (8adli)."],
    [8, "Student's t-test eşiklemede hangi varsayımı yapar (slayt)?", ["Piksel sayısı sonsuz", "İki popülasyon Gauss dağılımına sahip noktasında kesin varsayım (nadiren gerçek)", "Renk yok", "Sadece binary"], 1, "Şekil 6.2 açıklaması (8adli)."],
    [8, "Otomatik eşikleme karmaşık yüzeylerde (ayak izi, kan sıçraması) neden daha az başarılı?", ["Çok basit", "Düzensiz yüzeyler ve desenler", "Sadece gece", "Sadece JPEG"], 1, "Şekil 7 (8adli)."],
    [8, "Morfolojik genişleme (dilation) eşiklenmiş görüntüde ne yapar?", ["Sadece renk değiştirir", "Çatlakları doldurur ancak lif boyutunu büyütür", "Dosyayı siler", "Sadece EXIF"], 1, "Şekil 8 morfoloji (8adli)."],
    [8, "Watershed bölütleme ne için kullanılır?", ["Sadece renk kalibrasyonu", "Birbirine temas eden nesneleri ayırt etmek", "Sadece ağ tarama", "Sadece hash"], 1, "Şekil 10 watershed (8adli)."],
    [8, "İkili görüntülerde AND, OR, EXOR (XOR), NOT hangi amaçla kullanılır?", ["Sadece sıkıştırma", "Boolean mantığı ile birleştirme/izole etme", "Sadece şifreleme", "Sadece OCR"], 1, "Şekil 11 (8adli)."],
    [8, "Dijital kameralar mutlak renk için neden spektrofotometre gerektirebilir?", ["Piksel yok", "RGB filtreler geniş aralık; farklı dalga boyları aynı sinyal üretebilir", "Sadece analog", "Sadece video"], 1, "Konum ve renk ölçümü (8adli)."],
    [8, "41 üreticiden mavi tükenmez mürekkep ayırt etmede RGB ile slaytta başarı oranı yaklaşık nedir?", ["%10", "%50", "%94", "%100"], 2, "Renk sinyalleri ile ayırt (8adli)."],
    [8, "Boyut ölçümünde alan genellikle nasıl belirlenir?", ["Sadece EXIF", "Eşiklenmiş sınır içindeki piksel sayısı", "Sadece dosya adı", "Sadece çevre"], 1, "Alan ölçümü (8adli)."],
    [8, "Çevre ölçümü neden zordur?", ["Her zaman düzgün", "Sınır düzensiz; çevre görüntü çözünürlüğünün fonksiyonu", "Sadece renk", "Sadece meta"], 1, "Büyüklük ve şekil (8adli)."],
    [8, "En/boy oranı gibi şekil tanımlayıcıları neden ölçekten bağımsız sayılır?", ["Piksel yok", "Oranlar; çözünürlük sınırlaması hariç", "Sadece analog", "Sadece 3D"], 1, "Şekil 17 (8adli)."],
    [8, "İskelet tabanlı şekil tanımlayıcı neyi ifade eder?", ["Sadece renk", "Topolojik özellikler; şeklin orta çizgisi", "Sadece histogram", "Sadece GPS"], 1, "Naylon lif lob sayısı örneği (8adli)."],
    [8, "Fraktal boyut ölçümü hangi bağlamda anılır?", ["Sadece ağ", "Pürüzlü sınır/yüzey; toner partikülü, hücre teşhisi vb.", "Sadece ses", "Sadece SQL"], 1, "Minkowski ölçüsü (8adli)."],
    [8, "Görüntü manipülasyonunda ilk kural slayta göre nedir?", ["Sadece JPEG sil", "Orijinal görüntünün kalıcı kopyasını tüm verilerle saklamak", "Sadece meta sil", "Sadece crop"], 1, "Manipülasyon algılama (8adli)."],
    [8, "Copy-move sahteciliğinin kesin işareti slaytta nedir?", ["Dosya küçük", "Aynı özelliğin tam veya neredeyse tam kopyalarını bulmak", "Sadece EXIF yok", "Sadece blur"], 1, "Rastgele gürültü varyasyonu (8adli)."],
    [8, "JPEG kes-yapıştır birleştirmede 8×8 bloklar neden ipucu verir?", ["Blok yok", "Parçalar tam hizalanmayabilir", "Sadece renk", "Sadece GPS"], 1, "JPEG blok hizası (8adli)."],
  ];
  s8.forEach((r) => T(8, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
  T(8, { type: "tf", q: "Stereo görüntülerde aynı sahne iki farklı yerden izlenir; konumlar arası mesafe veya açı bilinir (slayt).", answer: true, exp: "Stereo pairs temel ilke (8adli)." });
  T(8, { type: "tf", q: "Morfolojik açıklık (opening) başıboş pikselleri kaldırır ve ön plan bölgeleri arasındaki boşlukları açar (slayt).", answer: true, exp: "Morfolojik işlemler (8adli)." });
  T(8, { type: "tf", q: "Görüntüye herhangi bir şey eklemek slaytta her zaman kabul edilebilir.", answer: false, exp: "Genel kural: ekleme kabul edilemez; iyileştirme raporlanarak olabilir (8adli)." });
  T(8, { type: "tf", q: "Birkaç görüntünün kontrastını farklı ayarlayıp birleştirmek potansiyel olarak yanıltıcıdır (slayt).", answer: true, exp: "Manipülasyon uyarısı (8adli)." });
  T(8, { type: "fill", q: "Stereo ölçümde kaydırma mesafesi slaytta S harfiyle; alt rakım ______ olarak anılır.", answer: ["rakım", "Rakım", "alt rakım"], exp: "Şekil 2: S kaydırma, alt rakım (8adli)." });
  T(8, { type: "fill", q: "Eşiklenmiş görüntüde birbirine temas eden nesneleri ayırmak için ______ bölütleme kullanılır (İng. watershed).", answer: ["Watershed", "watershed", "havza"], exp: "Watershed bölütleme (8adli)." });
  T(8, { type: "fill", q: "Boolean işlemlerinde A ve B'nin yalnızca birinde olan pikseller için kullanılan işlem EXOR veya ______ (kısaltma).", answer: ["XOR", "xor"], exp: "Exclusive OR (8adli)." });
  T(8, { type: "fill", q: "Görüntü kaynağı tespiti sensör üzerindeki ______ desenlerindeki farklılıkları da kullanabilir (slayt).", answer: ["toz", "Toz"], exp: "Kamera sensör toz deseni (8adli)." });

  // ===== SUNU 9 — Görüntü işleme ve iyileştirme =====
  const s9 = [
    [9, "Kanıt görüntülerinin kalibre edilmesi slaytta genellikle nasıl kurulur?", ["Sadece EXIF", "Piksel aralığı başına bir uzunluk boyutu", "Sadece GPS", "Sadece hash"], 1, "Boyut kalibrasyonu (9adli)."],
    [9, "Kalibrasyon için L şeklinde cetvel neden tercih edilir?", ["Daha ucuz", "Dikey görünümü doğrular veya dik olmayan görünümü düzeltmeye yardım", "Sadece renk", "Sadece gece"], 1, "ABFO No.2 ölçeği (9adli)."],
    [9, "Renk kalibrasyonu için slaytta hangi standart anılır?", ["Sadece QR kod", "GretagMacbeth ColorChecker veya cetvel renk çipleri", "Sadece ASCII", "Sadece NTFS"], 1, "Şekil 3 (9adli)."],
    [9, "Yanak çürüğündeki kırmızı-mor renk slaytta neyi gösterir?", ["Eski çürük", "Taze çürük", "Sadece makyaj", "Sadece ışık"], 1, "Renk uzayları vaka (9adli)."],
    [9, "Bilgisayar ekranlarında yaygın renk uzayı slaytta hangisidir?", ["CMYK only", "RGB", "Sadece HSV tek kanal", "Sadece YUV video"], 1, "RGB ekran (9adli)."],
    [9, "İnsan görüş sistemine HSI'ye göre slaytta hangi uzay daha yakındır?", ["Sadece binary", "HSI renk uzayı", "Sadece CRC", "Sadece Base64"], 1, "HSI vs RGB (9adli)."],
    [9, "Ton (Hue) slaytta neyi ifade eder?", ["Sadece parlaklık", "Kırmızı, turuncu, sarı gibi renk ayrımı", "Sadece dosya boyutu", "Sadece piksel sayısı"], 1, "Renk uzayları tanım (9adli)."],
    [9, "Medyan filtre veya kenar keskinleştirmeyi RGB kanallarına ayrı uygulamak neye yol açabilir?", ["Renk sabit", "Renk kaymaları; kırmızı/yeşil/mavi oranları değişir", "Sadece hız artışı", "Sadece EXIF silme"], 1, "HSI parlaklık kanalına uygulama önerisi (9adli)."],
    [9, "ColorChecker renkleri neden seçilmiştir?", ["Rastgele", "Çoğu yazıcı ve ekranın üretebileceği CIE renk çizelgesi bölgesini kapsamak", "Sadece siyah-beyaz", "Sadece web"], 1, "Şekil 8 CIE (9adli)."],
    [9, "Nötr nokta renk ayarında slaytta hangi üç referans kullanılır?", ["Sadece mavi", "Siyah, beyaz ve gri temsil eden nötr alanlar", "Sadece yeşil", "Sadece kırmızı"], 1, "Şekil 10 lastik/plaka örneği (9adli)."],
    [9, "Suç mahalli fotoğrafında en iyi uygulama slayta göre nedir?", ["Eğik açı serbest", "Konunun yüzeye dik görüntülenmesi", "Sadece uzaktan", "Sadece flaş kapalı"], 1, "Görüntü düzeltme giriş (9adli)."],
    [9, "Perspektif düzeltmede fayans kan sıçraması örneğinde referans noktaları nasıl oluşturulur?", ["GPS", "Karo köşelerini işaretleme", "Sadece EXIF", "Sadece OCR"], 1, "Şekil 12 (9adli)."],
    [9, "Zoom lenslerde lens bozulması düzeltmesi neden zor?", ["Zoom yok", "Odak uzaklığına göre değişen bozulma; yazılım her ayarı bilmez", "Sadece analog", "Sadece gece"], 1, "Cep telefonu/gözetleme kameraları (9adli)."],
    [9, "Ara değerleme (interpolation) hangi durumlarda gerekir?", ["Sadece kaydetme", "Döndürme, ölçekleme, perspektif düzeltme sonrası yeni piksel değerleri", "Sadece silme", "Sadece hash"], 1, "Şekil 17 (9adli)."],
    [9, "En yakın komşu (nearest-neighbor) ara değerleme avantaj/dezavantajı slayta göre?", ["Çizgiler mükemmel", "Parlaklık/renk korur ama çizgileri ve kenarları deforme eder", "Her zaman en iyi", "Sadece 3D"], 1, "Interpolation (9adli)."],
    [9, "Çift doğrusal (bilinear) ara değerleme kaç komşu piksel kullanır?", ["1", "4 (en yakın dört)", "64", "256"], 1, "Bilinear tanım (9adli)."],
    [9, "Adli durumlarda fotoğraf büyütme için çift kübik tercih edilmemeli çünkü?", ["Çok yavaş", "İnce detay önemli olabilir; piksel değerleri değişir", "Yasak", "Sadece gece"], 1, "Adli uyarı (9adli)." ],
    [9, "Histogram eşitleme ne yapar?", ["Sadece renk değiştirir", "Her parlaklık tonundaki piksel alanlarını eşitlemeye yönelik parlaklık değiştirme", "Sadece crop", "Sadece EXIF"], 1, "Histogram eşitleme (9adli)."],
    [9, "Kümülatif histogram slaytta nasıl tanımlanır?", ["Sadece renk sayısı", "Her değerden daha koyu olan alan fraksiyonu", "Sadece dosya boyutu", "Sadece GPS"], 1, "Histogram eşitleme formül (9adli)."],
    [9, "Gri görüntüde en parlak piksel değeri slaytta histogram bağlamında kaç?", ["128", "255", "512", "1024"], 1, "255 gri ton (9adli)."],
    [9, "Renkli görüntüde histogram eşitleme slayta göre nerede uygulanmalı?", ["Her RGB kanalına ayrı (istenmeyen renk)", "Parlaklık verilerine (ör. Lab L kanalı); renk kanalları korunur", "Sadece alpha", "Sadece EXIF"], 1, "Şekil 23-24 (9adli)."],
  ];
  s9.forEach((r) => T(9, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
  T(9, { type: "tf", q: "Adli görüntüde değişiklik yapıldığında orijinal saklanmalı; değişiklikler yeni kopyada belirtilmeli (slayt).", answer: true, exp: "Kontrast/parlaklık uyarısı (9adli)." });
  T(9, { type: "tf", q: "Doygunluk (Saturation) gri ile kırmızı arasındaki ayrım gibi mevcut renk miktarını ifade eder (slayt).", answer: true, exp: "Renk uzayı tanımları (9adli)." });
  T(9, { type: "tf", q: "En yakın komşu ara değerleme adli incelemede ince detay için her zaman tercih edilir (slayta göre).", answer: false, exp: "Bicubic görsel iyi ama adlide yapılmamalı uyarısı (9adli)." });
  T(9, { type: "tf", q: "Histogram eşitleme aynı sahnenin farklı aydınlatmada çekilmiş görüntülerini karşılaştırmayı kolaylaştırabilir (slayt).", answer: true, exp: "Şekil 22 banka soygunu örneği (9adli)." });
  T(9, { type: "fill", q: "ABFO No. 2, Amerikan Adli ______ Kurulu kalibrasyon ölçeği olarak slaytta anılır.", answer: ["Odontoloji", "odontoloji"], exp: "ABFO ölçeği (9adli)." });
  T(9, { type: "fill", q: "Adobe Photoshop gibi programlar slaytta ______ ara değerleme yöntemini kullanır (bicubic).", answer: ["çift kübik", "çift küpsel", "bicubic", "Çift kübik"], exp: "Bicubic (9adli)." });
  T(9, { type: "fill", q: "Intensity (açıklık) slaytta ______ miktarını ifade eder (ör. koyu vs açık kırmızı).", answer: ["ışık", "Işık", "parlaklık", "Parlaklık"], exp: "Intensity tanımı (9adli)." });
  T(9, { type: "fill", q: "Perspektif düzeltmede ayak izi örneğinde güven işaretleri için cetvellerle özetlenen ______ gösterilir (slayt).", answer: ["alan", "Alan", "ölçek"], exp: "Şekil 13 cetvel alanı (9adli)." });

  // ===== SUNU 10 — Kanıt sunumu =====
  const s10 = [
    [10, "Görüntüleri jüriye sunmak için slayta göre en uygun yöntem hangisidir?", ["Sadece basılı kopya", "Ortak odak noktası olan geniş ekran monitör", "Sadece e-posta", "Sadece küçük telefon"], 1, "Görüntü ekranları (10adli)."],
    [10, "Yanlış renkler vaka için önemli olmasa bile jüride ne yapabilir?", ["Hiç etki yok", "Tepki ve yorumu önyargılı hale getirebilir", "Sadece hız artırır", "Sadece dosya büyür"], 1, "Renk sunumu (10adli)."],
    [10, "Sadece sonuçları göstermek neden kötü uygulama?", ["Çok hızlı", "Süreç sihir gibi görünebilir; bilimsellik kaybolur", "Yasak değil", "Sadece renk"], 1, "Prosedür açıklaması (10adli)."],
    [10, "İşleme sürecini göstermenin iyi yolu slaytta nedir?", ["Sadece son JPEG", "Adım adım sonuçları göstermek", "Sadece meta silmek", "Sadece crop"], 1, "Prosedür gösterimi (10adli)."],
    [10, "Yan yana karşılaştırmada slayta göre hangileri eşleşmeli?", ["Sadece dosya adı", "Ölçek, yönelim, benzer parlaklık ve kontrast", "Sadece EXIF", "Sadece GPS"], 1, "Karşılaştırmalar (10adli)."],
    [10, "Örgü deseni karşılaştırması neden zordur?", ["Aynı renk", "Renk farklılıkları ve farklı görüntü ölçekleri", "Sadece gece", "Sadece analog"], 1, "Şekil 7 (10adli)."],
    [10, "Adli animasyonların doğruluğu slayta göre neye bağlıdır?", ["Sadece yazılım sürümü", "Oluşturulması için kullanılan verilerin doğruluğu ve doğrulanabilirliği", "Sadece renk", "Sadece ses"], 1, "Dinamik modeller (10adli)."],
    [10, "Dinamik modelde küçük parametre değişikliği ne yapabilir?", ["Hiçbir şey", "Sonuçta büyük değişikliğe neden olabilir", "Sadece renk değişir", "Sadece EXIF"], 1, "Dinamik modeller (10adli)."],
    [10, "Mahkemede adli animasyon slayta göre ne yapmalıdır?", ["Sadece gösterilmeli", "Mevcut kanıtları desteklemeli ve doğrulamalı", "Her zaman kabul", "Sadece CGI"], 1, "Gereklilikler: uygunluk, özgünlük (10adli)."],
    [10, "Lastik sırtı ve ayakkabı tabanı modelleri için veritabanı hangi SWG tarafından tutulur?", ["FISWG", "SWGTREAD", "DIWG", "ISO only"], 1, "SWGTREAD (10adli)."],
    [10, "Boya yongaları karşılaştırma standartları hangi gruplarla ilişkilidir?", ["Sadece BTK", "SWGMAT ve ASTM", "Sadece NATO", "Sadece IEEE"], 1, "Standartlar (10adli)."],
    [10, "79.3 ± 1.2 cm gibi ifade slaytta neyi temsil eder?", ["Kesin değer", "Ölçüm belirsizliği", "Sadece dosya boyutu", "Sadece piksel"], 1, "Olasılık değerlendirme (10adli)."],
    [10, "Avukatlar için slaytta önerilen sunum biçimi hangisine yakındır?", ["Kesin tek sayı", "Gerçek değerin belirli aralık dışında olma olasılığının %1'den az olduğunu belirtmek", "Sadece 'büyük'", "Sadece 'küçük'"], 1, "İstatistik sunumu (10adli)." ],
  ];
  s10.forEach((r) => T(10, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
  T(10, { type: "tf", q: "Bilgisayar grafikleri ve animasyonlar kanıt sunumunda dönüştürücü olabilir (slayt).", answer: true, exp: "Bilgisayar grafikleri bölümü (10adli)." });
  T(10, { type: "tf", q: "Gauss istatistikleri ve standart sapma kavramları jüri üyelerinin çoğu için tanıdık olmayabilir (slayt).", answer: true, exp: "Olasılık değerlendirme (10adli)." });
  T(10, { type: "tf", q: "Kumaş izi karşılaştırmasında ölçek ve yön eşleştirmesi gerekir (slayt).", answer: true, exp: "Şekil 8 (10adli)." });
  T(10, { type: "tf", q: "Yaşlanma tahmini için yüz fotoğrafları kayıp çocuk aramada kullanılabilir (slayt).", answer: true, exp: "Şekil 12 çocuk yaşlandırma (10adli)." });
  T(10, { type: "fill", q: "Dinamik modellerde araçların konumlarını gösteren harita görünümü slaytta Şekil ______ olarak verilmiştir (örnek numara).", answer: ["10", "11"], exp: "Şekil 10 harita, 11 animasyon (10adli)." });
  T(10, { type: "fill", q: "Ters evrişim (deconvolution) örneği slaytta plaka alanı için Şekil ______'de gösterilmiştir.", answer: ["3"], exp: "Şekil 3 deconvolution (10adli)." });
  T(10, { type: "fill", q: "Ulusal parmak izi veritabanına ek olarak yerel ______ resimleri ve ehliyet fotoğrafları standart veritabanlarıdır (slayt).", answer: ["sabıka", "Sabıka"], exp: "Standartlar (10adli)." });

  // ===== SUNU 11 — Bilirkişilik =====
  const s11 = [
    [11, "6754 sayılı Bilirkişilik Kanunu bilirkişiyi nasıl tanımlar?", ["Sadece polis", "Uzmanlık/özel/teknik bilgi için oy ve görüş veren gerçek veya özel hukuk tüzel kişisi", "Sadece hakim", "Sadece avukat"], 1, "Tanım (11adli)."],
    [11, "Bilirkişinin sahip olması gereken niteliklerden biri değildir?", ["Dürüstlük", "Tarafsızlık", "Pazarlama becerisi", "Yetkinlik"], 2, "Dürüstlük, bağımsızlık, tarafsızlık, yetkinlik, güvenilirlik (11adli)."],
    [11, "Gerçeğe aykırı bilirkişilik TCK hangi madde?", ["243", "276", "134", "293"], 1, "TCK 276 (11adli)."],
    [11, "Bilirkişi siciline kayıt için temel eğitim slayta göre zorunlu mudur?", ["Hayır", "Evet, Bilirkişilik Temel Eğitimi zorunlu", "Sadece yurtdışı", "Sadece tıp"], 1, "Nasıl bilirkişi olunur (11adli)."],
    [11, "Bilirkişi listesine kayıt için uzmanlık alanında minimum çalışma süresi slaytta?", ["1 yıl", "En az 5 yıl fiilen", "20 yıl", "Süre yok"], 1, "Başvuru şartları (11adli)."],
    [11, "Bilirkişinin çekinme yetkisi HMK'da hangi maddeyle ilişkilidir?", ["m. 134", "m. 270/II", "m. 500", "m. 1"], 1, "Çekinme yetkisi (11adli)."],
    [11, "Bilirkişi ücreti HMK hangi madde?", ["m. 270", "m. 283", "m. 67", "m. 134"], 1, "Ücret ve giderler m.283 (11adli)."],
    [11, "Bilirkişi hangi konuda inceleme yapabilir?", ["Her hukuki mesele", "Çözümü özel veya teknik bilgi gerektiren durumlar; hukuki meselede başvurulamaz", "Sadece trafik", "Sadece tıp"], 1, "İnceleme konusu (11adli)."],
    [11, "Listeye kayıtlı bilirkişi görevi kabul etmekle yükümlü mü?", ["Hayır, her zaman", "Evet, kural olarak yükümlü", "Sadece ceza", "Sadece idare"], 1, "Görevden kaçınamama (11adli)."],
    [11, "Bilirkişiler bölge kurulları listelerinden nasıl seçilir?", ["Rastgele internet", "Bölge kurullarınca düzenlenen listelerden", "Sadece BTK", "Sadece üniversite"], 1, "Görevlendirme (11adli)."],
    [11, "Raporu süresinde vermeyen bilirkişiye ne olabilir?", ["Ödül", "Görevden alınıp yerine başka bilirkişi; yeni görev verilmez", "Sadece uyarı", "Sicilden otomatik silinme her zaman"], 1, "Süre ve mazeret (11adli)."],
    [11, "Görev tebliğinden sonra uzmanlık alanına girmiyorsa bilirkişi ne yapmalı?", ["Sessiz kalır", "En geç bir hafta içinde mercie bildirmek", "Raporu yazar", "Dosyayı siler"], 1, "Tebliğ sonrası (11adli)."],
    [11, "Bilirkişi raporuna itiraz süresi hukuk yargısında slayta göre?", ["1 gün", "Tebliğden itibaren iki hafta içinde", "1 yıl", "Süre yok"], 1, "İtiraz (11adli)."],
    [11, "Temel eğitim süresi slayta göre en az kaç ders saati?", ["8", "24 (18 teorik + 6 uygulama)", "100", "1"], 1, "Temel eğitim içeriği (11adli)."],
    [11, "Bilirkişilik temel eğitimi geçerlilik süresi?", ["Sonsuz", "3 yıl", "1 ay", "10 yıl"], 1, "3 yıl geçerlilik (11adli)."],
    [11, "Yenileme eğitimi sıklığı slayta göre?", ["Her ay", "Üç yılda bir, en az 6 saat", "Hiç", "Her 10 yıl"], 1, "Yenileme eğitimi (11adli)."],
    [11, "UYAP Bilirkişi Portal'ın amacı nedir?", ["Sadece e-posta", "Bilirkişilerin dosya işlemlerini adliyeye gitmeden online yapması", "Sadece ödeme", "Sadece eğitim"], 1, "UYAP portal (11adli)."],
    [11, "Bilirkişi etik ilkelerinden biri?", ["Reklam yapmak serbest", "Menfaat elde etme yasağı", "Görevi reddetmek serbest her zaman", "Raporu değiştirmek serbest"], 1, "Etik ilkeler (11adli)."],
    [11, "Bilirkişi raporunda yer verilmesi gerekenlerden biri değildir?", ["İnceleme yöntemi", "Gerekçeli sonuç", "Hakimin yerine hukuki nitelendirme", "Bilimsel ve teknik dayanaklar"], 2, "Hukuki nitelendirme hakime ait; rapor içeriği listesi (11adli)."],
    [11, "Bilirkişi başka uzman bilirkişiyle işbirliği talebi ne anlama gelir?", ["Sadece sekreter", "Konunun bir diğer uzmanıyla istişare; yardımcı kullanmak değil", "Görevi devretmek", "Raporu iptal"], 1, "İşbirliği (11adli)."],
    [11, "Bilirkişi raporu taraflara nasıl ulaşmalı?", ["Bilirkişi doğrudan", "Mahkeme kanalıyla; duruşmadan önce tebliğ", "Sadece sosyal medya", "Sadece avukat cebinde"], 1, "Teslim (11adli)."],
  ];
  s11.forEach((r) => T(11, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
  T(11, { type: "tf", q: "Bilirkişiler bölge kurulları tarafından re'sen veya başvuru üzerine denetlenebilir (slayt).", answer: true, exp: "Denetim (11adli)." });
  T(11, { type: "tf", q: "CMK 67 uyarınca bilirkişi hukuki nitelendirme ve değerlendirme yapabilir (slayt).", answer: false, exp: "Sadece teknik/uzmanlık hususları; hukuki nitelendirme hakime ait (12adli CMK 67)." });
  T(11, { type: "tf", q: "Adlî Tıp veya Yüksek Sağlık Şurası gibi resmi bilirkişiler görevi kabulden kaçınamaz (slayt).", answer: true, exp: "Görevden kaçınamama (11adli)." });
  T(11, { type: "tf", q: "Bilirkişi raporu teslim edildikten sonra bilirkişi üzerinde değişiklik yapamaz; eksiklik varsa hakimi haberdar etmeli (slayt).", answer: true, exp: "Rapor teslimi (11adli)." });
  T(11, { type: "fill", q: "Bilirkişilik Kanunu sayılı kanun: ______ (sayı).", answer: ["6754"], exp: "6754 sayılı kanun (11adli)." });
  T(11, { type: "fill", q: "Bilirkişinin dürüstlük ihlali TCK ______. madde ile cezalandırılabilir (slayt atıf).", answer: ["276"], exp: "TCK 276 (11adli)." });
  T(11, { type: "fill", q: "Bilirkişi etik ilkeleri: yetkinlik, bağımsızlık, dürüstlük ve ______.", answer: ["tarafsızlık", "Tarafsızlık"], exp: "Etik liste (11adli)." });
  T(11, { type: "fill", q: "Temel eğitime katılmayanlar derslerin 1/______'sine devam etmezse ilişik kesilir (slayt).", answer: ["12", "oniki"], exp: "1/12 devam şartı (11adli)." });

  // ===== SUNU 12 — Uzman mütalaa =====
  const s12 = [
    [12, "Mütalaa kelimesinin anlamı slayta göre?", ["Sadece mahkeme kararı", "Düşünme ve inceleme sonucu görüş, fikir, kanaat", "Sadece tanık ifadesi", "Sadece polis tutanağı"], 1, "Giriş (12adli)."],
    [12, "Uzman mütalaa ceza davalarında hangi kanun maddesi?", ["CMK 134", "CMK 67", "TCK 243", "HMK 270"], 1, "CMK 67 (12adli)."],
    [12, "Uzman mütalaa hukuk davalarında hangi kanun maddesi?", ["HMK 293", "HMK 67", "CMK 276", "TBK 1"], 0, "HMK 293 (12adli)."],
    [12, "CMK 67/3 bilirkişi raporunda ne yapamaz?", ["İmzalamak", "Hukuki nitelendirme ve hakimin yapacağı değerlendirmeler", "Sonuç yazmak", "Yöntem belirtmek"], 1, "CMK 67 fıkra 3 (12adli)."],
    [12, "Listede olmayan bilim insanı uzman mütalaası verebilir mi?", ["Hayır, asla", "Evet, taraflar uzmanına başvurabilir", "Sadece hakim", "Sadece savcı"], 1, "SSS 2.1 (12adli)."],
    [12, "Uzman mütalaası ile bilirkişi raporu arasında hukuki üstünlük var mı?", ["Bilirkişi her zaman üstün", "Fark veya üstünlük yok; ikisi de takdiri delil", "Uzman her zaman üstün", "İkisi de bağlayıcı"], 1, "SSS 2.5 (12adli)."],
    [12, "Uzman mütalaası kimler tarafından alınabilir?", ["Sadece mahkeme", "Taraflar, cumhuriyet savcısı veya avukat", "Sadece polis", "Sadece bilirkişi"], 1, "SSS 2.6 (12adli)."],
    [12, "CMK/HMK uzman mütalaası için ayrıca süre istenemez kuralı neyi önler?", ["Rapor yazımını", "Yargılamanın uzamasına doğrudan katkı iddiasını", "Duruşmayı", "Delil toplamayı"], 1, "SSS 2.9 (12adli)."],
    [12, "Görev süresince bilirkişi kendi davasında uzman görüşü verebilir mi?", ["Evet", "Hayır; görev aldığı davada uzman görüşü beyan edemez", "Sadece ceza", "Sadece hukuk"], 1, "Pratik kimler verebilir 2.11 (12adli)."],
    [12, "Adli belge incelemesi ideal olarak nerede yapılmalı?", ["Sadece fotokopi", "Belgenin aslı üzerinde", "Sadece PDF meta", "Sadece e-posta"], 1, "Belge aslı (12adli son bölüm)."],
    [12, "Fotokopi ile inceleme yapılırsa raporda ne belirtilir?", ["Hiçbir şey", "Kısıtlılıklar belirtilir", "Sadece hash", "Sadece tarih"], 1, "Asıl yoksa kısıtlılık (12adli)." ],
    [12, "Uzman mütalaasının avantajlarından biri?", ["Daha ucuz her zaman", "Konuda derinlemesine uzman seçimi; literatür ve özgün olgular", "Mahkeme ataması zorunlu", "Süre her zaman uzar"], 1, "Avantajlar 2.7 (12adli)." ],
  ];
  s12.forEach((r) => T(12, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
  T(12, { type: "tf", q: "Birden çok bilirkişi farklı görüşleri gerekçeleriyle rapora yazmalıdır (CMK 67).", answer: true, exp: "CMK 67/2 (12adli)." });
  T(12, { type: "tf", q: "Uzman kişi çağrıldığı duruşmaya geçerli özrü olmadan gelmezse rapor değerlendirmeye tabi tutulmaz (HMK 293).", answer: true, exp: "HMK 293/3 (12adli)." });
  T(12, { type: "tf", q: "Mahkeme bilirkişi raporuna uymakla yükümlü değildir (slayt).", answer: true, exp: "Takdiri delil (12adli)." });
  T(12, { type: "tf", q: "Ücretli uzman mütalaası tarafsızlığı her zaman bozar (slayt).", answer: false, exp: "Çelişki sorularla ve karşı uzman görüşüyle ortaya çıkabilir (12adli 2.8)." });
  T(12, { type: "fill", q: "Bilimsel mütalaa için alternatif ad: Uzman ______ veya Uzman Görüşü.", answer: ["Mütalaası", "mütalaası", "Görüşü", "görüşü"], exp: "Tanımlamalar (12adli)." });
  T(12, { type: "fill", q: "Adli belge inceleme alt başlıkları: yazı, imza, sahtecilik ve ______ inceleme.", answer: ["yerinde", "Yerinde"], exp: "Adli belge bölümü (12adli)." });
  T(12, { type: "fill", q: "Uzman mütalaası verebilecek resmi kurumlardan biri slaytta ______ olarak anılır.", answer: ["TÜBİTAK", "tübitak", "Tubitak"], exp: "Pratik kimler 2.11 (12adli)." });

  // ===== SUNU 13 — Adli belge =====
  const s13 = [
    [13, "Adli belge incelemeleri neyi amaçlar?", ["Sadece OCR", "Belgelerdeki sahteciliklerin tespiti", "Sadece arşivleme", "Sadece şifreleme"], 1, "Giriş (13adli)."],
    [13, "Adli belge incelemesi hangi bilim dalının temel koludur?", ["Sadece astronomi", "Adli bilimler", "Sadece ekonomi", "Sadece biyoloji"], 1, "Giriş (13adli)."],
    [13, "Külli sahtecilik nedir?", ["Sadece tarih değiştirme", "Belgenin tamamının model alılarak birebir sahte oluşturulması", "Sadece imza", "Sadece silme"], 1, "6.1 Külli (13adli)."],
    [13, "Kısmi sahtecilik türlerinden biri değildir?", ["Değer yönünden", "Zaman yönünden", "Mana yönünden", "GPS yönünden"], 3, "Değer, zaman, mana (13adli)."],
    [13, "VSC-1 cihazı hangi firma ile ilişkilidir?", ["Projectina", "Foster & Freeman", "Microsoft", "Google"], 1, "VSC İngiliz firma (13adli)."],
    [13, "TÜBİTAK-UEKAE belge inceleme cihazları slaytta?", ["VSC only", "Forensic XP 4010 ve 4010 D", "Sadece iPhone", "Sadece dd"], 1, "Forensic XP (13adli)."],
    [13, "ESDA cihazı ne için kullanılır?", ["Sadece ses", "Fulaj (baskı izi) incelemesi; yazıdan önce/sonra", "Sadece DNA", "Sadece ağ"], 1, "ESDA (13adli)."],
    [13, "TLC (ince tabaka kromatografisi) ne için kullanılır?", ["Sadece video", "Maddelerin ayrılması ve kalitatif analiz", "Sadece GPS", "Sadece hash"], 1, "TLC (13adli)."],
    [13, "Üzeri karalanmış yazılar için etkin yöntemler?", ["Sadece basılı okuma", "Infrared, luminesans, ultraviyole vb. spektral", "Sadece silme", "Sadece OCR"], 1, "Karalama (13adli)."],
    [13, "Değer yönünden kısmi sahtecilik örneği?", ["Sadece fotoğraf değişimi", "Çek/senet meblağına rakam ekleme", "Sadece mühür", "Sadece pul"], 1, "Değer sahteciliği (13adli)."],
    [13, "Zaman yönünden kısmi sahtecilik?", ["Sadece renk", "Tarih kısımlarında değişiklik", "Sadece font", "Sadece kağıt"], 1, "Zaman sahteciliği (13adli)."],
    [13, "Sürşarj yöntemiyle sahtecilik?", ["Sadece ekleme", "Mevcut harf/rakamın değiştirilmesi", "Sadece yırtma", "Sadece yakma"], 1, "Değiştirme (13adli)."],
    [13, "Fotoğraf değişikliği sahteciliği?", ["Sadece tarih", "Belgedeki fotoğrafın sökülmesi veya üzerine yeni yapıştırma", "Sadece QR", "Sadece barkod"], 1, "7.4 (13adli)."],
    [13, "Grafoloji terimi hangi dillerden oluşur?", ["Latin only", "Graphe (yazmak) + logos (bilim)", "Sadece Türkçe", "Sadece Fransızca"], 1, "1897 Paris (13adli)."],
    [13, "Camillo Baldi grafoloji alanında ne ile anılır?", ["İlk bilgisayar", "El yazısında sistematik gözlemler yapan ilk kişilerden", "Sadece polis", "Sadece kimya"], 1, "Grafoloji tarihi (13adli)."],
    [13, "Adli belge incelemesi yapılan yerlerden biri?", ["Sadece banka", "Adli Tıp Kurumu Fizik İhtisas Belge İnceleme Şubesi", "Sadece okul", "Sadece market"], 1, "Yerler listesi (13adli)."],
    [13, "Dijital belge sahteciliğinde yeni biçimler slaytta?", ["Sadece kağıt", "Metadata değişikliği, PDF manipülasyonu, yapay zekâ destekli içerik", "Sadece el yazısı", "Sadece mühür"], 1, "Bilgisayar mühendisliği bölümü (13adli)."],
    [13, "CEDAR veri seti hangi bağlamda anılır?", ["Sadece yüz", "İmza sahteciliği; gerçek ve sahte imzalar", "Sadece plaka", "Sadece DNA"], 1, "Derin öğrenme tez örneği (13adli)."],
  ];
  s13.forEach((r) => T(13, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
  T(13, { type: "tf", q: "Külli sahtecilikte güvenlik özellikleri (filigran, hologram) genelde sahte belgede eksik kalır (slayt).", answer: true, exp: "Külli sahtecilik (13adli)." });
  T(13, { type: "tf", q: "Kimyasal belge inceleme yöntemleri belgelere zarar verebilir; optik yöntemler geliştirilmiştir (slayt).", answer: true, exp: "Videospektral geçiş (13adli)." });
  T(13, { type: "tf", q: "Mana yönünden sahtecilik sadece tarih değiştirmeyi kapsar (slayta göre).", answer: false, exp: "Ekleme, çıkarma, değiştirme ile yeni anlam (13adli)." });
  T(13, { type: "tf", q: "Grafoloji uzmanları yazım hızı, basınç, eğim gibi unsurları değerlendirir (slayt).", answer: true, exp: "Sahtecilik tespiti (13adli)." });
  T(13, { type: "fill", q: "Kısmi sahtecilik yöntemleri: ekleme, değiştirme (sürşarj), silme ve ______ değişikliği.", answer: ["fotoğraf", "Fotoğraf"], exp: "7. bölüm (13adli)." });
  T(13, { type: "fill", q: "Video Spektral Comparator kısaltması ______.", answer: ["VSC", "vsc"], exp: "VSC cihazı (13adli)." });
  T(13, { type: "fill", q: "Tamamen sahte belge düzenleme slaytta ______ sahtecilik olarak adlandırılır.", answer: ["külli", "Külli", "küllî"], exp: "Külli sahtecilik (13adli)." });
  T(13, { type: "fill", q: "Belge incelemesinde görsel büyüteç olarak ______ kullanılır (slayt).", answer: ["lup", "Lup", "büyüteç"], exp: "Lup (13adli)." });

  // ===== SUNU 14 — Laboratuvar yazılımları =====
  const s14 = [
    [14, "FISWG ve DIWG slaytta ne olarak verilmiştir?", ["Türk kurumları", "Uluslararası bilimsel çalışma grupları örnekleri", "Sadece yazılım", "Sadece kameralar"], 1, "Giriş grupları (14adli)."],
    [14, "Türkiye'de adli görüntü uzmanları için ortak platform slayta göre?", ["Her zaman var", "Henüz oluşturulmamış ortak çalışma grubu", "Sadece BTK", "Sadece polis"], 1, "Giriş (14adli)."],
    [14, "Laboratuvar çalışmaları kategorilerinden biri?", ["Sadece ağ sniffing", "Manipülasyon incelemeleri", "Sadece antivirüs", "Sadece BIOS"], 1, "4 kategori (14adli)."],
    [14, "Amped FIVE'in birincil amacı?", ["Sadece e-posta", "Adli görüntü incelemede detayları en az hatayla incelemek ve geliştirmek", "Sadece format atma", "Sadece hash"], 1, "Amped FIVE (14adli)."],
    [14, "Amped FIVE'de işlemler neden 'filtreleme' konseptiyle çalışır?", ["Hız için", "Orijinal materyalin değişmemesi için", "Yasak değil", "Sadece renk"], 1, "Orijinal koruma (14adli)."],
    [14, "Amped FIVE iş akışında ilk adım?", ["Raporlama", "Yükleme/İçe Aktarma", "Sadece silme", "Sadece crop"], 1, "6 adımlı akış (14adli)."],
    [14, "Amped Replay kimler için tasarlanmıştır?", ["Sadece hakim", "Olay yeri personeli, asayiş; saha inceleme", "Sadece laboratuvar", "Sadece üniversite"], 1, "Amped Replay (14adli)."],
    [14, "Amped DVRConv ne sorununu çözer?", ["Sadece ses", "CCTV/DVR formatlarının Windows'ta açılmaması; adli açıdan sağlam dönüştürme", "Sadece GPS", "Sadece RAM"], 1, "DVRConv (14adli)."],
    [14, "Cognitech Tri-Suite üç ana modül?", ["Word, Excel, PowerPoint", "AutoMeasure, VideoActive, Video Investigator", "Volatility, EnCase, FTK", "Linux, Mac, Windows"], 1, "Tri-Suite (14adli)."],
    [14, "AutoMeasure özelliği?", ["Sadece OCR", "360° kamera algılama; distorsiyon giderme; tek kareden 3B ölçüm", "Sadece e-posta", "Sadece hash"], 1, "AutoMeasure (14adli)."],
    [14, "Ocean Systems'de dTective hangi modülle video renk uzayı ayrılır?", ["ClearID", "dVeloper", "Sadece Replay", "Sadece hashdump"], 1, "dTective (14adli)."],
    [14, "arithMATIC filtresi örnek kullanım?", ["Sadece renk", "Oda güvenlik kamerası önce/sonra kare farkı; hırsızlık kanaati", "Sadece GPS", "Sadece DNA"], 1, "arithMATIC (14adli)."],
    [14, "ClearID özelliği?", ["Sadece silme", "Gizli ayrıntıları ortaya çıkarma; katmanlı işlem ve doğrulama raporu", "Sadece şifreleme", "Sadece boot"], 1, "ClearID (14adli)."],
    [14, "MotionDSP'nin 'süper çözünürlük' ne yapar?", ["Sadece crop", "Videoyu yeniden oluşturma, çözünürlük artırma, gürültü giderme", "Sadece meta", "Sadece EXIF"], 1, "MotionDSP (14adli)."],
    [14, "Forevid hangi ülke laboratuvarında geliştirilmiştir?", ["Türkiye", "Finlandiya Ulusal Soruşturma Bürosu", "ABD only", "Almanya only"], 1, "Forevid (14adli)."],
    [14, "Videntifier ne yapar?", ["Sadece yazdırma", "Medya cihazlarında şüpheli videoları otomatik tarama ve listeleme", "Sadece antivirüs", "Sadece DNS"], 1, "Videntifier (14adli)."],
    [14, "IYON yazılımı kim tarafından geliştirilmiştir?", ["Google", "TÜBİTAK", "Microsoft", "Apple"], 1, "IYON Suite (14adli)."],
    [14, "Halistoprak tezinde karşılaştırılan yazılımlardan biri değildir?", ["Amped Five", "Cognitech Video Investigator", "Microsoft Word", "Forevid"], 2, "5 yazılım karşılaştırması (14adli)."],
    [14, "Tez değerlendirmesinde filtre çeşitliliği ve hız açısından en iyi yazılım?", ["Forevid", "Amped Five", "IYON only", "Word"], 1, "Değerlendirme (14adli)."],
    [14, "Cognitech Video Investigator kullanım kolaylığı slaytta?", ["En kolay", "En düşük; filtre çok ama uygulama uzun", "Orta", "Yok"], 1, "Değerlendirme (14adli)."],
    [14, "Forevid slaytta fotoğraf karelerinde?", ["En iyi", "Etkili sonuç vermemektedir", "Yasak", "Sadece video"], 1, "Forevid değerlendirme (14adli)."],
    [14, "IYON Suite değerlendirmesi?", ["En hızlı", "Yerli/milli; gelişmeye ihtiyaç; hız ve kullanım kolaylığı geride", "En kötü her alanda", "Kullanılmaz"], 1, "IYON değerlendirme (14adli)."],
  ];
  s14.forEach((r) => T(14, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
  T(14, { type: "tf", q: "Amped FIVE raporu filtre ve parametrelerle tekrarlanabilirlik için otomatik rapor oluşturabilir (slayt).", answer: true, exp: "Raporlama adımı (14adli)." });
  T(14, { type: "tf", q: "VideoActive GPS konum belirleme ve gerçek zamanlı video işleme ile ilişkilidir (slayt).", answer: true, exp: "VideoActive (14adli)." });
  T(14, { type: "tf", q: "iNPUT-ACE VFR Lightboard araç hızını videodan hesaplamaya yardım eder (slayt).", answer: true, exp: "iNPUT-ACE (14adli)." });
  T(14, { type: "tf", q: "Kinesense sadece masaüstü sunucu için tasarlanmış; taşınabilir değildir (slayta göre).", answer: false, exp: "Taşınabilir çözüm (14adli)." });
  T(14, { type: "fill", q: "Amped yazılım paketlerinden biri: Amped ______ (saha/oynatma aracı).", answer: ["Replay", "replay"], exp: "Amped Replay (14adli)." });
  T(14, { type: "fill", q: "Ocean Systems görüntü iyileştirme modülü ______ (ClearID veya dTective — iyileştirme odaklı ClearID).", answer: ["ClearID", "clearid"], exp: "ClearID modülü (14adli)." });
  T(14, { type: "fill", q: "FOCLAR yazılım ailesinde görüntü iyileştirme aracı ______ olarak anılır (slayt).", answer: ["Impress", "impress"], exp: "Foclar Impress (14adli)." });
  T(14, { type: "fill", q: "Tezde karşılaştırılan yerli yazılım: IYON ______.", answer: ["Suite", "suite", "SUITE"], exp: "IYON Suite (14adli)." });
}
