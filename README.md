# Niğmet Vinç ve Forklift Web Sitesi

Keşan ve çevre bölgelerde vinç ve forklift kiralama hizmeti veren Niğmet Vinç ve Forklift şirketi için responsive, modern bir web sitesi.

## İçindekiler
- [Proje Hakkında](#proje-hakkında)
- [Özellikler](#özellikler)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Teknik Detaylar](#teknik-detaylar)
- [Kurulum](#kurulum)
- [Lisans](#lisans)
- [Geliştirici Hakkında](#geliştirici-hakkında)
- [Destek](#destek)

## Proje Hakkında

Bu web sitesi, Keşan merkezli ve güvenilir vinç ile forklift kiralama çözümleri sunan Niğmet Vinç ve Forklift'in çevrimiçi varlığını oluşturur. Site, hizmetler, şirket geçmişi, fotoğraf galerisi ve iletişim bilgileri hakkında bilgi sağlar.

Şirket aşağıdaki alanlarda uzmanlaşmıştır:
- Vinç kiralama
- Forklift kiralama
- Ağır yük kaldırma ve taşıma
- Konteyner taşıma
- Sanayi ve fabrika taşımacılığı
- Araç kurtarma
- 7/24 acil vinç hizmeti

## Özellikler

- **Tamamen Responsive Tasarım**: Mobil cihazlardan masaüstü bilgisayarlara kadar tüm cihazlarda çalışır
- **Modern Arayüz**: Temiz, profesyonel tasarım ve akıcı animasyonlar
- **Etkileşimli Öğeler**: 
  - Otomatik dönen ana slider
  - Kesintisiz kaydırma navigasyonu
  - Mobil cihazlara uyumlu navigasyon menüsü
- **Hizmet Sergileme**: Tüm hizmetlerin ve ek hizmetlerin kapsamlı gösterimi
- **Fotoğraf Galerisi**: Şirket çalışmalarının ve ekipmanlarının görsel sunumu
- **İletişim Bilgileri**: Telefon numaralarına ve konuma kolay erişim
- **Erişilebilirlik Özellikleri**: Uygun ARIA etiketleri ve anlamsal HTML

## Kullanılan Teknolojiler

- **HTML5**: Anlamsal içerik yapısı için
- **CSS3**: Flexbox ve Grid gibi modern özelliklerle özel stil
- **JavaScript**: İstemci tarafı etkileşimliliği ve DOM manipülasyonu
- **Google Fonts**: Yazı tipleri için Montserrat ve Poppins
- **Font Awesome**: Görsel öğeler için ikonlar
- **Responsive Tasarım**: Medya sorgularıyla mobil öncelikli yaklaşım

## Teknik Detaylar

### Proje Yapısı
```
├── index.html       # Ana HTML dosyası
├── style.css        # Özel stil dosyası
├── script.js        # JavaScript fonksiyonları
├── images/          # Görsel dosyalar (repo'da bulunmaz)
│   ├── logo.png
│   ├── slide1.jpg
│   ├── slide2.jpg
│   ├── slide3.jpg
│   ├── about.jpg
│   └── gallery*.jpg
└── README.md        # Bu dosya
```

### Ana Bileşenler

1. **Navigasyon Sistemi**
   - Mobil uyumlu navbar ve çekmece menü
   - Bölümler arası kesintisiz kaydırma
   - Google Maps entegrasyonlu konum bağlantısı

2. **Ana Bölüm**
   - Otomatik dönen görsel slider (5 saniyelik aralıklarla)
   - Metin okunabilirliği için kaplama efektleri
   - Eylem çağrısı butonları

3. **Hizmetler Bölümü**
   - Ana hizmetler için ızgara düzeni
   - Ek hizmetler sergileme
   - Etkileşim için hover efektleri

4. **Hakkımızda Bölümü**
   - Şirket bilgileri ve açıklama
   - Dekoratif öğelerle görsel
   - "2024'ten Beri" rozeti

5. **Galeri Bölümü**
   - Responsive görsel ızgara
   - Hover yakınlaştırma efektleri
   - Çalışmaların görsel sergisi

6. **İletişim Bölümü**
   - Doğrudan arama bağlantıları
   - Google Maps entegrasyonu
   - Google yorumlar için bağlantı

### Tasarım Öğeleri

- **Renk Paleti**: 
  - Birincil: Vurgular ve CTA'lar için Sarı (#F9A825)
  - İkincil: Arka planlar için Açık gri (#f5f5f5)
  - Metin: Okunabilirlik için Koyu gri (#222)
- **Tipografi**: 
  - Başlıklar için Montserrat (kalın, modern görünüm)
  - Gövde metni için Poppins (temiz, okunabilir)
- **Efektler**: 
  - Akıcı geçişler ve animasyonlar
  - Cam-morfizm ilhamlı butonlar
  - Derinlik için kutu gölgeleri

## Kurulum

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/your-username/nigmet-vinc-forklift.git
   ```

2. Proje dizinine gidin:
   ```bash
   cd nigmet-vinc-forklift
   ```

3. `index.html` dosyasını web tarayıcınızda açın veya yerel bir sunucu kullanarak çalıştırın:
   ```bash
   # Python kullanarak
   python -m http.server 8000
   
   # Node.js kullanarak (http-server yüklüyse)
   npx http-server
   
   # VS Code'da Live Server eklentisi ile
   # index.html'e sağ tıklayıp "Open with Live Server" seçeneğini seçin
   ```

4. Web sitesini yerel olarak görüntülemek için tarayıcınızda `http://localhost:8000` adresine (veya sunucunuzun belirttiği port numarasına) gidin

**Not**: Web sitesi, `images/` klasörüne aşağıdaki görsel dosyaların yerleştirilmesini gerektirir:
- Şirket logosu için `logo.png`
- Ana slider için `slide1.jpg`, `slide2.jpg`, `slide3.jpg`
- Hakkımızda bölümü için `about.jpg`
- Galeri bölümü için `gallery1.jpg` ila `gallery9.jpg`

## Lisans

Bu proje tescilli yazılımdır. Tüm hakları Niğmet Vinç ve Forklift'e aittir.
Bu yazılımın izinsiz kopyalanması, değiştirilmesi, dağıtılması veya kullanılması kesinlikle yasaktır.

## Geliştirici Hakkında

Ben Enes Bİrer, Amasya Üniversitesi 3. sınıf öğrencisiyim. Modern, responsive web siteleri oluşturmak ve mükemmel kullanıcı deneyimleri sunmak konusunda tutkulu bir web geliştiriciyim.

## Destek

Bu projeye destek olmak veya değişiklik yapmak isterseniz:
- Depoyu fork'layabilirsiniz
- Değişiklikleriniz için yeni bir branch oluşturabilirsiniz
- İyileştirmelerinizle birlikte pull request gönderebilirsiniz
- Hatalar veya yeni özellik istekleri için issue açabilirsiniz

Büyük değişiklikler için, önce bir issue açarak neyi değiştirmek istediğinizi tartışmanızı öneririz.

---

© 2025 Niğmet Vinç ve Forklift. Tüm hakları saklıdır.
