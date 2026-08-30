// ============================================
// MOCK BACKEND - Plataforma TPT (Demo)
// Reemplaza supabase-client.js manteniendo la interfaz google.script.run
// Datos ficticios en memoria, persistidos en localStorage
// ============================================

var DEMO_STORAGE_KEY = 'tpt_demo_db_v2';

// ============================================
// DATOS BASE
// ============================================
function _seedDB() {
  var db = {
    clientes: [
      { id: 'cli-001', nombre: 'Grupo Andes', razon_social: 'Grupo Andes SpA', rubro: 'Servicios', pais: 'Chile', contacto_nombre: 'Marcela Ibáñez', contacto_email: 'mibanez@grupoandes.cl', estado: 'Activo', created_at: '2025-11-02T10:00:00Z' },
      { id: 'cli-002', nombre: 'Retail Norte', razon_social: 'Retail Norte Ltda.', rubro: 'Retail', pais: 'Chile', contacto_nombre: 'Cristián Paredes', contacto_email: 'cparedes@retailnorte.cl', estado: 'Activo', created_at: '2025-12-10T10:00:00Z' },
      { id: 'cli-003', nombre: 'Industrias del Sur', razon_social: 'Industrias del Sur S.A.', rubro: 'Manufactura', pais: 'Chile', contacto_nombre: 'Paula Guzmán', contacto_email: 'pguzman@indsur.cl', estado: 'Inactivo', created_at: '2025-08-21T10:00:00Z' }
    ],

    programas: [
      {
        id: 'prog-001', nombre: 'Liderazgo Efectivo 2026', cliente_id: 'cli-001', tipo: 'programa_completo',
        estado: 'activo', objetivo: 'Fortalecer competencias de liderazgo colaborativo en jefaturas, midiendo la transferencia real de conductas al puesto de trabajo.',
        fecha_inicio: '2026-03-02', fecha_termino: '2026-08-28',
        fecha_medicion_pre: '2026-03-09', fecha_medicion_post: '2026-08-14',
        created_at: '2026-01-15T10:00:00Z'
      },
      {
        id: 'prog-002', nombre: 'Experiencia de Servicio', cliente_id: 'cli-002', tipo: 'piloto',
        estado: 'diseno', objetivo: 'Piloto de mejora en habilidades de atención y resolución para jefaturas de tienda.',
        fecha_inicio: '2026-09-01', fecha_termino: '2026-12-19',
        fecha_medicion_pre: '2026-09-08', fecha_medicion_post: '2026-12-10',
        created_at: '2026-06-01T10:00:00Z'
      },
      {
        id: 'prog-003', nombre: 'Gestión de Equipos 2025', cliente_id: 'cli-003', tipo: 'programa_completo',
        estado: 'finalizado', objetivo: 'Programa cerrado de desarrollo de mandos medios.',
        fecha_inicio: '2025-04-01', fecha_termino: '2025-10-31',
        fecha_medicion_pre: '2025-04-10', fecha_medicion_post: '2025-10-20',
        created_at: '2025-02-10T10:00:00Z'
      }
    ],

    usuarios: [
      { id: 'usr-000', auth_id: 'auth-000', nombre: 'Admin Demo', email: 'admin@demo.cl', rol: 'admin', cargo: 'Administrador de Plataforma', cliente_id: null, estado: 'Activo', password_visible: 'demo2026', created_at: '2025-11-02T10:00:00Z' },

      { id: 'usr-101', auth_id: 'auth-101', nombre: 'Javier Rodríguez', email: 'jrodriguez@demo.cl', rol: 'jefatura', cargo: 'Jefe de Operaciones', cliente_id: 'cli-001', estado: 'Activo', password_visible: 'demo2026', created_at: '2026-01-20T10:00:00Z' },
      { id: 'usr-102', auth_id: 'auth-102', nombre: 'Camila Herrera', email: 'cherrera@demo.cl', rol: 'jefatura', cargo: 'Gerente Comercial', cliente_id: 'cli-001', estado: 'Activo', password_visible: 'demo2026', created_at: '2026-01-20T10:00:00Z' },
      { id: 'usr-103', auth_id: 'auth-103', nombre: 'Andrés Soto', email: 'asoto@demo.cl', rol: 'jefatura', cargo: 'Jefe de Proyectos', cliente_id: 'cli-001', estado: 'Activo', password_visible: 'demo2026', created_at: '2026-01-20T10:00:00Z' },

      { id: 'usr-201', auth_id: 'auth-201', nombre: 'Laura Martínez', email: 'lmartinez@demo.cl', rol: 'participante', cargo: 'Analista de Operaciones', cliente_id: 'cli-001', estado: 'Activo', password_visible: 'demo2026', created_at: '2026-01-22T10:00:00Z' },
      { id: 'usr-202', auth_id: 'auth-202', nombre: 'Roberto Díaz', email: 'rdiaz@demo.cl', rol: 'participante', cargo: 'Coordinador de Turno', cliente_id: 'cli-001', estado: 'Activo', password_visible: 'demo2026', created_at: '2026-01-22T10:00:00Z' },
      { id: 'usr-203', auth_id: 'auth-203', nombre: 'Diego Fuentes', email: 'dfuentes@demo.cl', rol: 'participante', cargo: 'Ejecutivo Comercial', cliente_id: 'cli-001', estado: 'Activo', password_visible: 'demo2026', created_at: '2026-01-22T10:00:00Z' },
      { id: 'usr-204', auth_id: 'auth-204', nombre: 'Sofía Vargas', email: 'svargas@demo.cl', rol: 'participante', cargo: 'Ejecutiva Comercial', cliente_id: 'cli-001', estado: 'Activo', password_visible: 'demo2026', created_at: '2026-01-22T10:00:00Z' },
      { id: 'usr-205', auth_id: 'auth-205', nombre: 'Pablo Núñez', email: 'pnunez@demo.cl', rol: 'participante', cargo: 'Analista de Proyectos', cliente_id: 'cli-001', estado: 'Activo', password_visible: 'demo2026', created_at: '2026-01-22T10:00:00Z' },
      { id: 'usr-206', auth_id: 'auth-206', nombre: 'Valentina Rojas', email: 'vrojas@demo.cl', rol: 'participante', cargo: 'Coordinadora de Proyectos', cliente_id: 'cli-001', estado: 'Activo', password_visible: 'demo2026', created_at: '2026-01-22T10:00:00Z' }
    ],

    // Relación participante <-> programa (modelo 360: lider se autoevalua, colaborador coevalua a su lider)
    participantes_programa: [
      { id: 'pp-101', programa_id: 'prog-001', usuario_id: 'usr-101', rol_programa: 'lider', lider_id: null },
      { id: 'pp-102', programa_id: 'prog-001', usuario_id: 'usr-102', rol_programa: 'lider', lider_id: null },
      { id: 'pp-103', programa_id: 'prog-001', usuario_id: 'usr-103', rol_programa: 'lider', lider_id: null },
      { id: 'pp-201', programa_id: 'prog-001', usuario_id: 'usr-201', rol_programa: 'colaborador', lider_id: 'usr-101' },
      { id: 'pp-202', programa_id: 'prog-001', usuario_id: 'usr-202', rol_programa: 'colaborador', lider_id: 'usr-101' },
      { id: 'pp-203', programa_id: 'prog-001', usuario_id: 'usr-203', rol_programa: 'colaborador', lider_id: 'usr-102' },
      { id: 'pp-204', programa_id: 'prog-001', usuario_id: 'usr-204', rol_programa: 'colaborador', lider_id: 'usr-102' },
      { id: 'pp-205', programa_id: 'prog-001', usuario_id: 'usr-205', rol_programa: 'colaborador', lider_id: 'usr-103' },
      { id: 'pp-206', programa_id: 'prog-001', usuario_id: 'usr-206', rol_programa: 'colaborador', lider_id: 'usr-103' }
    ],

    competencias: [
      {
        id: 'comp-001', programa_id: 'prog-001', nombre: 'Delegación con propósito',
        descripcion: 'Distribuye responsabilidades entregando contexto, autonomía y respaldo, fortaleciendo la capacidad del equipo.',
        foco_desarrollo: 'Soltar el control operativo y fortalecer la autonomía del equipo',
        nivel_1_texto: 'Retiene las decisiones y resuelve por su cuenta',
        nivel_2_texto: 'Delega tareas puntuales, pero supervisa cada paso',
        nivel_3_texto: 'Delega con contexto y acuerda puntos de control',
        nivel_4_texto: 'Delega desarrollo: asigna desafíos que hacen crecer al equipo',
        interpretacion_nivel_1: 'Requiere desarrollo prioritario',
        interpretacion_nivel_2: 'En proceso de instalación',
        interpretacion_nivel_3: 'Conducta instalada',
        interpretacion_nivel_4: 'Referente para otros',
        prioridad: 1, orden: 1, estado: 'activa'
      },
      {
        id: 'comp-002', programa_id: 'prog-001', nombre: 'Conversaciones que desarrollan',
        descripcion: 'Sostiene conversaciones de retroalimentación que generan aprendizaje y compromiso, no solo corrección.',
        foco_desarrollo: 'Transformar la conversación en una herramienta de aprendizaje',
        nivel_1_texto: 'Evita las conversaciones difíciles',
        nivel_2_texto: 'Da feedback correctivo, centrado en el error',
        nivel_3_texto: 'Da feedback oportuno, equilibrando logro y mejora',
        nivel_4_texto: 'Convierte cada conversación en una oportunidad de desarrollo',
        interpretacion_nivel_1: 'Requiere desarrollo prioritario',
        interpretacion_nivel_2: 'En proceso de instalación',
        interpretacion_nivel_3: 'Conducta instalada',
        interpretacion_nivel_4: 'Referente para otros',
        prioridad: 2, orden: 2, estado: 'activa'
      },
      {
        id: 'comp-003', programa_id: 'prog-001', nombre: 'Articulación colaborativa',
        descripcion: 'Coordina con otras áreas y visibiliza los aportes del equipo, construyendo resultados compartidos.',
        foco_desarrollo: 'Liderar desde la colaboración, visibilizando el aporte de cada persona',
        nivel_1_texto: 'Trabaja en silo, sin coordinar con otras áreas',
        nivel_2_texto: 'Coordina cuando el problema ya apareció',
        nivel_3_texto: 'Anticipa y coordina de forma proactiva',
        nivel_4_texto: 'Articula redes de colaboración y da visibilidad al equipo',
        interpretacion_nivel_1: 'Requiere desarrollo prioritario',
        interpretacion_nivel_2: 'En proceso de instalación',
        interpretacion_nivel_3: 'Conducta instalada',
        interpretacion_nivel_4: 'Referente para otros',
        prioridad: 3, orden: 3, estado: 'activa'
      }
    ],

    encuestas: [
      { id: 'enc-pre-auto', programa_id: 'prog-001', nombre: 'Autoevaluación PRE — Liderazgo Efectivo', tipo: 'pre', tipo_cuestionario: 'autoevaluacion', estado: 'activa', instrucciones: 'Evalúa con honestidad tu nivel actual en cada competencia. No hay respuestas correctas: el valor está en tener una fotografía real del punto de partida.', fecha_cierre: '2026-03-20', created_at: '2026-03-01T10:00:00Z' },
      { id: 'enc-pre-co', programa_id: 'prog-001', nombre: 'Coevaluación PRE — Liderazgo Efectivo', tipo: 'pre', tipo_cuestionario: 'coevaluacion', estado: 'activa', instrucciones: 'Evalúa a tu jefatura directa según lo que observas en el día a día. Tus respuestas son confidenciales y se reportan de forma agregada.', fecha_cierre: '2026-03-20', created_at: '2026-03-01T10:00:00Z' },
      { id: 'enc-post-auto', programa_id: 'prog-001', nombre: 'Autoevaluación POST — Liderazgo Efectivo', tipo: 'post', tipo_cuestionario: 'autoevaluacion', estado: 'activa', instrucciones: 'Al cierre del programa, evalúa nuevamente tu nivel en cada competencia. Compararemos con tu medición inicial.', fecha_cierre: '2026-08-25', created_at: '2026-08-01T10:00:00Z' },
      { id: 'enc-post-co', programa_id: 'prog-001', nombre: 'Coevaluación POST — Liderazgo Efectivo', tipo: 'post', tipo_cuestionario: 'coevaluacion', estado: 'activa', instrucciones: 'Evalúa nuevamente a tu jefatura directa. Nos interesa saber qué cambió en su forma de liderar durante estos meses.', fecha_cierre: '2026-08-25', created_at: '2026-08-01T10:00:00Z' }
    ],

    preguntas: [],
    respuestas: [],

    hitos: [
      { id: 'hito-001', programa_id: 'prog-001', nombre: 'Kick Off del programa', descripcion: 'Sesión de apertura con jefaturas y patrocinadores', fase: 'Inicio', fecha_inicio: '2026-03-02', fecha_termino: '2026-03-02', responsable: 'Equipo consultor', estado: 'completado', orden: 1 },
      { id: 'hito-002', programa_id: 'prog-001', nombre: 'Medición PRE', descripcion: 'Autoevaluación y coevaluación inicial', fase: 'Diagnóstico', fecha_inicio: '2026-03-09', fecha_termino: '2026-03-20', responsable: 'Participantes', estado: 'completado', orden: 2 },
      { id: 'hito-003', programa_id: 'prog-001', nombre: 'Taller 1: Delegación con propósito', descripcion: 'Taller presencial de 4 horas', fase: 'Desarrollo', fecha_inicio: '2026-04-08', fecha_termino: '2026-04-08', responsable: 'Facilitador', estado: 'completado', orden: 3 },
      { id: 'hito-004', programa_id: 'prog-001', nombre: 'Taller 2: Conversaciones que desarrollan', descripcion: 'Taller presencial de 4 horas', fase: 'Desarrollo', fecha_inicio: '2026-05-13', fecha_termino: '2026-05-13', responsable: 'Facilitador', estado: 'completado', orden: 4 },
      { id: 'hito-005', programa_id: 'prog-001', nombre: 'Práctica guiada en terreno', descripcion: 'Aplicación de conductas con acompañamiento', fase: 'Desarrollo', fecha_inicio: '2026-05-20', fecha_termino: '2026-07-15', responsable: 'Jefaturas', estado: 'en_curso', orden: 5 },
      { id: 'hito-006', programa_id: 'prog-001', nombre: 'Taller 3: Articulación colaborativa', descripcion: 'Taller presencial de 4 horas', fase: 'Desarrollo', fecha_inicio: '2026-06-17', fecha_termino: '2026-06-17', responsable: 'Facilitador', estado: 'completado', orden: 6 },
      { id: 'hito-007', programa_id: 'prog-001', nombre: 'Medición POST', descripcion: 'Autoevaluación y coevaluación de cierre', fase: 'Cierre', fecha_inicio: '2026-08-14', fecha_termino: '2026-08-25', responsable: 'Participantes', estado: 'en_curso', orden: 7 },
      { id: 'hito-008', programa_id: 'prog-001', nombre: 'Entrega de informe ejecutivo', descripcion: 'Presentación de resultados al comité', fase: 'Cierre', fecha_inicio: '2026-08-28', fecha_termino: '2026-08-28', responsable: 'Equipo consultor', estado: 'pendiente', orden: 8 }
    ],

    archivos: [
      { id: 'arch-001', programa_id: 'prog-001', nombre: 'Guía del participante.pdf', tipo: 'application/pdf', tamano: 842000, url: '#', visible: true, created_at: '2026-03-02T10:00:00Z' },
      { id: 'arch-002', programa_id: 'prog-001', nombre: 'Matriz de competencias.xlsx', tipo: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', tamano: 51200, url: '#', visible: true, created_at: '2026-03-02T10:00:00Z' },
      { id: 'arch-003', programa_id: 'prog-001', nombre: 'Material Taller 1 — Delegación.pptx', tipo: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', tamano: 3400000, url: '#', visible: true, created_at: '2026-04-08T10:00:00Z' },
      { id: 'arch-004', programa_id: 'prog-001', nombre: 'Bitácora de práctica guiada.pdf', tipo: 'application/pdf', tamano: 620000, url: '#', visible: true, created_at: '2026-05-20T10:00:00Z' }
    ],

    notificaciones: [
      { id: 'not-001', usuario_id: null, mensaje: 'La medición POST está abierta hasta el 25 de agosto', tipo: 'encuesta', fecha: '2026-08-14', leida: false, created_at: '2026-08-14T09:00:00Z' },
      { id: 'not-002', usuario_id: null, mensaje: 'Laura Martínez completó su coevaluación', tipo: 'respuesta', fecha: '2026-08-18', leida: false, created_at: '2026-08-18T14:20:00Z' },
      { id: 'not-003', usuario_id: null, mensaje: 'Nuevo material disponible: Bitácora de práctica guiada', tipo: 'archivo', fecha: '2026-05-20', leida: true, created_at: '2026-05-20T11:00:00Z' }
    ],

    feedback: [
      { id: 'fb-001', programa_id: 'prog-001', autor_id: 'usr-101', destinatario_id: 'usr-201', fortalezas: 'Tu capacidad de anticipar problemas operativos mejoró notablemente este semestre. El equipo te busca cuando hay que resolver algo complejo.', mejoras: 'Todavía te cuesta delegar las tareas que dominas. Cuando lo haces, el equipo responde bien.', recomendaciones: 'Elige una tarea recurrente que hoy haces tú y transfiérela con acompañamiento durante las próximas 4 semanas.', created_at: '2026-07-10T10:00:00Z' },
      { id: 'fb-002', programa_id: 'prog-001', autor_id: 'usr-102', destinatario_id: 'usr-203', fortalezas: 'Tu manejo de clientes difíciles es un referente para el resto del equipo comercial.', mejoras: 'Podrías compartir más ese conocimiento en las reuniones de equipo.', recomendaciones: 'Propone un espacio de 15 minutos en la reunión semanal para compartir un caso resuelto.', created_at: '2026-07-12T10:00:00Z' }
    ],

    observaciones: [
      { id: 'obs-001', programa_id: 'prog-001', usuario_id: 'usr-201', titulo: 'No puedo acceder a la encuesta POST', descripcion: 'Al entrar a mis encuestas me aparece la lista vacía.', categoria: 'tecnico', estado: 'resuelto', prioridad: 'alta', respuesta: 'Se corrigió la asignación al programa. Ya puedes responder.', created_at: '2026-08-15T10:30:00Z' },
      { id: 'obs-002', programa_id: 'prog-001', usuario_id: 'usr-205', titulo: 'Consulta sobre confidencialidad', descripcion: '¿Mi jefatura puede ver mis respuestas individuales de la coevaluación?', categoria: 'consulta', estado: 'pendiente', prioridad: 'media', respuesta: '', created_at: '2026-08-19T09:15:00Z' }
    ],

    correos: [
      { id: 'cor-001', programa_id: 'prog-001', destinatario: 'Todos los participantes', asunto: 'Se abre la medición POST', cuerpo: 'Ya está disponible la medición de cierre del programa.', fecha_envio: '2026-08-14T09:00:00Z', estado: 'enviado', total_destinatarios: 9 },
      { id: 'cor-002', programa_id: 'prog-001', destinatario: 'Pendientes de responder', asunto: 'Recordatorio: quedan 5 días', cuerpo: 'Te queda poco tiempo para completar tu evaluación.', fecha_envio: '2026-08-20T09:00:00Z', estado: 'enviado', total_destinatarios: 4 }
    ],

    informes_generados: [
      { id: 'inf-001', programa_id: 'prog-001', tipo: 'consolidado', momento: 'pre', participante_id: null, created_at: '2026-03-25T10:00:00Z' },
      { id: 'inf-002', programa_id: 'prog-001', tipo: 'individual', momento: 'pre', participante_id: 'usr-101', created_at: '2026-03-25T10:05:00Z' }
    ]
  };

  _seedPreguntas(db);
  _seedRespuestas(db);
  return db;
}

// Genera 3 preguntas de nivel por competencia + 1 abierta, para cada encuesta
function _seedPreguntas(db) {
  var textosAuto = {
    'comp-001': 'Cuando asigno una responsabilidad a alguien de mi equipo...',
    'comp-002': 'Cuando necesito dar retroalimentación a una persona de mi equipo...',
    'comp-003': 'Cuando un objetivo depende de otras áreas...'
  };
  var textosCo = {
    'comp-001': 'Cuando mi jefatura asigna una responsabilidad al equipo...',
    'comp-002': 'Cuando mi jefatura entrega retroalimentación...',
    'comp-003': 'Cuando un objetivo depende de otras áreas, mi jefatura...'
  };
  var abiertaAuto = '¿Qué conducta de liderazgo te propones fortalecer en los próximos meses y por qué?';
  var abiertaCo = '¿Qué es lo más valioso que aporta tu jefatura al equipo, y qué le pedirías que hiciera distinto?';

  var orden = 0;
  db.encuestas.forEach(function(enc) {
    var esAuto = enc.tipo_cuestionario === 'autoevaluacion';
    var textos = esAuto ? textosAuto : textosCo;
    orden = 0;
    db.competencias.forEach(function(c) {
      orden++;
      db.preguntas.push({
        id: 'preg-' + enc.id + '-' + c.id,
        encuesta_id: enc.id,
        texto_pregunta: textos[c.id],
        tipo_respuesta: 'niveles_competencia',
        competencia_id: c.id,
        foco_desarrollo: c.foco_desarrollo,
        opcion_nivel_1: c.nivel_1_texto,
        opcion_nivel_2: c.nivel_2_texto,
        opcion_nivel_3: c.nivel_3_texto,
        opcion_nivel_4: c.nivel_4_texto,
        obligatoria: true,
        orden: orden
      });
    });
    orden++;
    db.preguntas.push({
      id: 'preg-' + enc.id + '-abierta',
      encuesta_id: enc.id,
      texto_pregunta: esAuto ? abiertaAuto : abiertaCo,
      tipo_respuesta: 'parrafo',
      competencia_id: null,
      foco_desarrollo: '',
      opcion_nivel_1: '', opcion_nivel_2: '', opcion_nivel_3: '', opcion_nivel_4: '',
      obligatoria: false,
      orden: orden
    });
  });
}

// Genera respuestas realistas: PRE bajo, POST alto, con brecha auto vs co
function _seedRespuestas(db) {
  // nivel base por lider y competencia — [pre_auto, pre_co, post_auto, post_co]
  var perfiles = {
    'usr-101': { 'comp-001': [2, 2, 4, 3], 'comp-002': [3, 2, 4, 3], 'comp-003': [2, 2, 3, 3] },
    'usr-102': { 'comp-001': [3, 2, 4, 4], 'comp-002': [2, 2, 3, 3], 'comp-003': [3, 3, 4, 4] },
    'usr-103': { 'comp-001': [2, 1, 3, 2], 'comp-002': [2, 2, 3, 3], 'comp-003': [2, 2, 3, 3] }
  };

  var abiertasAuto = {
    'usr-101': 'Quiero soltar el control sobre la programación de turnos. Hoy la hago yo por costumbre y sé que Roberto podría tomarla.',
    'usr-102': 'Me propongo dar feedback más seguido, no solo en la evaluación semestral. El equipo necesita saber antes cómo va.',
    'usr-103': 'Necesito coordinar antes con las otras jefaturas. Muchas veces llegamos tarde a los problemas que se podían anticipar.'
  };
  var abiertasCo = {
    'usr-201': 'Lo más valioso es que siempre está disponible cuando hay un problema. Le pediría que confíe más en que podemos resolver sin que revise cada paso.',
    'usr-202': 'Es muy claro con las prioridades. Me gustaría que delegue más las decisiones operativas del turno.',
    'usr-203': 'Nos defiende frente a otras áreas y eso se agradece. Podría darnos más espacio en las reuniones para proponer.',
    'usr-204': 'Conoce muy bien el negocio. A veces va tan rápido que cuesta seguirle el ritmo en las explicaciones.',
    'usr-205': 'Es justo y ordenado. Le pediría más retroalimentación en el momento, no solo cuando algo sale mal.',
    'usr-206': 'Se nota que se preocupa por el equipo. Podría visibilizar más nuestro trabajo con la gerencia.'
  };

  var lideres = ['usr-101', 'usr-102', 'usr-103'];
  var colabsPorLider = { 'usr-101': ['usr-201', 'usr-202'], 'usr-102': ['usr-203', 'usr-204'], 'usr-103': ['usr-205', 'usr-206'] };

  var fechas = { 'enc-pre-auto': '2026-03-12', 'enc-pre-co': '2026-03-14', 'enc-post-auto': '2026-08-18', 'enc-post-co': '2026-08-19' };
  var idx = { 'enc-pre-auto': 0, 'enc-pre-co': 1, 'enc-post-auto': 2, 'enc-post-co': 3 };

  function push(encId, preguntaId, evaluadorId, evaluadoId, valor, dia) {
    db.respuestas.push({
      id: 'resp-' + db.respuestas.length,
      encuesta_id: encId,
      pregunta_id: preguntaId,
      evaluador_id: evaluadorId,
      evaluado_id: evaluadoId,
      valor: String(valor),
      created_at: dia + 'T10:00:00Z'
    });
  }

  // Autoevaluaciones (lider se evalua a si mismo) — PRE y POST completas
  ['enc-pre-auto', 'enc-post-auto'].forEach(function(encId) {
    var i = idx[encId];
    lideres.forEach(function(lid) {
      db.competencias.forEach(function(c) {
        push(encId, 'preg-' + encId + '-' + c.id, lid, lid, perfiles[lid][c.id][i], fechas[encId]);
      });
      push(encId, 'preg-' + encId + '-abierta', lid, lid, abiertasAuto[lid], fechas[encId]);
    });
  });

  // Coevaluaciones (colaborador evalua a su lider)
  // PRE: todos responden. POST: uno queda pendiente para mostrar seguimiento realista.
  var pendientePost = 'usr-206';
  ['enc-pre-co', 'enc-post-co'].forEach(function(encId) {
    var i = idx[encId];
    lideres.forEach(function(lid) {
      colabsPorLider[lid].forEach(function(colab, k) {
        if (encId === 'enc-post-co' && colab === pendientePost) return;
        db.competencias.forEach(function(c) {
          // variacion leve entre colaboradores del mismo lider
          var base = perfiles[lid][c.id][i];
          var v = k === 0 ? base : Math.max(1, Math.min(4, base + (base < 4 ? 1 : -1)));
          push(encId, 'preg-' + encId + '-' + c.id, colab, lid, v, fechas[encId]);
        });
        push(encId, 'preg-' + encId + '-abierta', colab, lid, abiertasCo[colab], fechas[encId]);
      });
    });
  });
}

// ============================================
// PERSISTENCIA
// ============================================
var DB = null;

function _loadDB() {
  if (DB) return DB;
  try {
    var saved = localStorage.getItem(DEMO_STORAGE_KEY);
    if (saved) {
      DB = JSON.parse(saved);
      return DB;
    }
  } catch (e) {
    console.warn('[TPT Demo] No se pudo leer el estado guardado, se reinicia.', e);
  }
  DB = _seedDB();
  _saveDB();
  return DB;
}

function _saveDB() {
  try {
    localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(DB));
  } catch (e) {
    console.warn('[TPT Demo] No se pudo guardar el estado.', e);
  }
}

function resetDemoData() {
  DB = _seedDB();
  _saveDB();
  console.log('%c[TPT Demo] Datos restaurados a su estado original', 'color:#F58220;font-weight:bold;');
  return true;
}
window.resetDemoData = resetDemoData;

// ============================================
// HELPERS
// ============================================
function _uid(prefix) {
  return prefix + '-' + Math.random().toString(36).slice(2, 10);
}

function _nowISO() {
  return new Date().toISOString();
}

function _hoy() {
  return new Date().toISOString().slice(0, 10);
}

function _usuarioActual() {
  try {
    var u = JSON.parse(sessionStorage.getItem('tpt_usuario') || 'null');
    return u && u.id ? u : null;
  } catch (e) { return null; }
}

function _find(tabla, id) {
  var db = _loadDB();
  return (db[tabla] || []).find(function(r) { return r.id === id; }) || null;
}

function _filter(tabla, fn) {
  var db = _loadDB();
  return (db[tabla] || []).filter(fn);
}

function _round(n, dec) {
  var f = Math.pow(10, dec || 0);
  return Math.round(n * f) / f;
}

function _promedio(arr) {
  if (!arr.length) return null;
  var sum = arr.reduce(function(a, b) { return a + b; }, 0);
  return sum / arr.length;
}

// Escala 1-4 -> porcentaje 0-100
function _aPorcentaje(avg) {
  if (avg == null) return 0;
  return Math.round(((avg - 1) / 3) * 100);
}

function _clienteNombre(clienteId) {
  var c = _find('clientes', clienteId);
  return c ? c.nombre : '';
}

// Respuestas numericas de una encuesta, opcionalmente filtradas
function _respuestasNumericas(filtro) {
  var db = _loadDB();
  var pregNivel = {};
  db.preguntas.forEach(function(p) {
    if (p.tipo_respuesta === 'niveles_competencia') pregNivel[p.id] = p;
  });
  return db.respuestas.filter(function(r) {
    if (!pregNivel[r.pregunta_id]) return false;
    return filtro ? filtro(r, pregNivel[r.pregunta_id]) : true;
  }).map(function(r) {
    return { r: r, p: pregNivel[r.pregunta_id], valor: parseInt(r.valor, 10) };
  }).filter(function(x) { return !isNaN(x.valor); });
}

function _encuestasDe(progId, tipo, tipoCuest) {
  var db = _loadDB();
  return db.encuestas.filter(function(e) {
    if (e.programa_id !== progId) return false;
    if (tipo && e.tipo !== tipo) return false;
    if (tipoCuest && (e.tipo_cuestionario || 'autoevaluacion') !== tipoCuest) return false;
    return true;
  });
}

function _idsDe(arr) { return arr.map(function(x) { return x.id; }); }

// Programa activo por defecto para vistas sin progId explicito
function _programaPorDefecto() {
  var db = _loadDB();
  return db.programas.find(function(p) { return p.estado === 'activo'; }) || db.programas[0] || null;
}

// Programa asociado a un usuario
function _programaDeUsuario(userId) {
  var db = _loadDB();
  var pp = db.participantes_programa.find(function(x) { return x.usuario_id === userId; });
  if (!pp) return null;
  return _find('programas', pp.programa_id);
}

// ============================================
// BACKEND FUNCTIONS (mismo contrato que supabase-client.js)
// ============================================
var backendFunctions = {

  // ============================================
  // AUTH
  // ============================================
  loginUsuario: function(email, password) {
    var db = _loadDB();
    var e = String(email || '').trim().toLowerCase();
    var u = db.usuarios.find(function(x) {
      return x.email.toLowerCase() === e && x.estado === 'Activo';
    });
    if (!u) {
      return { success: false, error: 'Credenciales invalidas. Verifica tu correo y contrasena.' };
    }
    // En la demo cualquier contrasena no vacia es valida
    if (!password) {
      return { success: false, error: 'Credenciales invalidas. Verifica tu correo y contrasena.' };
    }
    return { success: true, data: { token: 'demo-token', usuario: u } };
  },

  cerrarSesion: function() { return { success: true }; },

  solicitarResetPassword: function(email) {
    return { success: true, data: { message: 'Si el correo existe, recibiras un enlace para restablecer tu contrasena.' } };
  },

  confirmarResetPassword: function(token, nuevaPassword) {
    return { success: true, data: { message: 'Contrasena actualizada.' } };
  },

  registrarUsuario: function(datos) {
    var db = _loadDB();
    var existe = db.usuarios.some(function(u) {
      return u.email.toLowerCase() === String(datos.email || '').toLowerCase();
    });
    if (existe) return { success: false, error: 'Ya existe un usuario con ese correo.' };
    var nuevo = {
      id: _uid('usr'), auth_id: _uid('auth'),
      nombre: datos.nombre || datos.nombre_completo || '',
      email: datos.email || '',
      rol: datos.rol || 'participante',
      cargo: datos.cargo || '',
      cliente_id: datos.cliente_id || null,
      estado: 'Activo',
      password_visible: datos.password || 'demo2026',
      created_at: _nowISO()
    };
    db.usuarios.push(nuevo);
    _saveDB();
    return { success: true, data: { id: nuevo.id } };
  },

  obtenerClientesRegistro: function() {
    return _filter('clientes', function(c) { return c.estado === 'Activo'; })
      .map(function(c) { return { id: c.id, nombre: c.nombre }; });
  },

  obtenerConfigPlataforma: function() {
    return { success: true, data: { activa: true, modo_solo_lectura: false, mensaje: null } };
  },

  obtenerEstadoLicencia: function(token, clienteId) {
    return { success: true, data: { estado: 'activa', dias_restantes: null, es_admin_global: true } };
  },

  // ============================================
  // CLIENTES
  // ============================================
  listarClientes: function() {
    var db = _loadDB();
    return { success: true, data: db.clientes.slice() };
  },

  crearCliente: function(token, datos) {
    var db = _loadDB();
    var nuevo = {
      id: _uid('cli'),
      nombre: datos.nombre || '',
      razon_social: datos.razon_social || '',
      rubro: datos.rubro || '',
      pais: datos.pais || 'Chile',
      contacto_nombre: datos.contacto_nombre || '',
      contacto_email: datos.contacto_email || '',
      estado: 'Activo',
      created_at: _nowISO()
    };
    db.clientes.unshift(nuevo);
    _saveDB();
    return { success: true, data: { id: nuevo.id } };
  },

  actualizarCliente: function(token, id, datos) {
    var c = _find('clientes', id);
    if (!c) return { success: false, error: 'Cliente no encontrado' };
    Object.keys(datos || {}).forEach(function(k) { c[k] = datos[k]; });
    _saveDB();
    return { success: true };
  },

  desactivarCliente: function(token, id) {
    var c = _find('clientes', id);
    if (!c) return { success: false, error: 'Cliente no encontrado' };
    c.estado = c.estado === 'Activo' ? 'Inactivo' : 'Activo';
    _saveDB();
    return { success: true };
  },

  eliminarCliente: function(token, id) {
    var db = _loadDB();
    db.clientes = db.clientes.filter(function(c) { return c.id !== id; });
    _saveDB();
    return { success: true };
  },

  // ============================================
  // PROGRAMAS
  // ============================================
  listarProgramas: function() {
    var db = _loadDB();
    var data = db.programas.map(function(p) {
      var o = Object.assign({}, p);
      o.cliente_nombre = _clienteNombre(p.cliente_id);
      return o;
    });
    return { success: true, data: data };
  },

  listarProgramasDashboard: function(token, userId) {
    var db = _loadDB();
    if (!userId) return backendFunctions.listarProgramas();
    // El administrador ve todos los programas, no solo aquellos en los que participa
    var u = _find('usuarios', userId);
    if (u && u.rol === 'admin') return backendFunctions.listarProgramas();
    var progIds = db.participantes_programa
      .filter(function(pp) { return pp.usuario_id === userId; })
      .map(function(pp) { return pp.programa_id; });
    var data = db.programas.filter(function(p) { return progIds.indexOf(p.id) !== -1; })
      .map(function(p) {
        var o = Object.assign({}, p);
        o.cliente_nombre = _clienteNombre(p.cliente_id);
        return o;
      });
    return { success: true, data: data };
  },

  crearPrograma: function(token, datos) {
    var db = _loadDB();
    var nuevo = {
      id: _uid('prog'),
      nombre: datos.nombre || 'Nuevo Programa',
      cliente_id: datos.cliente_id || null,
      tipo: datos.tipo || 'piloto',
      estado: datos.estado || 'diseno',
      objetivo: datos.objetivo || '',
      fecha_inicio: datos.fecha_inicio || null,
      fecha_termino: datos.fecha_termino || null,
      fecha_medicion_pre: datos.fecha_medicion_pre || null,
      fecha_medicion_post: datos.fecha_medicion_post || null,
      created_at: _nowISO()
    };
    db.programas.unshift(nuevo);
    _saveDB();
    return { success: true, data: { id: nuevo.id, programaId: nuevo.id } };
  },

  actualizarPrograma: function(token, id, datos) {
    var p = _find('programas', id);
    if (!p) return { success: false, error: 'Programa no encontrado' };
    Object.keys(datos || {}).forEach(function(k) { p[k] = datos[k]; });
    _saveDB();
    return { success: true };
  },

  activarPrograma: function(token, id) {
    var p = _find('programas', id);
    if (p) { p.estado = 'activo'; _saveDB(); }
    return { success: true };
  },

  desactivarPrograma: function(token, id) {
    var p = _find('programas', id);
    if (p) { p.estado = 'inactivo'; _saveDB(); }
    return { success: true };
  },

  eliminarPrograma: function(token, id) {
    var db = _loadDB();
    db.programas = db.programas.filter(function(p) { return p.id !== id; });
    _saveDB();
    return { success: true };
  },

  obtenerPrograma: function(token, id) {
    var p = _find('programas', id);
    if (!p) return { success: false, error: 'Programa no encontrado' };
    var o = Object.assign({}, p);
    o.cliente_nombre = _clienteNombre(p.cliente_id);
    o.clientes = { nombre: o.cliente_nombre };
    return { success: true, data: o };
  },

  // ============================================
  // USUARIOS
  // ============================================
  listarUsuarios: function() {
    var db = _loadDB();
    var data = db.usuarios.map(function(u) {
      var o = Object.assign({}, u);
      o.cliente_nombre = u.cliente_id ? _clienteNombre(u.cliente_id) : '';
      return o;
    });
    return { success: true, data: data };
  },

  crearUsuario: function(token, datos) {
    return backendFunctions.registrarUsuario(datos);
  },

  actualizarUsuario: function(token, id, datos) {
    var u = _find('usuarios', id);
    if (!u) return { success: false, error: 'Usuario no encontrado' };
    Object.keys(datos || {}).forEach(function(k) { u[k] = datos[k]; });
    _saveDB();
    return { success: true };
  },

  cambiarEstadoUsuario: function(token, id) {
    var u = _find('usuarios', id);
    if (!u) return { success: false, error: 'Usuario no encontrado' };
    u.estado = u.estado === 'Activo' ? 'Inactivo' : 'Activo';
    _saveDB();
    return { success: true };
  },

  resetearPassword: function() { return { success: true }; },

  // ============================================
  // PANEL DE PROGRAMA
  // ============================================
  obtenerPanelPrograma: function(token, progId) {
    var db = _loadDB();
    var p = _find('programas', progId);
    if (!p) return { success: false, error: 'Programa no encontrado' };

    var prog = Object.assign({}, p);
    prog.cliente_nombre = _clienteNombre(p.cliente_id);
    prog.clientes = { nombre: prog.cliente_nombre };

    var participantes = backendFunctions.listarParticipantesPrograma(token, progId).data || [];
    // enriquecer con datos del lider
    participantes = participantes.map(function(x) {
      var lider = x.lider_id ? _find('usuarios', x.lider_id) : null;
      return {
        usuario_id: x.usuario_id,
        nombre: x.nombre,
        nombre_lider: lider ? lider.nombre : '',
        email: x.email,
        email_lider: lider ? lider.email : '',
        cargo: x.cargo,
        password_visible: x.password_visible,
        rol_programa: x.rol_programa,
        lider_id: x.lider_id,
        lider_nombre: lider ? lider.nombre : '',
        estado: 'Activo'
      };
    });

    var competencias = db.competencias
      .filter(function(c) { return c.programa_id === progId && c.estado !== 'inactiva'; })
      .map(function(c) {
        return {
          id: c.id, nombre: c.nombre, descripcion: c.descripcion, foco_desarrollo: c.foco_desarrollo,
          nivel_1_texto: c.nivel_1_texto || 'Conoce el concepto',
          nivel_2_texto: c.nivel_2_texto || 'Aplica con guia',
          nivel_3_texto: c.nivel_3_texto || 'Aplica consistentemente',
          nivel_4_texto: c.nivel_4_texto || 'Es referente',
          interpretacion_nivel_1: c.interpretacion_nivel_1 || '',
          interpretacion_nivel_2: c.interpretacion_nivel_2 || '',
          interpretacion_nivel_3: c.interpretacion_nivel_3 || '',
          interpretacion_nivel_4: c.interpretacion_nivel_4 || '',
          prioridad: c.prioridad, orden: c.orden
        };
      });

    var encuestas = db.encuestas.filter(function(e) { return e.programa_id === progId; });

    return {
      success: true,
      data: {
        programa: prog,
        participantes: participantes,
        competencias: competencias,
        encuestas: encuestas,
        stats: {
          total_lideres: participantes.filter(function(x) { return x.rol_programa === 'lider'; }).length,
          total_colaboradores: participantes.filter(function(x) { return x.rol_programa === 'colaborador'; }).length,
          total_competencias: competencias.length,
          total_encuestas: encuestas.length
        }
      }
    };
  },

  listarParticipantesPrograma: function(token, progId) {
    var db = _loadDB();
    var data = db.participantes_programa
      .filter(function(pp) { return pp.programa_id === progId; })
      .map(function(pp) {
        var u = _find('usuarios', pp.usuario_id);
        if (!u) return null;
        return {
          id: u.id, usuario_id: u.id, nombre: u.nombre, email: u.email,
          cargo: u.cargo, password_visible: u.password_visible,
          rol_programa: pp.rol_programa, lider_id: pp.lider_id
        };
      })
      .filter(Boolean);
    return { success: true, data: data };
  },

  obtenerUsuariosDisponibles: function(token, progId) {
    var db = _loadDB();
    var yaAsociados = db.participantes_programa
      .filter(function(pp) { return pp.programa_id === progId; })
      .map(function(pp) { return pp.usuario_id; });
    var data = db.usuarios.filter(function(u) {
      return u.rol !== 'admin' && yaAsociados.indexOf(u.id) === -1 && u.estado === 'Activo';
    });
    return { success: true, data: data };
  },

  asociarParticipantes: function(token, progId, datos) {
    var db = _loadDB();
    var lista = (datos && datos.participantes) || datos || [];
    if (!Array.isArray(lista)) lista = [lista];
    lista.forEach(function(item) {
      var uid = item.usuario_id || item.id || item;
      if (!uid) return;
      var yaEsta = db.participantes_programa.some(function(pp) {
        return pp.programa_id === progId && pp.usuario_id === uid;
      });
      if (yaEsta) return;
      db.participantes_programa.push({
        id: _uid('pp'), programa_id: progId, usuario_id: uid,
        rol_programa: item.rol_programa || 'colaborador',
        lider_id: item.lider_id || null
      });
    });
    _saveDB();
    return { success: true };
  },

  desasociarParticipante: function(token, progId, userId) {
    var db = _loadDB();
    db.participantes_programa = db.participantes_programa.filter(function(pp) {
      return !(pp.programa_id === progId && pp.usuario_id === userId);
    });
    _saveDB();
    return { success: true };
  },

  eliminarTodosParticipantes: function(token, progId) {
    var db = _loadDB();
    db.participantes_programa = db.participantes_programa.filter(function(pp) {
      return pp.programa_id !== progId;
    });
    _saveDB();
    return { success: true };
  },

  // ============================================
  // COMPETENCIAS / CONDUCTAS
  // ============================================
  listarCompetencias: function(token, progId) {
    var db = _loadDB();
    var data = db.competencias.filter(function(c) {
      return (!progId || c.programa_id === progId) && c.estado !== 'inactiva';
    });
    return { success: true, data: data };
  },

  crearCompetencia: function(token, datos) {
    var db = _loadDB();
    var nueva = {
      id: _uid('comp'),
      programa_id: datos.programa_id || null,
      nombre: datos.nombre || '',
      descripcion: datos.descripcion || '',
      foco_desarrollo: datos.foco_desarrollo || '',
      nivel_1_texto: datos.nivel_1_texto || 'Conoce el concepto',
      nivel_2_texto: datos.nivel_2_texto || 'Aplica con guia',
      nivel_3_texto: datos.nivel_3_texto || 'Aplica consistentemente',
      nivel_4_texto: datos.nivel_4_texto || 'Es referente',
      interpretacion_nivel_1: datos.interpretacion_nivel_1 || '',
      interpretacion_nivel_2: datos.interpretacion_nivel_2 || '',
      interpretacion_nivel_3: datos.interpretacion_nivel_3 || '',
      interpretacion_nivel_4: datos.interpretacion_nivel_4 || '',
      prioridad: datos.prioridad || (db.competencias.length + 1),
      orden: datos.orden || (db.competencias.length + 1),
      estado: 'activa'
    };
    db.competencias.push(nueva);
    _saveDB();
    return { success: true, data: { id: nueva.id } };
  },

  actualizarCompetencia: function(token, id, datos) {
    var c = _find('competencias', id);
    if (!c) return { success: false, error: 'Competencia no encontrada' };
    Object.keys(datos || {}).forEach(function(k) { c[k] = datos[k]; });
    _saveDB();
    return { success: true };
  },

  desactivarCompetencia: function(token, id) {
    var c = _find('competencias', id);
    if (c) { c.estado = 'inactiva'; _saveDB(); }
    return { success: true };
  },

  desactivarConducta: function(token, id) {
    return backendFunctions.desactivarCompetencia(token, id);
  },

  importarCompetenciasExcel: function(token, progId, competencias) {
    var lista = competencias || [];
    var n = 0;
    lista.forEach(function(c) {
      c.programa_id = progId;
      backendFunctions.crearCompetencia(token, c);
      n++;
    });
    return { success: true, data: { importadas: n } };
  },

  listarConductas: function(token, progId) { return backendFunctions.listarCompetencias(token, progId); },
  crearConducta: function(token, datos) { return backendFunctions.crearCompetencia(token, datos); },
  actualizarConducta: function(token, id, datos) { return backendFunctions.actualizarCompetencia(token, id, datos); },

  // ============================================
  // ENCUESTAS
  // ============================================
  listarEncuestas: function(token, progId) {
    var db = _loadDB();
    var encs = db.encuestas.filter(function(e) { return !progId || e.programa_id === progId; });
    var data = encs.map(function(e) {
      var o = Object.assign({}, e);
      var preguntas = db.preguntas.filter(function(p) { return p.encuesta_id === e.id; });
      o.num_preguntas = preguntas.length;
      // evaluadores distintos que respondieron
      var evaluadores = {};
      db.respuestas.forEach(function(r) {
        if (r.encuesta_id === e.id) evaluadores[r.evaluador_id] = true;
      });
      o.total_respuestas = Object.keys(evaluadores).length;
      // esperadas: segun tipo_cuestionario
      var rol = (e.tipo_cuestionario || 'autoevaluacion') === 'autoevaluacion' ? 'lider' : 'colaborador';
      o.total_esperadas = db.participantes_programa.filter(function(pp) {
        return pp.programa_id === e.programa_id && pp.rol_programa === rol;
      }).length;
      return o;
    });
    return { success: true, data: data };
  },

  crearEncuesta: function(token, datos) {
    var db = _loadDB();
    var nueva = {
      id: _uid('enc'),
      programa_id: datos.programa_id || null,
      nombre: datos.nombre || 'Nueva encuesta',
      tipo: datos.tipo || 'pre',
      tipo_cuestionario: datos.tipo_cuestionario || 'autoevaluacion',
      estado: 'borrador',
      instrucciones: datos.instrucciones || '',
      fecha_cierre: datos.fecha_cierre || '',
      created_at: _nowISO()
    };
    db.encuestas.push(nueva);
    _saveDB();
    return { success: true, data: { id: nueva.id } };
  },

  actualizarEncuesta: function(token, id, datos) {
    var e = _find('encuestas', id);
    if (!e) return { success: false, error: 'Encuesta no encontrada' };
    Object.keys(datos || {}).forEach(function(k) { e[k] = datos[k]; });
    _saveDB();
    return { success: true };
  },

  activarEncuesta: function(token, id) {
    var e = _find('encuestas', id);
    if (e) { e.estado = 'activa'; _saveDB(); }
    return { success: true };
  },

  cerrarEncuesta: function(token, id) {
    var e = _find('encuestas', id);
    if (e) { e.estado = 'cerrada'; _saveDB(); }
    return { success: true };
  },

  eliminarEncuesta: function(token, id) {
    var db = _loadDB();
    db.encuestas = db.encuestas.filter(function(e) { return e.id !== id; });
    db.preguntas = db.preguntas.filter(function(p) { return p.encuesta_id !== id; });
    db.respuestas = db.respuestas.filter(function(r) { return r.encuesta_id !== id; });
    _saveDB();
    return { success: true };
  },

  obtenerEncuestaCompleta: function(token, id) {
    var db = _loadDB();
    var e = _find('encuestas', id);
    if (!e) return { success: false, error: 'Encuesta no encontrada' };
    var preguntas = db.preguntas
      .filter(function(p) { return p.encuesta_id === id; })
      .sort(function(a, b) { return (a.orden || 0) - (b.orden || 0); });
    return {
      success: true,
      data: {
        id: e.id, nombre: e.nombre, instrucciones: e.instrucciones,
        tipo: e.tipo, tipo_cuestionario: e.tipo_cuestionario, estado: e.estado,
        preguntas: preguntas
      }
    };
  },

  // Devuelve los evaluador_id distintos que respondieron la encuesta (array de ids)
  listarRespuestasEncuesta: function(token, encuestaId) {
    if (!encuestaId) return { success: true, data: [] };
    var db = _loadDB();
    var set = {};
    db.respuestas.forEach(function(r) {
      if (r.encuesta_id === encuestaId) set[r.evaluador_id] = true;
    });
    return { success: true, data: Object.keys(set) };
  },

  obtenerEncuestaPendiente: function(token) {
    var u = _usuarioActual();
    if (!u) return { success: true, data: [] };
    var db = _loadDB();

    var rolPorPrograma = {};
    db.participantes_programa.forEach(function(pp) {
      if (pp.usuario_id === u.id) rolPorPrograma[pp.programa_id] = pp.rol_programa;
    });
    var progIds = Object.keys(rolPorPrograma);
    if (!progIds.length) return { success: true, data: [] };

    var candidates = db.encuestas.filter(function(e) {
      if (progIds.indexOf(e.programa_id) === -1) return false;
      if (e.estado !== 'activa') return false;
      var rol = rolPorPrograma[e.programa_id];
      var tc = e.tipo_cuestionario || 'autoevaluacion';
      if (rol === 'lider') return tc === 'autoevaluacion';
      if (rol === 'colaborador') return tc === 'coevaluacion';
      return false;
    });

    var ultima = {};
    db.respuestas.forEach(function(r) {
      if (r.evaluador_id !== u.id) return;
      var prev = ultima[r.encuesta_id];
      if (!prev || (r.created_at && r.created_at > prev)) ultima[r.encuesta_id] = r.created_at;
    });

    var data = candidates.map(function(e) {
      var f = ultima[e.id] || null;
      var prog = _find('programas', e.programa_id);
      return {
        id: e.id, nombre: e.nombre,
        programa_nombre: prog ? prog.nombre : '',
        tipo: e.tipo, tipo_cuestionario: e.tipo_cuestionario,
        estado: f ? 'completada' : 'pendiente',
        fecha_completada: f, fecha_cierre: e.fecha_cierre || ''
      };
    });
    return { success: true, data: data };
  },

  listarEncuestasParticipante: function() { return backendFunctions.obtenerEncuestaPendiente(); },

  // ============================================
  // PREGUNTAS
  // ============================================
  agregarPregunta: function(token, datos) {
    var db = _loadDB();
    var hermanas = db.preguntas.filter(function(p) { return p.encuesta_id === datos.encuesta_id; });
    var comp = datos.competencia_id ? _find('competencias', datos.competencia_id) : null;
    var nueva = {
      id: _uid('preg'),
      encuesta_id: datos.encuesta_id,
      texto_pregunta: datos.texto_pregunta || '',
      tipo_respuesta: datos.tipo_respuesta || 'niveles_competencia',
      competencia_id: datos.competencia_id || null,
      foco_desarrollo: datos.foco_desarrollo || (comp ? comp.foco_desarrollo : ''),
      opcion_nivel_1: datos.opcion_nivel_1 || (comp ? comp.nivel_1_texto : ''),
      opcion_nivel_2: datos.opcion_nivel_2 || (comp ? comp.nivel_2_texto : ''),
      opcion_nivel_3: datos.opcion_nivel_3 || (comp ? comp.nivel_3_texto : ''),
      opcion_nivel_4: datos.opcion_nivel_4 || (comp ? comp.nivel_4_texto : ''),
      obligatoria: datos.obligatoria !== false,
      orden: hermanas.length + 1
    };
    db.preguntas.push(nueva);
    _saveDB();
    return { success: true, data: { id: nueva.id } };
  },

  actualizarPregunta: function(token, id, datos) {
    var p = _find('preguntas', id);
    if (!p) return { success: false, error: 'Pregunta no encontrada' };
    Object.keys(datos || {}).forEach(function(k) { p[k] = datos[k]; });
    _saveDB();
    return { success: true };
  },

  eliminarPregunta: function(token, id) {
    var db = _loadDB();
    db.preguntas = db.preguntas.filter(function(p) { return p.id !== id; });
    db.respuestas = db.respuestas.filter(function(r) { return r.pregunta_id !== id; });
    _saveDB();
    return { success: true };
  },

  // ============================================
  // RESPUESTAS
  // ============================================
  enviarRespuestas: function(token, encuestaId, respuestas) {
    var u = _usuarioActual();
    if (!u) return { success: false, error: 'Usuario no identificado' };

    if (typeof encuestaId === 'object' && encuestaId !== null) {
      respuestas = encuestaId.respuestas;
      encuestaId = encuestaId.encuestaId || encuestaId.encuesta_id;
    }
    if (!encuestaId || !respuestas || !respuestas.length) {
      return { success: false, error: 'Faltan datos de la encuesta' };
    }

    var db = _loadDB();
    var enc = _find('encuestas', encuestaId);
    if (!enc) return { success: false, error: 'Encuesta no encontrada' };
    var tc = enc.tipo_cuestionario || 'autoevaluacion';

    var evaluadoId = u.id;
    if (tc === 'coevaluacion') {
      var pp = db.participantes_programa.find(function(x) {
        return x.usuario_id === u.id && x.programa_id === enc.programa_id;
      });
      if (pp && pp.lider_id) evaluadoId = pp.lider_id;
      else return { success: false, error: 'No tienes un lider asignado para esta coevaluacion' };
    }

    respuestas.forEach(function(r) {
      var pid = r.preguntaId || r.pregunta_id;
      var existente = db.respuestas.find(function(x) {
        return x.encuesta_id === encuestaId && x.pregunta_id === pid &&
               x.evaluador_id === u.id && x.evaluado_id === evaluadoId;
      });
      var valor = String(r.valor != null ? r.valor : '');
      if (existente) {
        existente.valor = valor;
        existente.created_at = _nowISO();
      } else {
        db.respuestas.push({
          id: _uid('resp'), encuesta_id: encuestaId, pregunta_id: pid,
          evaluador_id: u.id, evaluado_id: evaluadoId,
          valor: valor, created_at: _nowISO()
        });
      }
    });
    _saveDB();
    return { success: true, data: { message: 'Respuestas registradas.' } };
  },

  enviarRespuestaEncuesta: function() { return { success: true }; },

  rehacerEncuesta: function(token, encuestaId) {
    var u = _usuarioActual();
    if (!u) return { success: false, error: 'Usuario no identificado' };
    var db = _loadDB();
    db.respuestas = db.respuestas.filter(function(r) {
      return !(r.encuesta_id === encuestaId && r.evaluador_id === u.id);
    });
    _saveDB();
    return { success: true };
  },

  obtenerResultadosEncuesta: function(token, encuestaId) {
    var db = _loadDB();
    var enc = _find('encuestas', encuestaId);
    if (!enc) return { success: false, error: 'Encuesta no encontrada' };
    var preguntas = db.preguntas.filter(function(p) { return p.encuesta_id === encuestaId; })
      .sort(function(a, b) { return (a.orden || 0) - (b.orden || 0); });

    var data = preguntas.map(function(p) {
      var rs = db.respuestas.filter(function(r) { return r.pregunta_id === p.id; });
      if (p.tipo_respuesta === 'niveles_competencia') {
        var vals = rs.map(function(r) { return parseInt(r.valor, 10); }).filter(function(v) { return !isNaN(v); });
        var dist = { 1: 0, 2: 0, 3: 0, 4: 0 };
        vals.forEach(function(v) { if (dist[v] != null) dist[v]++; });
        return {
          pregunta_id: p.id, texto_pregunta: p.texto_pregunta, tipo_respuesta: p.tipo_respuesta,
          total_respuestas: vals.length,
          promedio: vals.length ? _round(_promedio(vals), 2) : null,
          distribucion: dist
        };
      }
      return {
        pregunta_id: p.id, texto_pregunta: p.texto_pregunta, tipo_respuesta: p.tipo_respuesta,
        total_respuestas: rs.length,
        respuestas: rs.map(function(r) { return r.valor; }).filter(function(v) { return v; })
      };
    });
    return { success: true, data: { encuesta: enc, preguntas: data } };
  },

  listarPreguntasAbiertas: function(token, encuestaId) {
    var db = _loadDB();
    var data = db.preguntas.filter(function(p) {
      return p.encuesta_id === encuestaId &&
             (p.tipo_respuesta === 'texto_breve' || p.tipo_respuesta === 'parrafo');
    });
    return { success: true, data: data };
  },

  obtenerRespuestasCualitativas: function(token, encuestaId, preguntaId) {
    var db = _loadDB();
    var data = db.respuestas
      .filter(function(r) {
        return r.encuesta_id === encuestaId && (!preguntaId || r.pregunta_id === preguntaId);
      })
      .map(function(r) { return r.valor; })
      .filter(function(v) { return v && isNaN(parseInt(v, 10)); });
    return { success: true, data: data };
  },

  analizarRespuestasAbiertas: function(token, encuestaId, preguntaId, opts) {
    var res = backendFunctions.obtenerRespuestasCualitativas(token, encuestaId, preguntaId);
    var textos = res.data || [];
    if (!textos.length) {
      return { success: false, error: 'No hay respuestas abiertas para analizar en esta pregunta.' };
    }
    var analisis =
      'Sintesis de ' + textos.length + ' respuestas abiertas:\n\n' +
      '**Temas recurrentes**\n' +
      '- Delegacion: se menciona de forma transversal la dificultad para soltar tareas operativas que la jefatura domina.\n' +
      '- Retroalimentacion: se valora la claridad en las prioridades, y se pide feedback mas frecuente y en el momento.\n' +
      '- Visibilidad: los equipos piden que su trabajo sea mas visible hacia otras areas y la gerencia.\n\n' +
      '**Fortalezas destacadas**\n' +
      '- Disponibilidad ante problemas y respaldo frente a otras areas.\n' +
      '- Conocimiento tecnico y del negocio reconocido por el equipo.\n\n' +
      '**Oportunidades de desarrollo**\n' +
      '- Transferir decisiones operativas al equipo con acompanamiento.\n' +
      '- Abrir espacios regulares de conversacion de desarrollo, no solo correctivos.\n\n' +
      '_Analisis generado en modo demostracion sobre datos de ejemplo._';
    return { success: true, data: { analisis: analisis, total_respuestas: textos.length } };
  },

  // ============================================
  // ARCHIVOS
  // ============================================
  listarArchivosPrograma: function(token, progId) {
    var db = _loadDB();
    var data = db.archivos.filter(function(a) { return !progId || a.programa_id === progId; });
    return { success: true, data: data };
  },

  subirArchivoPrograma: function(token, progId, datos) {
    var db = _loadDB();
    var nuevo = {
      id: _uid('arch'), programa_id: progId,
      nombre: (datos && datos.nombre) || 'Archivo.pdf',
      tipo: (datos && datos.tipo) || 'application/pdf',
      tamano: (datos && datos.tamano) || 100000,
      url: '#', visible: true, created_at: _nowISO()
    };
    db.archivos.push(nuevo);
    _saveDB();
    return { success: true, data: { id: nuevo.id } };
  },

  eliminarArchivoPrograma: function(token, id) {
    var db = _loadDB();
    db.archivos = db.archivos.filter(function(a) { return a.id !== id; });
    _saveDB();
    return { success: true };
  },

  actualizarVisibilidadArchivo: function(token, id, visible) {
    var a = _find('archivos', id);
    if (a) { a.visible = !!visible; _saveDB(); }
    return { success: true };
  },

  // ============================================
  // NOTIFICACIONES
  // ============================================
  contarNotificacionesPendientes: function() {
    var db = _loadDB();
    var count = db.notificaciones.filter(function(n) { return !n.leida; }).length;
    return { success: true, data: { count: count } };
  },

  listarNotificaciones: function() {
    var db = _loadDB();
    return { success: true, data: db.notificaciones.slice() };
  },

  obtenerNotificaciones: function() { return backendFunctions.listarNotificaciones(); },

  marcarNotificacionLeida: function(token, id) {
    var n = _find('notificaciones', id);
    if (n) { n.leida = true; _saveDB(); }
    return { success: true };
  },

  marcarComoLeida: function(token, id) { return backendFunctions.marcarNotificacionLeida(token, id); },

  // ============================================
  // KPIs Y GRAFICOS
  // ============================================
  obtenerKPIsPrograma: function(token, progId) {
    var vacio = { totalParticipantes: 0, observacionesRealizadas: 0, tasaRespuestaPre: 0, tasaRespuestaPost: 0, nivelAplicacion: 0 };
    if (!progId) return { success: true, data: vacio };
    var db = _loadDB();

    var pps = db.participantes_programa.filter(function(pp) { return pp.programa_id === progId; });
    var totalParticipantes = pps.length;

    function tasa(tipo) {
      var encs = _encuestasDe(progId, tipo, null);
      if (!encs.length) return 0;
      var encIds = _idsDe(encs);
      var esperados = 0, respondieron = 0;
      encs.forEach(function(e) {
        var rol = (e.tipo_cuestionario || 'autoevaluacion') === 'autoevaluacion' ? 'lider' : 'colaborador';
        var universo = pps.filter(function(pp) { return pp.rol_programa === rol; });
        esperados += universo.length;
        universo.forEach(function(pp) {
          var respondio = db.respuestas.some(function(r) {
            return r.encuesta_id === e.id && r.evaluador_id === pp.usuario_id;
          });
          if (respondio) respondieron++;
        });
      });
      return esperados ? Math.round((respondieron / esperados) * 100) : 0;
    }

    var postIds = _idsDe(_encuestasDe(progId, 'post', null));
    var valsPost = _respuestasNumericas(function(r) { return postIds.indexOf(r.encuesta_id) !== -1; })
      .map(function(x) { return x.valor; });
    var avgPost = _promedio(valsPost);

    return {
      success: true,
      data: {
        totalParticipantes: totalParticipantes,
        observacionesRealizadas: 0,
        tasaRespuestaPre: tasa('pre'),
        tasaRespuestaPost: tasa('post'),
        nivelAplicacion: avgPost != null ? _aPorcentaje(avgPost) : 0
      }
    };
  },

  obtenerComparacionPrePost: function(token, progId) {
    if (!progId) return { success: true, data: [] };
    var db = _loadDB();
    var preIds = _idsDe(_encuestasDe(progId, 'pre', null));
    var postIds = _idsDe(_encuestasDe(progId, 'post', null));
    var comps = db.competencias.filter(function(c) { return c.programa_id === progId && c.estado !== 'inactiva'; });

    var data = comps.map(function(c) {
      function avgDe(encIds) {
        var vals = _respuestasNumericas(function(r, p) {
          return encIds.indexOf(r.encuesta_id) !== -1 && p.competencia_id === c.id;
        }).map(function(x) { return x.valor; });
        return _promedio(vals);
      }
      var pre = avgDe(preIds);
      var post = avgDe(postIds);
      var pre1 = pre != null ? _round(pre, 1) : 0;
      var post1 = post != null ? _round(post, 1) : 0;
      var variacion = pre1 > 0 ? Math.round(((post1 - pre1) / pre1) * 100) : 0;
      return { conducta_nombre: c.nombre, promedioPre: pre1, promedioPost: post1, variacion: variacion };
    });
    return { success: true, data: data };
  },

  obtenerMapaCalor: function(token, progId) {
    if (!progId) return { success: true, data: [] };
    var db = _loadDB();
    var postIds = _idsDe(_encuestasDe(progId, 'post', null));
    var comps = db.competencias.filter(function(c) { return c.programa_id === progId && c.estado !== 'inactiva'; });

    var data = comps.map(function(c) {
      var vals = _respuestasNumericas(function(r, p) {
        return postIds.indexOf(r.encuesta_id) !== -1 && p.competencia_id === c.id;
      }).map(function(x) { return x.valor; });
      var avg = _promedio(vals);
      var nivel = avg != null ? _aPorcentaje(avg) : 0;
      var color = nivel >= 70 ? 'alto' : (nivel >= 40 ? 'medio' : 'bajo');
      return { conducta_nombre: c.nombre, nivel: nivel, color: color };
    });
    return { success: true, data: data };
  },

  obtenerResumenPorEquipo: function(token, progId) {
    if (!progId) return { success: true, data: [] };
    var db = _loadDB();
    var pps = db.participantes_programa.filter(function(pp) { return pp.programa_id === progId; });
    var postIds = _idsDe(_encuestasDe(progId, 'post', null));

    var grupos = {};
    pps.forEach(function(pp) {
      var u = _find('usuarios', pp.usuario_id);
      var key = (u && u.cargo) || 'Sin asignar';
      if (!grupos[key]) grupos[key] = [];
      grupos[key].push(pp.usuario_id);
    });

    var data = Object.keys(grupos).map(function(equipo) {
      var ids = grupos[equipo];
      var vals = _respuestasNumericas(function(r) {
        return postIds.indexOf(r.encuesta_id) !== -1 && ids.indexOf(r.evaluado_id) !== -1;
      }).map(function(x) { return x.valor; });
      var avg = _promedio(vals);
      return {
        equipo: equipo, area: '-', numParticipantes: ids.length,
        nivelAplicacion: avg != null ? _aPorcentaje(avg) : 0,
        estado: vals.length ? 'Activo' : 'Pendiente'
      };
    });
    return { success: true, data: data };
  },

  obtenerMiProgreso: function(token) {
    var u = _usuarioActual();
    if (!u) return { success: false, error: 'Usuario no identificado' };
    var db = _loadDB();
    var prog = _programaDeUsuario(u.id);
    if (!prog) return { success: true, data: { comparacion: [], feedback: [] } };

    var preIds = _idsDe(_encuestasDe(prog.id, 'pre', null));
    var postIds = _idsDe(_encuestasDe(prog.id, 'post', null));
    var comps = db.competencias.filter(function(c) { return c.programa_id === prog.id && c.estado !== 'inactiva'; });

    var comparacion = comps.map(function(c) {
      function avgDe(encIds) {
        var vals = _respuestasNumericas(function(r, p) {
          return encIds.indexOf(r.encuesta_id) !== -1 && p.competencia_id === c.id && r.evaluado_id === u.id;
        }).map(function(x) { return x.valor; });
        return _promedio(vals);
      }
      var pre = avgDe(preIds);
      var post = avgDe(postIds);
      return {
        conducta_nombre: c.nombre,
        promedioPre: pre != null ? _round(pre, 1) : null,
        promedioPost: post != null ? _round(post, 1) : null
      };
    }).filter(function(x) { return x.promedioPre != null || x.promedioPost != null; });

    return { success: true, data: { comparacion: comparacion, feedback: [] } };
  },

  obtenerResumenPrograma: function(token, progId) {
    var db = _loadDB();
    var vacio = {
      totalLideres: 0, totalColaboradores: 0, autoevaluacionesCompletadas: 0,
      coevaluacionesCompletadas: 0, observacionesRealizadas: 0, evaluaciones: []
    };
    if (!progId) return vacio;

    var pps = db.participantes_programa.filter(function(pp) { return pp.programa_id === progId; });
    var lideres = pps.filter(function(pp) { return pp.rol_programa === 'lider'; });
    var colabs = pps.filter(function(pp) { return pp.rol_programa === 'colaborador'; });

    function encId(tipo, tc) {
      var e = _encuestasDe(progId, tipo, tc)[0];
      return e ? e.id : null;
    }
    var ePreAuto = encId('pre', 'autoevaluacion'), ePostAuto = encId('post', 'autoevaluacion');
    var ePreCo = encId('pre', 'coevaluacion'), ePostCo = encId('post', 'coevaluacion');

    function respondio(encuestaId, evaluadorId) {
      if (!encuestaId) return false;
      return db.respuestas.some(function(r) {
        return r.encuesta_id === encuestaId && r.evaluador_id === evaluadorId;
      });
    }

    var evaluaciones = [];
    lideres.forEach(function(pp) {
      var lider = _find('usuarios', pp.usuario_id);
      if (!lider) return;
      evaluaciones.push({
        lider: lider.nombre, colaborador: null,
        autoPre: respondio(ePreAuto, lider.id), coPre: false,
        autoPost: respondio(ePostAuto, lider.id), coPost: false
      });
      colabs.filter(function(c) { return c.lider_id === lider.id; }).forEach(function(c) {
        var colab = _find('usuarios', c.usuario_id);
        if (!colab) return;
        evaluaciones.push({
          lider: lider.nombre, colaborador: colab.nombre,
          autoPre: false, coPre: respondio(ePreCo, colab.id),
          autoPost: false, coPost: respondio(ePostCo, colab.id)
        });
      });
    });

    var autoComp = lideres.filter(function(pp) {
      return respondio(ePreAuto, pp.usuario_id) || respondio(ePostAuto, pp.usuario_id);
    }).length;
    var coComp = colabs.filter(function(pp) {
      return respondio(ePreCo, pp.usuario_id) || respondio(ePostCo, pp.usuario_id);
    }).length;

    return {
      totalLideres: lideres.length,
      totalColaboradores: colabs.length,
      autoevaluacionesCompletadas: autoComp,
      coevaluacionesCompletadas: coComp,
      observacionesRealizadas: 0,
      evaluaciones: evaluaciones
    };
  },

  obtenerHomeLider: function(token, userId) {
    var u = userId ? _find('usuarios', userId) : _usuarioActual();
    if (!u) return { success: false, error: 'Usuario no identificado' };
    var db = _loadDB();

    var pp = db.participantes_programa.find(function(x) { return x.usuario_id === u.id; });
    if (!pp) return { success: true, data: { programa: null, pendientes: [], colaboradores: [] } };

    var prog = _find('programas', pp.programa_id);
    if (!prog) return { success: true, data: { programa: null, pendientes: [], colaboradores: [] } };

    var colaboradores = db.participantes_programa
      .filter(function(x) { return x.programa_id === prog.id && x.lider_id === u.id; })
      .map(function(x) {
        var c = _find('usuarios', x.usuario_id);
        return c ? { id: c.id, nombre: c.nombre, cargo: c.cargo, email: c.email } : null;
      })
      .filter(Boolean);

    var pendientes = [];
    var encsCo = db.encuestas.filter(function(e) {
      return e.programa_id === prog.id && e.estado === 'activa' &&
             (e.tipo_cuestionario || '') === 'coevaluacion';
    });
    encsCo.forEach(function(enc) {
      colaboradores.forEach(function(c) {
        var yaRespondio = db.respuestas.some(function(r) {
          return r.encuesta_id === enc.id && r.evaluador_id === c.id;
        });
        if (!yaRespondio) {
          pendientes.push({
            tipo: 'coevaluacion',
            titulo: 'Coevaluacion de ' + c.nombre,
            descripcion: enc.nombre,
            participante: c,
            encuesta_id: enc.id,
            estado: 'pendiente'
          });
        }
      });
    });

    var encAuto = db.encuestas.find(function(e) {
      return e.programa_id === prog.id && e.estado === 'activa' &&
             (e.tipo_cuestionario || 'autoevaluacion') === 'autoevaluacion' && e.tipo === 'post';
    });
    var hizoAuto = encAuto && db.respuestas.some(function(r) {
      return r.encuesta_id === encAuto.id && r.evaluador_id === u.id;
    });

    return {
      success: true,
      data: {
        programa: { id: prog.id, nombre: prog.nombre, cliente_nombre: _clienteNombre(prog.cliente_id), estado: prog.estado },
        pendientes: pendientes,
        colaboradores: colaboradores,
        stepper: {
          autoevaluacion: hizoAuto ? 'completado' : 'pendiente',
          coevaluacion: pendientes.length ? 'en-progreso' : 'completado',
          informe_individual: 'pendiente',
          informe_ejecutivo: 'pendiente'
        }
      }
    };
  },

  // ============================================
  // INFORMES
  // ============================================
  obtenerDatosInformeConsolidado: function(token, progId, momento) {
    momento = momento || 'post';
    if (!progId) return { success: false, error: 'Programa no identificado' };
    var db = _loadDB();
    var prog = _find('programas', progId);
    if (!prog) return { success: false, error: 'Programa no encontrado' };

    var pps = db.participantes_programa.filter(function(pp) { return pp.programa_id === progId; });
    var lideres = pps.filter(function(pp) { return pp.rol_programa === 'lider'; });
    var colabs = pps.filter(function(pp) { return pp.rol_programa === 'colaborador'; });

    function ids(tipo, tc) { return _idsDe(_encuestasDe(progId, tipo, tc)); }
    var preAuto = ids('pre', 'autoevaluacion'), preCo = ids('pre', 'coevaluacion');
    var postAuto = ids('post', 'autoevaluacion'), postCo = ids('post', 'coevaluacion');

    function avg(encIds, compId) {
      var vals = _respuestasNumericas(function(r, p) {
        return encIds.indexOf(r.encuesta_id) !== -1 && p.competencia_id === compId;
      }).map(function(x) { return x.valor; });
      return { avg: _promedio(vals), n: vals.length };
    }

    var comps = db.competencias.filter(function(c) { return c.programa_id === progId && c.estado !== 'inactiva'; });
    var competencias = comps.map(function(c) {
      var ap = avg(preAuto, c.id), cp = avg(preCo, c.id);
      var o = {
        nombre: c.nombre, foco_desarrollo: c.foco_desarrollo,
        auto_pre: ap.avg != null ? _round(ap.avg, 2) : null,
        co_pre: cp.avg != null ? _round(cp.avg, 2) : null,
        brecha_pre: (ap.avg != null && cp.avg != null) ? _round(ap.avg - cp.avg, 2) : null,
        n_auto_pre: ap.n, n_co_pre: cp.n
      };
      if (momento === 'post') {
        var apo = avg(postAuto, c.id), cpo = avg(postCo, c.id);
        o.auto_post = apo.avg != null ? _round(apo.avg, 2) : null;
        o.co_post = cpo.avg != null ? _round(cpo.avg, 2) : null;
        o.brecha_post = (apo.avg != null && cpo.avg != null) ? _round(apo.avg - cpo.avg, 2) : null;
        o.evolucion_auto = (ap.avg != null && apo.avg != null) ? _round(apo.avg - ap.avg, 2) : null;
        o.evolucion_co = (cp.avg != null && cpo.avg != null) ? _round(cpo.avg - cp.avg, 2) : null;
        o.cierre_brecha = (o.brecha_pre != null && o.brecha_post != null) ? _round(Math.abs(o.brecha_pre) - Math.abs(o.brecha_post), 2) : null;
        o.n_auto_post = apo.n; o.n_co_post = cpo.n;
      }
      return o;
    });

    function cuentaEvaluadores(encIds) {
      var set = {};
      db.respuestas.forEach(function(r) {
        if (encIds.indexOf(r.encuesta_id) !== -1) set[r.evaluador_id] = true;
      });
      return Object.keys(set).length;
    }

    var totalPre = preAuto.concat(preCo), totalPost = postAuto.concat(postCo);
    var nPre = db.respuestas.filter(function(r) { return totalPre.indexOf(r.encuesta_id) !== -1; }).length;
    var nPost = db.respuestas.filter(function(r) { return totalPost.indexOf(r.encuesta_id) !== -1; }).length;

    return {
      success: true,
      data: {
        momento: momento,
        programa: {
          id: prog.id, nombre: prog.nombre, cliente_nombre: _clienteNombre(prog.cliente_id),
          fecha_inicio: prog.fecha_inicio, fecha_termino: prog.fecha_termino, objetivo: prog.objetivo
        },
        totalLideres: lideres.length,
        totalColaboradores: colabs.length,
        lideresConAuto: cuentaEvaluadores(momento === 'post' ? postAuto : preAuto),
        colabConCo: cuentaEvaluadores(momento === 'post' ? postCo : preCo),
        totalRespuestas: nPre + nPost,
        tieneRespuestasPre: nPre > 0,
        tieneRespuestasPost: nPost > 0,
        sinPreHistorico: nPre === 0,
        disponibilidad: {
          pre_auto: db.respuestas.some(function(r) { return preAuto.indexOf(r.encuesta_id) !== -1; }),
          pre_co: db.respuestas.some(function(r) { return preCo.indexOf(r.encuesta_id) !== -1; }),
          post_auto: db.respuestas.some(function(r) { return postAuto.indexOf(r.encuesta_id) !== -1; }),
          post_co: db.respuestas.some(function(r) { return postCo.indexOf(r.encuesta_id) !== -1; })
        },
        competencias: competencias
      }
    };
  },

  obtenerDatosInformeIndividual: function(token, progId, userId, momento) {
    momento = momento || 'post';
    if (!progId || !userId) return { success: false, error: 'Parametros faltantes' };
    var db = _loadDB();
    var prog = _find('programas', progId);
    if (!prog) return { success: false, error: 'Programa no encontrado' };
    var u = _find('usuarios', userId);
    if (!u) return { success: false, error: 'Usuario no encontrado' };

    function ids(tipo) { return _idsDe(_encuestasDe(progId, tipo, null)); }
    var preIds = ids('pre'), postIds = ids('post');

    // auto vs co se decide por evaluador_id === evaluado_id
    function avg(encIds, compId, esAuto) {
      var vals = _respuestasNumericas(function(r, p) {
        if (encIds.indexOf(r.encuesta_id) === -1) return false;
        if (p.competencia_id !== compId) return false;
        if (r.evaluado_id !== userId) return false;
        return esAuto ? (r.evaluador_id === r.evaluado_id) : (r.evaluador_id !== r.evaluado_id);
      }).map(function(x) { return x.valor; });
      return { avg: _promedio(vals), n: vals.length };
    }

    var comps = db.competencias.filter(function(c) { return c.programa_id === progId && c.estado !== 'inactiva'; });
    var competencias = comps.map(function(c) {
      var ap = avg(preIds, c.id, true), cp = avg(preIds, c.id, false);
      var o = {
        nombre: c.nombre, foco_desarrollo: c.foco_desarrollo,
        auto_pre: ap.avg != null ? _round(ap.avg, 2) : null,
        co_pre: cp.avg != null ? _round(cp.avg, 2) : null,
        brecha_pre: (ap.avg != null && cp.avg != null) ? _round(ap.avg - cp.avg, 2) : null,
        n_auto_pre: ap.n, n_co_pre: cp.n
      };
      if (momento === 'post') {
        var apo = avg(postIds, c.id, true), cpo = avg(postIds, c.id, false);
        o.auto_post = apo.avg != null ? _round(apo.avg, 2) : null;
        o.co_post = cpo.avg != null ? _round(cpo.avg, 2) : null;
        o.brecha_post = (apo.avg != null && cpo.avg != null) ? _round(apo.avg - cpo.avg, 2) : null;
        o.evolucion_auto = (ap.avg != null && apo.avg != null) ? _round(apo.avg - ap.avg, 2) : null;
        o.evolucion_co = (cp.avg != null && cpo.avg != null) ? _round(cpo.avg - cp.avg, 2) : null;
        o.cierre_brecha = (o.brecha_pre != null && o.brecha_post != null) ? _round(Math.abs(o.brecha_pre) - Math.abs(o.brecha_post), 2) : null;
        o.n_auto_post = apo.n; o.n_co_post = cpo.n;
      }
      return o;
    });

    var abiertas = [];
    db.respuestas.forEach(function(r) {
      if (r.evaluado_id !== userId) return;
      var p = _find('preguntas', r.pregunta_id);
      if (!p || p.tipo_respuesta === 'niveles_competencia') return;
      var e = _find('encuestas', r.encuesta_id);
      abiertas.push({
        pregunta: p.texto_pregunta, respuesta: r.valor,
        encuesta_tipo: e ? e.tipo : '',
        encuesta_cuestionario: e ? e.tipo_cuestionario : ''
      });
    });

    var nPre = db.respuestas.filter(function(r) { return preIds.indexOf(r.encuesta_id) !== -1 && r.evaluado_id === userId; }).length;
    var nPost = db.respuestas.filter(function(r) { return postIds.indexOf(r.encuesta_id) !== -1 && r.evaluado_id === userId; }).length;

    return {
      success: true,
      data: {
        momento: momento,
        programa: { nombre: prog.nombre, cliente_nombre: _clienteNombre(prog.cliente_id) },
        participante: { id: u.id, nombre: u.nombre, email: u.email, cargo: u.cargo },
        totalRespuestas: nPre + nPost,
        tieneRespuestasPre: nPre > 0,
        tieneRespuestasPost: nPost > 0,
        sinPreHistorico: nPre === 0,
        competencias: competencias,
        respuestas_abiertas: abiertas
      }
    };
  },

  listarInformesGenerados: function(token, progId) {
    var db = _loadDB();
    var data = db.informes_generados.filter(function(i) { return !progId || i.programa_id === progId; });
    return { success: true, data: data };
  },

  registrarInformeGenerado: function(token, progId, tipo, momento, participanteId) {
    var db = _loadDB();
    var nuevo = {
      id: _uid('inf'), programa_id: progId, tipo: tipo || 'consolidado',
      momento: momento || 'post', participante_id: participanteId || null,
      created_at: _nowISO()
    };
    db.informes_generados.push(nuevo);
    _saveDB();
    return { success: true, data: { id: nuevo.id } };
  },

  generarReporte: function() { return { success: true, data: { url: '#', mensaje: 'Reporte generado' } }; },
  generarInformeConsolidado: function() { return { success: true, data: { url: '#', mensaje: 'Informe generado' } }; },
  generarInformeIndividual: function() { return { success: true, data: { url: '#', mensaje: 'Informe generado' } }; },
  exportarDatosExcel: function() { return { success: true, data: { url: '#' } }; },

  // ============================================
  // FEEDBACK
  // ============================================
  registrarFeedback: function(token, payload) {
    var db = _loadDB();
    var u = _usuarioActual();
    var nuevo = {
      id: _uid('fb'),
      programa_id: (payload && payload.programa_id) || null,
      autor_id: u ? u.id : null,
      destinatario_id: (payload && (payload.destinatario_id || payload.participante_id)) || null,
      fortalezas: (payload && payload.fortalezas) || '',
      mejoras: (payload && (payload.mejoras || payload.areas_reforzar)) || '',
      recomendaciones: (payload && payload.recomendaciones) || '',
      created_at: _nowISO()
    };
    db.feedback.push(nuevo);
    _saveDB();
    return { success: true, data: { id: nuevo.id } };
  },

  listarFeedbackRecibido: function(token) {
    var u = _usuarioActual();
    if (!u) return { success: true, data: [] };
    var db = _loadDB();
    var data = db.feedback
      .filter(function(f) { return f.destinatario_id === u.id; })
      .map(function(f) {
        var autor = _find('usuarios', f.autor_id);
        return Object.assign({}, f, { autor_nombre: autor ? autor.nombre : '', autor_cargo: autor ? autor.cargo : '' });
      });
    return { success: true, data: data };
  },

  listarFeedbackEquipo: function(token, progId) {
    var db = _loadDB();
    var u = _usuarioActual();
    var data = db.feedback
      .filter(function(f) { return (!progId || f.programa_id === progId) && (!u || f.autor_id === u.id); })
      .map(function(f) {
        var dest = _find('usuarios', f.destinatario_id);
        return Object.assign({}, f, { destinatario_nombre: dest ? dest.nombre : '', destinatario_cargo: dest ? dest.cargo : '' });
      });
    return { success: true, data: data };
  },

  listarFeedbackJefatura: function() { return { success: true, data: [] }; },
  crearFeedback: function(token, datos) { return backendFunctions.registrarFeedback(token, datos); },
  enviarFeedback: function() { return { success: true }; },

  // ============================================
  // MI EQUIPO
  // ============================================
  listarMiEquipo: function(token, progId) {
    var u = _usuarioActual();
    if (!u) return { success: true, data: [] };
    var db = _loadDB();
    var data = db.participantes_programa
      .filter(function(pp) { return pp.lider_id === u.id && (!progId || pp.programa_id === progId); })
      .map(function(pp) {
        var c = _find('usuarios', pp.usuario_id);
        if (!c) return null;
        var respondio = db.respuestas.some(function(r) { return r.evaluador_id === c.id; });
        return {
          id: c.id, usuario_id: c.id, nombre: c.nombre, email: c.email, cargo: c.cargo,
          estado: respondio ? 'Respondió' : 'Pendiente',
          nivelAplicacion: 0
        };
      })
      .filter(Boolean);
    return { success: true, data: data };
  },

  // ============================================
  // OBSERVACIONES / INCIDENCIAS
  // ============================================
  listarObservaciones: function(token, progId) {
    var db = _loadDB();
    var data = db.observaciones
      .filter(function(o) { return !progId || o.programa_id === progId; })
      .map(function(o) {
        var u = _find('usuarios', o.usuario_id);
        var lider = null;
        if (u) {
          var pp = db.participantes_programa.find(function(x) { return x.usuario_id === u.id; });
          if (pp && pp.lider_id) lider = _find('usuarios', pp.lider_id);
        }
        return Object.assign({}, o, {
          usuario_nombre: u ? u.nombre : '',
          lider_id: lider ? lider.id : (u ? u.id : ''),
          lider_nombre: lider ? lider.nombre : (u ? u.nombre : ''),
          fecha: (o.created_at || '').slice(0, 10)
        });
      });
    return { success: true, data: data };
  },

  listarReportesObservacion: function(token) {
    var u = _usuarioActual();
    var db = _loadDB();
    var data = db.observaciones
      .filter(function(o) { return !u || o.usuario_id === u.id; })
      .map(function(o) {
        return Object.assign({}, o, { fecha: (o.created_at || '').slice(0, 10) });
      });
    return { success: true, data: data };
  },

  crearReporteObservacion: function(token, payload) {
    var db = _loadDB();
    var u = _usuarioActual();
    var prog = u ? _programaDeUsuario(u.id) : null;
    var nuevo = {
      id: _uid('obs'),
      programa_id: (payload && payload.programa_id) || (prog ? prog.id : null),
      usuario_id: u ? u.id : null,
      titulo: (payload && payload.titulo) || 'Incidencia',
      descripcion: (payload && payload.descripcion) || '',
      categoria: (payload && payload.categoria) || 'consulta',
      estado: 'pendiente',
      prioridad: (payload && payload.prioridad) || 'media',
      respuesta: '',
      created_at: _nowISO()
    };
    db.observaciones.unshift(nuevo);
    _saveDB();
    return { success: true, data: { id: nuevo.id } };
  },

  actualizarReporteObservacion: function(token, id, datos) {
    var o = _find('observaciones', id);
    if (!o) return { success: false, error: 'Incidencia no encontrada' };
    Object.keys(datos || {}).forEach(function(k) { o[k] = datos[k]; });
    _saveDB();
    return { success: true };
  },

  listarTodasObservacionesAdmin: function(token) {
    var db = _loadDB();
    var data = db.observaciones.map(function(o) {
      var u = _find('usuarios', o.usuario_id);
      var p = _find('programas', o.programa_id);
      return Object.assign({}, o, {
        usuario_nombre: u ? u.nombre : '',
        usuario_email: u ? u.email : '',
        programa_nombre: p ? p.nombre : '',
        fecha: (o.created_at || '').slice(0, 10)
      });
    });
    return { success: true, data: data };
  },

  cambiarEstadoObservacion: function(token, obsId, nuevoEstado, comentario) {
    var o = _find('observaciones', obsId);
    if (!o) return { success: false, error: 'Incidencia no encontrada' };
    o.estado = nuevoEstado || o.estado;
    if (comentario) o.respuesta = comentario;
    _saveDB();
    return { success: true };
  },

  listarObservacionesJefatura: function() { return { success: true, data: [] }; },
  guardarObservacion: function() { return { success: true }; },

  // ============================================
  // CORREOS
  // ============================================
  listarCorreosEnviados: function(token, progId) {
    var db = _loadDB();
    var data = db.correos.filter(function(c) { return !progId || c.programa_id === progId; });
    return { success: true, data: data };
  },

  enviarCorreoManual: function(token, datos) {
    var db = _loadDB();
    var nuevo = {
      id: _uid('cor'),
      programa_id: (datos && datos.programa_id) || null,
      destinatario: (datos && (datos.destinatario || datos.destinatarios)) || 'Participantes',
      asunto: (datos && datos.asunto) || '(sin asunto)',
      cuerpo: (datos && (datos.cuerpo || datos.mensaje)) || '',
      fecha_envio: _nowISO(),
      estado: 'enviado',
      total_destinatarios: (datos && datos.total_destinatarios) || 1
    };
    db.correos.unshift(nuevo);
    _saveDB();
    return { success: true, data: { id: nuevo.id, mensaje: 'Correo enviado (simulado en la demo).' } };
  },

  enviarRecordatorioManual: function(token, datos) {
    return backendFunctions.enviarCorreoManual(token, Object.assign({ asunto: 'Recordatorio' }, datos || {}));
  },

  // ============================================
  // CRONOGRAMA / HITOS
  // ============================================
  listarHitosPrograma: function(token, progId) {
    var db = _loadDB();
    var data = db.hitos
      .filter(function(h) { return !progId || h.programa_id === progId; })
      .sort(function(a, b) { return (a.orden || 0) - (b.orden || 0); });
    return { success: true, data: data };
  },

  crearHito: function(token, progId, datos) {
    var db = _loadDB();
    var nuevo = {
      id: _uid('hito'), programa_id: progId,
      nombre: (datos && datos.nombre) || 'Nuevo hito',
      descripcion: (datos && datos.descripcion) || '',
      fase: (datos && datos.fase) || 'Desarrollo',
      fecha_inicio: (datos && datos.fecha_inicio) || null,
      fecha_termino: (datos && datos.fecha_termino) || null,
      responsable: (datos && datos.responsable) || '',
      estado: (datos && datos.estado) || 'pendiente',
      orden: db.hitos.filter(function(h) { return h.programa_id === progId; }).length + 1
    };
    db.hitos.push(nuevo);
    _saveDB();
    return { success: true, data: { id: nuevo.id } };
  },

  actualizarHito: function(token, id, datos) {
    var h = _find('hitos', id);
    if (!h) return { success: false, error: 'Hito no encontrado' };
    Object.keys(datos || {}).forEach(function(k) { h[k] = datos[k]; });
    _saveDB();
    return { success: true };
  },

  eliminarHito: function(token, id) {
    var db = _loadDB();
    db.hitos = db.hitos.filter(function(h) { return h.id !== id; });
    _saveDB();
    return { success: true };
  },

  importarHitosExcel: function(token, progId, hitos, opts) {
    var db = _loadDB();
    if (opts && opts.reemplazar) {
      db.hitos = db.hitos.filter(function(h) { return h.programa_id !== progId; });
    }
    var n = 0;
    (hitos || []).forEach(function(h) {
      backendFunctions.crearHito(token, progId, h);
      n++;
    });
    return { success: true, data: { importados: n } };
  },

  listarCronograma: function(token, progId) {
    var res = backendFunctions.listarHitosPrograma(token, progId);
    var hitos = res.data || [];
    var fases = {};
    hitos.forEach(function(h) {
      var f = h.fase || 'Sin fase';
      if (!fases[f]) fases[f] = [];
      fases[f].push(h);
    });
    return { success: true, data: { hitos: hitos, fases: fases } };
  },

  // ============================================
  // ACTIVIDADES (no usadas en v2, se mantienen por compatibilidad)
  // ============================================
  listarMisActividades: function() { return { success: true, data: [] }; },
  marcarActividadCompletada: function() { return { success: true }; },
  listarActividades: function() { return { success: true, data: [] }; },
  crearActividad: function() { return { success: true, data: { id: null } }; },
  actualizarActividad: function() { return { success: true }; },

  // ============================================
  // LEGACY (checklists / hallazgos, fuera del alcance v2)
  // ============================================
  listarChecklists: function() { return { success: true, data: [] }; },
  crearChecklist: function() { return { success: true, data: { id: null } }; },
  activarChecklist: function() { return { success: true }; },
  cerrarChecklist: function() { return { success: true }; },
  listarHallazgos: function() { return { success: true, data: [] }; },
  crearHallazgo: function() { return { success: true, data: { id: null } }; },
  actualizarHallazgo: function() { return { success: true }; }
};

// ============================================
// NARRATIVA DE INFORMES (sustituye la llamada a Groq)
// Genera el analisis a partir de los datos reales incrustados en el prompt,
// sin depender de ninguna API externa ni de claves.
// ============================================

// Extrae el bloque JSON mas grande que venga dentro del prompt
function _datosDelPrompt(prompt) {
  var mejor = null;
  var inicio = -1, nivel = 0;
  for (var i = 0; i < prompt.length; i++) {
    var ch = prompt[i];
    if (ch === '{') { if (nivel === 0) inicio = i; nivel++; }
    else if (ch === '}') {
      nivel--;
      if (nivel === 0 && inicio !== -1) {
        var frag = prompt.slice(inicio, i + 1);
        try {
          var obj = JSON.parse(frag);
          if (obj && typeof obj === 'object' && (!mejor || frag.length > mejor._len)) {
            obj._len = frag.length;
            mejor = obj;
          }
        } catch (e) {}
        inicio = -1;
      }
    }
  }
  if (mejor) delete mejor._len;
  return mejor;
}

function _fmt(n) {
  return (n === null || n === undefined || isNaN(n)) ? 'sin dato' : Number(n).toFixed(2);
}

function _lecturaBrecha(b) {
  if (b === null || b === undefined) return 'sin datos suficientes para calcular la brecha';
  if (b > 0.4) return 'te evalúas bastante por encima de lo que percibe tu equipo';
  if (b > 0.15) return 'te evalúas algo por encima de tu equipo';
  if (b < -0.4) return 'tu equipo te evalúa bastante mejor de lo que tú te ves';
  if (b < -0.15) return 'tu equipo te evalúa algo mejor de lo que tú te ves';
  return 'tu mirada y la de tu equipo están alineadas';
}

function _narrativaIndividual(d) {
  var comps = (d && d.competencias) || [];
  var esPost = (d && d.momento) === 'post';
  var nombre = (d && d.participante && d.participante.nombre) || 'el líder';
  var prog = (d && d.programa && d.programa.nombre) || 'el programa';

  var conDato = comps.filter(function(c) { return c.auto_pre != null || c.auto_post != null; });
  var brechas = comps.map(function(c) { return esPost ? c.brecha_post : c.brecha_pre; })
                     .filter(function(b) { return b != null; });
  var brechaProm = brechas.length ? brechas.reduce(function(a, b) { return a + b; }, 0) / brechas.length : null;

  var mayorBrecha = null;
  comps.forEach(function(c) {
    var b = esPost ? c.brecha_post : c.brecha_pre;
    if (b == null) return;
    if (!mayorBrecha || Math.abs(b) > Math.abs(mayorBrecha.b)) mayorBrecha = { c: c, b: b };
  });

  var mayorAvance = null;
  if (esPost) {
    comps.forEach(function(c) {
      if (c.evolucion_co == null) return;
      if (!mayorAvance || c.evolucion_co > mayorAvance.v) mayorAvance = { c: c, v: c.evolucion_co };
    });
  }

  var lectura = esPost
    ? '<p>Este informe cierra tu participación en <strong>' + prog + '</strong>. Compara cómo te evaluaste al inicio y al final, ' +
      'junto con la mirada de tu equipo en ambos momentos.</p>' +
      (mayorAvance
        ? '<p>El mayor movimiento lo registra <strong>' + mayorAvance.c.nombre + '</strong>: la evaluación de tu equipo pasó de ' +
          _fmt(mayorAvance.c.co_pre) + ' a ' + _fmt(mayorAvance.c.co_post) + ' (' + (mayorAvance.v >= 0 ? '+' : '') + _fmt(mayorAvance.v) + ' puntos). ' +
          'Es la conducta donde el cambio se hizo más visible para quienes trabajan contigo.</p>'
        : '') +
      (brechaProm != null
        ? '<p>Tu brecha promedio de cierre es de <strong>' + _fmt(brechaProm) + '</strong>: ' + _lecturaBrecha(brechaProm) + '.</p>'
        : '')
    : '<p>Este es tu informe de línea base en <strong>' + prog + '</strong>. Refleja el punto de partida: cómo te ves tú y cómo te ve tu equipo ' +
      'en cada una de las ' + comps.length + ' competencias del programa.</p>' +
      (brechaProm != null
        ? '<p>Tu brecha promedio es de <strong>' + _fmt(brechaProm) + '</strong>: ' + _lecturaBrecha(brechaProm) + '. ' +
          'Esa distancia entre ambas miradas es justamente lo que el programa busca trabajar.</p>'
        : '<p>Aún no hay suficientes respuestas de tu equipo para calcular la brecha.</p>') +
      (mayorBrecha
        ? '<p>La diferencia más marcada está en <strong>' + mayorBrecha.c.nombre + '</strong> (' + _fmt(mayorBrecha.b) + '), ' +
          'un buen lugar para poner atención durante el programa.</p>'
        : '');

  var analisis = comps.map(function(c) {
    var b = esPost ? c.brecha_post : c.brecha_pre;
    var auto = esPost ? c.auto_post : c.auto_pre;
    var co = esPost ? c.co_post : c.co_pre;
    var evo = [];
    if (esPost) {
      if (c.evolucion_auto != null) evo.push('Tu autoevaluación varió ' + (c.evolucion_auto >= 0 ? '+' : '') + _fmt(c.evolucion_auto) + ' puntos respecto al inicio.');
      if (c.evolucion_co != null) evo.push('La mirada de tu equipo varió ' + (c.evolucion_co >= 0 ? '+' : '') + _fmt(c.evolucion_co) + ' puntos.');
      if (c.cierre_brecha != null) evo.push(c.cierre_brecha > 0
        ? 'La brecha se redujo en ' + _fmt(c.cierre_brecha) + ' puntos: las dos miradas se acercaron.'
        : 'La brecha no se redujo en esta competencia; sigue siendo un foco abierto.');
    } else {
      evo.push('Te evalúas en ' + _fmt(auto) + ' sobre 4 en esta competencia.');
      evo.push(co != null ? 'Tu equipo te evalúa en ' + _fmt(co) + '.' : 'Aún no hay evaluación del equipo para esta competencia.');
    }
    if (!evo.length) evo.push('Sin datos suficientes para esta competencia.');
    return {
      nombre: c.nombre,
      brecha: b != null ? ('Autoevaluación ' + _fmt(auto) + ' vs equipo ' + _fmt(co) + ' — brecha de ' + _fmt(b)) : 'Sin dato de brecha',
      interpretacion: (c.foco_desarrollo ? '<strong>Foco:</strong> ' + c.foco_desarrollo + '. ' : '') + _lecturaBrecha(b) + '.',
      evolucion: evo
    };
  });

  var insight = mayorBrecha
    ? 'Tu siguiente nivel de desarrollo pasa por ' + mayorBrecha.c.nombre.toLowerCase() + ': ahí es donde la distancia entre tu mirada y la de tu equipo es mayor.'
    : 'Tu siguiente nivel de desarrollo pasa por sostener en el tiempo las conductas que ya lograste instalar.';

  return {
    lectura_global: lectura,
    analisis_competencias: analisis,
    insight: insight,
    recomendaciones: [
      { titulo: 'Conversa los resultados con tu equipo',
        items: ['Comparte los focos que viste en este informe, sin entrar en respuestas individuales.',
                'Pregunta qué necesitan de ti para que esas conductas se noten más en el día a día.'] },
      { titulo: 'Elige una sola conducta para las próximas semanas',
        items: [mayorBrecha ? 'Empieza por ' + mayorBrecha.c.nombre + ', donde la brecha es mayor.' : 'Elige la competencia que más impacto tenga en tu equipo hoy.',
                'Define una acción concreta y observable, no un propósito general.'] },
      { titulo: 'Busca evidencia, no impresiones',
        items: ['Pide retroalimentación específica después de reuniones o decisiones relevantes.',
                'Registra qué cambió en el equipo cuando aplicaste la conducta.'] }
    ],
    compromiso: '<p>Elige <strong>una</strong> conducta de este informe y trabájala durante las próximas cuatro semanas. ' +
      'Un cambio sostenido en una competencia rinde más que intentar avanzar en todas a la vez.</p>'
  };
}

function _narrativaConsolidada(d) {
  var comps = (d && d.competencias) || [];
  var prog = (d && d.programa && d.programa.nombre) || 'el programa';
  var esPost = (d && d.momento) === 'post';
  var nLideres = (d && d.totalLideres) || 0;
  var nColab = (d && d.totalColaboradores) || 0;

  var brechas = comps.map(function(c) { return esPost ? c.brecha_post : c.brecha_pre; }).filter(function(b) { return b != null; });
  var brechaProm = brechas.length ? brechas.reduce(function(a, b) { return a + b; }, 0) / brechas.length : null;

  var ordenPorBrecha = comps.filter(function(c) {
    return (esPost ? c.brecha_post : c.brecha_pre) != null;
  }).sort(function(a, b) {
    return Math.abs(esPost ? b.brecha_post : b.brecha_pre) - Math.abs(esPost ? a.brecha_post : a.brecha_pre);
  });

  var mejoras = comps.filter(function(c) { return c.evolucion_co != null; })
    .sort(function(a, b) { return b.evolucion_co - a.evolucion_co; });

  var intro = '<p>Informe ' + (esPost ? 'final' : 'de línea base') + ' del programa <strong>' + prog + '</strong>, ' +
    'con ' + nLideres + ' líderes evaluados y ' + nColab + ' colaboradores participando en la coevaluación. ' +
    'Los resultados se expresan en una escala de 1 a 4 por competencia.</p>';

  var hallazgos = [];
  if (ordenPorBrecha.length) {
    var top = ordenPorBrecha[0];
    var bTop = esPost ? top.brecha_post : top.brecha_pre;
    hallazgos.push({
      titulo: 'Mayor brecha: ' + top.nombre,
      texto: 'Los líderes se autoevalúan en ' + _fmt(esPost ? top.auto_post : top.auto_pre) + ' mientras sus equipos los evalúan en ' +
             _fmt(esPost ? top.co_post : top.co_pre) + ', una brecha de <strong>' + _fmt(bTop) + '</strong>. ' +
             'Es la competencia con mayor distancia entre ambas miradas.'
    });
  }
  if (esPost && mejoras.length) {
    hallazgos.push({
      titulo: 'Mayor avance: ' + mejoras[0].nombre,
      texto: 'La evaluación de los equipos subió de ' + _fmt(mejoras[0].co_pre) + ' a ' + _fmt(mejoras[0].co_post) +
             ' (<strong>' + (mejoras[0].evolucion_co >= 0 ? '+' : '') + _fmt(mejoras[0].evolucion_co) + '</strong>). ' +
             'El cambio fue percibido por quienes trabajan con estos líderes, no solo declarado por ellos.'
    });
  }
  if (ordenPorBrecha.length > 1) {
    var menor = ordenPorBrecha[ordenPorBrecha.length - 1];
    hallazgos.push({
      titulo: 'Mirada más alineada: ' + menor.nombre,
      texto: 'La diferencia entre autoevaluación y equipo es de solo ' + _fmt(Math.abs(esPost ? menor.brecha_post : menor.brecha_pre)) +
             '. Es la competencia donde líderes y equipos leen la realidad de forma más parecida.'
    });
  }
  while (hallazgos.length < 3) {
    hallazgos.push({ titulo: 'Cobertura de la medición',
      texto: 'Participaron ' + nLideres + ' líderes y ' + nColab + ' colaboradores. ' +
             'Una cobertura alta es lo que permite leer estos resultados con confianza.' });
  }

  var lectura = brechaProm != null
    ? '<p>La brecha promedio del grupo es de <strong>' + _fmt(brechaProm) + '</strong> puntos. ' +
      (brechaProm > 0.2
        ? 'Los líderes tienden a evaluarse por encima de lo que perciben sus equipos, un patrón habitual al inicio de este tipo de procesos y que el programa busca reducir.'
        : brechaProm < -0.2
          ? 'Los equipos evalúan a sus líderes mejor de lo que ellos mismos se ven, lo que suele indicar autoexigencia alta más que un problema de desempeño.'
          : 'Ambas miradas están razonablemente alineadas, lo que da una base sólida para trabajar sobre conductas concretas.') + '</p>'
    : '<p>Todavía no hay suficientes respuestas para calcular brechas confiables a nivel de grupo.</p>';

  var conclusiones = [
    'Se evaluaron ' + comps.length + ' competencias con ' + nLideres + ' líderes y ' + nColab + ' colaboradores.',
    brechaProm != null ? 'La brecha promedio entre autoevaluación y equipo es de ' + _fmt(brechaProm) + ' puntos.' : 'La cobertura actual no permite aún calcular brechas representativas.',
    ordenPorBrecha.length ? 'La competencia con mayor foco de desarrollo es ' + ordenPorBrecha[0].nombre + '.' : 'Se requieren más respuestas para priorizar focos.',
    esPost ? 'Los resultados permiten comparar el punto de partida con el cierre del programa.' : 'Esta medición constituye la línea base para comparar al cierre del programa.'
  ];

  return {
    intro: intro,
    hallazgos: hallazgos.slice(0, 3),
    lectura_global: lectura,
    conclusiones: conclusiones,
    recomendaciones: [
      { titulo: 'Devolver resultados a cada líder', texto: 'Entregar el informe individual en una conversación uno a uno permite que cada líder entienda su brecha y elija su propio foco.' },
      { titulo: 'Priorizar una competencia por ciclo', texto: ordenPorBrecha.length ? 'Concentrar el próximo ciclo en ' + ordenPorBrecha[0].nombre + ', donde la brecha del grupo es mayor.' : 'Concentrar el próximo ciclo en la competencia más crítica para el negocio.' },
      { titulo: 'Instalar práctica acompañada', texto: 'Las conductas se transfieren cuando se practican en el puesto con acompañamiento, no solo en el taller.' },
      { titulo: 'Volver a medir', texto: 'Repetir la medición al cierre del siguiente ciclo permite verificar si el cambio se sostiene en el tiempo.' }
    ],
    cierre: '<p>El valor de esta medición no está en el número, sino en la conversación que habilita entre cada líder y su equipo. ' +
      'La recomendación es usar estos resultados como punto de partida de esa conversación.</p>',
    // Campos adicionales que consume el informe final comparativo
    resumen_ejecutivo: intro + lectura,
    competencias_evolucion: comps.map(function(c) {
      return {
        nombre: c.nombre,
        auto_inicial: c.auto_pre, auto_final: c.auto_post != null ? c.auto_post : null,
        co_inicial: c.co_pre, co_final: c.co_post != null ? c.co_post : null,
        brecha_inicial: c.brecha_pre, brecha_final: c.brecha_post != null ? c.brecha_post : null,
        cierre: c.cierre_brecha != null ? c.cierre_brecha : null,
        interpretacion: (c.brecha_pre == null && c.brecha_post == null)
          ? 'sin dato'
          : (c.cierre_brecha != null && c.cierre_brecha > 0
              ? 'La brecha se redujo en ' + _fmt(c.cierre_brecha) + ' puntos.'
              : 'La brecha se mantiene como foco de desarrollo.')
      };
    }),
    top_mejoras: (mejoras.slice(0, 3).map(function(c) {
      return c.nombre + ': la evaluación del equipo subió ' + _fmt(c.evolucion_co) + ' puntos.';
    })),
    areas_persistentes: ordenPorBrecha.slice(0, 3).map(function(c) {
      return c.nombre + ': la brecha se mantiene en ' + _fmt(esPost ? c.brecha_post : c.brecha_pre) + ' puntos.';
    }),
    impacto_global: {
      variacion_auto_promedio: (function() {
        var v = comps.map(function(c) { return c.evolucion_auto; }).filter(function(x) { return x != null; });
        return v.length ? _round(v.reduce(function(a, b) { return a + b; }, 0) / v.length, 2) : null;
      })(),
      variacion_co_promedio: (function() {
        var v = comps.map(function(c) { return c.evolucion_co; }).filter(function(x) { return x != null; });
        return v.length ? _round(v.reduce(function(a, b) { return a + b; }, 0) / v.length, 2) : null;
      })(),
      cierre_brecha_promedio: (function() {
        var v = comps.map(function(c) { return c.cierre_brecha; }).filter(function(x) { return x != null; });
        return v.length ? _round(v.reduce(function(a, b) { return a + b; }, 0) / v.length, 2) : null;
      })(),
      narrativa: lectura
    },
    recomendaciones_continuidad: [
      { titulo: 'Sostener la práctica', texto: 'Mantener espacios de práctica acompañada para que las conductas no se diluyan al terminar el programa.' },
      { titulo: 'Medir de nuevo', texto: 'Repetir la medición en seis meses para verificar si el cambio se sostiene.' }
    ]
  };
}

// Reemplazo local de la llamada a Groq: misma firma y mismo formato de retorno
function callGroqFromBrowser(messages) {
  return new Promise(function(resolve) {
    var prompt = '';
    try {
      prompt = (messages || []).map(function(m) { return m && m.content ? m.content : ''; }).join('\n');
    } catch (e) {}

    var datos = _datosDelPrompt(prompt) || {};
    var esIndividual = /INFORME INDIVIDUAL|informe individual/i.test(prompt) || !!datos.participante;

    var payload;
    try {
      payload = esIndividual ? _narrativaIndividual(datos) : _narrativaConsolidada(datos);
    } catch (e) {
      console.error('[TPT Demo] Error generando narrativa', e);
      payload = { lectura_global: '<p>No fue posible generar la narrativa del informe. Los datos cuantitativos siguen disponibles más abajo.</p>' };
    }

    // Simula la latencia de un modelo para que el estado de carga sea visible
    setTimeout(function() {
      resolve({ success: true, response: JSON.stringify(payload) });
    }, 900);
  });
}
window.callGroqFromBrowser = callGroqFromBrowser;

// ============================================
// google.script.run shim (misma interfaz que produccion)
// ============================================
var google = { script: { run: _mkRunner() } };

function _mkRunner() {
  return new Proxy({}, {
    get: function(_, prop) {
      if (prop === 'withSuccessHandler') {
        return function(onOk) {
          return new Proxy({}, {
            get: function(_, p2) {
              if (p2 === 'withFailureHandler') {
                return function(onErr) {
                  return new Proxy({}, {
                    get: function(_, fn) {
                      return function() {
                        _dispatch(fn, [].slice.call(arguments), onOk, onErr);
                      };
                    }
                  });
                };
              }
              return function() {
                _dispatch(p2, [].slice.call(arguments), onOk, null);
              };
            }
          });
        };
      }
      if (prop === 'withFailureHandler') {
        return function() { return _mkRunner(); };
      }
      // Llamada directa sin handlers (fire and forget)
      var handler = backendFunctions[prop];
      if (handler) {
        return function() {
          var args = [].slice.call(arguments);
          try { handler.apply(null, args); } catch (e) { console.error('[MOCK] direct call', prop, e); }
        };
      }
      return function() { return _mkRunner(); };
    }
  });
}

function _dispatch(fn, args, onOk, onErr) {
  if (fn === 'getVistaHTML') {
    fetch(args[0] + '.html?_=' + Date.now())
      .then(function(r) {
        if (!r.ok) throw new Error('Vista no encontrada: ' + args[0]);
        return r.text();
      })
      .then(function(html) { setTimeout(function() { onOk(html); }, 60); })
      .catch(function(e) { if (onErr) onErr(e); });
    return;
  }
  var handler = backendFunctions[fn];
  if (!handler) {
    console.warn('[MOCK] No implementado:', fn);
    setTimeout(function() { onOk({ success: true, data: [] }); }, 50);
    return;
  }
  setTimeout(function() {
    try {
      var result = handler.apply(null, args);
      if (result && typeof result.then === 'function') {
        result.then(onOk).catch(function(e) {
          console.error('[MOCK]', fn, e);
          if (onErr) onErr(e); else onOk({ success: false, error: String(e) });
        });
      } else {
        onOk(result);
      }
    } catch (e) {
      console.error('[MOCK]', fn, e);
      if (onErr) onErr(e); else onOk({ success: false, error: String(e) });
    }
  }, 120);
}

// Inicializar
_loadDB();
console.log('%c[TPT Demo] Backend de demostracion activo — datos ficticios en memoria', 'color:#F58220;font-weight:bold;');
console.log('%cPara restaurar los datos originales: resetDemoData()', 'color:#718096;');
