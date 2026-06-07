const scenarios = {
  horarios: {
    intent: "Horarios",
    status: "Resuelto",
    patient: "Hola, quisiera saber los horarios de atencion.",
    assistant:
      "Hola. La Clinica San Norte atiende de lunes a viernes de 8:00 a 20:00 y sabados de 9:00 a 13:00. Si queres, tambien puedo ayudarte a pedir un turno.",
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Consulta de horarios",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente consulta horarios de atencion. La IA responde con informacion aprobada y no requiere intervencion.",
    nextStep: "Sin accion pendiente.",
  },
  prestacion: {
    intent: "Prestacion",
    status: "Respondido",
    patient: "Buenas, hacen controles oftalmologicos?",
    assistant:
      "Si, la clinica realiza controles oftalmologicos generales. Para orientarte mejor, puedo tomar tus datos y pasar la solicitud a recepcion para confirmar profesional, disponibilidad y cobertura.",
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Control oftalmologico",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente consulta por una prestacion. La IA confirma informacion general aprobada y propone capturar datos para recepcion.",
    nextStep: "Pedir nombre, cobertura y franja horaria preferida.",
  },
  turno: {
    intent: "Solicitud de turno",
    status: "Pendiente",
    patient: "Necesito sacar turno para la semana que viene.",
    assistant:
      "Claro. Para dejar la solicitud ordenada, pasame por favor nombre completo, especialidad o motivo de consulta, cobertura y si preferis manana o tarde. Recepcion confirma el horario disponible.",
    data: {
      Canal: "WhatsApp",
      Nombre: "Pendiente",
      Motivo: "Solicitud de turno",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente quiere pedir turno. La IA solicita datos minimos antes de derivar a recepcion.",
    nextStep: "Esperar datos del paciente y derivar a agenda.",
  },
  humano: {
    intent: "Handoff",
    status: "Derivar",
    patient: "Prefiero hablar con una persona.",
    assistant:
      "Por supuesto. Te voy a derivar con recepcion. Mientras tanto, dejo un resumen de esta conversacion para que no tengas que repetir todo.",
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Solicita humano",
      Riesgo: "Medio",
    },
    summary:
      "El paciente solicita hablar con una persona. La IA detiene la automatizacion y prepara handoff contextual.",
    nextStep: "Asignar a recepcion.",
  },
  sensible: {
    intent: "Caso sensible",
    status: "Escalar",
    patient: "Tengo dolor fuerte en el pecho y me cuesta respirar, que hago?",
    assistant:
      "No puedo evaluar sintomas ni indicar tratamiento por este canal. Si tenes dolor fuerte en el pecho o dificultad para respirar, busca atencion medica urgente o comunicate con emergencias. Tambien voy a marcar esta conversacion para que el equipo la revise.",
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Sintoma sensible",
      Riesgo: "Alto",
    },
    summary:
      "El paciente describe sintomas potencialmente urgentes. La IA no diagnostica, recomienda atencion urgente y escala al equipo.",
    nextStep: "Escalar de inmediato y bloquear respuesta automatica libre.",
  },
};

const fallback = {
  intent: "No clasificado",
  status: "Revisar",
  assistant:
    "Puedo ayudarte con horarios, prestaciones, solicitud de turno o derivarte a recepcion. Si tu consulta es medica o urgente, la paso a una persona.",
  data: {
    Canal: "WhatsApp",
    Nombre: "No informado",
    Motivo: "Consulta no clasificada",
    Riesgo: "Medio",
  },
  summary:
    "El paciente hizo una consulta que no coincide con los flujos principales. Conviene revisar y decidir si se agrega a la base de conocimiento.",
  nextStep: "Revisar conversacion y clasificar.",
};

const chatLog = document.querySelector("#chatLog");
const chatForm = document.querySelector("#chatForm");
const messageInput = document.querySelector("#messageInput");
const scenarioButtons = document.querySelectorAll(".scenario-button");
const intentValue = document.querySelector("#intentValue");
const statusValue = document.querySelector("#statusValue");
const capturedData = document.querySelector("#capturedData");
const summaryText = document.querySelector("#summaryText");
const nextStepText = document.querySelector("#nextStepText");
const handoffButton = document.querySelector("#handoffButton");
const resolveButton = document.querySelector("#resolveButton");
const resetButton = document.querySelector("#resetButton");

let activeScenario = "horarios";

function addMessage(role, label, text) {
  const message = document.createElement("article");
  message.className = `message ${role}`;
  message.innerHTML = `<strong>${label}</strong><p>${text}</p>`;
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

function updateOpsPanel(flow) {
  intentValue.textContent = flow.intent;
  statusValue.textContent = flow.status;
  renderCapturedData(flow.data);
  summaryText.textContent = flow.summary;
  nextStepText.textContent = flow.nextStep;
}

function runScenario(name) {
  activeScenario = name;
  const flow = scenarios[name];
  setActiveButton(name);
  chatLog.innerHTML = "";
  addMessage("system", "Sistema", "Nuevo contacto entrante desde WhatsApp.");
  addMessage("patient", "Paciente", flow.patient);
  addMessage("assistant", "Asistente IA", flow.assistant);
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
    normalized.includes("persona") ||
    normalized.includes("humano") ||
    normalized.includes("recepcion") ||
    normalized.includes("asesor")
  ) {
    return "humano";
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
    normalized.includes("consulta") ||
    normalized.includes("precio") ||
    normalized.includes("cobertura")
  ) {
    return "prestacion";
  }

  if (
    normalized.includes("horario") ||
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
