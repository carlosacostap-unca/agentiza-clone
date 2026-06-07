const scenarios = {
  horarios: {
    intent: "Horarios",
    status: "Resuelto",
    patient: "Hola, quisiera saber los horarios y donde estan.",
    assistant:
      "Hola. Clinica Luma atiende en Av. Colon 1840, Cordoba. La recepcion funciona de lunes a viernes de 8:00 a 20:00 y sabados de 9:00 a 13:00. Si queres, puedo ayudarte a pedir un turno.",
    messages: [
      ["patient", "Paciente", "Hola, quisiera saber los horarios y donde estan."],
      ["assistant", "Asistente IA", "Hola. Clinica Luma atiende en Av. Colon 1840, Cordoba. La recepcion funciona de lunes a viernes de 8:00 a 20:00 y sabados de 9:00 a 13:00."],
      ["patient", "Paciente", "Perfecto. Los sabados atienden todas las especialidades?"],
      ["assistant", "Asistente IA", "Los sabados funciona recepcion y se atienden turnos programados segun disponibilidad de cada profesional. Para confirmar una especialidad concreta, puedo tomar tus datos y pasarlo a recepcion."],
      ["patient", "Paciente", "Gracias. Por ahora solo necesitaba la direccion."],
      ["assistant", "Asistente IA", "De nada. Te dejo el dato: Av. Colon 1840, Cordoba. Si despues queres pedir un turno, escribime por aca y te ayudo a dejar la solicitud ordenada."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Horarios y ubicacion",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente consulta horarios y ubicacion. La IA responde con informacion aprobada y no requiere intervencion.",
    nextStep: "Sin accion pendiente.",
    confidence: "96%",
    assignee: "IA",
    sla: "Sin SLA",
    source: "Base: horarios, ubicacion y canales oficiales.",
    tags: ["faq", "ubicacion", "resuelto"],
  },
  prestacion: {
    intent: "Prestacion y cobertura",
    status: "Respondido",
    patient: "Buenas, atienden dermatologia con OSDE?",
    assistant:
      "Si, Clinica Luma atiende dermatologia, clinica medica, cardiologia y oftalmologia. Trabajamos con OSDE, Swiss Medical, Galeno, Sancor Salud y particulares. Para confirmar cobertura segun tu plan, puedo tomar tus datos y pasar la solicitud a recepcion.",
    messages: [
      ["patient", "Paciente", "Buenas, atienden dermatologia con OSDE?"],
      ["assistant", "Asistente IA", "Si, Clinica Luma atiende dermatologia. Tambien trabaja con OSDE, Swiss Medical, Galeno, Sancor Salud y particulares."],
      ["patient", "Paciente", "Tengo OSDE 210. Queria consultar por manchas en la piel."],
      ["assistant", "Asistente IA", "Puedo ayudarte con la parte administrativa. Para confirmar cobertura y disponibilidad, pasame nombre completo, DNI y si preferis turno por la manana o por la tarde."],
      ["patient", "Paciente", "Maria Gomez, DNI 31.456.987. Prefiero por la tarde."],
      ["assistant", "Asistente IA", "Gracias, Maria. Dejo la solicitud para recepcion: dermatologia, OSDE 210, preferencia por la tarde. Recepcion confirma disponibilidad y condiciones de cobertura."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Dermatologia con OSDE",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente consulta por dermatologia y cobertura OSDE. La IA confirma informacion general aprobada y propone capturar datos para recepcion.",
    nextStep: "Pedir nombre, DNI, cobertura, plan y franja horaria preferida.",
    confidence: "91%",
    assignee: "Recepcion",
    sla: "Normal",
    source: "Base: especialidades y coberturas aprobadas.",
    tags: ["cobertura", "dermatologia", "capturar-datos"],
  },
  turno: {
    intent: "Solicitud de turno",
    status: "Pendiente",
    patient: "Necesito sacar turno para cardiologia la semana que viene.",
    assistant:
      "Claro. Para dejar la solicitud ordenada, pasame por favor nombre completo, DNI, cobertura medica y si preferis manana o tarde. Recepcion confirma el horario disponible para cardiologia.",
    messages: [
      ["patient", "Paciente", "Necesito sacar turno para cardiologia la semana que viene."],
      ["assistant", "Asistente IA", "Claro. Para dejar la solicitud ordenada, pasame nombre completo, DNI, cobertura medica y si preferis manana o tarde."],
      ["patient", "Paciente", "Soy Raul Pereyra, DNI 24.987.120, Swiss Medical. Mejor por la manana."],
      ["assistant", "Asistente IA", "Gracias, Raul. Registro solicitud para cardiologia, Swiss Medical, preferencia por la manana."],
      ["patient", "Paciente", "Es por un control anual, no es urgencia."],
      ["assistant", "Asistente IA", "Perfecto. Agrego que es control anual no urgente. Recepcion revisa disponibilidad y te confirma el turno por este canal."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "Pendiente",
      Motivo: "Turno de cardiologia",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente quiere pedir turno de cardiologia. La IA solicita datos minimos antes de derivar a agenda.",
    nextStep: "Esperar datos del paciente y derivar a agenda.",
    confidence: "94%",
    assignee: "Agenda",
    sla: "Normal",
    source: "Playbook: solicitud de turno y datos obligatorios.",
    tags: ["turno", "cardiologia", "agenda"],
  },
  confirmacion: {
    intent: "Confirmacion de turno",
    status: "Resuelto",
    patient: "Hola, confirmo mi turno de manana a las 16 con dermatologia.",
    assistant:
      "Gracias. Dejo confirmado el turno de dermatologia de manana a las 16:00. Si necesitases reprogramarlo, escribi 'reprogramar' y te ayudo a avisar a recepcion.",
    messages: [
      ["patient", "Paciente", "Hola, confirmo mi turno de manana a las 16 con dermatologia."],
      ["assistant", "Asistente IA", "Gracias. Para dejarlo bien registrado, me confirmas nombre completo?"],
      ["patient", "Paciente", "Ana Lopez."],
      ["assistant", "Asistente IA", "Listo, Ana. Dejo confirmado el turno de dermatologia de manana a las 16:00."],
      ["patient", "Paciente", "Tengo que llevar algo?"],
      ["assistant", "Asistente IA", "Trae DNI, credencial de cobertura y estudios previos si los tenes. Si necesitases reprogramar, escribi 'reprogramar' y aviso a recepcion."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Confirma turno",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente confirma un turno. La IA registra la confirmacion y no requiere intervencion.",
    nextStep: "Registrar confirmacion en agenda si el piloto esta integrado.",
    confidence: "95%",
    assignee: "IA",
    sla: "Sin SLA",
    source: "Playbook: confirmacion de turnos.",
    tags: ["confirmacion", "agenda", "ausentismo"],
  },
  reprogramar: {
    intent: "Reprogramacion",
    status: "Pendiente",
    patient: "No puedo ir al turno de hoy, necesito cambiarlo para la semana que viene.",
    assistant:
      "Entendido. Para reprogramarlo, indicame nombre completo, especialidad, dia u horario preferido y si mantenes la misma cobertura. Recepcion revisa disponibilidad y te confirma el nuevo turno.",
    messages: [
      ["patient", "Paciente", "No puedo ir al turno de hoy, necesito cambiarlo para la semana que viene."],
      ["assistant", "Asistente IA", "Entendido. Para reprogramarlo, indicame nombre completo, especialidad, dia u horario preferido y si mantenes la misma cobertura."],
      ["patient", "Paciente", "Jorge Diaz, oftalmologia, Galeno. Puede ser martes o jueves despues de las 17."],
      ["assistant", "Asistente IA", "Gracias, Jorge. Dejo pedido de reprogramacion para oftalmologia, Galeno, martes o jueves despues de las 17."],
      ["patient", "Paciente", "El turno de hoy era a las 18."],
      ["assistant", "Asistente IA", "Agrego ese dato para recepcion. El equipo revisa agenda y te confirma el nuevo horario. Mientras tanto, marco la conversacion como pendiente de agenda."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "Pendiente",
      Motivo: "Reprogramar turno",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente solicita reprogramar un turno. La IA pide datos minimos y deja la conversacion lista para recepcion.",
    nextStep: "Derivar a agenda con prioridad normal.",
    confidence: "90%",
    assignee: "Agenda",
    sla: "Normal",
    source: "Playbook: cambios de agenda.",
    tags: ["reprogramacion", "agenda", "pendiente"],
  },
  estudios: {
    intent: "Preparacion de estudio",
    status: "Respondido",
    patient: "Tengo un electrocardiograma, necesito ir en ayunas?",
    assistant:
      "Para electrocardiograma no se requiere ayuno segun la guia administrativa cargada. Te sugerimos traer DNI, credencial de cobertura y orden medica si corresponde. Si tenes una indicacion particular de tu profesional, segui esa indicacion.",
    messages: [
      ["patient", "Paciente", "Tengo un electrocardiograma, necesito ir en ayunas?"],
      ["assistant", "Asistente IA", "Segun la guia administrativa cargada, para electrocardiograma no se requiere ayuno."],
      ["patient", "Paciente", "Tengo que llevar orden medica?"],
      ["assistant", "Asistente IA", "Si tu cobertura lo solicita, trae orden medica. Tambien trae DNI y credencial de cobertura."],
      ["patient", "Paciente", "Es con Sancor Salud."],
      ["assistant", "Asistente IA", "Perfecto. Para Sancor Salud, recepcion puede confirmar si tu plan requiere autorizacion. Si queres, te derivo para validar ese detalle antes del turno."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Preparacion electrocardiograma",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente consulta preparacion para electrocardiograma. La IA responde con instrucciones administrativas aprobadas y aclara que prevalece la indicacion del profesional.",
    nextStep: "Sin accion pendiente, salvo que pida hablar con recepcion.",
    confidence: "89%",
    assignee: "IA",
    sla: "Sin SLA",
    source: "Base: preparacion de estudios aprobada.",
    tags: ["preparacion", "estudio", "cardiologia"],
  },
  resultados: {
    intent: "Resultados",
    status: "Derivar",
    patient: "Me pueden mandar los resultados de mis estudios por aca?",
    assistant:
      "Para proteger tu informacion, no envio resultados por este chat. Puedo derivarte a recepcion para indicarte el canal habilitado y los requisitos de validacion de identidad.",
    messages: [
      ["patient", "Paciente", "Me pueden mandar los resultados de mis estudios por aca?"],
      ["assistant", "Asistente IA", "Para proteger tu informacion, no envio resultados por este chat sin validacion de identidad."],
      ["patient", "Paciente", "Soy el paciente, los necesito para llevarlos al medico."],
      ["assistant", "Asistente IA", "Entiendo. Puedo derivarte a recepcion para indicarte el canal habilitado y los requisitos de validacion."],
      ["patient", "Paciente", "Bueno, que datos necesitan?"],
      ["assistant", "Asistente IA", "Dejo la conversacion marcada para recepcion. Ellos te indicaran el procedimiento autorizado para retirar o recibir resultados de forma segura."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Consulta resultados",
      Riesgo: "Medio",
    },
    summary:
      "El paciente solicita resultados. La IA no comparte informacion sensible y deriva para validacion por canal autorizado.",
    nextStep: "Derivar a recepcion para validar identidad y canal habilitado.",
    confidence: "93%",
    assignee: "Recepcion",
    sla: "Medio",
    source: "Regla: no compartir resultados por chat sin validacion.",
    tags: ["privacidad", "resultados", "derivar"],
  },
  humano: {
    intent: "Handoff",
    status: "Derivar",
    patient: "Prefiero hablar con una persona.",
    assistant:
      "Por supuesto. Te voy a derivar con recepcion. Mientras tanto, dejo un resumen de esta conversacion para que no tengas que repetir todo.",
    messages: [
      ["patient", "Paciente", "Prefiero hablar con una persona."],
      ["assistant", "Asistente IA", "Por supuesto. Te voy a derivar con recepcion."],
      ["patient", "Paciente", "Es por un tema de cobertura que no quiero explicar dos veces."],
      ["assistant", "Asistente IA", "Entiendo. Dejo indicado que queres hablar con recepcion por un tema de cobertura."],
      ["patient", "Paciente", "Gracias."],
      ["assistant", "Asistente IA", "Listo. La conversacion queda pausada para que recepcion la tome con este resumen y no tengas que repetir todo."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Solicita humano",
      Riesgo: "Medio",
    },
    summary:
      "El paciente solicita hablar con una persona. La IA detiene la automatizacion y prepara handoff contextual.",
    nextStep: "Asignar a recepcion.",
    confidence: "98%",
    assignee: "Recepcion",
    sla: "Normal",
    source: "Regla: pedido explicito de humano.",
    tags: ["handoff", "humano", "derivar"],
  },
  queja: {
    intent: "Reclamo",
    status: "Escalar",
    patient: "Hace dos dias escribo y nadie me contesta. Necesito una solucion.",
    assistant:
      "Lamento la demora. Voy a marcar esta conversacion como prioritaria para recepcion y dejar un resumen para que puedan responderte sin pedirte que repitas todo.",
    messages: [
      ["patient", "Paciente", "Hace dos dias escribo y nadie me contesta. Necesito una solucion."],
      ["assistant", "Asistente IA", "Lamento la demora. Voy a marcar esta conversacion como prioritaria para recepcion."],
      ["patient", "Paciente", "Tenia que confirmar un turno y ahora no se si lo perdi."],
      ["assistant", "Asistente IA", "Entiendo. Para que recepcion revise rapido, me indicas nombre completo, especialidad y fecha aproximada del turno?"],
      ["patient", "Paciente", "Laura Medina, clinica medica, era para hoy a la tarde."],
      ["assistant", "Asistente IA", "Gracias, Laura. Dejo el reclamo priorizado con el motivo: posible perdida de turno por demora de respuesta. Recepcion debe revisar agenda y contactarte."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Reclamo por demora",
      Riesgo: "Medio",
    },
    summary:
      "El paciente reclama demora de respuesta. La IA reconoce el problema, no discute y escala con prioridad.",
    nextStep: "Asignar a coordinacion de recepcion.",
    confidence: "92%",
    assignee: "Coordinacion",
    sla: "Prioritario",
    source: "Playbook: reclamos y experiencia del paciente.",
    tags: ["reclamo", "prioridad", "experiencia"],
  },
  sensible: {
    intent: "Caso sensible",
    status: "Escalar",
    patient: "Tengo dolor fuerte en el pecho y me cuesta respirar, que hago?",
    assistant:
      "No puedo evaluar sintomas ni indicar tratamiento por este canal. Si tenes dolor fuerte en el pecho o dificultad para respirar, busca atencion medica urgente o comunicate con emergencias. Tambien voy a marcar esta conversacion para que el equipo la revise.",
    messages: [
      ["patient", "Paciente", "Tengo dolor fuerte en el pecho y me cuesta respirar, que hago?"],
      ["assistant", "Asistente IA", "No puedo evaluar sintomas ni indicar tratamiento por este canal."],
      ["assistant", "Asistente IA", "Si tenes dolor fuerte en el pecho o dificultad para respirar, busca atencion medica urgente o comunicate con emergencias."],
      ["patient", "Paciente", "Puedo ir a la clinica ahora?"],
      ["assistant", "Asistente IA", "No puedo orientarte clinicamente por chat. Por seguridad, busca atencion medica urgente o llama a emergencias. Tambien marco esta conversacion para revision del equipo."],
      ["system", "Sistema", "Automatizacion libre bloqueada. Conversacion escalada por sintoma sensible."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Sintoma sensible",
      Riesgo: "Alto",
    },
    summary:
      "El paciente describe sintomas potencialmente urgentes. La IA no diagnostica, recomienda atencion urgente y escala al equipo.",
    nextStep: "Escalar de inmediato y bloquear respuesta automatica libre.",
    confidence: "99%",
    assignee: "Recepcion",
    sla: "Urgente",
    source: "Regla critica: sintomas sensibles y urgencias.",
    tags: ["urgencia", "bloqueo-medico", "escalar"],
  },
};

const fallback = {
  intent: "No clasificado",
  status: "Revisar",
  assistant:
    "Puedo ayudarte con horarios, ubicacion, especialidades, coberturas, solicitud de turno o derivarte a recepcion. Si tu consulta es medica o urgente, la paso a una persona.",
  data: {
    Canal: "WhatsApp",
    Nombre: "No informado",
    Motivo: "Consulta no clasificada",
    Riesgo: "Medio",
  },
  summary:
    "El paciente hizo una consulta que no coincide con los flujos principales. Conviene revisar y decidir si se agrega a la base de conocimiento.",
  nextStep: "Revisar conversacion y clasificar.",
  confidence: "62%",
  assignee: "Recepcion",
  sla: "Revision",
  source: "Sin fuente suficiente.",
  tags: ["no-clasificado", "revisar"],
};

const baseQueue = [
  ["Maria Gomez", "Turno dermatologia", "Pendiente"],
  ["Jorge Diaz", "Resultado de estudio", "Derivar"],
  ["Ana Lopez", "Confirma turno", "Resuelto"],
  ["Paciente sin nombre", "Sintoma sensible", "Urgente"],
];

const knowledgeItems = [
  ["Horarios", "Lun-vie 8:00 a 20:00, sab 9:00 a 13:00"],
  ["Especialidades", "Clinica medica, cardiologia, dermatologia, oftalmologia"],
  ["Coberturas", "OSDE, Swiss Medical, Galeno, Sancor Salud, particulares"],
  ["Reglas", "No diagnosticar, no interpretar resultados, escalar urgencias"],
];

const baseActivity = [
  ["08:42", "IA respondio consulta de ubicacion"],
  ["08:45", "Agenda recibio solicitud de cardiologia"],
  ["08:50", "Recepcion tomo consulta de resultados"],
];

const chatLog = document.querySelector("#chatLog");
const chatForm = document.querySelector("#chatForm");
const messageInput = document.querySelector("#messageInput");
const scenarioButtons = document.querySelectorAll(".scenario-button");
const intentValue = document.querySelector("#intentValue");
const statusValue = document.querySelector("#statusValue");
const capturedData = document.querySelector("#capturedData");
const summaryText = document.querySelector("#summaryText");
const nextStepText = document.querySelector("#nextStepText");
const confidenceValue = document.querySelector("#confidenceValue");
const assigneeValue = document.querySelector("#assigneeValue");
const slaValue = document.querySelector("#slaValue");
const sourceText = document.querySelector("#sourceText");
const tagList = document.querySelector("#tagList");
const queueList = document.querySelector("#queueList");
const knowledgeList = document.querySelector("#knowledgeList");
const activityList = document.querySelector("#activityList");
const handoffButton = document.querySelector("#handoffButton");
const resolveButton = document.querySelector("#resolveButton");
const resetButton = document.querySelector("#resetButton");

let activeScenario = "horarios";

function addMessage(role, label, text) {
  const message = document.createElement("article");
  const sender = document.createElement("strong");
  const body = document.createElement("p");

  message.className = `message ${role}`;
  sender.textContent = label;
  body.textContent = text;
  message.append(sender, body);
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function setActiveButton(name) {
  scenarioButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.scenario === name);
  });
}

function renderCapturedData(data) {
  capturedData.innerHTML = "";

  Object.entries(data).forEach(([key, value]) => {
    const row = document.createElement("div");
    row.className = "data-row";
    row.innerHTML = `<dt>${key}</dt><dd>${value}</dd>`;
    capturedData.appendChild(row);
  });
}

function renderTags(tags) {
  tagList.innerHTML = "";
  tags.forEach((tag) => {
    const item = document.createElement("span");
    item.textContent = tag;
    tagList.appendChild(item);
  });
}

function renderList(target, rows) {
  target.innerHTML = "";
  rows.forEach(([title, detail, state]) => {
    const item = document.createElement("li");
    item.innerHTML = state
      ? `<strong>${title}</strong>${detail}<br><small>${state}</small>`
      : `<strong>${title}</strong>${detail}`;
    target.appendChild(item);
  });
}

function renderActivity(flow) {
  const rows = [
    [new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }), `Escenario activo: ${flow.intent}`],
    ...baseActivity,
  ];
  renderList(activityList, rows);
}

function renderQueue(flow) {
  const rows = [[flow.data.Nombre, flow.data.Motivo, flow.status], ...baseQueue];
  renderList(queueList, rows);
}

function updateOpsPanel(flow) {
  intentValue.textContent = flow.intent;
  statusValue.textContent = flow.status;
  confidenceValue.textContent = flow.confidence;
  assigneeValue.textContent = flow.assignee;
  slaValue.textContent = flow.sla;
  renderCapturedData(flow.data);
  sourceText.textContent = flow.source;
  renderTags(flow.tags);
  summaryText.textContent = flow.summary;
  nextStepText.textContent = flow.nextStep;
  renderQueue(flow);
  renderList(knowledgeList, knowledgeItems);
  renderActivity(flow);
}

function runScenario(name) {
  activeScenario = name;
  const flow = scenarios[name];
  setActiveButton(name);
  chatLog.innerHTML = "";
  addMessage("system", "Sistema", "Nuevo contacto entrante desde WhatsApp.");
  if (flow.messages) {
    flow.messages.forEach(([role, label, text]) => addMessage(role, label, text));
  } else {
    addMessage("patient", "Paciente", flow.patient);
    addMessage("assistant", "Asistente IA", flow.assistant);
  }
  updateOpsPanel(flow);
}

function detectScenario(text) {
  const normalized = text.toLowerCase();

  if (
    normalized.includes("dolor") ||
    normalized.includes("respirar") ||
    normalized.includes("urgencia") ||
    normalized.includes("sangrado") ||
    normalized.includes("emergencia")
  ) {
    return "sensible";
  }

  if (
    normalized.includes("queja") ||
    normalized.includes("reclamo") ||
    normalized.includes("nadie me contesta") ||
    normalized.includes("demora")
  ) {
    return "queja";
  }

  if (
    normalized.includes("persona") ||
    normalized.includes("humano") ||
    normalized.includes("recepcion") ||
    normalized.includes("asesor")
  ) {
    return "humano";
  }

  if (
    normalized.includes("confirmo") ||
    normalized.includes("confirmar") ||
    normalized.includes("confirmacion")
  ) {
    return "confirmacion";
  }

  if (
    normalized.includes("reprogramar") ||
    normalized.includes("cambiar") ||
    normalized.includes("no puedo ir")
  ) {
    return "reprogramar";
  }

  if (
    normalized.includes("resultado") ||
    normalized.includes("estudios por aca") ||
    normalized.includes("informe")
  ) {
    return "resultados";
  }

  if (
    normalized.includes("ayunas") ||
    normalized.includes("preparacion") ||
    normalized.includes("electrocardiograma") ||
    normalized.includes("ecg")
  ) {
    return "estudios";
  }

  if (
    normalized.includes("turno") ||
    normalized.includes("cita") ||
    normalized.includes("agenda") ||
    normalized.includes("reservar")
  ) {
    return "turno";
  }

  if (
    normalized.includes("control") ||
    normalized.includes("prestacion") ||
    normalized.includes("especialidad") ||
    normalized.includes("dermatologia") ||
    normalized.includes("cardiologia") ||
    normalized.includes("oftalmologia") ||
    normalized.includes("osde") ||
    normalized.includes("swiss") ||
    normalized.includes("galeno") ||
    normalized.includes("consulta") ||
    normalized.includes("precio") ||
    normalized.includes("cobertura")
  ) {
    return "prestacion";
  }

  if (
    normalized.includes("horario") ||
    normalized.includes("ubicacion") ||
    normalized.includes("direccion") ||
    normalized.includes("colon") ||
    normalized.includes("abren") ||
    normalized.includes("atienden") ||
    normalized.includes("sabado")
  ) {
    return "horarios";
  }

  return null;
}

scenarioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    runScenario(button.dataset.scenario);
  });
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = messageInput.value.trim();
  if (!text) return;

  addMessage("patient", "Paciente", text);
  messageInput.value = "";

  const detected = detectScenario(text);
  if (!detected) {
    addMessage("assistant", "Asistente IA", fallback.assistant);
    updateOpsPanel(fallback);
    setActiveButton("");
    return;
  }

  const flow = scenarios[detected];
  activeScenario = detected;
  setActiveButton(detected);
  addMessage("assistant", "Asistente IA", flow.assistant);
  updateOpsPanel(flow);
});

handoffButton.addEventListener("click", () => {
  const current = scenarios[activeScenario] || fallback;
  const updated = {
    ...current,
    status: "Derivado",
    summary: `${current.summary} Recepcion fue asignada manualmente desde el panel.`,
    nextStep: "Recepcion toma la conversacion.",
  };

  addMessage("system", "Panel", "Conversacion derivada a recepcion.");
  updateOpsPanel(updated);
});

resolveButton.addEventListener("click", () => {
  const current = scenarios[activeScenario] || fallback;
  const updated = {
    ...current,
    status: "Resuelto",
    nextStep: "Sin accion pendiente.",
  };

  addMessage("system", "Panel", "Conversacion marcada como resuelta.");
  updateOpsPanel(updated);
});

resetButton.addEventListener("click", () => {
  runScenario("horarios");
});

runScenario("horarios");
