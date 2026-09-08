export type Lang = 'en' | 'ru';
export const copy = {
  en: {
    nav: { home:'Home', experience:'Experience', projects:'Projects', articles:'Articles', resume:'Resume', contact:'Contact' },
    role:'Senior iOS Developer', availability:'Open to remote work and relocation',
    intro:'12 years in commercial mobile development, including 7 years specializing in iOS. Focused on performance, architecture, concurrency, and reliable production systems.',
    impact:'Selected impact', impactIntro:'Measured outcomes from production engineering work.',
    bring:'What I bring', focus:'Technical focus', featured:'Featured engineering cases', viewAll:'View all projects', readCase:'Read case study',
    nda:'Some commercial products cannot be publicly demonstrated due to NDA restrictions. Permitted architecture, performance and implementation details can be discussed during interviews.',
    footer:'Senior iOS Developer · Samara, Russia', draft:'Draft outline', contactTitle:'Let’s discuss engineering work', contactBody:'For Senior iOS roles, technical consulting, or a focused conversation about mobile performance and architecture, contact me directly.',
    download:'Download PDF résumé', experienceTitle:'Experience', projectsTitle:'Engineering projects', articlesTitle:'Articles', resumeTitle:'Résumé',
  },
  ru: {
    nav: { home:'Главная', experience:'Опыт', projects:'Проекты', articles:'Статьи', resume:'Резюме', contact:'Контакты' },
    role:'Senior iOS-разработчик', availability:'Открыт к удаленной работе и релокации',
    intro:'12 лет в коммерческой мобильной разработке, из них 7 лет — в iOS. Фокус: производительность, архитектура, многопоточность и надежность production-систем.',
    impact:'Результаты', impactIntro:'Измеримый эффект инженерной работы в production.',
    bring:'Что я привношу в команду', focus:'Технический фокус', featured:'Избранные инженерные кейсы', viewAll:'Все проекты', readCase:'Открыть кейс',
    nda:'Часть коммерческих продуктов не может быть продемонстрирована публично из-за NDA. Допустимые детали архитектуры, оптимизации производительности и реализации могут быть обсуждены на интервью.',
    footer:'Senior iOS-разработчик · Россия, Самара', draft:'Черновой план', contactTitle:'Обсудим инженерные задачи', contactBody:'По вопросам Senior iOS-позиций, технического консалтинга или обсуждения производительности и архитектуры мобильных приложений напишите мне напрямую.',
    download:'Скачать PDF-резюме', experienceTitle:'Опыт работы', projectsTitle:'Инженерные проекты', articlesTitle:'Статьи', resumeTitle:'Резюме',
  }
} as const;
