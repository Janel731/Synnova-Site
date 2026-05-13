import { useState } from 'react';
import { X, Play, Star, Mic, Globe } from 'lucide-react';

// Composant Popup (sans image)
const PopupCard = ({ isOpen, onClose, title, description, color, icon }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-[rgba(26,35,126,0.9)] backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Contenu Popup */}
      <div className="relative bg-[#FAFAFA] max-w-md w-full rounded-3xl overflow-hidden shadow-2xl animate-[popIn_0.3s_ease-out]">
        
        {/* En-tête coloré */}
        <div 
          className="h-24 flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <div className="w-20 h-20 bg-[#FAFAFA]/20 rounded-full flex items-center justify-center text-white">
            {icon}
          </div>
        </div>

        {/* Contenu texte */}
        <div className="p-8">
          {/* Titre */}
          <h3 
            className="text-3xl font-bold text-[#1A237E] mb-3 text-center"
            style={{ color: color }}
          >
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-center">
            {description}
          </p>
          
          {/* Bouton fermer */}
          <div className="mt-8 flex justify-center">
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-[#C2185B] text-white rounded-full hover:bg-[#F8BBD0] hover:text-[#1A237E] transition-all font-bold shadow-md hover:shadow-xl"
            >
              Explorer
            </button>
          </div>
        </div>

        {/* Bouton fermer flottant */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#FAFAFA]/90 rounded-full p-2 hover:bg-[#C2185B] hover:text-white transition-colors shadow-md"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

// Section Principale
const Vision = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  // Données des cartes (sans images)
  const cardsData = [
    {
      id: 'animatrice',
      title: 'Animatrice',
      icon: <Mic size={32} />,
      color: '#C2185B', // Rose féminin
      bgColor: 'rgba(194,24,91,0.1)',
      description: "L'animation est mon souffle. J'accompagne des événements, des conférences et des ateliers avec énergie et bienveillance. Mon objectif : créer des espaces où chacun se sent écouté et inspiré."
    },
    {
      id: 'communicatrice',
      title: 'Communicatrice',
      icon: <Globe size={32} />,
      color: '#F9A825', // Or africain
      bgColor: 'rgba(249,168,37,0.1)',
      description: "Je tisse des ponts entre les messages et les publics. Communication digitale, relations presse, storytelling de marque : j'utilise la parole pour donner du sens et créer de l'impact positif."
    },
    {
      id: 'actrice',
      title: 'Actrice',
      icon: <Play size={32} />,
      color: '#F8BBD0', // Rose clair
      bgColor: 'rgba(248,187,208,0.2)',
      description: "Le cinéma est mon territoire d'expression. Chaque rôle est une exploration humaine, une manière de raconter des histoires qui résonnent avec notre époque et nos émotions."
    },
    {
      id: 'entrepreneuse',
      title: 'Entrepreneuse Sociale',
      icon: <Star size={32} />,
      color: '#1B5E20', // Vert nature
      bgColor: 'rgba(27,94,32,0.1)',
      description: "Je construis des projets qui allient impact social et développement durable. Mon entreprise est un laboratoire d'innovation pour un monde plus inclusif et respectueux de l'environnement."
    }
  ];

  return (
    <>
      <section className="py-20 md:py-32 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            {/* PARTIE GAUCHE : TEXTE DISPLAY */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="relative">
                {/* Éléments décoratifs */}
                <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[rgba(194,24,91,0.05)] blur-2xl" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[rgba(249,168,37,0.05)] blur-2xl" />
                
                {/* Texte principal */}
                <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#1A237E]">
                  <span className="block text-[#C2185B] mb-2">Je suis une femme</span>
                  <span className="block text-[#1A237E]">en chemin,</span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-[#1A237E]/70 mt-4">
                    portée par la création,
                  </span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-[#1A237E]/70">
                    la parole et l'engagement.
                  </span>
                </h2>

                {/* Ligne décorative Or */}
                <div className="w-20 h-1 bg-[#F9A825] mt-8 rounded-full" />

                {/* Citation complémentaire */}
                <p className="mt-6 text-lg text-gray-500 font-light italic max-w-md">
                  "Chaque pas est une histoire, chaque mot une empreinte."
                </p>
              </div>
            </div>

            {/* PARTIE DROITE : 4 CARTES */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              {/* FLEXBOX : 1 colonne sur mobile, 2 colonnes sur desktop */}
              <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6">
                
                {cardsData.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => setSelectedCard(card)}
                    className="w-full md:w-[calc(50%-12px)] group relative bg-[#FAFAFA] border border-gray-200 rounded-2xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    style={{
                      boxShadow: `0 4px 20px ${card.bgColor}`
                    }}
                  >
                    {/* Effet hover bordure colorée */}
                    <div 
                      className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#C2185B] transition-colors duration-300 pointer-events-none"
                    />
                    
                    {/* Contenu de la carte */}
                    <div className="relative flex flex-col items-center gap-4">
                      {/* Icône */}
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: card.bgColor,
                          color: card.color
                        }}
                      >
                        {card.icon}
                      </div>

                      {/* Titre */}
                      <h3 
                        className="text-center font-bold text-lg text-[#1A237E]"
                        style={{ color: card.color }}
                      >
                        {card.title}
                      </h3>

                      {/* Flèche d'action */}
                      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: card.color }}
                        >
                          <span className="text-white text-xs">↗</span>
                        </div>
                      </div>

                      {/* Indice cliquable */}
                      <span className="absolute bottom-2 right-2 text-xs text-gray-400 opacity-50">
                        cliquer
                      </span>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POPUP */}
      <PopupCard 
        isOpen={selectedCard !== null}
        onClose={() => setSelectedCard(null)}
        title={selectedCard?.title || ''}
        description={selectedCard?.description || ''}
        color={selectedCard?.color || '#C2185B'}
        icon={selectedCard?.icon || null}
      />
    </>
  );
};

export default Vision;