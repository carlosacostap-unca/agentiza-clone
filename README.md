# Agentiza Clone

Demo inicial para validar una empresa tipo Agentiza enfocada en automatizacion conversacional para clinicas y consultorios.

## Que incluye

- Chat simulado estilo WhatsApp para pacientes.
- Landing comercial para presentar el piloto beta.
- Hero visual generado y guardado en `assets/hero-clinic-ops.png`.
- Escenarios administrativos de clinica:
  - horarios;
  - prestaciones;
  - solicitud de turno;
  - confirmacion de turno;
  - reprogramacion;
  - preparacion de estudios;
  - solicitud de resultados;
  - handoff a recepcion;
  - reclamos;
  - caso sensible con escalamiento.
- Panel operativo para recepcion:
  - intencion detectada;
  - estado;
  - confianza;
  - asignacion;
  - prioridad;
  - datos capturados;
  - fuente usada;
  - etiquetas;
  - resumen;
  - proximo paso.
- Vista de supervision con cola de conversaciones, base de conocimiento y actividad.
- Documentos estrategicos:
  - `dossier-agentiza.md`;
  - `plan-accion-7-dias.md`.

## Como abrir la demo

Abrir `index.html` en el navegador.

No requiere instalacion ni servidor local.

Archivo principal:

- `index.html`

## Objetivo del MVP

Tener una demo vendible para mostrar a prospectos antes de integrar WhatsApp real. La prioridad es validar el dolor, el mensaje comercial, las objeciones y la disposicion a pagar.

## Clinica ficticia usada en la demo

La demo usa `Clinica Luma`, una clinica ambulatoria ficticia con especialidades, coberturas, ubicacion y reglas de escalamiento definidas para mostrar un caso mas cercano a una conversacion real.
