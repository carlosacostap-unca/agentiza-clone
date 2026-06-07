const scenarios = {
  horarios: {
    intent: "Horarios",
    status: "Pre-reserva",
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
      ["patient", "Paciente", "Ya que estamos, tienen turno para clinica medica esta semana?"],
      ["assistant", "Asistente IA", "Si. Tengo dos opciones administrativas disponibles para proponer: miercoles 10:30 o viernes 17:20 con clinica medica. Queres que reserve alguna?"],
      ["patient", "Paciente", "Viernes 17:20 me sirve."],
      ["assistant", "Asistente IA", "Perfecto. Te dejo pre-reservado viernes 17:20 para clinica medica. Para confirmarlo, recepcion necesita nombre completo, DNI y cobertura. Si me los pasas, lo dejo listo para agenda."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Horarios, ubicacion y pre-reserva",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente consulta horarios y ubicacion, luego solicita turno de clinica medica. La IA propone opciones y deja una pre-reserva pendiente de datos.",
    nextStep: "Capturar nombre, DNI y cobertura para confirmar viernes 17:20.",
    confidence: "96%",
    assignee: "IA",
    sla: "Sin SLA",
    source: "Base: horarios, ubicacion y canales oficiales.",
    tags: ["faq", "ubicacion", "resuelto"],
  },
  prestacion: {
    intent: "Prestacion y cobertura",
    status: "Pre-reserva",
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
      ["assistant", "Asistente IA", "Segun la agenda demo, hay opciones para dermatologia el martes 15:40 o jueves 18:10. Queres que reserve una de esas opciones mientras recepcion valida la cobertura?"],
      ["patient", "Paciente", "Jueves 18:10 me queda bien."],
      ["assistant", "Asistente IA", "Listo, Maria. Queda pre-reservado jueves 18:10 para dermatologia, OSDE 210. Recepcion valida cobertura y te confirma si requiere autorizacion o copago."],
      ["system", "Sistema", "Pre-reserva creada: Dermatologia | Jueves 18:10 | Maria Gomez | OSDE 210."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "Maria Gomez",
      Motivo: "Pre-reserva dermatologia OSDE",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente consulta por dermatologia y cobertura OSDE. La IA captura datos, propone turnos y deja pre-reservado jueves 18:10.",
    nextStep: "Recepcion valida cobertura OSDE 210 y confirma la reserva.",
    confidence: "91%",
    assignee: "Recepcion",
    sla: "Normal",
    source: "Base: especialidades y coberturas aprobadas.",
    tags: ["cobertura", "dermatologia", "pre-reserva"],
  },
  turno: {
    intent: "Solicitud de turno",
    status: "Reservado",
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
      ["assistant", "Asistente IA", "Para cardiologia tengo estas opciones en la agenda demo: lunes 09:20, miercoles 11:40 o viernes 08:50. Cual preferis?"],
      ["patient", "Paciente", "Miercoles 11:40."],
      ["assistant", "Asistente IA", "Listo, Raul. Reservo miercoles 11:40 para cardiologia, control anual, Swiss Medical. Te recuerdo traer DNI, credencial y estudios previos si los tenes."],
      ["system", "Sistema", "Reserva confirmada: Cardiologia | Miercoles 11:40 | Raul Pereyra | Swiss Medical."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "Raul Pereyra",
      Motivo: "Reserva cardiologia",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente pide turno de cardiologia. La IA captura datos, propone opciones y confirma reserva para miercoles 11:40.",
    nextStep: "Sin accion pendiente; enviar recordatorio 24 horas antes.",
    confidence: "94%",
    assignee: "Agenda",
    sla: "Normal",
    source: "Playbook: solicitud de turno y datos obligatorios.",
    tags: ["turno", "cardiologia", "reserva"],
  },
  confirmacion: {
    intent: "Confirmacion de turno",
    status: "Confirmado",
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
      ["patient", "Paciente", "Perfecto, entonces queda confirmado?"],
      ["assistant", "Asistente IA", "Si, Ana. Queda confirmado dermatologia manana a las 16:00. Te enviaremos recordatorio por este canal 24 horas antes si esta activado en el piloto."],
      ["system", "Sistema", "Confirmacion registrada: Dermatologia | Manana 16:00 | Ana Lopez."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "Ana Lopez",
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
    status: "Reprogramado",
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
      ["assistant", "Asistente IA", "Veo dos alternativas demo para reprogramar: martes 17:30 o jueves 18:20. Cual queres tomar?"],
      ["patient", "Paciente", "Jueves 18:20."],
      ["assistant", "Asistente IA", "Listo, Jorge. Cancelo la solicitud anterior de hoy 18:00 y dejo reservado jueves 18:20 para oftalmologia, Galeno. Recepcion puede revisar si requiere autorizacion."],
      ["system", "Sistema", "Reprogramacion registrada: Oftalmologia | Jueves 18:20 | Jorge Diaz | Galeno."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "Jorge Diaz",
      Motivo: "Reprogramacion reservada",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente solicita reprogramar un turno. La IA captura datos, propone alternativas y registra la nueva reserva para jueves 18:20.",
    nextStep: "Recepcion revisa autorizacion de Galeno si corresponde.",
    confidence: "90%",
    assignee: "Agenda",
    sla: "Normal",
    source: "Playbook: cambios de agenda.",
    tags: ["reprogramacion", "agenda", "reserva"],
  },
  estudios: {
    intent: "Preparacion de estudio",
    status: "Pre-reserva",
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
      ["patient", "Paciente", "Todavia no tengo turno. Hay disponibilidad esta semana?"],
      ["assistant", "Asistente IA", "Para electrocardiograma tengo opciones demo: martes 08:40, miercoles 12:10 o viernes 09:30. Queres reservar alguna?"],
      ["patient", "Paciente", "Viernes 09:30."],
      ["assistant", "Asistente IA", "Perfecto. Pre-reservo viernes 09:30 para electrocardiograma con Sancor Salud. Recepcion valida si tu plan requiere autorizacion y confirma la reserva."],
      ["system", "Sistema", "Pre-reserva creada: Electrocardiograma | Viernes 09:30 | Sancor Salud."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Pre-reserva electrocardiograma",
      Riesgo: "Bajo",
    },
    summary:
      "El paciente consulta preparacion para electrocardiograma, pregunta disponibilidad y elige viernes 09:30. La IA deja pre-reserva pendiente de validacion.",
    nextStep: "Recepcion valida autorizacion Sancor Salud y confirma.",
    confidence: "89%",
    assignee: "IA",
    sla: "Sin SLA",
    source: "Base: preparacion de estudios aprobada.",
    tags: ["preparacion", "estudio", "pre-reserva"],
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
      ["patient", "Paciente", "Tambien necesito turno para que el medico los revise."],
      ["assistant", "Asistente IA", "Puedo ayudarte con una pre-reserva administrativa para revision con clinica medica. Opciones demo: jueves 10:20 o viernes 16:40."],
      ["patient", "Paciente", "Viernes 16:40."],
      ["assistant", "Asistente IA", "Dejo pre-reservado viernes 16:40 para clinica medica. Recepcion debe validar identidad por canal autorizado antes de gestionar resultados y confirmar el turno."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Resultados y pre-reserva clinica medica",
      Riesgo: "Medio",
    },
    summary:
      "El paciente solicita resultados y luego pide turno para revision. La IA no comparte informacion sensible y deja pre-reserva condicionada a validacion.",
    nextStep: "Recepcion valida identidad, canal de resultados y confirma viernes 16:40.",
    confidence: "93%",
    assignee: "Recepcion",
    sla: "Medio",
    source: "Regla: no compartir resultados por chat sin validacion.",
    tags: ["privacidad", "resultados", "pre-reserva"],
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
      ["patient", "Paciente", "Si pueden, necesito turno por la tarde."],
      ["assistant", "Asistente IA", "Agrego al resumen: solicita hablar con recepcion por cobertura y necesita turno por la tarde. No reservo automaticamente porque pidio gestion humana, pero dejo dos opciones sugeridas para recepcion: martes 16:20 o jueves 17:40."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Humano y posible turno",
      Riesgo: "Medio",
    },
    summary:
      "El paciente solicita hablar con una persona por cobertura y menciona necesidad de turno por la tarde. La IA no reserva y sugiere opciones para recepcion.",
    nextStep: "Recepcion toma conversacion y confirma turno si corresponde.",
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
      ["assistant", "Asistente IA", "Para resolverlo mas rapido, veo una alternativa demo para clinica medica hoy 18:40 o manana 09:10. Queres que deje una opcion sugerida?"],
      ["patient", "Paciente", "Hoy 18:40 si se puede."],
      ["assistant", "Asistente IA", "Marco hoy 18:40 como opcion prioritaria sugerida, pero por tratarse de un reclamo y posible turno perdido, recepcion debe confirmar manualmente la reserva."],
      ["system", "Sistema", "Alerta prioritaria: reclamo con opcion de recuperacion de turno hoy 18:40."],
    ],
    data: {
      Canal: "WhatsApp",
      Nombre: "No informado",
      Motivo: "Reclamo y recuperacion de turno",
      Riesgo: "Medio",
    },
    summary:
      "El paciente reclama demora y posible perdida de turno. La IA propone opcion de recuperacion, pero escala para confirmacion manual.",
    nextStep: "Coordinacion confirma si se puede tomar hoy 18:40.",
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
  ["Maria Gomez", "Dermatologia jueves 18:10", "Pre-reserva"],
  ["Jorge Diaz", "Resultado de estudio", "Derivar"],
  ["Ana Lopez", "Dermatologia manana 16:00", "Confirmado"],
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
