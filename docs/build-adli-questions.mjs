import fs from "fs";
const out = [];
function T(topic, o) {
  out.push({ topic, ...o });
}

// ===== SUNU 1 =====
const s1 = [
  [1, "Olay yerinde maddi suç delilleri kaç ana başlık altında toplanabilir?", ["2", "3", "4", "5"], 2, "Biyolojik, Kimyasal, Fiziksel, İzler (dört başlık)."],
  [1, "Locard'ın değişim prensibine göre bilişim sistemlerinde aşağıdakilerden hangisi vurgulanır?", ["İz bırakılmaz", "İz bırakmadan işlem neredeyse imkansızdır", "Dijital iz yoktur", "Prensip yalnızca ağa uygulanır"], 1, "Değişim prensibi bilişim sistemlerinde de geçerlidir."],
  [1, "Adli bilişim inceleme süreci beş aşamada anlatılmıştır. Aşamalardan biri aşağıdakilerden hangisidir?", ["Kurumsal pazarlama", "Raporlama", "Borsa analizi", "Fiziksel baskı"], 1, "Hazırlık, Toplama, İnceleme, Çözümleme, Raporlama."],
  [1, "Adli bilişimin dört alt dalından biri aşağıdakilerden hangisidir?", ["Ahşap adli bilişimi", "Ağ ve İnternet adli bilişimi", "Beton adli bilişimi", "Enerji adli bilişimi"], 1, "Bilgisayar, ağ/internet, gömülü, sosyal ağ adli bilişimi."],
  [1, "Türkiye mevzuatında adli bilişimle ilgili düzenleme özetle hangi kanunda m. 134 ile anılır?", ["CMK", "TBK", "HMK", "KVKK"], 0, "Ceza Muhakemesi Kanunu m. 134 ve Yönetmelik m. 17."],
  [1, "Computer Forensics ifadesi sonradan neden 'Digital Forensics' ile de kullanılır?", ["Daha kısa yazılır", "Elektronik deliller yalnızca PC'de kalmamıştır", "Eski ifade yasaklandı", "Sadece kamera için"], 1, "Slaytta digital forensics genelleştirilmesi anlatılmıştır."],
  [1, "Adli bilişim 'bilgisayar adli bilimi' ile ilişkili kavram olarak hangi İngilizce terime karşılık gelir?", ["web design", "computer forensics", "kernel panic", "router config"], 1, "Computer forensics / bilgisayar adli bilimi."],
  [1, "Adli bilişim 5N1K benzeri hangi soru setine cevap arar?", ["Sadece ne zaman", "Ne, nerede, neden, ne zaman, nasıl, kim", "Sadece kaç", "Sadece maliyet"], 1, "5N1K benzeri sorular slayttadır."],
  [1, "Adli tıp ve adli kimya hangi tür maddi delil gruplarında uzmanlık sağlar?", ["Yalnızca iz", "Biyolojik ve kimyasal maddi deliller", "Yalnızca ses", "Yalnızca metal"], 1, "Giriş: biyolojik ve kimyasal delil değerlendirmesi."],
  [1, "Bilgi güvenliği, hukuk ve bilgisayar güvenliğinin kesiştiği alt alan slayta göre hangisidir?", ["Adli bilişim", "Grafik tasarım", "İşletme", "Tarih"], 0, "Tasnif: Bilgi güvenliği altında adli bilişim."],
  [1, "Aşağıdakilerden hangisi adli bilişimde değerlendirilebilen delil tipi slayttaki örneklerden değildir?", ["E-posta kayıtları", "Bulaşık makinesi motoru hızı (teknik dava yoksa)", "SMS/Whatsapp", "Sistem olay kayıtları"], 1, "Bilgisayar/iletişim kayıtları örneklenmiştir."],
  [1, "Dijital içerik koruma açıklaması bağlamında hangisi popüler tekniklerden biridir?", ["DNS çözümleme", "Filigranlama (watermarking) ve steganografi", "Ping", "NFC eşleme"], 1, "SUNU1 son bölümlerinde watermarking ve steganografi vurgulanır."],
  [1, "Aktif güvenlik önlemlerinin sınıflandırılması slayta göre aşağıdakileri içerir:", ["Sadece antivirüs", "Filigran ve steganografi gibi yöntemler (aktif)", "Sadece yedekleme", "Sadece kablo bağlama"], 1, "Aktif önlemler yardımcı bilgi gerektirir (filigran/steganografi)."],
  [1, "Steganografi; istihbarat ve terör bağlamında slayta göre neden dikkat çekicidir?", ["Çünkü dosya yok", "Görüntü veya medya içine bilgi gizlemek", "Sadece donanım hatası", "Sadece ağ hızı"], 1, "Görüntü içine metin/görsel gizleme vurgulanır."],
  [1, "Dijital görüntü bütünlüğü tehditleri neleri kapsar? (slayt)", ["Görüntülerin manipüle edilmesi ve sahtecilik riski", "Sadece basılı gazete", "Sadece analog fotoğraf", "Görüntü yok artık"], 0, "Photoshop, Gimp vb. ile manipülasyon; sahte haber hızı."],
];
s1.forEach((row) => T(1, { type: "mc", q: row[1], options: row[2], answer: row[3], exp: row[4] }));
T(1, { type: "tf", q: "Hazırlık aşaması, bazı çalışmalarda adli bilişim süreç dışı bırakılabilir (slaytta not).", answer: true, exp: "Aşama 1 bazen dışlanabilir notu vardır." });
T(1, { type: "tf", q: "Pasif güvenlik önlemleri, ek yardımcı bilgi gerektirmeyen doğrulama yöntemlerini de kapsar (slaytta tanıtım).", answer: true, exp: "Aktif/pasif ayrımı anlatılmıştır." });
T(1, { type: "tf", q: "Adli bilişim yalnızca mahkeme süreçlerinde değil; fikri mülkiyet taramalarında da kullanılabilir.", answer: true, exp: "Güvenlik/mahremiyet ve IP araması alanları anılır." });
T(1, { type: "tf", q: "Maddi suç delilleri arasında sadece dijital deliller vardır; biyolojik delil yoktur.", answer: false, exp: "Biyolojik, kimyasal, fiziksel, iz ayrımları vardır." });
T(1, { type: "fill", q: "Maddi suç delilleri dört kategoride: biyolojik, kimyasal, fiziksel, ______ delilleri.", answer: ["iz", "i̇z", "i̇zler", "izler"], exp: "Dördüncü kategori: iz." });
T(1, { type: "fill", q: "Değişim prensibi Locard ______ olarak da anılır.", answer: ["teoremini", "teoremi", "teorem", "teoremi "], exp: "Locard teoremi = Değişim prensibi." });
T(1, { type: "fill", q: "Adli bilişim aşamaları slayttaki sıraya göre: Hazırlık, Toplama, İnceleme, Çözümleme, ______.", answer: ["raporlama", "Raporlama"], exp: "Beşinci aşama Raporlama." });
T(1, { type: "fill", q: "CMK m. ______ ve yönetmelik m. 17 adli bilişimle ilgili hükümler içerir (slayt).", answer: ["134"], exp: "CMK 134." });

// ===== SUNU 2 =====
const s2m = [
  [2, "Sektör, sabit diskte veri depolamanın en küçük birimi olarak slayta göre genellikle kaç bayt tutar?", ["128", "512", "2048", "1"], 1, "Genellikle 512 bayt."],
  [2, "Ortam verisi (Ambient Data) aşağıdakilerin hangisinde bulunabilir?", ["Sadece görev çubuğu", "Dosya boşluğu, ayrılmamış kümeler, sanal bellek gibi alanlarda", "Sadece router log", "Sadece DNS"], 1, "Erişilemeyen alanlardaki veriler (Ambient Data)."],
  [2, "Aktif dosya/veri (Active Data) neyi ifade eder?", ["Silinmiş tüm gizli veri", "Silinmeyen ve normal kullanımda erişilebilen veri", "Sadece RAM", "Sadece CMOS"], 1, "Aktif veri tanımı: silinmeyen, kolay erişilebilen."],
  [2, "Case Folder (Dava dosyası) aşağıdakilerden hangisidir?", ["Yalnızca Word dosyası", "Olayla ilgili dijital imajları içeren dava dijital dosyası", "Fiziksel kutu", "Sadece e-posta"], 1, "Dava dosyası: tüm imajlar."],
  [2, "Jumplists hangi amaçla kullanılabilir?", ["Disk formatlamak", "Windows'ta belirli dosyaların kullanım geçmişi", "BIOS ayarı", "Port yönetimi"], 1, "Windows 7+ Jumplists."],
  [2, "Hash (karma) aynı olduğunda slayttaki yorum aşağıdakilerden hangisine yakındır?", ["Dosyalar kesin farklıdır", "Bir kopyanın orijinaliyle aynı olduğu neredeyse garanti", "Hash kullanılamaz", "Sadece disk için geçerli"], 1, "Eşleşen karmanın aynılığı neredeyse garanti ifadesi."],
  [2, "Acquisition/İmaj terimi slayta göre aşağıdakilere en yakındır:", ["Dava dilekçesi", "Bilgisayarın bit-bit kopyası / adli çalışma görüntüsü", "E-posta imzası", "Antivirüs taraması"], 1, "İmaj: bit-bit kopya veya adli image."],
  [2, "bit-to-bit kopya tanımı hangisini içerir?", ["Sadece açık dosyalar", "Tahsisine bakmaksızın ardışık her sektörün kopyalanması", "Sadece MFT", "Sadece boot"], 1, "Tüm sektörlerin ardışık kopyası."],
  [2, "Cluster (Küme) kavramı: dosyaya atanan sektörler grubu, Windows'ta büyüklük tipik aralık?", ["1-2 sektör", "4-64 sektör arası değişebilir", "Her zaman 1", "Sonsuz"], 1, "4'ten 64 sektöre kadar değişebilir (slayt)." ],
  [2, "BTK Akademi 'Adli bilişime giriş' dersi ile ilgili aşağıdakilerden hangisi doğru olabilir?", ["Sertifika alınamaz", "Kayıt ve sertifika alınabildiği vurgulanır", "Sadece yurtdışı", "BTK yoktur"], 1, "SUNU2'de sertifika ve kayıt anlatılmıştır."],
  [2, "Hukuki delil açısından slayttaki 'Adli bilişim' tanımlarından biri: elektronik cihazlardan dijital kanıt alıp ne için?", ["Sadece yedekleme", "Mahkemede delil kabul edilebilmesi için belirli ilkelere göre", "Oyun oynamak", "Borsa spekülasyonu"], 1, "Delil niteliği + ilke/disiplin."],
  [2, "BTK sunum eğitim akışında 'Hukuki Boyut' hangi bölümde anılır?", ["Bölüm 1", "Bölüm 4", "Bölüm 7 yok", "Bölüm 0"], 0, "BTK Akış: Bölüm1 Tanıtım, Hukuki Boyut, Dijital delil/zincir."],
];
s2m.forEach((row) => T(2, { type: "mc", q: row[1], options: row[2], answer: row[3], exp: row[4] }));
T(2, { type: "tf", q: "Adli bilişim, olay müdahalesi ve siber tehdit istihbaratı gibi alanlarda destek sağlayabilir.", answer: true, exp: "Çalışma alanları listesinde vardır." });
T(2, { type: "tf", q: "Encryption, dosyayı yetkisiz taraflarca okunamaz hale getirme işlemidir.", answer: true, exp: "Şifreleme terimi açıklaması vardır." });
T(2, { type: "tf", q: "Allocation Block ve Cluster farkı slaytlarda; ikisi de dosyaya ayrılan alan ifade eder (Windows bağlamı).", answer: true, exp: "Tahsis bloğu = kümeyle ilişkili açıklama." });
T(2, { type: "tf", q: "Sektör; diskte 4096 bit olduğu kesin (slayt).", answer: false, exp: "Bit değil bayt: genellikle 512 bayt sektör." });
T(2, { type: "fill", q: "Bir sektör genellikle ______ bayt veri depolayabilen bitişik alandır.", answer: ["512"], exp: "512 bayt." });
T(2, { type: "fill", q: "Hash, metin veya veriden üretilen ______ değeridir (slayt).", answer: ["karma", "Karma", "özet", "karma değeri"], exp: "Karma/hash değeri." });
T(2, { type: "fill", q: "Ortam verisi, kullanıcının normalde erişemediği alanlarda (dosya boşluğu, ayrılmamış kümeler, ______ dosyaları) bulunur.", answer: ["sanal bellek", "swap", "page file"], exp: "Sanal bellek (swap/page) örneklenmiştir." });
T(2, { type: "fill", q: "BTK Akademi adlı sitede 'Adli bilişime giriş' dersi ______ alanında sertifika ile sunulmaktadır (slayt vurgu).", answer: ["adli bilişim", "adli bilişi̇m", "online", "eğitim", "eğitim "], exp: "BTK adli bilişim eğitimi vurgulanır." });

// ===== SUNU 3: sayı sistemleri, hash, dosya sistemi (özet) =====
const s3m = [
  [3, "8 bitten oluşan bir byte kaç farklı değeri (0-255) temsil edebilir?", ["8", "128", "256", "512"], 2, "2^8=256 farklı değer (slayt)." ],
  [3, "On altılı sistemde 10-15 arası değerler slayta göre harflerle nasıl ifade edilir?", ["A-E", "A-F 10-15 (A=10..F=15 olacak)", "G-L", "P-Z"], 1, "A-F sembolleri (10-15) kullanılır (slayt)." ],
  [3, "(23B)16 dönüşümü örnek 571'lik ondalık değer için slayta göre ifade edilmiştir. Bu aşağıdakilerden hangisidir?", ["Octal", "Hexadecimal", "Base64", "BCD"], 1, "On altılı (hex) gösterim." ],
  [3, "MD5 slayttaki açıklamaya göre adli bilişimde neden önemlidir?", ["Grafik çizmek", "Kasıtsız değişikliği/veri bütünlüğünü kontrol", "Ağ hızı", "Ses kalitesi"], 1, "Bütünlük sağlama, kasıtsız değişiklik." ],
  [3, "SHA-1, MD5'e göre slayttaki farka göre kaç bitlik değer üretir (yaklaşık ifade)?", ["64 bit", "128 bit", "160 bit", "8 bit"], 2, "SHA-1, 160 bit değer üretir; MD5'den fark (slayt).\n" ],
  [3, "SHA-2 ailesi hangi bit uzunluklarına sahip olabilir? (slayt)", ["Sadece 64", "224, 256, 384, 512", "Sadece 32", "Sadece 1"], 1, "SHA-224, SHA-256, vb. aile." ],
  [3, "MD ailesi hash fonksiyonlarından hangi ikisi 32 bit makineler için tasarlanmıştır (slayt)?", ["MD0 ve MD1", "MD4 ve MD5", "MD8 ve MD9", "MD2 ve MD8"], 1, "MD4 ve MD5 (32 bit için)." ],
  [3, "Byte dosya sistemi türü hakkında bilgi veren değer örneğin '07' neyi ifade eder (MFT örneği bağlamı)?", ["FAT12", "NTFS (örnek kod)", "exFAT dışlandı", "CDFS"], 1, "Kod: 07 = NTFS satırı (slaytta bölümlü tabloda)." ],
  [3, "MFT, slayttaki VBR-NTFS kısmında neyi ifade eder?", ["Mouse", "Ana dosya tablosu (Master File Table)", "Mail transfer", "Media filter"], 1, "MFT: NTFS ana dosya tablosu." ],
  [3, "Aşağıdakilerden hangisi temel veri yapıları örneğidir (slayt)?", ["Sadece SQL sunucu", "Karakter, tamsayı, gerçel sayı", "Sadece web cookie", "Sadece bitmap"], 1, "Karakter, tamsayı, gerçel sayı; string ve array türetimleri." ],
  [3, "Veri: aynı bit dizisinin farklı kodlama (ASCII, hex, BSD) ile yorumlanması slaytta hangi noktayı vurgular?", ["Veri çoklu yorum (biçim)", "Aynı veri farklı olamaz", "Kodlama yok", "Sadece ses"], 0, "VERİ KAVRAMI: BTK bit dizisi örneği (ASCII, hex, BSD)." ],
  [3, "İkili toplamada 2 ve katları bir sonraki basamağa 'elde' (carry) gibi geçer (slayt açıklaması). Aşağıdakilerden hangi tabanda?", ["10'luk toplamada 10", "İkili toplamada 2", "16'lık toplamada 9", "8'lik toplamada 1"], 1, "Toplama kuralı 2'lik sistem." ],
  [3, "Sekizlik (octal) örnek: (1073)8 dönüştüğü ondalık değer slaytta ne olarak verilmiştir?", ["200", "571", "1000", "255"], 1, "571 örneğinde octal 1073." ],
  [3, "2'den 8'likye dönüşümde 3'erli bit grupları neden kullanılır?", ["2^3=8; her grup bir octal rakam", "2^2=4", "Rastgele", "5 için"], 0, "3 bit = 0-7 arası octal rakam (slayt dönüşümü)." ],
  [3, "2'den 16'ya dönüşümde 4'erli bit grupları neden uygundur (slayt)?", ["2^4=16; her grup bir hex basamağı", "2^2=2", "Sadece estetik", "10 için"], 0, "4 bit = 0-F arası hex." ],
  [3, "Aşağıdakilerden hangisi MD5 ile ilgili slayttaki yargıya daha yakındır?", ["MD4'ten hızlı ve daha az güvenilir", "MD4'ten daha yavaş ama daha güvenilir", "MD4 ile aynı hız, daha kötü", "MD4 yok"], 1, "MD5, MD4'ten yavaş; daha güvenilir denmiştir." ],
];
s3m.forEach((row) => T(3, { type: "mc", q: row[1], options: row[2], answer: row[3], exp: row[4] }));
T(3, { type: "tf", q: "MD5 mesaj digest algoritması, herhangi bir uzunluktaki girdiden sabit boyutlu özet üretebilir (slayt).", answer: true, exp: "MD5 yapısı anlatılmıştır." });
T(3, { type: "tf", q: "Video verisi, görüntüye ek olarak hangi karenin ne zaman geldiğini (zaman) içerir (slaytta anlatıldığı gibi).", answer: true, exp: "Video = görüntü + zaman bilgisi." });
T(3, { type: "tf", q: "Ses verisi, genlik ve frekansın zamanla değişimine göre kodlanabilir (slaytta anlatıldığı gibi).", answer: true, exp: "Ses sayısallaştırma açıklaması." });
T(3, { type: "tf", q: "Ondalık (decimal) sistem 0-9 dışı A-F rakamları kullanır (slayta göre).", answer: false, exp: "A-F, hex sisteminde; decimal 0-9." });
T(3, { type: "fill", q: "İkili sistemde 0/1 değerlerine binary digit kısaca ______ adı verilir.", answer: ["bit", "Bit", "bıt"], exp: "Bit (binary digit)." });
T(3, { type: "fill", q: "8 bit = 1 ______ = 2^8 olası farklı değer (0-255) slayt bağlamı.", answer: ["byte", "bayt", "Byte"], exp: "1 byte = 8 bit." });
T(3, { type: "fill", q: "MD4 ve MD5, ______ bit makineler için tasarlanmıştır (slayt ifadesi).", answer: ["32", "32'lik", "otuziki"], exp: "32 bit makineler (slayt)." });
T(3, { type: "fill", q: "SHA-1, MD5'e göre ______ bitlik karma değeri üretir (slayt).", answer: ["160"], exp: "160 bit." });
T(3, { type: "fill", q: "2'li tabanda n hane ile yazılabilecek en büyük değer formülü (slayt): n^k - 1'de k taban, yani 2^4-1=______ (4 bit en büyük ondalık).", answer: ["15", "0b1111"], exp: "15 (F) en büyük 4 bit." });
T(3, { type: "fill", q: "NTFS üzerinde ana dosya tablosu kısaltması ______ (MFT) olarak geçer.", answer: ["MFT", "mft"], exp: "Master File Table (MFT)." });

// ===== SUNU 4: imaj =====
const s4m = [
  [4, "Fiziksel (physical) imaj neyi kapsar?", ["Sadece görünür belgeler", "Silinmiş veriler, ayrılmamış alanlar, MBR/VBR, bölüm, tüm sürücü birebir", "Sadece belge", "Sadece ağ trafiği"], 1, "Fiziksel: her sektör, bölümler, ayrılmamış alan..." ],
  [4, "Mantıksal (logical) imaj aşağıdakilerden hangisine uygundur?", ["Sadece boş alan", "Belirli mantıksal bölüm/birim — çoğunlukla dosya sistemi erişen alan", "Sadece CPU cache", "Sadece e-posta sunucu"], 1, "Mantıksal: bölüm/alan seçimi, dosya sistemi merkezli." ],
  [4, "Sınırlı standart imaj formatları arasında slayta göre aşağıdakiler anılır?:", ["JPEG, PNG", "DD, Smart, AFF, E01 (önemlileri)", "MP4, AV", "BMP only"], 1, "DD, Smart, AFF, E01." ],
  [4, "E01 imajı hangi firmayla ilişkilendirilir (slayt)?", ["AccessData dışı", "EnCase", "Microsoft", "Google"], 1, "E01, EnCase formatı." ],
  [4, "E01 formatının avantajları arasında aşağıdakilerden hangisi vurgulanır?", ["Sadece açık kaynak", "Sıkıştırma, parola, meta veri, dosya başına sağlama, MD5 karması", "Hiç metadata yok", "Sadece Linux"], 1, "Avantajlar: meta, sağlama, sıkıştırma, parola..." ],
  [4, "DD (raw) imaj açıklaması slayta göre aşağıdakilere uygundur:", ["Ağ trafiği", "Depolamadaki verinin ham hali, sıkıştırma yok, uzantı .dd .001 .img", "Sadece bellek", "Sadece SQL"], 1, "DD raw, ham, sıkıştırma yok." ],
  [4, "SMART imaj formatı açıkça nasıl nitelenmiştir (slayt)?", ["En yaygın yeni", "Linux, meta segmentli, artık yaygın değil", "Sadece iOS", "Sadece Mac"], 1, "Yaygın değil notu; Linux kökenli, segmentli." ],
  [4, "AFF formatı açık bir formattır ve neyi birleştirir?", ["Ağ+Wi-Fi", "Metadata ve veri aynı dosyada, sıkıştırma desteği (slaytta)", "Sadece RAM", "Sadece CPU"], 1, "AFF: advanced forensic format, açık, meta+veri, sıkıştırma." ],
  [4, "Gömülü/çıkarılamaz disk durumunda slayttaki pratik ne olabilir?", ["İmaj yok", "Canlı (live) imaj/önyükleme diski ile", "Cihazı yok et", "Formatla"], 1, "Yerleşik depolamada canlı imaj, boot disk (zorluk bölümü)." ],
  [4, "Yazma koruma (write block) neden adli kopya almada vurgulanır?", ["Daha hızlı format", "Kaynak medyayı değişimden korumak", "Wi-Fi açar", "RAM temizlemez ama isteriz"], 1, "Bütünlük: kanıt değişmesin diye write blocker (slayt metni: yazma koruması)." ],
  [4, "Aşağıdakiler imaj alma aracı/donanımı arasında slayta göre anılır:", ["Ditto, Guymager, Tableau, dd, FTK Imager", "Sadece Excel", "Sadece Paint", "Sadece regedit"], 0, "dd, FTK Imager, EnCase, Guymager, DEFT, Tableau, Ditto (slaytlar)" ],
];
s4m.forEach((row) => T(4, { type: "mc", q: row[1], options: row[2], answer: row[3], exp: row[4] }));
T(4, { type: "mc", q: "Adli kopya (imaj) neyi ifade eder?", options: ["Sadece ağ izleme", "Suç soruşturması veya siber saldırı sonrası hedef cihaz hafızasından dijital delil için kopya alma", "Sadece yedekleme", "Sadece güncelleme"], answer: 1, exp: "Tanım: hedef hafıza kopyalama (SUNU4 ilk sayfalar)."} );

T(4, { type: "tf", q: "E01, kapalı/özel form olabilir; her araç açamayabilir (slaytta dezavantaj).", answer: true, exp: "Belgelenmemiş kapalı format, bazı dışı araçlar açmaz (slayt dezavantaj)." });
T(4, { type: "tf", q: "Fiziksel imaj, silinmiş dosyalar ve ayrılmamış (slack) tür alanları da içerir (slayta göre).", answer: true, exp: "Fiziksel: tüm bit alanı birebir." });
T(4, { type: "tf", q: "Adli tıp uzmanı değilseniz, slayttaki uyarı gereği, sistemi başlattıktan sonra canlı görüntülemeye dikkat edilmesi gerekir (riskli eylem yok/uyarlı).", answer: true, exp: "Canlı imaj/uyarlar slayttadır; uzman dışı risk (slayt tümcesi: asla/kaçın gibi uyar)."} );
T(4, { type: "tf", q: "Mantıksal imaj, tüm sürücü sektörlerinin birebir kopyasıdır (fizikselle aynı).", answer: false, exp: "Mantıksal, seçili alan/parçaya odak; fiziksel tüm sürücüyü (slayt ayrımı)." });
T(4, { type: "fill", q: "Fiziksel imaj, MBR, VBR, tüm sürücü bitleri ve ______ dosyaları gibi tüm sürücü birebir içeriğini kopyalar (slayta göre).", answer: ["silinmiş", "silinmis"], exp: "Silinmiş dosyalar dahil." });
T(4, { type: "fill", q: "EnCase imajı ______ uzantısı/segmentleri ile bilinir (slayt).", answer: ["E01", "e01"], exp: "E01 formatı." });
T(4, { type: "fill", q: "Ham (raw) imaj uzantıları: .dd, .001, ______ (slaytta anılan).", answer: [".img", "img"], exp: "dd, .img uzantıları (slayt)." });
T(4, { type: "fill", q: "AFF, Gelişmiş Adli Tıp Formatı'nın açık ______ formatıdır (slaytta açık format vurgu).", answer: ["açık", "acik", "open", "Açık"], exp: "Açık (open) format (AFF açık)." });

// ===== SUNU 5: M57, Volatility, RAM =====
const s5m = [
  [5, "M57 davasında sızıntıyla ilgili gizli veri türü slayta göre aşağıdakilerden hangisine örnektir?", ["M57.pdf", "Excel (.xlsx) türü e-tablo", "Sadece .txt", "Sadece video"], 1, "Gizli bilgili Excel/şirket m57plan.xlsx örneğinde (SUNU5)." ],
];
const s5m2 = [
  [5, "Volatility hakkında slayttaki açıklama aşağıdakilere uygundur:", ["Sadece kapalı ticari", "Açık kaynaklı, olay/kötü amaçlı yazılım analizinde bellek framework", "Sadece Android", "Sadece router"], 1, "Açık kaynak Volatility, olay ve malware analizinde (RAM dump)." ],
  [5, "imageinfo volatil komutu (örnek) neyi hedefler (slaytta)?", ["Disk format", "Bellek dökümünün profili, işletim sistemi tipi, zaman (imageinfo -f .mem)", "Yazıcı sürücü", "RAM boyutu (donanım)"], 1, "imageinfo: OS profili, zaman, temel imaj meta." ],
  [5, "RAM analizinde aşağıdakiler slayttaki örnek yetenekler arasında mı?", ["Çalışan işlemler, CMD geçmişi, YARA, pano, ekran görüntüleri, oturum/SSL (bir kısım) — vurgu listesi", "Sadece fare hızı", "Sadece ekran parlaklığı", "Klima kontrolü"], 0, "Listede işlem, ağ, IE geçmişi, dosya, not defteri, cmd, yara, ekran, pano, şifreler, sertifikalar (slayt 11, RAM) — soru tasarımı: ilk şık " ],
];
// simplify s5m2[2] - the option is too long, replace
s5m2[2] = [5, "RAM incelemesinde aşağıdakilerden hangisi bellekten çıkarılabilecek türde bilgi olarak listelenir?", ["Sadece disk seri", "Oturum açık ağ bağlantıları, IE geçmişi, CMD komutları, pano, YARA taraması (slayt örnek listesi kapsar)", "Bios şifre üretmek dışı", "Modem ışığı"], 1, "Slayt: çoklu volatil yetenekler (RAM) — örnek açıklama: bağlantı, geçmiş, yara, pano, cmd..."];
s5m.forEach((row) => T(5, { type: "mc", q: row[1], options: row[2], answer: row[3], exp: row[4] }));
s5m2.forEach((row) => T(5, { type: "mc", q: row[1], options: row[2], answer: row[3], exp: row[4] }));
T(5, { type: "tf", q: "M57 davası bir sanal şirket senaryosu örneğidir; Jean'in bilgisayarı imaj alınabilir (slayt).", answer: true, exp: "Vaka: Jean bilgisayarı, M57 sızıntı (SUNU5)." });
T(5, { type: "tf", q: "Volatility komut satırı yardımı için -h kullanılır (slaytta h komutu vurgu).", answer: true, exp: "volatility -h (yardım)." });
T(5, { type: "tf", q: "RAM, kalıcı depolamadır; kapatınca tüm imaj aynen kalır (slayta göre).", answer: false, exp: "RAM geçici; analiz neden değerli: volatil veri (slayt anlamı)." });
T(5, { type: "tf", q: "Vaka kapsamında m57plan.xlsx karşılaştırmak için kopya verilebilir (slayt).", answer: true, exp: "Karşılaştırma m57plan.xlsx örnek (slayt vaka)." });
T(5, { type: "fill", q: "Volatility, açık kaynaklı bir adli ______ çerçevesidir (bellek, slayt).", answer: ["bellek", "Bellek", "ram", "memory"], exp: "Bellek/dump framework." });
T(5, { type: "fill", q: "Bellek dökümüyle birlikte ______ komutları, cmd geçmişi, YARA, pano, ekran gibi incelemeler slayttaki örnekler arasındadır (bir örnek yazın: ____ komutları).", answer: ["windows komut", "cmd", "komut", "windows"], exp: "CMD/komut satırı geçmişi (slaytta: Windows Command Prompt (CMD) girdi komutları — fill normalize cmd)." });
T(5, { type: "fill", q: "M57'de sızıntı kaynağı yönünde şüphe, CFO ______ üzerine odaklanır (slayt vaka).", answer: ["Jean", "jean", "CFO"], exp: "Jean (CFO) şüphe/erişim (slayt vaka hikayesi - Excel Jean bilgisayarından)." });
T(5, { type: "fill", q: "imageinfo, bellek imajı için işletim sistemi ve imajla ilgili temel profil bilgisiyle birlikte ______ bilgisini de verir (slayt açıklaması).", answer: ["zaman", "tarih", "görüntü zamanı", "timestamp"], exp: "Görüntü zamanı benzeri meta (imageinfo çıktısı açıklaması)." });
T(5, { type: "fill", q: "Bellek incelemesinde (Volatility) ______ kuralları ile kötü amaçlı yazılım taraması yapılabilir (slayt ifadesi, İng. YARA).", answer: ["YARA", "yara", "Yara"], exp: "YARA (slayt, RAM) — kötü amaçlı yazılım taraması (YARA kurallarını kullanarak)." });
T(5, { type: "mc", q: "Bellek incelemesinde pano, ekran görüntüleri, karma şifreler ve sertifika bilgileri neden değerli olabilir? (kavram)", options: ["Hiç gerek yok", "Aktif oturum ve anlık kullanıcı/kripto ve iz izleri bırakır (slayt kapsar)", "Sadece SSD", "Sadece NTFS MFT"], answer: 1, exp: "Aktif bellek, oturum ve gizli veri izleri (slayt RAM sayfası)." });
T(5, { type: "mc", q: "M57 senaryosunda toplantı alışkanlıkları: uzaktan çalışma, e-posta ve forum üzerinden belge: delil türü açısından aşağıdakilere dikkat slayttaki neden?", options: ["Sadece kağıt", "E-posta, forum metadatası ve bilgisayar imajı birlikte inceleme (slayt hikayesi - dosyalar e-posta ile, forumda yayın)", "Sadece BTK", "Sadece DNS"], answer: 1, exp: "Dijital izler: e-posta ve forum + imaj (vaka hikayesi)." });

// ===== SUNU 6: görüntü, kamera, EXIF, blind =====
const s6m = [
  [6, "Dijital kamera görüntülemede temel iki bileşen slayta göre hangisidir?", ["LCD ve piksel", "Lens ve sensör", "SD kart ve fan", "USB ve HDMI"], 1, "İki ana bileşen: lens + sensör (SUNU6)." ],
  [6, "CFA (Color Filter Array) ne işe yarar (slayt)?", ["Wi-Fi sinyal", "Renk filtre düzeni, tek sensörle renkli bilgi; Bayer örnek (ye %50, kırmızı/mavi %25)", "Sadece pil", "Sadece zoom"], 1, "CFA, sensör boyunca renk örneklemek (Bayer, ye%50, R/B %25) (slayt sayısal)." ],
  [6, "Bayer desenine göre neden yeşil filtrelere daha fazla pay verilir? (slayt)", ["Tesadüf", "İnsan görme sistemi (HVS) yeşile daha duyarlı (slayt açıklaması)", "Yeşil ucuz değil", "Mavi pahalı"], 1, "HVS yeşil hassas; %50 yeşil (R/B %25) (slayt)." ],
  [6, "EXIF/meta veri slayttaki açıya göre ne içerebilir?", ["Sadece dosya adı", "Kamera marka/model, çözünürlük, tarih, jpeg sıkıştırma oranı; ancak cihaz kimliği ayrıntı kısıtı (slaytta sınırla)", "Pil seviyesi sadece", "GPS daima yok vurgu"], 1, "EXIF: marka, model, boyut, zaman, kalite; belirli kamera ID hariç (slaytta) — metin" ],
  [6, "Görüntü yolu boyunca, ham sensör verisine sensör gürültü azaltma, renk düzeltme, kenar gibi (slaytta) hangi aşamada olur", ["Son kullanıcı yazdırma anında sadece", "Görüntü son hali bitmeden önce ön-işleme/iyileştirme pipleline'ı (slaytta)", "Sadece EXIF yazar", "Sadece ağa gönderir"], 1, "Görüntü işleme adımları: gürültü, renk, kenar (slaytta başlık 1.2)." ],
  [6, "Kör (blind) adli tespit neden gerekir (slayt)?", ["Meta her zaman yeter", "EXIF/ başlık değişikliğe savunmasız; manipülasyon, kökeni doğrulamak blind tekniklere gerek (slayt açık)", "Sadece analog", "Sadece PDF"], 1, "Meta manipülasyon, blind (kör) yöntem (slaytta) — açık kamera kaynağı tespitinde" ],
  [6, "Piksel, sensör ızgarasında temel görüntüleme birimi; renk bilgisi slaytda hâliyle nasıl elde edilir (ön bilgi, CFA) ile?", ["Piksel başına 3 ayrı sensör zorunlu; maliyet", "Mosaic/Filtre ve komşu interpolasyon; çoğunlukla tek sensör+CFA, eksik renkler interpolasyon (Bayer) (slayt)", "Sadece lens", "Sadece JPEG"], 1, "Kısaltma maliyet: tek piksel konumu tek renk, interpolasyon; Bayer (slayt) — 3 sensör cümlesi slaytta" ],
];
s6m.forEach((row) => T(6, { type: "mc", q: row[1], options: row[2], answer: row[3], exp: row[4] }));
T(6, { type: "tf", q: "Dijital kamera bileşenlerinde alıcı lens, ışığın sensöre yönelmesi için ışığın yolunu bükmek/bükmek şeklindedir (slayt 1.1).", answer: true, exp: "Lens, ışınım yolunu büken optik açıklama (slayt 1.1 dili, optik) — ışınım/ışın yolunu büken/bükmek ifadesi" });
T(6, { type: "tf", q: "EXIF metaverileri, manipülasyona karşı daima güvenlidir; değiştirilemez (slayta göre).", answer: false, exp: "Slayt: bu bilgiler değişikliğe savunmasız; blind tekniklere gerek" });
T(6, { type: "tf", q: "Bayer, yeşil kanala daha fazla filtre pikseli (yaklaşık %50) ayırabilir (slayta göre).", answer: true, exp: "Ye %50, R/B %25 (slaytta) — tablo sayısallaştırma" });
T(6, { type: "tf", q: "Dijital görüntü incelemesi, askeri/müdafi ve ceza uygulamaları için analizle ilişkili (slaytta) bir örnekleme ille ifade: kaynak tespiti tekniği ileri seviyede ister (slaytta) — genel: doğrudur)", answer: true, exp: "Kamera kaynağı tespitinde askeri/ceza (slayt) — bilimsel/uygulama" });
T(6, { type: "fill", q: "Kamera kaynağı tespitinde meta veri yanında, manipülasyona karşı ______ adli bilişim tekniklerine (İng. blind) ihtiyaç vardır (slaytta).", answer: ["kör", "gizli", "blind", "Kör", "gizil"], exp: "Kör (blind) / gizli (blind) forensic techniques (slayt cümle tam)" });
T(6, { type: "fill", q: "EXIF: Değiştirilebilir Görüntü ______ Formatı (slaytta İng. kısaltma ifadesi).", answer: ["Dosyası", "File", "dosyası", "Görüntü"], exp: "EXIF (Exchangeable Image File) — açık metin (slayt) — fill 'Dosya' bölümlerinde" });
T(6, { type: "fill", q: "CFA, sensör üzerine yerleşik ______ filtre düzenine verilen addır (Bayer ailesi) (kısaltma).", answer: ["renk", "Color", "renk "], exp: "Color Filter Array: renk (slayt) — açık uç" });
T(6, { type: "fill", q: "Görüntü işleme hattında sensör gürültüsü azaltma, renk düzeltme ve kenar geliştirme gibi adımlar ______ tamamlanmadan önce uygulanabilir (slaytta, ham→son) final öncesi).", answer: ["son hali", "görüntü son", "görüntü son hali", "görüntü"], exp: "Ham pipeline'tan nihai görüntü (slayt 1.2)" });
T(6, { type: "mc", q: "Bir piksel, sensör '........' ızgarasının (slayt) temel parçacığıdır. Boşluk:?", options: ["doğrusal piksel ızgarası (grid)", "yalnızca filtre (yanlış)", "yalnızca lazer", "yalnızca Bluetooth"], answer: 0, exp: "Piksel: ızgaradaki (grid) en küçük eleman; Ham görüntü piksel (slaytta)" } );

// ===== SUNU 7: karşılaştırma, ölçüm =====
const s7m = [
  [7, "Yan yana (side by side) adli karşılaştırmalarda aşağıdakiler arasında örnekler verilmiştir (slayt) — aşağıdakilerden hangisi dışarıda bırakılamaz", ["Mermi izleri, lifler, parmak izi, yüz (örnek türlerinin bir kısmı)", "Sadece hava", "Radyo sinyal", "Buzdolabı reklamı"], 0, "Mermi, lif, parmak, yüz — yan yana (SUNU7)." ],
  [7, "Aydınlatma, renk, yönelim farkları, yan yana kıyaslamalarda aşağıdakileri yapabilir (slaytta):", ["Her zaman aynı sonuç", "Yanıltıcı fark/alkasız fark (confounding factors)", "Sadece kontrast etkilemez (yanlış)", "Sadece piksel sayısı"], 1, "Faktör: ışık, renk, yönelim (slayt) — zorluk" ],
  [7, "Mermi yüzeyi yükseklik profili örneğinde, istatistik: korelasyon eşleşme yüzdesi slaytta ne olarak örnek verilmiştir (Şekil 2)?", ["%0", "%50", "%99,6", "%12"], 2, "Örnek korelasyon: % 99,6 (slaytta) — mekanik kalem, Şekil 2 açıklaması" ],
  [7, "Fotogrametri, slayttaki giriş listesinde ne yapılabilir? (daha ileri slayttan)", ["Sadece ses", "Görüntüden 3B ölçüm/topoğrafyaya kadar; girişte maddelendirme (slayt 1) — öğrenen soru: fotogrametri 3B ölçü", "Sadece DNA", "Sadece Word"], 1, "Fotogrametri (görüntüden ölçü/şekil) (SUNU7 giriş listesi — konu) — 3B ölçüm — slaytta" ],
  [7, "Ters projeksiyon (slaytta giriş maddesinde) tipik olarak aşağıdakilere aittir? (büyük anlatımdan)", ["Yazı tipi pikseli", "Projeksiyon/geri izdüşüm, tanı/ölçek", "Bios", "Dondurma"], 1, "Giriş listesinde: ters projeksiyon, fotogrametri (konu) — ilerleme slaytları" ],
  [7, "Aynı lif görüntüleri, farklı büyütme ve farklı kaynaktan (kaşmir vs yün) geliyorsa ne olur? (slayt ders)", ["Daha iyi eşleşir", "Yanıltıcı eşleşme gibi görünebilir, hatalı sonuç (Şekil 6 örneği)", "Hiç fark yok", "Korelasyon 100%"], 1, "Fark tür, büyütme (örnek kaşmir/koyun) (SUNU7 — yanlış karşılaştırma) —" ],
  [7, "Ayak/lastik ve biyometrik (slaytta giriş) konuları hangi genel alanda?", ["Ağ yönetimi", "Görüntü karşılaştırma ve ölçme / tanı-ölç (slayt 1'de 7 bölümlük liste)", "Sadece SQL", "Sadece WiFi"], 1, "Görüntü karşılaştırma ve ölçme (1: side-by-side, 3 yüz, 4 biyometri, 5 iz, 6 ters proj, 7 fotogram) —" ],
  [7, "Boya pulu (paint chip) aynı örnek, akkor voltaj farkı renk ısı farkı yaratınca, slaytta açıklanan sonuç:", ["Aynı cisim ama ışık/renk farkı açıklanır", "Kesin farklı boya tür", "Aynı değil", "Sadece piksel"], 0, "Akkor lamba; renk sıcaklığı (slayt) —" ],
];
s7m.forEach((row) => T(7, { type: "mc", q: row[1], options: row[2], answer: row[3], exp: row[4] }));
T(7, { type: "tf", q: "Yan yana sunum, izleyiciyi 'aynı nesne veya tür' sonucuna davet eden görsel yöntemdir (slaytta, tanım).", answer: true, exp: "Side-by-side amacı (slaytta yorum)." });
T(7, { type: "tf", q: "Büyütme/ölçek farkı, lif SEM görüntülerinde yanıltıcı eşleşme yaratabilir (slaytta, kaşmir/koyun örneği: yüksek korelasyona yol açsa da kötü eşleşme).", answer: true, exp: "2 kattan fark, fark kaynak, Şekil 6 açık (SUNU7)." });
T(7, { type: "tf", q: "Mermi kovanındaki iğne girintileri boyut olarak her zaman aynı silahtan gelir, hiç ayrıntı fark etmez (slayta göre).", answer: false, exp: "Slayt: aynı kalibre ama fark pürüz ve boyut, haç (şekil 7) — her zaman aynı değil" });
T(7, { type: "tf", q: "Aydınlatma, büyütme ve açı, eşleştirme/tanı için mümkün olduğunca eşitlenmelidir (slayt tavsiyesi anlamı kapsar).", answer: true, exp: "Kıyas koşulları: benzer aydınlatma, büyütme, açı (ilgili bölümler)" });
T(7, { type: "fill", q: "Yan yana karşılaştırmalarda, mekanik veya optik yükseklik verileri, renkle kodlanmış ______ haritaları (yükseklik) olarak da sunulabilir (slaytta, mermi yükseklik haritası) — bir kelime: yükseklik ______.", answer: ["haritaları", "harita", "yükseklik haritası", "görüntü"], exp: "Yükseklik haritaları, renk temsil (slayt) — fill hedefi 'harita' bölge" });
T(7, { type: "fill", q: "İki aynı silahtan mermi yüzey yükseklik profili çizilip hizalandığında, ilgili slaytta korelasyon örneğinde '______ %' seviyesinde (örnek) eşleşme verilmiştir (sayı).", answer: ["99,6", "99.6", "99.6%"], exp: "Slayt % 99,6 (virgüllü TR)" });
T(7, { type: "fill", q: "Kaşmir ve yün gibi farklı lif türlerinin SEM görüntüleri, izlenimce benzer olsa da ______ kaynaktan geldiğinde hatalı eşleşme riski (slaytta) artar: 'farklı' kelimesi. Boşluk: farklı ______.", answer: ["kaynak", "kaynaktan", "kayna"], exp: "Farklı kaynak (tür) — Şekil 6 (slayt) —" });
T(7, { type: "fill", q: "Giriş bölümlerinden biri: ______ tanıma (side-by-side ile ilişkili, yüz de ilgili alan) — kişi kimliğine dönük biyometrik (slaytta 3, Yüz Tanıma).", answer: ["Yüz", "yüz", "Yuz"], exp: "Yüz Tanıma (bölüm 3 listesi) —" });

// ---------- Ek basit sorular (yalnızca slayt metinleri; tekrar ve çeşitli kazanım) ----------
// SUNU 1 — görüntü adli bilimi, sahtecilik türleri, pasif/aktif (SUNU 1 son bölümler)
const x1 = [
  [1, "Dijital görüntü adli biliminde slayta göre iki ana problem alanı hangisidir?", ["Ağ topolojisi ve IP", "Görüntü kaynağı tanımlama ve görüntü sahteciliği algılama", "RAM boyutu ve SSD hızı", "Yalnızca yazıcı kalibrasyonu"], 1, "İki ana sorun: kaynak tanımlama + sahtecilik tespiti (SUNU1)."],
  [1, "Kopyala-taşı (Copy-Move) görüntü sahteciliğinde sahteciliğin kaynağı slayta göre nerededir?", ["Başka bir dosyada", "Görüntünün kendi içinde", "Sadece bulutta", "Sadece e-postada"], 1, "Kaynak aynı görüntünün içinde kalır (SUNU1)."],
  [1, "Kopyala-yapıştır (Copy-Paste) sahteciliğinde sahtecilik kaynağı slayta göre nerededir?", ["Görüntünün içinde zorunlu", "Görüntünün kendisinde bulunmayabilir (farklı görüntüler)", "Sadece telefonda", "Sadece tarayıcıda"], 1, "Farklı görüntüler yapıştırılır; kaynak görüntünün dışında olabilir (SUNU1)."],
  [1, "JPEG sıkıştırmasına birden fazla maruz kalma slaytta neyle ilişkilendirilir?", ["Kalite artışı kesin", "Sıkıştırma kusurları (artefacts) ve kalite düşüşü", "Sadece dosya boyutu sabit", "Renk kanalı yok"], 1, "Çoklu sıkıştırma kaliteyi düşürebilir; kusurlar (SUNU1)."],
  [1, "Pasif güvenlik/dijital adli teknikler slayta göre incelemeye başlamadan önce ne yapmaz?", ["Veri okur", "Herhangi bir sahteciliği tespit etmeden önce veriler üzerinde ön hesaplama yapmaz", "Görüntü açar", "Hash alır"], 1, "Pasif: ön hesaplama yok (önce tespit), sonradan işleme (SUNU1)."],
  [1, "Pasif teknikler slaytta hangi tür ön bilgi kullanmaz?", ["Dosya adı", "İncelenen medya hakkında herhangi bir ön bilgi", "Tarih", "Saat"], 1, "Pasif: ön bilgi kullanmaz (SUNU1)."],
  [1, "Filtreleme sahteciliği ile slaytta özellikle hangi işlem ilişkilendirilir (medyan filtre ve splicing örneği)?", ["Sadece PNG dönüşümü", "Yüz birleştirme (splicing) izlerini gizlemek için medyan filtreleme popüler", "Sadece OCR", "Sadece ses"], 1, "Medyan filtreleme, splicing izlerini gizlemede popüler (SUNU1)."],
  [1, "Rötuşlama görüntü sahteciliği slayta göre özellikle nerede yaygınlaşmıştır?", ["Sadece banka sunucularında", "Sosyal medya uygulamalarında (kolay yazılımlar)", "Sadece uydu", "Sadece CAD"], 1, "Rötuş sahteciliği sosyal medyada yaygın (SUNU1)."],
  [1, "Bilgisayar tarafından oluşturulan görüntü sahteciliği neden zor bir adli problemdir (slayt)?", ["Çünkü dosya yok", "Gerçek fotoğraflara benzeyen görüntülerin ayırt edilmesi zor", "Çünkü yalnızca analog", "Çünkü yalnızca basılı"], 1, "CGI: gerçekten zor ayırt (SUNU1)."],
  [1, "Slaytta adli bilişimin tanımı ile en uyumlu ifade hangisidir?", ["Sadece donanım tamir", "Elektronik cihazlardan dijital kanıt elde etme ve delil olabilmesi için ilkelere uygun işlev (BTK/SUNU2)", "Sadece web tasarım", "Sadece antivirüs satışı"], 1, "Tanım: suç soruşturmasında dijital kanıt + delil kabulü (SUNU2 giriş)."],
];
x1.forEach((r) => T(1, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
T(1, { type: "tf", q: "Delil, bir olayı aydınlatabilecek iz veya emare anlamına gelir (slaytta delil tanımı).", answer: true, exp: "Delil = iz/emare (SUNU2 hukuk slaytları)." });
T(1, { type: "tf", q: "Dijital delil; bilişim sistemlerinden veya dijital depolama aygıtlarından usulüne uygun elde edilen anlamlı sayısal bilgilerdir (slayt).", answer: true, exp: "Dijital delil tanımı (SUNU2)." });
T(1, { type: "tf", q: "Dijital ortamda saklanan, oluşturulan, depolanan veya iletilen her türlü sayısal bilgi dijital delil adayı olabilir (slayt).", answer: true, exp: "Hangi veriler listesi (SUNU2)." });
T(1, { type: "tf", q: "Kopyala-taşı sahteciliğinde sahtecilik kaynağı genellikle başka bir fotoğraf dosyasıdır (slayta göre).", answer: false, exp: "Kaynak aynı görüntünün içindedir (SUNU1)." });
T(1, { type: "tf", q: "Pasif dijital adli teknikler, incelenen medya hakkında ön bilgi kullanmadan çalışabilir (slayt).", answer: true, exp: "Pasif: ön bilgi yok (SUNU1)." });
T(1, { type: "fill", q: "Dijital görüntü adli biliminin slaytta sayılan iki ana problemi: görüntü kaynağı ______ ve görüntü sahteciliği algılama.", answer: ["tanımlama", "tanimlama"], exp: "Kaynak tanımlama (SUNU1)." });
T(1, { type: "fill", q: "Copy-______ Image Forgery: görüntünün bir kısmı kopyalanıp aynı görüntünün başka bölümüne taşınır (İng. terim başı, slayt).", answer: ["Move", "move", "Taşı"], exp: "Copy-Move (SUNU1)." });
T(1, { type: "fill", q: "Pasif güvenlik önlemleri: inceleme tamamen verilerin ______ işlenmesine dayanır (slayt).", answer: ["sonradan", "sonra"], exp: "Sonradan işleme (SUNU1)." });

// SUNU 2 — BTK, TCK/CMK/ISO atıfları, terimler, dijital delil özellikleri
const x2 = [
  [2, "File signature (dosya imzası) slayta göre uzantı değişse bile neyi tanımlar?", ["Sadece dosya boyu", "Dosyanın türünü (içerik bilgisi)", "Sadece kullanıcı adı", "Sadece IP"], 1, "İçerikten tür tanımı (SUNU2)." ],
  [2, "Windows kayıt defterinde kullanıcı şifrelerini saklayan kısım slaytta hangi kısaltmayla anılır?", ["Software", "SAM", "System", "LNK"], 1, "SAM: Güvenlik Hesap Yöneticisi (SUNU2)." ],
  [2, "5237 sayılı Türk Ceza Kanunu'nda bilişim alanında işlenen suçlar slayta göre kitabın hangi bölümünde toplanmıştır?", ["Birinci Kitap Genel", "İkinci Kitap Özel Hükümler, Topluma Karşı Suçlar kapsamında onuncu bölüm", "Sadece ek", "Sadece geçici madde"], 1, "TCK yapısı slaytta (SUNU2)." ],
  [2, "Bilişim sistemine girme suçu slaytta hangi madde ile anılır?", ["242", "243", "250", "300"], 1, "Madde 243 (SUNU2)." ],
  [2, "Sistemi engelleme, bozma, verileri yok etme veya değiştirme slaytta TCK hangi madde?", ["243", "244", "245", "246"], 1, "Madde 244 (SUNU2)." ],
  [2, "Avrupa Konseyi Siber Suç Sözleşmesi Türkiye'de iç hukuk açısından slayta göre hangi tarihte yürürlüğe girmiştir?", ["1 Ocak 2010", "1 Ocak 2015", "1 Ocak 2020", "23 Kasım 2001"], 1, "Yürürlük: 1 Ocak 2015 (SUNU2)." ],
  [2, "Dijital kanıtların tanımlanması, toplanması ve muhafazası için yol gösteren ISO/IEC standardı slaytta hangisidir?", ["27037", "9001", "14001", "20000"], 0, "ISO/IEC 27037:2012 (2018) (SUNU2)." ],
  [2, "Soruşturmalarda uygun yöntem ve araçların kullanımına yönelik slaytta anılan standart hangisidir?", ["27037", "27041", "27001", "22301"], 1, "ISO/IEC 27041:2015 (SUNU2)." ],
  [2, "Dijital delilin analizi ve yorumlanması için slaytta anılan ISO standardı hangisidir?", ["27042", "27043", "27050", "27037"], 0, "ISO/IEC 27042:2015 (SUNU2)." ],
  [2, "Vaka incelemesine ilişkin daha geniş perspeptifli prensipler için slaytta hangi ISO numarası geçer?", ["27041", "27043", "27050", "9000"], 1, "ISO/IEC 27043:2015 (SUNU2)." ],
  [2, "Elektronik keşif ile ilgili standartları dört bölümde ele alan slayttaki ISO hangisidir?", ["27037", "27042", "27050", "14001"], 2, "ISO/IEC 27050:2016 (SUNU2)." ],
  [2, "Dijital verilerin kanıt olabilmesi için slaytta I–VII arası listelenen özelliklerden biri aşağıdakilerden hangisidir?", ["Sadece renk derinliği", "Tekrar edilebilirlik", "Sadece CPU hızı", "Sadece monitör çözünürlüğü"], 1, "Tekrar edilebilirlik vb. (SUNU2 — liste)." ],
  [2, "Thumbnail (küçük resim) slayta göre genellikle hangisini içermez?", ["Düşük çözünürlük", "GPS veya orijinal oluşturulma tarihi gibi meta (genellikle içermez)", "Küçük boyut", "Önizleme"], 1, "Küçük resim genellikle bu metaları içermez (SUNU2)." ],
  [2, "Unallocated (ayrılmamış) alan slayta göre ne içerebilir?", ["Sadece BIOS", "Bozulmamış silinmiş dosya kalıntıları vb.", "Sadece RAM", "Sadece CPU önbelleği"], 1, "Ayrılmamış: silinmiş kalıntılar (SUNU2)." ],
];
x2.forEach((r) => T(2, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
T(2, { type: "tf", q: "Registry Hives, Windows kayıt defterinin alt dosyalarından oluşur (slayt).", answer: true, exp: "Hives tanımı (SUNU2)." });
T(2, { type: "tf", q: "Avrupa Konseyi Siber Suç Sözleşmesi 23 Kasım 2001 tarihlidir (slayt).", answer: true, exp: "Sözleşme tarihi (SUNU2)." });
T(2, { type: "tf", q: "Türkiye sözleşmeyi 10 Kasım 2010'da imzalamıştır (slayt).", answer: true, exp: "İmza tarihi (SUNU2)." });
T(2, { type: "tf", q: "Hukuk açısından delil, uyuşmazlık konusu olayı aydınlatmak için mahkemede kanı oluşturan ispat aracıdır (slayt).", answer: true, exp: "Hukuki delil tanımı (SUNU2)." });
T(2, { type: "tf", q: "ISO/IEC 27037 yalnızca ağ güvenliği sertifikasyonu için yazılmıştır; dijital kanıtla ilgisi yoktur (slayta göre).", answer: false, exp: "27037 dijital kanıt tanımı/toplaması/muhafazası ile ilgilidir (SUNU2)." });
T(2, { type: "fill", q: "Dosya ______, uzantı değişse bile dosya türünü içerikten tanımlayan bilgidir (İng. file signature, slayt).", answer: ["imzası", "imza", "İmzası"], exp: "Dosya imzası (SUNU2)." });
T(2, { type: "fill", q: "TCK'da bilişim sistemine girme ______ 243 ile düzenlenmiştir (slayt).", answer: ["madde", "maddesi", "Madde"], exp: "Madde 243 (SUNU2)." });
T(2, { type: "fill", q: "Türkiye Avrupa Konseyi Siber Suç Sözleşmesini slayta göre ______ Eylül 2014'te onaylamıştır (gün-ay).", answer: ["29", "29 "], exp: "29 Eylül 2014 onay (SUNU2)." });
T(2, { type: "fill", q: "Dijital verilerin kanıt olabilmesi için slaytta sayılan özelliklerden biri: ______ edilebilirlik (reproducibility).", answer: ["tekrar", "Tekrar"], exp: "Tekrar edilebilirlik (SUNU2 listesi VII)." });

// SUNU 3 — kısa sayı/hash/FS
const x3 = [
  [3, "Slayttaki ondalık 571 örneğinde 16'lık gösterim hangi biçimde verilmiştir?", ["(1AC)16", "(23B)16", "(FF)16", "(100)16"], 1, "571 = (23B)16 (SUNU3)." ],
  [3, "Slayttaki 571 örneğinde 8'lik (octal) gösterim hangisidir?", ["(1000)8", "(1073)8", "(777)8", "(12)8"], 1, "(1073)8 (SUNU3)." ],
  [3, "4 bitlik ikili dizilerin en büyüğünün ondalık karşılığı formül 2^4-1 ile slaytta ne çıkar?", ["14", "15", "16", "31"], 1, "15 = F (SUNU3)." ],
  [3, "SHA-1 çıktı uzunluğu slayta göre kaç bittir (MD5'ten fark vurgusu)?", ["128", "160", "256", "512"], 1, "160 bit (SUNU3)." ],
  [3, "Aşağıdakilerden hangisi SHA-2 ailesinde yer alan özet uzunluk adlarından biridir (slayt)?", ["MD5-128", "SHA-256", "CRC32", "BASE64"], 1, "SHA-256 vb. (SUNU3)." ],
  [3, "Karakter, tamsayı ve gerçel sayı slaytta nasıl sınıflanır?", ["Sadece ağ protokolü", "Temel veri yapıları", "Sadece donanım", "Sadece bulut"], 1, "Temel veri yapıları (SUNU3)." ],
];
x3.forEach((r) => T(3, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
T(3, { type: "tf", q: "Ondalık sayı sistemi 0–9 arası on rakam kullanır; taban 10'dur (slayt).", answer: true, exp: "Decimal tanım (SUNU3)." });
T(3, { type: "tf", q: "Aynı bit dizisi ASCII'de farklı, hexadecimal'de farklı yorumlanabilir; bu veri kavramıyla ilişkilidir (slayt BTK örneği).", answer: true, exp: "VERİ KAVRAMI (SUNU3)." });
T(3, { type: "tf", q: "MD5, MD4'ten daha hızlı ve daha güvenilirdir (slayta göre).", answer: false, exp: "MD5 daha yavaş, daha güvenilir denmiştir (SUNU3)." });
T(3, { type: "tf", q: "MFT, dosya adı yerine 0xXXXX gibi onaltılık değerlerle dosya/klasör kayıtlarını tutan NTFS ana tablosudur (slaytta açık).", answer: true, exp: "MFT açıklaması (SUNU3)." });
T(3, { type: "fill", q: "Hexadecimal'de 10–15 arası A, B, C, D, E, ______ harfleri kullanılır (slayt).", answer: ["F", "f"], exp: "A-F (SUNU3)." });
T(3, { type: "fill", q: "MD5, MD ailesi ______ özet (digest) algoritmasıdır (kısaltma, slayt).", answer: ["message", "Message"], exp: "Message-Digest (SUNU3)." });
T(3, { type: "fill", q: "İkili toplamada 10 ve katları yerine elde olarak ______ ve katları bir sonraki basamağa eklenir (slayt açıklaması).", answer: ["2", "iki", "2 "], exp: "2'lik toplam (SUNU3)." });

// SUNU 4 — kısa
const x4 = [
  [4, "Fiziksel imaj tüm sürücü yapıları ve içeriğinin nasıl kopyasıdır (slayt)?", ["Özet", "Birebir", "Sadece metin", "Sadece kayıt defteri"], 1, "Birebir kopya (SUNU4)." ],
  [4, "E01'de meta veriler arasında slaytta özellikle anılan sağlama türlerinden biri hangisidir?", ["CRC8", "MD5", "DES", "AES key"], 1, "MD5 karması (SUNU4)." ],
  [4, "Aşağıdakilerden hangisi slayttaki 'imaj alma yazılımı' örneklerindendir?", ["Microsoft Word", "Accessdata FTK Imager", "Notepad", "Paint"], 1, "FTK Imager (SUNU4)." ],
  [4, "Aşağıdakilerden hangisi slayttaki donanım imaj cihazı örneğidir?", ["Ditto", "Sadece fare", "Klavye", "Monitör"], 0, "Ditto, Tableau (SUNU4)." ],
];
x4.forEach((r) => T(4, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
T(4, { type: "tf", q: "Mantıksal imaj, belirli bir mantıksal bölüm veya alanın kopyasını alır (slayt).", answer: true, exp: "Logical imaj tanımı (SUNU4)." });
T(4, { type: "tf", q: "DD (raw) imajında veri genellikle sıkıştırılmış halde saklanır (slayta göre).", answer: false, exp: "Raw'da genelde sıkıştırma yok (SUNU4)." });
T(4, { type: "tf", q: "Yerleşik depolamada cihaz çıkarılamıyorsa canlı önyükleme diski gibi yöntemler gündeme gelebilir (slayt).", answer: true, exp: "Karşılaşılan zorluklar (SUNU4)." });
T(4, { type: "fill", q: "Adli bilişimde yaygın imaj formatlarından biri: ______ (Gelişmiş Adli Tıp Formatı, açık format).", answer: ["AFF", "aff"], exp: "AFF (SUNU4)." });
T(4, { type: "fill", q: "dd ile alınan ham imajın uzantılarından biri: .dd veya .______ (slayt).", answer: ["img", "001"], exp: ".img / .001 (SUNU4)." });
T(4, { type: "fill", q: "E01, ______ firmasının imaj formatıdır (slayt).", answer: ["EnCase", "encase"], exp: "EnCase (SUNU4)." });

// SUNU 5 — M57, Volatility, anti-adli
const x5 = [
  [5, "M57 senaryosunda şirketin adı slayta göre aşağıdakilerden hangisine benzer şekilde geçer?", ["Z99", "M57", "A1", "X00"], 1, "M57 (SUNU5)." ],
  [5, "M57'de başkanın adı slayta göre kimdir?", ["Jean", "Alison", "Bob", "Gina"], 1, "Başkan Alison Smith (SUNU5)." ],
  [5, "pslist eklentisi bellek imajında neyi listeler (slayt)?", ["Sadece disk bölümleri", "Çalışan işlemleri", "Sadece yazıcı", "Sadece yönlendirici"], 1, "İşlemler (SUNU5)." ],
  [5, "pstree ekranında PPID ne anlama gelir (slayt)?", ["Pil seviyesi", "Üst işlem kimliği", "Port hızı", "Parça boyu"], 1, "Parent PID (SUNU5)." ],
  [5, "netscan eklentisi slayta göre ne gösterir?", ["BIOS", "Ağ bağlantıları (Windows)", "Sadece USB", "Sadece ekran çözünürlüğü"], 1, "Ağ bağlantıları (SUNU5)." ],
  [5, "psxview eklentisi slayta göre neye odaklanır?", ["Ağ kartı sürücüsü", "Gizlenmeye çalışan işlemler", "E-posta", "Sadece disk imajı"], 1, "Gizli işlemler (SUNU5)." ],
  [5, "hivelist eklentisi neyin RAM'deki konumunu gösterir (slayt)?", ["Sadece RAM çubuk modeli", "Kayıt defteri kovanları", "Sadece GPU", "Sadece ses kartı"], 1, "Registry hive konumları (SUNU5)." ],
  [5, "Disk silme anti-adli yöntemlerinden biri olarak slaytta hangi Windows aracı örneklenir?", ["Paint", "Drive Wiper", "Calc", "Notepad"], 1, "Drive Wiper (SUNU5)." ],
  [5, "Dosya kurtarmayı zorlaştırmak için slaytta Java tabanlı örnek olarak hangi araç anılır?", ["Volatility", "File Shredder", "dd", "ping"], 1, "File Shredder (SUNU5)." ],
  [5, "Hidden Tear aracı slayta göre hangi tür dosyalarda gizleme ile ilişkilendirilir (örnekler)?", ["Sadece .exe", ".jpeg, .gif, .bmp gibi görseller", "Sadece .pdf", "Sadece .mp3"], 1, "Görüntü türleri (SUNU5)." ],
  [5, "Slacker aracı slayta göre hangi çerçevenin parçası olarak anılır?", ["Linux kernel", "Metasploit", "OpenSSL", "TensorFlow"], 1, "Metasploit (SUNU5)." ],
  [5, "Timestomp aracı slayta göre dosyanın hangi tür meta verilerini değiştirebilir?", ["Sadece dosya adı", "Erişim, oluşturma ve değiştirme zaman/tarihleri", "Sadece boyut (tek başına yasak)", "Sadece ikon"], 1, "Zaman damgaları (SUNU5)." ],
];
x5.forEach((r) => T(5, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
T(5, { type: "tf", q: "Anti adli bilişim, delillerin analizini zorlaştırmaya veya imkansız kılmaya yönelik girişimleri kapsar (slayt).", answer: true, exp: "Tanım (SUNU5)." });
T(5, { type: "tf", q: "Steganografi, mesaj veya dosyaları başka bir dosya içinde gizleme işlemidir (slayt).", answer: true, exp: "Steganografi tanımı (SUNU5)." });
T(5, { type: "tf", q: "WinZip ve PKZIP, dosyaları sıkıştırarak incelemeyi zorlaştırabildiği slaytta anti-adli bağlamda anılır.", answer: true, exp: "Sıkıştırma bölümü (SUNU5)." });
T(5, { type: "tf", q: "Fidye yazılımı, sürücüyü kullanıcının erişemeyeceği hale getirebilir (slayt).", answer: true, exp: "Kötü amaçlı yazılım bölümü (SUNU5)." });
T(5, { type: "tf", q: "connscan, UDP bağlantıları için tarayıcıdır (slayta göre).", answer: false, exp: "connscan: TCP bağlantıları (SUNU5)." });
T(5, { type: "fill", q: "Bellekten oturum parola karma değerlerini almak için slaytta ______ komutu örneklenmiştir (kısa ad).", answer: ["hashdump", "Hashdump"], exp: "hashdump (SUNU5)." });
T(5, { type: "fill", q: "Volatility'de açık TCP bağlantıları için ______ eklentisi 'tarayıcı' olarak anılır (slayt).", answer: ["connscan", "connscan "], exp: "connscan (SUNU5)." });
T(5, { type: "fill", q: "Anti adli: ______ Tear adlı araç .jpeg/.gif/.bmp içinde gizleme örneklerinden biri olarak geçer (slayt).", answer: ["Hidden", "hidden"], exp: "Hidden Tear (SUNU5)." });
T(5, { type: "fill", q: "İz gizleme araçlarından biri, dosya zaman damgalarını oynatır: Time______ (slayt, eksik bırak: tam ad).", answer: ["stomp", "Stomp", "STOMP", "timestomp", "Timestomp"], exp: "Timestomp (SUNU5)." });

// SUNU 6 — kısa
const x6 = [
  [6, "Görüntü kaynağı tanımlama, görüntünün hangi cihaz veya cihaz sınıfı tarafından slayta göre neyini araştırır?", ["Fiyat", "Yakalandığını/oluşturulduğunu", "Sadece seri numarası kutusu", "Sadece pil tipi"], 1, "Kaynak cihaz (SUNU6)." ],
  [6, "Bayer deseninde yeşil filtre oranı slayta göre yaklaşık yüzde kaçtır?", ["%10", "%25", "%50", "%100"], 2, "Yeşil %50 (SUNU6)." ],
  [6, "Aşağıdakilerden hangisi kör (blind) adli tespitin gerekçelerinden biri slayttadır (meta)?", ["Meta daima doğru", "Dosya başlığı/EXIF değişikliğe savunmasız", "Sadece analog", "Sadece müzik"], 1, "Meta manipülasyon (SUNU6)." ],
];
x6.forEach((r) => T(6, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
T(6, { type: "tf", q: "CFA, sensör yüzeyine yerleşik renk filtre düzenidir (slayt).", answer: true, exp: "CFA tanım (SUNU6)." });
T(6, { type: "tf", q: "EXIF metadata genellikle kamera marka ve model, görüntü boyutu, çekim tarihi, JPEG sıkıştırma gibi alanlar içerir (slayt).", answer: true, exp: "EXIF alanları (SUNU6)." });
T(6, { type: "tf", q: "Görüntü son halini almadan önce sensör gürültü azaltma gibi adımlar uygulanabilir (slayt).", answer: true, exp: "İyileştirme hattı (SUNU6)." });
T(6, { type: "tf", q: "Bayer'de kırmızı filtre piksel oranı %50'dir (slayta göre).", answer: false, exp: "R/B %25, yeşil %50 (SUNU6)." });
T(6, { type: "fill", q: "Bayer deseninde kırmızı ve mavi renk filtrelerinin her biri yaklaşık %______ düzeyinde örneklenir (slayt).", answer: ["25", "yirmi beş", "Yirmi beş"], exp: "Her biri %25 (SUNU6)." });
T(6, { type: "fill", q: "Dijital kamera bileşenlerinden alıcı ______ ışığın sensöre ulaşmasını yönlendirmekle görevlidir (slayt).", answer: ["lens", "Lens", "objektif", "Objektif"], exp: "Lens (SUNU6)." });
T(6, { type: "fill", q: "EXIF: Değiştirilebilir Görüntü ______ Formatı (slayt başlığı).", answer: ["Dosyası", "dosyası", "Dosya", "dosya"], exp: "Değiştirilebilir Görüntü Dosyası Formatı (SUNU6)." });

// SUNU 7
const x7 = [
  [7, "Giriş listesinde 'ters projeksiyon' ve 'fotogrametri' hangi genel başlık altındadır (slayt)?", ["Sadece ağ", "Görüntü karşılaştırma ve ölçme", "Sadece ses işleme", "Sadece veritabanı"], 1, "Ders kapağı (SUNU7)." ],
  [7, "Aynı boya pulu kesitinde akkor lamba voltajı değişince slaytta ne değişir?", ["Dosya adı", "Renk sıcaklığı ve dolayısıyla görüntü renkleri", "Sadece piksel sayısı teorisi", "Sadece CPU"], 1, "Aydınlatma/renk sıcaklığı (SUNU7)." ],
  [7, "Biyometrik ölçütler (slaytta giriş maddeleri) hangi dersin konusu ile aynı genel dosyadadır?", ["Sadece IoT sensör", "Görüntü karşılaştırma ve ölçme", "Sadece SQL", "Sadece OS"], 1, "SUNU7 giriş listesi (SUNU7)." ],
];
x7.forEach((r) => T(7, { type: "mc", q: r[1], options: r[2], answer: r[3], exp: r[4] }));
T(7, { type: "tf", q: "Yan yana karşılaştırmada iki mermi, iki lif veya iki yüz örneklenebilir (slayt).", answer: true, exp: "Örnek listesi (SUNU7)." });
T(7, { type: "tf", q: "Işık, renk ve farklı yönelimler, yanıltıcı farklara neden olabilir (slayt).", answer: true, exp: "Karşılaştırma zorlukları (SUNU7)." });
T(7, { type: "tf", q: "Fotogrametri, sadece ses dosyalarının sıkıştırılmasıdır (slayta göre).", answer: false, exp: "Görüntüden ölçü/3B (giriş listesi) (SUNU7)." });
T(7, { type: "fill", q: "Girişte listelenen başlıklardan biri: Yan yana (side by side) ______ (İng. karşılaştırma).", answer: ["karşılaştırma", "karsilastirma", "Karşılaştırma", "comprasion", "Comprasion"], exp: "Side by side comparison (SUNU7 — başlık)." });
T(7, { type: "fill", q: "Ayak ve lastik ______ slaytta 'Görüntü karşılaştırma ve ölçme' dersinin giriş maddelerinden biridir.", answer: ["izleri", "İzleri", "iz", "izi"], exp: "Ayak ve lastik izleri (SUNU7 giriş listesi)." });
T(7, { type: "fill", q: "Yüzey yüksekliği mermi örneğinde korelasyon ______ yüzde seviyesinde verilmiştir (slayt örnek, virgüllü sayı).", answer: ["99,6", "99.6"], exp: "99,6 (SUNU7)." });

// Çoktan seçmelilerde doğru şık hep aynı harfte birikmesin: A/B/C/D arasında dönüşümlü
function redistributeMcAnswerPositions(questions) {
  let k = 0;
  for (const q of questions) {
    if (q.type !== "mc" || !Array.isArray(q.options)) continue;
    const len = q.options.length;
    if (len < 2 || q.answer < 0 || q.answer >= len) continue;
    const target = k % len;
    k += 1;
    const right = q.options[q.answer];
    const wrong = q.options.filter((_, i) => i !== q.answer);
    const next = new Array(len);
    next[target] = right;
    let w = 0;
    for (let i = 0; i < len; i++) {
      if (i === target) continue;
      next[i] = wrong[w++];
    }
    q.options = next;
    q.answer = target;
  }
}
redistributeMcAnswerPositions(out);

const header = `// Adli Bilişim (SUNU 1-7) — yalnızca test (çoktan seçmeli, doğru-yanlış, boşluk).
// Kaynak: ders slaytları (SUNU 1-7). Otomatik: build-adli-questions.mjs
const ADLI_TOPICS = {
  1: { title: "SUNU 1 — Adli bilişime giriş, kavram, aşamalar, mevzuat, içerik koruma", short: "SUNU 1" },
  2: { title: "SUNU 2 — Temel adli bilişim, BTK, terimler, hash, sektör", short: "SUNU 2" },
  3: { title: "SUNU 3 — Sayı sistemleri, veri, hash, dosya sistemi, MFT/NTFS", short: "SUNU 3" },
  4: { title: "SUNU 4 — Adli imaj, formatlar, yazma koruma, zorluklar", short: "SUNU 4" },
  5: { title: "SUNU 5 — M57 vakası, RAM, Volatility", short: "SUNU 5" },
  6: { title: "SUNU 6 — Görüntü, kamera, CFA/Bayer, EXIF, kör tespit", short: "SUNU 6" },
  7: { title: "SUNU 7 — Karşılaştırma, ölçüm, fotogrametri", short: "SUNU 7" },
};
const ADLI_QUESTIONS = `;
const text = header + JSON.stringify(out, null, 2) + ";\n";
fs.writeFileSync(new URL("./adli-questions.js", import.meta.url), text);
console.log("Wrote", out.length, "questions");
