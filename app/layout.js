import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechBackground from '../components/TechBackground';
import './globals.css';

export const metadata = {
  title: '𝐁𝐋𝐀𝐂𝐊𝐋𝐎𝐑𝐃 𝐓𝐄𝐂𝐇 𝐈𝐍𝐂 - Technology & Automation Solutions',
  description: '𝑭𝒓𝒐𝒎 𝒄𝒍𝒐𝒖𝒅 𝒉𝒐𝒔𝒕𝒊𝒏𝒈 𝒕𝒐 𝒊𝒏𝒕𝒆𝒍𝒍𝒊𝒈𝒆𝒏𝒕 𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒐𝒏, 𝒘𝒆 𝒅𝒆𝒍𝒊𝒗𝒆𝒓 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚 𝒕𝒉𝒂𝒕 𝒅𝒓𝒊𝒗𝒆𝒔 𝒔𝒖𝒄𝒄𝒆𝒔𝒔. Your trusted partner for Telegram bots, Pterodactyl panel hosting, and automation solutions in Kenya.',
  keywords: 'pterodactyl hosting, telegram bot, automation, kenya, game server, blacklord tech, cloud hosting, digital solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style>
          {`
            /* ─── CUSTOM STYLES FOR LANDING PAGE ─── */
            
            /* Hero Section */
            .hero {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              min-height: 70vh;
              padding: 20px 10px;
            }
            
            .hero h1 {
              font-size: clamp(2.2rem, 7vw, 4.5rem);
              font-weight: 800;
              margin-bottom: 20px;
              color: #f0f4ff;
              line-height: 1.2;
            }
            
            .hero h1 span {
              background: linear-gradient(135deg, #c084fc, #7c3aed, #3b82f6);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            
            .hero .welcome-text {
              font-size: 1.05rem;
              color: #cbd5e1;
              max-width: 400px;
              margin: 0 auto 30px;
              line-height: 1.8;
              letter-spacing: 0.3px;
            }
            
            .hero .welcome-text strong {
              color: #c084fc;
              font-weight: 700;
            }
            
            .hero .btn-primary {
              background: linear-gradient(135deg, #7c3aed, #3b82f6);
              border: none;
              color: #fff;
              padding: 14px 44px;
              border-radius: 60px;
              font-weight: 600;
              font-size: 1.1rem;
              cursor: pointer;
              box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
              transition: 0.25s;
              text-decoration: none;
              display: inline-block;
            }
            
            .hero .btn-primary:hover {
              transform: scale(1.05);
              box-shadow: 0 6px 30px rgba(124, 58, 237, 0.6);
            }
            
            /* Circle Badge */
            .circle-badge {
              width: 140px;
              height: 140px;
              border-radius: 50%;
              background: url('https://i.ibb.co/tptyD9dV/3eb6a60210b6.jpg') no-repeat center center / cover;
              border: 2px solid rgba(124, 58, 237, 0.4);
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 10px auto 20px;
              box-shadow: 0 0 60px rgba(124, 58, 237, 0.12);
              padding: 15px;
              text-align: center;
              transition: 0.3s;
              position: relative;
            }
            
            .circle-badge::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background: rgba(11, 13, 26, 0.5);
              z-index: 0;
            }
            
            .circle-badge:hover {
              border-color: rgba(124, 58, 237, 0.8);
              box-shadow: 0 0 80px rgba(124, 58, 237, 0.2);
              transform: scale(1.03);
            }
            
            .circle-badge .badge-text {
              position: relative;
              z-index: 1;
              font-size: 0.85rem;
              font-weight: 700;
              line-height: 1.3;
              color: #c084fc;
              letter-spacing: 0.5px;
              text-shadow: 0 0 20px rgba(124, 58, 237, 0.15);
            }
            
            .circle-badge .badge-text .small {
              font-size: 0.6rem;
              color: #94a3b8;
              font-weight: 400;
            }
            
            /* ─── STATS ─── */
            .stats-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 1.5rem;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem 0;
            }
            
            .stat-item {
              text-align: center;
            }
            
            .stat-value {
              font-size: clamp(1.6rem, 4vw, 2rem);
              font-weight: 800;
              color: #f0f4ff;
              margin-bottom: 0.25rem;
            }
            
            .stat-label {
              font-size: 0.75rem;
              color: #475569;
            }
            
            /* ─── FEATURES ─── */
            .features-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 1.5rem;
              max-width: 1000px;
              margin: 0 auto;
            }
            
            .feature-card {
              background: #0f1629;
              border: 1px solid #1e2d4a;
              border-radius: 16px;
              padding: 1.5rem;
              transition: 0.3s;
            }
            
            .feature-card:hover {
              transform: translateY(-4px);
            }
            
            .feature-icon {
              font-size: 2.5rem;
              margin-bottom: 1rem;
            }
            
            .feature-title {
              font-size: 1.125rem;
              font-weight: 700;
              color: #f0f4ff;
              margin-bottom: 0.5rem;
            }
            
            .feature-desc {
              font-size: 0.875rem;
              color: #64748b;
              margin-bottom: 1rem;
              line-height: 1.6;
            }
            
            .feature-link {
              color: #7c3aed;
              font-weight: 600;
              text-decoration: none;
              transition: 0.3s;
            }
            
            .feature-link:hover {
              color: #c084fc;
            }
            
            /* ─── PRICING ─── */
            .pricing-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 1.5rem;
              max-width: 1000px;
              margin: 0 auto;
            }
            
            .pricing-card {
              background: #0f1629;
              border: 1px solid #1e2d4a;
              border-radius: 16px;
              padding: 1.5rem;
              position: relative;
              transition: 0.3s;
            }
            
            .pricing-card:hover {
              transform: translateY(-4px);
            }
            
            .pricing-card.popular {
              background: #1a1035;
              border-color: #7c3aed;
              box-shadow: 0 0 30px rgba(124, 58, 237, 0.2);
            }
            
            .pricing-card .popular-badge {
              position: absolute;
              top: -12px;
              left: 50%;
              transform: translateX(-50%);
              background: linear-gradient(135deg, #7c3aed, #3b82f6);
              color: #fff;
              padding: 4px 16px;
              border-radius: 99px;
              font-size: 0.75rem;
              font-weight: 700;
            }
            
            .pricing-name {
              font-weight: 700;
              font-size: 1.125rem;
              color: #f0f4ff;
              margin-bottom: 0.25rem;
            }
            
            .pricing-price {
              font-size: clamp(1.8rem, 5vw, 2.25rem);
              font-weight: 800;
              color: #f0f4ff;
            }
            
            .pricing-card.popular .pricing-price {
              color: #c084fc;
            }
            
            .pricing-features {
              list-style: none;
              padding: 0;
              margin: 1rem 0;
            }
            
            .pricing-features li {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              padding: 0.25rem 0;
              color: #94a3b8;
              font-size: 0.875rem;
            }
            
            .pricing-features li svg {
              color: #7c3aed;
              width: 16px;
              height: 16px;
              flex-shrink: 0;
            }
            
            /* ─── SECTION TITLES ─── */
            .section-title {
              text-align: center;
              margin-bottom: 3rem;
            }
            
            .section-title .badge {
              display: inline-block;
              background: rgba(124, 58, 237, 0.15);
              border: 1px solid rgba(124, 58, 237, 0.3);
              color: #c084fc;
              padding: 4px 16px;
              border-radius: 99px;
              font-size: 0.75rem;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            }
            
            .section-title h2 {
              font-size: clamp(1.6rem, 4vw, 2.5rem);
              font-weight: 800;
              color: #f0f4ff;
              margin: 0.5rem 0;
            }
            
            .section-title p {
              color: #64748b;
              max-width: 500px;
              margin: 0 auto;
            }
            
            /* ─── CTA BANNER ─── */
            .cta-banner {
              text-align: center;
              padding: 4rem 1.5rem;
              background: linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(10, 10, 15, 1));
            }
            
            .cta-banner h2 {
              font-size: clamp(1.5rem, 4vw, 2.2rem);
              font-weight: 800;
              color: #f0f4ff;
              margin-bottom: 1rem;
            }
            
            .cta-banner p {
              color: #64748b;
              margin-bottom: 2rem;
            }
            
            .cta-buttons {
              display: flex;
              gap: 1rem;
              justify-content: center;
              flex-wrap: wrap;
            }
            
            .btn-primary {
              background: linear-gradient(135deg, #7c3aed, #3b82f6);
              color: #fff;
              padding: 0.875rem 2rem;
              border-radius: 60px;
              font-weight: 700;
              text-decoration: none;
              transition: 0.3s;
              display: inline-block;
            }
            
            .btn-primary:hover {
              transform: scale(1.05);
              box-shadow: 0 0 28px rgba(124, 58, 237, 0.4);
            }
            
            .btn-secondary {
              background: transparent;
              color: #94a3b8;
              padding: 0.875rem 2rem;
              border: 1px solid #1e2d4a;
              border-radius: 60px;
              font-weight: 600;
              text-decoration: none;
              transition: 0.3s;
              display: inline-block;
            }
            
            .btn-secondary:hover {
              background: rgba(255, 255, 255, 0.05);
              color: #f0f4ff;
            }
            
            /* ─── WARRANTY ─── */
            .warranty {
              text-align: center;
              font-size: 0.75rem;
              color: #374151;
              margin-top: 2rem;
            }
            
            /* ─── RESPONSIVE ─── */
            @media (max-width: 768px) {
              .stats-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
              }
              
              .features-grid {
                grid-template-columns: 1fr;
              }
              
              .pricing-grid {
                grid-template-columns: 1fr 1fr;
              }
            }
            
            @media (max-width: 480px) {
              .pricing-grid {
                grid-template-columns: 1fr;
              }
              
              .hero h1 {
                font-size: 1.8rem;
              }
              
              .hero .welcome-text {
                font-size: 0.95rem;
              }
            }
          `}
        </style>
      </head>
      <body className="flex flex-col min-h-screen" style={{ backgroundColor: '#0a0a0f', color: '#f0f4ff' }}>
        {/* Fixed tech background — sits behind everything */}
        <TechBackground />

        <Navbar />
        <main className="flex-grow" style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}