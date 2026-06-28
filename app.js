const STORAGE_KEY = "baukalk-pro-state-v1";
const WELCOME_KEY = "smeta-bau-welcome-hidden-v1";
const LANGUAGE_KEY = "smeta-bau-language-v1";

const translations = {
  ru: {
    appName: "Смета Бау",
    heroTitle: "Смета за 5 минут без работы в минус",
    heroCopy: "Рассчитайте реальную себестоимость заказа с учётом сотрудников, расходов, дороги, партнёра и прибыли.",
    reset: "Сбросить",
    save: "Сохранить",
    saved: "Сохранено",
    firstRun: "Первый запуск",
    welcomeTitle: "Добро пожаловать в Смета Бау",
    welcomeCopy: "Смета Бау помогает быстро рассчитать строительный заказ, понять реальную прибыль фирмы и подготовить немецкий текст клиенту.",
    welcome1: "Сначала заполните быстрые данные объекта: тип работы, площадь, людей, дни и расстояние.",
    welcome2: "Приложение посчитает себестоимость, минимальную безопасную цену, прибыль и маржу.",
    welcome3: "После расчёта вы сможете скопировать короткое WhatsApp-сообщение клиенту на немецком.",
    startDemo: "Начать с демо-примера",
    createEstimate: "Создать новую смету",
    setupCompany: "Настроить фирму",
    hideWelcome: "Больше не показывать",
    navEstimate: "Новая смета",
    navPrices: "Мои цены",
    navSettings: "Сотрудники и расходы",
    navResult: "Результат",
    howTo: "Как пользоваться",
    guide: [
      "1. Заполните быстрые данные объекта: тип работы, площадь, сложность, количество людей, дни работы и расстояние.",
      "2. Нажмите “Рассчитать смету”.",
      "3. Посмотрите главные цифры: рекомендуемая цена клиенту, минимальная безопасная цена, себестоимость, прибыль, маржа и статус заказа.",
      "4. Если хотите понять расчёт подробно, откройте блок “Как посчитано”.",
      "5. Если клиент просит дешевле, используйте блок “Проверить свою цену”. Введите цену, которую хотите назвать клиенту, и приложение покажет, сколько прибыли останется.",
      "6. Клиенту отправляйте только текст из блока “Что клиенту отправляем”. Внутренний расчёт, себестоимость, зарплаты, маржу и прибыль клиенту не показывайте.",
      "7. Если расчёт показывает красный статус, не отправляйте цену сразу. Проверьте расходы, партнёрскую комиссию, дорогу и минимальную безопасную цену.",
      "8. Помните: расчёт является ориентировочным. Точная цена зависит от состояния объекта, скрытых дефектов, материалов и условий на месте."
    ],
    newEstimateEyebrow: "Новая смета",
    quickCalcTitle: "Быстрый расчёт заказа",
    useDemo: "Использовать демо-настройки",
    resetDemo: "Сбросить демо-данные",
    workType: "Тип работы",
    area: "Площадь м²",
    complexity: "Сложность",
    people: "Людей на объекте",
    days: "Дней работы",
    distance: "Расстояние, км",
    partnerBrought: "Партнёр привёл клиента",
    calculate: "Рассчитать смету",
    simpleNote: "Настройки фирмы можно настроить позже. Для первого теста достаточно этих полей.",
    advanced: "Детальный расчёт / Дополнительные настройки",
    clientObject: "Клиент / объект",
    city: "Город",
    selectedEmployees: "Выбранные сотрудники",
    manualHours: "Часы вручную",
    manualMaterials: "Материалы вручную, €",
    adminHours: "Время осмотр/смета/организация, ч",
    demolition: "Демонтаж",
    preparation: "Подготовка основания",
    partnerCommission: "Комиссия партнёра",
    partnerHint: "Комиссия партнёра — деньги за приведённого клиента. Она уменьшает вашу прибыль.",
    commissionSize: "Размер комиссии",
    paidVisit: "Платный выезд",
    paidVisitPrice: "Стоимость платного выезда, €",
    pricesEyebrow: "Мои цены",
    workTemplates: "Шаблоны работ",
    addTemplate: "+ Шаблон",
    settingsEyebrow: "Сотрудники и расходы",
    realCostTitle: "Реальная себестоимость фирмы",
    company: "Фирма",
    companyName: "Название фирмы",
    taxMode: "Режим налогообложения",
    includeVat: "Включать НДС в цену клиента",
    minProfit: "Минимальная прибыль, %",
    minProfitHint: "Это нижняя граница маржи, при которой заказ ещё имеет смысл для фирмы.",
    riskReserve: "Риск/резерв по умолчанию, %",
    riskHint: "Риск — резерв на непредвиденные работы: докупки, переделки, простои и скрытые дефекты.",
    defaultPartner: "Комиссия партнёра по умолчанию, %",
    visitPrice: "Стоимость выезда, €",
    kmPrice: "Цена за км, €",
    wizardTitle: "Настроить фирму за 3 минуты",
    apply: "Применить",
    step1: "Шаг 1",
    step2: "Шаг 2",
    step3: "Шаг 3",
    step4: "Шаг 4",
    whoWorks: "Кто работает в фирме?",
    employeeCount: "Количество сотрудников",
    avgHourCost: "Средняя стоимость часа, €",
    productiveTime: "Продуктивное время, %",
    productiveHint: "Продуктивное время — это часы, за которые сотрудник реально приносит деньги. Дорога, закупка материалов и простои сюда не входят.",
    fixedCosts: "Постоянные расходы",
    fixedCostsHint: "Эти расходы фирма платит каждый месяц. Приложение распределяет их на заказы, чтобы вы не работали в минус.",
    vehicle: "Машина, €/мес",
    insurance: "Страховки, €/мес",
    accountant: "Бухгалтер, €/мес",
    ads: "Реклама, €/мес",
    tools: "Инструмент, €/мес",
    other: "Прочее, €/мес",
    calcRules: "Правила расчёта",
    desiredMargin: "Минимальная желаемая маржа, %",
    riskPercent: "Риск / резерв, %",
    defaultPartnerPercent: "Комиссия партнёра, %",
    taxModeLabel: "Налоговый режим",
    ready: "Готово",
    readyText: "Теперь можно считать первую смету. Настройки можно изменить позже.",
    goEstimate: "Перейти к новой смете",
    employees: "Сотрудники",
    addEmployee: "+ Добавить",
    productiveSectionHint: "Продуктивное время — это часы, за которые работник реально приносит деньги. Дорога, закупки и простои сюда не входят.",
    overheads: "Постоянные расходы фирмы",
    overheadsHint: "Постоянные расходы — это деньги, которые фирма платит каждый месяц, даже если объект маленький.",
    resultEyebrow: "Результат",
    resultTitle: "Цена, ниже которой нельзя опускаться",
    noCalc: "Нет расчёта",
    clickCalculate: "Нажмите “Рассчитать смету”",
    recommendedPrice: "Рекомендуемая цена клиенту",
    safePriceDanger: "Ниже этой цены заказ брать опасно",
    safePriceHint: "Минимальная безопасная цена — ниже этой суммы заказ может стать невыгодным.",
    selfCost: "Себестоимость",
    profit: "Прибыль",
    margin: "Маржа",
    marginHint: "Маржа — сколько остаётся фирме после расходов.",
    orderCheck: "Проверка заказа",
    checkPriceTitle: "Хотите проверить свою цену?",
    checkPriceHint: "Введите цену, которую хотите назвать клиенту, и программа покажет прибыль и риск.",
    desiredClientPrice: "Желаемая цена клиенту, €",
    manualPriceEmpty: "Введите цену, чтобы увидеть прибыль и маржу.",
    copyWhatsapp: "Скопировать WhatsApp-текст",
    newEstimate: "Новая смета",
    showBreakdown: "Показать подробный расчёт",
    hideBreakdown: "Скрыть подробный расчёт",
    howCalculated: "Как посчитано",
    internalHint: "Это внутренняя информация для владельца фирмы. Клиенту её не показывать.",
    sendToClient: "Что клиенту отправляем",
    clientTextHint: "Этот текст можно отправить клиенту. Он не содержит внутреннюю себестоимость и прибыль.",
    copyFullGerman: "Скопировать полный немецкий текст",
    customerOffer: "Предложение для клиента",
    copyGerman: "Скопировать немецкий текст",
    showInstruction: "Показать инструкцию снова",
    footer: "Тестовая версия. Расчёт является ориентировочным и не заменяет профессиональную смету.",
    copied: "Скопировано",
    whatsappShort: "Короткое WhatsApp-сообщение",
    fullOffer: "Полный текст предложения",
    germanClientText: "Немецкий текст для клиента",
    russianTranslation: "Русский перевод",
    ukrainianTranslation: "Украинский перевод",
    materials: "Материалы",
    workHours: "Рабочие часы",
    employeeCost: "Стоимость сотрудников",
    adminCost: "Админ/смета/организация",
    travel: "Дорога",
    overheadShare: "Доля постоянных расходов фирмы",
    risk: "Риск/резерв",
    profitPerDay: "Прибыль в день",
    profitPerPersonDay: "Прибыль на человеко-день",
    vat: "НДС",
    finalClientPrice: "Итоговая цена клиенту",
    statusOk: "Зелёный · заказ выгодный",
    statusWarn: "Жёлтый · согласовать бюджет",
    statusDanger: "Красный · пересчитать",
    statusOkSimple: "Можно брать",
    statusWarnSimple: "Брать только после согласования бюджета",
    statusDangerSimple: "Не брать по такой цене",
    validationArea: "Введите площадь объекта",
    validationPeople: "Укажите количество людей",
    validationDays: "Укажите количество дней",
    validationDistance: "Укажите расстояние до объекта",
    warnMargin: "Маржа ниже безопасного уровня. Проверьте цену перед отправкой клиенту.",
    warnProfitDay: "Прибыль в день слишком маленькая для нормальной загрузки фирмы.",
    warnPartner: "Комиссия партнёра заметно снижает прибыль по этому заказу.",
    warnTravel: "Дорога и подготовка занимают много времени. Не стоит ехать без предварительного согласования бюджета.",
    warnSafe: "Цена ниже минимальной безопасной. Есть риск работы почти без прибыли.",
    warnManualSafe: "Ручная цена ниже минимальной безопасной. Такой заказ легко уйдёт почти без прибыли.",
    manualStatusOk: "выгодно",
    manualStatusWarn: "опасно",
    manualStatusDanger: "невыгодно"
  },
  de: {},
  ua: {}
};

translations.de = {
  ...translations.ru,
  appName: "Smeta Bau",
  heroTitle: "Kalkulation in 5 Minuten — ohne Verlust zu arbeiten",
  heroCopy: "Berechnen Sie die realen Selbstkosten eines Auftrags inklusive Mitarbeiter, Fixkosten, Anfahrt, Partnerprovision und Gewinn.",
  reset: "Zurücksetzen",
  save: "Speichern",
  saved: "Gespeichert",
  firstRun: "Erster Start",
  welcomeTitle: "Willkommen bei Smeta Bau",
  welcomeCopy: "Smeta Bau hilft, Bauaufträge schnell zu kalkulieren, den echten Firmengewinn zu verstehen und einen deutschen Kundentext vorzubereiten.",
  welcome1: "Füllen Sie zuerst die schnellen Objektdaten aus: Leistung, Fläche, Personen, Tage und Entfernung.",
  welcome2: "Die App berechnet Selbstkosten, minimal sicheren Preis, Gewinn und Marge.",
  welcome3: "Nach der Berechnung können Sie eine kurze WhatsApp-Nachricht auf Deutsch kopieren.",
  startDemo: "Mit Demo-Beispiel starten",
  createEstimate: "Neue Kalkulation erstellen",
  setupCompany: "Firma einrichten",
  hideWelcome: "Nicht mehr anzeigen",
  navEstimate: "Neue Kalkulation",
  navPrices: "Meine Preise",
  navSettings: "Mitarbeiter & Kosten",
  navResult: "Ergebnis",
  howTo: "So funktioniert es",
  guide: [
    "1. Füllen Sie die schnellen Objektdaten aus: Leistung, Fläche, Schwierigkeit, Anzahl der Personen, Arbeitstage und Entfernung.",
    "2. Klicken Sie auf „Kalkulation berechnen“.",
    "3. Prüfen Sie die wichtigsten Zahlen: empfohlener Kundenpreis, minimal sicherer Preis, Selbstkosten, Gewinn, Marge und Auftragsstatus.",
    "4. Für Details öffnen Sie den Block „Detaillierte Berechnung“.",
    "5. Wenn der Kunde weniger zahlen möchte, nutzen Sie „Eigenen Preis prüfen“. Geben Sie den Kundenpreis ein und die App zeigt den verbleibenden Gewinn.",
    "6. Senden Sie dem Kunden nur den Text aus „Was an den Kunden gesendet wird“. Interne Kosten, Löhne, Marge und Gewinn nicht weitergeben.",
    "7. Bei rotem Status den Preis nicht sofort senden. Prüfen Sie Kosten, Partnerprovision, Anfahrt und minimal sicheren Preis.",
    "8. Die Berechnung ist eine Orientierung. Der genaue Preis hängt vom Objektzustand, verdeckten Mängeln, Material und Bedingungen vor Ort ab."
  ],
  newEstimateEyebrow: "Neue Kalkulation",
  quickCalcTitle: "Schnelle Auftragskalkulation",
  useDemo: "Demo-Einstellungen nutzen",
  resetDemo: "Demo-Daten löschen",
  workType: "Leistung",
  area: "Fläche m²",
  complexity: "Schwierigkeit",
  people: "Personen auf der Baustelle",
  days: "Arbeitstage",
  distance: "Entfernung, km",
  partnerBrought: "Kunde kam über Partner",
  calculate: "Kalkulation berechnen",
  simpleNote: "Firmeneinstellungen können später angepasst werden. Für den ersten Test reichen diese Felder.",
  advanced: "Detaillierte Berechnung / Zusätzliche Einstellungen",
  clientObject: "Kunde / Objekt",
  city: "Stadt",
  selectedEmployees: "Ausgewählte Mitarbeiter",
  manualHours: "Stunden manuell",
  manualMaterials: "Material manuell, €",
  adminHours: "Besichtigung/Kalkulation/Organisation, Std.",
  demolition: "Demontage",
  preparation: "Untergrundvorbereitung",
  partnerCommission: "Partnerprovision",
  partnerHint: "Partnerprovision ist Geld für einen vermittelten Kunden. Sie reduziert Ihren Gewinn.",
  commissionSize: "Provision",
  paidVisit: "Bezahlte Besichtigung",
  paidVisitPrice: "Preis der Besichtigung, €",
  pricesEyebrow: "Meine Preise",
  workTemplates: "Leistungsvorlagen",
  addTemplate: "+ Vorlage",
  settingsEyebrow: "Mitarbeiter & Kosten",
  realCostTitle: "Reale Selbstkosten der Firma",
  company: "Firma",
  companyName: "Firmenname",
  taxMode: "Steuerregelung",
  includeVat: "MwSt im Kundenpreis berücksichtigen",
  minProfit: "Minimaler Gewinn, %",
  minProfitHint: "Das ist die untere Marge, ab der ein Auftrag für die Firma sinnvoll bleibt.",
  riskReserve: "Risiko/Reserve standardmäßig, %",
  riskHint: "Risiko ist eine Reserve für unvorhergesehene Arbeiten: Nachkauf, Nacharbeit, Wartezeiten und verdeckte Mängel.",
  defaultPartner: "Partnerprovision standardmäßig, %",
  visitPrice: "Anfahrt/Besichtigung, €",
  kmPrice: "Preis pro km, €",
  wizardTitle: "Firma in 3 Minuten einrichten",
  apply: "Übernehmen",
  step1: "Schritt 1",
  step2: "Schritt 2",
  step3: "Schritt 3",
  step4: "Schritt 4",
  whoWorks: "Wer arbeitet in der Firma?",
  employeeCount: "Anzahl Mitarbeiter",
  avgHourCost: "Durchschnittlicher Stundensatz, €",
  productiveTime: "Produktive Zeit, %",
  productiveHint: "Produktive Zeit sind Stunden, in denen ein Mitarbeiter wirklich Geld verdient. Anfahrt, Materialkauf und Leerlauf zählen nicht dazu.",
  fixedCosts: "Fixkosten",
  fixedCostsHint: "Diese Kosten zahlt die Firma jeden Monat. Die App verteilt sie auf Aufträge, damit Sie nicht mit Verlust arbeiten.",
  vehicle: "Fahrzeug, €/Monat",
  insurance: "Versicherungen, €/Monat",
  accountant: "Buchhaltung, €/Monat",
  ads: "Werbung, €/Monat",
  tools: "Werkzeug, €/Monat",
  other: "Sonstiges, €/Monat",
  calcRules: "Kalkulationsregeln",
  desiredMargin: "Gewünschte Mindestmarge, %",
  riskPercent: "Risiko / Reserve, %",
  defaultPartnerPercent: "Partnerprovision, %",
  taxModeLabel: "Steuerregelung",
  ready: "Fertig",
  readyText: "Jetzt können Sie die erste Kalkulation erstellen. Einstellungen können später geändert werden.",
  goEstimate: "Zur neuen Kalkulation",
  employees: "Mitarbeiter",
  addEmployee: "+ Hinzufügen",
  productiveSectionHint: "Produktive Zeit sind Stunden, in denen der Mitarbeiter wirklich Geld verdient. Anfahrt, Einkauf und Leerlauf zählen nicht dazu.",
  overheads: "Fixkosten der Firma",
  overheadsHint: "Fixkosten zahlt die Firma jeden Monat, auch wenn der Auftrag klein ist.",
  resultEyebrow: "Ergebnis",
  resultTitle: "Preis, unter den Sie nicht gehen sollten",
  noCalc: "Keine Berechnung",
  clickCalculate: "Klicken Sie auf „Kalkulation berechnen“",
  recommendedPrice: "Empfohlener Kundenpreis",
  safePriceDanger: "Unter diesem Preis ist der Auftrag riskant",
  safePriceHint: "Minimal sicherer Preis — darunter kann der Auftrag unwirtschaftlich werden.",
  selfCost: "Selbstkosten",
  profit: "Gewinn",
  margin: "Marge",
  marginHint: "Marge zeigt, was der Firma nach den Kosten bleibt.",
  orderCheck: "Auftragsprüfung",
  checkPriceTitle: "Eigenen Preis prüfen?",
  checkPriceHint: "Geben Sie den Preis ein, den Sie dem Kunden nennen möchten. Die App zeigt Gewinn und Risiko.",
  desiredClientPrice: "Gewünschter Kundenpreis, €",
  manualPriceEmpty: "Geben Sie einen Preis ein, um Gewinn und Marge zu sehen.",
  copyWhatsapp: "WhatsApp-Text kopieren",
  newEstimate: "Neue Kalkulation",
  showBreakdown: "Detaillierte Berechnung anzeigen",
  hideBreakdown: "Detaillierte Berechnung ausblenden",
  howCalculated: "Detaillierte Berechnung",
  internalHint: "Das sind interne Informationen für den Firmeninhaber. Nicht an Kunden weitergeben.",
  sendToClient: "Was an den Kunden gesendet wird",
  clientTextHint: "Dieser Text kann an den Kunden gesendet werden. Er enthält keine internen Selbstkosten und keinen Gewinn.",
  copyFullGerman: "Vollständigen deutschen Text kopieren",
  customerOffer: "Angebot für den Kunden",
  copyGerman: "Deutschen Text kopieren",
  showInstruction: "Anleitung erneut anzeigen",
  footer: "Testversion. Die Berechnung ist eine Orientierung und ersetzt keine professionelle Kalkulation.",
  copied: "Kopiert",
  whatsappShort: "Kurze WhatsApp-Nachricht",
  fullOffer: "Vollständiger Angebotstext",
  germanClientText: "Deutscher Kundentext",
  russianTranslation: "Russische Übersetzung",
  ukrainianTranslation: "Ukrainische Übersetzung",
  materials: "Material",
  workHours: "Arbeitsstunden",
  employeeCost: "Mitarbeiterkosten",
  adminCost: "Admin/Kalkulation/Organisation",
  travel: "Anfahrt",
  overheadShare: "Anteil der Fixkosten",
  risk: "Risiko/Reserve",
  profitPerDay: "Gewinn pro Tag",
  profitPerPersonDay: "Gewinn pro Personentag",
  vat: "MwSt",
  finalClientPrice: "Endpreis für den Kunden",
  statusOk: "Grün · Auftrag rentabel",
  statusWarn: "Gelb · Budget abstimmen",
  statusDanger: "Rot · neu kalkulieren",
  statusOkSimple: "Kann angenommen werden",
  statusWarnSimple: "Nur nach Budgetabstimmung annehmen",
  statusDangerSimple: "Zu diesem Preis nicht annehmen",
  validationArea: "Fläche des Objekts eingeben",
  validationPeople: "Anzahl der Personen angeben",
  validationDays: "Anzahl der Arbeitstage angeben",
  validationDistance: "Entfernung zum Objekt angeben",
  warnMargin: "Die Marge liegt unter dem sicheren Niveau. Preis vor dem Senden prüfen.",
  warnProfitDay: "Der Gewinn pro Tag ist für eine normale Firmenauslastung zu niedrig.",
  warnPartner: "Die Partnerprovision reduziert den Gewinn bei diesem Auftrag deutlich.",
  warnTravel: "Anfahrt und Vorbereitung nehmen viel Zeit ein. Budget vorab abstimmen.",
  warnSafe: "Der Preis liegt unter dem minimal sicheren Preis. Risiko von Arbeit fast ohne Gewinn.",
  warnManualSafe: "Der manuelle Preis liegt unter dem minimal sicheren Preis. Dieser Auftrag kann fast ohne Gewinn enden.",
  manualStatusOk: "rentabel",
  manualStatusWarn: "riskant",
  manualStatusDanger: "unrentabel"
};

translations.ua = {
  ...translations.ru,
  appName: "Смета Бау",
  heroTitle: "Кошторис за 5 хвилин без роботи в мінус",
  heroCopy: "Розрахуйте реальну собівартість замовлення з урахуванням працівників, витрат, дороги, партнера та прибутку.",
  reset: "Скинути",
  save: "Зберегти",
  saved: "Збережено",
  firstRun: "Перший запуск",
  welcomeTitle: "Ласкаво просимо до Смета Бау",
  welcomeCopy: "Смета Бау допомагає швидко розрахувати будівельне замовлення, зрозуміти реальний прибуток фірми та підготувати німецький текст клієнту.",
  welcome1: "Спочатку заповніть швидкі дані об’єкта: тип роботи, площу, людей, дні та відстань.",
  welcome2: "Додаток порахує собівартість, мінімальну безпечну ціну, прибуток і маржу.",
  welcome3: "Після розрахунку ви зможете скопіювати коротке WhatsApp-повідомлення клієнту німецькою.",
  startDemo: "Почати з демо-прикладу",
  createEstimate: "Створити новий кошторис",
  setupCompany: "Налаштувати фірму",
  hideWelcome: "Більше не показувати",
  navEstimate: "Новий кошторис",
  navPrices: "Мої ціни",
  navSettings: "Працівники та витрати",
  navResult: "Результат",
  howTo: "Як користуватися",
  guide: [
    "1. Заповніть швидкі дані об’єкта: тип роботи, площу, складність, кількість людей, дні роботи та відстань.",
    "2. Натисніть “Розрахувати кошторис”.",
    "3. Подивіться головні цифри: рекомендована ціна клієнту, мінімальна безпечна ціна, собівартість, прибуток, маржа та статус замовлення.",
    "4. Якщо хочете зрозуміти розрахунок детально, відкрийте блок “Детальний розрахунок”.",
    "5. Якщо клієнт просить дешевше, використайте блок “Перевірити свою ціну”. Введіть ціну для клієнта, і додаток покаже, скільки прибутку залишиться.",
    "6. Клієнту надсилайте тільки текст із блоку “Що надсилаємо клієнту”. Внутрішній розрахунок, собівартість, зарплати, маржу та прибуток клієнту не показуйте.",
    "7. Якщо розрахунок показує червоний статус, не надсилайте ціну одразу. Перевірте витрати, комісію партнера, дорогу та мінімальну безпечну ціну.",
    "8. Пам’ятайте: розрахунок є орієнтовним. Точна ціна залежить від стану об’єкта, прихованих дефектів, матеріалів і умов на місці."
  ],
  newEstimateEyebrow: "Новий кошторис",
  quickCalcTitle: "Швидкий розрахунок замовлення",
  useDemo: "Використати демо-налаштування",
  resetDemo: "Скинути демо-дані",
  workType: "Тип роботи",
  area: "Площа м²",
  complexity: "Складність",
  people: "Людей на об’єкті",
  days: "Днів роботи",
  distance: "Відстань, км",
  partnerBrought: "Клієнта привів партнер",
  calculate: "Розрахувати кошторис",
  simpleNote: "Налаштування фірми можна зробити пізніше. Для першого тесту достатньо цих полів.",
  advanced: "Детальний розрахунок / Додаткові налаштування",
  clientObject: "Клієнт / об’єкт",
  city: "Місто",
  selectedEmployees: "Обрані працівники",
  manualHours: "Години вручну",
  manualMaterials: "Матеріали вручну, €",
  adminHours: "Огляд/кошторис/організація, год",
  demolition: "Демонтаж",
  preparation: "Підготовка основи",
  partnerCommission: "Комісія партнера",
  partnerHint: "Комісія партнера — гроші за приведеного клієнта. Вона зменшує ваш прибуток.",
  commissionSize: "Розмір комісії",
  paidVisit: "Платний виїзд",
  paidVisitPrice: "Вартість платного виїзду, €",
  pricesEyebrow: "Мої ціни",
  workTemplates: "Шаблони робіт",
  addTemplate: "+ Шаблон",
  settingsEyebrow: "Працівники та витрати",
  realCostTitle: "Реальна собівартість фірми",
  company: "Фірма",
  companyName: "Назва фірми",
  taxMode: "Податковий режим",
  includeVat: "Включати ПДВ у ціну клієнту",
  minProfit: "Мінімальний прибуток, %",
  minProfitHint: "Це нижня межа маржі, за якої замовлення ще має сенс для фірми.",
  riskReserve: "Ризик/резерв за замовчуванням, %",
  riskHint: "Ризик — резерв на непередбачені роботи: докупки, переробки, простої та приховані дефекти.",
  defaultPartner: "Комісія партнера за замовчуванням, %",
  visitPrice: "Вартість виїзду, €",
  kmPrice: "Ціна за км, €",
  wizardTitle: "Налаштувати фірму за 3 хвилини",
  apply: "Застосувати",
  step1: "Крок 1",
  step2: "Крок 2",
  step3: "Крок 3",
  step4: "Крок 4",
  whoWorks: "Хто працює у фірмі?",
  employeeCount: "Кількість працівників",
  avgHourCost: "Середня вартість години, €",
  productiveTime: "Продуктивний час, %",
  productiveHint: "Продуктивний час — це години, за які працівник реально приносить гроші. Дорога, закупівля матеріалів і простої сюди не входять.",
  fixedCosts: "Постійні витрати",
  fixedCostsHint: "Ці витрати фірма платить щомісяця. Додаток розподіляє їх на замовлення, щоб ви не працювали в мінус.",
  vehicle: "Авто, €/міс",
  insurance: "Страхування, €/міс",
  accountant: "Бухгалтер, €/міс",
  ads: "Реклама, €/міс",
  tools: "Інструмент, €/міс",
  other: "Інше, €/міс",
  calcRules: "Правила розрахунку",
  desiredMargin: "Мінімальна бажана маржа, %",
  riskPercent: "Ризик / резерв, %",
  defaultPartnerPercent: "Комісія партнера, %",
  taxModeLabel: "Податковий режим",
  ready: "Готово",
  readyText: "Тепер можна рахувати перший кошторис. Налаштування можна змінити пізніше.",
  goEstimate: "Перейти до нового кошторису",
  employees: "Працівники",
  addEmployee: "+ Додати",
  productiveSectionHint: "Продуктивний час — це години, за які працівник реально приносить гроші. Дорога, закупки та простої сюди не входять.",
  overheads: "Постійні витрати фірми",
  overheadsHint: "Постійні витрати — це гроші, які фірма платить щомісяця, навіть якщо об’єкт маленький.",
  resultEyebrow: "Результат",
  resultTitle: "Ціна, нижче якої не варто опускатися",
  noCalc: "Немає розрахунку",
  clickCalculate: "Натисніть “Розрахувати кошторис”",
  recommendedPrice: "Рекомендована ціна клієнту",
  safePriceDanger: "Нижче цієї ціни замовлення брати небезпечно",
  safePriceHint: "Мінімальна безпечна ціна — нижче цієї суми замовлення може бути невигідним.",
  selfCost: "Собівартість",
  profit: "Прибуток",
  margin: "Маржа",
  marginHint: "Маржа — скільки залишається фірмі після витрат.",
  orderCheck: "Перевірка замовлення",
  checkPriceTitle: "Хочете перевірити свою ціну?",
  checkPriceHint: "Введіть ціну, яку хочете назвати клієнту, і програма покаже прибуток та ризик.",
  desiredClientPrice: "Бажана ціна клієнту, €",
  manualPriceEmpty: "Введіть ціну, щоб побачити прибуток і маржу.",
  copyWhatsapp: "Скопіювати WhatsApp-текст",
  newEstimate: "Новий кошторис",
  showBreakdown: "Показати детальний розрахунок",
  hideBreakdown: "Сховати детальний розрахунок",
  howCalculated: "Детальний розрахунок",
  internalHint: "Це внутрішня інформація для власника фірми. Клієнту її не показувати.",
  sendToClient: "Що надсилаємо клієнту",
  clientTextHint: "Цей текст можна надіслати клієнту. Він не містить внутрішню собівартість і прибуток.",
  copyFullGerman: "Скопіювати повний німецький текст",
  customerOffer: "Пропозиція для клієнта",
  copyGerman: "Скопіювати німецький текст",
  showInstruction: "Показати інструкцію знову",
  footer: "Тестова версія. Розрахунок є орієнтовним і не замінює професійний кошторис.",
  copied: "Скопійовано",
  whatsappShort: "Коротке WhatsApp-повідомлення",
  fullOffer: "Повний текст пропозиції",
  germanClientText: "Німецький текст для клієнта",
  russianTranslation: "Російський переклад",
  ukrainianTranslation: "Український переклад",
  materials: "Матеріали",
  workHours: "Робочі години",
  employeeCost: "Вартість працівників",
  adminCost: "Адмін/кошторис/організація",
  travel: "Дорога",
  overheadShare: "Частка постійних витрат фірми",
  risk: "Ризик/резерв",
  profitPerDay: "Прибуток за день",
  profitPerPersonDay: "Прибуток на людино-день",
  vat: "ПДВ",
  finalClientPrice: "Підсумкова ціна клієнту",
  statusOk: "Зелений · замовлення вигідне",
  statusWarn: "Жовтий · узгодити бюджет",
  statusDanger: "Червоний · перерахувати",
  statusOkSimple: "Можна брати",
  statusWarnSimple: "Брати тільки після узгодження бюджету",
  statusDangerSimple: "Не брати за такою ціною",
  validationArea: "Введіть площу об’єкта",
  validationPeople: "Вкажіть кількість людей",
  validationDays: "Вкажіть кількість днів",
  validationDistance: "Вкажіть відстань до об’єкта",
  warnMargin: "Маржа нижче безпечного рівня. Перевірте ціну перед відправкою клієнту.",
  warnProfitDay: "Прибуток за день занадто малий для нормального завантаження фірми.",
  warnPartner: "Комісія партнера помітно зменшує прибуток по цьому замовленню.",
  warnTravel: "Дорога і підготовка займають багато часу. Не варто їхати без попереднього узгодження бюджету.",
  warnSafe: "Ціна нижче мінімальної безпечної. Є ризик роботи майже без прибутку.",
  warnManualSafe: "Ручна ціна нижче мінімальної безпечної. Таке замовлення легко піде майже без прибутку.",
  manualStatusOk: "вигідно",
  manualStatusWarn: "ризиковано",
  manualStatusDanger: "невигідно"
};

Object.assign(translations.ru, {
  category: "Направление",
  templateName: "Название работы",
  unit: "Единица",
  hoursPerUnit: "Часы на единицу",
  materialPerUnit: "Материал на единицу, €",
  preparationPerUnit: "Подготовка, ч/ед.",
  demolitionPerUnit: "Демонтаж, ч/ед.",
  disposalPerUnit: "Вывоз мусора, €/ед.",
  materialMarkup: "Наценка на материалы, %",
  minPositionPrice: "Мин. цена позиции, €",
  employeeName: "Имя",
  employeeType: "Тип",
  bruttoRate: "Brutto/ставка",
  extraCost: "Доп. расходы %",
  hoursMonth: "Часы/мес",
  productivePercent: "Продуктивно %",
  internalHourCost: "Себестоимость €/ч",
  settingsApplied: "Настройки применены",
  ifNeeded: "если нужно",
  ifKnown: "если известно"
});

Object.assign(translations.de, {
  category: "Bereich",
  templateName: "Leistung",
  unit: "Einheit",
  hoursPerUnit: "Stunden pro Einheit",
  materialPerUnit: "Material pro Einheit, €",
  preparationPerUnit: "Vorbereitung, Std./Einheit",
  demolitionPerUnit: "Demontage, Std./Einheit",
  disposalPerUnit: "Entsorgung, €/Einheit",
  materialMarkup: "Materialaufschlag, %",
  minPositionPrice: "Mindestpreis Position, €",
  employeeName: "Name",
  employeeType: "Typ",
  bruttoRate: "Brutto/Satz",
  extraCost: "Zusatzkosten %",
  hoursMonth: "Std./Monat",
  productivePercent: "Produktiv %",
  internalHourCost: "Interne Kosten €/Std.",
  settingsApplied: "Einstellungen übernommen",
  ifNeeded: "falls nötig",
  ifKnown: "falls bekannt"
});

Object.assign(translations.ua, {
  category: "Напрям",
  templateName: "Назва роботи",
  unit: "Одиниця",
  hoursPerUnit: "Години на одиницю",
  materialPerUnit: "Матеріал на одиницю, €",
  preparationPerUnit: "Підготовка, год/од.",
  demolitionPerUnit: "Демонтаж, год/од.",
  disposalPerUnit: "Вивіз сміття, €/од.",
  materialMarkup: "Націнка на матеріали, %",
  minPositionPrice: "Мін. ціна позиції, €",
  employeeName: "Ім’я",
  employeeType: "Тип",
  bruttoRate: "Brutto/ставка",
  extraCost: "Дод. витрати %",
  hoursMonth: "Год/міс",
  productivePercent: "Продуктивно %",
  internalHourCost: "Собівартість €/год",
  settingsApplied: "Налаштування застосовано",
  ifNeeded: "якщо потрібно",
  ifKnown: "якщо відомо"
});

const overheadLabels = {
  accountant: "Бухгалтер",
  vehicle: "Машина",
  insurance: "Страховки",
  tools: "Инструмент",
  ads: "Реклама",
  phone: "Телефон/интернет",
  storage: "Склад/офис",
  software: "Софт",
  other: "Прочее"
};

const defaultState = {
  company: {
    name: "BauTeam Muster GmbH",
    taxMode: "regel",
    includeVat: true,
    visitPrice: 60,
    kmPrice: 0.75,
    minProfit: 18,
    defaultRisk: 8,
    defaultPartnerCommission: 10
  },
  employees: [
    { name: "Ivan", type: "Vollzeit", pay: 3200, extra: 23, hours: 173, productive: 78 },
    { name: "Sergej", type: "Teilzeit", pay: 1850, extra: 22, hours: 110, productive: 76 },
    { name: "Sub Alex", type: "Subunternehmer", pay: 38, extra: 0, hours: 160, productive: 100 }
  ],
  overheads: {
    accountant: 180,
    vehicle: 620,
    insurance: 240,
    tools: 190,
    ads: 260,
    phone: 85,
    storage: 420,
    software: 90,
    other: 180
  },
  templates: [
    {
      category: "Trockenbau",
      name: "Gipskartonwand stellen",
      unit: "м²",
      hoursPerUnit: 0.72,
      materialPerUnit: 18,
      complexity: "medium",
      preparation: 0.12,
      demolition: 0.18,
      disposal: 3.5,
      materialMarkup: 18,
      minPrice: 450
    },
    {
      category: "Trockenbau",
      name: "Decke abhängen",
      unit: "м²",
      hoursPerUnit: 0.95,
      materialPerUnit: 24,
      complexity: "hard",
      preparation: 0.1,
      demolition: 0.2,
      disposal: 4,
      materialMarkup: 20,
      minPrice: 650
    },
    {
      category: "Malerarbeiten",
      name: "Wände spachteln und streichen",
      unit: "м²",
      hoursPerUnit: 0.38,
      materialPerUnit: 6.5,
      complexity: "medium",
      preparation: 0.16,
      demolition: 0.05,
      disposal: 1.2,
      materialMarkup: 25,
      minPrice: 350
    },
    {
      category: "Malerarbeiten",
      name: "Fassade streichen",
      unit: "м²",
      hoursPerUnit: 0.48,
      materialPerUnit: 8.5,
      complexity: "hard",
      preparation: 0.22,
      demolition: 0.04,
      disposal: 1.5,
      materialMarkup: 25,
      minPrice: 900
    }
  ],
  project: {
    clientName: "Familie Schneider",
    city: "Düsseldorf",
    distanceKm: 24,
    workType: 0,
    quantity: 42,
    complexity: "medium",
    selectedEmployees: [0, 1],
    peopleCount: 2,
    daysCount: 3,
    manualHours: "",
    manualMaterials: "",
    hasDemolition: false,
    hasPreparation: true,
    hasPartner: false,
    partnerMode: "turnover",
    partnerValue: 10,
    adminHours: 3,
    paidVisit: false,
    paidVisitPrice: 60,
    manualClientPrice: ""
  },
  lastResult: null
};

let state = loadState();
let currentView = "internal";
let currentLang = localStorage.getItem(LANGUAGE_KEY) || "ru";

const $ = (id) => document.getElementById(id);
const money = (value) => `${Math.round(value).toLocaleString("de-DE")} €`;
const num = (value) => Number(value) || 0;
const t = (key) => translations[currentLang]?.[key] ?? translations.ru[key] ?? key;

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function setAllText(selector, values) {
  document.querySelectorAll(selector).forEach((el, index) => {
    if (values[index] !== undefined) el.textContent = values[index];
  });
}

function setLabelText(selector, value) {
  const label = document.querySelector(selector);
  if (!label) return;
  const node = Array.from(label.childNodes).find((child) => child.nodeType === Node.TEXT_NODE && child.textContent.trim());
  if (node) node.textContent = `${value}\n              `;
}

function setPlaceholder(id, value) {
  const el = $(id);
  if (el) el.placeholder = value;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? mergeState(defaultState, saved) : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function mergeState(base, saved) {
  return {
    ...structuredClone(base),
    ...saved,
    company: { ...base.company, ...saved.company },
    overheads: { ...base.overheads, ...saved.overheads },
    project: { ...base.project, ...saved.project }
  };
}

function applyLanguage() {
  document.documentElement.lang = currentLang === "ua" ? "uk" : currentLang;
  document.title = t("appName");
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  setText(".app-header .eyebrow", t("appName"));
  setText(".app-header h1", t("heroTitle"));
  setText(".hero-copy", t("heroCopy"));
  setText("#resetCalculationBtn", t("reset"));
  setText("#saveSettingsBtn", t("save"));
  setText("#welcomePanel .eyebrow", t("firstRun"));
  setText("#welcomePanel h2", t("welcomeTitle"));
  setText(".welcome-copy", t("welcomeCopy"));
  setAllText(".welcome-points p", [t("welcome1"), t("welcome2"), t("welcome3")]);
  setText("#welcomeDemoBtn", t("startDemo"));
  setText("#welcomeNewBtn", t("createEstimate"));
  setText("#welcomeSettingsBtn", t("setupCompany"));
  setText("#hideWelcomeBtn", t("hideWelcome"));
  setAllText(".tab", [t("navEstimate"), t("navPrices"), t("navSettings"), t("navResult")]);
  setText("#usageGuide summary", t("howTo"));
  setAllText(".guide-body p", t("guide"));

  setText("#calculator .section-head .eyebrow", t("newEstimateEyebrow"));
  setText("#calculator .section-head h2", t("quickCalcTitle"));
  setText("#loadDemoBtn", t("useDemo"));
  setText("#resetDemoBtn", t("resetDemo"));
  setLabelText("label:has(#workType)", t("workType"));
  setLabelText("label:has(#quantity)", t("area"));
  setLabelText("label:has(#complexity)", t("complexity"));
  setLabelText("label:has(#peopleCount)", t("people"));
  setLabelText("label:has(#daysCount)", t("days"));
  setLabelText("label:has(#distanceKm)", t("distance"));
  setText("label:has(#hasPartner) span", t("partnerBrought"));
  setText("#calculateBtn", t("calculate"));
  setText(".simple-note", t("simpleNote"));
  setText(".advanced-box summary", t("advanced"));
  setLabelText("label:has(#clientName)", t("clientObject"));
  setLabelText("label:has(#city)", t("city"));
  setLabelText("label:has(#employeeSelect)", t("selectedEmployees"));
  setLabelText("label:has(#manualHours)", t("manualHours"));
  setLabelText("label:has(#manualMaterials)", t("manualMaterials"));
  setPlaceholder("manualHours", t("ifNeeded"));
  setPlaceholder("manualMaterials", t("ifKnown"));
  setLabelText("label:has(#adminHours)", t("adminHours"));
  setText("label:has(#hasDemolition) span", t("demolition"));
  setText("label:has(#hasPreparation) span", t("preparation"));
  setLabelText("label:has(#partnerMode)", t("partnerCommission"));
  setText("label:has(#partnerMode) .field-hint", t("partnerHint"));
  setLabelText("label:has(#partnerValue)", t("commissionSize"));
  setText("label:has(#paidVisit) span", t("paidVisit"));
  setLabelText("label:has(#paidVisitPrice)", t("paidVisitPrice"));

  setText("#templates .section-head .eyebrow", t("pricesEyebrow"));
  setText("#templates .section-head h2", t("workTemplates"));
  setText("#addTemplateBtn", t("addTemplate"));
  setText("#settings .section-head .eyebrow", t("settingsEyebrow"));
  setText("#settings .section-head h2", t("realCostTitle"));
  setText(".settings-card h3", t("company"));
  setLabelText("label:has(#companyName)", t("companyName"));
  setLabelText("label:has(#taxMode)", t("taxMode"));
  setText("label:has(#includeVat) span", t("includeVat"));
  setLabelText("label:has(#minProfit)", t("minProfit"));
  setText("label:has(#minProfit) .field-hint", t("minProfitHint"));
  setLabelText("label:has(#defaultRisk)", t("riskReserve"));
  setText("label:has(#defaultRisk) .field-hint", t("riskHint"));
  setLabelText("label:has(#defaultPartnerCommission)", t("defaultPartner"));
  setLabelText("label:has(#visitPrice)", t("visitPrice"));
  setLabelText("label:has(#kmPrice)", t("kmPrice"));

  setText(".setup-wizard .subhead h3", t("wizardTitle"));
  setText("#applyWizardBtn", t("apply"));
  setAllText(".step-label", [t("step1"), t("step2"), t("step3"), t("step4")]);
  setAllText(".wizard-steps h4", [t("whoWorks"), t("fixedCosts"), t("calcRules"), t("ready")]);
  setLabelText("label:has(#wizardEmployeeCount)", t("employeeCount"));
  setLabelText("label:has(#wizardHourCost)", t("avgHourCost"));
  setLabelText("label:has(#wizardProductive)", t("productiveTime"));
  setText("label:has(#wizardProductive) .field-hint", t("productiveHint"));
  setText(".wizard-steps article:nth-child(2) .section-hint", t("fixedCostsHint"));
  setLabelText("label:has(#wizardVehicle)", t("vehicle"));
  setLabelText("label:has(#wizardInsurance)", t("insurance"));
  setLabelText("label:has(#wizardAccountant)", t("accountant"));
  setLabelText("label:has(#wizardAds)", t("ads"));
  setLabelText("label:has(#wizardTools)", t("tools"));
  setLabelText("label:has(#wizardOther)", t("other"));
  setLabelText("label:has(#wizardMinProfit)", t("desiredMargin"));
  setLabelText("label:has(#wizardRisk)", t("riskPercent"));
  setLabelText("label:has(#wizardPartnerCommission)", t("defaultPartnerPercent"));
  setLabelText("label:has(#wizardTaxMode)", t("taxModeLabel"));
  setText(".wizard-steps article:nth-child(4) p", t("readyText"));
  setText("#wizardToCalculatorBtn", t("goEstimate"));
  setAllText("#settings > .subhead h3", [t("employees"), t("overheads")]);
  setText("#addEmployeeBtn", t("addEmployee"));
  setAllText("#settings > .section-hint", [t("productiveSectionHint"), t("overheadsHint")]);
  setAllText("thead th", [
    t("employeeName"),
    t("employeeType"),
    t("bruttoRate"),
    t("extraCost"),
    t("hoursMonth"),
    t("productivePercent"),
    t("internalHourCost"),
    ""
  ]);

  setText("#result .section-head .eyebrow", t("resultEyebrow"));
  setText("#result .section-head h2", t("resultTitle"));
  setAllText(".segmented button", ["Interne Ansicht", "Kundenansicht"]);
  setText(".metric-card.main span", t("recommendedPrice"));
  setText(".metric-card.danger-note span", t("safePriceDanger"));
  setText(".metric-card.danger-note .metric-hint", t("safePriceHint"));
  setAllText(".metric-grid .metric-card:not(.main):not(.danger-note) > span", [t("selfCost"), t("profit"), t("margin")]);
  setText(".metric-grid .metric-card:nth-child(5) .metric-hint", t("marginHint"));
  setText("#orderCheck h3", t("orderCheck"));
  setText(".manual-price h3", t("checkPriceTitle"));
  setText(".manual-price .section-hint", t("checkPriceHint"));
  setLabelText("label:has(#manualClientPrice)", t("desiredClientPrice"));
  setPlaceholder("manualClientPrice", currentLang === "de" ? "z. B. 4500" : currentLang === "ua" ? "наприклад 4500" : "например 4500");
  setText("#copyWhatsappBtn", t("copyWhatsapp"));
  setText("#newEstimateBtn", t("newEstimate"));
  setText("#toggleBreakdownBtn", $("breakdownPanel")?.hidden ? t("showBreakdown") : t("hideBreakdown"));
  setText(".breakdown-panel h3", t("howCalculated"));
  setText(".breakdown-panel .section-hint", t("internalHint"));
  setText(".send-card h3", t("sendToClient"));
  setText(".send-card .section-hint", t("clientTextHint"));
  setText("#copyGermanInlineBtn", t("copyFullGerman"));
  setText("#customerTitle", t("customerOffer"));
  setText("#copyGermanBtn", t("copyGerman"));
  setText("#showWelcomeAgainBtn", t("showInstruction"));
  setText(".app-footer span", t("footer"));

  setComplexityOptions();
  renderWorkTypeOptions();
  if (state.lastResult) renderResult(state.lastResult);
  else resetEmptyResultText();
}

function resetEmptyResultText() {
  $("statusBadge").className = "status";
  $("statusBadge").textContent = t("noCalc");
  $("marginText").textContent = t("clickCalculate");
  $("statusExplanation").textContent = t("clickCalculate");
  $("orderCheckText").textContent = t("clickCalculate");
  $("manualPriceResult").textContent = t("manualPriceEmpty");
}

function setComplexityOptions() {
  const labels = {
    ru: { simple: "simple", medium: "medium", hard: "hard" },
    de: { simple: "einfach", medium: "mittel", hard: "schwer" },
    ua: { simple: "просто", medium: "середньо", hard: "складно" }
  }[currentLang];
  document.querySelectorAll("#complexity option").forEach((option) => {
    option.textContent = labels[option.value] || option.value;
  });
}

function saveState(showMessage = true) {
  syncFromDom();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (showMessage) {
    $("saveState").textContent = t("saved");
    setTimeout(() => ($("saveState").textContent = "localStorage"), 1400);
  }
}

function employeeHourCost(employee) {
  if (employee.type === "Subunternehmer") return num(employee.pay);
  const productiveHours = Math.max(1, num(employee.hours) * (num(employee.productive) / 100));
  return (num(employee.pay) * (1 + num(employee.extra) / 100)) / productiveHours;
}

function getTrockenbauTemplateIndex() {
  const index = state.templates.findIndex((tpl) => tpl.category.toLowerCase().includes("trockenbau"));
  return index >= 0 ? index : 0;
}

function renderEmployees() {
  const hourUnit = currentLang === "de" ? "€/Std." : currentLang === "ua" ? "€/год" : "€/ч";
  $("employeesBody").innerHTML = state.employees.map((employee, index) => `
    <tr>
      <td><input data-employee="${index}" data-field="name" value="${escapeHtml(employee.name)}"></td>
      <td>
        <select data-employee="${index}" data-field="type">
          ${["Vollzeit", "Teilzeit", "Minijob", "Subunternehmer"].map((type) => `<option ${employee.type === type ? "selected" : ""}>${type}</option>`).join("")}
        </select>
      </td>
      <td><input type="number" step="1" data-employee="${index}" data-field="pay" value="${employee.pay}"></td>
      <td><input type="number" step="1" data-employee="${index}" data-field="extra" value="${employee.extra}"></td>
      <td><input type="number" step="1" data-employee="${index}" data-field="hours" value="${employee.hours}"></td>
      <td><input type="number" step="1" data-employee="${index}" data-field="productive" value="${employee.productive}"></td>
      <td><strong>${employeeHourCost(employee).toFixed(2)} ${hourUnit}</strong></td>
      <td><button class="icon-btn" data-remove-employee="${index}" type="button" title="Удалить">×</button></td>
    </tr>
  `).join("");
  renderEmployeeSelect();
}

function renderEmployeeSelect() {
  const hourUnit = currentLang === "de" ? "€/Std." : currentLang === "ua" ? "€/год" : "€/ч";
  $("employeeSelect").innerHTML = state.employees.map((employee, index) => `
    <option value="${index}" ${state.project.selectedEmployees.includes(index) ? "selected" : ""}>
      ${escapeHtml(employee.name)} · ${employeeHourCost(employee).toFixed(2)} ${hourUnit}
    </option>
  `).join("");
}

function renderOverheads() {
  const labels = {
    accountant: t("accountant").replace(", €/мес", "").replace(", €/Monat", "").replace(", €/міс", ""),
    vehicle: t("vehicle").replace(", €/мес", "").replace(", €/Monat", "").replace(", €/міс", ""),
    insurance: t("insurance").replace(", €/мес", "").replace(", €/Monat", "").replace(", €/міс", ""),
    tools: t("tools").replace(", €/мес", "").replace(", €/Monat", "").replace(", €/міс", ""),
    ads: t("ads").replace(", €/мес", "").replace(", €/Monat", "").replace(", €/міс", ""),
    phone: currentLang === "de" ? "Telefon/Internet" : currentLang === "ua" ? "Телефон/інтернет" : "Телефон/интернет",
    storage: currentLang === "de" ? "Lager/Büro" : currentLang === "ua" ? "Склад/офіс" : "Склад/офис",
    software: currentLang === "de" ? "Software" : "Софт",
    other: t("other").replace(", €/мес", "").replace(", €/Monat", "").replace(", €/міс", "")
  };
  $("overheadsGrid").innerHTML = Object.entries(overheadLabels).map(([key, label]) => `
    <label>${labels[key] || label}
      <input type="number" min="0" step="5" data-overhead="${key}" value="${state.overheads[key]}">
    </label>
  `).join("");
  updateOverheadTotal();
}

function renderTemplates() {
  $("templatesGrid").innerHTML = state.templates.map((tpl, index) => `
    <article class="template-card">
      <header>
        <div>
          <span class="pill">${escapeHtml(tpl.category)}</span>
          <h3>${escapeHtml(tpl.name)}</h3>
        </div>
        <button class="icon-btn" data-remove-template="${index}" type="button" title="Удалить">×</button>
      </header>
      <div class="grid two">
        ${templateInput(index, "category", t("category"), tpl.category)}
        ${templateInput(index, "name", t("templateName"), tpl.name)}
        ${templateSelect(index, "unit", t("unit"), tpl.unit, ["м²", "погонный метр", "штука", "час"])}
        ${templateInput(index, "hoursPerUnit", t("hoursPerUnit"), tpl.hoursPerUnit, "number", "0.01")}
        ${templateInput(index, "materialPerUnit", t("materialPerUnit"), tpl.materialPerUnit, "number", "0.1")}
        ${templateSelect(index, "complexity", t("complexity"), tpl.complexity, ["simple", "medium", "hard"])}
        ${templateInput(index, "preparation", t("preparationPerUnit"), tpl.preparation, "number", "0.01")}
        ${templateInput(index, "demolition", t("demolitionPerUnit"), tpl.demolition, "number", "0.01")}
        ${templateInput(index, "disposal", t("disposalPerUnit"), tpl.disposal, "number", "0.1")}
        ${templateInput(index, "materialMarkup", t("materialMarkup"), tpl.materialMarkup, "number", "1")}
        ${templateInput(index, "minPrice", t("minPositionPrice"), tpl.minPrice, "number", "10")}
      </div>
    </article>
  `).join("");
  renderWorkTypeOptions();
}

function templateInput(index, field, label, value, type = "text", step = "1") {
  return `<label>${label}<input type="${type}" step="${step}" data-template="${index}" data-field="${field}" value="${escapeHtml(String(value))}"></label>`;
}

function templateSelect(index, field, label, value, options) {
  return `<label>${label}<select data-template="${index}" data-field="${field}">
    ${options.map((option) => `<option value="${option}" ${value === option ? "selected" : ""}>${option}</option>`).join("")}
  </select></label>`;
}

function renderWorkTypeOptions() {
  $("workType").innerHTML = state.templates.map((tpl, index) => `
    <option value="${index}" ${Number(state.project.workType) === index ? "selected" : ""}>${escapeHtml(tpl.category)} · ${escapeHtml(tpl.name)}</option>
  `).join("");
}

function fillDom() {
  $("companyName").value = state.company.name;
  $("taxMode").value = state.company.taxMode;
  $("includeVat").checked = state.company.includeVat;
  $("visitPrice").value = state.company.visitPrice;
  $("kmPrice").value = state.company.kmPrice;
  $("minProfit").value = state.company.minProfit;
  $("defaultRisk").value = state.company.defaultRisk;
  $("defaultPartnerCommission").value = state.company.defaultPartnerCommission;
  $("wizardEmployeeCount").value = Math.max(1, state.employees.length || 1);
  $("wizardHourCost").value = Math.round(
    state.employees.reduce((sum, employee) => sum + employeeHourCost(employee), 0) / Math.max(1, state.employees.length)
  );
  $("wizardProductive").value = state.employees[0]?.productive || 75;
  $("wizardVehicle").value = state.overheads.vehicle;
  $("wizardInsurance").value = state.overheads.insurance;
  $("wizardAccountant").value = state.overheads.accountant;
  $("wizardAds").value = state.overheads.ads;
  $("wizardTools").value = state.overheads.tools;
  $("wizardOther").value = state.overheads.other;
  $("wizardMinProfit").value = state.company.minProfit;
  $("wizardRisk").value = state.company.defaultRisk;
  $("wizardPartnerCommission").value = state.company.defaultPartnerCommission;
  $("wizardTaxMode").value = state.company.taxMode;

  Object.entries(state.project).forEach(([key, value]) => {
    const el = $(key);
    if (!el || key === "selectedEmployees") return;
    if (el.type === "checkbox") el.checked = Boolean(value);
    else el.value = value;
  });

  renderEmployees();
  renderOverheads();
  renderTemplates();
  renderResult(state.lastResult);
}

function syncFromDom() {
  state.company = {
    name: $("companyName").value.trim() || "Смета Бау Firma",
    taxMode: $("taxMode").value,
    includeVat: $("includeVat").checked,
    visitPrice: num($("visitPrice").value),
    kmPrice: num($("kmPrice").value),
    minProfit: num($("minProfit").value),
    defaultRisk: num($("defaultRisk").value),
    defaultPartnerCommission: num($("defaultPartnerCommission").value)
  };

  state.project = {
    clientName: $("clientName").value,
    city: $("city").value,
    distanceKm: num($("distanceKm").value),
    workType: Number($("workType").value) || 0,
    quantity: num($("quantity").value),
    complexity: $("complexity").value,
    selectedEmployees: Array.from($("employeeSelect").selectedOptions).map((option) => Number(option.value)),
    peopleCount: Math.max(1, num($("peopleCount").value)),
    daysCount: num($("daysCount").value),
    manualHours: $("manualHours").value,
    manualMaterials: $("manualMaterials").value,
    hasDemolition: $("hasDemolition").checked,
    hasPreparation: $("hasPreparation").checked,
    hasPartner: $("hasPartner").checked,
    partnerMode: $("partnerMode").value,
    partnerValue: num($("partnerValue").value),
    adminHours: num($("adminHours").value),
    paidVisit: $("paidVisit").checked,
    paidVisitPrice: num($("paidVisitPrice").value),
    manualClientPrice: $("manualClientPrice")?.value || ""
  };
}

function calculate() {
  if (!validateProjectInput()) return;
  syncFromDom();
  const project = state.project;
  const company = state.company;
  const tpl = state.templates[project.workType] || state.templates[0];
  const complexityFactor = { simple: 0.9, medium: 1, hard: 1.25 }[project.complexity] || 1;
  const selected = project.selectedEmployees.length ? project.selectedEmployees : state.employees.slice(0, project.peopleCount).map((_, i) => i);
  const selectedEmployees = selected.map((index) => state.employees[index]).filter(Boolean);
  const avgHourCost = selectedEmployees.length
    ? selectedEmployees.reduce((sum, employee) => sum + employeeHourCost(employee), 0) / selectedEmployees.length
    : 35;
  const templateHours = project.quantity * (num(tpl.hoursPerUnit) * complexityFactor);
  const addPrepHours = project.hasPreparation ? project.quantity * num(tpl.preparation) : 0;
  const addDemoHours = project.hasDemolition ? project.quantity * num(tpl.demolition) : 0;
  const plannedHours = num(project.manualHours) || Math.max(templateHours + addPrepHours + addDemoHours, project.daysCount * 8 * project.peopleCount);
  const adminHours = num(project.adminHours);
  const employeeCost = plannedHours * avgHourCost;
  const adminCost = adminHours * avgHourCost;
  const materialsBase = num(project.manualMaterials) || project.quantity * num(tpl.materialPerUnit);
  const materials = materialsBase * (1 + num(tpl.materialMarkup) / 100);
  const disposal = project.hasDemolition ? project.quantity * num(tpl.disposal) : 0;
  const travel = project.distanceKm * 2 * company.kmPrice + (project.paidVisit ? project.paidVisitPrice : company.visitPrice);
  const overheadMonthly = Object.values(state.overheads).reduce((sum, value) => sum + num(value), 0);
  const productiveMonthlyHours = state.employees.reduce((sum, employee) => {
    if (employee.type === "Subunternehmer") return sum;
    return sum + num(employee.hours) * (num(employee.productive) / 100);
  }, 0) || 160;
  const overheadHourly = overheadMonthly / productiveMonthlyHours;
  const overheadShare = (plannedHours + adminHours) * overheadHourly;
  const baseCost = materials + disposal + employeeCost + adminCost + travel + overheadShare;
  const risk = baseCost * (company.defaultRisk / 100);
  const profit = Math.max((baseCost + risk) * (company.minProfit / 100), num(tpl.minPrice) - baseCost);
  const preliminaryNet = Math.max(baseCost + risk + profit, num(tpl.minPrice));
  const partnerCommission = project.hasPartner ? getPartnerCommission(project, preliminaryNet, profit) : 0;
  const netTotal = Math.max(preliminaryNet + partnerCommission, num(tpl.minPrice));
  const vat = company.taxMode === "regel" && company.includeVat ? netTotal * 0.19 : 0;
  const grossTotal = netTotal + vat;
  const realProfit = netTotal - baseCost - risk - partnerCommission;
  const margin = netTotal > 0 ? (realProfit / netTotal) * 100 : 0;
  const status = margin >= company.minProfit ? "ok" : margin >= company.minProfit * 0.55 ? "warn" : "danger";
  const targetMargin = Math.min(company.minProfit / 100, 0.75);
  const safeNet = Math.max((baseCost + risk + partnerCommission) / Math.max(0.05, 1 - targetMargin), num(tpl.minPrice));
  const safeVat = company.taxMode === "regel" && company.includeVat ? safeNet * 0.19 : 0;
  const safeGross = safeNet + safeVat;
  const safeTotalForCompare = company.includeVat ? safeGross : safeNet;
  const workingDays = Math.max(1, num(project.daysCount));
  const peopleDays = Math.max(1, num(project.peopleCount) * workingDays);
  const profitPerDay = realProfit / workingDays;
  const profitPerPersonDay = realProfit / peopleDays;

  state.lastResult = {
    tpl,
    selectedEmployees,
    plannedHours,
    avgHourCost,
    materials,
    disposal,
    employeeCost,
    adminCost,
    travel,
    overheadShare,
    partnerCommission,
    risk,
    baseCost,
    safeGross,
    safeNet,
    safeTotalForCompare,
    profitPerDay,
    profitPerPersonDay,
    profit: realProfit,
    netTotal,
    vat,
    grossTotal,
    margin,
    status,
    project: { ...project },
    company: { ...company }
  };
  saveState(false);
  renderResult(state.lastResult);
  activateTab("result");
}

function validateProjectInput() {
  const errors = [];
  if (num($("quantity").value) <= 0) errors.push(t("validationArea"));
  if (num($("peopleCount").value) <= 0) errors.push(t("validationPeople"));
  if (num($("daysCount").value) <= 0) errors.push(t("validationDays"));
  if ($("distanceKm").value.trim() === "" || num($("distanceKm").value) < 0) errors.push(t("validationDistance"));

  $("formErrors").hidden = errors.length === 0;
  $("formErrors").innerHTML = errors.map((error) => `<div>${escapeHtml(error)}</div>`).join("");
  if (errors.length) activateTab("calculator");
  return errors.length === 0;
}

function getPartnerCommission(project, turnover, profit) {
  if (project.partnerMode === "fixed") return num(project.partnerValue);
  if (project.partnerMode === "profit") return Math.max(0, profit) * (num(project.partnerValue) / 100);
  return turnover * (num(project.partnerValue) / 100);
}

function renderResult(result) {
  if (!result) return;
  const fallbackDays = Math.max(1, num(result.project?.daysCount));
  const fallbackPeopleDays = Math.max(1, num(result.project?.peopleCount) * fallbackDays);
  result.profitPerDay = Number.isFinite(result.profitPerDay) ? result.profitPerDay : result.profit / fallbackDays;
  result.profitPerPersonDay = Number.isFinite(result.profitPerPersonDay) ? result.profitPerPersonDay : result.profit / fallbackPeopleDays;
  result.baseCost = Number.isFinite(result.baseCost) ? result.baseCost : result.netTotal - result.profit;
  result.safeGross = Number.isFinite(result.safeGross) ? result.safeGross : result.grossTotal;
  const statusText = {
    ok: t("statusOk"),
    warn: t("statusWarn"),
    danger: t("statusDanger")
  }[result.status];
  $("statusBadge").className = `status ${result.status}`;
  $("statusBadge").textContent = statusText;
  $("totalPrice").textContent = money(result.grossTotal);
  $("marginText").textContent = `Маржа ${result.margin.toFixed(1)}% · ${result.company.includeVat ? "Brutto" : "Netto"}`;
  $("recommendedPrice").textContent = money(result.grossTotal);
  $("safePrice").textContent = money(result.safeGross || result.grossTotal);
  $("costPrice").textContent = money(result.baseCost || 0);
  $("profitPrice").textContent = money(result.profit);
  $("marginMetric").textContent = `${result.margin.toFixed(1)}%`;
  if ($("profitPerDay")) $("profitPerDay").textContent = money(result.profitPerDay || 0);
  if ($("profitPerPersonDay")) $("profitPerPersonDay").textContent = money(result.profitPerPersonDay || 0);
  $("statusExplanation").textContent = getStatusExplanation(result);
  renderOrderCheck(result);
  renderWarnings(result);
  updateManualPriceResult();
  $("breakdownPanel").hidden = true;
  $("toggleBreakdownBtn").textContent = "Показать подробный расчёт";

  const hourLabel = currentLang === "de" ? "Std." : currentLang === "ua" ? "год" : "ч";
  const hourCostLabel = currentLang === "de" ? "€/Std." : currentLang === "ua" ? "€/год" : "€/ч";
  const lines = [
    [t("materials"), result.materials],
    [t("workHours"), `${result.plannedHours.toFixed(1)} ${hourLabel} · ${result.avgHourCost.toFixed(2)} ${hourCostLabel}`],
    [t("employeeCost"), result.employeeCost],
    [t("adminCost"), result.adminCost],
    [t("travel"), result.travel],
    [t("overheadShare"), result.overheadShare],
    [t("partnerCommission"), result.partnerCommission],
    [t("risk"), result.risk],
    [t("profit"), result.profit],
    [t("profitPerDay"), result.profitPerDay],
    [t("profitPerPersonDay"), result.profitPerPersonDay],
    ...(result.vat > 0 ? [[t("vat"), result.vat]] : []),
    [t("finalClientPrice"), result.grossTotal]
  ];
  $("breakdown").innerHTML = lines.map(([label, value]) => `
    <div class="line-item">
      <span>${label}</span>
      <strong>${typeof value === "number" ? money(value) : value}</strong>
    </div>
  `).join("");
  renderCustomerView(result);
}

function renderOrderCheck(result) {
  const reasons = [];
  if (result.margin < result.company.minProfit) reasons.push(currentLang === "de" ? "Marge unter Ihrem Minimum" : currentLang === "ua" ? "маржа нижче вашого мінімуму" : "маржа ниже вашего минимума");
  if (result.partnerCommission > 0) reasons.push(currentLang === "de" ? "Partnerprovision vorhanden" : currentLang === "ua" ? "є комісія партнера" : "есть комиссия партнёра");
  if (result.travel + result.adminCost > result.netTotal * 0.12) reasons.push(currentLang === "de" ? "Anfahrt und Vorbereitung nehmen einen großen Teil des Preises ein" : currentLang === "ua" ? "дорога і підготовка забирають помітну частину ціни" : "дорога и подготовка забирают заметную часть цены");
  if ((result.profitPerDay || 0) < 250) reasons.push(currentLang === "de" ? "Gewinn pro Tag ist niedrig" : currentLang === "ua" ? "прибуток за день низький" : "прибыль в день низкая");

  let verdict = t("statusOkSimple");
  if (result.status === "warn") verdict = t("statusWarnSimple");
  if (result.status === "danger") verdict = t("statusDangerSimple");

  $("orderCheck").className = `order-check ${result.status}`;
  $("orderCheckText").textContent = reasons.length
    ? `${verdict}: ${reasons.slice(0, 2).join("; ")}.`
    : currentLang === "de"
      ? `${verdict}: Preis deckt Kosten, Risiko und Gewinn.`
      : currentLang === "ua"
        ? `${verdict}: ціна покриває витрати, ризик і прибуток.`
        : `${verdict}: цена покрывает расходы, риск и прибыль.`;
}

function renderWarnings(result) {
  const warnings = [];
  const minProfit = num(result.company.minProfit);
  const adminAndTravel = result.adminCost + result.travel;
  const netTotal = Math.max(1, result.netTotal);

  if (result.margin < minProfit) {
    warnings.push(t("warnMargin"));
  }
  if ((result.profitPerDay || 0) < 250) {
    warnings.push(t("warnProfitDay"));
  }
  if (result.partnerCommission > Math.max(120, result.profit * 0.25)) {
    warnings.push(t("warnPartner"));
  }
  if (adminAndTravel > netTotal * 0.12) {
    warnings.push(t("warnTravel"));
  }
  if (result.grossTotal < (result.safeGross || result.grossTotal) - 1) {
    warnings.push(t("warnSafe"));
  }
  const manualClientPrice = $("manualClientPrice") ? num($("manualClientPrice").value) : num(result.project.manualClientPrice);
  if (manualClientPrice > 0 && manualClientPrice < (result.safeGross || result.grossTotal)) {
    warnings.push(t("warnManualSafe"));
  }

  $("warningsBox").hidden = warnings.length === 0;
  $("warningsBox").innerHTML = warnings.map((warning) => `<div class="warning-item">${escapeHtml(warning)}</div>`).join("");
}

function getManualPriceResult(result, manualGross) {
  const manualNet = result.company.taxMode === "regel" && result.company.includeVat ? manualGross / 1.19 : manualGross;
  const profitBeforePartner = manualNet - result.baseCost - result.risk;
  const manualPartner = result.project.hasPartner ? getPartnerCommission(result.project, manualNet, profitBeforePartner) : 0;
  const manualProfit = manualNet - result.baseCost - result.risk - manualPartner;
  const manualMargin = manualNet > 0 ? (manualProfit / manualNet) * 100 : 0;
  const status = manualMargin >= result.company.minProfit
    ? "ok"
    : manualMargin >= result.company.minProfit * 0.55
      ? "warn"
      : "danger";
  return { manualGross, manualNet, manualPartner, manualProfit, manualMargin, status };
}

function updateManualPriceResult() {
  if (!state.lastResult || !$("manualClientPrice")) return;
  const manualGross = num($("manualClientPrice").value);
  state.project.manualClientPrice = $("manualClientPrice").value;
  if (manualGross <= 0) {
    $("manualPriceResult").className = "manual-result";
    $("manualPriceResult").textContent = t("manualPriceEmpty");
    renderWarnings(state.lastResult);
    return;
  }

  const check = getManualPriceResult(state.lastResult, manualGross);
  const statusText = {
    ok: t("manualStatusOk"),
    warn: t("manualStatusWarn"),
    danger: t("manualStatusDanger")
  }[check.status];
  const safeWarning = manualGross < (state.lastResult.safeGross || state.lastResult.grossTotal)
    ? currentLang === "de"
      ? ` Unter dem sicheren Preis ${money(state.lastResult.safeGross || state.lastResult.grossTotal)}.`
      : currentLang === "ua"
        ? ` Нижче безпечної ціни ${money(state.lastResult.safeGross || state.lastResult.grossTotal)}.`
        : ` Ниже безопасной цены ${money(state.lastResult.safeGross || state.lastResult.grossTotal)}.`
    : "";
  $("manualPriceResult").className = `manual-result ${check.status}`;
  $("manualPriceResult").textContent = currentLang === "de"
    ? `Bei ${money(manualGross)}: Gewinn ${money(check.manualProfit)}, Marge ${check.manualMargin.toFixed(1)}%, Status — ${statusText}.${safeWarning}`
    : currentLang === "ua"
      ? `При ціні ${money(manualGross)}: прибуток ${money(check.manualProfit)}, маржа ${check.manualMargin.toFixed(1)}%, статус — ${statusText}.${safeWarning}`
      : `При цене ${money(manualGross)}: прибыль ${money(check.manualProfit)}, маржа ${check.manualMargin.toFixed(1)}%, статус — ${statusText}.${safeWarning}`;
  renderWarnings(state.lastResult);
}

function getStatusExplanation(result) {
  const label = {
    ok: currentLang === "de" ? "grün" : currentLang === "ua" ? "зелений" : "зелёный",
    warn: currentLang === "de" ? "gelb" : currentLang === "ua" ? "жовтий" : "жёлтый",
    danger: currentLang === "de" ? "rot" : currentLang === "ua" ? "червоний" : "красный"
  }[result.status];
  const reasons = [];
  if (result.partnerCommission > 0) reasons.push(currentLang === "de" ? "Partnerprovision" : currentLang === "ua" ? "комісія партнера" : "комиссия партнёра");
  if (result.travel > result.baseCost * 0.06) reasons.push(currentLang === "de" ? "Anfahrt" : currentLang === "ua" ? "дорога" : "дорога");
  if (result.overheadShare > result.baseCost * 0.12) reasons.push(currentLang === "de" ? "Fixkosten" : currentLang === "ua" ? "постійні витрати" : "постоянные расходы");
  if (result.risk > result.baseCost * 0.07) reasons.push(currentLang === "de" ? "Risikoreserve" : currentLang === "ua" ? "резерв на ризик" : "резерв на риск");
  const reasonText = reasons.length
    ? currentLang === "de"
      ? `${reasons.join(", ")} reduzieren die Marge`
      : currentLang === "ua"
        ? `${reasons.join(", ")} знижують маржу`
        : `${reasons.join(", ")} снижают маржу`
    : currentLang === "de"
      ? `Marge ${result.margin.toFixed(1)}% wird mit Ihrem Minimum ${result.company.minProfit}% verglichen`
      : currentLang === "ua"
        ? `маржа ${result.margin.toFixed(1)}% порівнюється з вашим мінімумом ${result.company.minProfit}%`
        : `маржа ${result.margin.toFixed(1)}% сравнивается с вашим минимумом ${result.company.minProfit}%`;
  if (result.status === "ok") {
    return currentLang === "de"
      ? `Auftrag ${label}: Der Preis deckt Selbstkosten, Risiko und Ihren Mindestgewinn. Minimal sicherer Preis — ${money(result.safeGross || result.grossTotal)}.`
      : currentLang === "ua"
        ? `Замовлення ${label}: ціна покриває собівартість, ризик і ваш мінімальний прибуток. Мінімальна безпечна ціна — ${money(result.safeGross || result.grossTotal)}.`
        : `Заказ ${label}: цена покрывает себестоимость, риск и вашу минимальную прибыль. Минимальная безопасная цена — ${money(result.safeGross || result.grossTotal)}.`;
  }
  return currentLang === "de"
    ? `Auftrag ${label}, weil ${reasonText}. Minimal sicherer Preis — ${money(result.safeGross || result.grossTotal)}.`
    : currentLang === "ua"
      ? `Замовлення ${label}, тому що ${reasonText}. Мінімальна безпечна ціна — ${money(result.safeGross || result.grossTotal)}.`
      : `Заказ ${label}, потому что ${reasonText}. Минимальная безопасная цена — ${money(result.safeGross || result.grossTotal)}.`;
}

function renderCustomerView(result) {
  const title = `${result.company.name}: ${result.tpl.name}`;
  const rangeLow = result.grossTotal * 0.94;
  const rangeHigh = result.grossTotal * 1.08;
  const visitTextDe = result.project.paidVisit
    ? `Die Anfahrt und Besichtigung wird mit ${money(result.project.paidVisitPrice)} berechnet und bei Auftragserteilung angerechnet.`
    : "Eine gesonderte Berechnung der Besichtigung erfolgt nur nach vorheriger Vereinbarung.";
  const de = `Sehr geehrte Kundin, sehr geehrter Kunde,

für die angefragten Arbeiten "${result.tpl.name}" in ${result.project.city} kalkulieren wir aktuell einen Preisbereich von ca. ${money(rangeLow)} bis ${money(rangeHigh)} ${result.company.includeVat ? "inkl. MwSt." : "netto"}.

Enthalten sind die beschriebenen Arbeitsleistungen, Standardmaterialien, Organisation, Anfahrt und fachgerechte Ausführung.

Nicht enthalten sind verdeckte Mängel, zusätzliche Untergrundschäden, Sondermaterialien oder Leistungen, die erst nach Öffnung der Bauteile sichtbar werden.

${visitTextDe}

Dieses Angebot ist eine Vorkalkulation und wird nach Besichtigung bzw. finalem Aufmaß bestätigt.`;

  const whatsappDe = `Guten Tag, für "${result.tpl.name}" in ${result.project.city} liegt die grobe Orientierung aktuell bei ca. ${money(rangeLow)}–${money(rangeHigh)} ${result.company.includeVat ? "inkl. MwSt." : "netto"}. Die genaue Preisbestätigung erfolgt nach Besichtigung/Aufmaß. Verdeckte Mängel und Zusatzarbeiten sind nicht enthalten.${result.project.paidVisit ? ` Die Besichtigung/Anfahrt (${money(result.project.paidVisitPrice)}) wird bei Auftragserteilung angerechnet.` : ""}`;

  const ru = `Уважаемый клиент,

по запрошенной работе «${result.tpl.name}» в городе ${result.project.city} предварительный диапазон цены составляет примерно от ${money(rangeLow)} до ${money(rangeHigh)} ${result.company.includeVat ? "с НДС" : "нетто"}.

Включены описанные работы, стандартные материалы, организация, дорога и профессиональное выполнение.

Не включены скрытые дефекты, дополнительные повреждения основания, специальные материалы и работы, которые станут видны только после вскрытия конструкций.

Условие по выезду: ${result.project.paidVisit ? `платный выезд ${money(result.project.paidVisitPrice)}.` : "отдельная оплата выезда только по предварительному согласованию."}

Это предварительная смета. Финальная цена подтверждается после осмотра или точного замера.`;

  const ua = `Шановний клієнте,

за запитаною роботою «${result.tpl.name}» у місті ${result.project.city} попередній діапазон ціни становить приблизно від ${money(rangeLow)} до ${money(rangeHigh)} ${result.company.includeVat ? "з ПДВ" : "нетто"}.

Включені описані роботи, стандартні матеріали, організація, дорога та професійне виконання.

Не включені приховані дефекти, додаткові пошкодження основи, спеціальні матеріали та роботи, які стануть видимими лише після відкриття конструкцій.

Умова щодо виїзду: ${result.project.paidVisit ? `платний виїзд ${money(result.project.paidVisitPrice)} зараховується при замовленні.` : "окрема оплата виїзду тільки за попереднім погодженням."}

Це попередній кошторис. Фінальна ціна підтверджується після огляду або точного заміру.`;

  const translationBlock = currentLang === "de"
    ? ""
    : currentLang === "ua"
      ? `<div class="lang-block"><strong>${escapeHtml(t("ukrainianTranslation"))}</strong>\n${escapeHtml(ua)}</div>`
      : `<div class="lang-block"><strong>${escapeHtml(t("russianTranslation"))}</strong>\n${escapeHtml(ru)}</div>`;

  $("customerTitle").textContent = title;
  $("customerIntro").textContent = `${result.project.clientName || (currentLang === "de" ? "Kunde" : currentLang === "ua" ? "Клієнт" : "Клиент")} · ${result.project.quantity} ${result.tpl.unit}`;
  $("customerText").innerHTML = `
    <div class="lang-block compact" id="whatsappText"><strong>${escapeHtml(t("whatsappShort"))}</strong>\n${escapeHtml(whatsappDe)}</div>
    <details class="text-details" open>
      <summary>${escapeHtml(t("fullOffer"))}</summary>
      <div class="lang-block" id="germanText">${escapeHtml(de)}</div>
    </details>
    ${translationBlock}
  `;
  $("resultCustomerText").innerHTML = `
    <div class="lang-block compact" id="inlineWhatsappText"><strong>${escapeHtml(t("whatsappShort"))}</strong>\n${escapeHtml(whatsappDe)}</div>
    <details class="text-details">
      <summary>${escapeHtml(t("fullOffer"))}</summary>
      <div class="lang-block" id="inlineGermanText"><strong>${escapeHtml(t("germanClientText"))}</strong>\n${escapeHtml(de)}</div>
      ${translationBlock}
    </details>
  `;
}

function resetCalculation() {
  state.project = structuredClone(defaultState.project);
  state.lastResult = null;
  fillDom();
  $("statusBadge").className = "status";
  $("statusBadge").textContent = t("noCalc");
  $("totalPrice").textContent = "0 €";
  $("marginText").textContent = t("clickCalculate");
  $("breakdown").innerHTML = "";
  $("recommendedPrice").textContent = "0 €";
  $("safePrice").textContent = "0 €";
  $("costPrice").textContent = "0 €";
  $("profitPrice").textContent = "0 €";
  $("marginMetric").textContent = "0%";
  if ($("profitPerDay")) $("profitPerDay").textContent = "0 €";
  if ($("profitPerPersonDay")) $("profitPerPersonDay").textContent = "0 €";
  $("statusExplanation").textContent = t("clickCalculate");
  $("orderCheck").className = "order-check";
  $("orderCheckText").textContent = t("clickCalculate");
  $("manualClientPrice").value = "";
  $("manualPriceResult").className = "manual-result";
  $("manualPriceResult").textContent = t("manualPriceEmpty");
  $("warningsBox").hidden = true;
  $("warningsBox").innerHTML = "";
  $("breakdownPanel").hidden = true;
  $("toggleBreakdownBtn").textContent = "Показать подробный расчёт";
  $("customerIntro").textContent = "";
  $("customerText").innerHTML = "";
  $("resultCustomerText").innerHTML = "";
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadDemoCalculation() {
  state.company.defaultRisk = 8;
  state.company.minProfit = 18;
  state.project = {
    ...state.project,
    clientName: "Demo Objekt Wiesbaden",
    city: "Wiesbaden",
    distanceKm: 25,
    workType: getTrockenbauTemplateIndex(),
    quantity: 60,
    complexity: "medium",
    selectedEmployees: state.employees.slice(0, 3).map((_, index) => index),
    peopleCount: 3,
    daysCount: 2,
    manualHours: "",
    manualMaterials: "",
    hasDemolition: false,
    hasPreparation: true,
    hasPartner: true,
    partnerMode: "turnover",
    partnerValue: 10,
    adminHours: 4,
    paidVisit: true,
    paidVisitPrice: 50,
    manualClientPrice: ""
  };
  fillDom();
  saveState(false);
  calculate();
}

function applyWizardSetup() {
  const employeeCount = Math.max(1, Math.round(num($("wizardEmployeeCount").value)));
  const hourCost = Math.max(1, num($("wizardHourCost").value));
  const productive = Math.min(100, Math.max(1, num($("wizardProductive").value)));

  state.employees = Array.from({ length: employeeCount }, (_, index) => ({
    name: `Mitarbeiter ${index + 1}`,
    type: "Subunternehmer",
    pay: hourCost,
    extra: 0,
    hours: 160,
    productive
  }));

  state.overheads = {
    ...state.overheads,
    vehicle: num($("wizardVehicle").value),
    insurance: num($("wizardInsurance").value),
    accountant: num($("wizardAccountant").value),
    ads: num($("wizardAds").value),
    tools: num($("wizardTools").value),
    other: num($("wizardOther").value)
  };
  state.company = {
    ...state.company,
    minProfit: num($("wizardMinProfit").value),
    defaultRisk: num($("wizardRisk").value),
    defaultPartnerCommission: num($("wizardPartnerCommission").value),
    taxMode: $("wizardTaxMode").value,
    includeVat: $("wizardTaxMode").value === "regel"
  };
  fillDom();
  saveState(false);
  $("saveState").textContent = t("settingsApplied");
  setTimeout(() => ($("saveState").textContent = "localStorage"), 1600);
}

function hideWelcome() {
  localStorage.setItem(WELCOME_KEY, "1");
  $("welcomePanel").hidden = true;
}

function showWelcomeIfNeeded() {
  $("welcomePanel").hidden = localStorage.getItem(WELCOME_KEY) === "1";
}

function activateTab(id) {
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === id));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.toggle("active", panel.id === id));
}

function updateOverheadTotal() {
  const total = Object.values(state.overheads).reduce((sum, value) => sum + num(value), 0);
  $("overheadTotal").textContent = `${money(total)}/мес`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

document.addEventListener("click", (event) => {
  const tab = event.target.closest(".tab");
  if (tab) activateTab(tab.dataset.tab);

  const removeEmployee = event.target.closest("[data-remove-employee]");
  if (removeEmployee) {
    state.employees.splice(Number(removeEmployee.dataset.removeEmployee), 1);
    renderEmployees();
  }

  const removeTemplate = event.target.closest("[data-remove-template]");
  if (removeTemplate) {
    state.templates.splice(Number(removeTemplate.dataset.removeTemplate), 1);
    state.project.workType = 0;
    renderTemplates();
  }

  const viewBtn = event.target.closest("[data-view]");
  if (viewBtn) {
    currentView = viewBtn.dataset.view;
    document.querySelectorAll(".segmented button").forEach((btn) => btn.classList.toggle("active", btn.dataset.view === currentView));
    $("internalView").classList.toggle("active", currentView === "internal");
    $("customerView").classList.toggle("active", currentView === "customer");
  }

  if (event.target.closest("#toggleBreakdownBtn")) {
    const panel = $("breakdownPanel");
    panel.hidden = !panel.hidden;
    $("toggleBreakdownBtn").textContent = panel.hidden ? "Показать подробный расчёт" : "Скрыть подробный расчёт";
  }
});

document.addEventListener("input", (event) => {
  const employeeField = event.target.dataset.employee;
  if (employeeField !== undefined) {
    const employee = state.employees[Number(employeeField)];
    const field = event.target.dataset.field;
    employee[field] = event.target.type === "number" ? num(event.target.value) : event.target.value;
    return;
  }

  const overhead = event.target.dataset.overhead;
  if (overhead) {
    state.overheads[overhead] = num(event.target.value);
    updateOverheadTotal();
  }

  const template = event.target.dataset.template;
  if (template !== undefined) {
    const tpl = state.templates[Number(template)];
    const field = event.target.dataset.field;
    tpl[field] = event.target.type === "number" ? num(event.target.value) : event.target.value;
    renderWorkTypeOptions();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.dataset.employee !== undefined) {
    renderEmployees();
  }
});

$("addEmployeeBtn").addEventListener("click", () => {
  state.employees.push({ name: "Новый", type: "Vollzeit", pay: 2500, extra: 22, hours: 160, productive: 75 });
  renderEmployees();
});

$("addTemplateBtn").addEventListener("click", () => {
  state.templates.push({
    category: "Malerarbeiten",
    name: "Neue Leistung",
    unit: "м²",
    hoursPerUnit: 0.4,
    materialPerUnit: 7,
    complexity: "medium",
    preparation: 0.1,
    demolition: 0.05,
    disposal: 1,
    materialMarkup: 20,
    minPrice: 300
  });
  renderTemplates();
});

$("saveSettingsBtn").addEventListener("click", () => saveState(true));
$("calculateBtn").addEventListener("click", calculate);
document.querySelector("[data-calc-shortcut]")?.addEventListener("click", calculate);
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem(LANGUAGE_KEY, currentLang);
    renderOverheads();
    renderTemplates();
    applyLanguage();
  });
});
$("loadDemoBtn").addEventListener("click", loadDemoCalculation);
$("welcomeDemoBtn").addEventListener("click", () => {
  hideWelcome();
  loadDemoCalculation();
});
$("welcomeNewBtn").addEventListener("click", () => {
  hideWelcome();
  activateTab("calculator");
});
$("welcomeSettingsBtn").addEventListener("click", () => {
  hideWelcome();
  activateTab("settings");
});
$("hideWelcomeBtn").addEventListener("click", hideWelcome);
$("showWelcomeAgainBtn").addEventListener("click", () => {
  localStorage.removeItem(WELCOME_KEY);
  $("welcomePanel").hidden = false;
  $("usageGuide").open = true;
  activateTab("calculator");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
$("applyWizardBtn").addEventListener("click", applyWizardSetup);
$("wizardToCalculatorBtn").addEventListener("click", () => {
  applyWizardSetup();
  activateTab("calculator");
});
$("resetDemoBtn").addEventListener("click", () => {
  resetCalculation();
  activateTab("calculator");
});
$("resetCalculationBtn").addEventListener("click", resetCalculation);
$("manualClientPrice").addEventListener("input", updateManualPriceResult);
$("newEstimateBtn").addEventListener("click", () => {
  resetCalculation();
  activateTab("calculator");
});
$("copyWhatsappBtn").addEventListener("click", async () => {
  const text = $("inlineWhatsappText")?.textContent.replace(t("whatsappShort"), "").trim() || "";
  if (!text) return;
  await navigator.clipboard.writeText(text);
  $("copyWhatsappBtn").textContent = t("copied");
  setTimeout(() => ($("copyWhatsappBtn").textContent = t("copyWhatsapp")), 1400);
});
$("copyGermanBtn").addEventListener("click", async () => {
  const text = $("germanText")?.textContent || "";
  if (!text) return;
  await navigator.clipboard.writeText(text);
  $("copyGermanBtn").textContent = t("copied");
  setTimeout(() => ($("copyGermanBtn").textContent = t("copyGerman")), 1400);
});
$("copyGermanInlineBtn").addEventListener("click", async () => {
  const text = $("inlineGermanText")?.textContent.replace(t("germanClientText"), "").trim() || "";
  if (!text) return;
  await navigator.clipboard.writeText(text);
  $("copyGermanInlineBtn").textContent = t("copied");
  setTimeout(() => ($("copyGermanInlineBtn").textContent = t("copyFullGerman")), 1400);
});

fillDom();
showWelcomeIfNeeded();
applyLanguage();
