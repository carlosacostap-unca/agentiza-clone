# Dossier estrategico: Agentiza.ai y oportunidad de empresa similar

Fecha de investigacion: 2026-06-07

## 1. Resumen ejecutivo

Agentiza.ai se posiciona como una empresa de IA conversacional para operaciones B2B en LATAM. Su propuesta no es vender un chatbot aislado, sino implementar una arquitectura conversacional completa: canales, agentes de IA, base de conocimiento, CRM/inbox, analitica, handoff humano e integraciones.

La oportunidad para construir una empresa similar no esta en copiar una plataforma generica desde el dia uno. La oportunidad esta en empaquetar una solucion implementada para un nicho concreto, venderla con diagnostico y ROI, y convertir los aprendizajes repetidos en producto.

Hipotesis central:

- Agentiza opera como una mezcla de SaaS + agencia de implementacion.
- El margen inicial viene de la consultoria/implementacion.
- La retencion viene del SaaS mensual, soporte, optimizacion y dependencia operativa.
- El diferencial comercial es "sistema implementado", no "herramienta de IA".

## 2. Que hace Agentiza

Agentiza ofrece una plataforma de automatizacion conversacional para ventas y soporte. Su web declara capacidades en:

- WhatsApp Business API.
- Instagram Direct.
- Widget web.
- Facebook Messenger.
- Telefonia con IA.
- Inbox omnicanal.
- CRM basico.
- Agentes virtuales ilimitados.
- Entrenamiento con PDFs, sitio web y FAQs.
- Deteccion de intenciones y alertas.
- Handoff contextual a humanos.
- Metricas operativas por canal, agente y etapa.
- API, webhooks y MCP para integraciones.

Segmentos destacados en su web:

- Real estate.
- Agencias de viaje.
- Infoproductores.
- Retail.

Casos y metricas comunicadas:

- Reduccion de tiempo de respuesta de 85%.
- 2.5x mas leads calificados.
- Mas de 1.3M conversaciones atendidas.
- Mas de 14M mensajes procesados.

Estas metricas deben tratarse como claims comerciales no auditados, utiles para entender posicionamiento pero no como evidencia independiente.

## 3. Como lo venden

Agentiza utiliza dos ofertas principales:

### 3.1 Planes mensuales

En la home actual:

- Standard: USD 99/mes, 1.000 contactos activos mensuales.
- Advanced: USD 199/mes, 2.500 contactos activos mensuales.

Incluyen canales, agentes, CRM, inbox, handoff humano, metricas, API/webhooks y soporte en espanol LATAM.

Observacion: algunas paginas antiguas o alternativas mencionan "creditos" en vez de contactos activos. Esto sugiere que la oferta esta en transicion.

### 3.2 Implementacion custom

Landing de oferta exclusiva:

- USD 2.497 one-time.
- Implementacion estimada en 4 semanas.
- Primeros 3 meses de suscripcion incluidos.
- Luego USD 99/mes.
- 90 dias de soporte prioritario.

La implementacion se presenta como consultoria + tecnologia + ejecucion.

## 4. Metodo de implementacion observado

Agentiza usa una metodologia llamada E.D.I.S.O.N.:

- Explore: analisis de operacion actual, conversaciones, procesos y dolores.
- Discover: mapeo de oportunidades, personas, journeys e intenciones.
- Invent: arquitectura conversacional, matriz de intenciones y flujos.
- Systematize: configuracion, prompts, integraciones y set de pruebas.
- Optimize: QA, ajustes de tono, validacion con escenarios reales.
- Navigate: salida a produccion, capacitacion, documentacion y soporte.

Traduccion operativa para nosotros:

1. Diagnostico de negocio.
2. Auditoria de conversaciones reales.
3. Diseno de flujos e intenciones.
4. Construccion de agentes y base de conocimiento.
5. Integracion de canales y sistemas.
6. Pruebas controladas.
7. Go-live supervisado.
8. Reporte y optimizacion mensual.

## 5. Arquitectura tecnica probable

No hay acceso al codigo de Agentiza, pero por sus claims publicos la arquitectura probable es:

### 5.1 Capa de canales

- WhatsApp Business API mediante Meta directo o BSP.
- Instagram/Messenger via Meta Graph API.
- Widget web propio.
- Telefonia via proveedor tipo Twilio, Vapi, Retell, Bland, ElevenLabs/Twilio o similar.

### 5.2 Capa de conversaciones

- Normalizacion de mensajes entrantes.
- Identidad de contacto por canal.
- Historial de conversacion.
- Estados de conversacion.
- Asignacion a humano/equipo.
- Etiquetas, etapas y pipeline.

### 5.3 Capa de IA

- Clasificador de intenciones.
- Orquestador de agentes.
- Agentes especializados por tarea.
- RAG sobre base de conocimiento.
- Guardrails: reglas, tono, prohibiciones, criterios de escalamiento.
- Resumen de conversacion para handoff.

### 5.4 Capa de datos del negocio

- PDFs.
- FAQs.
- Catalogos.
- Precios.
- Politicas.
- URLs del sitio.
- Manuales internos.
- CRM externo si existe.

### 5.5 Capa de integraciones

- Webhooks.
- REST API.
- Zapier/Make/n8n.
- CRM: Zoho, GoHighLevel, HubSpot u otros.
- Email y notificaciones.

### 5.6 Capa de analitica

- Tiempo de primera respuesta.
- Conversaciones por canal.
- Intenciones frecuentes.
- Leads calificados.
- Derivaciones a humanos.
- Tasa de resolucion automatica.
- Calidad de respuesta.
- Oportunidades comerciales detectadas.

## 6. Competidores relevantes

### 6.1 Respond.io

Respond.io se posiciona como plataforma omnicanal de mensajeria, inbox, automatizacion y AI Agents. Su pricing usa Monthly Active Contacts. Planes publicos observados:

- Starter: USD 79/mes.
- Growth: USD 159/mes.
- Advanced: USD 279/mes.

El uso de AI Agents esta incluido en Growth, Advanced y Enterprise con politica de uso justo. WhatsApp se cobra aparte segun tarifas de Meta.

Lectura competitiva: fuerte en plataforma, menos fuerte en implementacion verticalizada para LATAM si el cliente necesita acompanamiento.

### 6.2 Wati

Wati es una plataforma centrada en WhatsApp Business API. Su pricing combina:

- Suscripcion.
- Cargos de mensajeria.
- Add-ons.

Desde julio de 2025, por cambios de Meta, el modelo paso hacia cobro por mensaje/template en lugar de solo conversacion. Wati tambien maneja sesiones de chatbot y creditos.

Lectura competitiva: fuerte para WhatsApp, pero puede sentirse complejo por creditos, sesiones, add-ons y costos de mensajeria.

### 6.3 Manychat

Manychat es muy fuerte en automatizacion de Instagram, Messenger, WhatsApp, TikTok, Telegram, SMS y email. En 2026 maneja planes por contactos activos:

- Free.
- Essential desde USD 14/mes.
- Pro desde USD 29/mes.
- Business desde USD 69/mes.
- Advanced desde USD 139/mes.

Lectura competitiva: excelente para creators, marketing conversacional y automatizaciones sociales. Menos orientado a implementacion consultiva operacional B2B.

### 6.4 Intercom Fin / Zendesk AI

Intercom y Zendesk compiten desde el mundo enterprise/helpdesk. Intercom publica Fin AI Agent a USD 0.99 por resolucion, mas seats de plataforma. Zendesk comunica AI Agents para resolucion de servicio con foco enterprise.

Lectura competitiva: potentes pero caros y mas orientados a soporte formal. Hay espacio en SMB LATAM para una solucion mas cercana, implementada y conectada a WhatsApp.

## 7. Ventana de oportunidad

El mercado esta saturado de "agentes de IA" genericos. Pero el comprador no quiere agentes: quiere menos leads perdidos, menos mensajes sin responder, menos caos operativo y mas ventas.

La ventana esta en:

- WhatsApp como canal dominante en LATAM.
- Pymes con alto volumen de mensajes y baja disciplina comercial.
- Equipos que no pueden pagar consultoria enterprise.
- Negocios que ya usan CRM o planillas de forma desordenada.
- Necesidad de implementacion real, no solo software.

El mensaje ganador no deberia ser:

"Implementamos agentes de IA".

Deberia ser:

"Respondemos, calificamos y ordenamos tus consultas de WhatsApp para que vendas mas sin agrandar tu equipo".

## 8. Nichos candidatos

### 8.1 Clinicas y consultorios

Dolores:

- Consultas repetidas.
- Turnos.
- Confirmaciones.
- Reprogramaciones.
- Pacientes que preguntan por precios, cobertura, horarios.
- Recepcion saturada.

Automatizaciones:

- Triage administrativo.
- Agenda.
- Recordatorios.
- Reconfirmacion.
- Respuestas frecuentes.
- Derivacion a humano ante urgencia o caso sensible.

Pros:

- Dolor claro.
- ROI por horas ahorradas y ausentismo reducido.
- Se puede empaquetar bien.

Riesgos:

- Datos sensibles.
- Necesidad de cuidado legal y disclaimers.
- No automatizar diagnostico medico.

### 8.2 Inmobiliarias

Dolores:

- Muchos leads frios.
- Preguntas repetidas por propiedad.
- Seguimiento manual.
- Perdida de oportunidades por demora.

Automatizaciones:

- Calificacion de presupuesto, zona, urgencia.
- Envio de fichas.
- Agenda de visita.
- Seguimiento.
- Pipeline comercial.

Pros:

- Similar a vertical destacada por Agentiza.
- Alto valor por lead.
- Facil mostrar ROI.

Riesgos:

- Mercado competitivo.
- Datos de propiedades deben estar actualizados.

### 8.3 Agencias de viaje/turismo

Dolores:

- Cotizaciones repetitivas.
- Consultas fuera de horario.
- Preguntas sobre fechas, itinerarios, precios, pagos.

Automatizaciones:

- Precalificacion.
- Captura de destino, fecha, cantidad de personas y presupuesto.
- Envio de propuestas base.
- Derivacion a vendedor.
- Postventa.

Pros:

- Alto volumen y urgencia.
- Buen fit con WhatsApp.

Riesgos:

- Precios y disponibilidad cambian rapido.
- Integraciones pueden complejizarse.

### 8.4 Educacion privada/cursos

Dolores:

- Consultas por inscripcion.
- Preguntas repetidas.
- Seguimiento de interesados.
- Recordatorios de pago/clases.

Automatizaciones:

- Calificacion de interesado.
- Envio de programa.
- Agenda con asesor.
- Recuperacion de leads.
- Soporte administrativo.

Pros:

- Muy cercano a funnels de venta.
- Buen fit para infoproductores y academias.

Riesgos:

- Competencia con Manychat y CRMs educativos.

## 9. Recomendacion de entrada

Recomendacion: empezar con una vertical donde ya tengamos contexto operativo y posibilidad de conseguir primeros clientes rapido. Las dos mejores candidatas son:

1. Clinicas/consultorios.
2. Inmobiliarias.

Si queremos menor riesgo regulatorio y venta mas simple, empezar por inmobiliarias.

Si queremos aprovechar experiencia previa en software para consultorios y generar una solucion mas defendible, empezar por clinicas, con limites claros: administrativo, agenda y soporte, nunca diagnostico.

Mi recomendacion concreta:

Empezar con "Asistente de WhatsApp para clinicas y consultorios" como primer paquete, porque permite vender eficiencia inmediata y luego expandir a CRM, agenda, recordatorios, reactivacion y reportes.

## 10. Oferta MVP vendible en 30 dias

Nombre temporal:

Atencion IA para Clinicas

Promesa:

"Automatizamos WhatsApp para responder consultas, ordenar turnos y derivar casos importantes a tu equipo sin perder trazabilidad".

Incluye:

- Diagnostico de 45 minutos.
- Relevamiento de preguntas frecuentes.
- Carga de informacion base: horarios, profesionales, prestaciones, ubicacion, politicas.
- Agente de WhatsApp para consultas administrativas.
- Handoff humano.
- Captura de datos del paciente/interesado.
- Etiquetas de intencion.
- Reporte mensual simple.
- 2 iteraciones de ajuste.

No incluye:

- Diagnostico medico.
- Recomendaciones clinicas.
- Manejo de emergencias.
- Garantia de ventas/turnos.
- Integraciones complejas en el primer paquete.

Precio inicial sugerido:

- Setup: USD 600 a USD 1.200.
- Mensualidad: USD 150 a USD 300.

Precio objetivo luego de validar:

- Setup: USD 1.500 a USD 2.500.
- Mensualidad: USD 300 a USD 700.

## 11. Stack tecnico recomendado para MVP

### Version rapida con bajo riesgo

- Front/admin: Next.js.
- Base de datos: Postgres/Supabase o PocketBase si queremos velocidad local.
- Automatizacion: n8n o Make para primeras integraciones.
- IA: OpenAI API.
- RAG: pgvector, Supabase Vector o Qdrant.
- WhatsApp: Twilio, 360dialog, Wati API/BSP, Zenvia, MessageBird/Infobip o Meta Cloud API directa.
- Logs/observabilidad: tabla de conversaciones + eventos.
- Dashboard inicial: inbox simple + estados + metricas.

### Version producto propio

- Multi-tenant.
- Inbox omnicanal.
- Motor de agentes configurable.
- Knowledge base por cliente.
- Handoff y asignacion.
- Webhooks.
- Roles y permisos.
- Auditoria de mensajes.
- Evaluacion de respuestas.

## 12. Proceso comercial recomendado

### 12.1 Diagnostico

Preguntas clave:

- Cuantas consultas reciben por dia?
- Por que canales entran?
- Que porcentaje son repetitivas?
- Cuanto tardan en responder?
- Cuantos turnos/leads pierden por demora?
- Que preguntas ocupan mas tiempo?
- Que sistema usan para agenda/CRM?
- Quien responde hoy?
- Que casos siempre deben pasar a humano?

### 12.2 Demo

No mostrar una plataforma vacia. Mostrar un flujo real:

1. Paciente escribe por WhatsApp.
2. IA identifica intencion.
3. Responde con datos reales.
4. Pide informacion minima.
5. Deriva a humano si corresponde.
6. Deja resumen y etiqueta.
7. Aparece en dashboard.

### 12.3 Cierre

Vender implementacion, no licencia:

- Semana 1: relevamiento.
- Semana 2: configuracion y base de conocimiento.
- Semana 3: pruebas.
- Semana 4: salida controlada.

## 13. Riesgos y mitigaciones

### Riesgo: prometer demasiado

Mitigacion:

- Limitar alcance al proceso administrativo.
- Definir casos de escalamiento.
- Mantener humano en el circuito.

### Riesgo: respuestas incorrectas

Mitigacion:

- RAG con fuentes aprobadas.
- Mensajes de incertidumbre.
- Evaluacion de respuestas.
- Boton/estado de derivacion.

### Riesgo: dependencia de WhatsApp/Meta

Mitigacion:

- Usar proveedor estable.
- Preparar widget web como segundo canal.
- No construir como bot generico prohibido, sino como asistente de una empresa para atencion a sus propios clientes.

### Riesgo: costos variables

Mitigacion:

- Cobrar setup + mensualidad con limites.
- Medir mensajes/tokens/contactos.
- Definir fair use.

### Riesgo: falta de diferenciacion

Mitigacion:

- Verticalizar.
- Crear plantillas, flujos y reportes especificos.
- Vender resultado operativo.

## 14. Roadmap de 90 dias

### Dias 1-15: validacion

- Elegir vertical inicial.
- Crear landing simple.
- Armar demo clickeable o funcional.
- Definir paquete y precio beta.
- Contactar 20 prospectos.
- Conseguir 3 entrevistas.

### Dias 16-30: MVP operativo

- Implementar flujo de WhatsApp o simulador web.
- Crear base de conocimiento por cliente.
- Crear inbox minimo.
- Registrar conversaciones, intenciones y handoffs.
- Entregar primer piloto.

### Dias 31-60: primer caso real

- Medir consultas respondidas.
- Medir tiempo de respuesta.
- Medir derivaciones.
- Documentar antes/despues.
- Convertir piloto en mensualidad.

### Dias 61-90: paquetizacion

- Repetir con 2 clientes mas.
- Extraer patrones.
- Crear plantillas por vertical.
- Mejorar dashboard.
- Definir pricing publico.
- Preparar contenido comercial.

## 15. Fuentes principales

- Agentiza home: https://agentiza.ai/en/
- Agentiza oferta exclusiva: https://agentiza.ai/en/oferta_exclusiva/
- Agentiza App Store: https://apps.apple.com/py/app/agentiza-ai/id6478318281
- LinkedIn Agentiza: https://www.linkedin.com/company/agentiza
- Metodo 4C: https://metodo4c.ai/
- Agentiza insight sobre agentes: https://agentiza.ai/insights/cuando-modelo-se-convierte-en-agente/
- Agentiza insight sobre RAG/contexto: https://agentiza.ai/insights/problema-contexto-ia-primera-solucion-rag/
- Respond.io pricing: https://respond.io/pricing
- Wati pricing help: https://support.wati.io/en/articles/11462993-understanding-wati-s-pricing-structure
- Manychat pricing: https://manychat.com/es/pricing
- Manychat WhatsApp pricing guide: https://help.manychat.com/hc/en-us/articles/14281380243740-WhatsApp-pricing-guide
- Intercom pricing: https://www.intercom.com/pricing-new
- Zendesk AI: https://www.zendesk.com/service/ai
- Twilio WhatsApp pricing: https://www.twilio.com/en-us/whatsapp/pricing

## 16. Proxima decision

Para avanzar rapido hay que decidir una de estas dos rutas:

### Ruta A: agencia-producto

Primero vender implementaciones manuales y semiautomatizadas. Construir producto solo donde duela repetir.

Ventajas:

- Mas rapido para facturar.
- Aprende del mercado real.
- Menor inversion inicial.

Desventajas:

- Mas trabajo operativo.
- Riesgo de proyectos demasiado custom.

### Ruta B: producto primero

Construir plataforma propia antes de vender fuerte.

Ventajas:

- Mas escalable a largo plazo.
- Mejor control tecnico.

Desventajas:

- Mas lento.
- Riesgo de construir sin validacion.

Recomendacion: Ruta A durante 90 dias, con una arquitectura minima que no impida producto futuro.

