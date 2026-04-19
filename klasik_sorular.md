# NESNELERİN İNTERNETİ — KLASİK (AÇIK UÇLU) SORU BANKASI

> Kaynak: Sadece `Bölüm 1–6` ders slaytları kullanılarak hazırlanmıştır.  
> Soru tipi etiketleri: **[T]** Tanım/Örnek · **[Ç]** Çıkarım (neden/nasıl) · **[A]** Analiz · **[M]** Modelleme / Senaryo

---

## BÖLÜM 1 — NESNELERİN İNTERNETİNE GİRİŞ

1. **[T]** Slayta göre Nesnelerin İnterneti nedir? IoT’nin üzerine kurgulandığı üç ana kavramı tanımlayıp her biri için cümlenin içinden bir cümlelik görev tanımı yazınız.

2. **[T]** IoT’nin günümüzde kabul gören üç katmanlı sınıflandırmasının katmanlarını sırayla yazıp her bir katmanın yaptığı işi tek cümleyle özetleyiniz.

3. **[Ç]** Slayt, dördüncü sanayi devrimini “Siber çağ” olarak tanımlarken haberleşmenin “sürekli, anlık ve en az insan etkisi ile” gerçekleşmesi gerektiğini söylüyor. Bu üç özellik neden eş zamanlı aranır? Herhangi birinin sağlanmadığı bir durumda IoT sisteminde hangi sorunların ortaya çıkacağını tartışınız.

4. **[Ç]** İnternet omurgası için slayt, “insanın damarlarının yerleşimine benzer yapıdadır” benzetmesini kullanıyor. Bu benzetmenin hangi yönünü vurguladığını (trafiğin dağılımı, kritik noktalar, hiyerarşi vs.) kendi cümlelerinizle açıklayınız.

5. **[A]** Slaytta verilen IoT uygulama alanlarından **Ulaşım, Sağlık, Tarım ve Güvenlik** için her birinde toplanan veri, alınan aksiyon ve hedef kullanıcıyı ayrı ayrı yazınız (tablo şeklinde düzenleyebilirsiniz).

6. **[M]** Slayttaki **“Akıllı Güneş Tarlası Veri Yönetim Sistemi”** örneğinden yola çıkarak:  
   (a) En az 100 sensörlük simülasyonda Publisher–MQTT–Subscriber üçlüsünün veri akışını şema olarak betimleyiniz.  
   (b) Sıcaklık, nem ve ışık sensörlerinden gelen verilerin Subscriber tarafında **hangi amaçla** (analiz, depolama, raporlama) kullanılacağını her sensör için ayrı yazınız.

7. **[M]** Slayttaki üç dönem projesi alanından (Akıllı Tarım, Akıllı Ev, Akıllı Sistemler Yönetim Birimi) birini seçerek slaytta geçen alt başlıkları kullanıp: toplanacak veriyi, dijitalleştirme adımlarını ve YZ destekli yönetim fikrini kısaca modelleyiniz.

8. **[Ç]** Slaytta “standartlaşma” vurgusuyla Matter ve Thread protokolleri anılıyor. Standartlaşma olmasaydı heterojen cihazlardan kurulu bir evde hangi somut sorunlar yaşanırdı? En az üç sorunu ders içeriği çerçevesinde açıklayınız.

---

## BÖLÜM 2 — MODERN IoT MİMARİLERİ

9. **[T]** Slayttaki mimari tanımını (fiziksel bileşenler, fonksiyonel organizasyon, konfigürasyon, çalışma prensipleri, veri formatları) açıklayıp her bir unsura IoT’den birer örnek veriniz.

10. **[T]** IoT sisteminin 6 fonksiyonel bloğunu (Algılama, İletişim, Yönetim, Bulut, Servisler, Uygulama) yazıp her biri için slayttaki tek cümlelik tanımı parafraz ediniz.

11. **[A]** 3 katmanlı ve 5 katmanlı IoT mimarilerini; katmanların içeriği ve eklenen katmanların getirdiği **iş/analiz yeteneği** açısından karşılaştırınız. Slayttaki “3 katmanlı model karmaşık veri işleme ve iş modellerini açıklamakta yetersiz kalır” ifadesini bu karşılaştırmanın içine yerleştiriniz.

12. **[Ç]** Slayta göre IoT mimariye neden ihtiyaç duyar? Heterojenlik, ölçeklenebilirlik ve modülerlik (loosely coupled) başlıklarını kullanarak; “10 cihazda çalışan sistemin 10.000 cihazda neden çöktüğünü” kendi cümlelerinizle açıklayınız.

13. **[Ç]** Slaytta mimari “Ölçeklenebilirlik, Güvenlik, Birlikte çalışabilirlik” sağlar deniyor. Aynı slayt “üzerinde tam uzlaşılmış tek bir mimari yoktur” diyor. Mimarinin faydalarının bilinmesine rağmen neden tek bir standart yoktur? IoT’nin doğasını referans alarak tartışınız.

14. **[A]** Middleware (İşleme) katmanının rolünü (büyük veriyi depolama, analiz, karar verme) açıklayıp; bu katmanın **kaldırılması** durumunda 5 katmanlı mimarinin nasıl çökeceğini mantıksal olarak çıkarımlarla yazınız.

15. **[A]** Edge, Fog ve Cloud yaklaşımlarını **hız vs. derin analiz** kıyası çerçevesinde karşılaştırınız. Slayttaki “Akıllı kamera → sadece ‘İnsan Görüldü’ bilgisini gönderir” örneği hangi yaklaşıma aittir ve bu tercihin sebebi nedir?

16. **[Ç]** Slaytta “Otonom araçlar için <10 ms gecikme şarttır” denmektedir. Bu zaman kısıtının Cloud-Centric bir mimariyle sağlanamamasının nedenlerini; bant genişliği ve gecikme argümanlarıyla açıklayınız.

17. **[M]** **Akıllı Sera Vakası (slayt 2.4).** Binlerce dönümlük sera için; Perception, Network, Middleware ve Business katmanlarında verilecek kararları slayttaki cevaplarla (nem/sıcaklık/pH/yağış, LoRaWAN, yerel ön işleme, sulama yapma/yapmama kararı) tutarlı biçimde kurgulayınız. Her katmanda verilen kararın diğer katmanları **nasıl etkilediğini** açıklayınız.

18. **[T]** ISO/IEC 30141’i “sözlük ve şablon” olarak kullanmanın avantajı nedir? Slaytta geçen domain’leri (User, Service, Access, Physical, Resource) ve Trustworthiness bileşenlerini (güvenlik, emniyet, dayanıklılık, gizlilik) listeleyip kısaca açıklayınız.

---

## BÖLÜM 3 — SENSÖRLER VE AKTÜATÖRLER I

19. **[T]** Algılama katmanının **amacını ve sorumluluğunu** slayttaki ifadelerle yazınız. Slayttaki “topraktaki nem miktarının voltaj değerine dönüştürülmesi” örneğiyle fiziksel sinyalin dijital yapıya dönüşümünü aşama aşama betimleyiniz.

20. **[T]** Sensörleri (a) ölçme türü (aktif/pasif) ve (b) çıktı türü (analog/dijital) açısından sınıflandırıp slaytta verilen örneklerle (PIR, LDR, LiDAR, RADAR, LM35, DHT) eşleştiriniz.

21. **[A]** Aşağıdaki sensörleri slayttaki bilgilerle tablo haline getiriniz: LM35, HC-SR04, ADXL345, BMP180, LDR, DHT11, MAX30100, PIR, MQ-3. Her biri için **ölçtüğü nicelik, aktif/pasif, analog/dijital, güç tüketimi aralığı ve pinleri**ni yazınız.

22. **[Ç]** Neden MQ-3 sensörünün güç tüketimi (150–200 mA) ile LM35’in güç tüketimi (~60 μA) arasında bu kadar büyük fark vardır? Slayttaki aktif/pasif sensör tanımlarından hareketle nedenini açıklayınız.

23. **[Ç]** ADXL345 gibi I2C/SPI üzerinden dijital çıkış veren sensörlerin, LM35 gibi analog sensörlere göre **mikrodenetleyiciye entegrasyonu** neden daha kolay olabilir? Pin listeleri ve çıktı yapıları üzerinden çıkarım yapınız.

24. **[M]** Bir akıllı sağlık uygulaması için nabız ve hareket ölçümü gerekiyor. Slayttaki sensör seçeneklerinden uygun olanları seçip her birinin pin bağlantılarını (VCC, GND, SDA, SCL, INT vs.) ve haberleşme arabirimini (I2C/SPI/dijital) yazınız.

25. **[T]** RFID’nin iki bileşenini (Okuyucu ve Etiket) tanımlayıp okuma sürecini adım adım yazınız. Pasif ve aktif etiketlerin farkını güç kaynağı–menzil ekseninde açıklayınız.

26. **[M]** Slayttaki **“İnsansız kasa”** örneğine göre bir RFID tabanlı mağaza çıkış sistemini kurgulayınız:  
   (a) Hangi tip etiket (aktif/pasif) seçilirdi, gerekçesi?  
   (b) Okuyucunun yerleşim mantığı ne olmalı?  
   (c) Bu süreçte algılama–ağ–uygulama katmanlarının her biri ne iş yapar?

27. **[Ç]** Slaytta “IoT ekosisteminde her nesnenin benzersiz bir kimliğe sahip olması gerekiyor” denmektedir. Benzersiz kimliğin olmadığı bir RFID ağında hangi problemler ortaya çıkar? En az üç problem yazınız.

---

## BÖLÜM 4 — SENSÖRLER VE AKTÜATÖRLER II

28. **[T]** EPC (Elektronik Ürün Kodu) nedir? Slaytta EPC’yi tanımlayıp mimari bileşenlerini (Auto-ID laboratuvarları, EPC, ONS) kısaca açıklayınız.

29. **[T]** WSN’de Mote ve Sink düğümlerinin görevlerini slayttaki ifadelerle tanımlayıp, kablolu çözümlere kıyasla sağladığı iki avantajı yazınız.

30. **[A]** IEEE 802.15.4 standardını; hedef ağ tipi (WPAN), mesafe, bant genişliği (10 m, 250 kbit/s), frekans bantları (800/900 MHz – 2.4 GHz) ve tasarım ilkeleri (düşük güç, düşük maliyet, düşük karmaşıklık) başlıkları altında özetleyiniz.

31. **[T]** Yıldız, Mesh ve Ağaç topolojilerini slayttaki açıklamalarla tanımlayıp her biri için bir IoT kullanım örneği (akıllı ev, akıllı fabrika, akıllı şehir/tarım) yazınız.

32. **[A]** Slayttaki avantaj–dezavantaj matrisini (Kurulum Kolaylığı, Güvenilirlik, Enerji Verimliliği, Menzil) kullanarak üç topolojinin her biri için **güçlü ve zayıf yönleri** kendi cümlelerinizle yeniden yazınız.

33. **[Ç]** Neden Mesh topolojisi enerji verimliliğinde Yıldız’ın gerisinde kalır? Slayttaki “düşük güçlü sinyaller” ve “düğümler arası röleleme” vurgularından çıkarımla açıklayınız.

34. **[M]** Bir akıllı sera (geniş alan), bir akıllı ev (oturma odası) ve bir akıllı fabrika (kritik üretim hattı) için uygun topolojiyi seçip gerekçesini slayt verileriyle dayandırınız.

35. **[T]** Aktüatör sınıflarını (Elektriksel, Mekanik, Pnömatik/Hidrolik) slayttaki tanım ve örneklerle (Röle, LED, Step motor; anahtarlama; endüstriyel robot pistonları) açıklayınız.

36. **[A]** Slayttaki “gerçek tarla–mini motor” karşılaştırmasında IoT sistemi neden pompayı doğrudan sürmez de solenoid vanaları açar/kapatır? Güç, ölçek ve güvenlik açısından çıkarımlar yapınız.

37. **[M]** Slayttaki **aktüatör örnekleri** (DC su pompası, Full Spectrum LED, Röle modülü, 12V DC fan, Aktif buzzer, LED lamba) arasından bir “akıllı ev güvenlik+konfor” senaryosu kurgulayıp hangi sensör hangi aktüatörü tetikler diyagramını metinle yazınız.

38. **[A]** Mikroişlemci ve mikrodenetleyici arasındaki farkları slayttaki tüm maddeler üzerinden tablo olarak karşılaştırınız: bellek/G-Ç entegrasyonu, kompaktlık, maliyet, güç tüketimi, tasarruf modları, kullanım alanı, mimari (Von Neumann / Harvard), register sayısı, komut seti, frekans.

39. **[Ç]** Neden pille çalışan kompakt IoT cihazlarında mikroişlemci yerine mikrodenetleyici tercih edilir? Slayttaki güç tüketimi ve entegrasyon argümanlarıyla savununuz.

40. **[Ç]** Harvard mimarisinin IoT bağlamında mikroişlemcinin Von Neumann modeline göre ne gibi avantajları olabilir? Slayttaki “dahili kontrol veriyolu” ve “tek çip üzerinde RAM/ROM” bilgisinden yola çıkarak çıkarımlar yapınız.

---

## BÖLÜM 5 — TINYML VE UÇTA YAPAY ZEKA

41. **[T]** IoT verisetlerinin üç temel karakteristiğini (devasa hacim, heterojen yapı, gerçek zamanlı akış) açıklayınız. Bu özellikler neden elle analizi imkânsız kılar?

42. **[T]** Makine Öğrenmesi’nin slayttaki tanımına göre amacı nedir? Veri Madenciliği kavramını da aynı paragrafa yerleştirerek cevaplayınız.

43. **[T]** Temel ML yaklaşımlarını (Sınıflandırma, Kümeleme, Regresyon) slayttaki görsel örneklerle (renkli nokta sınıflaması, 256→16 renk indirgeme, hava–deniz suyu sıcaklığı eğrisi) eşleştirip birer cümleyle tanımlayınız.

44. **[A]** Slayttaki “doktor örneği” üzerinden özellik belirleme (feature determination), özellik seçimi (feature selection) ve özellik çıkarımı (feature inference) kavramlarını birbirinden ayırınız. Hangi yöntem grubu hangi teknikleri (PCA, LDA vs. bilgi teorisi, entropi, SNR, duyarlılık analizi) içerir?

45. **[T]** Slaytta listelenen ML algoritmalarını yazıp (SVM, ANN, Karar Ağaçları, Naïve Bayes, Random Forest) her birini en fazla bir cümleyle genel tipiyle (sınıflandırıcı/ensemble vs.) eşleştiriniz.

46. **[M]** Anomali tespitinin **veri akış sürecini** (Veri Toplama → Ön İşleme → Profil Oluşturma → Karşılaştırma → Karar) adım adım yazınız. Slayttaki kötü amaçlı yazılım / izinsiz giriş / veri anomalisi örneklerinden birini seçerek her adımda ne olduğunu açıklayınız.

47. **[Ç]** Slayt, bulut merkeziyetli yapıdan neden kaçınılması gerektiğini üç başlık altında sıralar: gecikme, bant genişliği, mahremiyet/güvenlik. Her bir başlığın **neden** uçta çözüme itelediğini IoT senaryolarıyla (otonom araç, milyarlarca cihaz, kişisel veri) örnekleyiniz.

48. **[T]** TinyML nedir? Slayttaki tanıma göre hangi donanım sınıfında (ESP32, STM32) çalışır? Neden bu donanımlar “mikrovat seviyesi” olarak nitelendirilir?

49. **[A]** Slayttaki TinyML yaşam döngüsünü (Veri Toplama → Eğitim → Optimizasyon & Dönüştürme → Entegrasyon → Çıkarım) açıklayıp; Kuantizasyon ve Budama adımlarının neden yalnızca bu donanım için gerekli olduğunu kendi cümlelerinizle yazınız.

50. **[Ç]** “Veriyi radyo dalgalarıyla (Wi-Fi/4G) göndermek, yerelde işlem yapmaktan çok daha fazla enerji harcar” ifadesinden yola çıkarak, TinyML’in pil ömrüne yapacağı katkıyı tartışınız.

51. **[M]** Bir **kaza tespit** (örneğin ivmeölçer tabanlı düşme algılama) uygulamasını TinyML paradigmasına göre modelleyiniz: hangi sensörler, hangi veri ön işleme, hangi model, hangi optimizasyon, hangi kütüphane (TensorFlow Lite Micro) ve çıkarımda hangi aksiyon alınır?

52. **[T]** Slaytta verilen **verinin sayısallaştırılması** tablosunu kendi cümlelerinizle yazınız: resim (RGB matrisleri / gri seviye), metin (harf/hece/kelime frekansları), video (resim + zaman), ses (genlik ve frekansın zaman değişimi).

---

## BÖLÜM 6 — HABERLEŞME I: TEKNOLOJİLER

53. **[T]** Haberleşme katmanının IoT mimarisindeki rolünü ve slaytta sayılan temel fiziksel birimleri (Router, Switch, Gateway) kendi cümlelerinizle tanımlayınız.

54. **[A]** Router, Switch ve Gateway’i **çalışma katmanı, görevi, örnek kullanım** açısından karşılaştırınız. “Tercüman” benzetmesi hangisine aittir ve neden?

55. **[T]** IEEE 802.15.4 (LR-WPAN) standardının tasarım hedeflerini (düşük güç, düşük karmaşıklık, düşük maliyet) ve teknik özelliklerini (10 m, 250 kbit/s, 800/900 MHz – 2.4 GHz) açıklayınız. Slaytta vurgulanan “bant genişliği azaltılarak güç tüketimini daha da düşürme” mantığını yorumlayınız.

56. **[A]** Bluetooth ile Bluetooth Low Energy (BLE) arasındaki farkları slayttaki özellikler üzerinden (menzil 10 m vs. 10–100 m, pil ömrü, çip boyutu/maliyet, kullanım alanları) tablo halinde karşılaştırınız.

57. **[T]** NFC’yi; menzil (<10 cm), veri hızı (~424 Kbps), kaynak teknoloji (RFID uzantısı) ve günlük hayattan bir örnek (telefonla kredi kartı işlevi) üzerinden tanıtınız.

58. **[Ç]** 6LoWPAN’ın “IPv6 over Low-Power WPAN” açılımını referans alarak; IPv6 desteğinin IoT için neden kritik olduğunu (adres uzayı, çok sayıda cihazın yönetimi) açıklayınız.

59. **[A]** Slayttaki teknoloji karşılaştırma tablosunu (Wi-Fi, Bluetooth, 6LoWPAN, NFC) dört başlık altında (bağlantı tipi, hız aralığı, avantaj, dezavantaj) yeniden yazıp hangi IoT senaryoları için hangi teknolojinin uygun olduğunu kısaca belirtiniz.

60. **[T]** Geniş alan (WAN) entegrasyonu kapsamında GPRS/2G ile 3G/4G arasındaki **kullanım farkını** (temel sensör verisi iletimi vs. görüntülü izleme/tıbbi takip) ve slaytta vurgulanan güvenlik özelliğini (kendi güvenlik protokolleri) açıklayınız.

61. **[M]** Slaytta verilen iki “Tartışma” sorusunu kendi gerekçeleriniz ile çözünüz:  
   (a) Yönetim biriminde Raspberry Pi sahibiyiz ve sensör cihazlara **IP adresi** üzerinden erişmek istiyoruz — hangi teknoloji? Neden?  
   (b) Tarım projesini okulun Wi-Fi kapsama alanı dışında gerçek tarlaya kurarsak haberleşmeyi nasıl sağlarız? Neden?

62. **[M]** Bir akıllı hastane senaryosu için; hasta kimliği (NFC), yatak-başı nabız takibi (BLE), oda içi sensör ağı (6LoWPAN/IEEE 802.15.4) ve merkezle görüntülü takip (4G) teknolojilerini uygun katmanlarda konumlandıran bir haberleşme planı yapınız. Her seçimin nedenini slaytlardan alıntıyla destekleyiniz.

63. **[Ç]** Wi-Fi’nin en büyük avantajı (yüksek hız, internet erişimi) ve en büyük dezavantajı (yüksek güç tüketimi) eş zamanlı olarak IoT’de hangi uygulama sınıflarını **dışlar**, hangilerini **tercih ettirir**? Kendi cümlelerinizle tartışınız.

64. **[A]** Aşağıdaki tabloyu sadece slayt verileriyle doldurunuz ve ardından her satırdaki **“neden bu teknoloji?”** sorusunu tek cümleyle yanıtlayınız:  
   - Saat pili ile yıllarca çalışan fitness bilekliği → ?  
   - Gerçek tarlada geniş alan izleme → ?  
   - Ofis LAN’ı içinde yazıcı-sunucu yönlendirme → ?  
   - Telefonla temassız ödeme → ?  
   - Düşük güçlü sensörün internete IPv6 üzerinden açılması → ?

---

> Not: Yukarıdaki sorular, sınıfta cevap anahtarı olarak kullanılmak üzere doğrudan slayt cümlelerinden türetilmiştir; özel bir kitap/dış kaynak gerektirmez.
