const STORAGE_KEY = "baukalk-pro-state-v1";
const WELCOME_KEY = "smeta-bau-welcome-hidden-v1";

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

const $ = (id) => document.getElementById(id);
const money = (value) => `${Math.round(value).toLocaleString("de-DE")} €`;
const num = (value) => Number(value) || 0;

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

function saveState(showMessage = true) {
  syncFromDom();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (showMessage) {
    $("saveState").textContent = "Сохранено";
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
      <td><strong>${employeeHourCost(employee).toFixed(2)} €/ч</strong></td>
      <td><button class="icon-btn" data-remove-employee="${index}" type="button" title="Удалить">×</button></td>
    </tr>
  `).join("");
  renderEmployeeSelect();
}

function renderEmployeeSelect() {
  $("employeeSelect").innerHTML = state.employees.map((employee, index) => `
    <option value="${index}" ${state.project.selectedEmployees.includes(index) ? "selected" : ""}>
      ${escapeHtml(employee.name)} · ${employeeHourCost(employee).toFixed(2)} €/ч
    </option>
  `).join("");
}

function renderOverheads() {
  $("overheadsGrid").innerHTML = Object.entries(overheadLabels).map(([key, label]) => `
    <label>${label}
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
        ${templateInput(index, "category", "Направление", tpl.category)}
        ${templateInput(index, "name", "Название работы", tpl.name)}
        ${templateSelect(index, "unit", "Единица", tpl.unit, ["м²", "погонный метр", "штука", "час"])}
        ${templateInput(index, "hoursPerUnit", "Часы на единицу", tpl.hoursPerUnit, "number", "0.01")}
        ${templateInput(index, "materialPerUnit", "Материал на единицу, €", tpl.materialPerUnit, "number", "0.1")}
        ${templateSelect(index, "complexity", "Сложность", tpl.complexity, ["simple", "medium", "hard"])}
        ${templateInput(index, "preparation", "Подготовка, ч/ед.", tpl.preparation, "number", "0.01")}
        ${templateInput(index, "demolition", "Демонтаж, ч/ед.", tpl.demolition, "number", "0.01")}
        ${templateInput(index, "disposal", "Вывоз мусора, €/ед.", tpl.disposal, "number", "0.1")}
        ${templateInput(index, "materialMarkup", "Наценка на материалы, %", tpl.materialMarkup, "number", "1")}
        ${templateInput(index, "minPrice", "Мин. цена позиции, €", tpl.minPrice, "number", "10")}
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
  if (num($("quantity").value) <= 0) errors.push("Введите площадь объекта");
  if (num($("peopleCount").value) <= 0) errors.push("Укажите количество людей");
  if (num($("daysCount").value) <= 0) errors.push("Укажите количество дней");
  if ($("distanceKm").value.trim() === "" || num($("distanceKm").value) < 0) errors.push("Укажите расстояние до объекта");

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
    ok: "Зелёный · заказ выгодный",
    warn: "Жёлтый · согласовать бюджет",
    danger: "Красный · пересчитать"
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

  const lines = [
    ["Материалы", result.materials],
    ["Рабочие часы", `${result.plannedHours.toFixed(1)} ч · ${result.avgHourCost.toFixed(2)} €/ч`],
    ["Стоимость сотрудников", result.employeeCost],
    ["Админ/смета/организация", result.adminCost],
    ["Дорога", result.travel],
    ["Доля постоянных расходов фирмы", result.overheadShare],
    ["Партнёрская комиссия", result.partnerCommission],
    ["Риск/резерв", result.risk],
    ["Прибыль", result.profit],
    ["Прибыль в день", result.profitPerDay],
    ["Прибыль на человеко-день", result.profitPerPersonDay],
    ...(result.vat > 0 ? [["НДС", result.vat]] : []),
    ["Итоговая цена клиенту", result.grossTotal]
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
  if (result.margin < result.company.minProfit) reasons.push("маржа ниже вашего минимума");
  if (result.partnerCommission > 0) reasons.push("есть комиссия партнёра");
  if (result.travel + result.adminCost > result.netTotal * 0.12) reasons.push("дорога и подготовка забирают заметную часть цены");
  if ((result.profitPerDay || 0) < 250) reasons.push("прибыль в день низкая");

  let verdict = "Можно брать";
  if (result.status === "warn") verdict = "Брать только после согласования бюджета";
  if (result.status === "danger") verdict = "Не брать по такой цене";

  $("orderCheck").className = `order-check ${result.status}`;
  $("orderCheckText").textContent = reasons.length
    ? `${verdict}: ${reasons.slice(0, 2).join("; ")}.`
    : `${verdict}: цена покрывает расходы, риск и прибыль.`;
}

function renderWarnings(result) {
  const warnings = [];
  const minProfit = num(result.company.minProfit);
  const adminAndTravel = result.adminCost + result.travel;
  const netTotal = Math.max(1, result.netTotal);

  if (result.margin < minProfit) {
    warnings.push("Маржа ниже безопасного уровня. Проверьте цену перед отправкой клиенту.");
  }
  if ((result.profitPerDay || 0) < 250) {
    warnings.push("Прибыль в день слишком маленькая для нормальной загрузки фирмы.");
  }
  if (result.partnerCommission > Math.max(120, result.profit * 0.25)) {
    warnings.push("Комиссия партнёра заметно снижает прибыль по этому заказу.");
  }
  if (adminAndTravel > netTotal * 0.12) {
    warnings.push("Дорога и подготовка занимают много времени. Не стоит ехать без предварительного согласования бюджета.");
  }
  if (result.grossTotal < (result.safeGross || result.grossTotal) - 1) {
    warnings.push("Цена ниже минимальной безопасной. Есть риск работы почти без прибыли.");
  }
  const manualClientPrice = $("manualClientPrice") ? num($("manualClientPrice").value) : num(result.project.manualClientPrice);
  if (manualClientPrice > 0 && manualClientPrice < (result.safeGross || result.grossTotal)) {
    warnings.push("Ручная цена ниже минимальной безопасной. Такой заказ легко уйдёт почти без прибыли.");
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
    $("manualPriceResult").textContent = "Введите цену, чтобы увидеть прибыль и маржу.";
    renderWarnings(state.lastResult);
    return;
  }

  const check = getManualPriceResult(state.lastResult, manualGross);
  const statusText = {
    ok: "выгодно",
    warn: "опасно",
    danger: "невыгодно"
  }[check.status];
  const safeWarning = manualGross < (state.lastResult.safeGross || state.lastResult.grossTotal)
    ? ` Ниже безопасной цены ${money(state.lastResult.safeGross || state.lastResult.grossTotal)}.`
    : "";
  $("manualPriceResult").className = `manual-result ${check.status}`;
  $("manualPriceResult").textContent = `При цене ${money(manualGross)}: прибыль ${money(check.manualProfit)}, маржа ${check.manualMargin.toFixed(1)}%, статус — ${statusText}.${safeWarning}`;
  renderWarnings(state.lastResult);
}

function getStatusExplanation(result) {
  const label = {
    ok: "зелёный",
    warn: "жёлтый",
    danger: "красный"
  }[result.status];
  const reasons = [];
  if (result.partnerCommission > 0) reasons.push("комиссия партнёра");
  if (result.travel > result.baseCost * 0.06) reasons.push("дорога");
  if (result.overheadShare > result.baseCost * 0.12) reasons.push("постоянные расходы");
  if (result.risk > result.baseCost * 0.07) reasons.push("резерв на риск");
  const reasonText = reasons.length
    ? `${reasons.join(", ")} снижают маржу`
    : `маржа ${result.margin.toFixed(1)}% сравнивается с вашим минимумом ${result.company.minProfit}%`;
  if (result.status === "ok") {
    return `Заказ ${label}: цена покрывает себестоимость, риск и вашу минимальную прибыль. Минимальная безопасная цена — ${money(result.safeGross || result.grossTotal)}.`;
  }
  return `Заказ ${label}, потому что ${reasonText}. Минимальная безопасная цена — ${money(result.safeGross || result.grossTotal)}.`;
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

  $("customerTitle").textContent = title;
  $("customerIntro").textContent = `${result.project.clientName || "Клиент"} · ${result.project.quantity} ${result.tpl.unit}`;
  $("customerText").innerHTML = `
    <div class="lang-block compact" id="whatsappText"><strong>Короткое WhatsApp-сообщение</strong>\n${escapeHtml(whatsappDe)}</div>
    <details class="text-details" open>
      <summary>Полный текст предложения</summary>
      <div class="lang-block" id="germanText">${escapeHtml(de)}</div>
    </details>
    <div class="lang-block">${escapeHtml(ru)}</div>
  `;
  $("resultCustomerText").innerHTML = `
    <div class="lang-block compact" id="inlineWhatsappText"><strong>Короткое WhatsApp-сообщение</strong>\n${escapeHtml(whatsappDe)}</div>
    <details class="text-details">
      <summary>Полный текст предложения</summary>
      <div class="lang-block" id="inlineGermanText"><strong>Немецкий текст для клиента</strong>\n${escapeHtml(de)}</div>
      <div class="lang-block"><strong>Русский перевод</strong>\n${escapeHtml(ru)}</div>
    </details>
  `;
}

function resetCalculation() {
  state.project = structuredClone(defaultState.project);
  state.lastResult = null;
  fillDom();
  $("statusBadge").className = "status";
  $("statusBadge").textContent = "Нет расчёта";
  $("totalPrice").textContent = "0 €";
  $("marginText").textContent = "Нажмите «Рассчитать смету»";
  $("breakdown").innerHTML = "";
  $("recommendedPrice").textContent = "0 €";
  $("safePrice").textContent = "0 €";
  $("costPrice").textContent = "0 €";
  $("profitPrice").textContent = "0 €";
  $("marginMetric").textContent = "0%";
  if ($("profitPerDay")) $("profitPerDay").textContent = "0 €";
  if ($("profitPerPersonDay")) $("profitPerPersonDay").textContent = "0 €";
  $("statusExplanation").textContent = "Сначала рассчитайте смету.";
  $("orderCheck").className = "order-check";
  $("orderCheckText").textContent = "Сначала рассчитайте смету.";
  $("manualClientPrice").value = "";
  $("manualPriceResult").className = "manual-result";
  $("manualPriceResult").textContent = "Введите цену, чтобы увидеть прибыль и маржу.";
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
  $("saveState").textContent = "Настройки применены";
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
  const text = $("inlineWhatsappText")?.textContent.replace("Короткое WhatsApp-сообщение", "").trim() || "";
  if (!text) return;
  await navigator.clipboard.writeText(text);
  $("copyWhatsappBtn").textContent = "Скопировано";
  setTimeout(() => ($("copyWhatsappBtn").textContent = "Скопировать WhatsApp-текст"), 1400);
});
$("copyGermanBtn").addEventListener("click", async () => {
  const text = $("germanText")?.textContent || "";
  if (!text) return;
  await navigator.clipboard.writeText(text);
  $("copyGermanBtn").textContent = "Скопировано";
  setTimeout(() => ($("copyGermanBtn").textContent = "Скопировать немецкий текст"), 1400);
});
$("copyGermanInlineBtn").addEventListener("click", async () => {
  const text = $("inlineGermanText")?.textContent.replace("Немецкий текст для клиента", "").trim() || "";
  if (!text) return;
  await navigator.clipboard.writeText(text);
  $("copyGermanInlineBtn").textContent = "Скопировано";
  setTimeout(() => ($("copyGermanInlineBtn").textContent = "Скопировать полный немецкий текст"), 1400);
});

fillDom();
showWelcomeIfNeeded();
