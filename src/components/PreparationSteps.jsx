import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle2, Star, Heart, Target, Sparkles, Sun } from 'lucide-react';

// Liste des éléments de préparation mentale
const PREP_ITEMS = [
  {
    id: 1,
    icon: <Shield className="w-12 h-12 text-purple-500" />,
    title: "Je suis légitime",
    text: "Ma présence et mon approche sont uniques et précieuses",
    affirmation: "Je suis exactement là où je dois être",
    color: "from-purple-100 to-purple-50"
  },
  {
    id: 2,
    icon: <Heart className="w-12 h-12 text-pink-500" />,
    title: "J'apporte de la valeur",
    text: "Je transforme positivement la vie des autres",
    affirmation: "Mon impact est réel et significatif",
    color: "from-pink-100 to-pink-50"
  },
  {
    id: 3,
    icon: <Target className="w-12 h-12 text-blue-500" />,
    title: "Je maîtrise mon sujet",
    text: "Je connais parfaitement mon programme et ses bénéfices",
    affirmation: "Je suis experte dans mon domaine",
    color: "from-blue-100 to-blue-50"
  },
  {
    id: 4,
    icon: <Sparkles className="w-12 h-12 text-amber-500" />,
    title: "Mon énergie rayonne",
    text: "Mon enthousiasme est communicatif et inspirant",
    affirmation: "Mon énergie positive est contagieuse",
    color: "from-amber-100 to-amber-50"
  },
  {
    id: 5,
    icon: <Star className="w-12 h-12 text-indigo-500" />,
    title: "Je suis bienveillante",
    text: "J'écoute avec empathie et guide avec attention",
    affirmation: "Je crée un espace de confiance",
    color: "from-indigo-100 to-indigo-50"
  },
  {
    id: 6,
    icon: <Sun className="w-12 h-12 text-yellow-500" />,
    title: "Je suis résiliente",
    text: "Je m'adapte aux défis avec courage et détermination",
    affirmation: "Chaque obstacle est une opportunité de grandir",
    color: "from-yellow-100 to-yellow-50"
  }
];

// Fonction pour formater le temps pour le minuteur de respiration
const formatBreathingTime = (seconds) => {
  return seconds.toString();
};

function PreparationSteps({ onPreparationComplete }) {
  const [checkedItems, setCheckedItems] = useState([]);
  const [breathingPhase, setBreathingPhase] = useState(null);
  const [breathCount, setBreathCount] = useState(3);
  const [isBreathing, setIsBreathing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [phaseTime, setPhaseTime] = useState(5);

  const allPrepItemsChecked = (checkedItems) => {
    return checkedItems.length === PREP_ITEMS.length;
  };

  const handleItemCheck = (id) => {
    setCheckedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(itemId => itemId !== id);
      }
      return [...prev, id];
    });
  };

  const handlePreparationComplete = () => {
    if (allPrepItemsChecked(checkedItems)) {
      startBreathing();
    }
  };

  const startBreathing = () => {
    setIsBreathing(true);
    setBreathCount(3);
    setBreathingPhase('Inspirez');
    setPhaseTime(5);
  };

  useEffect(() => {
    if (isBreathing) {
      const cycle = ['Inspirez', 'Retenez', 'Expirez', 'Retenez'];
      let currentIndex = 0;

      setBreathingPhase(cycle[currentIndex]);
      setPhaseTime(5);

      const interval = setInterval(() => {
        setPhaseTime((prev) => {
          if (prev > 1) {
            return prev - 1;
          } else {
            currentIndex = (currentIndex + 1) % cycle.length;
            setBreathingPhase(cycle[currentIndex]);
            setPhaseTime(5);

            if (currentIndex === 0) {
              setBreathCount((prev) => {
                if (prev <= 1) {
                  clearInterval(interval);
                  setBreathingPhase(null);
                  setIsBreathing(false);
                  setIsReady(true);
                  return 0;
                }
                return prev - 1;
              });
            }
            return 5;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isBreathing]);

  // Rendu de la préparation mentale
  if (!isBreathing && !isReady) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-900 mb-4">
              Préparation Mentale
            </h1>
            <p className="text-lg text-purple-700">
              Prenez un moment pour vous centrer et renforcer votre mindset
            </p>
          </div>

          {/* Grille des cartes de préparation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {PREP_ITEMS.map((item) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden bg-gradient-to-br ${item.color} 
                  rounded-xl shadow-lg transition-all duration-300 transform 
                  hover:scale-102 cursor-pointer ${
                    checkedItems.includes(item.id) ? 'ring-4 ring-offset-2 ring-purple-500' : ''
                  }`}
                onClick={() => handleItemCheck(item.id)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    {item.icon}
                    {checkedItems.includes(item.id) && (
                      <CheckCircle2 className="w-8 h-8 text-purple-500" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton pour confirmer la préparation et démarrer la respiration */}
          <div className="text-center mt-8">
            <button
              onClick={handlePreparationComplete}
              disabled={!allPrepItemsChecked(checkedItems)}
              className={`px-6 py-3 rounded-lg text-white font-semibold transition-colors 
                ${
                  allPrepItemsChecked(checkedItems)
                    ? 'bg-purple-600 hover:bg-purple-700'
                    : 'bg-purple-300 cursor-not-allowed'
                }`}
            >
              Confirmer et passer à la respiration
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Rendu de la respiration guidée
  if (isBreathing) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Respiration Carrée
          </h2>
          <p className="text-lg text-blue-700">
            Suivez le rythme pour vous recentrer et vous apaiser
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 flex items-center justify-center bg-blue-100 rounded-full mb-6">
            <span className="text-2xl font-medium text-blue-700">{breathingPhase}</span>
            <div className="absolute bottom-4 text-4xl font-bold text-blue-900">
              {formatBreathingTime(phaseTime)}
            </div>
          </div>
          <p className="text-gray-700 text-lg">Cycles restants: {breathCount}</p>
        </div>
      </div>
    );
  }

  // Rendu du message "Je suis prête !"
  if (isReady) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-8 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-green-900 mb-6">
          Je suis prête !
        </h2>
        <button
          onClick={onPreparationComplete}
          className="px-6 py-3 rounded-lg text-white font-semibold bg-green-600 hover:bg-green-700 transition-colors"
        >
          Commencer le script
        </button>
      </div>
    );
  }

  return null;
}

export default PreparationSteps;
