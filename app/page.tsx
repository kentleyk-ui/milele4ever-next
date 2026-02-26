// app/page.tsx
// Page d'accueil optimisée pour Milele4Ever – Version corrigée sans duplication de 'Home'
// Améliorations : UX responsive, SEO basique via alt texts, performances via classes légères

import React from 'react'; // Import basique si needed (Next.js gère souvent sans)

// Fonction principale (exportée une seule fois pour éviter les erreurs de build)
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Hero section pour une UX engageante – Amélioration : centrage et responsivité */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Bienvenue sur Milele4Ever !
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Découvrez nos souvenirs éternels – un site optimisé pour tous les appareils, dédié aux mémoires inoubliables.
        </p>
        {/* Ajout d'un appel à action pour améliorer l'engagement UX */}
        <a 
          href="/about" // Remplacez par une route réelle si existante
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          En savoir plus
        </a>
      </div>
    </main>
  );
}