// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Import pour une police optimisée (améliore l'UX et les performances)
import './globals.css'; // Styles globaux (ajoutez Tailwind ou CSS personnalisé ici pour plus d'améliorations)

const inter = Inter({ subsets: ['latin'] }); // Police responsive et rapide à charger

// Métadonnées SEO optimisées pour un meilleur ranking sur Google et les réseaux sociaux
export const metadata: Metadata = {
  title: 'Milele4Ever – Souvenirs Éternels', // Titre principal, visible dans les onglets et résultats de recherche
  description: 'Un site dédié aux souvenirs inoubliables, optimisé pour le web et accessible partout. Découvrez nos histoires, photos et plus.', // Description pour les snippets Google (150-160 chars idéal)
  keywords: 'souvenirs éternels, milele4ever, blog personnel, mémoires, optimisation web', // Mots-clés pour cibler les recherches (ne pas surcharger)
  authors: [{ name: 'Kentley K-UI' }], // Crédit auteur pour crédibilité SEO
  openGraph: { // Pour les partages sociaux (améliore l'engagement et le trafic)
    title: 'Milele4Ever – Souvenirs Éternels',
    description: 'Partagez vos souvenirs inoubliables avec Milele4Ever.',
    url: 'https://milele4ever.vercel.app/', // URL canonique pour éviter les duplications SEO
    siteName: 'Milele4Ever',
    images: [
      {
        url: '/og-image.jpg', // Remplacez par une image réelle (ajoutez-la dans public/ pour optimisation)
        width: 1200,
        height: 630,
        alt: 'Image de couverture Milele4Ever',
      },
    ],
    locale: 'fr_FR', // Langue pour SEO international
    type: 'website',
  },
  twitter: { // Spécifique à Twitter/X pour cartes enrichies
    card: 'summary_large_image',
    title: 'Milele4Ever – Souvenirs Éternels',
    description: 'Découvrez nos souvenirs éternels.',
    images: ['/og-image.jpg'], // Même image pour cohérence
  },
  robots: { // Instructions pour les crawlers (améliore l'indexation)
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Layout racine pour envelopper toutes les pages (améliore la cohérence UX)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr"> {/* Langue française pour SEO localisé */}
      <head>
        {/* Ajouts manuels si needed, mais Next.js gère via metadata */}
      </head>
      <body className={inter.className}> {/* Applique la police pour une UX fluide */}
        {children} {/* Contenu des pages enfants */}
      </body>
    </html>
  );
}