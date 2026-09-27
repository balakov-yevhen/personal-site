// assets/js/i18n.js
// Локализации + статические данные (скиллы/проекты/опыт/образование/сертификаты)
// Экспорт: window.I18N, SKILLS, PROJECTS, EXPERIENCE, EDUCATION, CERTS, CERTIFICATIONS, ACHIEVEMENTS, STRENGTHS
(function (global) {
  'use strict';

const I18N = {
  en: {
    nav:{ achievements:'Achievements', projects:'Projects', api:'API Demo', experience:'Experience', strengths:'Strengths', education:'Education', skills:'Skills', contact:'Contact' },
    hero:{
      badge:'.NET • ASP.NET Core • AI Integration • Azure AI • OpenAI',
      title:'Senior Software Engineer · .NET / Full-Stack · AI Integration',
      subtitle:  'Senior Software Engineer with 7+ years in .NET and 10+ years overall in software and web development. Backend-first (C#, ASP.NET Core, EF Core, SQL) with proven full-stack ownership and a focus on bringing AI into production systems. Current focus: production LLM solutions with OpenAI and Azure AI. I work at the intersection of technology and business and, as a Scrum Facilitator (PSM I), help shape team processes. In the medium term I see myself as a Tech Lead / AI Engineering Lead. Based in Lübeck, Hamburg region. English C1, German B1/B2.'
    },
	cta:{ viewProjects:'View Projects', downloadResume:'Download CV' },
    ach:{ h:'Key Achievements' },
    projects:{ h:'Selected Projects', lead:'A few representative projects. Details on request.', all:'All' },
    api:{
      h:'API Demo',
      lead:'Interactive mock of my ASP.NET endpoints: health check, currency calculator, file generation.',
      health:{ h:'Live API status', lead:'Simulated /api/health endpoint with latency and version.', refresh:'Check status' },
      fx:{ h:'Currency calculator', lead:'Mock /api/calc/forex: converts via mocked rates (base USD).', refresh:'Refresh rates' },
      rep:{ h:'Generate report', lead:'Mock /api/report/pdf and /api/report/csv: downloads a generated file.', csv:'Download CSV', pdf:'Download PDF' }
    },
    exp:{ h:'Experience' },
    str:{ h:'Strengths' },
    edu:{ h:'Education' },
    certs:{ h:'Certifications & Courses', view:'View', verify:'Verify' },
    skills:{ h:'Skills' },
    contact:{ h:'Contact', lead:'Open to Senior .NET / AI Engineering roles. I’d be happy to hear from you.' },
    footer:'I don’t collect personal data or use tracking cookies on this site. Nothing you type is saved, and no consent banner is required. Enjoy the site freely.'
  },

  de: {
    nav:{ achievements:'Erfolge', projects:'Projekte', api:'API-Demo', experience:'Erfahrung', strengths:'Stärken', education:'Ausbildung', skills:'Fähigkeiten', contact:'Kontakt' },
    hero:{
      badge:'.NET • ASP.NET Core • AI-Integration • Azure AI • OpenAI',
      title:'Senior Software Engineer · .NET / Full-Stack · AI-Integration',
      subtitle:  'Senior Software Engineer mit über 7 Jahren in der .NET-Entwicklung und über 10 Jahren Gesamterfahrung in der Software- und Web-Entwicklung. Backend-first (C#, ASP.NET Core, EF Core, SQL) mit nachweislicher Full-Stack-Ownership und Schwerpunkt auf der Integration von AI in produktive Systeme. Aktueller Fokus: produktive LLM-Lösungen mit OpenAI und Azure AI. Ich arbeite an der Schnittstelle zwischen Technik und Business und gestalte als Scrum Facilitator (PSM I) Teamprozesse aktiv mit. Mittelfristig sehe ich mich als Tech Lead bzw. AI Engineering Lead. Wohnhaft in Lübeck, Region Hamburg. Englisch C1, Deutsch B1/B2.'
    },
	cta:{ viewProjects:'Projekte ansehen', downloadResume:'Lebenslauf herunterladen' },
    ach:{ h:'Wichtigste Erfolge' },
    projects:{ h:'Ausgewählte Projekte', lead:'Einige repräsentative Arbeiten. Details auf Anfrage.', all:'Alle' },
    api:{
      h:'API-Demo',
      lead:'Interaktive Mock-Endpoints: Health-Check, Währungsrechner, Dateigenerierung.',
      health:{ h:'Live-Status', lead:'Simuliertes /api/health mit Latenz und Version.', refresh:'Status prüfen' },
      fx:{ h:'Währungsrechner', lead:'Mock /api/calc/forex: Umrechnung über fiktive Kurse (Basis USD).', refresh:'Kurse aktualisieren' },
      rep:{ h:'Bericht generieren', lead:'Mock /api/report/pdf und /api/report/csv: Download einer Datei.', csv:'CSV herunterladen', pdf:'PDF herunterladen' }
    },
    exp:{ h:'Erfahrung' },
    str:{ h:'Stärken' },
    edu:{ h:'Ausbildung' },
    certs:{ h:'Zertifikate & Kurse', view:'Ansehen', verify:'Verifizieren' },
    skills:{ h:'Kompetenzen' },
    contact:{ h:'Kontakt', lead:'Offen für Senior-.NET-/AI-Engineering-Rollen. Ich freue mich auf Ihre Nachricht.' },
    footer:'Ich erhebe keine personenbezogenen Daten und verwende keine Tracking-Cookies. Ihre Eingaben werden nicht gespeichert; kein Cookie-Banner nötig. Viel Spaß beim Stöbern.'
  },

  uk: {
    nav:{ achievements:'Досягнення', projects:'Проєкти', api:'API-Демо', experience:'Досвід', strengths:'Сильні сторони', education:'Освіта', skills:'Навички', contact:'Контакти' },
    hero:{
      badge:'.NET • ASP.NET Core • AI-інтеграція • Azure AI • OpenAI',
      title:'Senior Software Engineer · .NET / Full-Stack · AI-інтеграція',
      subtitle:  'Senior Software Engineer з понад 7 роками в .NET і понад 10 роками загального досвіду в розробці ПЗ та веб-розробці. Backend-first (C#, ASP.NET Core, EF Core, SQL) з підтвердженою full-stack відповідальністю та фокусом на інтеграції AI у продуктивні системи. Поточний фокус: продуктивні LLM-рішення на OpenAI та Azure AI. Працюю на стику технологій і бізнесу, а як Scrum Facilitator (PSM I) активно формую командні процеси. У середньостроковій перспективі бачу себе Tech Lead / AI Engineering Lead. Базуюся в Любеку, регіон Гамбург. Англійська C1, німецька B1/B2.'
    },
	cta:{ viewProjects:'Переглянути проєкти', downloadResume:'Завантажити резюме' },
    ach:{ h:'Ключові досягнення' },
    projects:{ h:'Обрані проєкти', lead:'Кілька показових робіт. Деталі за запитом.', all:'Усі' },
    api:{
      h:'API-Демо',
      lead:'Інтерактивний мок: health, конвертація валют, генерація файлів.',
      health:{ h:'Статус API', lead:'Симуляція /api/health з латентністю і версією.', refresh:'Перевірити' },
      fx:{ h:'Конвертер валют', lead:'Mock /api/calc/forex (база USD).', refresh:'Оновити курси' },
      rep:{ h:'Згенерувати звіт', lead:'Mock /api/report/pdf та /api/report/csv.', csv:'Завантажити CSV', pdf:'Завантажити PDF' }
    },
    exp:{ h:'Досвід' },
    str:{ h:'Сильні сторони' },
    edu:{ h:'Освіта' },
    certs:{ h:'Сертифікати та курси', view:'Переглянути', verify:'Перевірити' },
    skills:{ h:'Навички' },
    contact:{ h:'Контакти', lead:'Відкритий до ролей Senior .NET / AI Engineering. Буду радий вашим повідомленням.' },
    footer:'Я не збираю персональні дані й не використовую трекінг-куки. Введені вами дані не зберігаються, банер згоди не потрібен. Користуйтеся сайтом вільно.'
  },

  ru: {
    nav:{ achievements:'Достижения', projects:'Проекты', api:'API-демо', experience:'Опыт', strengths:'Сильные стороны', education:'Образование', skills:'Навыки', contact:'Контакты' },
    hero:{
      badge:'.NET • ASP.NET Core • AI-интеграция • Azure AI • OpenAI',
      title:'Senior Software Engineer · .NET / Full-Stack · AI-интеграция',
      subtitle:  'Senior Software Engineer с более чем 7 годами в .NET и более чем 10 годами общего опыта в разработке ПО и веб-разработке. Backend-first (C#, ASP.NET Core, EF Core, SQL) с подтверждённой full-stack ответственностью и фокусом на интеграции AI в производственные системы. Текущий фокус: production LLM-решения на OpenAI и Azure AI. Работаю на стыке технологий и бизнеса, а как Scrum Facilitator (PSM I) активно формирую командные процессы. В среднесрочной перспективе вижу себя Tech Lead / AI Engineering Lead. Базируюсь в Любеке, регион Гамбург. Английский C1, немецкий B1/B2.'
    },
	cta:{ viewProjects:'Смотреть проекты', downloadResume:'Скачать резюме' },
    ach:{ h:'Ключевые достижения' },
    projects:{ h:'Избранные проекты', lead:'Несколько показательных работ. Детали по запросу.', all:'Все' },
    api:{
      h:'API-демо',
      lead:'Интерактивный мок: health-check, конвертер валют, генерация файлов.',
      health:{ h:'Статус API', lead:'Симуляция /api/health с латентностью и версией.', refresh:'Проверить статус' },
      fx:{ h:'Конвертер валют', lead:'Mock /api/calc/forex (база USD).', refresh:'Обновить курсы' },
      rep:{ h:'Сгенерировать отчёт', lead:'Mock /api/report/pdf и /api/report/csv.', csv:'Скачать CSV', pdf:'Скачать PDF' }
    },
    exp:{ h:'Опыт' },
    str:{ h:'Сильные стороны' },
    edu:{ h:'Образование' },
    certs:{ h:'Сертификаты и курсы', view:'Открыть', verify:'Подтвердить' },
    skills:{ h:'Навыки' },
    contact:{ h:'Контакты', lead:'Открыт к ролям Senior .NET / AI Engineering. Буду рад Вашим сообщениям.' },
    footer:'Я не собираю персональные данные и не использую трекинг-cookies. Ничего из введённого не сохраняется; баннер согласия не требуется. Пользуйтесь сайтом свободно.'
  }
};



  /* ===================== STATIC LISTS ===================== */
  // Технические навыки (английские термины во всех локалях, как в CV)
const SKILLS = {
  en: [
    'C#','.NET','ASP.NET Core','Web API','MVC','Razor Pages','Entity Framework Core','LINQ','T-SQL','REST APIs','Clean Architecture','SOLID',
    'OpenAI API','Prompt Engineering','Azure AI','Document Intelligence','Azure OpenAI','LLM Pipelines','Custom Fine-Tuned Models',
    'TypeScript','JavaScript','Bootstrap','jQuery','HTML5','CSS3',
    'MS SQL Server','PostgreSQL','MySQL','Query Optimization','Power BI',
    'Microsoft Azure','App Services','Docker','Git','CI/CD','GitHub Actions','Azure DevOps','AWS',
    'Domain-Driven Design','Microservices','Event-Driven Architecture','RabbitMQ','SignalR','Distributed Logging','Serilog',
    'WPF (MVVM)','WinForms','Windows Server','Scrum Facilitation'
  ]
};
SKILLS.de = SKILLS.en;
SKILLS.uk = SKILLS.en;
SKILLS.ru = SKILLS.en;


const PROJECTS = {
  en: [
    {
      t: 'AI Document-Analysis Pipeline (FinTech SaaS)',
      d: 'AI extraction and validation pipeline for complex financial documents (bank statements) with highly inconsistent formats. Azure AI and OpenAI combined with backend-side validation against business rules; document authenticity checks; income/expense and debt-ratio calculations; Stripe billing. Over 95% accuracy on core data (internal benchmark).',
      tags: [
        'C#','.NET','ASP.NET Core','OpenAI API','Azure AI',
        'Document Intelligence','EF Core','PostgreSQL','Stripe','Background Jobs'
      ]
    },
    {
      t: 'Microservices Platform (non-profit)',
      d: 'Distributed platform on a microservice architecture: notification service, customer/user portal, event-driven communication with RabbitMQ, and end-to-end distributed logging with correlation IDs across HTTP and messaging.',
      tags: [
        'C#','.NET','ASP.NET Core','Microservices','RabbitMQ',
        'Event-Driven','REST API','Distributed Logging','Serilog'
      ]
    },
    {
      t: 'Customer / Order-Tracking Portal (ASP.NET Core MVC)',
      d: 'Internal customer portal for order tracking, order history and document access. ASP.NET Core MVC with Microsoft Identity (authentication and RBAC) and a responsive Bootstrap/jQuery frontend.',
      tags: [
        'C#','.NET','ASP.NET Core MVC','Microsoft Identity (RBAC)',
        'EF Core','SQL Server','Bootstrap','jQuery'
      ]
    },
    {
      t: 'Enterprise ERP / WMS & Logistics (WPF/.NET)',
      d: 'Five-plus years on tightly interlinked subsystems: lot-based inventory, pricing, contracts, invoices, foreign-currency payments with FX revaluation, quality documents, RBAC with audit logging, and carrier-API shipment automation. Impact: about 40% faster order processing and 60% less manual logistics work.',
      tags: [
        'C#','.NET','WPF','MVVM','EF Core','SQL Server',
        'SignalR','Excel/EPPlus','Power BI'
      ]
    },
    {
      t: 'AI-powered Document Processing (ERP add-on)',
      d: 'LLM-based extraction for invoices, delivery notes and quality/analysis certificates with multilingual localization, integrated into the ERP. Impact: about 70% less manual data entry.',
      tags: [
        'C#','.NET','ASP.NET Core','OpenAI API','EF Core','SQL Server','Docker'
      ]
    }
  ],
  de: [
    {
      t: 'AI-Dokumentenanalyse-Pipeline (FinTech-SaaS)',
      d: 'AI-basierte Extraktions- und Validierungspipeline für komplexe Finanzdokumente (Bankauszüge) mit stark uneinheitlichen Formaten. Azure AI und OpenAI kombiniert mit backend-seitiger Validierung gegen Geschäftsregeln; Authentizitätsprüfung von Dokumenten; Einkommens-/Ausgaben- und Schuldenquoten-Berechnung; Stripe-Billing. Über 95% Genauigkeit auf den Kerndaten (internes Benchmark).',
      tags: [
        'C#','.NET','ASP.NET Core','OpenAI API','Azure AI',
        'Document Intelligence','EF Core','PostgreSQL','Stripe','Background Jobs'
      ]
    },
    {
      t: 'Microservices-Plattform (Non-Profit)',
      d: 'Verteilte Plattform auf Microservice-Architektur: Notification-Service, Kunden-/User-Portal, Event-Driven-Kommunikation mit RabbitMQ und End-to-End Distributed Logging mit Correlation IDs über HTTP und Messaging.',
      tags: [
        'C#','.NET','ASP.NET Core','Microservices','RabbitMQ',
        'Event-Driven','REST API','Distributed Logging','Serilog'
      ]
    },
    {
      t: 'Kunden-/Auftragsverfolgungs-Portal (ASP.NET Core MVC)',
      d: 'Internes Kundenportal für Auftragsverfolgung, Bestellhistorie und Dokumentenzugriff. ASP.NET Core MVC mit Microsoft Identity (Authentifizierung und RBAC) und responsivem Bootstrap/jQuery-Frontend.',
      tags: [
        'C#','.NET','ASP.NET Core MVC','Microsoft Identity (RBAC)',
        'EF Core','SQL Server','Bootstrap','jQuery'
      ]
    },
    {
      t: 'Enterprise ERP / WMS & Logistik (WPF/.NET)',
      d: 'Über fünf Jahre an eng verzahnten Teilsystemen: chargenbasiertes Lager, Preisgestaltung, Verträge, Rechnungen, Fremdwährungszahlungen mit FX-Revaluation, Qualitätsdokumente, RBAC mit Audit-Logging und Carrier-API-Versandautomatisierung. Wirkung: rund 40% schnellere Auftragsbearbeitung und 60% weniger manuelle Logistikarbeit.',
      tags: [
        'C#','.NET','WPF','MVVM','EF Core','SQL Server',
        'SignalR','Excel/EPPlus','Power BI'
      ]
    },
    {
      t: 'AI-gestützte Dokumentenverarbeitung (ERP-Add-on)',
      d: 'LLM-basierte Extraktion für Rechnungen, Lieferscheine sowie Qualitäts- und Analysezertifikate mit mehrsprachiger Lokalisierung, in das ERP integriert. Wirkung: rund 70% weniger manuelle Dateneingabe.',
      tags: [
        'C#','.NET','ASP.NET Core','OpenAI API','EF Core','SQL Server','Docker'
      ]
    }
  ],
  uk: [
    {
      t: 'AI-конвеєр аналізу документів (FinTech SaaS)',
      d: 'AI-конвеєр витягання та валідації для складних фінансових документів (банківські виписки) з дуже неоднорідними форматами. Azure AI та OpenAI у поєднанні з backend-валідацією за бізнес-правилами; перевірка автентичності документів; розрахунок доходів/витрат і боргових коефіцієнтів; білінг Stripe. Понад 95% точності на ключових даних (внутрішній бенчмарк).',
      tags: [
        'C#','.NET','ASP.NET Core','OpenAI API','Azure AI',
        'Document Intelligence','EF Core','PostgreSQL','Stripe','Background Jobs'
      ]
    },
    {
      t: 'Платформа на мікросервісах (Non-Profit)',
      d: 'Розподілена платформа на мікросервісній архітектурі: notification-сервіс, портал клієнта/користувача, event-driven комунікація через RabbitMQ та наскрізне розподілене логування з correlation IDs через HTTP і messaging.',
      tags: [
        'C#','.NET','ASP.NET Core','Microservices','RabbitMQ',
        'Event-Driven','REST API','Distributed Logging','Serilog'
      ]
    },
    {
      t: 'Портал клієнта / трекінгу замовлень (ASP.NET Core MVC)',
      d: 'Внутрішній клієнтський портал для трекінгу замовлень, історії та доступу до документів. ASP.NET Core MVC з Microsoft Identity (автентифікація та RBAC) і адаптивним фронтендом на Bootstrap/jQuery.',
      tags: [
        'C#','.NET','ASP.NET Core MVC','Microsoft Identity (RBAC)',
        'EF Core','SQL Server','Bootstrap','jQuery'
      ]
    },
    {
      t: 'Enterprise ERP / WMS і логістика (WPF/.NET)',
      d: 'Понад п’ять років над тісно пов’язаними підсистемами: партійний облік, ціноутворення, договори, рахунки, валютні платежі з перерахунком за курсом, документи якості, RBAC з аудитом та автоматизація відвантажень через API перевізників. Результат: близько 40% швидше опрацювання замовлень і на 60% менше ручної логістичної роботи.',
      tags: [
        'C#','.NET','WPF','MVVM','EF Core','SQL Server',
        'SignalR','Excel/EPPlus','Power BI'
      ]
    },
    {
      t: 'AI-обробка документів (надбудова до ERP)',
      d: 'LLM-витягання для рахунків, накладних та сертифікатів якості/аналізу з багатомовною локалізацією, інтегроване в ERP. Результат: близько 70% менше ручного введення даних.',
      tags: [
        'C#','.NET','ASP.NET Core','OpenAI API','EF Core','SQL Server','Docker'
      ]
    }
  ],
  ru: [
    {
      t: 'AI-конвейер анализа документов (FinTech SaaS)',
      d: 'AI-конвейер извлечения и валидации для сложных финансовых документов (банковские выписки) с очень неоднородными форматами. Azure AI и OpenAI в связке с backend-валидацией по бизнес-правилам; проверка подлинности документов; расчёт доходов/расходов и долговых коэффициентов; биллинг Stripe. Свыше 95% точности на ключевых данных (внутренний бенчмарк).',
      tags: [
        'C#','.NET','ASP.NET Core','OpenAI API','Azure AI',
        'Document Intelligence','EF Core','PostgreSQL','Stripe','Background Jobs'
      ]
    },
    {
      t: 'Платформа на микросервисах (Non-Profit)',
      d: 'Распределённая платформа на микросервисной архитектуре: notification-сервис, портал клиента/пользователя, event-driven коммуникация через RabbitMQ и сквозное распределённое логирование с correlation IDs через HTTP и messaging.',
      tags: [
        'C#','.NET','ASP.NET Core','Microservices','RabbitMQ',
        'Event-Driven','REST API','Distributed Logging','Serilog'
      ]
    },
    {
      t: 'Портал клиента / трекинга заказов (ASP.NET Core MVC)',
      d: 'Внутренний клиентский портал для трекинга заказов, истории и доступа к документам. ASP.NET Core MVC с Microsoft Identity (аутентификация и RBAC) и адаптивным фронтендом на Bootstrap/jQuery.',
      tags: [
        'C#','.NET','ASP.NET Core MVC','Microsoft Identity (RBAC)',
        'EF Core','SQL Server','Bootstrap','jQuery'
      ]
    },
    {
      t: 'Enterprise ERP / WMS и логистика (WPF/.NET)',
      d: 'Более пяти лет над тесно связанными подсистемами: партийный учёт, ценообразование, договоры, счета, валютные платежи с курсовой переоценкой, документы качества, RBAC с аудитом и автоматизация отгрузок через API перевозчиков. Эффект: около 40% быстрее обработка заказов и на 60% меньше ручной логистической работы.',
      tags: [
        'C#','.NET','WPF','MVVM','EF Core','SQL Server',
        'SignalR','Excel/EPPlus','Power BI'
      ]
    },
    {
      t: 'AI-обработка документов (надстройка к ERP)',
      d: 'LLM-извлечение для счетов, накладных и сертификатов качества/анализа с многоязычной локализацией, интегрированное в ERP. Эффект: около 70% меньше ручного ввода данных.',
      tags: [
        'C#','.NET','ASP.NET Core','OpenAI API','EF Core','SQL Server','Docker'
      ]
    }
  ]
};

  const EXPERIENCE = {
  en: [
    { t:'Senior Software Engineer (.NET) · Stern Ukraine (FinTech SaaS client project)',
      d:'Dec 2024 - present · Remote',
      list:[
        'Lead architect of an AI extraction and validation pipeline for complex financial documents (bank statements) in a mortgage-underwriting domain, combining Azure AI and OpenAI with backend-side validation against business rules.',
        'Built a document authenticity-verification system to detect manipulated financial documents, validated together with external banking-sector partners.',
        'Developed complex income and expense calculations (monthly, annual, debt ratios) and rule-based transaction classification.',
        'Prompt engineering and optimization of LLM workflows for accuracy, latency and cost; Stripe billing and payments (subscriptions, invoices, credit model).',
        'Acting Scrum Facilitator: internal AI enablement, onboarding of colleagues, and close work with product and stakeholders on business rules.',
        'Key results: over 95% accuracy on core financial data (internal benchmark of 500+ real documents); manual processing that previously took about half a working day per document is now 5-7 minutes.',
        'Stack: ASP.NET Core, C#, OpenAI API, Azure AI / Document Intelligence, EF Core, PostgreSQL, Stripe, Background Jobs.'
      ]},
    { t:'Volunteer Senior Software Engineer (.NET) · CharityLab Foundation',
      d:'Sep 2024 - present · Remote',
      list:[
        'Designed and implemented a notification service and a customer/user portal within a microservice architecture for a non-profit platform.',
        'Applied event-driven architecture with RabbitMQ for service communication; end-to-end distributed logging with correlation IDs across HTTP and messaging.',
        'Contributed to architecture decisions on service boundaries.',
        'Stack: ASP.NET Core, C#, RabbitMQ, Microservices, REST APIs, Distributed Logging.'
      ]},
    { t:'Software Engineer (.NET) · Stern Ukraine (internal project)',
      d:'Jan 2024 - Nov 2024 · Remote',
      list:[
        'Architected and built an internal customer portal (ASP.NET Core MVC) for order tracking, order history and document access.',
        'Integrated Microsoft Identity for authentication and RBAC; responsive frontend with Bootstrap and jQuery.',
        'Key results: improved transparency for customers and internal teams; about 35% fewer status inquiries and less internal communication overhead.',
        'Stack: ASP.NET Core MVC, C#, Microsoft Identity, EF Core, MS SQL Server, Bootstrap, jQuery.'
      ]},
    { t:'Software Engineer (.NET) · Stern Ukraine (client project: Stabovita)',
      d:'Apr 2019 - Dec 2023 · Kyiv, Ukraine',
      list:[
        'Enterprise ERP / WMS and logistics systems: 5+ years on tightly interlinked subsystems supporting sales, production and distribution.',
        'ERP/WMS core: lot-based inventory, pricing, contracts, invoices, foreign-currency payments, quality documents, Microsoft Identity RBAC with audit logging. Impact: ~40% faster order processing, ~20% fewer write-offs.',
        'Shipment automation: integrated carrier APIs for automated shipment creation, tracking and customer notifications. Impact: ~60% less manual logistics work, ~20% lower logistics costs.',
        'Financial module with FX revaluation: automated exchange-rate updates and revaluation of payments and contracts. Impact: fewer financial errors, ~50% faster reporting.',
        'AI-powered document processing (add-on): LLM-based extraction for invoices, delivery notes and quality certificates with multilingual localization. Impact: ~70% less manual data entry.',
        'Stack: .NET 6-8, C#, EF Core + SQL Server, WPF/MVVM, ASP.NET Core MVC, SignalR, EPPlus/OpenXML, OpenAI API, Docker, Power BI.'
      ]},
    { t:'System Administrator / IT Infrastructure Engineer · Stern Ukraine',
      d:'Apr 2012 - Mar 2019 · Kyiv, Ukraine',
      list:[
        '7+ years responsible for the server, network and client infrastructure of an IT service provider; in parallel, a part-time second degree and .NET training, transitioning to full-time development from 2019.',
        'Administration of Windows Server and Linux systems; network infrastructure (routers, switches, firewalls, VPN); deployment and support of client hardware.',
        'Virtualization, backup concepts and disaster recovery; embedded control and monitoring projects on Atmel AVR.',
        'Stack: Windows Server, Linux, Cisco/MikroTik, VPN, virtualization, backup solutions, Atmel AVR.'
      ]}
  ],

  de: [
    { t:'Senior Software Engineer (.NET) · Stern Ukraine (FinTech-SaaS-Kundenprojekt)',
      d:'12/2024 - heute · Remote',
      list:[
        'Hauptverantwortlicher Architekt einer AI-basierten Extraktions- und Validierungspipeline für komplexe Finanzdokumente (Bankauszüge) im Bereich Hypotheken-Underwriting; Kombination aus Azure AI und OpenAI mit backend-seitiger Validierung gegen Geschäftsregeln.',
        'Entwicklung eines Systems zur Authentizitätsprüfung von Finanzdokumenten zur Erkennung manipulierter Unterlagen, verifiziert mit externen Fachpartnern aus dem Bankensektor.',
        'Komplexe Einkommens- und Ausgabenberechnungen (monatlich, jährlich, Schuldenquoten) und regelbasierte Transaktionsklassifizierung.',
        'Prompt Engineering und Optimierung von LLM-Workflows hinsichtlich Genauigkeit, Latenz und Kosten; Billing und Payments mit Stripe (Abonnements, Rechnungen, Credit-Modell).',
        'Acting Scrum Facilitator: internes AI-Enablement, Onboarding von Kolleg:innen und enge Zusammenarbeit mit Product und Stakeholdern zu Geschäftsregeln.',
        'Key Results: über 95% Genauigkeit auf den Kern-Finanzdaten (internes Benchmark mit 500+ realen Dokumenten); manuelle Verarbeitung, die zuvor rund einen halben Arbeitstag pro Dokument dauerte, jetzt 5-7 Minuten.',
        'Stack: ASP.NET Core, C#, OpenAI API, Azure AI / Document Intelligence, EF Core, PostgreSQL, Stripe, Background Jobs.'
      ]},
    { t:'Volunteer Senior Software Engineer (.NET) · CharityLab Foundation',
      d:'09/2024 - heute · Remote',
      list:[
        'Design und Implementierung eines Notification-Services sowie eines Kunden-/User-Portals innerhalb einer Microservice-Architektur für eine gemeinnützige Plattform.',
        'Einsatz von Event-Driven Architecture mit RabbitMQ für die Service-Kommunikation; End-to-End Distributed Logging mit Correlation IDs über HTTP und Messaging.',
        'Mitwirkung an Architekturentscheidungen zu Service-Schnitten.',
        'Stack: ASP.NET Core, C#, RabbitMQ, Microservices, REST APIs, Distributed Logging.'
      ]},
    { t:'Software Engineer (.NET) · Stern Ukraine (internes Projekt)',
      d:'01/2024 - 11/2024 · Remote',
      list:[
        'Architektur und Umsetzung eines internen Kundenportals (ASP.NET Core MVC) für Auftragsverfolgung, Bestellhistorie und Dokumentenzugriff.',
        'Integration von Microsoft Identity für Authentifizierung und RBAC; responsives Frontend mit Bootstrap und jQuery.',
        'Key Results: bessere Transparenz für Kunden und interne Teams; rund 35% weniger Statusanfragen und geringerer interner Kommunikationsaufwand.',
        'Stack: ASP.NET Core MVC, C#, Microsoft Identity, EF Core, MS SQL Server, Bootstrap, jQuery.'
      ]},
    { t:'Software Engineer (.NET) · Stern Ukraine (Kundenprojekt: Stabovita)',
      d:'04/2019 - 12/2023 · Kiew, Ukraine',
      list:[
        'Enterprise ERP / WMS und Logistiksysteme: über 5 Jahre an eng verzahnten Teilsystemen für Vertrieb, Produktion und Distribution.',
        'ERP/WMS-Kern: chargenbasiertes Lager, Preisgestaltung, Verträge, Rechnungen, Fremdwährungszahlungen, Qualitätsdokumente, Microsoft Identity RBAC mit Audit-Logging. Wirkung: ca. 40% schnellere Auftragsbearbeitung, ca. 20% weniger Abschreibungen.',
        'Versandautomatisierung: Integration von Carrier-APIs für automatisierte Versanderstellung, Tracking und Kundenbenachrichtigungen. Wirkung: ca. 60% weniger manuelle Logistikarbeit, ca. 20% geringere Logistikkosten.',
        'Financial Module mit FX-Revaluation: automatisierte Wechselkurs-Updates und Neubewertung von Zahlungen und Verträgen. Wirkung: weniger finanzielle Fehler, ca. 50% schnelleres Reporting.',
        'AI-gestützte Dokumentenverarbeitung (Add-on): LLM-basierte Extraktion für Rechnungen, Lieferscheine und Qualitätszertifikate mit mehrsprachiger Lokalisierung. Wirkung: ca. 70% weniger manuelle Dateneingabe.',
        'Stack: .NET 6-8, C#, EF Core + SQL Server, WPF/MVVM, ASP.NET Core MVC, SignalR, EPPlus/OpenXML, OpenAI API, Docker, Power BI.'
      ]},
    { t:'System Administrator / IT Infrastructure Engineer · Stern Ukraine',
      d:'04/2012 - 03/2019 · Kiew, Ukraine',
      list:[
        'Über 7 Jahre Verantwortung für Server-, Netzwerk- und Client-Infrastruktur eines IT-Dienstleisters; parallel berufsbegleitendes Zweitstudium und .NET-Weiterbildung mit schrittweisem Übergang zur Vollzeit-Entwicklung ab 2019.',
        'Administration von Windows-Server- und Linux-Systemen; Netzwerkinfrastruktur (Router, Switches, Firewalls, VPN); Deployment und Support von Client-Hardware.',
        'Virtualisierung, Backup-Konzepte und Disaster Recovery; Embedded-Projekte zur Steuerung und Überwachung auf Atmel AVR.',
        'Stack: Windows Server, Linux, Cisco/MikroTik, VPN, Virtualisierung, Backup-Lösungen, Atmel AVR.'
      ]}
  ],

  uk: [
    { t:'Senior Software Engineer (.NET) · Stern Ukraine (FinTech SaaS, клієнтський проєкт)',
      d:'12/2024 - зараз · Remote',
      list:[
        'Провідний архітектор AI-конвеєра витягання та валідації для складних фінансових документів (банківські виписки) у сфері іпотечного андеррайтингу; поєднання Azure AI та OpenAI з backend-валідацією за бізнес-правилами.',
        'Побудував систему перевірки автентичності фінансових документів для виявлення підроблених матеріалів, валідовану разом із зовнішніми фаховими партнерами з банківського сектору.',
        'Розробив складні розрахунки доходів і витрат (місячні, річні, боргові коефіцієнти) та класифікацію транзакцій за правилами.',
        'Prompt engineering і оптимізація LLM-процесів за точністю, латентністю та вартістю; білінг і платежі через Stripe (підписки, рахунки, кредитна модель).',
        'Acting Scrum Facilitator: внутрішнє AI-enablement, онбординг колег і тісна робота з product та стейкхолдерами над бізнес-правилами.',
        'Ключові результати: понад 95% точності на ключових фінансових даних (внутрішній бенчмарк з 500+ реальних документів); ручна обробка, що раніше тривала близько половини робочого дня на документ, тепер 5-7 хвилин.',
        'Стек: ASP.NET Core, C#, OpenAI API, Azure AI / Document Intelligence, EF Core, PostgreSQL, Stripe, Background Jobs.'
      ]},
    { t:'Volunteer Senior Software Engineer (.NET) · CharityLab Foundation',
      d:'09/2024 - зараз · Remote',
      list:[
        'Спроєктував і реалізував notification-сервіс та портал клієнта/користувача в межах мікросервісної архітектури для неприбуткової платформи.',
        'Застосував event-driven архітектуру з RabbitMQ для комунікації сервісів; наскрізне розподілене логування з correlation IDs через HTTP і messaging.',
        'Долучався до архітектурних рішень щодо меж сервісів.',
        'Стек: ASP.NET Core, C#, RabbitMQ, Microservices, REST APIs, Distributed Logging.'
      ]},
    { t:'Software Engineer (.NET) · Stern Ukraine (внутрішній проєкт)',
      d:'01/2024 - 11/2024 · Remote',
      list:[
        'Спроєктував і побудував внутрішній клієнтський портал (ASP.NET Core MVC) для трекінгу замовлень, історії та доступу до документів.',
        'Інтегрував Microsoft Identity для автентифікації та RBAC; адаптивний фронтенд на Bootstrap і jQuery.',
        'Ключові результати: краща прозорість для клієнтів і внутрішніх команд; близько 35% менше запитів про статус і менше внутрішніх комунікацій.',
        'Стек: ASP.NET Core MVC, C#, Microsoft Identity, EF Core, MS SQL Server, Bootstrap, jQuery.'
      ]},
    { t:'Software Engineer (.NET) · Stern Ukraine (клієнтський проєкт: Stabovita)',
      d:'04/2019 - 12/2023 · Київ, Україна',
      list:[
        'Enterprise ERP / WMS і логістичні системи: понад 5 років над тісно пов’язаними підсистемами для продажів, виробництва та дистрибуції.',
        'Ядро ERP/WMS: партійний облік, ціноутворення, договори, рахунки, валютні платежі, документи якості, Microsoft Identity RBAC з аудитом. Результат: ~40% швидше опрацювання замовлень, ~20% менше списань.',
        'Автоматизація відвантажень: інтеграція API перевізників для створення відправлень, трекінгу та сповіщень клієнтів. Результат: ~60% менше ручної логістики, ~20% нижчі логістичні витрати.',
        'Фінансовий модуль з FX-перерахунком: автоматичні оновлення курсів і переоцінка платежів і договорів. Результат: менше фінансових помилок, ~50% швидше звітування.',
        'AI-обробка документів (надбудова): LLM-витягання для рахунків, накладних і сертифікатів якості з багатомовною локалізацією. Результат: ~70% менше ручного введення даних.',
        'Стек: .NET 6-8, C#, EF Core + SQL Server, WPF/MVVM, ASP.NET Core MVC, SignalR, EPPlus/OpenXML, OpenAI API, Docker, Power BI.'
      ]},
    { t:'Системний адміністратор / IT Infrastructure Engineer · Stern Ukraine',
      d:'04/2012 - 03/2019 · Київ, Україна',
      list:[
        'Понад 7 років відповідальності за серверну, мережеву та клієнтську інфраструктуру IT-провайдера; паралельно друга освіта без відриву та навчання .NET із поступовим переходом до повної зайнятості в розробці з 2019.',
        'Адміністрування Windows Server і Linux; мережева інфраструктура (маршрутизатори, комутатори, фаєрволи, VPN); розгортання та підтримка клієнтського обладнання.',
        'Віртуалізація, резервне копіювання та disaster recovery; embedded-проєкти керування й моніторингу на Atmel AVR.',
        'Стек: Windows Server, Linux, Cisco/MikroTik, VPN, віртуалізація, рішення резервного копіювання, Atmel AVR.'
      ]}
  ],

  ru: [
    { t:'Senior Software Engineer (.NET) · Stern Ukraine (FinTech SaaS, клиентский проект)',
      d:'12/2024 - наст. время · Remote',
      list:[
        'Ведущий архитектор AI-конвейера извлечения и валидации для сложных финансовых документов (банковские выписки) в сфере ипотечного андеррайтинга; сочетание Azure AI и OpenAI с backend-валидацией по бизнес-правилам.',
        'Построил систему проверки подлинности финансовых документов для выявления подделок, валидированную совместно с внешними профильными партнёрами из банковского сектора.',
        'Разработал сложные расчёты доходов и расходов (месячные, годовые, долговые коэффициенты) и классификацию транзакций по правилам.',
        'Prompt engineering и оптимизация LLM-процессов по точности, латентности и стоимости; биллинг и платежи через Stripe (подписки, счета, кредитная модель).',
        'Acting Scrum Facilitator: внутреннее AI-enablement, онбординг коллег и тесная работа с product и стейкхолдерами над бизнес-правилами.',
        'Ключевые результаты: свыше 95% точности на ключевых финансовых данных (внутренний бенчмарк из 500+ реальных документов); ручная обработка, прежде занимавшая около половины рабочего дня на документ, теперь 5-7 минут.',
        'Стек: ASP.NET Core, C#, OpenAI API, Azure AI / Document Intelligence, EF Core, PostgreSQL, Stripe, Background Jobs.'
      ]},
    { t:'Volunteer Senior Software Engineer (.NET) · CharityLab Foundation',
      d:'09/2024 - наст. время · Remote',
      list:[
        'Спроектировал и реализовал notification-сервис и портал клиента/пользователя в рамках микросервисной архитектуры для некоммерческой платформы.',
        'Применил event-driven архитектуру с RabbitMQ для коммуникации сервисов; сквозное распределённое логирование с correlation IDs через HTTP и messaging.',
        'Участвовал в архитектурных решениях по границам сервисов.',
        'Стек: ASP.NET Core, C#, RabbitMQ, Microservices, REST APIs, Distributed Logging.'
      ]},
    { t:'Software Engineer (.NET) · Stern Ukraine (внутренний проект)',
      d:'01/2024 - 11/2024 · Remote',
      list:[
        'Спроектировал и построил внутренний клиентский портал (ASP.NET Core MVC) для трекинга заказов, истории и доступа к документам.',
        'Интегрировал Microsoft Identity для аутентификации и RBAC; адаптивный фронтенд на Bootstrap и jQuery.',
        'Ключевые результаты: лучшая прозрачность для клиентов и внутренних команд; около 35% меньше запросов о статусе и меньше внутренних коммуникаций.',
        'Стек: ASP.NET Core MVC, C#, Microsoft Identity, EF Core, MS SQL Server, Bootstrap, jQuery.'
      ]},
    { t:'Software Engineer (.NET) · Stern Ukraine (клиентский проект: Stabovita)',
      d:'04/2019 - 12/2023 · Киев, Украина',
      list:[
        'Enterprise ERP / WMS и логистические системы: более 5 лет над тесно связанными подсистемами для продаж, производства и дистрибуции.',
        'Ядро ERP/WMS: партийный учёт, ценообразование, договоры, счета, валютные платежи, документы качества, Microsoft Identity RBAC с аудитом. Эффект: ~40% быстрее обработка заказов, ~20% меньше списаний.',
        'Автоматизация отгрузок: интеграция API перевозчиков для создания отправлений, трекинга и уведомлений клиентов. Эффект: ~60% меньше ручной логистики, ~20% ниже логистические затраты.',
        'Финансовый модуль с FX-переоценкой: автоматические обновления курсов и переоценка платежей и договоров. Эффект: меньше финансовых ошибок, ~50% быстрее отчётность.',
        'AI-обработка документов (надстройка): LLM-извлечение для счетов, накладных и сертификатов качества с многоязычной локализацией. Эффект: ~70% меньше ручного ввода данных.',
        'Стек: .NET 6-8, C#, EF Core + SQL Server, WPF/MVVM, ASP.NET Core MVC, SignalR, EPPlus/OpenXML, OpenAI API, Docker, Power BI.'
      ]},
    { t:'Системный администратор / IT Infrastructure Engineer · Stern Ukraine',
      d:'04/2012 - 03/2019 · Киев, Украина',
      list:[
        'Более 7 лет ответственности за серверную, сетевую и клиентскую инфраструктуру IT-провайдера; параллельно второе образование без отрыва и обучение .NET с постепенным переходом к полной занятости в разработке с 2019.',
        'Администрирование Windows Server и Linux; сетевая инфраструктура (маршрутизаторы, коммутаторы, файрволы, VPN); развёртывание и поддержка клиентского оборудования.',
        'Виртуализация, резервное копирование и disaster recovery; embedded-проекты управления и мониторинга на Atmel AVR.',
        'Стек: Windows Server, Linux, Cisco/MikroTik, VPN, виртуализация, решения резервного копирования, Atmel AVR.'
      ]}
  ]
};

  const ACHIEVEMENTS = {
  en: [
    { k:'Over 95% extraction accuracy', d:'AI pipeline for bank statements, measured on an internal benchmark of 500+ real documents.' },
    { k:'Half a day to 5-7 minutes', d:'Manual document processing that took about half a working day per document, now down to a few minutes through AI integration.' },
    { k:'40% faster order processing', d:'Centralized ERP processes in an enterprise environment.' },
    { k:'60% less manual logistics work', d:'Integrated carrier APIs for fully automated shipping.' }
  ],
  de: [
    { k:'Über 95% Extraktionsgenauigkeit', d:'AI-Pipeline für Bankauszüge, gemessen auf einem internen Benchmark mit 500+ realen Dokumenten.' },
    { k:'Halber Arbeitstag auf 5-7 Minuten', d:'Manuelle Dokumentenverarbeitung, die zuvor rund einen halben Arbeitstag pro Dokument dauerte, jetzt wenige Minuten durch AI-Integration.' },
    { k:'40% schnellere Auftragsbearbeitung', d:'Zentralisierung von ERP-Prozessen in einer Enterprise-Umgebung.' },
    { k:'60% weniger manuelle Logistikarbeit', d:'Integration von Carrier-APIs für vollautomatische Versandabwicklung.' }
  ],
  uk: [
    { k:'Понад 95% точності витягання', d:'AI-конвеєр для банківських виписок, виміряно на внутрішньому бенчмарку з 500+ реальних документів.' },
    { k:'Півдня роботи до 5-7 хвилин', d:'Ручна обробка документів, що раніше тривала близько половини робочого дня на документ, тепер кілька хвилин завдяки AI-інтеграції.' },
    { k:'40% швидше опрацювання замовлень', d:'Централізація ERP-процесів у enterprise-середовищі.' },
    { k:'60% менше ручної логістики', d:'Інтеграція API перевізників для повністю автоматичного відвантаження.' }
  ],
  ru: [
    { k:'Свыше 95% точности извлечения', d:'AI-конвейер для банковских выписок, измерено на внутреннем бенчмарке из 500+ реальных документов.' },
    { k:'Полдня работы до 5-7 минут', d:'Ручная обработка документов, прежде занимавшая около половины рабочего дня на документ, теперь несколько минут благодаря AI-интеграции.' },
    { k:'40% быстрее обработка заказов', d:'Централизация ERP-процессов в enterprise-среде.' },
    { k:'60% меньше ручной логистики', d:'Интеграция API перевозчиков для полностью автоматической отгрузки.' }
  ]
};

  const STRENGTHS = {
  en: [
    { t:'Backend Architecture', d:'Clean Architecture, SOLID and DDD for maintainable systems.' },
    { t:'AI Integration', d:'Production-ready LLM pipelines with OpenAI and Azure AI.' },
    { t:'Tech and Business', d:'I grasp business processes quickly and implement them cleanly on the technical side.' },
    { t:'Scrum Facilitation', d:'PSM I certified, actively shaping team processes.' },
    { t:'End-to-End Ownership', d:'Delivering features end-to-end, from database design to UI.' }
  ],
  de: [
    { t:'Backend-Architektur', d:'Clean Architecture, SOLID und DDD für wartbare Systeme.' },
    { t:'AI-Integration', d:'Production-ready LLM-Pipelines mit OpenAI und Azure AI.' },
    { t:'Technik und Business', d:'Ich verstehe Geschäftsprozesse schnell und setze sie technisch sauber um.' },
    { t:'Scrum Facilitation', d:'PSM I zertifiziert, aktive Gestaltung der Teamprozesse.' },
    { t:'End-to-End-Ownership', d:'Features end-to-end liefern, vom DB-Design bis zur UI.' }
  ],
  uk: [
    { t:'Бекенд-архітектура', d:'Clean Architecture, SOLID і DDD для підтримуваних систем.' },
    { t:'AI-інтеграція', d:'Production-ready LLM-конвеєри з OpenAI та Azure AI.' },
    { t:'Технології та бізнес', d:'Швидко розумію бізнес-процеси й технічно охайно їх реалізую.' },
    { t:'Scrum Facilitation', d:'Сертифікат PSM I, активне формування командних процесів.' },
    { t:'End-to-End відповідальність', d:'Доставляю функціонал наскрізно, від дизайну БД до UI.' }
  ],
  ru: [
    { t:'Бэкенд-архитектура', d:'Clean Architecture, SOLID и DDD для поддерживаемых систем.' },
    { t:'AI-интеграция', d:'Production-ready LLM-конвейеры с OpenAI и Azure AI.' },
    { t:'Технологии и бизнес', d:'Быстро понимаю бизнес-процессы и аккуратно реализую их технически.' },
    { t:'Scrum Facilitation', d:'Сертификат PSM I, активное формирование командных процессов.' },
    { t:'End-to-End ответственность', d:'Доставляю функционал сквозно, от дизайна БД до UI.' }
  ]
};

  const EDUCATION = {
  en: [
    {
      t:'Certifications',
      d:'2022 - 2025',
      list:[
        'Professional Scrum Master I (PSM I), Scrum.org, 2025.',
        'German B1 (100% in all exam sections), 2025.',
        'Foundational C#, Microsoft, 2023.',
        '.NET Core Developer Program, IT Education Academy (final grade 100/100), 2022.'
      ]
    },
    { t:'B.Sc. Software Engineering · Igor Sikorsky Kyiv Polytechnic Institute', d:'2017 - 2019',
      list:['Officially recognized in Germany (ZAB) as equivalent to a German bachelor’s degree.'] },
    { t:'B.Sc. Food Technology · National University of Food Technologies, Kyiv', d:'2008 - 2012', list:[] }
  ],

  de: [
    {
      t:'Zertifikate',
      d:'2022 - 2025',
      list:[
        'Professional Scrum Master I (PSM I), Scrum.org, 2025.',
        'Deutsch B1 (100% in allen Prüfungsteilen), 2025.',
        'Foundational C#, Microsoft, 2023.',
        '.NET Core Developer Program, IT Education Academy (Abschlussnote 100/100), 2022.'
      ]
    },
    { t:'B.Sc. Software Engineering · Igor Sikorsky KPI Kiew', d:'2017 - 2019',
      list:['Offiziell in Deutschland anerkannt (ZAB) als gleichwertig mit einem deutschen Bachelorabschluss.'] },
    { t:'B.Sc. Lebensmitteltechnologie · National University of Food Technologies, Kiew', d:'2008 - 2012', list:[] }
  ],

  uk: [
    {
      t:'Сертифікати',
      d:'2022 - 2025',
      list:[
        'Professional Scrum Master I (PSM I), Scrum.org, 2025.',
        'Deutsch B1 (100% в усіх частинах іспиту), 2025.',
        'Foundational C#, Microsoft, 2023.',
        '.NET Core Developer Program, IT Education Academy (фінальний бал 100/100), 2022.'
      ]
    },
    { t:'Бакалавр програмної інженерії · КПІ ім. Ігоря Сікорського, Київ', d:'2017 - 2019',
      list:['Офіційно визнано в Німеччині (ZAB) як еквівалент німецького бакалавра.'] },
    { t:'Бакалавр харчових технологій · НУХТ, Київ', d:'2008 - 2012', list:[] }
  ],

  ru: [
    {
      t:'Сертификаты',
      d:'2022 - 2025',
      list:[
        'Professional Scrum Master I (PSM I), Scrum.org, 2025.',
        'Deutsch B1 (100% во всех частях экзамена), 2025.',
        'Foundational C#, Microsoft, 2023.',
        '.NET Core Developer Program, IT Education Academy (итоговый балл 100/100), 2022.'
      ]
    },
    { t:'Бакалавр программной инженерии · КПИ им. Игоря Сикорского, Киев', d:'2017 - 2019',
      list:['Официально признан в Германии (ZAB) как эквивалент немецкого бакалавра.'] },
    { t:'Бакалавр пищевых технологий · НУХТ, Киев', d:'2008 - 2012', list:[] }
  ]
};


  /* ===================== CERTIFICATES ===================== */
  // Галерея (мини-превью + полноразмер + ссылка подтверждения)
  const CERTS = {
    en: [
      {
        id:'psm1',
        title:'Professional Scrum Master I - Scrum.org',
        year:'2025',
        thumb:'assets/img/certs/psm1-thumb.jpg',
        full:'assets/img/certs/psm1-full.jpg',
        verify:'https://www.credly.com/badges/77610e1c-97e1-45df-befb-c95b66c35559/linked_in?t=sski1r'
      },
      {
        id:'deutsch-b1',
        title:'Deutsch B1 - Deutsch-Test für Zuwanderer (g.a.s.t. / BAMF)',
        year:'2025',
        thumb:'assets/img/certs/deutsch-b1-dtz-thumb.jpg',
        full:'assets/img/certs/deutsch-b1-dtz-full.jpg'
      },
      {
        id:'fcc-csharp',
        title:'Foundational C# with Microsoft',
        year:'2023',
        thumb:'assets/img/certs/fcc-thumb.jpeg',
        full:'assets/img/certs/fcc-full.jpeg',
        verify:'https://www.freecodecamp.org/certification/YevhenBalakov/foundational-c-sharp-with-microsoft'
      },
      {
        id:'itea-base',
        title:'C# / .NET Base - ITEA',
        year:'2022',
        thumb:'assets/img/certs/itea-dot-net-base-thumb.jpg',
        full:'assets/img/certs/itea-dot-net-base-full.jpg'
      },
      {
        id:'itea-adv',
        title:'C# / .NET Advanced - ITEA',
        year:'2022',
        thumb:'assets/img/certs/itea-dot-net-advanced-thumb.jpg',
        full:'assets/img/certs/itea-dot-net-advanced-full.jpg'
      },
      {
        id:'itea-core',
        title:'Web Development with .NET Core - ITEA',
        year:'2022',
        thumb:'assets/img/certs/itea-dot-net-core-thumb.jpg',
        full:'assets/img/certs/itea-dot-net-core-full.jpg'
      }
    ]
  };
  // если переводы не заданы - используем EN
  CERTS.de = CERTS.en;
  CERTS.uk = CERTS.en;
  CERTS.ru = CERTS.en;

  // Плоский список “пилюль” для старой отрисовки, авто-генерация из CERTS
  const mapToPills = (arr) =>
    arr.map(c => ({
      label: `${c.title}${c.year ? ` (${c.year})` : ''}`,
      url: c.verify || c.full,
      img: c.thumb || c.full,
      year: c.year || ''
    }));

  const CERTIFICATIONS = {
    en: mapToPills(CERTS.en),
    de: mapToPills(CERTS.de),
    uk: mapToPills(CERTS.uk),
    ru: mapToPills(CERTS.ru)
  };

  const RESUME = {
  en: 'assets/cv/Balakov_CV_en.pdf',
  de: 'assets/cv/Balakov_CV_de.pdf',
  uk: 'assets/cv/Balakov_CV_en.pdf',
  ru: 'assets/cv/Balakov_CV_en.pdf'
	};

  /* ===================== EXPORT ===================== */
  global.I18N = I18N;
  global.SKILLS = SKILLS;
  global.PROJECTS = PROJECTS;
  global.EXPERIENCE = EXPERIENCE;
  global.EDUCATION = EDUCATION;
  global.CERTS = CERTS;
  global.CERTIFICATIONS = CERTIFICATIONS;
  global.ACHIEVEMENTS = ACHIEVEMENTS;
  global.STRENGTHS = STRENGTHS;
  global.RESUME = RESUME;

})(window);
