'use client';
import { usePathname } from 'next/navigation';

// Different tech/computer images per route
const PAGE_BACKGROUNDS = {
  '/': {
    url: 'https://i.ibb.co/d4VVFC9B/94bfc2656bd5.jpg',
    label: 'Blacklord Tech Background',
  },
  '/products': {
    url: 'https://i.ibb.co/d4VVFC9B/94bfc2656bd5.jpg',
    label: 'server rack',
  },
  '/about': {
    url: 'https://i.ibb.co/d4VVFC9B/94bfc2656bd5.jpg',
    label: 'retro computer screens',
  },
  '/contact': {
    url: 'https://i.ibb.co/d4VVFC9B/94bfc2656bd5.jpg',
    label: 'mechanical keyboard',
  },
  '/dashboard': {
    url: 'https://i.ibb.co/d4VVFC9B/94bfc2656bd5.jpg',
    label: 'data analytics dashboard',
  },
  '/wallet': {
    url: 'https://i.ibb.co/d4VVFC9B/94bfc2656bd5.jpg',
    label: 'digital payment tech',
  },
  '/login': {
    url: 'https://i.ibb.co/d4VVFC9B/94bfc2656bd5.jpg',
    label: 'code on screen',
  },
  '/signup': {
    url: 'https://i.ibb.co/d4VVFC9B/94bfc2656bd5.jpg',
    label: 'code on screen',
  },
};

const DEFAULT_BG = {
  url: 'https://i.ibb.co/d4VVFC9B/94bfc2656bd5.jpg',
  label: 'Blacklord Tech Background',
};

export default function TechBackground() {
  const pathname = usePathname();

  const bg =
    PAGE_BACKGROUNDS[pathname] ||
    Object.entries(PAGE_BACKGROUNDS).find(([k]) => pathname.startsWith(k) && k !== '/')?.[1] ||
    DEFAULT_BG;

  return (
    <>
      {/* Tech photo layer */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: `url('${bg.url}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15,
          transition: 'background-image 0.6s ease',
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Vignette — darkens edges so text stays readable */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,15,0.75) 100%)',
        }}
      />
    </>
  );
}