# Cheyza Portfolyo

Next.js, React, TailwindCSS ve Framer Motion ile geliştirilmiş modern, koyu temalı, responsive portfolyo web sitesi.

## 🚀 Özellikler

- **Koyu Tema**: Siyah-beyaz minimalist tasarım
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Smooth Animasyonlar**: Framer Motion ile güçlendirilmiş animasyonlar ve mikro-etkileşimler
- **Yükleme Ekranı**: Dinamik mesajlarla animasyonlu loader
- **SEO Optimizasyonu**: Meta taglar ve erişilebilirlik özellikleri
- **Performans**: Lighthouse ile optimize edilmiş hız ve performans

## 🛠️ Teknoloji Yığını

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animasyonlar**: Framer Motion
- **İkonlar**: Lucide React
- **Fontlar**: Inter & Poppins (Google Fonts)
- **Deploy**: Vercel

## 📦 Kurulum

1. Repository'yi klonlayın:
```bash
git clone <repository-url>
cd cheyza-portfolio
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. [http://localhost:3000](http://localhost:3000) adresini tarayıcınızda açın.

## 🚀 Vercel'e Deploy

### Yöntem 1: Vercel CLI

1. Vercel CLI'yi yükleyin:
```bash
npm i -g vercel
```

2. Vercel'e giriş yapın:
```bash
vercel login
```

3. Deploy edin:
```bash
vercel
```

4. Projenizi yapılandırmak için istemleri takip edin.

### Yöntem 2: Vercel Dashboard

1. Kodunuzu GitHub'a push edin
2. [vercel.com](https://vercel.com) adresine gidin
3. "New Project" butonuna tıklayın
4. GitHub repository'nizi import edin
5. Build ayarlarını yapılandırın:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. "Deploy" butonuna tıklayın

### Yöntem 3: Manuel Build & Deploy

1. Projeyi build edin:
```bash
npm run build
```

2. Production sunucusunu başlatın:
```bash
npm run start
```

3. `.next` klasörünü hosting sağlayıcınıza deploy edin.

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── globals.css          # Global stiller ve Tailwind importları
│   ├── layout.tsx           # Root layout ve metadata
│   └── page.tsx             # Ana sayfa komponenti
├── components/
│   ├── Loader.tsx           # Yükleme ekranı komponenti
│   ├── Navbar.tsx           # Navigasyon komponenti
│   ├── Hero.tsx             # Hero bölümü
│   ├── About.tsx            # Hakkımda bölümü
│   ├── Skills.tsx           # Yetenekler bölümü (progress bar'lar ile)
│   ├── Projects.tsx         # Projeler vitrin
│   ├── Contact.tsx          # İletişim formu ve sosyal linkler
│   └── Footer.tsx           # Footer komponenti
```

## 🎨 Özelleştirme

### Renkler
`tailwind.config.ts` dosyasında renk şemasını güncelleyin:
```typescript
colors: {
  primary: {
    500: '#ffffff', // Beyaz
    // ... diğer tonlar
  },
  secondary: {
    500: '#a0a0a0', // Gri
    // ... diğer tonlar
  }
}
```

### İçerik
- Her komponentte kişisel bilgileri güncelleyin
- `Projects.tsx` dosyasında proje verilerini değiştirin
- `Contact.tsx` ve `Footer.tsx` dosyalarında sosyal medya linklerini değiştirin
- `layout.tsx` dosyasında meta tagları güncelleyin

### Animasyonlar
Her komponentte Framer Motion özelliklerini değiştirerek animasyonları özelleştirin.

## 📱 Responsive Breakpoint'ler

- **Mobil**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Scriptler

- `npm run dev` - Geliştirme sunucusunu başlat
- `npm run build` - Production için build et
- `npm run start` - Production sunucusunu başlat
- `npm run lint` - ESLint çalıştır

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Repository'yi fork edin
2. Feature branch oluşturun
3. Değişikliklerinizi commit edin
4. Branch'e push edin
5. Pull Request açın

## 📞 Destek

Destek için cheyza@example.com adresine e-posta gönderin veya GitHub'da issue oluşturun.

---

Cheyza tarafından ❤️ ile yapıldı
