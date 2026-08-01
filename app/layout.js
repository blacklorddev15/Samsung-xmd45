import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechBackground from '../components/TechBackground';
import './globals.css';

export const metadata = {
  title: '𝐁𝐋𝐀𝐂𝐊𝐋𝐎𝐑𝐃 𝐓𝐄𝐂𝐇 - Technology & Automation Solutions',
  description: '𝑭𝒓𝒐𝒎 𝒄𝒍𝒐𝒖𝒅 𝒉𝒐𝒔𝒕𝒊𝒏𝒈 𝒕𝒐 𝒊𝒏𝒕𝒆𝒍𝒍𝒊𝒈𝒆𝒏𝒕 𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒐𝒏, 𝒘𝒆 𝒅𝒆𝒍𝒊𝒗𝒆𝒓 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚 𝒕𝒉𝒂𝒕 𝒅𝒓𝒊𝒗𝒆𝒔 𝒔𝒖𝒄𝒄𝒆𝒔𝒔. 𝑾𝒉𝒆𝒕𝒉𝒆𝒓 𝒚𝒐𝒖 𝒂𝒓𝒆 𝒂 𝒄𝒓𝒆𝒂𝒕𝒐𝒓, 𝒔𝒕𝒂𝒓𝒕𝒖𝒑, 𝒐𝒓 𝒆𝒔𝒕𝒂𝒃𝒍𝒊𝒔𝒉𝒆𝒅 𝒃𝒖𝒔𝒊𝒏𝒆𝒔𝒔, 𝒐𝒖𝒓 𝒑𝒐𝒘𝒆𝒓𝒇𝒖𝒍 𝑷𝒕𝒆𝒓𝒐𝒅𝒂𝒄𝒕𝒚𝒍 𝒉𝒐𝒔𝒕𝒊𝒏𝒈, 𝒂𝒅𝒗𝒂𝒏𝒄𝒆𝒅 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 𝒂𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒐𝒏, 𝒂𝒏𝒅 𝒊𝒏𝒏𝒐𝒗𝒂𝒕𝒊𝒗𝒆 𝒅𝒊𝒈𝒊𝒕𝒂𝒍 𝒔𝒐𝒍𝒖𝒕𝒊𝒐𝒏𝒔 𝒂𝒓𝒆 𝒅𝒆𝒔𝒊𝒈𝒏𝒆𝒅 𝒕𝒐 𝒉𝒆𝒍𝒑 𝒚𝒐𝒖 𝒔𝒄𝒂𝒍𝒆 𝒘𝒊𝒕𝒉 𝒄𝒐𝒏𝒇𝒊𝒅𝒆𝒏𝒄𝒆.',
  keywords: 'pterodactyl hosting, whatsapp bot, automation, kenya, game server',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
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
