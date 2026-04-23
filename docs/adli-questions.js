// Adli Bilişim (SUNU 1-7) — yalnızca test (çoktan seçmeli, doğru-yanlış, boşluk).
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
const ADLI_QUESTIONS = [
  {
    "topic": 1,
    "type": "mc",
    "q": "Olay yerinde maddi suç delilleri kaç ana başlık altında toplanabilir?",
    "options": [
      "4",
      "2",
      "3",
      "5"
    ],
    "answer": 0,
    "exp": "Biyolojik, Kimyasal, Fiziksel, İzler (dört başlık)."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Locard'ın değişim prensibine göre bilişim sistemlerinde aşağıdakilerden hangisi vurgulanır?",
    "options": [
      "İz bırakılmaz",
      "İz bırakmadan işlem neredeyse imkansızdır",
      "Dijital iz yoktur",
      "Prensip yalnızca ağa uygulanır"
    ],
    "answer": 1,
    "exp": "Değişim prensibi bilişim sistemlerinde de geçerlidir."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Adli bilişim inceleme süreci beş aşamada anlatılmıştır. Aşamalardan biri aşağıdakilerden hangisidir?",
    "options": [
      "Kurumsal pazarlama",
      "Borsa analizi",
      "Raporlama",
      "Fiziksel baskı"
    ],
    "answer": 2,
    "exp": "Hazırlık, Toplama, İnceleme, Çözümleme, Raporlama."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Adli bilişimin dört alt dalından biri aşağıdakilerden hangisidir?",
    "options": [
      "Ahşap adli bilişimi",
      "Beton adli bilişimi",
      "Enerji adli bilişimi",
      "Ağ ve İnternet adli bilişimi"
    ],
    "answer": 3,
    "exp": "Bilgisayar, ağ/internet, gömülü, sosyal ağ adli bilişimi."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Türkiye mevzuatında adli bilişimle ilgili düzenleme özetle hangi kanunda m. 134 ile anılır?",
    "options": [
      "CMK",
      "TBK",
      "HMK",
      "KVKK"
    ],
    "answer": 0,
    "exp": "Ceza Muhakemesi Kanunu m. 134 ve Yönetmelik m. 17."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Computer Forensics ifadesi sonradan neden 'Digital Forensics' ile de kullanılır?",
    "options": [
      "Daha kısa yazılır",
      "Elektronik deliller yalnızca PC'de kalmamıştır",
      "Eski ifade yasaklandı",
      "Sadece kamera için"
    ],
    "answer": 1,
    "exp": "Slaytta digital forensics genelleştirilmesi anlatılmıştır."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Adli bilişim 'bilgisayar adli bilimi' ile ilişkili kavram olarak hangi İngilizce terime karşılık gelir?",
    "options": [
      "web design",
      "kernel panic",
      "computer forensics",
      "router config"
    ],
    "answer": 2,
    "exp": "Computer forensics / bilgisayar adli bilimi."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Adli bilişim 5N1K benzeri hangi soru setine cevap arar?",
    "options": [
      "Sadece ne zaman",
      "Sadece kaç",
      "Sadece maliyet",
      "Ne, nerede, neden, ne zaman, nasıl, kim"
    ],
    "answer": 3,
    "exp": "5N1K benzeri sorular slayttadır."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Adli tıp ve adli kimya hangi tür maddi delil gruplarında uzmanlık sağlar?",
    "options": [
      "Biyolojik ve kimyasal maddi deliller",
      "Yalnızca iz",
      "Yalnızca ses",
      "Yalnızca metal"
    ],
    "answer": 0,
    "exp": "Giriş: biyolojik ve kimyasal delil değerlendirmesi."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Bilgi güvenliği, hukuk ve bilgisayar güvenliğinin kesiştiği alt alan slayta göre hangisidir?",
    "options": [
      "Grafik tasarım",
      "Adli bilişim",
      "İşletme",
      "Tarih"
    ],
    "answer": 1,
    "exp": "Tasnif: Bilgi güvenliği altında adli bilişim."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Aşağıdakilerden hangisi adli bilişimde değerlendirilebilen delil tipi slayttaki örneklerden değildir?",
    "options": [
      "E-posta kayıtları",
      "SMS/Whatsapp",
      "Bulaşık makinesi motoru hızı (teknik dava yoksa)",
      "Sistem olay kayıtları"
    ],
    "answer": 2,
    "exp": "Bilgisayar/iletişim kayıtları örneklenmiştir."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Dijital içerik koruma açıklaması bağlamında hangisi popüler tekniklerden biridir?",
    "options": [
      "DNS çözümleme",
      "Ping",
      "NFC eşleme",
      "Filigranlama (watermarking) ve steganografi"
    ],
    "answer": 3,
    "exp": "SUNU1 son bölümlerinde watermarking ve steganografi vurgulanır."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Aktif güvenlik önlemlerinin sınıflandırılması slayta göre aşağıdakileri içerir:",
    "options": [
      "Filigran ve steganografi gibi yöntemler (aktif)",
      "Sadece antivirüs",
      "Sadece yedekleme",
      "Sadece kablo bağlama"
    ],
    "answer": 0,
    "exp": "Aktif önlemler yardımcı bilgi gerektirir (filigran/steganografi)."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Steganografi; istihbarat ve terör bağlamında slayta göre neden dikkat çekicidir?",
    "options": [
      "Çünkü dosya yok",
      "Görüntü veya medya içine bilgi gizlemek",
      "Sadece donanım hatası",
      "Sadece ağ hızı"
    ],
    "answer": 1,
    "exp": "Görüntü içine metin/görsel gizleme vurgulanır."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Dijital görüntü bütünlüğü tehditleri neleri kapsar? (slayt)",
    "options": [
      "Sadece basılı gazete",
      "Sadece analog fotoğraf",
      "Görüntülerin manipüle edilmesi ve sahtecilik riski",
      "Görüntü yok artık"
    ],
    "answer": 2,
    "exp": "Photoshop, Gimp vb. ile manipülasyon; sahte haber hızı."
  },
  {
    "topic": 1,
    "type": "tf",
    "q": "Hazırlık aşaması, bazı çalışmalarda adli bilişim süreç dışı bırakılabilir (slaytta not).",
    "answer": true,
    "exp": "Aşama 1 bazen dışlanabilir notu vardır."
  },
  {
    "topic": 1,
    "type": "tf",
    "q": "Pasif güvenlik önlemleri, ek yardımcı bilgi gerektirmeyen doğrulama yöntemlerini de kapsar (slaytta tanıtım).",
    "answer": true,
    "exp": "Aktif/pasif ayrımı anlatılmıştır."
  },
  {
    "topic": 1,
    "type": "tf",
    "q": "Adli bilişim yalnızca mahkeme süreçlerinde değil; fikri mülkiyet taramalarında da kullanılabilir.",
    "answer": true,
    "exp": "Güvenlik/mahremiyet ve IP araması alanları anılır."
  },
  {
    "topic": 1,
    "type": "tf",
    "q": "Maddi suç delilleri arasında sadece dijital deliller vardır; biyolojik delil yoktur.",
    "answer": false,
    "exp": "Biyolojik, kimyasal, fiziksel, iz ayrımları vardır."
  },
  {
    "topic": 1,
    "type": "fill",
    "q": "Maddi suç delilleri dört kategoride: biyolojik, kimyasal, fiziksel, ______ delilleri.",
    "answer": [
      "iz",
      "i̇z",
      "i̇zler",
      "izler"
    ],
    "exp": "Dördüncü kategori: iz."
  },
  {
    "topic": 1,
    "type": "fill",
    "q": "Değişim prensibi Locard ______ olarak da anılır.",
    "answer": [
      "teoremini",
      "teoremi",
      "teorem",
      "teoremi "
    ],
    "exp": "Locard teoremi = Değişim prensibi."
  },
  {
    "topic": 1,
    "type": "fill",
    "q": "Adli bilişim aşamaları slayttaki sıraya göre: Hazırlık, Toplama, İnceleme, Çözümleme, ______.",
    "answer": [
      "raporlama",
      "Raporlama"
    ],
    "exp": "Beşinci aşama Raporlama."
  },
  {
    "topic": 1,
    "type": "fill",
    "q": "CMK m. ______ ve yönetmelik m. 17 adli bilişimle ilgili hükümler içerir (slayt).",
    "answer": [
      "134"
    ],
    "exp": "CMK 134."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Sektör, sabit diskte veri depolamanın en küçük birimi olarak slayta göre genellikle kaç bayt tutar?",
    "options": [
      "128",
      "2048",
      "1",
      "512"
    ],
    "answer": 3,
    "exp": "Genellikle 512 bayt."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Ortam verisi (Ambient Data) aşağıdakilerin hangisinde bulunabilir?",
    "options": [
      "Dosya boşluğu, ayrılmamış kümeler, sanal bellek gibi alanlarda",
      "Sadece görev çubuğu",
      "Sadece router log",
      "Sadece DNS"
    ],
    "answer": 0,
    "exp": "Erişilemeyen alanlardaki veriler (Ambient Data)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Aktif dosya/veri (Active Data) neyi ifade eder?",
    "options": [
      "Silinmiş tüm gizli veri",
      "Silinmeyen ve normal kullanımda erişilebilen veri",
      "Sadece RAM",
      "Sadece CMOS"
    ],
    "answer": 1,
    "exp": "Aktif veri tanımı: silinmeyen, kolay erişilebilen."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Case Folder (Dava dosyası) aşağıdakilerden hangisidir?",
    "options": [
      "Yalnızca Word dosyası",
      "Fiziksel kutu",
      "Olayla ilgili dijital imajları içeren dava dijital dosyası",
      "Sadece e-posta"
    ],
    "answer": 2,
    "exp": "Dava dosyası: tüm imajlar."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Jumplists hangi amaçla kullanılabilir?",
    "options": [
      "Disk formatlamak",
      "BIOS ayarı",
      "Port yönetimi",
      "Windows'ta belirli dosyaların kullanım geçmişi"
    ],
    "answer": 3,
    "exp": "Windows 7+ Jumplists."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Hash (karma) aynı olduğunda slayttaki yorum aşağıdakilerden hangisine yakındır?",
    "options": [
      "Bir kopyanın orijinaliyle aynı olduğu neredeyse garanti",
      "Dosyalar kesin farklıdır",
      "Hash kullanılamaz",
      "Sadece disk için geçerli"
    ],
    "answer": 0,
    "exp": "Eşleşen karmanın aynılığı neredeyse garanti ifadesi."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Acquisition/İmaj terimi slayta göre aşağıdakilere en yakındır:",
    "options": [
      "Dava dilekçesi",
      "Bilgisayarın bit-bit kopyası / adli çalışma görüntüsü",
      "E-posta imzası",
      "Antivirüs taraması"
    ],
    "answer": 1,
    "exp": "İmaj: bit-bit kopya veya adli image."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "bit-to-bit kopya tanımı hangisini içerir?",
    "options": [
      "Sadece açık dosyalar",
      "Sadece MFT",
      "Tahsisine bakmaksızın ardışık her sektörün kopyalanması",
      "Sadece boot"
    ],
    "answer": 2,
    "exp": "Tüm sektörlerin ardışık kopyası."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Cluster (Küme) kavramı: dosyaya atanan sektörler grubu, Windows'ta büyüklük tipik aralık?",
    "options": [
      "1-2 sektör",
      "Her zaman 1",
      "Sonsuz",
      "4-64 sektör arası değişebilir"
    ],
    "answer": 3,
    "exp": "4'ten 64 sektöre kadar değişebilir (slayt)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "BTK Akademi 'Adli bilişime giriş' dersi ile ilgili aşağıdakilerden hangisi doğru olabilir?",
    "options": [
      "Kayıt ve sertifika alınabildiği vurgulanır",
      "Sertifika alınamaz",
      "Sadece yurtdışı",
      "BTK yoktur"
    ],
    "answer": 0,
    "exp": "SUNU2'de sertifika ve kayıt anlatılmıştır."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Hukuki delil açısından slayttaki 'Adli bilişim' tanımlarından biri: elektronik cihazlardan dijital kanıt alıp ne için?",
    "options": [
      "Sadece yedekleme",
      "Mahkemede delil kabul edilebilmesi için belirli ilkelere göre",
      "Oyun oynamak",
      "Borsa spekülasyonu"
    ],
    "answer": 1,
    "exp": "Delil niteliği + ilke/disiplin."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "BTK sunum eğitim akışında 'Hukuki Boyut' hangi bölümde anılır?",
    "options": [
      "Bölüm 4",
      "Bölüm 7 yok",
      "Bölüm 1",
      "Bölüm 0"
    ],
    "answer": 2,
    "exp": "BTK Akış: Bölüm1 Tanıtım, Hukuki Boyut, Dijital delil/zincir."
  },
  {
    "topic": 2,
    "type": "tf",
    "q": "Adli bilişim, olay müdahalesi ve siber tehdit istihbaratı gibi alanlarda destek sağlayabilir.",
    "answer": true,
    "exp": "Çalışma alanları listesinde vardır."
  },
  {
    "topic": 2,
    "type": "tf",
    "q": "Encryption, dosyayı yetkisiz taraflarca okunamaz hale getirme işlemidir.",
    "answer": true,
    "exp": "Şifreleme terimi açıklaması vardır."
  },
  {
    "topic": 2,
    "type": "tf",
    "q": "Allocation Block ve Cluster farkı slaytlarda; ikisi de dosyaya ayrılan alan ifade eder (Windows bağlamı).",
    "answer": true,
    "exp": "Tahsis bloğu = kümeyle ilişkili açıklama."
  },
  {
    "topic": 2,
    "type": "tf",
    "q": "Sektör; diskte 4096 bit olduğu kesin (slayt).",
    "answer": false,
    "exp": "Bit değil bayt: genellikle 512 bayt sektör."
  },
  {
    "topic": 2,
    "type": "fill",
    "q": "Bir sektör genellikle ______ bayt veri depolayabilen bitişik alandır.",
    "answer": [
      "512"
    ],
    "exp": "512 bayt."
  },
  {
    "topic": 2,
    "type": "fill",
    "q": "Hash, metin veya veriden üretilen ______ değeridir (slayt).",
    "answer": [
      "karma",
      "Karma",
      "özet",
      "karma değeri"
    ],
    "exp": "Karma/hash değeri."
  },
  {
    "topic": 2,
    "type": "fill",
    "q": "Ortam verisi, kullanıcının normalde erişemediği alanlarda (dosya boşluğu, ayrılmamış kümeler, ______ dosyaları) bulunur.",
    "answer": [
      "sanal bellek",
      "swap",
      "page file"
    ],
    "exp": "Sanal bellek (swap/page) örneklenmiştir."
  },
  {
    "topic": 2,
    "type": "fill",
    "q": "BTK Akademi adlı sitede 'Adli bilişime giriş' dersi ______ alanında sertifika ile sunulmaktadır (slayt vurgu).",
    "answer": [
      "adli bilişim",
      "adli bilişi̇m",
      "online",
      "eğitim",
      "eğitim "
    ],
    "exp": "BTK adli bilişim eğitimi vurgulanır."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "8 bitten oluşan bir byte kaç farklı değeri (0-255) temsil edebilir?",
    "options": [
      "8",
      "128",
      "512",
      "256"
    ],
    "answer": 3,
    "exp": "2^8=256 farklı değer (slayt)."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "On altılı sistemde 10-15 arası değerler slayta göre harflerle nasıl ifade edilir?",
    "options": [
      "A-F 10-15 (A=10..F=15 olacak)",
      "A-E",
      "G-L",
      "P-Z"
    ],
    "answer": 0,
    "exp": "A-F sembolleri (10-15) kullanılır (slayt)."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "(23B)16 dönüşümü örnek 571'lik ondalık değer için slayta göre ifade edilmiştir. Bu aşağıdakilerden hangisidir?",
    "options": [
      "Octal",
      "Hexadecimal",
      "Base64",
      "BCD"
    ],
    "answer": 1,
    "exp": "On altılı (hex) gösterim."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "MD5 slayttaki açıklamaya göre adli bilişimde neden önemlidir?",
    "options": [
      "Grafik çizmek",
      "Ağ hızı",
      "Kasıtsız değişikliği/veri bütünlüğünü kontrol",
      "Ses kalitesi"
    ],
    "answer": 2,
    "exp": "Bütünlük sağlama, kasıtsız değişiklik."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "SHA-1, MD5'e göre slayttaki farka göre kaç bitlik değer üretir (yaklaşık ifade)?",
    "options": [
      "64 bit",
      "128 bit",
      "8 bit",
      "160 bit"
    ],
    "answer": 3,
    "exp": "SHA-1, 160 bit değer üretir; MD5'den fark (slayt).\n"
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "SHA-2 ailesi hangi bit uzunluklarına sahip olabilir? (slayt)",
    "options": [
      "224, 256, 384, 512",
      "Sadece 64",
      "Sadece 32",
      "Sadece 1"
    ],
    "answer": 0,
    "exp": "SHA-224, SHA-256, vb. aile."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "MD ailesi hash fonksiyonlarından hangi ikisi 32 bit makineler için tasarlanmıştır (slayt)?",
    "options": [
      "MD0 ve MD1",
      "MD4 ve MD5",
      "MD8 ve MD9",
      "MD2 ve MD8"
    ],
    "answer": 1,
    "exp": "MD4 ve MD5 (32 bit için)."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "Byte dosya sistemi türü hakkında bilgi veren değer örneğin '07' neyi ifade eder (MFT örneği bağlamı)?",
    "options": [
      "FAT12",
      "exFAT dışlandı",
      "NTFS (örnek kod)",
      "CDFS"
    ],
    "answer": 2,
    "exp": "Kod: 07 = NTFS satırı (slaytta bölümlü tabloda)."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "MFT, slayttaki VBR-NTFS kısmında neyi ifade eder?",
    "options": [
      "Mouse",
      "Mail transfer",
      "Media filter",
      "Ana dosya tablosu (Master File Table)"
    ],
    "answer": 3,
    "exp": "MFT: NTFS ana dosya tablosu."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "Aşağıdakilerden hangisi temel veri yapıları örneğidir (slayt)?",
    "options": [
      "Karakter, tamsayı, gerçel sayı",
      "Sadece SQL sunucu",
      "Sadece web cookie",
      "Sadece bitmap"
    ],
    "answer": 0,
    "exp": "Karakter, tamsayı, gerçel sayı; string ve array türetimleri."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "Veri: aynı bit dizisinin farklı kodlama (ASCII, hex, BSD) ile yorumlanması slaytta hangi noktayı vurgular?",
    "options": [
      "Aynı veri farklı olamaz",
      "Veri çoklu yorum (biçim)",
      "Kodlama yok",
      "Sadece ses"
    ],
    "answer": 1,
    "exp": "VERİ KAVRAMI: BTK bit dizisi örneği (ASCII, hex, BSD)."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "İkili toplamada 2 ve katları bir sonraki basamağa 'elde' (carry) gibi geçer (slayt açıklaması). Aşağıdakilerden hangi tabanda?",
    "options": [
      "10'luk toplamada 10",
      "16'lık toplamada 9",
      "İkili toplamada 2",
      "8'lik toplamada 1"
    ],
    "answer": 2,
    "exp": "Toplama kuralı 2'lik sistem."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "Sekizlik (octal) örnek: (1073)8 dönüştüğü ondalık değer slaytta ne olarak verilmiştir?",
    "options": [
      "200",
      "1000",
      "255",
      "571"
    ],
    "answer": 3,
    "exp": "571 örneğinde octal 1073."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "2'den 8'likye dönüşümde 3'erli bit grupları neden kullanılır?",
    "options": [
      "2^3=8; her grup bir octal rakam",
      "2^2=4",
      "Rastgele",
      "5 için"
    ],
    "answer": 0,
    "exp": "3 bit = 0-7 arası octal rakam (slayt dönüşümü)."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "2'den 16'ya dönüşümde 4'erli bit grupları neden uygundur (slayt)?",
    "options": [
      "2^2=2",
      "2^4=16; her grup bir hex basamağı",
      "Sadece estetik",
      "10 için"
    ],
    "answer": 1,
    "exp": "4 bit = 0-F arası hex."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "Aşağıdakilerden hangisi MD5 ile ilgili slayttaki yargıya daha yakındır?",
    "options": [
      "MD4'ten hızlı ve daha az güvenilir",
      "MD4 ile aynı hız, daha kötü",
      "MD4'ten daha yavaş ama daha güvenilir",
      "MD4 yok"
    ],
    "answer": 2,
    "exp": "MD5, MD4'ten yavaş; daha güvenilir denmiştir."
  },
  {
    "topic": 3,
    "type": "tf",
    "q": "MD5 mesaj digest algoritması, herhangi bir uzunluktaki girdiden sabit boyutlu özet üretebilir (slayt).",
    "answer": true,
    "exp": "MD5 yapısı anlatılmıştır."
  },
  {
    "topic": 3,
    "type": "tf",
    "q": "Video verisi, görüntüye ek olarak hangi karenin ne zaman geldiğini (zaman) içerir (slaytta anlatıldığı gibi).",
    "answer": true,
    "exp": "Video = görüntü + zaman bilgisi."
  },
  {
    "topic": 3,
    "type": "tf",
    "q": "Ses verisi, genlik ve frekansın zamanla değişimine göre kodlanabilir (slaytta anlatıldığı gibi).",
    "answer": true,
    "exp": "Ses sayısallaştırma açıklaması."
  },
  {
    "topic": 3,
    "type": "tf",
    "q": "Ondalık (decimal) sistem 0-9 dışı A-F rakamları kullanır (slayta göre).",
    "answer": false,
    "exp": "A-F, hex sisteminde; decimal 0-9."
  },
  {
    "topic": 3,
    "type": "fill",
    "q": "İkili sistemde 0/1 değerlerine binary digit kısaca ______ adı verilir.",
    "answer": [
      "bit",
      "Bit",
      "bıt"
    ],
    "exp": "Bit (binary digit)."
  },
  {
    "topic": 3,
    "type": "fill",
    "q": "8 bit = 1 ______ = 2^8 olası farklı değer (0-255) slayt bağlamı.",
    "answer": [
      "byte",
      "bayt",
      "Byte"
    ],
    "exp": "1 byte = 8 bit."
  },
  {
    "topic": 3,
    "type": "fill",
    "q": "MD4 ve MD5, ______ bit makineler için tasarlanmıştır (slayt ifadesi).",
    "answer": [
      "32",
      "32'lik",
      "otuziki"
    ],
    "exp": "32 bit makineler (slayt)."
  },
  {
    "topic": 3,
    "type": "fill",
    "q": "SHA-1, MD5'e göre ______ bitlik karma değeri üretir (slayt).",
    "answer": [
      "160"
    ],
    "exp": "160 bit."
  },
  {
    "topic": 3,
    "type": "fill",
    "q": "2'li tabanda n hane ile yazılabilecek en büyük değer formülü (slayt): n^k - 1'de k taban, yani 2^4-1=______ (4 bit en büyük ondalık).",
    "answer": [
      "15",
      "0b1111"
    ],
    "exp": "15 (F) en büyük 4 bit."
  },
  {
    "topic": 3,
    "type": "fill",
    "q": "NTFS üzerinde ana dosya tablosu kısaltması ______ (MFT) olarak geçer.",
    "answer": [
      "MFT",
      "mft"
    ],
    "exp": "Master File Table (MFT)."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "Fiziksel (physical) imaj neyi kapsar?",
    "options": [
      "Sadece görünür belgeler",
      "Sadece belge",
      "Sadece ağ trafiği",
      "Silinmiş veriler, ayrılmamış alanlar, MBR/VBR, bölüm, tüm sürücü birebir"
    ],
    "answer": 3,
    "exp": "Fiziksel: her sektör, bölümler, ayrılmamış alan..."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "Mantıksal (logical) imaj aşağıdakilerden hangisine uygundur?",
    "options": [
      "Belirli mantıksal bölüm/birim — çoğunlukla dosya sistemi erişen alan",
      "Sadece boş alan",
      "Sadece CPU cache",
      "Sadece e-posta sunucu"
    ],
    "answer": 0,
    "exp": "Mantıksal: bölüm/alan seçimi, dosya sistemi merkezli."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "Sınırlı standart imaj formatları arasında slayta göre aşağıdakiler anılır?:",
    "options": [
      "JPEG, PNG",
      "DD, Smart, AFF, E01 (önemlileri)",
      "MP4, AV",
      "BMP only"
    ],
    "answer": 1,
    "exp": "DD, Smart, AFF, E01."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "E01 imajı hangi firmayla ilişkilendirilir (slayt)?",
    "options": [
      "AccessData dışı",
      "Microsoft",
      "EnCase",
      "Google"
    ],
    "answer": 2,
    "exp": "E01, EnCase formatı."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "E01 formatının avantajları arasında aşağıdakilerden hangisi vurgulanır?",
    "options": [
      "Sadece açık kaynak",
      "Hiç metadata yok",
      "Sadece Linux",
      "Sıkıştırma, parola, meta veri, dosya başına sağlama, MD5 karması"
    ],
    "answer": 3,
    "exp": "Avantajlar: meta, sağlama, sıkıştırma, parola..."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "DD (raw) imaj açıklaması slayta göre aşağıdakilere uygundur:",
    "options": [
      "Depolamadaki verinin ham hali, sıkıştırma yok, uzantı .dd .001 .img",
      "Ağ trafiği",
      "Sadece bellek",
      "Sadece SQL"
    ],
    "answer": 0,
    "exp": "DD raw, ham, sıkıştırma yok."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "SMART imaj formatı açıkça nasıl nitelenmiştir (slayt)?",
    "options": [
      "En yaygın yeni",
      "Linux, meta segmentli, artık yaygın değil",
      "Sadece iOS",
      "Sadece Mac"
    ],
    "answer": 1,
    "exp": "Yaygın değil notu; Linux kökenli, segmentli."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "AFF formatı açık bir formattır ve neyi birleştirir?",
    "options": [
      "Ağ+Wi-Fi",
      "Sadece RAM",
      "Metadata ve veri aynı dosyada, sıkıştırma desteği (slaytta)",
      "Sadece CPU"
    ],
    "answer": 2,
    "exp": "AFF: advanced forensic format, açık, meta+veri, sıkıştırma."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "Gömülü/çıkarılamaz disk durumunda slayttaki pratik ne olabilir?",
    "options": [
      "İmaj yok",
      "Cihazı yok et",
      "Formatla",
      "Canlı (live) imaj/önyükleme diski ile"
    ],
    "answer": 3,
    "exp": "Yerleşik depolamada canlı imaj, boot disk (zorluk bölümü)."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "Yazma koruma (write block) neden adli kopya almada vurgulanır?",
    "options": [
      "Kaynak medyayı değişimden korumak",
      "Daha hızlı format",
      "Wi-Fi açar",
      "RAM temizlemez ama isteriz"
    ],
    "answer": 0,
    "exp": "Bütünlük: kanıt değişmesin diye write blocker (slayt metni: yazma koruması)."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "Aşağıdakiler imaj alma aracı/donanımı arasında slayta göre anılır:",
    "options": [
      "Sadece Excel",
      "Ditto, Guymager, Tableau, dd, FTK Imager",
      "Sadece Paint",
      "Sadece regedit"
    ],
    "answer": 1,
    "exp": "dd, FTK Imager, EnCase, Guymager, DEFT, Tableau, Ditto (slaytlar)"
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "Adli kopya (imaj) neyi ifade eder?",
    "options": [
      "Sadece ağ izleme",
      "Sadece yedekleme",
      "Suç soruşturması veya siber saldırı sonrası hedef cihaz hafızasından dijital delil için kopya alma",
      "Sadece güncelleme"
    ],
    "answer": 2,
    "exp": "Tanım: hedef hafıza kopyalama (SUNU4 ilk sayfalar)."
  },
  {
    "topic": 4,
    "type": "tf",
    "q": "E01, kapalı/özel form olabilir; her araç açamayabilir (slaytta dezavantaj).",
    "answer": true,
    "exp": "Belgelenmemiş kapalı format, bazı dışı araçlar açmaz (slayt dezavantaj)."
  },
  {
    "topic": 4,
    "type": "tf",
    "q": "Fiziksel imaj, silinmiş dosyalar ve ayrılmamış (slack) tür alanları da içerir (slayta göre).",
    "answer": true,
    "exp": "Fiziksel: tüm bit alanı birebir."
  },
  {
    "topic": 4,
    "type": "tf",
    "q": "Adli tıp uzmanı değilseniz, slayttaki uyarı gereği, sistemi başlattıktan sonra canlı görüntülemeye dikkat edilmesi gerekir (riskli eylem yok/uyarlı).",
    "answer": true,
    "exp": "Canlı imaj/uyarlar slayttadır; uzman dışı risk (slayt tümcesi: asla/kaçın gibi uyar)."
  },
  {
    "topic": 4,
    "type": "tf",
    "q": "Mantıksal imaj, tüm sürücü sektörlerinin birebir kopyasıdır (fizikselle aynı).",
    "answer": false,
    "exp": "Mantıksal, seçili alan/parçaya odak; fiziksel tüm sürücüyü (slayt ayrımı)."
  },
  {
    "topic": 4,
    "type": "fill",
    "q": "Fiziksel imaj, MBR, VBR, tüm sürücü bitleri ve ______ dosyaları gibi tüm sürücü birebir içeriğini kopyalar (slayta göre).",
    "answer": [
      "silinmiş",
      "silinmis"
    ],
    "exp": "Silinmiş dosyalar dahil."
  },
  {
    "topic": 4,
    "type": "fill",
    "q": "EnCase imajı ______ uzantısı/segmentleri ile bilinir (slayt).",
    "answer": [
      "E01",
      "e01"
    ],
    "exp": "E01 formatı."
  },
  {
    "topic": 4,
    "type": "fill",
    "q": "Ham (raw) imaj uzantıları: .dd, .001, ______ (slaytta anılan).",
    "answer": [
      ".img",
      "img"
    ],
    "exp": "dd, .img uzantıları (slayt)."
  },
  {
    "topic": 4,
    "type": "fill",
    "q": "AFF, Gelişmiş Adli Tıp Formatı'nın açık ______ formatıdır (slaytta açık format vurgu).",
    "answer": [
      "açık",
      "acik",
      "open",
      "Açık"
    ],
    "exp": "Açık (open) format (AFF açık)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "M57 davasında sızıntıyla ilgili gizli veri türü slayta göre aşağıdakilerden hangisine örnektir?",
    "options": [
      "M57.pdf",
      "Sadece .txt",
      "Sadece video",
      "Excel (.xlsx) türü e-tablo"
    ],
    "answer": 3,
    "exp": "Gizli bilgili Excel/şirket m57plan.xlsx örneğinde (SUNU5)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "Volatility hakkında slayttaki açıklama aşağıdakilere uygundur:",
    "options": [
      "Açık kaynaklı, olay/kötü amaçlı yazılım analizinde bellek framework",
      "Sadece kapalı ticari",
      "Sadece Android",
      "Sadece router"
    ],
    "answer": 0,
    "exp": "Açık kaynak Volatility, olay ve malware analizinde (RAM dump)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "imageinfo volatil komutu (örnek) neyi hedefler (slaytta)?",
    "options": [
      "Disk format",
      "Bellek dökümünün profili, işletim sistemi tipi, zaman (imageinfo -f .mem)",
      "Yazıcı sürücü",
      "RAM boyutu (donanım)"
    ],
    "answer": 1,
    "exp": "imageinfo: OS profili, zaman, temel imaj meta."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "RAM incelemesinde aşağıdakilerden hangisi bellekten çıkarılabilecek türde bilgi olarak listelenir?",
    "options": [
      "Sadece disk seri",
      "Bios şifre üretmek dışı",
      "Oturum açık ağ bağlantıları, IE geçmişi, CMD komutları, pano, YARA taraması (slayt örnek listesi kapsar)",
      "Modem ışığı"
    ],
    "answer": 2,
    "exp": "Slayt: çoklu volatil yetenekler (RAM) — örnek açıklama: bağlantı, geçmiş, yara, pano, cmd..."
  },
  {
    "topic": 5,
    "type": "tf",
    "q": "M57 davası bir sanal şirket senaryosu örneğidir; Jean'in bilgisayarı imaj alınabilir (slayt).",
    "answer": true,
    "exp": "Vaka: Jean bilgisayarı, M57 sızıntı (SUNU5)."
  },
  {
    "topic": 5,
    "type": "tf",
    "q": "Volatility komut satırı yardımı için -h kullanılır (slaytta h komutu vurgu).",
    "answer": true,
    "exp": "volatility -h (yardım)."
  },
  {
    "topic": 5,
    "type": "tf",
    "q": "RAM, kalıcı depolamadır; kapatınca tüm imaj aynen kalır (slayta göre).",
    "answer": false,
    "exp": "RAM geçici; analiz neden değerli: volatil veri (slayt anlamı)."
  },
  {
    "topic": 5,
    "type": "tf",
    "q": "Vaka kapsamında m57plan.xlsx karşılaştırmak için kopya verilebilir (slayt).",
    "answer": true,
    "exp": "Karşılaştırma m57plan.xlsx örnek (slayt vaka)."
  },
  {
    "topic": 5,
    "type": "fill",
    "q": "Volatility, açık kaynaklı bir adli ______ çerçevesidir (bellek, slayt).",
    "answer": [
      "bellek",
      "Bellek",
      "ram",
      "memory"
    ],
    "exp": "Bellek/dump framework."
  },
  {
    "topic": 5,
    "type": "fill",
    "q": "Bellek dökümüyle birlikte ______ komutları, cmd geçmişi, YARA, pano, ekran gibi incelemeler slayttaki örnekler arasındadır (bir örnek yazın: ____ komutları).",
    "answer": [
      "windows komut",
      "cmd",
      "komut",
      "windows"
    ],
    "exp": "CMD/komut satırı geçmişi (slaytta: Windows Command Prompt (CMD) girdi komutları — fill normalize cmd)."
  },
  {
    "topic": 5,
    "type": "fill",
    "q": "M57'de sızıntı kaynağı yönünde şüphe, CFO ______ üzerine odaklanır (slayt vaka).",
    "answer": [
      "Jean",
      "jean",
      "CFO"
    ],
    "exp": "Jean (CFO) şüphe/erişim (slayt vaka hikayesi - Excel Jean bilgisayarından)."
  },
  {
    "topic": 5,
    "type": "fill",
    "q": "imageinfo, bellek imajı için işletim sistemi ve imajla ilgili temel profil bilgisiyle birlikte ______ bilgisini de verir (slayt açıklaması).",
    "answer": [
      "zaman",
      "tarih",
      "görüntü zamanı",
      "timestamp"
    ],
    "exp": "Görüntü zamanı benzeri meta (imageinfo çıktısı açıklaması)."
  },
  {
    "topic": 5,
    "type": "fill",
    "q": "Bellek incelemesinde (Volatility) ______ kuralları ile kötü amaçlı yazılım taraması yapılabilir (slayt ifadesi, İng. YARA).",
    "answer": [
      "YARA",
      "yara",
      "Yara"
    ],
    "exp": "YARA (slayt, RAM) — kötü amaçlı yazılım taraması (YARA kurallarını kullanarak)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "Bellek incelemesinde pano, ekran görüntüleri, karma şifreler ve sertifika bilgileri neden değerli olabilir? (kavram)",
    "options": [
      "Hiç gerek yok",
      "Sadece SSD",
      "Sadece NTFS MFT",
      "Aktif oturum ve anlık kullanıcı/kripto ve iz izleri bırakır (slayt kapsar)"
    ],
    "answer": 3,
    "exp": "Aktif bellek, oturum ve gizli veri izleri (slayt RAM sayfası)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "M57 senaryosunda toplantı alışkanlıkları: uzaktan çalışma, e-posta ve forum üzerinden belge: delil türü açısından aşağıdakilere dikkat slayttaki neden?",
    "options": [
      "E-posta, forum metadatası ve bilgisayar imajı birlikte inceleme (slayt hikayesi - dosyalar e-posta ile, forumda yayın)",
      "Sadece kağıt",
      "Sadece BTK",
      "Sadece DNS"
    ],
    "answer": 0,
    "exp": "Dijital izler: e-posta ve forum + imaj (vaka hikayesi)."
  },
  {
    "topic": 6,
    "type": "mc",
    "q": "Dijital kamera görüntülemede temel iki bileşen slayta göre hangisidir?",
    "options": [
      "LCD ve piksel",
      "Lens ve sensör",
      "SD kart ve fan",
      "USB ve HDMI"
    ],
    "answer": 1,
    "exp": "İki ana bileşen: lens + sensör (SUNU6)."
  },
  {
    "topic": 6,
    "type": "mc",
    "q": "CFA (Color Filter Array) ne işe yarar (slayt)?",
    "options": [
      "Wi-Fi sinyal",
      "Sadece pil",
      "Renk filtre düzeni, tek sensörle renkli bilgi; Bayer örnek (ye %50, kırmızı/mavi %25)",
      "Sadece zoom"
    ],
    "answer": 2,
    "exp": "CFA, sensör boyunca renk örneklemek (Bayer, ye%50, R/B %25) (slayt sayısal)."
  },
  {
    "topic": 6,
    "type": "mc",
    "q": "Bayer desenine göre neden yeşil filtrelere daha fazla pay verilir? (slayt)",
    "options": [
      "Tesadüf",
      "Yeşil ucuz değil",
      "Mavi pahalı",
      "İnsan görme sistemi (HVS) yeşile daha duyarlı (slayt açıklaması)"
    ],
    "answer": 3,
    "exp": "HVS yeşil hassas; %50 yeşil (R/B %25) (slayt)."
  },
  {
    "topic": 6,
    "type": "mc",
    "q": "EXIF/meta veri slayttaki açıya göre ne içerebilir?",
    "options": [
      "Kamera marka/model, çözünürlük, tarih, jpeg sıkıştırma oranı; ancak cihaz kimliği ayrıntı kısıtı (slaytta sınırla)",
      "Sadece dosya adı",
      "Pil seviyesi sadece",
      "GPS daima yok vurgu"
    ],
    "answer": 0,
    "exp": "EXIF: marka, model, boyut, zaman, kalite; belirli kamera ID hariç (slaytta) — metin"
  },
  {
    "topic": 6,
    "type": "mc",
    "q": "Görüntü yolu boyunca, ham sensör verisine sensör gürültü azaltma, renk düzeltme, kenar gibi (slaytta) hangi aşamada olur",
    "options": [
      "Son kullanıcı yazdırma anında sadece",
      "Görüntü son hali bitmeden önce ön-işleme/iyileştirme pipleline'ı (slaytta)",
      "Sadece EXIF yazar",
      "Sadece ağa gönderir"
    ],
    "answer": 1,
    "exp": "Görüntü işleme adımları: gürültü, renk, kenar (slaytta başlık 1.2)."
  },
  {
    "topic": 6,
    "type": "mc",
    "q": "Kör (blind) adli tespit neden gerekir (slayt)?",
    "options": [
      "Meta her zaman yeter",
      "Sadece analog",
      "EXIF/ başlık değişikliğe savunmasız; manipülasyon, kökeni doğrulamak blind tekniklere gerek (slayt açık)",
      "Sadece PDF"
    ],
    "answer": 2,
    "exp": "Meta manipülasyon, blind (kör) yöntem (slaytta) — açık kamera kaynağı tespitinde"
  },
  {
    "topic": 6,
    "type": "mc",
    "q": "Piksel, sensör ızgarasında temel görüntüleme birimi; renk bilgisi slaytda hâliyle nasıl elde edilir (ön bilgi, CFA) ile?",
    "options": [
      "Piksel başına 3 ayrı sensör zorunlu; maliyet",
      "Sadece lens",
      "Sadece JPEG",
      "Mosaic/Filtre ve komşu interpolasyon; çoğunlukla tek sensör+CFA, eksik renkler interpolasyon (Bayer) (slayt)"
    ],
    "answer": 3,
    "exp": "Kısaltma maliyet: tek piksel konumu tek renk, interpolasyon; Bayer (slayt) — 3 sensör cümlesi slaytta"
  },
  {
    "topic": 6,
    "type": "tf",
    "q": "Dijital kamera bileşenlerinde alıcı lens, ışığın sensöre yönelmesi için ışığın yolunu bükmek/bükmek şeklindedir (slayt 1.1).",
    "answer": true,
    "exp": "Lens, ışınım yolunu büken optik açıklama (slayt 1.1 dili, optik) — ışınım/ışın yolunu büken/bükmek ifadesi"
  },
  {
    "topic": 6,
    "type": "tf",
    "q": "EXIF metaverileri, manipülasyona karşı daima güvenlidir; değiştirilemez (slayta göre).",
    "answer": false,
    "exp": "Slayt: bu bilgiler değişikliğe savunmasız; blind tekniklere gerek"
  },
  {
    "topic": 6,
    "type": "tf",
    "q": "Bayer, yeşil kanala daha fazla filtre pikseli (yaklaşık %50) ayırabilir (slayta göre).",
    "answer": true,
    "exp": "Ye %50, R/B %25 (slaytta) — tablo sayısallaştırma"
  },
  {
    "topic": 6,
    "type": "tf",
    "q": "Dijital görüntü incelemesi, askeri/müdafi ve ceza uygulamaları için analizle ilişkili (slaytta) bir örnekleme ille ifade: kaynak tespiti tekniği ileri seviyede ister (slaytta) — genel: doğrudur)",
    "answer": true,
    "exp": "Kamera kaynağı tespitinde askeri/ceza (slayt) — bilimsel/uygulama"
  },
  {
    "topic": 6,
    "type": "fill",
    "q": "Kamera kaynağı tespitinde meta veri yanında, manipülasyona karşı ______ adli bilişim tekniklerine (İng. blind) ihtiyaç vardır (slaytta).",
    "answer": [
      "kör",
      "gizli",
      "blind",
      "Kör",
      "gizil"
    ],
    "exp": "Kör (blind) / gizli (blind) forensic techniques (slayt cümle tam)"
  },
  {
    "topic": 6,
    "type": "fill",
    "q": "EXIF: Değiştirilebilir Görüntü ______ Formatı (slaytta İng. kısaltma ifadesi).",
    "answer": [
      "Dosyası",
      "File",
      "dosyası",
      "Görüntü"
    ],
    "exp": "EXIF (Exchangeable Image File) — açık metin (slayt) — fill 'Dosya' bölümlerinde"
  },
  {
    "topic": 6,
    "type": "fill",
    "q": "CFA, sensör üzerine yerleşik ______ filtre düzenine verilen addır (Bayer ailesi) (kısaltma).",
    "answer": [
      "renk",
      "Color",
      "renk "
    ],
    "exp": "Color Filter Array: renk (slayt) — açık uç"
  },
  {
    "topic": 6,
    "type": "fill",
    "q": "Görüntü işleme hattında sensör gürültüsü azaltma, renk düzeltme ve kenar geliştirme gibi adımlar ______ tamamlanmadan önce uygulanabilir (slaytta, ham→son) final öncesi).",
    "answer": [
      "son hali",
      "görüntü son",
      "görüntü son hali",
      "görüntü"
    ],
    "exp": "Ham pipeline'tan nihai görüntü (slayt 1.2)"
  },
  {
    "topic": 6,
    "type": "mc",
    "q": "Bir piksel, sensör '........' ızgarasının (slayt) temel parçacığıdır. Boşluk:?",
    "options": [
      "doğrusal piksel ızgarası (grid)",
      "yalnızca filtre (yanlış)",
      "yalnızca lazer",
      "yalnızca Bluetooth"
    ],
    "answer": 0,
    "exp": "Piksel: ızgaradaki (grid) en küçük eleman; Ham görüntü piksel (slaytta)"
  },
  {
    "topic": 7,
    "type": "mc",
    "q": "Yan yana (side by side) adli karşılaştırmalarda aşağıdakiler arasında örnekler verilmiştir (slayt) — aşağıdakilerden hangisi dışarıda bırakılamaz",
    "options": [
      "Sadece hava",
      "Mermi izleri, lifler, parmak izi, yüz (örnek türlerinin bir kısmı)",
      "Radyo sinyal",
      "Buzdolabı reklamı"
    ],
    "answer": 1,
    "exp": "Mermi, lif, parmak, yüz — yan yana (SUNU7)."
  },
  {
    "topic": 7,
    "type": "mc",
    "q": "Aydınlatma, renk, yönelim farkları, yan yana kıyaslamalarda aşağıdakileri yapabilir (slaytta):",
    "options": [
      "Her zaman aynı sonuç",
      "Sadece kontrast etkilemez (yanlış)",
      "Yanıltıcı fark/alkasız fark (confounding factors)",
      "Sadece piksel sayısı"
    ],
    "answer": 2,
    "exp": "Faktör: ışık, renk, yönelim (slayt) — zorluk"
  },
  {
    "topic": 7,
    "type": "mc",
    "q": "Mermi yüzeyi yükseklik profili örneğinde, istatistik: korelasyon eşleşme yüzdesi slaytta ne olarak örnek verilmiştir (Şekil 2)?",
    "options": [
      "%0",
      "%50",
      "%12",
      "%99,6"
    ],
    "answer": 3,
    "exp": "Örnek korelasyon: % 99,6 (slaytta) — mekanik kalem, Şekil 2 açıklaması"
  },
  {
    "topic": 7,
    "type": "mc",
    "q": "Fotogrametri, slayttaki giriş listesinde ne yapılabilir? (daha ileri slayttan)",
    "options": [
      "Görüntüden 3B ölçüm/topoğrafyaya kadar; girişte maddelendirme (slayt 1) — öğrenen soru: fotogrametri 3B ölçü",
      "Sadece ses",
      "Sadece DNA",
      "Sadece Word"
    ],
    "answer": 0,
    "exp": "Fotogrametri (görüntüden ölçü/şekil) (SUNU7 giriş listesi — konu) — 3B ölçüm — slaytta"
  },
  {
    "topic": 7,
    "type": "mc",
    "q": "Ters projeksiyon (slaytta giriş maddesinde) tipik olarak aşağıdakilere aittir? (büyük anlatımdan)",
    "options": [
      "Yazı tipi pikseli",
      "Projeksiyon/geri izdüşüm, tanı/ölçek",
      "Bios",
      "Dondurma"
    ],
    "answer": 1,
    "exp": "Giriş listesinde: ters projeksiyon, fotogrametri (konu) — ilerleme slaytları"
  },
  {
    "topic": 7,
    "type": "mc",
    "q": "Aynı lif görüntüleri, farklı büyütme ve farklı kaynaktan (kaşmir vs yün) geliyorsa ne olur? (slayt ders)",
    "options": [
      "Daha iyi eşleşir",
      "Hiç fark yok",
      "Yanıltıcı eşleşme gibi görünebilir, hatalı sonuç (Şekil 6 örneği)",
      "Korelasyon 100%"
    ],
    "answer": 2,
    "exp": "Fark tür, büyütme (örnek kaşmir/koyun) (SUNU7 — yanlış karşılaştırma) —"
  },
  {
    "topic": 7,
    "type": "mc",
    "q": "Ayak/lastik ve biyometrik (slaytta giriş) konuları hangi genel alanda?",
    "options": [
      "Ağ yönetimi",
      "Sadece SQL",
      "Sadece WiFi",
      "Görüntü karşılaştırma ve ölçme / tanı-ölç (slayt 1'de 7 bölümlük liste)"
    ],
    "answer": 3,
    "exp": "Görüntü karşılaştırma ve ölçme (1: side-by-side, 3 yüz, 4 biyometri, 5 iz, 6 ters proj, 7 fotogram) —"
  },
  {
    "topic": 7,
    "type": "mc",
    "q": "Boya pulu (paint chip) aynı örnek, akkor voltaj farkı renk ısı farkı yaratınca, slaytta açıklanan sonuç:",
    "options": [
      "Aynı cisim ama ışık/renk farkı açıklanır",
      "Kesin farklı boya tür",
      "Aynı değil",
      "Sadece piksel"
    ],
    "answer": 0,
    "exp": "Akkor lamba; renk sıcaklığı (slayt) —"
  },
  {
    "topic": 7,
    "type": "tf",
    "q": "Yan yana sunum, izleyiciyi 'aynı nesne veya tür' sonucuna davet eden görsel yöntemdir (slaytta, tanım).",
    "answer": true,
    "exp": "Side-by-side amacı (slaytta yorum)."
  },
  {
    "topic": 7,
    "type": "tf",
    "q": "Büyütme/ölçek farkı, lif SEM görüntülerinde yanıltıcı eşleşme yaratabilir (slaytta, kaşmir/koyun örneği: yüksek korelasyona yol açsa da kötü eşleşme).",
    "answer": true,
    "exp": "2 kattan fark, fark kaynak, Şekil 6 açık (SUNU7)."
  },
  {
    "topic": 7,
    "type": "tf",
    "q": "Mermi kovanındaki iğne girintileri boyut olarak her zaman aynı silahtan gelir, hiç ayrıntı fark etmez (slayta göre).",
    "answer": false,
    "exp": "Slayt: aynı kalibre ama fark pürüz ve boyut, haç (şekil 7) — her zaman aynı değil"
  },
  {
    "topic": 7,
    "type": "tf",
    "q": "Aydınlatma, büyütme ve açı, eşleştirme/tanı için mümkün olduğunca eşitlenmelidir (slayt tavsiyesi anlamı kapsar).",
    "answer": true,
    "exp": "Kıyas koşulları: benzer aydınlatma, büyütme, açı (ilgili bölümler)"
  },
  {
    "topic": 7,
    "type": "fill",
    "q": "Yan yana karşılaştırmalarda, mekanik veya optik yükseklik verileri, renkle kodlanmış ______ haritaları (yükseklik) olarak da sunulabilir (slaytta, mermi yükseklik haritası) — bir kelime: yükseklik ______.",
    "answer": [
      "haritaları",
      "harita",
      "yükseklik haritası",
      "görüntü"
    ],
    "exp": "Yükseklik haritaları, renk temsil (slayt) — fill hedefi 'harita' bölge"
  },
  {
    "topic": 7,
    "type": "fill",
    "q": "İki aynı silahtan mermi yüzey yükseklik profili çizilip hizalandığında, ilgili slaytta korelasyon örneğinde '______ %' seviyesinde (örnek) eşleşme verilmiştir (sayı).",
    "answer": [
      "99,6",
      "99.6",
      "99.6%"
    ],
    "exp": "Slayt % 99,6 (virgüllü TR)"
  },
  {
    "topic": 7,
    "type": "fill",
    "q": "Kaşmir ve yün gibi farklı lif türlerinin SEM görüntüleri, izlenimce benzer olsa da ______ kaynaktan geldiğinde hatalı eşleşme riski (slaytta) artar: 'farklı' kelimesi. Boşluk: farklı ______.",
    "answer": [
      "kaynak",
      "kaynaktan",
      "kayna"
    ],
    "exp": "Farklı kaynak (tür) — Şekil 6 (slayt) —"
  },
  {
    "topic": 7,
    "type": "fill",
    "q": "Giriş bölümlerinden biri: ______ tanıma (side-by-side ile ilişkili, yüz de ilgili alan) — kişi kimliğine dönük biyometrik (slaytta 3, Yüz Tanıma).",
    "answer": [
      "Yüz",
      "yüz",
      "Yuz"
    ],
    "exp": "Yüz Tanıma (bölüm 3 listesi) —"
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Dijital görüntü adli biliminde slayta göre iki ana problem alanı hangisidir?",
    "options": [
      "Ağ topolojisi ve IP",
      "Görüntü kaynağı tanımlama ve görüntü sahteciliği algılama",
      "RAM boyutu ve SSD hızı",
      "Yalnızca yazıcı kalibrasyonu"
    ],
    "answer": 1,
    "exp": "İki ana sorun: kaynak tanımlama + sahtecilik tespiti (SUNU1)."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Kopyala-taşı (Copy-Move) görüntü sahteciliğinde sahteciliğin kaynağı slayta göre nerededir?",
    "options": [
      "Başka bir dosyada",
      "Sadece bulutta",
      "Görüntünün kendi içinde",
      "Sadece e-postada"
    ],
    "answer": 2,
    "exp": "Kaynak aynı görüntünün içinde kalır (SUNU1)."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Kopyala-yapıştır (Copy-Paste) sahteciliğinde sahtecilik kaynağı slayta göre nerededir?",
    "options": [
      "Görüntünün içinde zorunlu",
      "Sadece telefonda",
      "Sadece tarayıcıda",
      "Görüntünün kendisinde bulunmayabilir (farklı görüntüler)"
    ],
    "answer": 3,
    "exp": "Farklı görüntüler yapıştırılır; kaynak görüntünün dışında olabilir (SUNU1)."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "JPEG sıkıştırmasına birden fazla maruz kalma slaytta neyle ilişkilendirilir?",
    "options": [
      "Sıkıştırma kusurları (artefacts) ve kalite düşüşü",
      "Kalite artışı kesin",
      "Sadece dosya boyutu sabit",
      "Renk kanalı yok"
    ],
    "answer": 0,
    "exp": "Çoklu sıkıştırma kaliteyi düşürebilir; kusurlar (SUNU1)."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Pasif güvenlik/dijital adli teknikler slayta göre incelemeye başlamadan önce ne yapmaz?",
    "options": [
      "Veri okur",
      "Herhangi bir sahteciliği tespit etmeden önce veriler üzerinde ön hesaplama yapmaz",
      "Görüntü açar",
      "Hash alır"
    ],
    "answer": 1,
    "exp": "Pasif: ön hesaplama yok (önce tespit), sonradan işleme (SUNU1)."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Pasif teknikler slaytta hangi tür ön bilgi kullanmaz?",
    "options": [
      "Dosya adı",
      "Tarih",
      "İncelenen medya hakkında herhangi bir ön bilgi",
      "Saat"
    ],
    "answer": 2,
    "exp": "Pasif: ön bilgi kullanmaz (SUNU1)."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Filtreleme sahteciliği ile slaytta özellikle hangi işlem ilişkilendirilir (medyan filtre ve splicing örneği)?",
    "options": [
      "Sadece PNG dönüşümü",
      "Sadece OCR",
      "Sadece ses",
      "Yüz birleştirme (splicing) izlerini gizlemek için medyan filtreleme popüler"
    ],
    "answer": 3,
    "exp": "Medyan filtreleme, splicing izlerini gizlemede popüler (SUNU1)."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Rötuşlama görüntü sahteciliği slayta göre özellikle nerede yaygınlaşmıştır?",
    "options": [
      "Sosyal medya uygulamalarında (kolay yazılımlar)",
      "Sadece banka sunucularında",
      "Sadece uydu",
      "Sadece CAD"
    ],
    "answer": 0,
    "exp": "Rötuş sahteciliği sosyal medyada yaygın (SUNU1)."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Bilgisayar tarafından oluşturulan görüntü sahteciliği neden zor bir adli problemdir (slayt)?",
    "options": [
      "Çünkü dosya yok",
      "Gerçek fotoğraflara benzeyen görüntülerin ayırt edilmesi zor",
      "Çünkü yalnızca analog",
      "Çünkü yalnızca basılı"
    ],
    "answer": 1,
    "exp": "CGI: gerçekten zor ayırt (SUNU1)."
  },
  {
    "topic": 1,
    "type": "mc",
    "q": "Slaytta adli bilişimin tanımı ile en uyumlu ifade hangisidir?",
    "options": [
      "Sadece donanım tamir",
      "Sadece web tasarım",
      "Elektronik cihazlardan dijital kanıt elde etme ve delil olabilmesi için ilkelere uygun işlev (BTK/SUNU2)",
      "Sadece antivirüs satışı"
    ],
    "answer": 2,
    "exp": "Tanım: suç soruşturmasında dijital kanıt + delil kabulü (SUNU2 giriş)."
  },
  {
    "topic": 1,
    "type": "tf",
    "q": "Delil, bir olayı aydınlatabilecek iz veya emare anlamına gelir (slaytta delil tanımı).",
    "answer": true,
    "exp": "Delil = iz/emare (SUNU2 hukuk slaytları)."
  },
  {
    "topic": 1,
    "type": "tf",
    "q": "Dijital delil; bilişim sistemlerinden veya dijital depolama aygıtlarından usulüne uygun elde edilen anlamlı sayısal bilgilerdir (slayt).",
    "answer": true,
    "exp": "Dijital delil tanımı (SUNU2)."
  },
  {
    "topic": 1,
    "type": "tf",
    "q": "Dijital ortamda saklanan, oluşturulan, depolanan veya iletilen her türlü sayısal bilgi dijital delil adayı olabilir (slayt).",
    "answer": true,
    "exp": "Hangi veriler listesi (SUNU2)."
  },
  {
    "topic": 1,
    "type": "tf",
    "q": "Kopyala-taşı sahteciliğinde sahtecilik kaynağı genellikle başka bir fotoğraf dosyasıdır (slayta göre).",
    "answer": false,
    "exp": "Kaynak aynı görüntünün içindedir (SUNU1)."
  },
  {
    "topic": 1,
    "type": "tf",
    "q": "Pasif dijital adli teknikler, incelenen medya hakkında ön bilgi kullanmadan çalışabilir (slayt).",
    "answer": true,
    "exp": "Pasif: ön bilgi yok (SUNU1)."
  },
  {
    "topic": 1,
    "type": "fill",
    "q": "Dijital görüntü adli biliminin slaytta sayılan iki ana problemi: görüntü kaynağı ______ ve görüntü sahteciliği algılama.",
    "answer": [
      "tanımlama",
      "tanimlama"
    ],
    "exp": "Kaynak tanımlama (SUNU1)."
  },
  {
    "topic": 1,
    "type": "fill",
    "q": "Copy-______ Image Forgery: görüntünün bir kısmı kopyalanıp aynı görüntünün başka bölümüne taşınır (İng. terim başı, slayt).",
    "answer": [
      "Move",
      "move",
      "Taşı"
    ],
    "exp": "Copy-Move (SUNU1)."
  },
  {
    "topic": 1,
    "type": "fill",
    "q": "Pasif güvenlik önlemleri: inceleme tamamen verilerin ______ işlenmesine dayanır (slayt).",
    "answer": [
      "sonradan",
      "sonra"
    ],
    "exp": "Sonradan işleme (SUNU1)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "File signature (dosya imzası) slayta göre uzantı değişse bile neyi tanımlar?",
    "options": [
      "Sadece dosya boyu",
      "Sadece kullanıcı adı",
      "Sadece IP",
      "Dosyanın türünü (içerik bilgisi)"
    ],
    "answer": 3,
    "exp": "İçerikten tür tanımı (SUNU2)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Windows kayıt defterinde kullanıcı şifrelerini saklayan kısım slaytta hangi kısaltmayla anılır?",
    "options": [
      "SAM",
      "Software",
      "System",
      "LNK"
    ],
    "answer": 0,
    "exp": "SAM: Güvenlik Hesap Yöneticisi (SUNU2)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "5237 sayılı Türk Ceza Kanunu'nda bilişim alanında işlenen suçlar slayta göre kitabın hangi bölümünde toplanmıştır?",
    "options": [
      "Birinci Kitap Genel",
      "İkinci Kitap Özel Hükümler, Topluma Karşı Suçlar kapsamında onuncu bölüm",
      "Sadece ek",
      "Sadece geçici madde"
    ],
    "answer": 1,
    "exp": "TCK yapısı slaytta (SUNU2)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Bilişim sistemine girme suçu slaytta hangi madde ile anılır?",
    "options": [
      "242",
      "250",
      "243",
      "300"
    ],
    "answer": 2,
    "exp": "Madde 243 (SUNU2)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Sistemi engelleme, bozma, verileri yok etme veya değiştirme slaytta TCK hangi madde?",
    "options": [
      "243",
      "245",
      "246",
      "244"
    ],
    "answer": 3,
    "exp": "Madde 244 (SUNU2)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Avrupa Konseyi Siber Suç Sözleşmesi Türkiye'de iç hukuk açısından slayta göre hangi tarihte yürürlüğe girmiştir?",
    "options": [
      "1 Ocak 2015",
      "1 Ocak 2010",
      "1 Ocak 2020",
      "23 Kasım 2001"
    ],
    "answer": 0,
    "exp": "Yürürlük: 1 Ocak 2015 (SUNU2)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Dijital kanıtların tanımlanması, toplanması ve muhafazası için yol gösteren ISO/IEC standardı slaytta hangisidir?",
    "options": [
      "9001",
      "27037",
      "14001",
      "20000"
    ],
    "answer": 1,
    "exp": "ISO/IEC 27037:2012 (2018) (SUNU2)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Soruşturmalarda uygun yöntem ve araçların kullanımına yönelik slaytta anılan standart hangisidir?",
    "options": [
      "27037",
      "27001",
      "27041",
      "22301"
    ],
    "answer": 2,
    "exp": "ISO/IEC 27041:2015 (SUNU2)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Dijital delilin analizi ve yorumlanması için slaytta anılan ISO standardı hangisidir?",
    "options": [
      "27043",
      "27050",
      "27037",
      "27042"
    ],
    "answer": 3,
    "exp": "ISO/IEC 27042:2015 (SUNU2)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Vaka incelemesine ilişkin daha geniş perspeptifli prensipler için slaytta hangi ISO numarası geçer?",
    "options": [
      "27043",
      "27041",
      "27050",
      "9000"
    ],
    "answer": 0,
    "exp": "ISO/IEC 27043:2015 (SUNU2)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Elektronik keşif ile ilgili standartları dört bölümde ele alan slayttaki ISO hangisidir?",
    "options": [
      "27037",
      "27050",
      "27042",
      "14001"
    ],
    "answer": 1,
    "exp": "ISO/IEC 27050:2016 (SUNU2)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Dijital verilerin kanıt olabilmesi için slaytta I–VII arası listelenen özelliklerden biri aşağıdakilerden hangisidir?",
    "options": [
      "Sadece renk derinliği",
      "Sadece CPU hızı",
      "Tekrar edilebilirlik",
      "Sadece monitör çözünürlüğü"
    ],
    "answer": 2,
    "exp": "Tekrar edilebilirlik vb. (SUNU2 — liste)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Thumbnail (küçük resim) slayta göre genellikle hangisini içermez?",
    "options": [
      "Düşük çözünürlük",
      "Küçük boyut",
      "Önizleme",
      "GPS veya orijinal oluşturulma tarihi gibi meta (genellikle içermez)"
    ],
    "answer": 3,
    "exp": "Küçük resim genellikle bu metaları içermez (SUNU2)."
  },
  {
    "topic": 2,
    "type": "mc",
    "q": "Unallocated (ayrılmamış) alan slayta göre ne içerebilir?",
    "options": [
      "Bozulmamış silinmiş dosya kalıntıları vb.",
      "Sadece BIOS",
      "Sadece RAM",
      "Sadece CPU önbelleği"
    ],
    "answer": 0,
    "exp": "Ayrılmamış: silinmiş kalıntılar (SUNU2)."
  },
  {
    "topic": 2,
    "type": "tf",
    "q": "Registry Hives, Windows kayıt defterinin alt dosyalarından oluşur (slayt).",
    "answer": true,
    "exp": "Hives tanımı (SUNU2)."
  },
  {
    "topic": 2,
    "type": "tf",
    "q": "Avrupa Konseyi Siber Suç Sözleşmesi 23 Kasım 2001 tarihlidir (slayt).",
    "answer": true,
    "exp": "Sözleşme tarihi (SUNU2)."
  },
  {
    "topic": 2,
    "type": "tf",
    "q": "Türkiye sözleşmeyi 10 Kasım 2010'da imzalamıştır (slayt).",
    "answer": true,
    "exp": "İmza tarihi (SUNU2)."
  },
  {
    "topic": 2,
    "type": "tf",
    "q": "Hukuk açısından delil, uyuşmazlık konusu olayı aydınlatmak için mahkemede kanı oluşturan ispat aracıdır (slayt).",
    "answer": true,
    "exp": "Hukuki delil tanımı (SUNU2)."
  },
  {
    "topic": 2,
    "type": "tf",
    "q": "ISO/IEC 27037 yalnızca ağ güvenliği sertifikasyonu için yazılmıştır; dijital kanıtla ilgisi yoktur (slayta göre).",
    "answer": false,
    "exp": "27037 dijital kanıt tanımı/toplaması/muhafazası ile ilgilidir (SUNU2)."
  },
  {
    "topic": 2,
    "type": "fill",
    "q": "Dosya ______, uzantı değişse bile dosya türünü içerikten tanımlayan bilgidir (İng. file signature, slayt).",
    "answer": [
      "imzası",
      "imza",
      "İmzası"
    ],
    "exp": "Dosya imzası (SUNU2)."
  },
  {
    "topic": 2,
    "type": "fill",
    "q": "TCK'da bilişim sistemine girme ______ 243 ile düzenlenmiştir (slayt).",
    "answer": [
      "madde",
      "maddesi",
      "Madde"
    ],
    "exp": "Madde 243 (SUNU2)."
  },
  {
    "topic": 2,
    "type": "fill",
    "q": "Türkiye Avrupa Konseyi Siber Suç Sözleşmesini slayta göre ______ Eylül 2014'te onaylamıştır (gün-ay).",
    "answer": [
      "29",
      "29 "
    ],
    "exp": "29 Eylül 2014 onay (SUNU2)."
  },
  {
    "topic": 2,
    "type": "fill",
    "q": "Dijital verilerin kanıt olabilmesi için slaytta sayılan özelliklerden biri: ______ edilebilirlik (reproducibility).",
    "answer": [
      "tekrar",
      "Tekrar"
    ],
    "exp": "Tekrar edilebilirlik (SUNU2 listesi VII)."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "Slayttaki ondalık 571 örneğinde 16'lık gösterim hangi biçimde verilmiştir?",
    "options": [
      "(1AC)16",
      "(23B)16",
      "(FF)16",
      "(100)16"
    ],
    "answer": 1,
    "exp": "571 = (23B)16 (SUNU3)."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "Slayttaki 571 örneğinde 8'lik (octal) gösterim hangisidir?",
    "options": [
      "(1000)8",
      "(777)8",
      "(1073)8",
      "(12)8"
    ],
    "answer": 2,
    "exp": "(1073)8 (SUNU3)."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "4 bitlik ikili dizilerin en büyüğünün ondalık karşılığı formül 2^4-1 ile slaytta ne çıkar?",
    "options": [
      "14",
      "16",
      "31",
      "15"
    ],
    "answer": 3,
    "exp": "15 = F (SUNU3)."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "SHA-1 çıktı uzunluğu slayta göre kaç bittir (MD5'ten fark vurgusu)?",
    "options": [
      "160",
      "128",
      "256",
      "512"
    ],
    "answer": 0,
    "exp": "160 bit (SUNU3)."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "Aşağıdakilerden hangisi SHA-2 ailesinde yer alan özet uzunluk adlarından biridir (slayt)?",
    "options": [
      "MD5-128",
      "SHA-256",
      "CRC32",
      "BASE64"
    ],
    "answer": 1,
    "exp": "SHA-256 vb. (SUNU3)."
  },
  {
    "topic": 3,
    "type": "mc",
    "q": "Karakter, tamsayı ve gerçel sayı slaytta nasıl sınıflanır?",
    "options": [
      "Sadece ağ protokolü",
      "Sadece donanım",
      "Temel veri yapıları",
      "Sadece bulut"
    ],
    "answer": 2,
    "exp": "Temel veri yapıları (SUNU3)."
  },
  {
    "topic": 3,
    "type": "tf",
    "q": "Ondalık sayı sistemi 0–9 arası on rakam kullanır; taban 10'dur (slayt).",
    "answer": true,
    "exp": "Decimal tanım (SUNU3)."
  },
  {
    "topic": 3,
    "type": "tf",
    "q": "Aynı bit dizisi ASCII'de farklı, hexadecimal'de farklı yorumlanabilir; bu veri kavramıyla ilişkilidir (slayt BTK örneği).",
    "answer": true,
    "exp": "VERİ KAVRAMI (SUNU3)."
  },
  {
    "topic": 3,
    "type": "tf",
    "q": "MD5, MD4'ten daha hızlı ve daha güvenilirdir (slayta göre).",
    "answer": false,
    "exp": "MD5 daha yavaş, daha güvenilir denmiştir (SUNU3)."
  },
  {
    "topic": 3,
    "type": "tf",
    "q": "MFT, dosya adı yerine 0xXXXX gibi onaltılık değerlerle dosya/klasör kayıtlarını tutan NTFS ana tablosudur (slaytta açık).",
    "answer": true,
    "exp": "MFT açıklaması (SUNU3)."
  },
  {
    "topic": 3,
    "type": "fill",
    "q": "Hexadecimal'de 10–15 arası A, B, C, D, E, ______ harfleri kullanılır (slayt).",
    "answer": [
      "F",
      "f"
    ],
    "exp": "A-F (SUNU3)."
  },
  {
    "topic": 3,
    "type": "fill",
    "q": "MD5, MD ailesi ______ özet (digest) algoritmasıdır (kısaltma, slayt).",
    "answer": [
      "message",
      "Message"
    ],
    "exp": "Message-Digest (SUNU3)."
  },
  {
    "topic": 3,
    "type": "fill",
    "q": "İkili toplamada 10 ve katları yerine elde olarak ______ ve katları bir sonraki basamağa eklenir (slayt açıklaması).",
    "answer": [
      "2",
      "iki",
      "2 "
    ],
    "exp": "2'lik toplam (SUNU3)."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "Fiziksel imaj tüm sürücü yapıları ve içeriğinin nasıl kopyasıdır (slayt)?",
    "options": [
      "Özet",
      "Sadece metin",
      "Sadece kayıt defteri",
      "Birebir"
    ],
    "answer": 3,
    "exp": "Birebir kopya (SUNU4)."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "E01'de meta veriler arasında slaytta özellikle anılan sağlama türlerinden biri hangisidir?",
    "options": [
      "MD5",
      "CRC8",
      "DES",
      "AES key"
    ],
    "answer": 0,
    "exp": "MD5 karması (SUNU4)."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "Aşağıdakilerden hangisi slayttaki 'imaj alma yazılımı' örneklerindendir?",
    "options": [
      "Microsoft Word",
      "Accessdata FTK Imager",
      "Notepad",
      "Paint"
    ],
    "answer": 1,
    "exp": "FTK Imager (SUNU4)."
  },
  {
    "topic": 4,
    "type": "mc",
    "q": "Aşağıdakilerden hangisi slayttaki donanım imaj cihazı örneğidir?",
    "options": [
      "Sadece fare",
      "Klavye",
      "Ditto",
      "Monitör"
    ],
    "answer": 2,
    "exp": "Ditto, Tableau (SUNU4)."
  },
  {
    "topic": 4,
    "type": "tf",
    "q": "Mantıksal imaj, belirli bir mantıksal bölüm veya alanın kopyasını alır (slayt).",
    "answer": true,
    "exp": "Logical imaj tanımı (SUNU4)."
  },
  {
    "topic": 4,
    "type": "tf",
    "q": "DD (raw) imajında veri genellikle sıkıştırılmış halde saklanır (slayta göre).",
    "answer": false,
    "exp": "Raw'da genelde sıkıştırma yok (SUNU4)."
  },
  {
    "topic": 4,
    "type": "tf",
    "q": "Yerleşik depolamada cihaz çıkarılamıyorsa canlı önyükleme diski gibi yöntemler gündeme gelebilir (slayt).",
    "answer": true,
    "exp": "Karşılaşılan zorluklar (SUNU4)."
  },
  {
    "topic": 4,
    "type": "fill",
    "q": "Adli bilişimde yaygın imaj formatlarından biri: ______ (Gelişmiş Adli Tıp Formatı, açık format).",
    "answer": [
      "AFF",
      "aff"
    ],
    "exp": "AFF (SUNU4)."
  },
  {
    "topic": 4,
    "type": "fill",
    "q": "dd ile alınan ham imajın uzantılarından biri: .dd veya .______ (slayt).",
    "answer": [
      "img",
      "001"
    ],
    "exp": ".img / .001 (SUNU4)."
  },
  {
    "topic": 4,
    "type": "fill",
    "q": "E01, ______ firmasının imaj formatıdır (slayt).",
    "answer": [
      "EnCase",
      "encase"
    ],
    "exp": "EnCase (SUNU4)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "M57 senaryosunda şirketin adı slayta göre aşağıdakilerden hangisine benzer şekilde geçer?",
    "options": [
      "Z99",
      "A1",
      "X00",
      "M57"
    ],
    "answer": 3,
    "exp": "M57 (SUNU5)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "M57'de başkanın adı slayta göre kimdir?",
    "options": [
      "Alison",
      "Jean",
      "Bob",
      "Gina"
    ],
    "answer": 0,
    "exp": "Başkan Alison Smith (SUNU5)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "pslist eklentisi bellek imajında neyi listeler (slayt)?",
    "options": [
      "Sadece disk bölümleri",
      "Çalışan işlemleri",
      "Sadece yazıcı",
      "Sadece yönlendirici"
    ],
    "answer": 1,
    "exp": "İşlemler (SUNU5)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "pstree ekranında PPID ne anlama gelir (slayt)?",
    "options": [
      "Pil seviyesi",
      "Port hızı",
      "Üst işlem kimliği",
      "Parça boyu"
    ],
    "answer": 2,
    "exp": "Parent PID (SUNU5)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "netscan eklentisi slayta göre ne gösterir?",
    "options": [
      "BIOS",
      "Sadece USB",
      "Sadece ekran çözünürlüğü",
      "Ağ bağlantıları (Windows)"
    ],
    "answer": 3,
    "exp": "Ağ bağlantıları (SUNU5)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "psxview eklentisi slayta göre neye odaklanır?",
    "options": [
      "Gizlenmeye çalışan işlemler",
      "Ağ kartı sürücüsü",
      "E-posta",
      "Sadece disk imajı"
    ],
    "answer": 0,
    "exp": "Gizli işlemler (SUNU5)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "hivelist eklentisi neyin RAM'deki konumunu gösterir (slayt)?",
    "options": [
      "Sadece RAM çubuk modeli",
      "Kayıt defteri kovanları",
      "Sadece GPU",
      "Sadece ses kartı"
    ],
    "answer": 1,
    "exp": "Registry hive konumları (SUNU5)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "Disk silme anti-adli yöntemlerinden biri olarak slaytta hangi Windows aracı örneklenir?",
    "options": [
      "Paint",
      "Calc",
      "Drive Wiper",
      "Notepad"
    ],
    "answer": 2,
    "exp": "Drive Wiper (SUNU5)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "Dosya kurtarmayı zorlaştırmak için slaytta Java tabanlı örnek olarak hangi araç anılır?",
    "options": [
      "Volatility",
      "dd",
      "ping",
      "File Shredder"
    ],
    "answer": 3,
    "exp": "File Shredder (SUNU5)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "Hidden Tear aracı slayta göre hangi tür dosyalarda gizleme ile ilişkilendirilir (örnekler)?",
    "options": [
      ".jpeg, .gif, .bmp gibi görseller",
      "Sadece .exe",
      "Sadece .pdf",
      "Sadece .mp3"
    ],
    "answer": 0,
    "exp": "Görüntü türleri (SUNU5)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "Slacker aracı slayta göre hangi çerçevenin parçası olarak anılır?",
    "options": [
      "Linux kernel",
      "Metasploit",
      "OpenSSL",
      "TensorFlow"
    ],
    "answer": 1,
    "exp": "Metasploit (SUNU5)."
  },
  {
    "topic": 5,
    "type": "mc",
    "q": "Timestomp aracı slayta göre dosyanın hangi tür meta verilerini değiştirebilir?",
    "options": [
      "Sadece dosya adı",
      "Sadece boyut (tek başına yasak)",
      "Erişim, oluşturma ve değiştirme zaman/tarihleri",
      "Sadece ikon"
    ],
    "answer": 2,
    "exp": "Zaman damgaları (SUNU5)."
  },
  {
    "topic": 5,
    "type": "tf",
    "q": "Anti adli bilişim, delillerin analizini zorlaştırmaya veya imkansız kılmaya yönelik girişimleri kapsar (slayt).",
    "answer": true,
    "exp": "Tanım (SUNU5)."
  },
  {
    "topic": 5,
    "type": "tf",
    "q": "Steganografi, mesaj veya dosyaları başka bir dosya içinde gizleme işlemidir (slayt).",
    "answer": true,
    "exp": "Steganografi tanımı (SUNU5)."
  },
  {
    "topic": 5,
    "type": "tf",
    "q": "WinZip ve PKZIP, dosyaları sıkıştırarak incelemeyi zorlaştırabildiği slaytta anti-adli bağlamda anılır.",
    "answer": true,
    "exp": "Sıkıştırma bölümü (SUNU5)."
  },
  {
    "topic": 5,
    "type": "tf",
    "q": "Fidye yazılımı, sürücüyü kullanıcının erişemeyeceği hale getirebilir (slayt).",
    "answer": true,
    "exp": "Kötü amaçlı yazılım bölümü (SUNU5)."
  },
  {
    "topic": 5,
    "type": "tf",
    "q": "connscan, UDP bağlantıları için tarayıcıdır (slayta göre).",
    "answer": false,
    "exp": "connscan: TCP bağlantıları (SUNU5)."
  },
  {
    "topic": 5,
    "type": "fill",
    "q": "Bellekten oturum parola karma değerlerini almak için slaytta ______ komutu örneklenmiştir (kısa ad).",
    "answer": [
      "hashdump",
      "Hashdump"
    ],
    "exp": "hashdump (SUNU5)."
  },
  {
    "topic": 5,
    "type": "fill",
    "q": "Volatility'de açık TCP bağlantıları için ______ eklentisi 'tarayıcı' olarak anılır (slayt).",
    "answer": [
      "connscan",
      "connscan "
    ],
    "exp": "connscan (SUNU5)."
  },
  {
    "topic": 5,
    "type": "fill",
    "q": "Anti adli: ______ Tear adlı araç .jpeg/.gif/.bmp içinde gizleme örneklerinden biri olarak geçer (slayt).",
    "answer": [
      "Hidden",
      "hidden"
    ],
    "exp": "Hidden Tear (SUNU5)."
  },
  {
    "topic": 5,
    "type": "fill",
    "q": "İz gizleme araçlarından biri, dosya zaman damgalarını oynatır: Time______ (slayt, eksik bırak: tam ad).",
    "answer": [
      "stomp",
      "Stomp",
      "STOMP",
      "timestomp",
      "Timestomp"
    ],
    "exp": "Timestomp (SUNU5)."
  },
  {
    "topic": 6,
    "type": "mc",
    "q": "Görüntü kaynağı tanımlama, görüntünün hangi cihaz veya cihaz sınıfı tarafından slayta göre neyini araştırır?",
    "options": [
      "Fiyat",
      "Sadece seri numarası kutusu",
      "Sadece pil tipi",
      "Yakalandığını/oluşturulduğunu"
    ],
    "answer": 3,
    "exp": "Kaynak cihaz (SUNU6)."
  },
  {
    "topic": 6,
    "type": "mc",
    "q": "Bayer deseninde yeşil filtre oranı slayta göre yaklaşık yüzde kaçtır?",
    "options": [
      "%50",
      "%10",
      "%25",
      "%100"
    ],
    "answer": 0,
    "exp": "Yeşil %50 (SUNU6)."
  },
  {
    "topic": 6,
    "type": "mc",
    "q": "Aşağıdakilerden hangisi kör (blind) adli tespitin gerekçelerinden biri slayttadır (meta)?",
    "options": [
      "Meta daima doğru",
      "Dosya başlığı/EXIF değişikliğe savunmasız",
      "Sadece analog",
      "Sadece müzik"
    ],
    "answer": 1,
    "exp": "Meta manipülasyon (SUNU6)."
  },
  {
    "topic": 6,
    "type": "tf",
    "q": "CFA, sensör yüzeyine yerleşik renk filtre düzenidir (slayt).",
    "answer": true,
    "exp": "CFA tanım (SUNU6)."
  },
  {
    "topic": 6,
    "type": "tf",
    "q": "EXIF metadata genellikle kamera marka ve model, görüntü boyutu, çekim tarihi, JPEG sıkıştırma gibi alanlar içerir (slayt).",
    "answer": true,
    "exp": "EXIF alanları (SUNU6)."
  },
  {
    "topic": 6,
    "type": "tf",
    "q": "Görüntü son halini almadan önce sensör gürültü azaltma gibi adımlar uygulanabilir (slayt).",
    "answer": true,
    "exp": "İyileştirme hattı (SUNU6)."
  },
  {
    "topic": 6,
    "type": "tf",
    "q": "Bayer'de kırmızı filtre piksel oranı %50'dir (slayta göre).",
    "answer": false,
    "exp": "R/B %25, yeşil %50 (SUNU6)."
  },
  {
    "topic": 6,
    "type": "fill",
    "q": "Bayer deseninde kırmızı ve mavi renk filtrelerinin her biri yaklaşık %______ düzeyinde örneklenir (slayt).",
    "answer": [
      "25",
      "yirmi beş",
      "Yirmi beş"
    ],
    "exp": "Her biri %25 (SUNU6)."
  },
  {
    "topic": 6,
    "type": "fill",
    "q": "Dijital kamera bileşenlerinden alıcı ______ ışığın sensöre ulaşmasını yönlendirmekle görevlidir (slayt).",
    "answer": [
      "lens",
      "Lens",
      "objektif",
      "Objektif"
    ],
    "exp": "Lens (SUNU6)."
  },
  {
    "topic": 6,
    "type": "fill",
    "q": "EXIF: Değiştirilebilir Görüntü ______ Formatı (slayt başlığı).",
    "answer": [
      "Dosyası",
      "dosyası",
      "Dosya",
      "dosya"
    ],
    "exp": "Değiştirilebilir Görüntü Dosyası Formatı (SUNU6)."
  },
  {
    "topic": 7,
    "type": "mc",
    "q": "Giriş listesinde 'ters projeksiyon' ve 'fotogrametri' hangi genel başlık altındadır (slayt)?",
    "options": [
      "Sadece ağ",
      "Sadece ses işleme",
      "Görüntü karşılaştırma ve ölçme",
      "Sadece veritabanı"
    ],
    "answer": 2,
    "exp": "Ders kapağı (SUNU7)."
  },
  {
    "topic": 7,
    "type": "mc",
    "q": "Aynı boya pulu kesitinde akkor lamba voltajı değişince slaytta ne değişir?",
    "options": [
      "Dosya adı",
      "Sadece piksel sayısı teorisi",
      "Sadece CPU",
      "Renk sıcaklığı ve dolayısıyla görüntü renkleri"
    ],
    "answer": 3,
    "exp": "Aydınlatma/renk sıcaklığı (SUNU7)."
  },
  {
    "topic": 7,
    "type": "mc",
    "q": "Biyometrik ölçütler (slaytta giriş maddeleri) hangi dersin konusu ile aynı genel dosyadadır?",
    "options": [
      "Görüntü karşılaştırma ve ölçme",
      "Sadece IoT sensör",
      "Sadece SQL",
      "Sadece OS"
    ],
    "answer": 0,
    "exp": "SUNU7 giriş listesi (SUNU7)."
  },
  {
    "topic": 7,
    "type": "tf",
    "q": "Yan yana karşılaştırmada iki mermi, iki lif veya iki yüz örneklenebilir (slayt).",
    "answer": true,
    "exp": "Örnek listesi (SUNU7)."
  },
  {
    "topic": 7,
    "type": "tf",
    "q": "Işık, renk ve farklı yönelimler, yanıltıcı farklara neden olabilir (slayt).",
    "answer": true,
    "exp": "Karşılaştırma zorlukları (SUNU7)."
  },
  {
    "topic": 7,
    "type": "tf",
    "q": "Fotogrametri, sadece ses dosyalarının sıkıştırılmasıdır (slayta göre).",
    "answer": false,
    "exp": "Görüntüden ölçü/3B (giriş listesi) (SUNU7)."
  },
  {
    "topic": 7,
    "type": "fill",
    "q": "Girişte listelenen başlıklardan biri: Yan yana (side by side) ______ (İng. karşılaştırma).",
    "answer": [
      "karşılaştırma",
      "karsilastirma",
      "Karşılaştırma",
      "comprasion",
      "Comprasion"
    ],
    "exp": "Side by side comparison (SUNU7 — başlık)."
  },
  {
    "topic": 7,
    "type": "fill",
    "q": "Ayak ve lastik ______ slaytta 'Görüntü karşılaştırma ve ölçme' dersinin giriş maddelerinden biridir.",
    "answer": [
      "izleri",
      "İzleri",
      "iz",
      "izi"
    ],
    "exp": "Ayak ve lastik izleri (SUNU7 giriş listesi)."
  },
  {
    "topic": 7,
    "type": "fill",
    "q": "Yüzey yüksekliği mermi örneğinde korelasyon ______ yüzde seviyesinde verilmiştir (slayt örnek, virgüllü sayı).",
    "answer": [
      "99,6",
      "99.6"
    ],
    "exp": "99,6 (SUNU7)."
  }
];
