// /src/components/ScriptContent.jsx 

import React, { useState, useMemo, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  AlertCircle, 
  Shield, 
  CheckCircle2, 
  Star, 
  Heart, 
  Target, 
  Sparkles,
  Sun
} from 'lucide-react';
import { scripts } from '../data/scripts';

// Définition des blocs de temps pour le script
const TIME_BLOCKS = {
  block1: { 
    start: 1, 
    end: 10, 
    duration: 10 * 60,
    name: "Découverte et Accueil"
  },
  block2: { 
    start: 11, 
    end: 20, 
    duration: 20 * 60,
    name: "Présentation et Vision"
  },
  block3: { 
    start: 21, 
    end: 30, 
    duration: 10 * 60,
    name: "Objections"
  },
  block4: { 
    start: 31, 
    end: 43, 
    duration: 25 * 60,
    name: "Closing"
  }
};

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

// Fonction utilitaire pour formater le temps (pour le minuteur de respiration)
const formatBreathingTime = (seconds) => {
  return seconds.toString();
};

// Fonction utilitaire pour formater le temps (inchangée)
const formatTime = (seconds) => {
  const mins = Math.floor(Math.abs(seconds) / 60);
  const secs = Math.abs(seconds) % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

// Fonction pour déterminer le bloc actuel (inchangée)
const getCurrentBlock = (step) => {
  const stepNum = parseInt(step);
  for (const [blockId, block] of Object.entries(TIME_BLOCKS)) {
    if (stepNum >= block.start && stepNum <= block.end) {
      return { ...block, id: blockId };
    }
  }
  return null;
};

// Fonction pour déterminer si toutes les cartes de préparation sont cochées (inchangée)
const allPrepItemsChecked = (checkedItems) => {
  return checkedItems.length === PREP_ITEMS.length;
};

// Fonction pour calculer la phase actuelle basée sur le timer
const getBreathingInfo = (timer) => {
  if (timer === null) return {};
  
  // Chaque cycle complet dure 12 secondes (4 phases de 3 secondes)
  const totalCycleDuration = 12; // 4 phases * 3 secondes
  const totalCycles = 3; // 3 cycles
  const totalBreathingDuration = totalCycleDuration * totalCycles; // 36 secondes

  if (timer >= totalBreathingDuration) return {};

  const currentCycle = Math.floor(timer / totalCycleDuration);
  const timeInCycle = timer % totalCycleDuration;
  const currentPhase = Math.floor(timeInCycle / 3);
  const timeInPhase = (timeInCycle % 3) + 1;
  
  const phases = ['Inspirez', 'Retiens', 'Expire', 'Retiens'];
  
  return {
    cycle: currentCycle + 1,
    phase: phases[currentPhase],
    timeInPhase,
    isRetention: currentPhase === 1 || currentPhase === 3,
    retentionType: currentPhase === 1 ? '3s' : currentPhase === 3 ? '3s' : null
  };
};

function ScriptContent({ scriptId }) {
  // États du script principal
  const [currentStep, setCurrentStep] = useState('1');
  const [selectedOption, setSelectedOption] = useState(null);
  const [history, setHistory] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(TIME_BLOCKS.block1.duration);
  const [isOvertime, setIsOvertime] = useState(false);
  const [isPrepared, setIsPrepared] = useState(false);

  // États de la préparation mentale
  const [checkedItems, setCheckedItems] = useState([]);
  const [breathingPhase, setBreathingPhase] = useState(null);
  const [breathCount, setBreathCount] = useState(3);
  const [isBreathing, setIsBreathing] = useState(false);
  const [isReady, setIsReady] = useState(false); // Nouvel état pour "Je suis prête !"
  const [phaseTime, setPhaseTime] = useState(1); // Temps restant pour chaque phase de respiration

  // Remplacer tous les états de respiration par un seul compteur
  const [breathingTimer, setBreathingTimer] = useState(null);

  // Nouvel état pour les notes
  const [notes, setNotes] = useState('');

  // Effet pour la gestion du temps une fois le script démarré (inchangé)
  useEffect(() => {
    if (isPrepared) {
      const currentBlock = getCurrentBlock(currentStep);
      if (currentBlock) {
        setTimeRemaining(currentBlock.duration);
        setIsOvertime(false);
      }
    }
  }, [currentStep, isPrepared]);

  // Timer pour le script (inchangé)
  useEffect(() => {
    if (isPrepared) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          const newTime = prev - 1;
          if (newTime <= 0 && !isOvertime) {
            setIsOvertime(true);
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOvertime, isPrepared]);

  // Effet pour la respiration guidée (simplifié)
  useEffect(() => {
    if (isBreathing && breathingTimer !== null) {
      const interval = setInterval(() => {
        setBreathingTimer(prev => {
          // 36 = 3 cycles complets (3 * 12 secondes)
          if (prev >= 35) {
            clearInterval(interval);
            setIsBreathing(false);
            setIsReady(true);
            return null;
          }
          return prev + 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isBreathing, breathingTimer]);

  // Fonction pour démarrer la respiration (simplifiée)
  const startBreathing = () => {
    setBreathingTimer(0);
    setIsBreathing(true);
    setIsReady(false); // Réinitialise isReady
  };

  // Calculs mémorisés (inchangés)
  const totalSteps = useMemo(() => 
    Object.keys(scripts[scriptId] || {}).filter(key => key !== 'fin').length,
    [scriptId]
  );

  const currentScript = scripts[scriptId]?.[currentStep];
  const currentBlock = useMemo(() => getCurrentBlock(currentStep), [currentStep]);
  const progress = (parseInt(currentStep) / totalSteps) * 100;

  // Gestionnaires d'événements (inchangés)
  const handleNext = (option) => {
    if (option?.next) {
      setHistory(prev => [...prev, {
        step: currentStep,
        response: option.label,
        text: currentScript.text
      }]);
      setCurrentStep(option.next);
      setSelectedOption(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prevHistory = [...history];
      const lastStep = prevHistory.pop();
      setHistory(prevHistory);
      setCurrentStep(lastStep.step);
      setSelectedOption(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
      startBreathing(); // Démarre la respiration après confirmation
    }
  };

  // Gestionnaire pour les changements dans les notes
  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  // Nouvelle fonction pour démarrer le script principal
  const startScript = () => {
    setIsPrepared(true);
    setIsReady(false); // Réinitialise isReady pour passer au script principal
    setCurrentStep('1'); // Réinitialise à la première étape si nécessaire
  };

  if (!currentScript) return <div>Chargement en cours...</div>;

  // Rendu de la préparation mentale
  if (!isPrepared && !isBreathing && !isReady) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-900 mb-4">
              Préparation Mentale pour Chaima
            </h1>
            <p className="text-lg text-purple-700">
              Prends un moment pour lire ces affirmations à voix haute pour te centrer et renforcer ton mindset (valide en cliquant sur les cartes).
            </p>
          </div>

          {/* Grille des cartes de préparation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {PREP_ITEMS.map((item) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden bg-gradient-to-br ${item.color} 
                  rounded-xl shadow-lg transition-all duration-300 transform 
                  hover:scale-105 cursor-pointer ${
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
              Confirme et passe à la respiration
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Rendu de la respiration guidée (mis à jour avec la correction)
  if (isBreathing) {
    const { cycle, phase, timeInPhase, isRetention, retentionType } = getBreathingInfo(breathingTimer);
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Respiration Carrée
          </h2>
          <p className="text-lg text-blue-700">
            Cycle {cycle}/3
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className={`relative w-64 h-64 flex flex-col items-center justify-center bg-blue-100 rounded-full mb-6 transition-colors duration-500 ${
            phase === 'Inspirez' ? 'bg-blue-200' :
            phase === 'Expire' ? 'bg-blue-300' :
            isRetention ? 'bg-blue-400' : 'bg-blue-100'
          }`}>
            <span className="text-2xl font-medium text-blue-700 mb-4">{phase}</span>
            <div className="text-6xl font-bold text-blue-900">
              {timeInPhase}
            </div>
            {isRetention && (
              <div className="absolute bottom-4 text-sm text-blue-600">
                ({retentionType})
              </div>
            )}
          </div>
          <p className="text-gray-700 text-lg">
            {cycle < 3 ? `Cycles restants: ${3 - cycle}` : 'Dernier cycle'}
          </p>
        </div>
      </div>
    );
  }

  // Rendu du message "Je suis prête !" avec le bouton "Commencer le script"
  if (isReady) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-50 p-8 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">
          Je suis prête !
        </h2>
        <button
          onClick={startScript}
          className="px-6 py-3 rounded-lg text-white font-semibold bg-green-600 hover:bg-green-700 transition-colors"
        >
          Commence le script
        </button>
      </div>
    );
  }

  // Rendu du contenu principal du script après la préparation et la respiration
  return (
    <div className="relative min-h-screen pb-20">
      {/* Barre de progression */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-purple-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Contenu principal avec Timer intégré */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl mx-auto mt-8">
        {/* En-tête avec Timer */}
        <div className="mb-6 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-purple-900">{currentScript.title}</h2>
            <p className="text-purple-600 mt-2">Étape {currentStep} sur {totalSteps}</p>
          </div>
          
          {/* Timer intégré */}
          <div className="bg-purple-50 rounded-lg p-3 flex flex-col items-end border border-purple-100 min-w-[200px]">
            <div className="text-sm text-gray-600">
              Temps alloué: {currentBlock?.duration / 60} minutes
            </div>
            <div className="text-sm text-gray-600">
              Bloc {currentBlock?.id.slice(-1)} / 4: {currentBlock?.name}
            </div>
            <div className={`mt-1 text-xl font-bold ${
              isOvertime ? 'text-red-600' :
              timeRemaining <= 60 ? 'text-yellow-600' : 
              'text-purple-600'
            }`}>
              {formatTime(timeRemaining)}
            </div>
          </div>
        </div>

        {/* Section des notes existante dans le script */}
        {currentScript.notes && (
          <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 mb-4">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-purple-600 mt-1 mr-2" />
              <ul className="list-disc pl-4 space-y-1">
                {currentScript.notes.map((note, index) => (
                  <li key={index} className="text-sm text-purple-700">{note}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Texte principal */}
        <div className="bg-purple-50 rounded-lg p-4 mb-6">
          <p className="text-gray-800 whitespace-pre-line leading-relaxed">
            {currentScript.text}
          </p>
        </div>

        {/* Options de réponse */}
        <div className="space-y-4">
          {currentScript.options?.map((option) => (
            <div 
              key={option.id} 
              className="relative transition-transform duration-200 hover:scale-[1.01]"
            >
              <button
                onClick={() => setSelectedOption(option)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all
                  ${selectedOption?.id === option.id
                    ? 'bg-purple-100 border-purple-500 shadow-lg'
                    : 'border-gray-200 hover:bg-purple-50'}`}
              >
                <p className="font-medium text-gray-800">{option.label}</p>
                {selectedOption?.id === option.id && (
                  <div className="mt-3 pt-3 border-t border-purple-200">
                    <p className="text-purple-600 mb-4">{option.response}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext(option);
                      }}
                      className="flex items-center px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors ml-auto group"
                    >
                      Étape suivante
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </button>
            </div>
          ))}

          {/* Nouvelle section de notes personnelles */}
          <div className="mt-8 bg-amber-50 rounded-lg p-6 border-2 border-amber-100">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-amber-800">Notes personnelles</h3>
            </div>
            <textarea
              id="personal-notes"
              aria-label="Notes personnelles"
              value={notes}
              onChange={handleNotesChange}
              placeholder="Prends tes notes ici pendant l'appel (objectifs, points importants, informations clés...)..."
              className="w-full min-h-[150px] p-4 rounded-lg border-2 border-amber-200 bg-white placeholder-amber-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none resize-y transition-colors"
              style={{ fontSize: '16px', lineHeight: '1.5' }}
            />
            <label htmlFor="personal-notes" className="sr-only">Notes personnelles</label>
            <button
              onClick={() => setNotes('')}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Réinitialiser les notes
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-purple-100 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            disabled={currentStep === '1'}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors
              ${
                currentStep === '1' 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'text-purple-600 hover:bg-purple-50'
              }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Précédent
          </button>

          <span className="text-gray-600 flex items-center gap-2">
            <span>Étape {currentStep} sur {totalSteps}</span>
            {history.length > 0 && (
              <span className="text-sm text-gray-500">
                ({history.length} actions)
              </span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ScriptContent;
