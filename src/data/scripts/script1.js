// INSTRUCTIONS POUR L'IA : BLOC 1 - Introduction et Connexion Émotionnelle
/**
 * ## OBJECTIF DU BLOC
 * Le BLOC 1 est crucial car il établit la première connexion émotionnelle et pose les bases de la confiance. L'IA doit créer une atmosphère accueillante tout en préparant subtilement le terrain pour la vente.
 * 
 * ## PRÉPARATION ET ANALYSE
 * 
 * ### 1. Analyse du Contexte Initial
 * Avant de commencer, identifier :
 * 
 * - L'horaire de l'appel (matin/après-midi/soir)
 * - Le type de contact précédent (WhatsApp, email, etc.)
 * - Les premières interactions déjà effectuées
 * - Le niveau d'urgence exprimé dans les échanges précédents
 * 
 * ### 2. Scan du Compte-Rendu
 * Repérer rapidement :
 * 
 * - Le ton général des réponses du client
 * - Les mots émotionnels utilisés
 * - Les points de douleur exprimés
 * - Les espoirs et attentes mentionnés
 * - La situation familiale/professionnelle
 */

export const BLOC1 = {
  id: "BLOC1",
  title: "Introduction et Connexion Émotionnelle",
  sections: [
    {
      id: "1",
      title: "Accueil Chaleureux et Personnalisé",
      text: "Chaima : \"As-salamu alaykum [PRÉNOM], c'est [Votre Prénom] à l'appareil. J'espère que tu vas bien. Je suis ravie de t'avoir au téléphone aujourd'hui. Comment vas-tu depuis notre dernier échange ?\"",
      notes: [
        "Adapter le ton de voix selon la thématique",
        "Prononcer clairement le prénom",
        "Laisser un moment de silence après la question",
        "Noter l'énergie dans la voix du client",
        "Rester authentique et bienveillante"
      ],
      // Suppression de la première définition des options
      options: [
        {
          id: "1A",
          label: "Réponse Positive",
          response: "Chaima : \"Je suis contente de t'entendre si [enthousiaste/sereine/positive]. [PAUSE] Dis-moi, au-delà de cette bonne énergie, qu'est-ce qui t'a donné envie de prendre ce rendez-vous aujourd'hui ?\"",
          next: "2",
          type: "positive",
          notes: [
            "Valider l'énergie positive",
            "Creuser délicatement la vraie motivation",
            "Créer un contraste subtil"
          ]
        },
        {
          id: "1B",
          label: "Réponse Hésitante",
          response: "Chaima : \"Je ressens une hésitation dans ta voix... [PAUSE] C'est tout à fait normal, prendre la décision de travailler sur [thématique] demande du courage. Qu'est-ce qui t'a poussée à franchir ce pas aujourd'hui ?\"",
          next: "2",
          type: "neutral",
          notes: [
            "Valider l'hésitation",
            "Normaliser l'émotion",
            "Valoriser la démarche"
          ]
        },
        {
          id: "1C",
          label: "Réponse Négative",
          response: "Chaima : \"Je comprends que ce ne soit pas une période facile pour toi... [PAUSE] Tu sais, c'est souvent dans ces moments-là qu'on trouve la force d'agir et de faire les changements nécessaires. [PAUSE] Veux-tu me parler un peu plus de ce qui te préoccupe ?\"",
          next: "2",
          type: "negative",
          notes: [
            "Montrer de l'empathie",
            "Reframer positivement",
            "Ouvrir l'espace d'expression"
          ]
        },
        {
          id: "1D",
          label: "Réponse Émotionnelle",
          response: "Chaima : \"Je perçois beaucoup d'émotion dans ta voix... [PAUSE] Prends ton temps, je suis là pour t'écouter et vraiment comprendre ce que tu traverses. [PAUSE] Depuis combien de temps te sens-tu comme ça ?\"",
          next: "2",
          type: "emotional",
          notes: [
            "Accueillir l'émotion",
            "Créer un espace sécurisant",
            "Quantifier la situation"
          ]
        }
      ]
    },

    {
      id: "2",
      title: "Création du Cadre de Confort",
      text: "Chaima : \"[PRÉNOM], avant d'aller plus loin, j'aimerais m'assurer que tu es dans un environnement où tu peux parler librement et tranquillement. Est-ce le cas ?\"",
      notes: [
        "Assurer un environnement propice",
        "Préparer le terrain pour une discussion profonde",
        "Montrer l'importance de la conversation"
      ],
      options: [
        {
          id: "2A",
          label: "Bien Installée",
          response: "Chaima : \"Parfait [PRÉNOM], je suis contente que tu aies pris le temps de t'installer dans un endroit calme. C'est important pour moi que tu te sentes complètement libre de t'exprimer, surtout quand on va parler de [thématique].\"",
          next: "3",
          type: "positive",
          notes: [
            "Valoriser la préparation",
            "Renforcer le cadre de sécurité",
            "Préparer la transition"
          ]
        },
        {
          id: "2B",
          label: "Environnement Moyen",
          response: "Chaima : \"D'accord. Est-ce que tu te sens suffisamment à l'aise pour parler de [thématique] dans ces conditions ? N'oublie pas que nous allons aborder des sujets assez personnels.\"",
          next: "3",
          type: "neutral",
          notes: [
            "Vérifier le niveau de confort",
            "Rappeler l'importance de l'intimité",
            "Laisser le choix"
          ]
        },
        {
          id: "2C",
          label: "Environnement Pas Idéal",
          response: "Chaima : \"Je comprends. Tu sais, cet appel est vraiment important pour ton avenir et ton développement personnel. Je préférerais qu'on le reprogramme à un moment où tu pourras être dans un environnement plus propice à une discussion profonde. Je suis disponible [proposer deux créneaux]. Qu'est-ce qui t'arrangerait le mieux ?\"",
          next: "fin",
          type: "negative",
          notes: [
            "Montrer l'importance de l'appel",
            "Proposer une alternative concrète",
            "Rester en contrôle"
          ]
        },
        {
          id: "2D",
          label: "Peu de Temps Disponible",
          response: "Chaima : \"Je comprends que tu sois prise par le temps. Cet appel est essentiel pour t'apporter le soutien dont tu as besoin. Préférerais-tu qu'on fixe un autre moment où tu seras plus disponible ? Notre échange nécessite environ 45 minutes à 1 heure pour être vraiment bénéfique.\"",
          next: "fin",
          type: "neutral",
          notes: [
            "Valider la contrainte temps",
            "Souligner l'importance du cadre",
            "Proposer un report"
          ]
        }
      ]
    },

    {
      id: "3",
      title: "Établir l'Importance de l'Appel et Évaluer la Motivation",
      text: "Chaima : \"[PRÉNOM], cet appel est spécialement réservé aux personnes qui sont vraiment prêtes à transformer leur vie en ce qui concerne [thématique]. Pour bien commencer, j'aimerais comprendre quelles sont tes attentes pour notre échange aujourd'hui.\"",
      notes: [
        "Créer de la valeur",
        "Établir le cadre sélectif",
        "Évaluer la motivation"
      ],
      options: [
        {
          id: "3A",
          label: "Attente Précise",
          response: "Chaima : \"Je vois que tu as déjà une idée claire de ce que tu veux accomplir. C'est excellent ! Parlons un peu plus en détail de [objectif mentionné]. Qu'est-ce qui fait que c'est particulièrement important pour toi maintenant ?\"",
          next: "4",
          type: "positive",
          notes: [
            "Valoriser la clarté",
            "Approfondir la motivation",
            "Créer l'urgence"
          ]
        },
        {
          id: "3B",
          label: "Attente Vague",
          response: "Chaima : \"C'est normal d'avoir encore des questionnements. Mais dis-moi, quand tu penses à [thématique], qu'est-ce qui te préoccupe le plus actuellement ? Quel changement te semblerait déjà significatif ?\"",
          next: "4",
          type: "neutral",
          notes: [
            "Normaliser l'incertitude",
            "Guider vers la précision",
            "Identifier les priorités"
          ]
        },
        {
          id: "3C",
          label: "Attente Émotionnelle",
          response: "Chaima : \"Je comprends cette frustration que tu exprimes. Ce n'est pas une position facile. [PAUSE] Depuis combien de temps ressens-tu cela ? Comment cela impacte-t-il ton quotidien ?\"",
          next: "4",
          type: "emotional",
          notes: [
            "Valider l'émotion",
            "Quantifier la souffrance",
            "Mesurer l'impact"
          ]
        },
        {
          id: "3D",
          label: "Hésitante sur les Attentes",
          response: "Chaima : \"Pas de souci, nous sommes là pour clarifier tout cela ensemble. [PAUSE] Qu'est-ce qui t'a motivée à prendre ce rendez-vous initialement ? Quel a été l'élément déclencheur ?\"",
          next: "4",
          type: "neutral",
          notes: [
            "Rassurer",
            "Chercher le déclencheur",
            "Construire la motivation"
          ]
        }
      ]
    },

    {
      id: "4",
      title: "Créer un Espace de Confiance et d'Ouverture",
      text: "Chaima : \"Je tiens vraiment à te dire, [PRÉNOM], que cet appel est un espace totalement bienveillant et confidentiel. Mon rôle est de comprendre ta situation en profondeur et de voir comment notre programme peut vraiment t'aider à atteindre tes objectifs. Durant notre échange, tu seras entendue et comprise. N'hésite jamais à m'interrompre si tu as des questions.\"",
      notes: [
        "Établir la sécurité émotionnelle",
        "Poser le cadre professionnel",
        "Ouvrir le dialogue"
      ],
      options: [
        {
          id: "4A",
          label: "Client Réceptif",
          response: "Chaima : \"D'ailleurs, ton histoire me fait penser à [prénom], une de nos participantes qui était exactement dans ta situation il y a quelques mois. Je te raconterai son parcours plus tard, car c'est vraiment inspirant de voir comment elle a réussi à [résultat].\"",
          next: "5",
          type: "positive",
          notes: [
            "Utiliser le social proof",
            "Créer de l'espoir",
            "Renforcer la connexion"
          ]
        },
        {
          id: "4B",
          label: "Client Hésitant",
          response: "Chaima : \"Je suis là pour t'accompagner à chaque étape. N'hésite pas à partager ce que tu ressens, chaque détail compte pour que je puisse t'aider au mieux.\"",
          next: "5",
          type: "neutral",
          notes: [
            "Rassurer",
            "Encourager l'expression",
            "Montrer la disponibilité"
          ]
        },
        {
          id: "4C",
          label: "Client Méfiant",
          response: "Chaima : \"Je comprends que ce ne soit pas évident de se livrer. Sache que tout ce que tu partages restera entre nous, et mon objectif est vraiment de t'aider au mieux. C'est un espace protégé où tu peux te sentir en sécurité.\"",
          next: "5",
          type: "neutral",
          notes: [
            "Valider la méfiance",
            "Renforcer la confidentialité",
            "Créer la sécurité"
          ]
        }
      ]
    },
    {
      id: "5",
      title: "Exploration Subtile de la Situation et Capacité Financière",
      text: "Chaima : \"[PRÉNOM], avant d'aller plus loin, j'aimerais mieux comprendre ta situation. Par rapport à [thématique], quels sont selon toi les principaux obstacles qui t'empêchent d'atteindre tes objectifs ? [PAUSE] Sur une échelle de 1 à 10, à quel point dirais-tu que cette situation impacte ta vie quotidienne ?\"",
      notes: [
        "Écouter activement",
        "Identifier les obstacles clés",
        "Explorer subtilement la capacité financière",
        "Créer un lien entre impact et motivation"
      ],
      options: [
        {
          id: "5A",
          label: "Score Élevé (8-10)",
          response: "Chaima : \"Je comprends l'ampleur de l'impact sur ta vie... [PAUSE] C'est courageux de ta part de vouloir agir maintenant. Qu'est-ce qui te fait dire [score donné] plutôt que 7 par exemple ? [PAUSE] Et concrètement, comment cela affecte-t-il ton quotidien ?\"",
          next: "6",
          type: "high-impact",
          notes: [
            "Valider l'urgence",
            "Creuser l'impact émotionnel",
            "Préparer l'ancrage prix"
          ]
        },
        {
          id: "5B",
          label: "Score Moyen (5-7)",
          response: "Chaima : \"D'accord, je vois. Et qu'est-ce qui fait que tu places ton niveau à [score] ? [PAUSE] Qu'est-ce qui t'empêche d'être plus bas dans ton évaluation ? [PAUSE] Il y a souvent des impacts qu'on ne réalise pas immédiatement...\"",
          next: "6",
          type: "medium-impact",
          notes: [
            "Amplifier la prise de conscience",
            "Explorer les impacts cachés",
            "Créer un sentiment d'urgence subtil"
          ]
        },
        {
          id: "5C",
          label: "Score Bas (1-4)",
          response: "Chaima : \"Je vois. [PAUSE] Pourtant, tu as fait la démarche de prendre rendez-vous. Qu'est-ce qui t'a poussée à vouloir agir maintenant, même si l'impact te semble modéré ? [PAUSE] Souvent, derrière un faible score, il y a une motivation plus profonde...\"",
          next: "6",
          type: "low-impact",
          notes: [
            "Créer un contraste",
            "Chercher la vraie motivation",
            "Approfondir les non-dits"
          ]
        },
        {
          id: "5D",
          label: "Ne souhaite pas donner de score",
          response: "Chaima : \"Je comprends que ce soit difficile à évaluer. [PAUSE] Peut-être pourrions-nous aborder cela différemment... Parle-moi simplement de comment cette situation affecte ton quotidien, tes relations, ton bien-être...\"",
          next: "6",
          type: "neutral",
          notes: [
            "Respecter la réticence",
            "Rediriger vers du concret",
            "Maintenir l'exploration émotionnelle"
          ]
        },
        {
          id: "5E",
          label: "Exploration de la Disponibilité",
          response: "Chaima : \"Je vois... Et dans ton quotidien, comment t'organises-tu ? [PAUSE] Est-ce que tu travailles actuellement ? [PAUSE] Je pose ces questions car beaucoup de nos participants arrivent à intégrer le programme même avec un emploi du temps chargé - il suffit de 2-3 heures par semaine, réparties selon tes disponibilités.\"",
          next: "6",
          type: "neutral",
          notes: [
            "Explorer la situation professionnelle",
            "Préparer la discussion budget",
            "Minimiser les objections temps"
          ]
        }
      ]
    },
    {
      id: "6",
      title: "Présentation du Déroulement de l'Appel",
      text: "Chaima : \"Merci infiniment pour tout ce que tu viens de partager avec moi, [PRÉNOM]. Ça me permet de vraiment comprendre ta situation et tes objectifs. [PAUSE] Maintenant, je vais t'expliquer comment nous allons poursuivre notre échange :\n\n1. Nous allons examiner ensemble le compte-rendu que tu as reçu. C'est important car il contient une analyse approfondie de ta situation et nous permettra d'identifier précisément comment le programme peut répondre à tes besoins.\n2. Ensuite, je te proposerai de regarder une courte vidéo qui explique la méthodologie unique et comment elle peut spécifiquement t'aider avec [problématique principale].\n3. Enfin, si je constate que ton profil correspond bien au programme et que ta motivation est au rendez-vous, nous discuterons des différentes options d'accompagnement qui pourraient te convenir.\n\nComment te sens-tu par rapport à ce programme ? As-tu des questions avant que nous continuions ?\"",
      notes: [
        "Structurer la suite de l'entretien",
        "Créer de l'anticipation",
        "Maintenir l'engagement",
        "Préparer la transition vers le bloc suivant"
      ],
      options: [
        {
          id: "6A",
          label: "Client D'accord",
          response: "Chaima : \"Parfait [PRÉNOM] ! Je sens que tu es vraiment prête à avancer. [PAUSE] Alors commençons par analyser ensemble le compte-rendu. [PAUSE] Il y a plusieurs points qui m'ont particulièrement interpellée...\"",
          next: "7",
          type: "positive",
          notes: [
            "Valider l'engagement",
            "Créer de l'anticipation",
            "Transition fluide vers la suite"
          ]
        },
        {
          id: "6B",
          label: "Client Questionne le Temps",
          response: "Chaima : \"Notre échange va durer environ 45 minutes au total. [PAUSE] Je sais que ça peut sembler long, mais c'est un moment important pour ton avenir, un investissement de temps qui peut vraiment faire la différence dans ta démarche de [thématique]. [PAUSE] Et crois-moi, ces 45 minutes peuvent changer beaucoup de choses... Tu es disponible pour qu'on continue ?\"",
          next: "7",
          type: "neutral",
          notes: [
            "Gérer l'objection temps",
            "Créer de la valeur",
            "Obtenir l'engagement"
          ]
        },
        {
          id: "6C",
          label: "Client a des Questions",
          response: "Chaima : \"Bien sûr, je suis là pour répondre à toutes tes questions. [PAUSE] C'est important pour moi que tu te sentes parfaitement à l'aise avec le déroulement. [PAUSE] Qu'est-ce que tu aimerais savoir plus précisément ?\"",
          next: "7",
          type: "neutral",
          notes: [
            "Montrer de la disponibilité",
            "Renforcer la confiance",
            "Éclaircir les doutes"
          ]
        },
        {
          id: "6D",
          label: "Client Pressé",
          response: "Chaima : \"Je comprends que tu aies un emploi du temps chargé. [PAUSE] Si tu veux, on peut aller à l'essentiel, mais je veux vraiment m'assurer que tu aies toutes les informations nécessaires pour prendre la meilleure décision pour toi. [PAUSE] Souvent, c'est dans les détails que se cache la vraie valeur... Tu préfères qu'on continue maintenant ou qu'on trouve un autre moment où tu seras plus disponible ?\"",
          next: "7",
          type: "neutral",
          notes: [
            "Valider la contrainte temps",
            "Maintenir la valeur",
            "Offrir une alternative"
          ]
        },
        {
          id: "6E",
          label: "Client Montre des Doutes",
          response: "Chaima : \"Je sens une certaine hésitation dans ta voix... [PAUSE] C'est tout à fait normal à ce stade. [PAUSE] Dis-moi ce qui te préoccupe exactement ? Comme ça, je pourrai adapter notre échange pour répondre spécifiquement à tes interrogations.\"",
          next: "7",
          type: "neutral",
          notes: [
            "Identifier la source des doutes",
            "Normaliser l'hésitation",
            "Personnaliser l'approche"
          ]
        },
        {
          id: "6F",
          label: "Client Très Enthousiaste",
          response: "Chaima : \"J'apprécie vraiment ton enthousiasme ! [PAUSE] C'est exactement le genre d'énergie qui permet d'obtenir des résultats exceptionnels. [PAUSE] Je sens que tu es prête à passer à l'action, alors allons-y ! Commençons par analyser ensemble les points clés de ta situation...\"",
          next: "7",
          type: "positive",
          notes: [
            "Amplifier l'enthousiasme",
            "Créer de l'élan",
            "Capitaliser sur l'énergie positive"
          ]
        }
      ]
    },
    {
      id: "7",
      title: "Continuation de l'Appel",
      text: "Chaima : \"[Votre script pour la suite de l'appel...]\"",
      notes: [
        "Instructions pour la suite"
      ],
      options: [
        // Ajoutez ici les options pour la section 7 si nécessaire
      ]
    }
  ]
};

const TRANSITIONS_BETWEEN_BLOCKS = {
  "BLOC1_TO_BLOC2": {
    id: "transition_1_2",
    title: "Transition Bloc 1 vers Bloc 2",
    text: "Chaima : \"[PRÉNOM], maintenant que nous avons posé les bases de notre échange et que je comprends mieux ta situation, j'aimerais approfondir certains points qui m'ont particulièrement interpellée dans ton compte-rendu. [PAUSE] Ce sont des éléments qui, selon moi, sont vraiment cruciaux pour ta transformation.\"",
    options: [
      {
        id: "trans_1_2_A",
        label: "Client Réceptif",
        response: "Chaima : \"Je vois que tu es prête à aller plus loin. [PAUSE] C'est exactement cette ouverture qui va nous permettre d'identifier les vraies solutions pour toi.\"",
        notes: [
          "Valider l'engagement",
          "Créer un pont émotionnel",
          "Préparer l'exploration approfondie"
        ]
      },
      {
        id: "trans_1_2_B",
        label: "Client Hésitant",
        response: "Chaima : \"Je sens une certaine hésitation, et c'est parfaitement normal. [PAUSE] C'est souvent dans ces moments de questionnement que les plus belles transformations commencent.\"",
        notes: [
          "Normaliser l'hésitation",
          "Créer un espace sécurisant",
          "Maintenir la progression"
        ]
      }
    ]
  }
};

// INSTRUCTIONS POUR L'IA : BLOC 2 - Exploration des Défis et Présentation des Solutions

/**
 * ## OBJECTIF DU BLOC
 * Ce bloc est crucial pour créer une connexion profonde entre le compte-rendu personnalisé et les solutions proposées. L'IA doit utiliser les informations spécifiques du compte-rendu pour personnaliser chaque aspect du script.
 * 
 * ## UTILISATION DU COMPTE-RENDU
 * 
 * ### 1. Analyse Préalable
 * - Identifier les points clés du compte-rendu
 * - Repérer les expressions émotionnelles utilisées par le client
 * - Noter les situations spécifiques mentionnées
 * - Relever les objectifs et aspirations exprimés
 * - Identifier les obstacles et freins mentionnés
 * - Repérer les indices sur la situation personnelle/professionnelle
 * 
 * ### 2. Personnalisation des Réponses
 * Pour chaque section, l'IA doit :
 * - Utiliser les mots exacts du compte-rendu
 * - Reprendre les expressions émotionnelles du client
 * - Faire référence aux situations concrètes mentionnées
 * - Adapter les exemples au contexte spécifique
 * 
 * ### 3. Adaptation des Modules
 * Pour chaque module présenté :
 * - Lier directement aux défis mentionnés dans le compte-rendu
 * - Utiliser des exemples qui résonnent avec la situation du client
 * - Adapter les bénéfices aux objectifs exprimés
 * - Personnaliser les histoires de réussite
 * 
 * ## POINTS D'ATTENTION PARTICULIERS
 * 
 * ### Gestion des Émotions
 * L'IA doit :
 * - Identifier le niveau émotionnel dans le compte-rendu
 * - Adapter le ton et le rythme en conséquence
 * - Prévoir des réponses pour différents états émotionnels
 * - Maintenir un équilibre entre empathie et progression
 * 
 * ### Création de Ponts
 * Pour chaque transition :
 * - Lier le point précédent au suivant
 * - Utiliser les informations du compte-rendu comme fil conducteur
 * - Créer des liens logiques entre les défis et les solutions
 * - Maintenir une progression émotionnelle constante
 * 
 * ### Personnalisation des Exemples
 * Pour les histoires de réussite :
 * - Adapter à la situation spécifique du client
 * - Utiliser des détails qui résonnent avec le compte-rendu
 * - Maintenir la crédibilité et la pertinence
 * - Créer des parallèles évidents mais subtils
 * 
 * ## FORMAT DES RÉPONSES
 * 
 * ### Structure Générale
 * Pour chaque section :
 * ```javascript
 * {
 *   id: "section_id",
 *   title: "Titre de la Section",
 *   text: "Texte de base à personnaliser avec les éléments du compte-rendu",
 *   notes: [
 *     "Instructions spécifiques pour la personnalisation",
 *     "Points d'attention particuliers",
 *     "Éléments à adapter"
 *   ],
 *   options: [
 *     {
 *       id: "option_id",
 *       label: "Type de réponse",
 *       response: "Réponse à personnaliser",
 *       next: "Section suivante",
 *       type: "Type de réaction",
 *       notes: [
 *         "Instructions pour l'adaptation",
 *         "Éléments à intégrer du compte-rendu"
 *       ]
 *     }
 *   ]
 * }
 * ```
 * 
 * ### Variables à Remplacer
 * - [PRÉNOM] : Prénom du client
 * - [thématique] : Thématique principale identifiée
 * - [situation spécifique] : Situation décrite dans le compte-rendu
 * - [objectif mentionné] : Objectif exprimé par le client
 * - [point de douleur] : Difficulté spécifique mentionnée
 * 
 * ## CONSEILS POUR L'UTILISATION
 * 1. Toujours commencer par une lecture approfondie du compte-rendu
 * 2. Identifier les points émotionnels clés
 * 3. Repérer les expressions et mots spécifiques du client
 * 4. Adapter le script en maintenant sa structure mais en personnalisant chaque élément
 * 5. Vérifier la cohérence des transitions
 * 6. S'assurer que chaque module répond à un besoin exprimé
 * 
 * ## EXEMPLE DE PERSONNALISATION
 * 
 * Original :
 * "Nous allons examiner ensemble les points importants de votre situation."
 * 
 * Personnalisé (avec compte-rendu) :
 * "J'ai noté dans votre compte-rendu votre préoccupation concernant [reprendre mot exact du client] et comment cela affecte [situation spécifique mentionnée]. Explorons ensemble ces aspects..."
 * 
 * [INSÉRER LE CODE DU BLOC 2 ICI]
 */

export const BLOC2 = {
  id: "BLOC2",
  title: "Exploration des Défis et Présentation des Solutions",
  sections: [
    {
      id: "7",
      title: "Introduction aux Défis Personnels",
      text: "Chaima : \"[PRÉNOM], j'aimerais qu'on parle du compte-rendu que tu as reçu. J'ai noté plusieurs points importants concernant ta situation :\n\n[REPRENDRE 3 POINTS CLÉS DU COMPTE-RENDU]\n\nEst-ce que ces points reflètent bien ta situation actuelle ?\"",
      notes: [
        "Utiliser les mots exacts du compte-rendu",
        "Créer des points d'ancrage émotionnels",
        "Préparer la transition vers les solutions",
        "Valider la compréhension mutuelle"
      ],
      options: [
        {
          id: "7A",
          label: "Client Confirme Fortement",
          response: "Chaima : \"Je suis contente que tu te sois sentie si bien comprise. [PAUSE] C'est important pour nous que tu te reconnaisses dans cette analyse. [PAUSE] Parmi ces points, lequel te touche le plus ? Celui qui a vraiment un impact au quotidien ?\"",
          next: "8",
          type: "positive",
          notes: [
            "Renforcer la connexion",
            "Approfondir le point le plus douloureux",
            "Préparer l'ancrage solution"
          ]
        },
        {
          id: "7B",
          label: "Client Hésite",
          response: "Chaima : \"Je sens une certaine hésitation... [PAUSE] Y a-t-il un point particulier qui a retenu ton attention ou qui t'a surprise ? [PAUSE] Comment t'es-tu sentie en parcourant ce compte-rendu ?\"",
          next: "8",
          type: "neutral",
          notes: [
            "Explorer les réticences",
            "Creuser les non-dits",
            "Réajuster la compréhension"
          ]
        },
        {
          id: "7C",
          label: "Client Émotionnel",
          response: "Chaima : \"Je comprends que la lecture ait pu te toucher profondément. [PAUSE] C'est normal, on a abordé des points très personnels qui touchent à l'essentiel. [PAUSE] Prends ton temps... Qu'est-ce qui t'a particulièrement émue dans cette analyse ?\"",
          next: "8",
          type: "emotional",
          notes: [
            "Accueillir l'émotion",
            "Créer un espace sûr",
            "Approfondir la résonance émotionnelle"
          ]
        },
        {
          id: "7D",
          label: "Client en Désaccord",
          response: "Chaima : \"Je suis vraiment désolée si certains points ne te semblent pas refléter exactement ta situation. [PAUSE] C'est très précieux comme retour. [PAUSE] Peux-tu m'en dire plus sur ce qui te paraît différent ? Comme ça, je pourrai mieux comprendre ta réalité.\"",
          next: "8",
          type: "neutral",
          notes: [
            "Accueillir le désaccord",
            "Montrer l'importance du feedback",
            "Réajuster la compréhension"
          ]
        },
        {
          id: "7E",
          label: "Client Ajoute des Éléments",
          response: "Chaima : \"C'est très intéressant ce que tu ajoutes... [PAUSE] Je vois que la situation est encore plus complexe que ce que j'avais perçu initialement. [PAUSE] Comment ces aspects supplémentaires impactent-ils ton quotidien ?\"",
          next: "8",
          type: "positive",
          notes: [
            "Valoriser les nouvelles informations",
            "Enrichir la compréhension",
            "Approfondir les impacts"
          ]
        }
      ]
    },
    {
      id: "8",
      title: "Identification des Défis Principaux",
      text: "Chaima : \"Parmi les différents points que nous venons d'aborder, j'aimerais vraiment comprendre ce qui te pèse le plus au quotidien. [PAUSE] Qu'est-ce qui, selon toi, nécessite une action urgente ? [PAUSE] Qu'est-ce qui t'empêche de dormir la nuit ?\"",
      notes: [
        "Hiérarchiser les défis",
        "Créer un sentiment d'urgence",
        "Préparer le terrain pour les solutions"
      ],
      options: [
        {
          id: "8A",
          label: "Client Identifie Clairement un Défi",
          response: "Chaima : \"Je comprends parfaitement pourquoi cet aspect est si crucial pour toi. [PAUSE] C'est souvent le point de bascule qui, une fois résolu, permet de débloquer beaucoup d'autres choses. [PAUSE] Comment imagines-tu ta vie une fois ce défi surmonté ?\"",
          next: "9",
          type: "positive",
          notes: [
            "Valider le choix",
            "Créer une projection positive",
            "Amplifier la motivation"
          ]
        },
        {
          id: "8B",
          label: "Client Hésite Entre Plusieurs Défis",
          response: "Chaima : \"Je comprends que plusieurs aspects te préoccupent... [PAUSE] C'est souvent le cas quand une situation perdure depuis un moment. [PAUSE] Si tu devais en choisir un, celui qui, une fois résolu, aurait le plus d'impact positif sur ta vie, lequel serait-ce ?\"",
          next: "9",
          type: "neutral",
          notes: [
            "Guider vers la priorisation",
            "Clarifier l'impact",
            "Focaliser l'attention"
          ]
        },
        {
          id: "8C",
          label: "Client Submergé par les Défis",
          response: "Chaima : \"Je sens que tu te sens un peu submergée par tous ces aspects... [PAUSE] C'est normal, et c'est justement pour ça qu'il est important d'avoir une approche structurée. [PAUSE] Si on commence par un aspect, lequel te semblerait le plus urgent à adresser ?\"",
          next: "9",
          type: "emotional",
          notes: [
            "Normaliser le sentiment d'être dépassé",
            "Introduire la structuration",
            "Guider vers l'action"
          ]
        }
      ]
    },
    {
      id: "9",
      title: "Teasing sur l'Accompagnement",
      text: "Chaima : \"[PRÉNOM], avant de te présenter les modules du programme en détail, il y a quelque chose de fondamental que je dois te dire : tu ne seras pas seule. [PAUSE] C'est vraiment le point le plus important.\n\nTu seras accompagnée par toute une équipe d'experts. Tu sais, le plus difficile dans toute transformation, c'est quand on est seul. C'est de garder sa motivation tout au long du processus.\n\nTu seras complètement soutenue grâce à ce qu'on appelle le Coach Care - je t'expliquerai ça plus en détail tout à l'heure, mais c'est vraiment quelque chose d'unique et de puissant.\"",
      notes: [
        "Créer de l'anticipation",
        "Rassurer sur l'accompagnement",
        "Introduire la valeur unique",
        "Préparer la présentation des modules"
      ],
      options: [
        {
          id: "9A",
          label: "Client Montre de l'Intérêt",
          response: "Chaima : \"Je vois que cet aspect t'intéresse... [PAUSE] Et tu as raison, c'est vraiment ce qui fait toute la différence. [PAUSE] Laisse-moi te montrer maintenant comment notre programme s'adapte parfaitement à ta situation.\"",
          next: "10",
          type: "positive",
          notes: [
            "Valider l'intérêt",
            "Renforcer la curiosité",
            "Transition vers les modules"
          ]
        },
        {
          id: "9B",
          label: "Client Exprime des Doutes",
          response: "Chaima : \"Je comprends tes doutes. [PAUSE] C'est justement parce que chaque situation est unique que nous avons développé cette approche personnalisée. [PAUSE] Laisse-moi te montrer concrètement comment ça fonctionne...\"",
          next: "10",
          type: "neutral",
          notes: [
            "Accueillir les doutes",
            "Rebondir sur la personnalisation",
            "Orienter vers le concret"
          ]
        },
        {
          id: "9C",
          label: "Client Pose des Questions",
          response: "Chaima : \"Excellente question ! [PAUSE] C'est exactement ce que je vais pouvoir t'expliquer en détail en te présentant notre programme. [PAUSE] Tu vas voir, chaque aspect a été pensé pour répondre précisément à ce type de préoccupation.\"",
          next: "10",
          type: "neutral",
          notes: [
            "Valoriser la curiosité",
            "Promettre des réponses", 
            "Créer de l'attente"
          ]
        }
      ]
    }
  ]
};

const BLOC10 = {
  id: "10",
  title: "Présentation des Modules du Programme",
  text: "Chaima : \"Je comprends mieux ta situation, [PRÉNOM]. Laisse-moi te présenter comment notre programme va concrètement t'aider à surmonter ces défis.\"",
  notes: [
    "Personnaliser chaque module",
    "Créer des liens avec la situation",
    "Alterner bénéfices et preuves",
    "Maintenir l'engagement"
  ],
  modulePresentation: {
    introduction: {
      text: "Avant de te détailler chaque module, il faut que tu saches que ce programme a été conçu comme un véritable parcours de transformation. Chaque étape s'appuie sur la précédente pour créer des changements durables."
    },
    modules: [
      {
        id: "M1",
        title: "Module 1 : Introduction et Préparation",
        description: "Ce premier module pose les bases de ta transformation personnelle à travers une auto-évaluation approfondie et la découverte des outils qui t'accompagneront.",
        benefices: [
          "Clarté sur ta situation actuelle",
          "Compréhension des leviers de changement",
          "Préparation mentale et émotionnelle"
        ],
        exemple: "Par exemple, [PRÉNOM], l'une de nos participantes a eu un déclic dès ce premier module en réalisant [exemple spécifique]..."
      },
      {
        id: "M2",
        title: "Module 2 : Exploration et Compréhension",
        description: "Ce module t'accompagne dans une exploration profonde de qui tu es, de tes besoins fondamentaux et de tes schémas.",
        benefices: [
          "Identification des patterns limitants",
          "Compréhension des besoins profonds",
          "Découverte des ressources intérieures"
        ],
        exemple: "C'est souvent dans ce module que nos participantes ont leurs premières grandes prises de conscience..."
      },
      {
        id: "M3",
        title: "Module 3 : Application Pratique",
        description: "Dans ce module, tu découvriras les clés pratiques et apprendras à créer des changements concrets.",
        benefices: [
          "Outils pratiques immédiatement applicables",
          "Résultats visibles rapidement",
          "Renforcement de la confiance"
        ],
        exemple: "La semaine dernière encore, une participante me disait..."
      }
    ]
  },
  transitions: {
    entreModules: "Ce qui est fascinant avec ce module, c'est comment il prépare parfaitement le terrain pour la suite...",
    versConclusion: "Tu vois comment chaque module s'emboîte parfaitement pour créer une transformation complète ?"
  },
  options: [
    {
      id: "10A",
      label: "Client Très Intéressé",
      response: "Chaima : \"Je vois que ces modules résonnent vraiment avec tes besoins. [PAUSE] Quel aspect te parle le plus ? [PAUSE] C'est souvent révélateur de ce qui est prioritaire pour toi en ce moment.\"",
      next: "11",
      type: "positive",
      notes: [
        "Approfondir la résonance",
        "Identifier les priorités",
        "Renforcer l'intérêt"
      ]
    },
    {
      id: "10B",
      label: "Client Pose des Questions Spécifiques",
      response: "Chaima : \"C'est une excellente question... [PAUSE] Elle montre que tu as bien saisi l'importance de [point soulevé]. [PAUSE] Laisse-moi t'expliquer plus en détail comment nous abordons cet aspect...\"",
      next: "11",
      type: "neutral",
      notes: [
        "Valoriser la pertinence",
        "Approfondir les points d'intérêt",
        "Renforcer la crédibilité"
      ]
    },
    {
      id: "10C",
label: "Client Semble Dépassé",
response: "Chaima : \"Je comprends que ça puisse paraître beaucoup d'un coup. [PAUSE] C'est normal, c'est un programme complet. [PAUSE] Le plus important à retenir, c'est que tu seras accompagnée à chaque étape. Sur quel aspect aimerais-tu que je revienne plus en détail ?\"",
next: "11",
type: "neutral",
notes: [
  "Rassurer",
  "Simplifier",
  "Recentrer sur les priorités"
]
}
]
}; // Fin du tableau options

// Déclarations des blocs en dehors du tableau
const BLOC11 = {
  id: "11",
  title: "Conclusion et Transition vers la Vidéo",
  text: "Chaima : \"En combinant ces différents modules, [PRÉNOM], le programme est conçu pour t'offrir une transformation complète et adaptée à tes besoins spécifiques. [PAUSE] Il a déjà aidé de nombreuses personnes à transformer leur vie.\"",
  notes: [
    "Synthétiser les bénéfices",
    "Renforcer la crédibilité",
    "Préparer la transition",
    "Créer l'anticipation"
  ],
  options: [
    {
      id: "11A",
      label: "Questions d'Engagement",
      questions: [
        {
          question: "Qu'est-ce qui te plaît le plus dans ce que je viens de te présenter ?",
          objectif: "Identifier les points d'accroche",
          suivi: {
            siRéponsePositive: "C'est exactement ce que beaucoup de nos participantes apprécient aussi...",
            siRéponseHésitante: "Je comprends, c'est un aspect important. D'ailleurs..."
          }
        },
        {
          question: "Comment te sens-tu en imaginant les changements que ce programme pourrait apporter dans ta vie ?",
          objectif: "Créer une projection positive",
          suivi: {
            siRéponsePositive: "C'est passionnant de t'entendre projeter ces changements...",
            siRéponseHésitante: "C'est normal d'avoir à la fois de l'espoir et des questions..."
          }
        },
        {
          question: "As-tu des questions sur certains points ?",
          objectif: "Clarifier les derniers doutes",
          suivi: {
            siOui: "Excellente question, je suis contente que tu la poses...",
            siNon: "Parfait, je vois que les choses sont claires pour toi..."
          }
        }
      ],
      next: "12",
      type: "engagement"
    },
    {
      id: "11B",
      label: "Transition vers la Vidéo",
      response: "Chaima : \"Ce que je viens de te présenter, c'est la structure et comment le programme est construit. [PAUSE] Mais pour vraiment comprendre pourquoi cette méthodologie est différente et parfaitement adaptée à ta situation, j'aimerais te montrer quelque chose de spécial. [PAUSE] C'est une présentation qui va te permettre de voir exactement comment tout cela s'applique à ta situation.\"",
      next: "12",
      type: "transition",
      notes: [
        "Créer du suspense",
        "Valoriser la suite",
        "Maintenir l'attention"
      ]
    },
    {
      id: "11C",
      label: "Client Très Enthousiaste",
      response: "Chaima : \"Je sens beaucoup d'enthousiasme dans ta voix, et c'est super ! [PAUSE] Avant d'aller plus loin, j'ai quelque chose de vraiment spécial à te montrer qui va encore plus te convaincre que tu as fait le bon choix en prenant cet appel aujourd'hui.\"",
      next: "12",
      type: "positive",
      notes: [
        "Valider l'enthousiasme",
        "Amplifier l'anticipation",
        "Préparer la suite"
      ]
    },
    {
      id: "11D",
      label: "Client Pose Beaucoup de Questions",
      response: "Chaima : \"Tes questions sont très pertinentes, et elles montrent que tu as bien saisi les enjeux. [PAUSE] D'ailleurs, ce que je vais te montrer maintenant va répondre à beaucoup de tes interrogations, et même à certaines que tu ne t'es peut-être pas encore posées.\"",
      next: "12",
      type: "neutral",
      notes: [
        "Valoriser la curiosité",
        "Promettre des réponses",
        "Créer de l'attente"
      ]
    },
    {
      id: "11E",
      label: "Client Montre des Doutes",
      response: "Chaima : \"Je comprends tes questionnements, c'est tout à fait normal à ce stade. [PAUSE] C'est exactement pour cela que je veux te montrer quelque chose de spécial maintenant. [PAUSE] Ça va te permettre de voir très concrètement comment tout ce dont on vient de parler s'applique dans la réalité.\"",
      next: "12",
      type: "neutral",
      notes: [
        "Normaliser les doutes",
        "Promettre des clarifications",
        "Orienter vers du concret"
      ]
    },
    {
      id: "11F",
      label: "Gestion des Objections Précoces",
      response: "Chaima : \"Je vois ce qui te préoccupe, et c'est une réaction que je comprends parfaitement. [PAUSE] Avant d'aborder cet aspect plus en détail, j'aimerais te montrer quelque chose qui va mettre tout cela en perspective. [PAUSE] Ça te permettra d'avoir tous les éléments pour prendre la meilleure décision pour toi.\"",
      next: "12",
      type: "neutral",
      notes: [
        "Reporter l'objection",
        "Créer de l'attente",
        "Promesse de réponse"
      ]
    }
  ]
};

const BLOC12 = {
  id: "12",
  title: "Vérification Finale avant Transition",
  text: "Chaima : \"Avant de passer à la suite, j'aimerais m'assurer que tu te sens bien avec tout ce dont on vient de parler. [PAUSE] Qu'est-ce qui te paraît le plus important dans tout ce que je t'ai présenté ?\"",
  notes: [
    "Valider la compréhension",
    "Renforcer les points clés",
    "Assurer une transition fluide",
    "Maintenir l'engagement"
  ],
  options: [
    {
      id: "12A",
      label: "Client Fait une Bonne Synthèse",
      response: "Chaima : \"Exactement ! Tu as parfaitement saisi les points essentiels. [PAUSE] C'est exactement sur ces aspects que la présentation que je vais te montrer va approfondir les choses. [PAUSE] Tu es prête ?\"",
      next: "BLOC3",
      type: "positive",
      notes: [
        "Valider la compréhension",
        "Créer un pont vers la suite",
        "Maintenir l'enthousiasme"
      ]
    },
    {
      id: "12B",
      label: "Client Incertain",
      response: "Chaima : \"Je vois que certains points méritent encore d'être éclaircis. [PAUSE] C'est parfait, car ce que je vais te montrer maintenant va justement rendre tout cela beaucoup plus concret. [PAUSE] Tu permets ?\"",
      next: "BLOC3",
      type: "neutral",
      notes: [
        "Rassurer",
        "Promettre des clarifications",
        "Maintenir l'engagement"
      ]
    },
    {
      id: "12C",
      label: "Client Veut Accélérer",
      response: "Chaima : \"Je sens que tu as hâte d'aller plus loin, et c'est super ! [PAUSE] Ce que je vais te montrer maintenant va vraiment te permettre de voir toute la puissance de ce programme. [PAUSE] On y va ?\"",
      next: "BLOC3",
      type: "positive",
      notes: [
        "Valider l'enthousiasme",
        "Canaliser l'énergie",
        "Diriger vers la suite"
      ]
    }
  ]
};

const BLOC2_TO_BLOC3 = {
  id: "transition_2_3",
  title: "Transition Bloc 2 vers Bloc 3",
  text: "Chaima : \"[PRÉNOM], ce que tu viens de partager résonne particulièrement avec notre approche. [PAUSE] D'ailleurs, avant d'aller plus loin, j'aimerais te montrer quelque chose qui va complètement changer ta perspective sur [problématique principale].\"",
  options: [
    {
      id: "trans_2_3_A",
      label: "Client Curieux",
      response: "Chaima : \"Je vois cette lueur dans ta voix... [PAUSE] Ce que je vais te montrer va non seulement répondre à tes questions mais aussi t'ouvrir des possibilités que tu n'avais peut-être même pas imaginées.\"",
      notes: [
        "Amplifier la curiosité",
        "Créer de l'anticipation",
        "Préparer l'impact de la vidéo"
      ]
    }
  ]
};

// INSTRUCTIONS POUR L'IA : BLOC 3 - Visionnage de la Vidéo et Amplification

/**
 * ## OBJECTIF DU BLOC
 * Le BLOC 3 est critique car il utilise la vidéo comme élément de preuve sociale et de validation. L'IA doit créer une tension émotionnelle avant, pendant et après le visionnage pour maximiser l'impact.
 * 
 * ## PRÉPARATION DU VISIONNAGE
 * 
 * ### 1. Analyse du Moment Optimal
 * Vérifier :
 * - Le niveau d'engagement actuel
 * - L'état émotionnel du client
 * - Les points de résistance exprimés
 * - Les éléments du compte-rendu à renforcer
 * 
 * ### 2. Création d'Anticipation
 * Éléments à intégrer :
 * - Points spécifiques du compte-rendu
 * - Objections déjà exprimées
 * - Besoins particuliers identifiés
 * - Zones de doute à adresser
 * 
 * ### 3. Points de Focus
 * Direction d'attention sur :
 * - Aspects qui résonnent avec la situation
 * - Solutions aux problèmes exprimés
 * - Preuves sociales pertinentes
 * - Éléments de transformation
 * 
 * ## STRUCTURE DÉTAILLÉE
 * 
 * ### Phase 1 : Préparation au Visionnage
 * - Créer l'attente
 * - Diriger l'attention
 * - Établir les points clés à observer
 * - Préparer l'impact émotionnel
 * 
 * ### Phase 2 : Gestion du Visionnage
 * - Maintenir l'engagement
 * - Gérer les aspects techniques
 * - Préparer les points d'ancrage
 * - Observer les réactions
 * 
 * ### Phase 3 : Exploitation Post-Visionnage
 * - Recueillir les impressions
 * - Approfondir les résonnances
 * - Renforcer les messages clés
 * - Préparer la transition vers la vente
 */

export const BLOC3 = {
  id: "BLOC3",
  title: "Visionnage de la Vidéo et Amplification",
  sections: [
    {
      id: "13",
      title: "Introduction à la Vidéo",
      text: "Chaima : \"[PRÉNOM], maintenant que nous avons vu comment le programme peut répondre à tes besoins concernant [CITER 2-3 DÉFIS MAJEURS DU COMPTE-RENDU], j'aimerais te partager une vidéo spéciale. [PAUSE] Cette vidéo va te permettre de comprendre en profondeur pourquoi notre approche est si efficace pour les situations comme la tienne. [PAUSE] Après l'avoir regardée, je pourrai te dire si tu remplis toutes les conditions pour rejoindre le programme.\"",
      notes: [
        "Créer de l'anticipation",
        "Lier aux points du compte-rendu",
        "Sous-entendre la sélectivité",
        "Préparer l'impact"
      ],
      options: [
        {
          id: "13A",
          label: "Client Immédiatement Réceptif",
          response: "Chaima : \"Super, je sens que tu es prête ! [PAUSE] Je suis sûre que tu vas trouver beaucoup de résonance avec ta situation, particulièrement quand il parlera de [point spécifique du compte-rendu].\"",
          next: "14",
          type: "positive",
          notes: [
            "Renforcer l'enthousiasme",
            "Diriger l'attention",
            "Créer des attentes positives"
          ]
        },
        {
          id: "13B",
          label: "Client Questionne la Durée",
          response: "Chaima : \"C'est une vidéo courte mais puissante de 5 minutes environ. [PAUSE] Elle va directement au cœur de ce que tu traverses avec [situation spécifique]. [PAUSE] Ces 5 minutes peuvent vraiment changer ta perspective sur [problématique].\"",
          next: "14",
          type: "neutral",
          notes: [
            "Minimiser l'investissement en temps",
            "Maximiser la valeur perçue",
            "Créer l'urgence"
          ]
        },
        {
          id: "13C",
          label: "Client Montre de l'Hésitation",
          response: "Chaima : \"Je comprends ton hésitation. [PAUSE] C'est exactement pour cela que cette vidéo est importante. [PAUSE] Elle répond justement aux questions que tu te poses sur [point d'hésitation]. Tu permets que je te la montre ?\"",
          next: "14",
          type: "neutral",
          notes: [
            "Valider l'hésitation",
            "Repositionner comme solution",
            "Obtenir l'accord"
          ]
        }
      ]
    },

    {
      id: "14",
      title: "Cadrage du Visionnage",
      text: "Chaima : \"Je vais te l'envoyer sur WhatsApp. [PAUSE] En la regardant, prête particulièrement attention à la partie sur [POINT CLÉ DU COMPTE-RENDU]. [PAUSE] Tu vas voir, ça résonne particulièrement avec ce que tu me disais sur [CITATION DU CLIENT].\"",
      notes: [
        "Guider l'attention",
        "Créer des points d'ancrage",
        "Personnaliser l'expérience",
        "Préparer l'impact"
      ],
      options: [
        {
          id: "14A",
          label: "Préparation Technique",
          response: "Chaima : \"Je te l'envoie maintenant. [PAUSE] Fais-moi signe dès que tu la reçois, comme ça je m'assure que tout fonctionne bien.\"",
          next: "15",
          type: "neutral",
          notes: [
            "Assurer la réception",
            "Maintenir le contact",
            "Gérer l'aspect technique"
          ]
        },
        {
          id: "14B",
          label: "Points d'Attention Spécifiques",
          response: "Chaima : \"Avant que tu la regardes, j'aimerais attirer ton attention sur trois points qui vont particulièrement résonner avec ta situation : [POINTS DU COMPTE-RENDU]\"",
          next: "15",
          type: "neutral",
          notes: [
            "Diriger l'attention",
            "Renforcer la pertinence",
            "Préparer l'impact"
          ]
        }
      ]
    },

    {
      id: "15",
      title: "Gestion du Visionnage",
      text: "Chaima : \"Je te laisse la regarder tranquillement. [PAUSE] Je reste en ligne, prends ton temps.\"",
      notes: [
        "Créer un espace confortable",
        "Maintenir la présence",
        "Observer les réactions",
        "Préparer le suivi"
      ],
      options: [
        {
          id: "15A",
          label: "Problème Technique",
          response: "Chaima : \"Pas de souci, on va régler ça ensemble. [PAUSE] As-tu bien reçu le message WhatsApp ? [PAUSE] Je peux aussi te l'envoyer par un autre moyen si tu préfères.\"",
          next: "15",
          type: "neutral",
          notes: [
            "Gérer calmement",
            "Proposer des alternatives",
            "Maintenir l'engagement"
          ]
        },
        {
          id: "15B",
          label: "Client Commente Pendant",
          response: "Chaima : \"Je comprends ta réaction ! [PAUSE] Continue de regarder, il y a encore des points importants qui vont suivre...\"",
          next: "16",
          type: "positive",
          notes: [
            "Valider la réaction",
            "Maintenir l'attention",
            "Noter les points d'impact"
          ]
        }
      ]
    },

    {
      id: "16",
      title: "Discussion Post-Visionnage",
      text: "Chaima : \"Alors, qu'as-tu pensé de la méthodologie présentée ? [PAUSE] Qu'est-ce qui t'a le plus marquée par rapport à ta situation ?\"",
      notes: [
        "Recueillir les impressions à chaud",
        "Lier à la situation personnelle",
        "Amplifier les points d'impact",
        "Préparer la transition vers la vente"
      ],
      options: [
        {
          id: "16A",
          label: "Client Très Touché",
          response: "Chaima : \"Je comprends que ça t'ait touchée aussi profondément. [PAUSE] C'est exactement ce que j'ai ressenti quand j'ai vu à quel point cette approche correspond à ta situation, particulièrement quand tu me parlais de [CITATION DU COMPTE-RENDU].\"",
          next: "17",
          type: "emotional",
          notes: [
            "Amplifier l'émotion",
            "Personnaliser la résonance",
            "Créer un pont vers la vente"
          ]
        },
        {
          id: "16B",
          label: "Client Plus Analytique",
          response: "Chaima : \"Excellent point d'analyse. [PAUSE] En effet, cette méthodologie est particulièrement efficace pour [SITUATION SPÉCIFIQUE] parce qu'elle aborde exactement les aspects dont tu me parlais concernant [POINTS DU COMPTE-RENDU].\"",
          next: "17",
          type: "neutral",
          notes: [
            "Valider l'approche rationnelle",
            "Renforcer avec des faits",
            "Maintenir le lien personnel"
          ]
        },
        {
          id: "16C",
          label: "Client Exprime des Doutes",
          response: "Chaima : \"Je comprends tes questions. [PAUSE] C'est normal d'avoir besoin de clarifications. [PAUSE] D'ailleurs, c'est intéressant que tu soulèves ce point, car il rejoint exactement ce que tu disais sur [POINT DU COMPTE-RENDU]. Laisse-moi t'expliquer plus précisément...\"",
          next: "17",
          type: "neutral",
          notes: [
            "Accueillir les doutes",
            "Rebondir vers du positif",
            "Clarifier avec des exemples personnalisés"
          ]
        }
      ]
    },

    {
      id: "17",
      title: "Transition vers la Proposition Commerciale",
      text: "Chaima : \"[PRÉNOM], après avoir vu cette présentation et au vu de tout ce que tu m'as partagé, je suis vraiment convaincue que nous pouvons t'aider à [OBJECTIF PRINCIPAL DU CLIENT]. [PAUSE] D'ailleurs, avant d'aller plus loin, j'aimerais te poser une question...\"",
      notes: [
        "Créer un pont naturel vers la vente",
        "Rappeler les points clés du compte-rendu",
        "Préparer l'ancrage prix",
        "Maintenir la connexion émotionnelle"
      ],
      options: [
        {
          id: "17A",
          label: "Client Très Réceptif",
          response: "Chaima : \"Je sens vraiment que tu es prête pour cette transformation. [PAUSE] Laisse-moi te présenter comment nous pouvons concrètement commencer ce travail ensemble...\"",
          next: "BLOC4",
          type: "positive",
          notes: [
            "Capitaliser sur l'enthousiasme",
            "Transition fluide vers la vente",
            "Maintenir l'élan"
          ]
        },
        {
          id: "17B",
          label: "Client Plus Réservé",
          response: "Chaima : \"Je sens que tu réfléchis à tout ça... [PAUSE] C'est normal, c'est une décision importante. [PAUSE] Laisse-moi te montrer concrètement comment nous pouvons t'accompagner, particulièrement pour [POINT SPÉCIFIQUE DU COMPTE-RENDU]...\"",
          next: "BLOC4",
          type: "neutral",
          notes: [
            "Reconnaître la réflexion",
            "Rassurer sur le processus",
            "Orienter vers du concret"
          ]
        }
      ]
    }
  ]
};

const BLOC3_TO_BLOC4 = {
  id: "transition_3_4",
  title: "Transition Bloc 3 vers Bloc 4",
  text: "Chaima : \"[PRÉNOM], maintenant que tu as vu la puissance de notre approche, j'aimerais te parler de quelque chose d'important. [PAUSE] Quelque chose qui pourrait véritablement transformer ta situation avec [problématique].\"",
  options: [
    {
      id: "trans_3_4_A",
      label: "Client Impacté par la Vidéo",
      response: "Chaima : \"Je vois que la vidéo t'a touchée profondément. [PAUSE] C'est exactement pour ça que je suis convaincue que ce que je vais te proposer va complètement résonner avec tes besoins.\"",
      notes: [
        "Capitaliser sur l'impact émotionnel",
        "Créer un pont vers l'offre",
        "Maintenir l'engagement"
      ]
    }
  ]
};

// INSTRUCTIONS POUR L'IA : BLOC 4 - Proposition Commerciale et Closing
/**
 * ## OBJECTIF DU BLOC
 * Le BLOC 4 est le moment crucial de la conversion. L'IA doit utiliser toutes les informations recueillies pour créer une proposition irrésistible tout en gérant les objections avec finesse.
 * 
 * ## PRÉPARATION DE LA PROPOSITION
 * 
 * ### 1. Analyse des Éléments Précédents
 * Compiler :
 * - Points de douleur principaux du compte-rendu
 * - Réactions émotionnelles durant l'appel
 * - Objections déjà exprimées ou sous-entendues
 * - Signaux d'achat ou de résistance
 * - Situation financière (indices directs/indirects)
 * 
 * ### 2. Stratégie de Pricing
 * Personnaliser selon :
 * - Niveau socio-économique perçu
 * - Objections anticipées sur le prix
 * - Références de prix déjà mentionnées
 * - Investissements précédents évoqués
 * 
 * ### 3. Gestion des Cas Particuliers
 * Préparer des réponses pour :
 * - Forte résistance au prix
 * - Besoin de consulter le conjoint
 * - Demande de réduction
 * - Comparaison avec d'autres offres
 * - Situation financière difficile
 * 
 * ## TECHNIQUES DE PERSUASION
 * 
 * ### 1. Ancrage Émotionnel
 * - Utiliser les mots exacts du client
 * - Rappeler les moments émotionnels de l'appel
 * - Créer des contrastes avant/après
 * - Amplifier le coût de l'inaction
 * 
 * ### 2. Social Proof
 * - Adapter les exemples à la situation
 * - Utiliser des cas similaires
 * - Créer des parallèles pertinents
 * - Renforcer la crédibilité
 * 
 * ### 3. Urgence et Rareté
 * - Créer une urgence naturelle
 * - Utiliser les délais réels
 * - Souligner la sélectivité
 * - Mentionner les places limitées
 */
      
      export const BLOC4 = {
        id: "BLOC4",
        title: "Proposition Commerciale et Closing",
        objective:
          "Le BLOC 4 est le moment crucial de la conversion. L'IA doit utiliser toutes les informations recueillies pour créer une proposition irrésistible tout en gérant les objections avec finesse.",
      
        preparation: {
          analysis: {
            pointsDeDouleur:
              "Identifier les principales souffrances exprimées lors de l'appel.",
            reactionsEmotionnelles:
              "Noter les moments d'émotion forte pour les réutiliser.",
            objections: "Lister les objections exprimées ou sous-entendues.",
            signauxAchatResistance:
              "Repérer les signaux d'intérêt ou de résistance.",
            situationFinanciere:
              "Évaluer la capacité financière à travers les indices donnés."
          },
          pricingStrategy: {
            personnalisation:
              "Adapter le prix au niveau socio-économique perçu.",
            anticipationObjections:
              "Préparer des réponses aux objections sur le prix.",
            referencesPrix: "Utiliser les références de prix déjà mentionnées.",
            investissementsPrecedents:
              "Prendre en compte les investissements passés du client."
          },
          specialCasesHandling: {
            forteResistancePrix:
              "Préparer des arguments solides pour justifier le prix.",
            consultationConjoint:
              "Anticiper et gérer l'objection liée au partenaire.",
            demandeReduction:
              "Savoir maintenir le prix tout en offrant de la valeur.",
            comparaisonOffres:
              "Se différencier clairement des concurrents.",
            situationFinanciereDifficile:
              "Proposer des solutions adaptées à la situation."
          }
        },

  persuasionTechniques: {
    emotionalAnchoring: {
      utiliserMotsClients:
        "Reprendre les termes exacts utilisés par le client.",
      rappelerMomentsEmotionnels:
        "Faire référence aux moments forts de l'appel.",
      contrastsAvantApres:
        "Montrer la différence entre la situation actuelle et future.",
      amplifierCoutInaction:
        "Souligner les conséquences de ne rien changer."
    },
    socialProof: {
      adapterExemples:
        "Utiliser des témoignages pertinents pour le client.",
      casSimilaires:
        "Présenter des situations similaires réussies.",
      parallelesPertinents:
        "Créer des analogies qui parlent au client.",
      renforcerCredibilite:
        "Appuyer sur l'expertise et les résultats prouvés."
    },
    urgencyScarcity: {
      urgenceNaturelle:
        "Créer une urgence basée sur la situation du client.",
      delaisReels:
        "Utiliser des échéances réelles pour inciter à l'action.",
      selectivite: "Montrer que le programme n'est pas ouvert à tous.",
      placesLimitees:
        "Mentionner le nombre limité de places disponibles."
    }
  },

  sections: [
    // SECTION 18: Ancrage Initial du Prix via Comparaison Thérapeutique
    {
      id: "18",
      title:
        "Ancrage Initial du Prix via Comparaison Thérapeutique",
      text:
        "Chaima : \"[PRÉNOM], avant qu'on continue, j'aimerais te poser une question... [PAUSE] As-tu une idée du coût d'un accompagnement thérapeutique classique sur 2-3 ans, avec une séance hebdomadaire ? [PAUSE] Je te demande ça car c'est souvent le temps nécessaire pour [problématique mentionnée] quand on est seule, sans méthode structurée.\"",
      notes: [
        "Créer l'ancrage prix haut dès le début.",
        "Préparer la comparaison favorable.",
        "Établir la valeur avant notre prix.",
        "Utiliser les silences stratégiquement."
      ],
      options: [
        {
          id: "18A",
          label: "Estimation Basse",
          response:
            "Chaima : \"Je comprends ton estimation. [PAUSE] En réalité, un suivi thérapeutique classique coûte entre 70€ et 100€ la séance. Sur 2-3 ans, avec une séance par semaine, on arrive facilement entre 5000€ et 10000€, parfois plus. [PAUSE] Et malheureusement, ce n'est pas toujours adapté aux spécificités de [situation spécifique du compte-rendu].\"",
          next: "19",
          type: "price_anchor",
          notes: [
            "Détailler le calcul pour impact.",
            "Souligner les limites.",
            "Préparer notre solution."
          ]
        },
        {
          id: "18B",
          label: "Sans Idée",
          response:
            "Chaima : \"Je comprends, ce n'est pas évident à évaluer. [PAUSE] Pour te donner une idée, un accompagnement thérapeutique classique peut facilement atteindre entre 5000€ et 10000€ sur cette durée. [PAUSE] Et souvent, les thérapeutes ne sont pas spécialisés dans [problématique spécifique], ce qui peut rallonger encore le processus.\"",
          next: "19",
          type: "price_anchor",
          notes: [
            "Créer l'ancrage prix.",
            "Identifier les limitations.",
            "Préparer notre différenciation."
          ]
        },
        {
          id: "18C",
          label: "Estimation Proche",
          response:
            "Chaima : \"Exactement ! [PAUSE] Tu as une bonne vision des choses. Ces accompagnements peuvent effectivement coûter entre 5000€ et 10000€, parfois plus. [PAUSE] Mais surtout, ils manquent souvent d'une approche intégrée pour [situation spécifique]. C'est d'ailleurs pour ça que les résultats peuvent être si longs à obtenir.\"",
          next: "19",
          type: "price_anchor",
          notes: [
            "Valider la connaissance.",
            "Renforcer les limitations.",
            "Introduire notre valeur."
          ]
        },
        {
          id: "18D",
          label: "Réaction Choquée au Montant",
          response:
            "Chaima : \"Je comprends ta réaction. [PAUSE] C'est vrai que quand on fait le calcul, ça représente un investissement très important. [PAUSE] Et le plus frustrant, c'est qu'avec une approche classique, il n'y a souvent pas de garantie de résultat, ni de méthode spécifique pour [problématique].\"",
          next: "19",
          type: "price_anchor",
          notes: [
            "Valider la surprise.",
            "Amplifier les limitations.",
            "Préparer notre solution."
          ]
        },
        {
          id: "18E",
          label: "Évocation Expérience Thérapeutique Passée",
          response:
            "Chaima : \"Je vois que tu as déjà expérimenté ce type d'accompagnement. [PAUSE] Et combien de temps as-tu suivi cette thérapie ? [PAUSE] Tu vois, c'est exactement ce dont je parle. Beaucoup de femmes dépensent des milliers d'euros sans obtenir les résultats espérés, particulièrement pour [situation spécifique].\"",
          next: "19",
          type: "price_anchor",
          notes: [
            "Utiliser l'expérience comme levier.",
            "Créer le contraste.",
            "Renforcer le besoin de solution."
          ]
        }
      ]
    },

    // SECTION 19: Transition vers Notre Solution Unique
    {
      id: "19",
      title: "Transition vers Notre Solution Unique",
      text:
        "Chaima : \"C'est justement pour cela que [Nom Expert] a développé quelque chose de complètement différent. [PAUSE] Un accompagnement plus complet, plus efficace, et surtout plus accessible. [PAUSE] Notre programme combine non seulement l'aspect thérapeutique, mais aussi [Points spécifiques du compte-rendu].\"",
      notes: [
        "Créer le contraste avec la thérapie classique.",
        "Introduire notre solution unique.",
        "Préparer l'annonce du prix."
      ],
      options: [
        {
          id: "19A",
          label: "Client Montre de l'Intérêt",
          response:
            "Chaima : \"Je vois que ça t'intéresse. [PAUSE] Ce qui rend notre approche vraiment unique, c'est qu'elle a été spécialement conçue pour [situation spécifique]. [PAUSE] Laisse-moi te montrer exactement comment ça fonctionne...\"",
          next: "20",
          type: "positive",
          notes: [
            "Amplifier l'intérêt.",
            "Personnaliser la présentation.",
            "Créer l'anticipation."
          ]
        },
        {
          id: "19B",
          label: "Client Sceptique",
          response:
            "Chaima : \"Je comprends ton scepticisme. [PAUSE] Tu sais, beaucoup de nos participantes avaient les mêmes doutes au début. [PAUSE] Ce qui les a convaincues, c'est notre approche complètement différente de [problématique]. Par exemple...\"",
          next: "20",
          type: "neutral",
          notes: [
            "Normaliser le scepticisme.",
            "Utiliser le social proof.",
            "Démontrer la différence."
          ]
        }
      ]
    },

    // SECTION 20: Présentation de l'Offre Premium
    {
      id: "20",
      title: "Présentation de l'Offre Premium",
      text:
        "Chaima : \"[PRÉNOM], maintenant que tu comprends la valeur d'un accompagnement spécialisé, laisse-moi te présenter notre programme de Transformation Complète. [PAUSE] C'est un accompagnement sur 6 mois, spécialement conçu pour les femmes comme toi qui sont prêtes à transformer profondément [situation spécifique].\"",
      notes: [
        "Créer l'exclusivité.",
        "Maintenir l'ancrage prix précédent.",
        "Préparer la présentation détaillée.",
        "Créer l'anticipation."
      ],
      options: [
        {
          id: "20A",
          label: "Présentation Détaillée des Composantes",
          response:
            "Chaima : \"Notre programme comprend trois piliers fondamentaux pour ta transformation :\n\nPremier pilier - Transformation Personnelle :\n- Accès illimité à notre plateforme spécialisée [valeur annoncée 1997€]\n- Programme d'auto-thérapie guidée par nos experts [valeur 2497€]\n- Exercices pratiques quotidiens personnalisés [valeur 997€]\n- Audio-thérapie spécifique pour [problématique] [valeur 797€]\n\nDeuxième pilier - Accompagnement Communautaire :\n- Sessions de groupe hebdomadaires avec nos expertes [valeur 1997€]\n- Accès à notre communauté privée de soutien [valeur 997€]\n- Masterclass mensuelles avec [Expert] [valeur 1497€]\n\nTroisième pilier - Coach Care Premium :\n- Suivi personnalisé bi-hebdomadaire [valeur 2997€]\n- Accès WhatsApp prioritaire [valeur 997€]\n- Plan d'action personnalisé [valeur 997€]\n\nLa valeur totale de cet accompagnement est de 14773€...\"",
          next: "21",
          type: "value_stack",
          notes: [
            "Empiler la valeur.",
            "Créer l'ancrage prix haut.",
            "Détailler chaque composante.",
            "Préparer l'effet waow du prix réel."
          ]
        },
        {
          id: "20B",
          label: "Focus Résultats",
          response:
            "Chaima : \"Ce qui rend ce programme si puissant, ce sont les résultats concrets :\n\n- 87% de nos participantes voient des changements significatifs dès les 3 premières semaines\n- 92% rapportent une amélioration majeure de [situation spécifique] en moins de 3 mois\n- 96% maintiennent ces résultats après 1 an\n\nEt tout cela grâce à notre méthode unique en 3 phases...\"",
          next: "21",
          type: "results_focus",
          notes: [
            "Utiliser des statistiques précises.",
            "Créer la crédibilité.",
            "Renforcer l'efficacité."
          ]
        },
        {
          id: "20C",
          label: "Témoignages Spécifiques",
          response:
            "Chaima : \"Laisse-moi te parler de Samira, qui était exactement dans ta situation il y a 6 mois. [PAUSE] Elle aussi [situation similaire du compte-rendu]. Aujourd'hui, non seulement elle a [résultat positif], mais en plus [bénéfice supplémentaire]. [PAUSE] Ou encore Nadia, qui après seulement 8 semaines...\"",
          next: "21",
          type: "social_proof",
          notes: [
            "Utiliser des histoires similaires.",
            "Créer l'identification.",
            "Renforcer la possibilité."
          ]
        }
      ]
    },

    // SECTION 21: Présentation du Prix avec Ancrage Émotionnel
    {
      id: "21",
      title: "Présentation du Prix avec Ancrage Émotionnel",
      text:
        "Chaima : \"[PRÉNOM], au vu de tout ce que je viens de te présenter, tu dois te demander quel est l'investissement pour cet accompagnement complet...\n[PAUSE]\nAlors qu'un suivi thérapeutique classique coûterait entre 5000€ et 10000€...\n[PAUSE]\nNotre programme complet représente un investissement unique de 3091€.\"",
      notes: [
        "Créer le contraste avec l'ancrage initial.",
        "Utiliser les silences stratégiques.",
        "Observer la réaction non-verbale.",
        "Préparer la gestion d'objection."
      ],
      options: [
        {
          id: "21A",
          label: "Choc Prix - Silence Total",
          response:
            "Chaima : \"[SILENCE 5-7 SECONDES] Je comprends ton silence... C'est normal de prendre un moment pour réaliser l'ampleur de la transformation possible. [PAUSE] Tu sais, beaucoup de nos participantes ont eu la même réaction au début. Puis elles ont réalisé que le vrai coût, c'était de continuer à vivre comme avant.\"",
          next: "22",
          type: "price_shock",
          notes: [
            "Utiliser le silence.",
            "Normaliser la réaction.",
            "Rediriger vers la valeur."
          ]
        },
        {
          id: "21B",
          label: "Expression Choc Direct",
          response:
            "Chaima : \"Je comprends ta réaction. [PAUSE] Laisse-moi te poser une question : si je te garantissais qu'en 6 mois tu retrouverais [OBJECTIF PRINCIPAL DU COMPTE-RENDU], quel prix ça aurait pour toi ? [PAUSE] Et si on divise 3091€ par 6 mois, ça fait environ 515€ par mois, soit le prix de [COMPARAISON QUOTIDIENNE PERSONNALISÉE].\"",
          next: "22",
          type: "price_objection",
          notes: [
            "Relativiser l'investissement.",
            "Créer des comparaisons tangibles.",
            "Ramener à la valeur."
          ]
        },
        {
          id: "21C",
          label: "Question Immédiate Facilités",
          response:
            "Chaima : \"Excellente question ! [PAUSE] Pour rendre cet investissement plus accessible, nous proposons plusieurs options de paiement :\n- Paiement en 3 fois de 1030€\n- Ou en 6 fois de 515€\nCe qui revient à environ 17€ par jour... Le prix d'un café et d'un sandwich, pour transformer complètement ta vie.\"",
          next: "22",
          type: "payment_plan",
          notes: [
            "Présenter les options.",
            "Décomposer en petites sommes.",
            "Créer des comparaisons quotidiennes."
          ]
        },
        {
          id: "21D",
          label: "Comparaison Immédiate Autres Solutions",
          response:
            "Chaima : \"Tu sais, quand on compare avec d'autres solutions :\n- Un thérapeute classique : 5000-10000€\n- Un coach de vie : 3000-5000€\n- Des stages de développement personnel : 2000-3000€\nEt tout ça sans garantie de résultat, ni méthode spécifique pour [PROBLÉMATIQUE].\n\nNotre programme offre tout cela et plus encore, avec une méthode prouvée, pour 3091€.\"",
          next: "22",
          type: "value_comparison",
          notes: [
            "Renforcer la valeur.",
            "Créer des comparaisons favorables.",
            "Souligner notre unicité."
          ]
        }
      ]
    },

    // SECTION 22: Gestion Premier Niveau d'Objections
    {
      id: "22",
      title: "Gestion Premier Niveau d'Objections",
      text:
        "Chaima : \"Je comprends tout à fait que cet investissement te fasse réfléchir, [PRÉNOM]. [PAUSE] D'ailleurs, avant d'aller plus loin, j'aimerais te poser une question très importante...\"",
      notes: [
        "Anticiper les objections principales.",
        "Maintenir la pression psychologique.",
        "Préparer l'exercice de projection.",
        "Garder le contrôle de la conversation."
      ],
      options: [
        {
          id: "22A",
          label: "Objection 'Je dois réfléchir'",
          response:
            "Chaima : \"Je comprends ce besoin de réflexion. [PAUSE] Laisse-moi te poser une question : depuis combien de temps exactement réfléchis-tu à cette situation ? [PAUSE] Qu'est-ce qui pourrait changer dans les prochains jours qui n'a pas changé ces derniers mois ? [PAUSE] Souvent, ce besoin de réflexion est en réalité une forme de procrastination émotionnelle.\"",
          next: "23",
          type: "reflection_objection",
          notes: [
            "Confronter gentiment.",
            "Créer un inconfort sur l'inaction.",
            "Pousser à la prise de conscience.",
            "Utiliser le système de gestion des objections 'Reflection'."
          ],
          enhancedObjectionHandling: {
            reflection: {
              initialResponse:
                "Je comprends ce besoin de réflexion. [PAUSE] Laisse-moi te poser une question : depuis combien de temps exactement réfléchis-tu à cette situation ? [PAUSE] Qu'est-ce qui pourrait changer dans les prochains jours qui n'a pas changé ces derniers mois ? [PAUSE] Tu vois, souvent, ce besoin de réflexion est en réalité une forme de procrastination émotionnelle.",
              deepDive: {
                timeQuestion:
                  "Depuis combien de temps exactement réfléchis-tu à cette situation ?",
                changeQuestion:
                  "Qu'est-ce qui pourrait changer dans les prochains jours qui n'a pas changé ces derniers mois ?"
              }
            }
          }
        },
        {
          id: "22B",
          label: "Objection 'C'est trop cher'",
          response:
            "Chaima : \"Je comprends cette réaction. [PAUSE] Faisons un calcul ensemble. Actuellement, combien dirais-tu que cette situation te coûte chaque mois ? [PAUSE] En énergie émotionnelle, en opportunités manquées, en impact sur [points du compte-rendu], en qualité de vie pour toi et ta famille. Si on devait mettre un prix sur tout ça, à combien l'estimerais-tu ?\"",
          next: "23",
          type: "price_objection",
          notes: [
            "Quantifier la douleur.",
            "Créer un contraste coût/bénéfice.",
            "Élargir la perspective du coût.",
            "Intégrer les questions du 'FINANCIAL_EXPLORATION_QUESTIONS'."
          ],
          financialExploration: [
            {
              category: "Compte courant",
              mainQuestion:
                "Concrètement, aujourd'hui tu as combien sur ton compte bancaire ?",
              followUp:
                "Cette somme-là, elle va servir à quoi exactement ?"
            },
            {
              category: "Épargne",
              mainQuestion:
                "Est-ce que tu as quelque chose d'autre mis de côté ?",
              followUp:
                "Comme un matelas de sécurité par exemple ?"
            },
            {
              category: "Ressources alternatives",
              questions: [
                "Est-ce que tu as des choses que tu pourrais vendre ?",
                "Est-ce qu'il y a des personnes qui pourraient t'aider ?",
                "Est-ce que tu as pensé à d'autres solutions ?"
              ]
            }
          ]
        },
        {
          id: "22C",
          label: "Objection 'Je dois en parler à mon mari'",
          response:
            "Chaima : \"Je comprends parfaitement que tu souhaites impliquer ton mari dans cette décision. [PAUSE] Est-ce que c'est pour une question logistique ou as-tu besoin de son approbation pour avancer ?\"",
          subOptions: [
            {
              label: "Besoin de son approbation",
              response:
                "Chaima : \"Je vois que son avis est important pour toi. [PAUSE] Mais rappelle-toi, ce programme est avant tout pour TOI, pour te permettre de reprendre le contrôle de ta vie. [PAUSE] Quand tu as commencé à souffrir de [situation], as-tu eu besoin de son approbation ?\"",
              next: "23",
              type: "approval_objection",
              notes: [
                "Responsabiliser la cliente.",
                "Créer l'indépendance décisionnelle.",
                "Utiliser le 'PARTNER_OBJECTION_SYSTEM'."
              ],
              partnerObjectionHandling: {
                validation: {
                  initialCheck: {
                    question:
                      "Est-ce que déjà par rapport à ce que je t'ai présenté, est-ce que ça te correspond ?",
                    purpose:
                      "Isoler l'objection partenaire de la validation du programme."
                  },
                  partnerAwareness: {
                    question:
                      "Est-ce que [partenaire] est au courant de ta démarche ?",
                    followUp: {
                      ifYes: "Qu'est-ce qu'il/elle en pense ?",
                      ifNo:
                        "Qu'est-ce qui t'a empêché d'en parler ?"
                    }
                  }
                },

                approachTypes: {
                  logistical: {
                    identifier:
                      "C'est juste pour voir la partie logistique avec lui/elle ?",
                    handling: {
                      step1: "Proposer un premier versement",
                      step2: "Fixer un délai court pour la suite",
                      step3: "Maintenir la pression positive"
                    }
                  },

                  approval: {
                    identifier:
                      "Tu as besoin de son approbation pour avancer ?",
                    handling: {
                      mainApproach:
                        "Responsabilisation du prospect",
                      questions: [
                        "Quand tu as commencé à souffrir de [situation], tu lui as demandé la permission ?",
                        "Ce programme est d'abord pour TOI, pour te donner les outils."
                      ]
                    }
                  },

                  validation: {
                    identifier:
                      "Tu ne peux pas prendre la décision seul(e) ?",
                    handling: {
                      step1: "Proposer un R3",
                      step2: "Préparer une présentation adaptée",
                      step3: "Fixer un délai précis"
                    }
                  }
                },

                closingStrategies: {
                  logistical: {
                    approach: "Premier versement + délai court",
                    script:
                      "On peut démarrer avec un premier versement de X€ et voir ensemble dans les prochains jours pour le reste."
                  },

                  approval: {
                    approach:
                      "Responsabilisation + action immédiate",
                    script:
                      "C'est ta vie, ta décision. On peut commencer maintenant et [partenaire] verra les résultats positifs."
                  },

                  validation: {
                    approach: "R3 structuré",
                    script:
                      "Je vous propose qu'on se retrouve tous les trois [date proche], je répondrai à toutes les questions."
                  }
                },

                supportMechanisms: {
                  partnerInclusion: {
                    timing: "Post-démarrage",
                    approach:
                      "Montrer les premiers résultats.",
                    purpose:
                      "Créer l'adhésion naturelle."
                  },

                  followUp: {
                    frequency: "3-5 jours maximum",
                    focus:
                      "Maintenir la motivation et l'engagement."
                  }
                }
              }
            },
            {
              label: "Question logistique",
              response:
                "Chaima : \"Je comprends que vous gériez vos finances ensemble. [PAUSE] Ce que je peux te proposer, c'est de démarrer avec un premier versement pour sécuriser ta place, et vous pourrez organiser le reste ensemble dans les prochains jours.\"",
              next: "23",
              type: "logistical_objection",
              notes: [
                "Proposer un premier versement.",
                "Maintenir l'urgence.",
                "Faciliter la décision."
              ],
              partnerObjectionHandling: {
                validation: {
                  initialCheck: {
                    question:
                      "Est-ce que déjà par rapport à ce que je t'ai présenté, est-ce que ça te correspond ?",
                    purpose:
                      "Isoler l'objection partenaire de la validation du programme."
                  },
                  partnerAwareness: {
                    question:
                      "Est-ce que [partenaire] est au courant de ta démarche ?",
                    followUp: {
                      ifYes: "Qu'est-ce qu'il/elle en pense ?",
                      ifNo:
                        "Qu'est-ce qui t'a empêché d'en parler ?"
                    }
                  }
                },

                approachTypes: {
                  logistical: {
                    identifier:
                      "C'est juste pour voir la partie logistique avec lui/elle ?",
                    handling: {
                      step1: "Proposer un premier versement",
                      step2: "Fixer un délai court pour la suite",
                      step3: "Maintenir la pression positive"
                    }
                  },

                  approval: {
                    identifier:
                      "Tu as besoin de son approbation pour avancer ?",
                    handling: {
                      mainApproach:
                        "Responsabilisation du prospect",
                      questions: [
                        "Quand tu as commencé à souffrir de [situation], tu lui as demandé la permission ?",
                        "Ce programme est d'abord pour TOI, pour te donner les outils."
                      ]
                    }
                  },

                  validation: {
                    identifier:
                      "Tu ne peux pas prendre la décision seul(e) ?",
                    handling: {
                      step1: "Proposer un R3",
                      step2: "Préparer une présentation adaptée",
                      step3: "Fixer un délai précis"
                    }
                  }
                },

                closingStrategies: {
                  logistical: {
                    approach: "Premier versement + délai court",
                    script:
                      "On peut démarrer avec un premier versement de X€ et voir ensemble dans les prochains jours pour le reste."
                  },

                  approval: {
                    approach:
                      "Responsabilisation + action immédiate",
                    script:
                      "C'est ta vie, ta décision. On peut commencer maintenant et [partenaire] verra les résultats positifs."
                  },

                  validation: {
                    approach: "R3 structuré",
                    script:
                      "Je vous propose qu'on se retrouve tous les trois [date proche], je répondrai à toutes les questions."
                  }
                },

                supportMechanisms: {
                  partnerInclusion: {
                    timing: "Post-démarrage",
                    approach:
                      "Montrer les premiers résultats.",
                    purpose:
                      "Créer l'adhésion naturelle."
                  },

                  followUp: {
                    frequency: "3-5 jours maximum",
                    focus:
                      "Maintenir la motivation et l'engagement."
                  }
                }
              }
            }
          ],
          notes: [
            "Identifier le type d'objection partenaire.",
            "Utiliser le système de gestion des objections partenaires."
          ]
        },
        {
          id: "22D",
          label: "Objection 'Je n'ai pas les moyens'",
          response:
            "Chaima : \"Je comprends totalement cette préoccupation, [PRÉNOM]. [PAUSE] D'ailleurs, c'est exactement pour ça que nous avons développé plusieurs solutions :\n\n1. Le paiement en 6 fois de 515€, ce qui revient à 17€ par jour\n2. Une option essentielle que je peux te présenter\n3. Notre garantie satisfait ou remboursé\n\nMais avant d'aller plus loin, laisse-moi te demander : si l'argent n'était pas un problème, serais-tu prête à commencer aujourd'hui ?\"",
          next: "23",
          type: "financial_objection",
          notes: [
            "Proposer des solutions.",
            "Tester l'engagement réel.",
            "Préparer l'offre alternative."
          ],
          objectionHandling: {
            ...OBJECTION_HANDLING_SYSTEM,
            financialPatterns: {
              partialPayment: {
                conditions: [
                  "Forte motivation identifiée",
                  "Une partie du montant disponible",
                  "Profil action-oriented"
                ],
                strategy: {
                  firstStep:
                    "2000€ première mensualité",
                  timeline: "2-3 semaines pour trouver le reste",
                  support:
                    "Accompagnement actif dans la recherche de solutions"
                }
              },
              noMoneyAvailable: {
                approach: [
                  {
                    step: 1,
                    action: "Explorer compte courant",
                    question:
                      "Concrètement, aujourd'hui tu as combien sur ton compte bancaire ?"
                  },
                  {
                    step: 2,
                    action: "Identifier épargne",
                    question:
                      "Est-ce que tu as quelque chose d'autre mis de côté ?"
                  },
                  {
                    step: 3,
                    action: "Explorer ressources alternatives",
                    questions: [
                      "Est-ce que tu as des choses que tu pourrais vendre ?",
                      "Est-ce qu'il y a des personnes qui pourraient t'aider ?"
                    ]
                  }
                ]
              }
            }
          }
        },
        {
          id: "22E",
          label: "Objection 'Je ne suis pas sûre que ça marchera'",
          response:
            "Chaima : \"Je comprends parfaitement ce doute. [PAUSE] C'est même sain d'être prudente après [expérience négative du compte-rendu]. [PAUSE] Mais laisse-moi te poser une question : qu'est-ce qui est plus risqué ?\n\n- Essayer notre programme avec une garantie de 7 jours et un accompagnement complet\n- Ou continuer comme maintenant, en sachant que chaque jour qui passe [conséquence négative du compte-rendu] ?\n\nTu vois, le vrai risque, c'est de ne rien changer.\"",
          next: "23",
          type: "doubt_objection",
          notes: [
            "Valider la prudence.",
            "Retourner la notion de risque.",
            "Créer l'urgence d'agir."
          ],
          doubtHandling: {
            ...OBJECTION_HANDLING_SYSTEM
          }
        }
      ]
    },

    // SECTION 23: Exercice de Projection et Amplification de l'Urgence
    {
      id: "23",
      title:
        "Exercice de Projection et Amplification de l'Urgence",
      text:
        "Chaima : \"[PRÉNOM], faisons un exercice ensemble si tu veux bien. [PAUSE] Je vais te guider pas à pas...\"",
      notes: [
        "Créer un moment émotionnel fort.",
        "Amplifier le coût de l'inaction.",
        "Préparer la décision."
      ],
      options: [
        {
          id: "23A",
          label: "Projection Négative",
          response:
            "Chaima : \"Ferme les yeux un instant... [PAUSE] Projette-toi dans un an, exactement à la même date, si tu n'as rien changé à ta situation actuelle :\n\n- Comment te sens-tu émotionnellement ?\n- Où en est ta relation avec [situation spécifique] ?\n- Quel impact cela a-t-il sur [points sensibles du compte-rendu] ?\n- Comment te sens-tu en te réveillant chaque matin ?\n\n[PAUSE LONGUE] Ouvre les yeux... Que ressens-tu en imaginant ce scénario ?\"",
          next: "24",
          type: "negative_projection",
          notes: [
            "Créer une vision douloureuse.",
            "Amplifier les émotions négatives.",
            "Préparer le contraste."
          ]
        },
        {
          id: "23B",
          label: "Projection Positive",
          response:
            "Chaima : \"Maintenant, referme les yeux... [PAUSE] Cette fois, projette-toi dans 6 mois, après avoir suivi notre programme :\n\n- Tu as surmonté [obstacles du compte-rendu]\n- Tu ressens [états positifs désirés]\n- Ta relation est [vision positive]\n- Ton entourage remarque [changements visibles]\n\n[PAUSE] Quelle différence ressens-tu entre ces deux scénarios ?\"",
          next: "24",
          type: "positive_projection",
          notes: [
            "Créer l'espoir.",
            "Rendre le changement tangible.",
            "Renforcer la motivation."
          ]
        }
      ]
    },

    // SECTION 24: Présentation de l'Offre Essentielle
    {
      id: "24",
      title: "Présentation de l'Offre Essentielle",
      text:
        "Chaima : \"[PRÉNOM], je sens que tu es vraiment motivée à transformer ta situation. [PAUSE] Je vais faire quelque chose d'exceptionnel. [PAUSE] Notre programme Premium est normalement le seul que nous proposons... mais tu sais quoi ? Je crois tellement en ton potentiel que je veux te faire une proposition unique.\"",
      notes: [
        "Créer un moment d'exclusivité.",
        "Augmenter la pression psychologique.",
        "Préparer l'offre alternative.",
        "Maintenir l'urgence."
      ],
      options: [
        {
          id: "24A",
          label: "Présentation Offre Essentielle Standard",
          response:
            "Chaima : \"J'ai la possibilité - et c'est vraiment exceptionnel - de te proposer notre Option Essentielle sur 3 mois à 2091€. [PAUSE] Pour être totalement transparente avec toi, c'est une offre que je ne fais que très rarement, uniquement quand je sens une vraie détermination comme la tienne.\"",
          next: "25",
          type: "special_offer",
          notes: [
            "Créer l'exclusivité.",
            "Valoriser la cliente.",
            "Maintenir la valeur perçue."
          ]
        },
        {
          id: "24B",
          label: "Présentation Package Personnalisé",
          response:
            "Chaima : \"En analysant ta situation et particulièrement [point spécifique du compte-rendu], j'ai conçu un package sur-mesure pour toi :\n\n- Les modules essentiels pour [problématique principale]\n- Un accompagnement Coach Care intensif sur 3 mois\n- Un accès prioritaire aux sessions de groupe\n\nTout cela pour 2091€ au lieu de 3091€. [PAUSE] C'est vraiment une offre unique que je te fais là.\"",
          next: "25",
          type: "custom_package",
          notes: [
            "Personnaliser l'offre.",
            "Maintenir la valeur.",
            "Créer l'urgence."
          ]
        },
        {
          id: "24C",
          label: "Double Offre avec Urgence",
          response:
            "Chaima : \"Je vais te proposer deux options, mais attention, c'est vraiment exceptionnel et valable uniquement aujourd'hui :\n\n1. Le Programme Premium complet à 3091€ avec tout ce qu'on a vu\nOU\n2. L'Option Essentielle à 2091€, concentrée sur [besoins prioritaires]\n\nLes deux incluent notre garantie satisfait ou remboursé. [PAUSE] Laquelle préfères-tu explorer ?\"",
          next: "25",
          type: "double_offer",
          notes: [
            "Créer un choix dirigé.",
            "Maintenir la pression.",
            "Forcer la décision."
          ]
        }
      ]
    },

    // SECTION 25: Gestion des Dernières Résistances
    {
      id: "25",
      title: "Gestion des Dernières Résistances",
      text:
        "Chaima : \"Je sens qu'il y a encore quelque chose qui te fait hésiter... [PAUSE] Dis-moi franchement, qu'est-ce qui t'empêche de commencer ta transformation aujourd'hui ?\"",
      notes: [
        "Identifier les derniers freins.",
        "Préparer les arguments ultimes.",
        "Maintenir la pression émotionnelle."
      ],
      options: [
        {
          id: "25A",
          label: "Résistance Finale Prix",
          response:
            "Chaima : \"Je comprends... [PAUSE] Faisons un dernier calcul ensemble :\n\nSi on divise 2091€ par 90 jours, ça fait 23€ par jour.\n[PAUSE]\nC'est le prix de [comparaison personnalisée du compte-rendu].\n[PAUSE]\nLa vraie question est : est-ce que ton bonheur et celui de ta famille valent 23€ par jour ?\n[PAUSE]\nSurtout qu'avec le paiement en 6 fois, on tombe à moins de 12€ par jour...\"",
          next: "26",
          type: "final_price_objection",
          notes: [
            "Décomposer le montant.",
            "Créer des comparaisons parlantes.",
            "Pousser à la décision."
          ]
        },
        {
          id: "25B",
          label: "Résistance Finale Timing",
          response:
            "Chaima : \"Je comprends que tu veuilles attendre le bon moment... [PAUSE] Mais laisse-moi te poser une question : le bon moment pour [problématique], c'était quand dans le passé ? [PAUSE] Il y a 6 mois ? 1 an ? [PAUSE] Tu vois, le bon moment, c'est maintenant. Parce que dans 6 mois, tu te diras que le meilleur moment, c'était aujourd'hui.\"",
          next: "26",
          type: "timing_objection",
          notes: [
            "Créer l'urgence.",
            "Utiliser le regret anticipé.",
            "Forcer la décision."
          ]
        },
        {
          id: "25C",
          label: "Résistance Finale Peur",
          response:
            "Chaima : \"Je comprends cette peur, vraiment. [PAUSE] Tu sais ce que Mohamed dit toujours ? La peur et l'excitation provoquent exactement les mêmes sensations physiques. [PAUSE] Ce que tu ressens là, ce n'est pas de la peur, c'est ton corps qui te dit qu'il est prêt pour le changement. [PAUSE] Et avec notre garantie de 7 jours, le seul risque réel, c'est de continuer comme avant.\"",
          next: "26",
          type: "fear_objection",
          notes: [
            "Transformer la peur.",
            "Utiliser la garantie.",
            "Pousser à l'action."
          ]
        },
        {
          id: "25D",
          label: "Résistance Finale Conjoint",
          response:
            "Chaima : \"Je comprends ton besoin d'en parler avec lui... [PAUSE] Mais réfléchis un instant : quand la situation a commencé à se dégrader, est-ce qu'il t'a demandé la permission ? [PAUSE] Ce programme est pour TOI, pour te donner les outils de reprendre le contrôle. [PAUSE] D'ailleurs, notre expérience montre que les maris sont souvent plus réceptifs quand ils voient les premiers changements positifs.\"",
          next: "26",
          type: "spouse_objection",
          notes: [
            "Créer l'indépendance.",
            "Utiliser l'expérience.",
            "Pousser à la décision autonome."
          ]
        }
      ]
    },

    // SECTION 26: Closing Final avec Urgence
    {
      id: "26",
      title: "Closing Final avec Urgence",
      text:
        "Chaima : \"[PRÉNOM], on arrive à un moment crucial. [PAUSE] Je dois être complètement honnête avec toi...\"",
      notes: [
        "Créer l'ultimatum positif.",
        "Maximiser la pression.",
        "Forcer la décision."
      ],
      options: [
        {
          id: "26A",
          label: "Urgence Places Limitées",
          response:
            "Chaima : \"Je ne devrais peut-être pas te le dire, mais il ne me reste que 2 places dans le programme ce mois-ci. [PAUSE] Avec l'Option Essentielle que je t'ai proposée et la garantie de 7 jours, tu ne prends aucun risque. [PAUSE] Par contre, je ne pourrai pas te garantir cette offre si tu rappelles dans quelques jours. [PAUSE] Tu préfères commencer avec le paiement en 3 ou en 6 fois ?\"",
          next: "27",
          type: "scarcity_close",
          notes: [
            "Créer la rareté.",
            "Utiliser l'alternative limitée.",
            "Forcer le choix."
          ]
        }
      ]
    },

    // SECTION 27: Processus de Paiement
    {
      id: "27",
      title: "Processus de Paiement",
      text:
        "Chaima : \"Super [PRÉNOM] ! Tu viens de prendre la meilleure décision pour toi et ton avenir. [PAUSE] Pour valider ton inscription tout de suite et t'assurer cette place dans le programme, je vais t'envoyer le lien de paiement sur WhatsApp.\"",
      notes: [
        "Valider et célébrer la décision.",
        "Maintenir l'urgence jusqu'au paiement.",
        "Gérer le processus technique.",
        "Anticiper les reculs possibles."
      ],
      options: [
        {
          id: "27A",
          label: "Process Standard",
          response:
            "Chaima : \"Je t'envoie le lien maintenant... [PAUSE] Tu devrais le recevoir dans quelques secondes. [PAUSE] Tu peux me confirmer quand tu l'as reçu ? Je reste en ligne avec toi pour m'assurer que tout se passe bien.\"",
          next: "28",
          type: "payment_process",
          notes: [
            "Gérer le côté technique.",
            "Maintenir le contact.",
            "Rassurer sur le processus."
          ]
        },
        {
          id: "27B",
          label: "Hésitation Dernière Minute",
          response:
            "Chaima : \"Je sens une petite hésitation dans ta voix... [PAUSE] C'est normal, c'est souvent le moment où notre cerveau essaie de nous maintenir dans notre zone de confort. [PAUSE] Mais rappelle-toi pourquoi tu as pris cette décision il y a quelques minutes. [PAUSE] Pense à [situation future positive évoquée]. C'est exactement pour ça que tu es là aujourd'hui.\"",
          next: "28",
          type: "last_minute_doubt",
          notes: [
            "Gérer le doute final.",
            "Rappeler la motivation.",
            "Pousser à l'action."
          ]
        },
        {
          id: "27C",
          label: "Problème Technique",
          response:
            "Chaima : \"Ne t'inquiète pas du tout, on va résoudre ça ensemble. [PAUSE] D'abord, vérifie si tu as bien reçu mon message WhatsApp. [PAUSE] Si tu ne le vois pas, je peux :\n\n1. Te renvoyer le lien\n2. Te l'envoyer par SMS\n3. Te donner les instructions par téléphone\n\nL'important c'est de valider ton inscription maintenant pour te garantir ta place et ton tarif préférentiel. [PAUSE] Dis-moi quelle option tu préfères ?\"",
          next: "28",
          type: "technical_issue",
          subOptions: [
            {
              id: "27C1",
              label: "Problème WhatsApp",
              response:
                "Chaima : \"Je comprends, parfois WhatsApp peut avoir des délais. [PAUSE] Je te propose qu'on essaie par SMS. [PAUSE] Tu pourras cliquer directement sur le lien et ça marchera exactement de la même façon. [PAUSE] Je te l'envoie tout de suite, tu me dis quand tu le reçois.\"",
              next: "28",
              notes: [
                "Proposer une alternative immédiate.",
                "Maintenir la simplicité.",
                "Rassurer sur le processus."
              ]
            },
            {
              id: "27C2",
              label: "Problème de Connexion",
              response:
                "Chaima : \"Pas de souci, ça arrive parfois d'avoir des soucis de connexion. [PAUSE] Le plus simple serait peut-être que je te guide par téléphone. [PAUSE] Tu peux ouvrir une nouvelle page internet ? [PAUSE] Je vais te dicter l'adresse pas à pas et rester avec toi jusqu'à ce que tout soit validé.\"",
              next: "28",
              notes: [
                "Accompagner étape par étape.",
                "Rester patiente.",
                "Maintenir l'engagement."
              ]
            },
            {
              id: "27C3",
              label: "Problème de Paiement",
              response:
                "Chaima : \"Je vois, parfois ça peut arriver avec certaines cartes. [PAUSE] Ne t'inquiète pas, on a plusieurs solutions :\n\n1. Essayer avec une autre carte\n2. Utiliser le paiement en plusieurs fois\n3. Passer par un autre système de paiement\n\nL'important est de sécuriser ta place maintenant. [PAUSE] Quelle option te conviendrait le mieux ?\"",
              next: "28",
              type: "technical_payment_issue",
              notes: [
                "Proposer des alternatives.",
                "Maintenir l'urgence.",
                "Résoudre techniquement."
              ]
            }
          ],
          notes: [
            "Garder le contrôle de la situation.",
            "Multiplier les solutions.",
            "Maintenir l'urgence d'inscription.",
            "Éviter la perte du client."
          ]
        }
      ]
    },

    // SECTION 28: Confirmation du Paiement et Transition
    {
      id: "28",
      title: "Confirmation du Paiement et Transition",
      text:
        "Chaima : \"Super [PRÉNOM], je vois que le paiement est bien validé ! [PAUSE] Bienvenue dans le programme ! Tu viens de faire le premier pas vers ta transformation, je suis vraiment fière de toi.\"",
      notes: [
        "Célébrer la décision.",
        "Renforcer la confiance.",
        "Préparer la transition Coach Care.",
        "Maintenir l'enthousiasme."
      ],
      options: [
        {
          id: "28A",
          label: "Transition Enthousiaste",
          response:
            "Chaima : \"Maintenant, on va passer à la partie la plus importante : la mise en place de ton accompagnement personnalisé. [PAUSE] C'est là que la magie commence vraiment ! [PAUSE] Je vais te mettre en relation avec ta Coach Care dédiée qui va t'accompagner tout au long de ton parcours.\"",
          next: "29",
          type: "positive_transition",
          notes: [
            "Créer l'anticipation.",
            "Valoriser l'accompagnement.",
            "Préparer le premier contact Coach Care."
          ]
        },
        {
          id: "28B",
          label: "Client Inquiet Post-Paiement",
          response:
            "Chaima : \"Je sens que tu as encore quelques appréhensions, et c'est tout à fait normal. [PAUSE] C'est justement pour ça que nous avons mis en place un accompagnement aussi personnalisé. [PAUSE] Ta Coach Care va être là pour te guider pas à pas. Elle a une expérience extraordinaire avec des femmes exactement dans ta situation.\"",
          next: "29",
          type: "reassurance",
          notes: [
            "Rassurer sur la décision.",
            "Valider les émotions.",
            "Mettre en avant l'expertise."
          ]
        }
      ]
    },

    // SECTION 29: Prise de Rendez-vous Coach Care
    {
      id: "29",
      title: "Prise de Rendez-vous Coach Care",
      text:
        "Chaima : \"[PRÉNOM], c'est le moment de planifier ton premier appel avec ta Coach Care. [PAUSE] Ce premier rendez-vous est crucial car elle va :\n- Faire un diagnostic approfondi de ta situation\n- Créer ton plan d'action personnalisé\n- Te donner accès à tous les outils dont tu as besoin\n- Commencer immédiatement le travail sur [problématique principale du compte-rendu]\"",
      notes: [
        "Souligner l'importance du premier appel.",
        "Créer l'urgence du démarrage.",
        "Assurer la prise de rendez-vous.",
        "Maintenir l'engagement."
      ],
      options: [
        {
          id: "29A",
          label: "Proposition Créneaux Rapides",
          response:
            "Chaima : \"J'ai vérifié son planning, elle a deux créneaux disponibles rapidement :\n- Demain à 10h\n- Après-demain à 14h\n\n[PAUSE] Je te conseille vraiment de prendre le créneau de demain pour maintenir cet élan et commencer ta transformation tout de suite. Qu'est-ce que tu préfères ?\"",
          next: "30",
          type: "quick_scheduling",
          notes: [
            "Proposer des options rapides.",
            "Pousser vers le créneau le plus proche.",
            "Créer l'urgence du démarrage."
          ]
        },
        {
          id: "29B",
          label: "Contraintes Horaires Client",
          response:
            "Chaima : \"Je comprends tes contraintes. [PAUSE] La bonne nouvelle, c'est que notre équipe de Coach Care est disponible de 8h à 21h, justement pour s'adapter à tous les emplois du temps. [PAUSE] Quel moment de la journée serait idéal pour toi ? Matin, après-midi ou soirée ?\"",
          next: "30",
          type: "flexible_scheduling",
          notes: [
            "Montrer la flexibilité.",
            "Trouver une solution.",
            "Assurer la prise de rendez-vous."
          ]
        }
      ]
    },

    // SECTION 30: Confirmation et Clôture
    {
      id: "30",
      title: "Confirmation et Clôture",
      text:
        "Chaima : \"Parfait [PRÉNOM] ! Je confirme donc ton rendez-vous [JOUR] à [HEURE] avec ta Coach Care. [PAUSE] Elle va t'appeler directement sur ce numéro.\"",
      notes: [
        "Confirmer clairement le rendez-vous.",
        "Préparer les prochaines étapes.",
        "Clôturer positivement.",
        "Assurer la transition."
      ],
      options: [
        {
          id: "30A",
          label: "Clôture Standard",
          response:
            "Chaima : \"D'ici là, tu vas recevoir un email avec tes accès à la plateforme. [PAUSE] Comme ça, tu pourras déjà commencer à explorer les ressources disponibles, et ta Coach Care pourra répondre à toutes tes questions pendant votre premier appel. [PAUSE] Je suis vraiment heureuse de t'avoir accompagnée aujourd'hui, et j'ai hâte que tu commences cette belle transformation. Qu'Allah facilite ce nouveau chapitre de ta vie.\"",
          next: "fin",
          type: "positive_closing",
          notes: [
            "Donner les prochaines étapes.",
            "Maintenir l'enthousiasme.",
            "Clôturer avec bienveillance."
          ]
        },
        {
          id: "30B",
          label: "Questions sur Premier Appel",
          response:
            "Chaima : \"Je comprends que tu veuilles savoir comment ça va se passer. [PAUSE] Le premier appel avec ta Coach Care dure environ 45 minutes. Elle va d'abord prendre le temps de bien comprendre ta situation, puis elle va te présenter en détail ton plan d'action personnalisé. [PAUSE] Elle va aussi te montrer comment utiliser tous les outils du programme pour maximiser tes résultats. [PAUSE] Tu verras, elle a une expertise incroyable avec les femmes qui vivent exactement ta situation.\"",
          next: "fin",
          type: "detailed_closing",
          notes: [
            "Répondre aux inquiétudes.",
            "Clarifier les attentes.",
            "Rassurer sur l'expertise."
          ]
        }
      ]
    }
  ],

  // Intégration des systèmes supplémentaires
  objectionHandlingSystem: {
    validateObjectionType: {
      step1: "Traiter comme logistique",
      step2: "Vérifier la réaction",
      rule: "Tout le monde est un mytho jusqu'à preuve du contraire."
    },

    financialPatterns: {
      partialPayment: {
        conditions: [
          "Forte motivation identifiée",
          "Une partie du montant disponible",
          "Profil action-oriented"
        ],
        strategy: {
          firstStep: "2000€ première mensualité",
          timeline: "2-3 semaines pour trouver le reste",
          support: "Accompagnement actif dans la recherche de solutions"
        }
      },
      noMoneyAvailable: {
        approach: [
          {
            step: 1,
            action: "Explorer compte courant",
            question:
              "Concrètement, aujourd'hui tu as combien sur ton compte bancaire ?"
          },
          {
            step: 2,
            action: "Identifier épargne",
            question:
              "Est-ce que tu as quelque chose d'autre mis de côté ?"
          },
          {
            step: 3,
            action: "Explorer ressources alternatives",
            questions: [
              "Est-ce que tu as des choses que tu pourrais vendre ?",
              "Est-ce qu'il y a des personnes qui pourraient t'aider ?"
            ]
          }
        ]
      }
    },

    closingTechniques: {
      rhythmControl: {
        principle: "Ralentir comme un métronome",
        implementation: [
          "Utiliser plus de silences",
          "Baisser le ton de la voix",
          "Ralentir le débit"
        ]
      },
      positioning: {
        principle: "Être à côté, pas contre",
        implementation: "Passer sa main symboliquement par-dessus l'épaule"
      }
    },

    enhancedObjectionHandling: {
      reflection: {
        initialResponse:
          "Je comprends ce besoin de réflexion. [PAUSE] Laisse-moi te poser une question...",
        deepDive: {
          timeQuestion:
            "Depuis combien de temps exactement réfléchis-tu à cette situation ?",
          changeQuestion:
            "Qu'est-ce qui pourrait changer dans les prochains jours qui n'a pas changé ces derniers mois ?"
        }
      },
      partner: {
        types: {
          approval: {
            check: "Si elle te dit non, tu démarres pas ?",
            handling: "Proposer un R3 (Rendez-vous à trois)"
          },
          logistics: {
            check: "C'est juste pour aligner vos finances ?",
            handling: "Proposer un premier versement d'engagement"
          },
          validation: {
            check: "Tu n'es pas décisionnaire ?",
            handling: "Organiser une présentation conjointe"
          }
        }
      }
    },

    doubleCheckSystem: {
      purpose: "Vérifier que ce n'est pas un mytho",
      implementation: {
        step1: "Traiter comme annoncé",
        step2: "Observer les incohérences",
        conclusion: {
          ifConsistent:
            "Poursuivre selon le type identifié",
          ifInconsistent:
            "Réévaluer et adapter l'approche"
        }
      }
    }
  },

  partialPaymentHandling: {
    qualification: {
      mustHave: [
        "Motivation claire",
        "Capacité d'action démontrée",
        "Une partie du montant disponible"
      ]
    },
    process: {
      step1: {
        action: "Proposer démarrage partiel",
        text:
          "Chaima : \"Exceptionnellement, je peux te proposer de démarrer avec une première mensualité de 2000€...\"",
        conditions: "Seulement si profil action-oriented confirmé"
      },
      step2: {
        action: "Fixer rendez-vous de suivi",
        timing: "Dans 5 jours maximum",
        purpose: "Accompagner dans la recherche de solutions"
      }
    },
    support: {
      followUp: {
        frequency: "Tous les 5 jours",
        focus: "Solutions concrètes pour compléter le financement"
      }
    }
  },

  enhancedClosingSection: {
    rhythm: {
      type: "metronome",
      implementation: "Ralentir progressivement le débit",
      purpose: "Diminuer le stress et la pression"
    },
    positioning: {
      approach: "À côté, pas contre",
      implementation: "Validation continue des efforts"
    },
    urgency: {
      creation: {
        natural: "Basée sur la réalité du prospect",
        artificial: "Éviter la pression artificielle"
      }
    }
  },

  financialExplorationQuestions: [
    {
      category: "Compte courant",
      mainQuestion:
        "Concrètement aujourd'hui, tu as combien sur ton compte bancaire ?",
      followUp:
        "Cette somme-là, elle va servir à quoi exactement ?"
    },
    {
      category: "Épargne",
      mainQuestion:
        "Est-ce que tu as quelque chose d'autre qui est mis de côté ?",
      followUp:
        "Comme un matelas de sécurité par exemple ?"
    },
    {
      category: "Ressources alternatives",
      questions: [
        "Est-ce que tu as des choses que tu pourrais vendre ?",
        "Est-ce qu'il y a des personnes qui pourraient t'aider ?",
        "Est-ce que tu as pensé à d'autres solutions ?"
      ]
    }
  ],

  partnerObjectionSystem: {
    validation: {
      initialCheck: {
        question:
          "Est-ce que déjà par rapport à ce que je t'ai présenté, est-ce que ça te correspond ?",
        purpose:
          "Isoler l'objection partenaire de la validation du programme."
      },
      partnerAwareness: {
        question:
          "Est-ce que [partenaire] est au courant de ta démarche ?",
        followUp: {
          ifYes: "Qu'est-ce qu'il/elle en pense ?",
          ifNo:
            "Qu'est-ce qui t'a empêché d'en parler ?"
        }
      }
    },

    approachTypes: {
      logistical: {
        identifier:
          "C'est juste pour voir la partie logistique avec lui/elle ?",
        handling: {
          step1: "Proposer un premier versement",
          step2: "Fixer un délai court pour la suite",
          step3: "Maintenir la pression positive"
        }
      },

      approval: {
        identifier:
          "Tu as besoin de son approbation pour avancer ?",
        handling: {
          mainApproach:
            "Responsabilisation du prospect",
          questions: [
            "Quand tu as commencé à souffrir de [situation], tu lui as demandé la permission ?",
            "Ce programme est d'abord pour TOI, pour te donner les outils."
          ]
        }
      },

      validation: {
        identifier:
          "Tu ne peux pas prendre la décision seul(e) ?",
        handling: {
          step1: "Proposer un R3",
          step2: "Préparer une présentation adaptée",
          step3: "Fixer un délai précis"
        }
      }
    },

    closingStrategies: {
      logistical: {
        approach: "Premier versement + délai court",
        script:
          "On peut démarrer avec un premier versement de X€ et voir ensemble dans les prochains jours pour le reste."
      },

      approval: {
        approach:
          "Responsabilisation + action immédiate",
        script:
          "C'est ta vie, ta décision. On peut commencer maintenant et [partenaire] verra les résultats positifs."
      },

      validation: {
        approach: "R3 structuré",
        script:
          "Je vous propose qu'on se retrouve tous les trois [date proche], je répondrai à toutes les questions."
      }
    },

    supportMechanisms: {
      partnerInclusion: {
        timing: "Post-démarrage",
        approach:
          "Montrer les premiers résultats.",
        purpose:
          "Créer l'adhésion naturelle."
      },

      followUp: {
        frequency: "3-5 jours maximum",
        focus:
          "Maintenir la motivation et l'engagement."
      }
    }
  },

  mythoDetectionSystem: {
    principles: {
      base: "Tout le monde est un mytho jusqu'à preuve du contraire.",
      verification: {
        step1: "Traiter l'objection comme présentée.",
        step2: "Observer les incohérences.",
        step3: "Adapter la stratégie selon les observations."
      }
    },

    redFlags: {
      inconsistencies: [
        "Changement fréquent d'objection.",
        "Réponses évasives aux questions directes.",
        "Manque de précision dans les détails financiers.",
        "Engagement verbal fort sans action concrète."
      ],
      responses: {
        type1: "Approfondir le questionnement.",
        type2: "Proposer un R3 de validation.",
        type3: "Fixer des délais courts et précis."
      }
    }
  },

  financialObjectionSystem: {
    initialExploration: {
      currentSituation: {
        questions: [
          {
            primary:
              "Concrètement aujourd'hui, tu as combien sur ton compte bancaire ?",
            followUp:
              "Cette somme-là, elle va servir à quoi exactement ?"
          },
          {
            primary:
              "Est-ce que tu as un matelas de sécurité mis de côté ?",
            followUp:
              "À combien s'élève-t-il ?"
          }
        ],
        purpose:
          "Établir une image claire de la situation financière réelle."
      },

      psychologicalExploration: {
        questions: [
          "Si l'argent n'était pas un problème, tu démarrerais aujourd'hui ?",
          "Qu'est-ce qui te fait le plus peur dans cet investissement ?"
        ],
        purpose:
          "Distinguer l'objection financière réelle des peurs sous-jacentes."
      }
    },

    solutionFramework: {
      partialAvailability: {
        conditions: {
          minimum: "40-50% du montant total",
          attitude: "Profil action-oriented confirmé",
          situation: "Capacité démontrée à trouver des solutions"
        },
        approach: {
          step1: {
            action: "Proposer démarrage partiel",
            script:
              "On peut démarrer avec ce que tu as aujourd'hui (X€) et travailler ensemble sur la suite."
          },
          step2: {
            action: "Fixer rendez-vous de suivi",
            timing: "5 jours maximum",
            purpose:
              "Accompagnement actif dans la recherche de solutions."
          }
        }
      },

      noAvailability: {
        exploration: {
          alternatives: [
            "Vente d'objets de valeur",
            "Soutien familial",
            "Réorganisation budgétaire",
            "Revenus supplémentaires potentiels"
          ],
          questions: [
            "Qu'est-ce que tu pourrais vendre rapidement ?",
            "Qui dans ton entourage pourrait t'aider ?",
            "Quelles dépenses pourrais-tu réduire temporairement ?"
          ]
        },
        support: {
          followUp: "Rendez-vous dans 3-5 jours.",
          purpose:
            "Vérification des actions entreprises."
        }
      }
    },

    closingStrategies: {
      valueFraming: {
        daily: "Ramener l'investissement à un coût journalier.",
        comparison: "Comparer à des dépenses quotidiennes.",
        future: "Projeter le coût de l'inaction."
      },

      urgencyCreation: {
        natural: {
          based:
            "Situation actuelle du prospect.",
          implementation:
            "Utiliser leurs propres mots et objectifs."
        },
        artificial: {
          avoid:
            "Pression commerciale artificielle.",
          focus:
            "Conséquences réelles de l'inaction."
        }
      }
    }
  },

  rhythmManagementSystem: {
    pacing: {
      principle: "Ralentir comme un métronome.",
      implementation: {
        voice: {
          tone: "Baisser progressivement.",
          speed: "Ralentir le débit.",
          volume: "Diminuer graduellement."
        },
        silences: {
          strategic: [
            "Après une question importante.",
            "Pendant la réflexion du prospect.",
            "Avant une révélation importante."
          ],
          duration: {
            short: "2-3 secondes.",
            medium: "5-7 secondes.",
            long: "10 secondes maximum."
          }
        }
      }
    },

    pressureManagement: {
      positive: {
        creation: {
          based: "Situation réelle du prospect.",
          focus: "Conséquences de l'inaction.",
          implementation:
            "Questions de projection."
        },
        maintenance: {
          through: "Validation continue.",
          support: "Accompagnement bienveillant.",
          direction: "Guidage vers la solution."
        }
      },

      positioning: {
        principle: "À côté, pas contre.",
        implementation: {
          verbal: [
            "Utilisation du 'nous'.",
            "Validation des efforts.",
            "Reconnaissance des difficultés."
          ],
          nonVerbal: [
            "Ton bienveillant.",
            "Rythme adapté.",
            "Silences stratégiques."
          ]
        }
      }
    }
  },

  emotionalAnchoringSystem: {
    projectionExercises: {
      negative: {
        questions: [
          "Comment te sens-tu dans 6 mois si rien ne change ?",
          "Quel impact aura cette situation sur [point sensible] ?",
          "Qu'est-ce que ça coûte de ne rien faire ?"
        ],
        purpose:
          "Créer l'inconfort de l'inaction."
      },

      positive: {
        questions: [
          "Comment te vois-tu après avoir résolu [problème] ?",
          "Quel impact positif cela aura sur [situation] ?",
          "Comment te sentiras-tu en ayant atteint [objectif] ?"
        ],
        purpose:
          "Créer la vision du changement possible."
      }
    },

    emotionalTransition: {
      from: {
        fear: "Peur du changement.",
        doubt: "Doutes sur la capacité.",
        hesitation: "Hésitation à investir."
      },
      to: {
        confidence: "Confiance en la solution.",
        certainty: "Certitude d'action.",
        commitment: "Engagement dans le changement."
      },
      through: {
        validation: "Des émotions actuelles.",
        support: "Dans la transition.",
        guidance: "Vers la solution."
      }
    }
  },

  finalClosingSystem: {
    decisionValidation: {
      checkpoints: {
        emotional: {
          questions: [
            "Comment tu te sens par rapport à cette décision ?",
            "Qu'est-ce qui te fait le plus plaisir dans le fait de commencer ?"
          ],
          purpose:
            "Confirmer l'alignement émotionnel."
        },
        logical: {
          questions: [
            "Est-ce que tout est clair pour toi dans le programme ?",
            "As-tu toutes les informations dont tu as besoin ?"
          ],
          purpose:
            "Valider la compréhension complète."
        },
        practical: {
          questions: [
            "Comment tu vois les premières semaines se dérouler ?",
            "Qu'est-ce que tu aimerais accomplir en premier ?"
          ],
          purpose:
            "Projeter dans l'action immédiate."
        }
      },

      resistanceHandling: {
        lastMinute: {
          signs: [
            "Hésitation soudaine.",
            "Questions répétitives.",
            "Retour sur des points déjà validés."
          ],
          response: {
            approach:
              "Retour aux motivations profondes.",
            script:
              "Je comprends ton hésitation. Rappelle-toi pourquoi tu es là aujourd'hui...",
            focus:
              "Reconnecter avec l'émotion initiale."
          }
        }
      }
    },

    paymentTransition: {
      preparation: {
        mental: {
          steps: [
            "Confirmer la décision.",
            "Valider le mode de paiement.",
            "Expliquer le processus."
          ],
          purpose:
            "Créer un chemin clair vers le paiement."
        },
        practical: {
          verification: [
            "Disponibilité des fonds.",
            "Plafond de carte suffisant.",
            "Alternatives de paiement prêtes."
          ]
        }
      },

      execution: {
        steps: {
          step1: {
            action: "Envoi du lien de paiement",
            script:
              "Je t'envoie le lien maintenant sur WhatsApp."
          },
          step2: {
            action: "Confirmation de réception",
            script:
              "Tu peux me confirmer que tu l'as bien reçu ?"
          },
          step3: {
            action: "Accompagnement pendant le paiement",
            script:
              "Je reste en ligne avec toi pendant que tu procèdes au paiement."
          }
        },
        troubleshooting: {
          technical: {
            issues: [
              "Lien non reçu.",
              "Erreur de paiement.",
              "Problème de connexion."
            ],
            solutions: {
              primary: "Envoi par SMS.",
              secondary: "Paiement par téléphone.",
              tertiary: "Support technique direct."
            }
          }
        }
      }
    },

    postPaymentSystem: {
      immediateValidation: {
        celebration: {
          approach: "Validation émotionnelle immédiate.",
          script:
            "Félicitations ! Tu viens de prendre la meilleure décision pour toi et ton avenir.",
          purpose:
            "Renforcer la décision."
        },

        nextSteps: {
          immediate: [
            "Confirmation par email.",
            "Accès plateforme.",
            "Premier rendez-vous Coach Care."
          ],
          explanation: {
            detail:
              "Explication claire du processus.",
            timing:
              "Délais précis pour chaque étape."
          }
        }
      },

      coachCareTransition: {
        scheduling: {
          urgency: {
            principle:
              "Premier rendez-vous rapide.",
            implementation:
              "Proposition de créneaux sous 24-48h."
          },
          options: {
            presentation: {
              primary:
                "Demain à [heure].",
              secondary:
                "Après-demain à [heure].",
              flexibility:
                "Adaptation aux contraintes client."
            }
          }
        },

        preparation: {
          client: {
            instructions: [
              "Accès plateforme.",
              "Documents préparatoires.",
              "Points à réfléchir."
            ],
            purpose:
              "Maximiser l'efficacité du premier appel."
          },
          team: {
            briefing: {
              content: [
                "Situation client.",
                "Points sensibles.",
                "Objectifs prioritaires."
              ],
              purpose:
                "Assurer une transition fluide."
            }
          }
        }
      },

      supportMechanisms: {
        immediate: {
          channels: [
            "WhatsApp prioritaire.",
            "Email de bienvenue.",
            "SMS de confirmation."
          ],
          purpose:
            "Maintenir le contact et la confiance."
        },

        followUp: {
          timing: "24h après inscription.",
          content: {
            check: "Réception des accès.",
            support: "Questions éventuelles.",
            reminder:
              "Premier rendez-vous Coach Care."
          }
        }
      }
    },

    specialCasesSystem: {
      buyerRemorse: {
        prevention: {
          during: {
            call: [
              "Validation continue.",
              "Ancrage des motivations.",
              "Confirmation des bénéfices."
            ]
          },
          after: {
            payment: [
              "Célébration immédiate.",
              "Projection positive.",
              "Prochaines étapes claires."
            ]
          }
        },

        handling: {
          if: {
            occurs: {
              approach:
                "Écoute active et empathie.",
              response: {
                step1: "Validation des inquiétudes.",
                step2: "Rappel des motivations.",
                step3: "Projection dans les résultats."
              }
            }
          }
        }
      }
    }
  },

  // Intégration complète de tous les systèmes
  OBJECTION_HANDLING_SYSTEM: {
    validateObjectionType: {
      step1: "Traiter comme logistique",
      step2: "Vérifier la réaction",
      rule: "Tout le monde est un mytho jusqu'à preuve du contraire."
    },

    financialPatterns: {
      partialPayment: {
        conditions: [
          "Forte motivation identifiée",
          "Une partie du montant disponible",
          "Profil action-oriented"
        ],
        strategy: {
          firstStep: "2000€ première mensualité",
          timeline: "2-3 semaines pour trouver le reste",
          support: "Accompagnement actif dans la recherche de solutions"
        }
      },
      noMoneyAvailable: {
        approach: [
          {
            step: 1,
            action: "Explorer compte courant",
            question:
              "Concrètement, aujourd'hui tu as combien sur ton compte bancaire ?"
          },
          {
            step: 2,
            action: "Identifier épargne",
            question:
              "Est-ce que tu as quelque chose d'autre mis de côté ?"
          },
          {
            step: 3,
            action: "Explorer ressources alternatives",
            questions: [
              "Est-ce que tu as des choses que tu pourrais vendre ?",
              "Est-ce qu'il y a des personnes qui pourraient t'aider ?"
            ]
          }
        ]
      }
    },

    closingTechniques: {
      rhythmControl: {
        principle: "Ralentir comme un métronome",
        implementation: [
          "Utiliser plus de silences",
          "Baisser le ton de la voix",
          "Ralentir le débit"
        ]
      },
      positioning: {
        principle: "Être à côté, pas contre",
        implementation: "Passer sa main symboliquement par-dessus l'épaule"
      }
    },

    enhancedObjectionHandling: {
      reflection: {
        initialResponse:
          "Je comprends ce besoin de réflexion. [PAUSE] Laisse-moi te poser une question...",
        deepDive: {
          timeQuestion:
            "Depuis combien de temps exactement réfléchis-tu à cette situation ?",
          changeQuestion:
            "Qu'est-ce qui pourrait changer dans les prochains jours qui n'a pas changé ces derniers mois ?"
        }
      },
      partner: {
        types: {
          approval: {
            check: "Si elle te dit non, tu démarres pas ?",
            handling: "Proposer un R3 (Rendez-vous à trois)"
          },
          logistics: {
            check: "C'est juste pour aligner vos finances ?",
            handling: "Proposer un premier versement d'engagement"
          },
          validation: {
            check: "Tu n'es pas décisionnaire ?",
            handling: "Organiser une présentation conjointe"
          }
        }
      }
    },

    doubleCheckSystem: {
      purpose: "Vérifier que ce n'est pas un mytho",
      implementation: {
        step1: "Traiter l'objection comme présentée.",
        step2: "Observer les incohérences dans les réponses.",
        conclusion: {
          ifConsistent:
            "Poursuivre selon le type identifié.",
          ifInconsistent:
            "Réévaluer et adapter l'approche."
        }
      }
    }
  },

  PARTIAL_PAYMENT_HANDLING: {
    qualification: {
      mustHave: [
        "Motivation claire",
        "Capacité d'action démontrée",
        "Une partie du montant disponible"
      ]
    },
    process: {
      step1: {
        action: "Proposer démarrage partiel",
        text:
          "Chaima : \"Exceptionnellement, je peux te proposer de démarrer avec une première mensualité de 2000€...\"",
        conditions: "Seulement si profil action-oriented confirmé."
      },
      step2: {
        action: "Fixer rendez-vous de suivi",
        timing: "Dans 5 jours maximum",
        purpose: "Accompagner dans la recherche de solutions."
      }
    },
    support: {
      followUp: {
        frequency: "Tous les 5 jours",
        focus: "Solutions concrètes pour compléter le financement."
      }
    }
  },

  ENHANCED_CLOSING_SECTION: {
    rhythm: {
      type: "metronome",
      implementation: "Ralentir progressivement le débit.",
      purpose: "Diminuer le stress et la pression."
    },
    positioning: {
      approach: "À côté, pas contre.",
      implementation: "Validation continue des efforts."
    },
    urgency: {
      creation: {
        natural: "Basée sur la réalité du prospect.",
        artificial: "Éviter la pression artificielle."
      }
    }
  },

  // Section additionnelle pour FINANCIAL_EXPLORATION_QUESTIONS

FINANCIAL_EXPLORATION_QUESTIONS: [
  {
    category: "Compte courant",
    mainQuestion: "Concrètement aujourd'hui, tu as combien sur ton compte bancaire ?",
    followUp: "Cette somme-là, elle va servir à quoi exactement ?"
  },
  {
    category: "Épargne",
    mainQuestion: "Est-ce que tu as quelque chose d'autre qui est mis de côté ?",
    followUp: "Comme un matelas de sécurité par exemple ?"
  },
  {
    category: "Ressources alternatives",
    questions: [
      "Est-ce que tu as des choses que tu pourrais vendre ?",
      "Est-ce qu'il y a des personnes qui pourraient t'aider ?",
      "Est-ce que tu as pensé à d'autres solutions ?"
    ]
  }
],

PARTNER_OBJECTION_SYSTEM: {
  validation: {
    initialCheck: {
      question: "Est-ce que déjà par rapport à ce que je t'ai présenté, est-ce que ça te correspond ?",
      purpose: "Isoler l'objection partenaire de la validation du programme."
    },
    partnerAwareness: {
      question: "Est-ce que [partenaire] est au courant de ta démarche ?",
      followUp: {
        ifYes: "Qu'est-ce qu'il/elle en pense ?",
        ifNo: "Qu'est-ce qui t'a empêché d'en parler ?"
      }
    }
  },

  approachTypes: {
    logistical: {
      identifier: "C'est juste pour voir la partie logistique avec lui/elle ?",
      handling: {
        step1: "Proposer un premier versement",
        step2: "Fixer un délai court pour la suite",
        step3: "Maintenir la pression positive"
      }
    },

    approval: {
      identifier: "Tu as besoin de son approbation pour avancer ?",
      handling: {
        mainApproach: "Responsabilisation du prospect",
        questions: [
          "Quand tu as commencé à souffrir de [situation], tu lui as demandé la permission ?",
          "Ce programme est d'abord pour TOI, pour te donner les outils."
        ]
      }
    },

    validation: {
      identifier: "Tu ne peux pas prendre la décision seul(e) ?",
      handling: {
        step1: "Proposer un R3",
        step2: "Préparer une présentation adaptée",
        step3: "Fixer un délai précis"
      }
    }
  },

  closingStrategies: {
    logistical: {
      approach: "Premier versement + délai court",
      script: "On peut démarrer avec un premier versement de X€ et voir ensemble dans les prochains jours pour le reste."
    },

    approval: {
      approach: "Responsabilisation + action immédiate",
      script: "C'est ta vie, ta décision. On peut commencer maintenant et [partenaire] verra les résultats positifs."
    },

    validation: {
      approach: "R3 structuré",
      script: "Je vous propose qu'on se retrouve tous les trois [date proche], je répondrai à toutes les questions."
    }
  },

  supportMechanisms: {
    partnerInclusion: {
      timing: "Post-démarrage",
      approach: "Montrer les premiers résultats.",
      purpose: "Créer l'adhésion naturelle."
    },

    followUp: {
      frequency: "3-5 jours maximum",
      focus: "Maintenir la motivation et l'engagement."
    }
  }
},

// Closing et intégration finale des sous-systèmes
mythoDetectionSystem: {
  principles: {
    base: "Tout le monde est un mytho jusqu'à preuve du contraire.",
    verification: {
      step1: "Traiter l'objection comme présentée.",
      step2: "Observer les incohérences.",
      step3: "Adapter la stratégie selon les observations."
    }
  },

  redFlags: {
    inconsistencies: [
      "Changement fréquent d'objection.",
      "Réponses évasives aux questions directes.",
      "Manque de précision dans les détails financiers.",
      "Engagement verbal fort sans action concrète."
    ],
    responses: {
      type1: "Approfondir le questionnement.",
      type2: "Proposer un R3 de validation.",
      type3: "Fixer des délais courts et précis."
    }
  }
},

// Fin de la section PARTNER_OBJECTION_SYSTEM et validation complète

// Ajoutez la fermeture de l'objet principal ici
}; // Fermeture correcte de l'objet principal