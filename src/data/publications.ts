export type Publication = {
  id: string;
  originalTitle: string;
  englishTitle: string;
  originalVenue: string;
  englishVenue?: string;
  publisher?: string;
  bibliography: string;
};

export const publications: Publication[] = [
  {
    id: 'balanced-networks-model',
    originalTitle: 'The Model of Balanced Networks for the Design of Access Networks',
    englishTitle: 'The Model of Balanced Networks for the Design of Access Networks',
    originalVenue: 'Modern problems of radio engineering, telecommunications and computer science”. Proceedings of the ХІth International Conference TCSET’2012',
    bibliography: '2012. Lviv: Publishing House of Lviv Polytechnic. P. 368.',
  },
  {
    id: 'automated-topology-synthesis',
    originalTitle: 'Автоматизована процедура синтезу топологічної структури мережі доступу',
    englishTitle: 'Automated Synthesis of an Access Network Topology',
    originalVenue: 'Холодильна техніка і технологія',
    englishVenue: 'Refrigeration Engineering and Technology. Odesa.',
    bibliography: '2013. No. 2 (142). P. 80–83.',
  },
  {
    id: 'balanced-network-applicability',
    originalTitle: 'Анализ возможности использования модели балансных сетей при проектировании сетей доступа',
    englishTitle: 'Analysis of the Applicability of the Balanced Network Model to Access Network Design',
    originalVenue: 'International Journal “Information Theories and Knowledge”',
    englishVenue: 'International Journal “Information Theories and Knowledge”',
    publisher: 'Sofia: ITHEA',
    bibliography: '2012. No. 2, Vol. 6. P. 126–130.',
  },
  {
    id: 'access-network-topology-selection',
    originalTitle: 'Задача выбора топологической структуры сети доступа',
    englishTitle: 'Selection of an Access Network Topology',
    originalVenue: 'International Journal “INFORMATION MODELS&ANALYSES”',
    englishVenue: 'International Journal “INFORMATION MODELS&ANALYSES”',
    publisher: 'Sofia: ITHEA',
    bibliography: '2013. Vol. 2. P. 252–261.',
  },
  {
    id: 'orthogonal-access-network-software',
    originalTitle: 'Программная реализация проектируемой ортогональной сети доступа',
    englishTitle: 'Software Implementation of the Designed Orthogonal Access Network',
    originalVenue: 'К.: Інститут кібернетики ім. В.М. Глушкова НАН України',
    englishVenue: 'V. M. Glushkov Institute of Cybernetics, National Academy of Sciences of Ukraine, Kyiv',
    bibliography: '2012. P. 143–150.',
  },
  {
    id: 'access-node-locations-software',
    originalTitle: 'Програмна реалізація визначення найбільш доцільних місць розташування вузлів доступу',
    englishTitle: 'Software Implementation for Determining Optimal Access Node Locations',
    originalVenue: 'К.:Зв’язок',
    englishVenue: 'Zviazok, Kyiv',
    bibliography: '2013. No. 1 (101). P. 36–41.',
  },
  {
    id: 'access-network-design-methodology',
    originalTitle: 'Разработка методики проектирования сетей доступа',
    englishTitle: 'Development of an Access Network Design Methodology',
    originalVenue: 'Сучасний захист інформації. ДУІКТ',
    englishVenue: 'Modern Information Security, DUIKT',
    bibliography: '2013. No. 1. P. 81–86.',
  },
];
