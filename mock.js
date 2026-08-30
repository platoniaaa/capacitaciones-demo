// ============================================
// MOCK.JS - Auto-generated for GitHub Pages deploy
// All data + backend + google.script.run simulation
// ============================================

const MOCK_DATA = {
  clientes: [
    { id: 'cli-001', nombre: 'Minera Los Andes S.A.', razon_social: 'Minera Los Andes SpA', rubro: 'Minería', pais: 'Chile', contacto_nombre: 'María González', contacto_email: 'mgonzalez@losandes.cl', estado: 'Activo' },
    { id: 'cli-002', nombre: 'Retail Express Ltda.', razon_social: 'Retail Express Limitada', rubro: 'Retail', pais: 'Chile', contacto_nombre: 'Carlos Muñoz', contacto_email: 'cmunoz@retailexpress.cl', estado: 'Activo' },
    { id: 'cli-003', nombre: 'Banco del Sur', razon_social: 'Banco del Sur S.A.', rubro: 'Banca', pais: 'Chile', contacto_nombre: 'Ana Torres', contacto_email: 'atorres@bancosur.cl', estado: 'Inactivo' },
    { id: 'cli-004', nombre: 'Tech Solutions Chile', razon_social: 'Tech Solutions SpA', rubro: 'Tecnología', pais: 'Chile', contacto_nombre: 'Pedro Soto', contacto_email: 'psoto@techsolutions.cl', estado: 'Activo' },
  ],
  programas: [
    { id: 'prog-001', nombre: 'Liderazgo Seguro 2026', cliente_id: 'cli-001', cliente_nombre: 'Minera Los Andes S.A.', tipo: 'programa_completo', estado: 'activo', objetivo: 'Desarrollar competencias de liderazgo en seguridad para supervisores de faena', fecha_inicio: '2026-01-15', fecha_termino: '2026-06-30', fecha_medicion_pre: '2026-01-20', fecha_medicion_post: '2026-06-15' },
    { id: 'prog-002', nombre: 'Servicio al Cliente Retail', cliente_id: 'cli-002', cliente_nombre: 'Retail Express Ltda.', tipo: 'piloto', estado: 'diseno', objetivo: 'Mejorar indicadores de atención al cliente en tiendas', fecha_inicio: '2026-03-01', fecha_termino: '2026-08-31', fecha_medicion_pre: '2026-03-10', fecha_medicion_post: '2026-08-20' },
    { id: 'prog-003', nombre: 'Gestión de Riesgos Operacionales', cliente_id: 'cli-004', cliente_nombre: 'Tech Solutions Chile', tipo: 'intervencion', estado: 'activo', objetivo: 'Transferir prácticas de gestión de riesgos al equipo de operaciones', fecha_inicio: '2026-02-01', fecha_termino: '2026-07-31', fecha_medicion_pre: '2026-02-10', fecha_medicion_post: '2026-07-20' },
    { id: 'prog-004', nombre: 'Comunicación Efectiva Banca', cliente_id: 'cli-003', cliente_nombre: 'Banco del Sur', tipo: 'programa_completo', estado: 'finalizado', objetivo: 'Fortalecer habilidades de comunicación en equipos comerciales', fecha_inicio: '2025-06-01', fecha_termino: '2025-12-15', fecha_medicion_pre: '2025-06-10', fecha_medicion_post: '2025-12-01' },
  ],
  conductas: [
    { id: 'cond-001', nombre: 'Liderazgo Visible en Terreno', descripcion: 'El líder realiza recorridos regulares observando comportamientos seguros e inseguros', programa_id: 'prog-001', prioridad: 1, estado: 'activa' },
    { id: 'cond-002', nombre: 'Retroalimentación Positiva', descripcion: 'Entrega feedback constructivo de manera oportuna', programa_id: 'prog-001', prioridad: 2, estado: 'activa' },
    { id: 'cond-003', nombre: 'Gestión de Riesgos Críticos', descripcion: 'Identifica y gestiona riesgos críticos antes del inicio de tareas', programa_id: 'prog-001', prioridad: 3, estado: 'activa' },
    { id: 'cond-004', nombre: 'Comunicación Asertiva', descripcion: 'Comunica de forma clara y respetuosa las expectativas de seguridad', programa_id: 'prog-001', prioridad: 4, estado: 'activa' },
    { id: 'cond-005', nombre: 'Escucha Activa', descripcion: 'Demuestra escucha activa con clientes internos y externos', programa_id: 'prog-002', prioridad: 1, estado: 'activa' },
    { id: 'cond-006', nombre: 'Resolución de Conflictos', descripcion: 'Maneja situaciones conflictivas con empatía', programa_id: 'prog-002', prioridad: 2, estado: 'activa' },
  ],
  usuarios: [
    { id: 'usr-001', nombre: 'Admin Demo', email: 'admin@mso.cl', rol: 'admin', cargo: 'Administrador', cliente_id: null, estado: 'Activo' },
    { id: 'usr-002', nombre: 'Javier Rodríguez', email: 'jrodriguez@losandes.cl', rol: 'jefatura', cargo: 'Superintendente Mina', cliente_id: 'cli-001', estado: 'Activo' },
    { id: 'usr-003', nombre: 'Laura Martínez', email: 'lmartinez@losandes.cl', rol: 'participante', cargo: 'Supervisora Planta', cliente_id: 'cli-001', estado: 'Activo' },
    { id: 'usr-004', nombre: 'Roberto Díaz', email: 'rdiaz@losandes.cl', rol: 'participante', cargo: 'Jefe de Turno', cliente_id: 'cli-001', estado: 'Activo' },
    { id: 'usr-005', nombre: 'Camila Herrera', email: 'cherrera@retailexpress.cl', rol: 'jefatura', cargo: 'Gerente de Tienda', cliente_id: 'cli-002', estado: 'Activo' },
    { id: 'usr-006', nombre: 'Diego Fuentes', email: 'dfuentes@retailexpress.cl', rol: 'participante', cargo: 'Vendedor Senior', cliente_id: 'cli-002', estado: 'Activo' },
    { id: 'usr-007', nombre: 'Sofía Vargas', email: 'svargas@techsolutions.cl', rol: 'participante', cargo: 'Analista de Operaciones', cliente_id: 'cli-004', estado: 'Activo' },
    { id: 'usr-008', nombre: 'Andrés Morales', email: 'amorales@losandes.cl', rol: 'participante', cargo: 'Operador Senior', cliente_id: 'cli-001', estado: 'Inactivo' },
  ],
  encuestas: [
    { id: 'enc-001', nombre: 'Encuesta PRE - Liderazgo Seguro', programa_id: 'prog-001', programa_nombre: 'Liderazgo Seguro 2026', tipo: 'pre', estado: 'activa', fecha_creacion: '2026-01-18', total_respuestas: 12, total_esperadas: 15 },
    { id: 'enc-002', nombre: 'Encuesta POST - Liderazgo Seguro', programa_id: 'prog-001', programa_nombre: 'Liderazgo Seguro 2026', tipo: 'post', estado: 'borrador', fecha_creacion: '2026-01-18', total_respuestas: 0, total_esperadas: 15 },
    { id: 'enc-003', nombre: 'Encuesta PRE - Servicio Cliente', programa_id: 'prog-002', programa_nombre: 'Servicio al Cliente Retail', tipo: 'pre', estado: 'borrador', fecha_creacion: '2026-02-28', total_respuestas: 0, total_esperadas: 8 },
  ],
  checklists: [
    { id: 'chk-001', nombre: 'Checklist Observación Terreno', programa_id: 'prog-001', programa_nombre: 'Liderazgo Seguro 2026', conductas: 4, estado: 'activa', observaciones_realizadas: 23 },
    { id: 'chk-002', nombre: 'Checklist Atención al Cliente', programa_id: 'prog-002', programa_nombre: 'Servicio al Cliente Retail', conductas: 2, estado: 'borrador', observaciones_realizadas: 0 },
  ],
  hallazgos: [
    { id: 'hall-001', programa_id: 'prog-001', programa_nombre: 'Liderazgo Seguro 2026', conducta_nombre: 'Liderazgo Visible en Terreno', tipo: 'fortaleza', descripcion: 'Los supervisores muestran consistencia en recorridos matutinos', fecha: '2026-02-15', autor: 'Admin Demo' },
    { id: 'hall-002', programa_id: 'prog-001', programa_nombre: 'Liderazgo Seguro 2026', conducta_nombre: 'Retroalimentación Positiva', tipo: 'oportunidad', descripcion: 'Se observa bajo uso de refuerzo positivo durante cambios de turno', fecha: '2026-02-20', autor: 'Admin Demo', recomendacion: 'Implementar práctica de reconocimiento al inicio de cada turno' },
    { id: 'hall-003', programa_id: 'prog-001', programa_nombre: 'Liderazgo Seguro 2026', conducta_nombre: 'Gestión de Riesgos Críticos', tipo: 'critico', descripcion: 'Falta aplicación sistemática de análisis de riesgo pre-tarea', fecha: '2026-03-01', autor: 'Admin Demo', recomendacion: 'Reforzar protocolo AST con sesión práctica en terreno' },
  ],
  notificaciones: [
    { id: 'not-001', mensaje: 'Nueva encuesta PRE disponible para completar', tipo: 'encuesta', fecha: '2026-03-20', leida: false },
    { id: 'not-002', mensaje: 'Javier Rodríguez completó observación en terreno', tipo: 'observacion', fecha: '2026-03-19', leida: false },
    { id: 'not-003', mensaje: 'Programa "Liderazgo Seguro 2026" tiene nuevos hallazgos', tipo: 'hallazgo', fecha: '2026-03-18', leida: true },
  ],
  actividades: [
    {
      id: 'act-001',
      nombre: 'Encuesta de Clima Laboral Q1 2026',
      tipo: 'ms_forms',
      programa_id: 'prog-001',
      programa_nombre: 'Liderazgo Seguro 2026',
      enlace: 'https://forms.office.com/Pages/ResponsePage.aspx?id=ejemplo-clima-laboral',
      descripcion: 'Por favor completa esta encuesta de clima laboral. Tus respuestas son anónimas y nos ayudarán a mejorar el ambiente de trabajo.',
      fecha_limite: '2026-04-15',
      estado: 'activa',
      asignacion_tipo: 'programa_completo',
      fecha_creacion: '2026-03-10',
      asignaciones: [
        { participante_id: 'usr-003', participante_nombre: 'Laura Martínez', cargo: 'Supervisora Planta', completada: true, fecha_completada: '2026-03-15' },
        { participante_id: 'usr-004', participante_nombre: 'Roberto Díaz', cargo: 'Jefe de Turno', completada: false, fecha_completada: null },
      ]
    },
    {
      id: 'act-002',
      nombre: 'Material de Lectura: Liderazgo en Seguridad',
      tipo: 'contenido',
      programa_id: 'prog-001',
      programa_nombre: 'Liderazgo Seguro 2026',
      enlace: 'https://drive.google.com/file/d/ejemplo-material-lectura/view',
      descripcion: 'Lee este documento sobre prácticas de liderazgo en seguridad. Es fundamental para la próxima sesión del programa.',
      fecha_limite: '2026-04-01',
      estado: 'activa',
      asignacion_tipo: 'programa_completo',
      fecha_creacion: '2026-03-08',
      asignaciones: [
        { participante_id: 'usr-003', participante_nombre: 'Laura Martínez', cargo: 'Supervisora Planta', completada: true, fecha_completada: '2026-03-12' },
        { participante_id: 'usr-004', participante_nombre: 'Roberto Díaz', cargo: 'Jefe de Turno', completada: true, fecha_completada: '2026-03-14' },
      ]
    },
    {
      id: 'act-003',
      nombre: 'Evaluación de Conocimientos (Google Forms)',
      tipo: 'enlace_externo',
      programa_id: 'prog-002',
      programa_nombre: 'Servicio al Cliente Retail',
      enlace: 'https://docs.google.com/forms/d/e/ejemplo-evaluacion/viewform',
      descripcion: 'Completa esta evaluación de conocimientos sobre atención al cliente. Tienes 30 minutos.',
      fecha_limite: '2026-04-10',
      estado: 'activa',
      asignacion_tipo: 'programa_completo',
      fecha_creacion: '2026-03-15',
      asignaciones: [
        { participante_id: 'usr-006', participante_nombre: 'Diego Fuentes', cargo: 'Vendedor Senior', completada: false, fecha_completada: null },
      ]
    },
    {
      id: 'act-004',
      nombre: 'Tarea: Plan de Acción Individual',
      tipo: 'tarea',
      programa_id: 'prog-001',
      programa_nombre: 'Liderazgo Seguro 2026',
      enlace: '',
      descripcion: 'Elabora un plan de acción individual con al menos 3 compromisos de mejora basados en tu feedback recibido. Envíalo a tu jefatura directa.',
      fecha_limite: '2026-04-20',
      estado: 'activa',
      asignacion_tipo: 'seleccion',
      fecha_creacion: '2026-03-18',
      asignaciones: [
        { participante_id: 'usr-003', participante_nombre: 'Laura Martínez', cargo: 'Supervisora Planta', completada: false, fecha_completada: null },
      ]
    },
    {
      id: 'act-005',
      nombre: 'Encuesta de Satisfacción del Programa',
      tipo: 'ms_forms',
      programa_id: 'prog-003',
      programa_nombre: 'Gestión de Riesgos Operacionales',
      enlace: 'https://forms.office.com/Pages/ResponsePage.aspx?id=ejemplo-satisfaccion',
      descripcion: 'Ayúdanos a mejorar. Completa esta breve encuesta sobre tu experiencia en el programa.',
      fecha_limite: null,
      estado: 'borrador',
      asignacion_tipo: 'programa_completo',
      fecha_creacion: '2026-03-20',
      asignaciones: [
        { participante_id: 'usr-007', participante_nombre: 'Sofía Vargas', cargo: 'Analista de Operaciones', completada: false, fecha_completada: null },
      ]
    },
  ],
  reportesObservacion: [
    {
      id: 'rep-001',
      programa_id: 'prog-001',
      programa_nombre: 'Liderazgo Seguro 2026',
      categoria: 'encuesta',
      tipo: 'encuesta',
      titulo: 'Encuesta PRE - Pregunta 3 tiene opciones incorrectas',
      comentario: 'En la Encuesta PRE de Liderazgo Seguro, la pregunta 3 sobre "Gestión de Riesgos Críticos" muestra las opciones de respuesta invertidas. La escala va de 5 a 1 en vez de 1 a 5, lo que confunde a los participantes.',
      fecha: '2026-03-18',
      autor_id: 'usr-003',
      autor_nombre: 'Laura Martínez',
      estado_gestion: 'en_revision',
      elemento_id: 'enc-001',
      evidencias: [
        { id: 'ev-001', nombre: 'captura-pregunta3.jpg', url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop', tipo: 'image/jpeg' },
      ],
      historial: [
        { estado_nuevo: 'en_revision', admin_nombre: 'Admin Demo', fecha: '2026-03-19', comentario: 'Confirmado el error. Se corregirá la escala de la pregunta 3.' }
      ]
    },
    {
      id: 'rep-002',
      programa_id: 'prog-001',
      programa_nombre: 'Liderazgo Seguro 2026',
      categoria: 'actividad',
      tipo: 'actividad',
      titulo: 'Enlace de MS Forms no abre - Encuesta Clima Laboral',
      comentario: 'Al hacer clic en "Abrir Enlace" de la actividad "Encuesta de Clima Laboral Q1 2026", el enlace redirige a una página de error 404. No puedo completar la encuesta.',
      fecha: '2026-03-15',
      autor_id: 'usr-004',
      autor_nombre: 'Roberto Díaz',
      estado_gestion: 'en_proceso',
      elemento_id: 'act-001',
      evidencias: [
        { id: 'ev-003', nombre: 'error-404-forms.jpg', url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop', tipo: 'image/jpeg' },
      ],
      historial: [
        { estado_nuevo: 'en_revision', admin_nombre: 'Admin Demo', fecha: '2026-03-16', comentario: 'Se verificó el enlace. Efectivamente está caído.' },
        { estado_nuevo: 'en_proceso', admin_nombre: 'Admin Demo', fecha: '2026-03-17', comentario: 'Se contactó al equipo de IT para regenerar el enlace de MS Forms. Plazo estimado: 24 horas.' }
      ]
    },
    {
      id: 'rep-003',
      programa_id: 'prog-001',
      programa_nombre: 'Liderazgo Seguro 2026',
      categoria: 'contenido',
      tipo: 'contenido',
      titulo: 'Material de lectura no se puede descargar',
      comentario: 'El documento "Liderazgo en Seguridad" asignado como material de lectura no se puede abrir. Al hacer clic en el enlace de Google Drive aparece un mensaje de "Necesitas permiso para acceder". Creo que falta compartir el archivo.',
      fecha: '2026-03-12',
      autor_id: 'usr-003',
      autor_nombre: 'Laura Martínez',
      estado_gestion: 'resuelta',
      elemento_id: 'act-002',
      evidencias: [
        { id: 'ev-004', nombre: 'permiso-denegado.jpg', url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop', tipo: 'image/jpeg' },
      ],
      historial: [
        { estado_nuevo: 'en_revision', admin_nombre: 'Admin Demo', fecha: '2026-03-13', comentario: 'Se verificó. El archivo no estaba compartido correctamente.' },
        { estado_nuevo: 'resuelta', admin_nombre: 'Admin Demo', fecha: '2026-03-14', comentario: 'Se actualizaron los permisos del archivo en Google Drive. Ya es accesible para todos los participantes.' }
      ]
    },
    {
      id: 'rep-004',
      programa_id: 'prog-003',
      programa_nombre: 'Gestión de Riesgos Operacionales',
      categoria: 'plataforma',
      tipo: 'plataforma',
      titulo: 'La página de "Mi Progreso" no carga el gráfico',
      comentario: 'Al entrar a la sección "Mi Progreso", el gráfico de comparación PRE vs POST se queda cargando indefinidamente. Ya completé ambas encuestas pero no puedo ver mis resultados.',
      fecha: '2026-03-10',
      autor_id: 'usr-007',
      autor_nombre: 'Sofía Vargas',
      estado_gestion: 'pendiente',
      evidencias: [
        { id: 'ev-005', nombre: 'grafico-cargando.jpg', url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop', tipo: 'image/jpeg' },
        { id: 'ev-006', nombre: 'consola-error.jpg', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop', tipo: 'image/jpeg' },
      ],
      historial: []
    },
    {
      id: 'rep-005',
      programa_id: 'prog-002',
      programa_nombre: 'Servicio al Cliente Retail',
      categoria: 'encuesta',
      tipo: 'encuesta',
      titulo: 'Encuesta PRE tiene preguntas duplicadas',
      comentario: 'En la Encuesta PRE de Servicio al Cliente, las preguntas 4 y 7 son exactamente iguales. Ambas dicen "¿Con qué frecuencia aplica escucha activa?". Creo que la pregunta 7 debería ser diferente.',
      fecha: '2026-03-08',
      autor_id: 'usr-006',
      autor_nombre: 'Diego Fuentes',
      estado_gestion: 'no_resuelta',
      elemento_id: 'enc-003',
      evidencias: [],
      historial: [
        { estado_nuevo: 'en_revision', admin_nombre: 'Admin Demo', fecha: '2026-03-09', comentario: 'Se revisará el diseño de la encuesta.' },
        { estado_nuevo: 'no_resuelta', admin_nombre: 'Admin Demo', fecha: '2026-03-11', comentario: 'Las preguntas son intencionalmente similares para validación de consistencia. No es un error. Se cerrará sin acción.' }
      ]
    },
  ],
};

// ============================================
// PERSISTENCIA EN localStorage
// ============================================
const _MOCK_DATA_DEFAULTS = JSON.parse(JSON.stringify(MOCK_DATA));

// Cargar datos guardados del navegador (si existen)
(function _cargarDatos() {
  try {
    var saved = localStorage.getItem('mso_mock_data');
    if (saved) {
      var parsed = JSON.parse(saved);
      Object.keys(parsed).forEach(function(key) {
        MOCK_DATA[key] = parsed[key];
      });
      console.log('%c[MSO Demo] Datos cargados desde localStorage', 'color: #4CAF50; font-weight: bold;');
    }
  } catch(e) {
    console.warn('[MSO Demo] Error cargando datos guardados:', e);
  }
})();

function _guardarDatos() {
  try {
    localStorage.setItem('mso_mock_data', JSON.stringify(MOCK_DATA));
  } catch(e) {
    console.warn('[MSO Demo] Error guardando datos:', e);
  }
}

function resetearDatosDemo() {
  localStorage.removeItem('mso_mock_data');
  Object.keys(_MOCK_DATA_DEFAULTS).forEach(function(key) {
    MOCK_DATA[key] = JSON.parse(JSON.stringify(_MOCK_DATA_DEFAULTS[key]));
  });
  // Reset _participantes_programa to defaults
  MOCK_DATA._participantes_programa = JSON.parse(JSON.stringify(_PARTICIPANTES_DEFAULTS));
  console.log('%c[MSO Demo] Datos reseteados a valores originales', 'color: #FF5722; font-weight: bold;');
  location.reload();
}

// Association table: participants per program (starts empty for new programs)
// Pre-seed prog-001 with existing users for demo
MOCK_DATA._participantes_programa = {
  'prog-001': [
    { usuario_id: 'usr-002', rol_programa: 'lider', lider_id: null },
    { usuario_id: 'usr-003', rol_programa: 'colaborador', lider_id: 'usr-002' },
    { usuario_id: 'usr-004', rol_programa: 'colaborador', lider_id: 'usr-002' },
  ],
  'prog-002': [
    { usuario_id: 'usr-005', rol_programa: 'lider', lider_id: null },
    { usuario_id: 'usr-006', rol_programa: 'colaborador', lider_id: 'usr-005' },
  ],
  'prog-003': [
    { usuario_id: 'usr-007', rol_programa: 'colaborador', lider_id: null },
  ],
  'prog-004': []
};

// Guardar defaults de _participantes_programa y cargar desde localStorage
const _PARTICIPANTES_DEFAULTS = JSON.parse(JSON.stringify(MOCK_DATA._participantes_programa));
(function _cargarParticipantes() {
  try {
    var saved = localStorage.getItem('mso_mock_participantes');
    if (saved) {
      MOCK_DATA._participantes_programa = JSON.parse(saved);
    }
  } catch(e) {}
})();

// Extender _guardarDatos para incluir _participantes_programa
var _guardarDatosOriginal = _guardarDatos;
_guardarDatos = function() {
  _guardarDatosOriginal();
  try {
    localStorage.setItem('mso_mock_participantes', JSON.stringify(MOCK_DATA._participantes_programa));
  } catch(e) {}
};

const backendFunctions = {
  // Auth
  loginUsuario: (email, password) => {
    if (email === 'admin@mso.cl' && password === '123456') {
      return { success: true, data: { token: 'mock-token-admin', usuario: MOCK_DATA.usuarios[0] } };
    }
    if (email === 'jrodriguez@losandes.cl' && password === '123456') {
      return { success: true, data: { token: 'mock-token-jefatura', usuario: MOCK_DATA.usuarios[1] } };
    }
    if (email === 'lmartinez@losandes.cl' && password === '123456') {
      return { success: true, data: { token: 'mock-token-participante', usuario: MOCK_DATA.usuarios[2] } };
    }
    // Buscar en usuarios creados dinamicamente
    var usr = MOCK_DATA.usuarios.find(function(u) {
      return u.email === email && u.estado === 'Activo';
    });
    if (usr && (password === '123456' || password === (usr.password || '123456'))) {
      var tokenRol = usr.rol === 'admin' ? 'admin' : usr.rol === 'jefatura' ? 'jefatura' : 'participante';
      return { success: true, data: { token: 'mock-token-' + tokenRol + '-' + usr.id, usuario: usr } };
    }
    return { success: false, error: 'Credenciales inválidas. Verifica tu correo y contraseña.' };
  },
  cerrarSesion: () => ({ success: true }),
  registrarUsuario: (datos) => {
    var newId = 'usr-' + Date.now();
    var nuevo = { id: newId, nombre: datos.nombre || datos.nombre_completo || '', email: datos.email || '', rol: datos.rol || 'participante', cargo: datos.cargo || '', cliente_id: datos.cliente_id || null, estado: 'Activo' };
    MOCK_DATA.usuarios.push(nuevo);
    _guardarDatos();
    return { success: true, data: { id: newId } };
  },
  obtenerClientesRegistro: () => MOCK_DATA.clientes.filter(c => c.estado === 'Activo').map(c => ({ id: c.id, nombre: c.nombre })),

  // Clientes
  listarClientes: () => ({ success: true, data: MOCK_DATA.clientes }),
  crearCliente: (token, datos) => {
    var newId = 'cli-' + Date.now();
    var nuevo = { id: newId, nombre: datos.nombre || '', razon_social: datos.razon_social || '', rubro: datos.rubro || '', pais: datos.pais || 'Chile', contacto_nombre: datos.contacto_nombre || '', contacto_email: datos.contacto_email || '', estado: 'Activo' };
    MOCK_DATA.clientes.push(nuevo);
    _guardarDatos();
    return { success: true, data: { id: newId } };
  },
  actualizarCliente: (token, id, datos) => {
    var cli = MOCK_DATA.clientes.find(c => c.id === id);
    if (cli) Object.assign(cli, datos);
    _guardarDatos();
    return { success: true };
  },
  desactivarCliente: (token, id) => {
    var cli = MOCK_DATA.clientes.find(c => c.id === id);
    if (cli) cli.estado = cli.estado === 'Activo' ? 'Inactivo' : 'Activo';
    _guardarDatos();
    return { success: true };
  },
  eliminarCliente: (token, id) => {
    MOCK_DATA.clientes = MOCK_DATA.clientes.filter(c => c.id !== id);
    _guardarDatos();
    return { success: true };
  },

  // Programas
  listarProgramas: () => ({ success: true, data: MOCK_DATA.programas }),
  listarProgramasDashboard: (token, userId) => {
    // Admin ve todos los programas
    if (token === 'mock-token-admin') {
      return { success: true, data: MOCK_DATA.programas };
    }
    // Si no hay userId, intentar mapeo de tokens hardcodeados
    if (!userId) {
      if (token === 'mock-token-jefatura') userId = 'usr-002';
      else if (token === 'mock-token-participante') userId = 'usr-003';
    }
    // Si tenemos userId, filtrar programas donde esta asociado
    if (userId && MOCK_DATA._participantes_programa) {
      var misProgramas = [];
      Object.keys(MOCK_DATA._participantes_programa).forEach(function(progId) {
        var asociados = MOCK_DATA._participantes_programa[progId] || [];
        var estaAsociado = asociados.some(function(a) { return a.usuario_id === userId; });
        if (estaAsociado) {
          var prog = MOCK_DATA.programas.find(function(p) { return p.id === progId; });
          if (prog) misProgramas.push(prog);
        }
      });
      return { success: true, data: misProgramas };
    }
    return { success: true, data: MOCK_DATA.programas };
  },
  crearPrograma: (token, datos) => {
    var newId = 'prog-' + Date.now();
    var cli = MOCK_DATA.clientes.find(c => c.id === datos.cliente_id);
    var nuevo = { id: newId, nombre: datos.nombre || '', cliente_id: datos.cliente_id || '', cliente_nombre: cli ? cli.nombre : '', tipo: datos.tipo || 'piloto', estado: 'diseno', objetivo: datos.objetivo || '', fecha_inicio: datos.fecha_inicio || '', fecha_termino: datos.fecha_termino || '', fecha_medicion_pre: datos.fecha_medicion_pre || '', fecha_medicion_post: datos.fecha_medicion_post || '' };
    MOCK_DATA.programas.push(nuevo);
    _guardarDatos();
    return { success: true, data: { id: newId, programaId: newId } };
  },
  actualizarPrograma: (token, id, datos) => {
    var prog = MOCK_DATA.programas.find(p => p.id === id);
    if (prog) Object.assign(prog, datos);
    _guardarDatos();
    return { success: true };
  },
  activarPrograma: (token, id) => {
    var prog = MOCK_DATA.programas.find(p => p.id === id);
    if (prog) prog.estado = 'activo';
    _guardarDatos();
    return { success: true };
  },
  eliminarPrograma: (token, id) => {
    MOCK_DATA.programas = MOCK_DATA.programas.filter(p => p.id !== id);
    // Limpiar participantes asociados
    if (MOCK_DATA._participantes_programa && MOCK_DATA._participantes_programa[id]) {
      delete MOCK_DATA._participantes_programa[id];
    }
    _guardarDatos();
    return { success: true };
  },
  obtenerPrograma: (token, id) => {
    const prog = MOCK_DATA.programas.find(p => p.id === id) || MOCK_DATA.programas[0];
    return {
      success: true,
      data: {
        ...prog,
        conductas: MOCK_DATA.conductas.filter(c => c.programa_id === prog.id),
        participantes: MOCK_DATA.usuarios.filter(u => u.cliente_id === prog.cliente_id && u.rol !== 'admin').map(u => ({
          usuario_id: u.id, nombre: u.nombre, email: u.email, rol_programa: u.rol
        }))
      }
    };
  },
  obtenerUsuariosDisponibles: (token, progId) => {
    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};
    var asociados = (MOCK_DATA._participantes_programa[progId] || []).map(a => a.usuario_id);
    var disponibles = MOCK_DATA.usuarios.filter(u => u.rol !== 'admin' && asociados.indexOf(u.id) === -1);
    return { success: true, data: disponibles };
  },
  asociarParticipantes: (token, progId, datos) => {
    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};
    if (!MOCK_DATA._participantes_programa[progId]) MOCK_DATA._participantes_programa[progId] = [];
    // datos puede ser {usuario_id, rol_programa} o un array
    var items = Array.isArray(datos) ? datos : [datos];
    items.forEach(d => {
      var uid = d.usuario_id || d.id;
      if (!uid) return;
      var exists = MOCK_DATA._participantes_programa[progId].find(a => a.usuario_id === uid);
      if (!exists) {
        MOCK_DATA._participantes_programa[progId].push({
          usuario_id: uid,
          rol_programa: d.rol_programa || d.rol || 'lider',
          lider_id: d.lider_id || null,
          colaborador_id: d.colaborador_id || null
        });
      }
    });
    _guardarDatos();
    return { success: true, data: { count: items.length } };
  },
  desasociarParticipante: (token, progId, userId) => {
    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};
    if (MOCK_DATA._participantes_programa[progId]) {
      MOCK_DATA._participantes_programa[progId] = MOCK_DATA._participantes_programa[progId].filter(a => a.usuario_id !== userId);
    }
    _guardarDatos();
    return { success: true };
  },

  // Conductas
  listarConductas: () => ({ success: true, data: MOCK_DATA.conductas }),
  crearConducta: (token, datos) => {
    var newId = 'cond-' + Date.now();
    var nuevo = { id: newId, nombre: datos.nombre || '', descripcion: datos.descripcion || '', programa_id: datos.programa_id || '', prioridad: datos.prioridad || 1, estado: 'activa' };
    MOCK_DATA.conductas.push(nuevo);
    _guardarDatos();
    return { success: true, data: { id: newId } };
  },
  actualizarConducta: (token, id, datos) => {
    var cond = MOCK_DATA.conductas.find(c => c.id === id);
    if (cond) Object.assign(cond, datos);
    _guardarDatos();
    return { success: true };
  },
  desactivarConducta: (token, id) => {
    MOCK_DATA.conductas = MOCK_DATA.conductas.filter(c => c.id !== id);
    _guardarDatos();
    return { success: true };
  },

  // Encuestas
  listarEncuestas: (token, progId) => ({ success: true, data: MOCK_DATA.encuestas.filter(e => !progId || e.programa_id === progId) }),
  crearEncuesta: (token, datos) => {
    var newId = 'enc-' + Date.now();
    var prog = MOCK_DATA.programas.find(p => p.id === datos.programa_id);
    var nuevo = { id: newId, nombre: datos.nombre || '', programa_id: datos.programa_id || '', programa_nombre: prog ? prog.nombre : '', tipo: datos.tipo || 'pre', tipo_cuestionario: datos.tipo_cuestionario || 'autoevaluacion', estado: 'borrador', instrucciones: datos.instrucciones || '', fecha_cierre: datos.fecha_cierre || '', fecha_creacion: new Date().toISOString().split('T')[0], total_respuestas: 0, total_esperadas: 0, num_preguntas: 0, preguntas: [] };
    MOCK_DATA.encuestas.push(nuevo);
    _guardarDatos();
    return { success: true, data: { id: newId } };
  },
  actualizarEncuesta: (token, id, datos) => {
    var enc = MOCK_DATA.encuestas.find(e => e.id === id);
    if (enc) Object.assign(enc, datos);
    _guardarDatos();
    return { success: true };
  },
  obtenerEncuesta: (token, id) => ({
    success: true,
    data: {
      ...(MOCK_DATA.encuestas.find(e => e.id === id) || MOCK_DATA.encuestas[0]),
      preguntas: [
        { id: 'preg-1', texto: '¿Con qué frecuencia aplica esta conducta?', tipo: 'escala', conducta_nombre: 'Liderazgo Visible en Terreno' },
        { id: 'preg-2', texto: '¿Qué tan efectiva considera esta práctica?', tipo: 'escala', conducta_nombre: 'Retroalimentación Positiva' },
      ]
    }
  }),
  listarEncuestasParticipante: (token, userId) => {
    // Buscar programas donde el usuario esta asociado
    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};
    var misProgramaIds = [];
    // Buscar por userId directo o por email
    var usr = userId ? MOCK_DATA.usuarios.find(function(u) { return u.id === userId; }) : null;
    var userEmail = usr ? usr.email : null;

    Object.keys(MOCK_DATA._participantes_programa).forEach(function(progId) {
      var asociados = MOCK_DATA._participantes_programa[progId] || [];
      var esta = asociados.some(function(a) {
        if (a.usuario_id === userId) return true;
        if (userEmail) {
          var u2 = MOCK_DATA.usuarios.find(function(x) { return x.id === a.usuario_id; });
          return u2 && u2.email === userEmail;
        }
        return false;
      });
      if (esta) misProgramaIds.push(progId);
    });

    // Filtrar encuestas activas de esos programas
    var encuestas = MOCK_DATA.encuestas.filter(function(e) {
      return misProgramaIds.indexOf(e.programa_id) !== -1 && e.estado === 'activa';
    }).map(function(e) {
      return {
        id: e.id,
        nombre: e.nombre,
        programa_nombre: e.programa_nombre || '',
        tipo: e.tipo || 'pre',
        tipo_cuestionario: e.tipo_cuestionario || 'autoevaluacion',
        estado: 'pendiente',
        fecha_limite: e.fecha_cierre || ''
      };
    });

    return { success: true, data: encuestas };
  },
  enviarRespuestaEncuesta: () => ({ success: true }),

  // Checklists
  listarChecklists: () => ({ success: true, data: MOCK_DATA.checklists }),
  crearChecklist: (token, datos) => {
    var newId = 'chk-' + Date.now();
    var prog = MOCK_DATA.programas.find(p => p.id === datos.programa_id);
    var nuevo = { id: newId, nombre: datos.nombre || '', programa_id: datos.programa_id || '', programa_nombre: prog ? prog.nombre : '', conductas: datos.conductas || 0, estado: 'borrador', observaciones_realizadas: 0 };
    MOCK_DATA.checklists.push(nuevo);
    _guardarDatos();
    return { success: true, data: { id: newId } };
  },
  activarChecklist: (token, id) => {
    var chk = MOCK_DATA.checklists.find(c => c.id === id);
    if (chk) chk.estado = 'activa';
    _guardarDatos();
    return { success: true };
  },
  cerrarChecklist: (token, id) => {
    var chk = MOCK_DATA.checklists.find(c => c.id === id);
    if (chk) chk.estado = 'cerrada';
    _guardarDatos();
    return { success: true };
  },
  listarObservacionesJefatura: () => ({
    success: true,
    data: [
      { id: 'obs-001', fecha: '2026-03-15', programa_nombre: 'Liderazgo Seguro 2026', participante_nombre: 'Laura Martínez', checklist_nombre: 'Checklist Observación Terreno', puntaje: 4.2, estado: 'completada' },
      { id: 'obs-002', fecha: '2026-03-10', programa_nombre: 'Liderazgo Seguro 2026', participante_nombre: 'Roberto Díaz', checklist_nombre: 'Checklist Observación Terreno', puntaje: 3.5, estado: 'completada' },
    ]
  }),
  guardarObservacion: () => ({ success: true }),

  // Usuarios
  listarUsuarios: () => ({ success: true, data: MOCK_DATA.usuarios }),
  crearUsuario: (token, datos) => {
    var newId = 'usr-' + Date.now();
    var nuevo = { id: newId, nombre: datos.nombre || datos.nombre_completo || '', email: datos.email || '', rol: datos.rol || 'participante', cargo: datos.cargo || '', cliente_id: datos.cliente_id || null, estado: 'Activo' };
    MOCK_DATA.usuarios.push(nuevo);
    _guardarDatos();
    return { success: true, data: { id: newId } };
  },
  actualizarUsuario: (token, id, datos) => {
    var usr = MOCK_DATA.usuarios.find(u => u.id === id);
    if (usr) Object.assign(usr, datos);
    _guardarDatos();
    return { success: true };
  },
  cambiarEstadoUsuario: (token, id) => {
    var usr = MOCK_DATA.usuarios.find(u => u.id === id);
    if (usr) usr.estado = usr.estado === 'Activo' ? 'Inactivo' : 'Activo';
    _guardarDatos();
    return { success: true };
  },

  // Hallazgos
  listarHallazgos: (token, progId) => ({ success: true, data: MOCK_DATA.hallazgos.filter(h => !progId || h.programa_id === progId) }),
  crearHallazgo: (token, datos) => {
    var newId = 'hall-' + Date.now();
    var nuevo = Object.assign({ id: newId, fecha: new Date().toISOString().split('T')[0], recomendaciones: [] }, datos);
    MOCK_DATA.hallazgos.push(nuevo);
    _guardarDatos();
    return { success: true, data: { id: newId } };
  },
  actualizarHallazgo: (token, id, datos) => {
    var h = MOCK_DATA.hallazgos.find(x => x.id === id);
    if (h) Object.assign(h, datos);
    _guardarDatos();
    return { success: true };
  },

  // Dashboard
  obtenerKPIsPrograma: (token, progId) => {
    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};
    var totalParts = 0;
    if (progId) {
      totalParts = (MOCK_DATA._participantes_programa[progId] || []).length;
    } else {
      Object.keys(MOCK_DATA._participantes_programa).forEach(function(k) {
        totalParts += MOCK_DATA._participantes_programa[k].length;
      });
    }
    return {
      success: true,
      data: {
        totalParticipantes: totalParts,
        observacionesRealizadas: MOCK_DATA.reportesObservacion.length,
        tasaRespuestaPre: totalParts > 0 ? 80 : 0,
        tasaRespuestaPost: totalParts > 0 ? 45 : 0,
        nivelAplicacion: totalParts > 0 ? 68 : 0
      }
    };
  },
  obtenerComparacionPrePost: () => ({
    success: true,
    data: [
      { conducta_nombre: 'Liderazgo Visible', promedioPre: 2.8, promedioPost: 4.1, variacion: 46 },
      { conducta_nombre: 'Retroalimentación', promedioPre: 2.3, promedioPost: 3.8, variacion: 65 },
      { conducta_nombre: 'Gestión Riesgos', promedioPre: 3.1, promedioPost: 3.9, variacion: 26 },
      { conducta_nombre: 'Comunicación', promedioPre: 3.5, promedioPost: 4.3, variacion: 23 },
    ]
  }),
  obtenerMapaCalor: () => ({
    success: true,
    data: [
      { conducta_nombre: 'Liderazgo Visible en Terreno', nivel: 82, color: 'verde' },
      { conducta_nombre: 'Retroalimentación Positiva', nivel: 58, color: 'amarillo' },
      { conducta_nombre: 'Gestión de Riesgos Críticos', nivel: 35, color: 'rojo' },
      { conducta_nombre: 'Comunicación Asertiva', nivel: 71, color: 'verde' },
    ]
  }),
  obtenerResumenPorEquipo: () => {
    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};
    var equipos = [];
    MOCK_DATA.programas.forEach(function(prog) {
      var asociados = MOCK_DATA._participantes_programa[prog.id] || [];
      if (asociados.length > 0) {
        equipos.push({
          equipo: prog.nombre,
          area: prog.cliente_nombre,
          numParticipantes: asociados.length,
          nivelAplicacion: Math.round(Math.random() * 40 + 40)
        });
      }
    });
    return { success: true, data: equipos };
  },
  obtenerMiProgreso: () => ({
    success: true,
    data: {
      comparacion: [
        { conducta_nombre: 'Liderazgo Visible', promedioPre: 3.0, promedioPost: 4.2 },
        { conducta_nombre: 'Retroalimentación', promedioPre: 2.5, promedioPost: 4.0 },
        { conducta_nombre: 'Gestión Riesgos', promedioPre: 3.2, promedioPost: 3.8 },
        { conducta_nombre: 'Comunicación', promedioPre: 3.8, promedioPost: 4.5 },
      ],
      feedback: [
        { fecha: '2026-03-10', conducta_nombre: 'Liderazgo Visible', fortaleza: 'Excelente presencia en terreno', aspecto_reforzar: 'Documentar observaciones', recomendacion: 'Llevar libreta de campo' },
        { fecha: '2026-02-25', conducta_nombre: 'Retroalimentación', fortaleza: 'Buen tono al comunicar', aspecto_reforzar: 'Frecuencia del feedback', recomendacion: 'Establecer rutina diaria de reconocimiento' },
      ]
    }
  }),

  // Feedback
  listarFeedbackJefatura: () => ({
    success: true,
    data: [
      { id: 'fb-001', fecha: '2026-03-15', participante_nombre: 'Laura Martínez', conducta_nombre: 'Liderazgo Visible', fortaleza: 'Excelente presencia', aspecto_reforzar: 'Documentación', recomendacion: 'Usar libreta', estado: 'enviado' },
      { id: 'fb-002', fecha: '2026-03-10', participante_nombre: 'Roberto Díaz', conducta_nombre: 'Gestión Riesgos', fortaleza: 'Buena identificación', aspecto_reforzar: 'Seguimiento', recomendacion: 'Check diario', estado: 'borrador' },
    ]
  }),
  crearFeedback: (token, datos) => {
    if (!MOCK_DATA.feedback) MOCK_DATA.feedback = [];
    var newId = 'fb-' + Date.now();
    var nuevo = Object.assign({ id: newId, fecha: new Date().toISOString().split('T')[0], estado: 'borrador' }, datos);
    MOCK_DATA.feedback.push(nuevo);
    _guardarDatos();
    return { success: true, data: { id: newId } };
  },
  enviarFeedback: (token, id) => {
    if (!MOCK_DATA.feedback) MOCK_DATA.feedback = [];
    var fb = MOCK_DATA.feedback.find(f => f.id === id);
    if (fb) fb.estado = 'enviado';
    _guardarDatos();
    return { success: true };
  },
  listarFeedbackRecibido: () => ({
    success: true,
    data: [
      { id: 'fb-001', fecha: '2026-03-15', jefatura_nombre: 'Javier Rodríguez', conducta_nombre: 'Liderazgo Visible', fortaleza: 'Excelente presencia en terreno', aspecto_reforzar: 'Documentar observaciones', recomendacion: 'Llevar libreta de campo' },
    ]
  }),
  listarMiEquipo: () => ({
    success: true,
    data: [
      { id: 'usr-003', nombre: 'Laura Martínez', email: 'lmartinez@losandes.cl', cargo: 'Supervisora Planta', nivelAplicacion: 75, ultimaObservacion: '2026-03-15' },
      { id: 'usr-004', nombre: 'Roberto Díaz', email: 'rdiaz@losandes.cl', cargo: 'Jefe de Turno', nivelAplicacion: 52, ultimaObservacion: '2026-03-10' },
    ]
  }),

  // Funciones adicionales para vistas existentes
  listarParticipantesPrograma: (token, progId) => {
    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};
    var asociados = MOCK_DATA._participantes_programa[progId] || [];
    return {
      success: true,
      data: asociados.map(a => {
        var u = MOCK_DATA.usuarios.find(x => x.id === a.usuario_id);
        if (!u) return null;
        return { id: u.id, nombre: u.nombre, email: u.email, cargo: u.cargo, rol_programa: a.rol_programa || u.rol };
      }).filter(Boolean)
    };
  },
  listarObservaciones: () => ({ success: true, data: [] }),
  listarFeedbackEquipo: () => ({
    success: true,
    data: [
      { id: 'fb-eq-001', participante_id: 'usr-003', participante_nombre: 'Laura Martínez', fecha_feedback: '2026-03-15', fortaleza: 'Excelente presencia en terreno', aspecto_reforzar: 'Documentar observaciones', recomendacion: 'Usar libreta de campo' },
      { id: 'fb-eq-002', participante_id: 'usr-004', participante_nombre: 'Roberto Díaz', fecha_feedback: '2026-03-10', fortaleza: 'Buena identificación de riesgos', aspecto_reforzar: 'Seguimiento post-identificación', recomendacion: 'Implementar check diario' },
    ]
  }),
  registrarFeedback: (token, datos) => {
    if (!MOCK_DATA.feedback) MOCK_DATA.feedback = [];
    var newId = 'fb-' + Date.now();
    var nuevo = Object.assign({ id: newId, fecha: new Date().toISOString().split('T')[0], estado: 'borrador' }, datos);
    MOCK_DATA.feedback.push(nuevo);
    _guardarDatos();
    return { success: true, data: { id: newId } };
  },
  obtenerEncuestaPendiente: (token) => {
    // Buscar usuario por token
    var userId = null;
    if (token === 'mock-token-jefatura') userId = 'usr-002';
    else if (token === 'mock-token-participante') userId = 'usr-003';
    else {
      // Token dinamico: buscar usuario en sessionStorage no es posible, buscar por token
      var usr = MOCK_DATA.usuarios.find(function(u) {
        var expectedToken = 'mock-token-' + (u.rol === 'admin' ? 'admin' : u.rol === 'jefatura' ? 'jefatura' : 'participante') + '-' + u.id;
        return expectedToken === token;
      });
      if (usr) userId = usr.id;
    }

    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};
    var misProgramaIds = [];
    var userEmail = userId ? (MOCK_DATA.usuarios.find(function(u) { return u.id === userId; }) || {}).email : null;

    Object.keys(MOCK_DATA._participantes_programa).forEach(function(progId) {
      var asociados = MOCK_DATA._participantes_programa[progId] || [];
      var esta = asociados.some(function(a) {
        if (a.usuario_id === userId) return true;
        if (userEmail) {
          var u2 = MOCK_DATA.usuarios.find(function(x) { return x.id === a.usuario_id; });
          return u2 && u2.email === userEmail;
        }
        return false;
      });
      if (esta) misProgramaIds.push(progId);
    });

    var encuestas = MOCK_DATA.encuestas.filter(function(e) {
      return misProgramaIds.indexOf(e.programa_id) !== -1 && e.estado === 'activa';
    }).map(function(e) {
      // Siempre buscar nombre actual del programa
      var prog = MOCK_DATA.programas.find(function(p) { return p.id === e.programa_id; });
      return {
        id: e.id,
        nombre: e.nombre,
        programa_nombre: prog ? prog.nombre : (e.programa_nombre || ''),
        tipo: e.tipo || 'pre',
        estado: 'pendiente',
        fecha_cierre: e.fecha_cierre || ''
      };
    });

    return { success: true, data: encuestas };
  },
  obtenerEncuestaCompleta: (token, id) => {
    var enc = MOCK_DATA.encuestas.find(e => e.id === id);
    if (!enc) enc = { id: id, nombre: 'Encuesta', instrucciones: '', preguntas: [] };
    return {
      success: true,
      data: {
        id: enc.id,
        nombre: enc.nombre || 'Encuesta',
        instrucciones: enc.instrucciones || '',
        preguntas: enc.preguntas || []
      }
    };
  },
  enviarRespuestas: () => ({ success: true, data: { message: 'Respuestas registradas exitosamente.' } }),
  obtenerNotificaciones: () => ({
    success: true,
    data: MOCK_DATA.notificaciones.map(n => ({
      ...n,
      titulo: n.tipo === 'encuesta' ? 'Encuesta Pendiente' : n.tipo === 'observacion' ? 'Nueva Observación' : 'Actualización'
    }))
  }),
  marcarComoLeida: (token, id) => {
    var notif = MOCK_DATA.notificaciones.find(n => n.id === id);
    if (notif) notif.leida = true;
    _guardarDatos();
    return { success: true };
  },
  listarConductas: (token, progId) => ({
    success: true,
    data: MOCK_DATA.conductas.filter(c => !progId || c.programa_id === progId)
  }),
  crearRecomendacion: () => ({ success: true }),
  eliminarRecomendacion: () => ({ success: true }),

  // Notificaciones
  contarNotificacionesPendientes: () => ({
    success: true,
    data: { count: MOCK_DATA.notificaciones.filter(n => !n.leida).length }
  }),
  listarNotificaciones: () => ({
    success: true,
    data: MOCK_DATA.notificaciones
  }),
  marcarNotificacionLeida: (token, id) => {
    var notif = MOCK_DATA.notificaciones.find(n => n.id === id);
    if (notif) notif.leida = true;
    _guardarDatos();
    return { success: true };
  },

  // Reportes de Observación (jefatura + participante)
  listarReportesObservacion: () => ({ success: true, data: MOCK_DATA.reportesObservacion }),
  crearReporteObservacion: (token, payload) => {
    const newId = 'rep-' + Date.now();
    const prog = MOCK_DATA.programas.find(p => p.id === payload.programa_id);
    const newReporte = {
      id: newId,
      programa_id: payload.programa_id,
      programa_nombre: prog ? prog.nombre : 'Programa',
      tipo: payload.tipo,
      titulo: payload.titulo,
      comentario: payload.comentario,
      fecha: new Date().toISOString().split('T')[0],
      autor_id: 'usr-001',
      autor_nombre: 'Usuario Demo',
      estado_gestion: 'pendiente',
      evidencias: (payload.evidencias || []).map((ev, i) => ({
        id: 'ev-new-' + i,
        nombre: ev.nombre,
        url: ev.dataUrl,
        tipo: ev.tipo
      })),
      historial: []
    };
    MOCK_DATA.reportesObservacion.unshift(newReporte);
    _guardarDatos();
    return { success: true, data: { id: newId } };
  },
  actualizarReporteObservacion: (token, payload) => {
    var rep = MOCK_DATA.reportesObservacion.find(r => r.id === payload.id);
    if (rep) Object.assign(rep, payload);
    _guardarDatos();
    return { success: true };
  },

  // Gestión de Observaciones (admin)
  listarTodasObservacionesAdmin: () => ({ success: true, data: MOCK_DATA.reportesObservacion }),
  cambiarEstadoObservacion: (token, obsId, nuevoEstado, comentario) => {
    const obs = MOCK_DATA.reportesObservacion.find(o => o.id === obsId);
    if (obs) {
      obs.estado_gestion = nuevoEstado;
      if (!obs.historial) obs.historial = [];
      obs.historial.push({
        estado_nuevo: nuevoEstado,
        admin_nombre: 'Admin Demo',
        fecha: new Date().toISOString().split('T')[0],
        comentario: comentario
      });
    }
    _guardarDatos();
    return { success: true };
  },

  // Actividades (Admin)
  listarActividades: () => ({ success: true, data: MOCK_DATA.actividades }),
  crearActividad: (token, datos) => {
    const newId = 'act-' + Date.now();
    const prog = MOCK_DATA.programas.find(p => p.id === datos.programa_id);
    let asignaciones = [];

    if (datos.asignacion_tipo === 'programa_completo') {
      // Asignar a todos los participantes del programa
      asignaciones = MOCK_DATA.usuarios
        .filter(u => u.cliente_id === (prog ? prog.cliente_id : null) && u.rol === 'participante')
        .map(u => ({
          participante_id: u.id,
          participante_nombre: u.nombre,
          cargo: u.cargo,
          completada: false,
          fecha_completada: null
        }));
    } else if (datos.participantes_ids && datos.participantes_ids.length > 0) {
      asignaciones = datos.participantes_ids.map(pid => {
        const u = MOCK_DATA.usuarios.find(x => x.id === pid);
        return {
          participante_id: pid,
          participante_nombre: u ? u.nombre : 'Desconocido',
          cargo: u ? u.cargo : '',
          completada: false,
          fecha_completada: null
        };
      });
    }

    const newAct = {
      id: newId,
      nombre: datos.nombre,
      tipo: datos.tipo,
      programa_id: datos.programa_id,
      programa_nombre: prog ? prog.nombre : 'Programa',
      enlace: datos.enlace || '',
      descripcion: datos.descripcion || '',
      fecha_limite: datos.fecha_limite || null,
      estado: datos.estado || 'borrador',
      asignacion_tipo: datos.asignacion_tipo,
      fecha_creacion: new Date().toISOString().split('T')[0],
      asignaciones: asignaciones
    };

    MOCK_DATA.actividades.unshift(newAct);
    _guardarDatos();
    return { success: true, data: { id: newId } };
  },
  actualizarActividad: (token, id, datos) => {
    const act = MOCK_DATA.actividades.find(a => a.id === id);
    if (act) {
      Object.assign(act, {
        nombre: datos.nombre || act.nombre,
        tipo: datos.tipo || act.tipo,
        enlace: datos.enlace !== undefined ? datos.enlace : act.enlace,
        descripcion: datos.descripcion !== undefined ? datos.descripcion : act.descripcion,
        fecha_limite: datos.fecha_limite || act.fecha_limite,
        estado: datos.estado || act.estado,
      });
    }
    _guardarDatos();
    return { success: true };
  },

  // Actividades (Participante)
  listarMisActividades: (token) => {
    // Determinar el usuario según el token
    let userId = 'usr-003'; // default participante
    if (token === 'mock-token-jefatura') userId = 'usr-002';

    const misAct = [];
    MOCK_DATA.actividades.forEach(act => {
      if (act.estado !== 'activa') return;
      const asig = (act.asignaciones || []).find(a => a.participante_id === userId);
      if (asig) {
        misAct.push({
          id: act.id,
          nombre: act.nombre,
          tipo: act.tipo,
          programa_nombre: act.programa_nombre,
          enlace: act.enlace,
          descripcion: act.descripcion,
          fecha_limite: act.fecha_limite,
          completada: asig.completada,
          fecha_completada: asig.fecha_completada
        });
      }
    });
    return { success: true, data: misAct };
  },
  marcarActividadCompletada: (token, actId) => {
    let userId = 'usr-003';
    if (token === 'mock-token-jefatura') userId = 'usr-002';

    const act = MOCK_DATA.actividades.find(a => a.id === actId);
    if (act) {
      const asig = (act.asignaciones || []).find(a => a.participante_id === userId);
      if (asig) {
        asig.completada = true;
        asig.fecha_completada = new Date().toISOString().split('T')[0];
      }
    }
    _guardarDatos();
    return { success: true };
  },

  // Reportes
  generarReporte: () => ({
    success: true,
    data: { url: '#', mensaje: 'Reporte generado (modo demo)' }
  }),

  // ============================================
  // FUNCIONES V2.0 - Panel de Programa
  // ============================================
  obtenerPanelPrograma: (token, progId) => {
    const prog = MOCK_DATA.programas.find(p => p.id === progId);
    if (!prog) return { success: false, error: 'Programa no encontrado' };
    // Use association table instead of auto-assigning by cliente_id
    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};
    const asociados = MOCK_DATA._participantes_programa[progId] || [];
    const participantes = asociados.map(a => {
      var u = MOCK_DATA.usuarios.find(x => x.id === a.usuario_id);
      if (!u) return null;
      var lider = a.lider_id ? MOCK_DATA.usuarios.find(x => x.id === a.lider_id) : null;
      return {
        usuario_id: u.id, nombre: u.nombre, nombre_lider: u.nombre,
        email: u.email, email_lider: u.email, cargo: u.cargo,
        rol_programa: a.rol_programa || 'lider',
        lider_id: a.lider_id || null,
        lider_nombre: lider ? lider.nombre : null,
        colaborador_id: a.colaborador_id || null,
        password_visible: '123456', estado: u.estado
      };
    }).filter(Boolean);
    const competencias = MOCK_DATA.conductas
      .filter(c => c.programa_id === prog.id)
      .map(c => ({
        id: c.id, nombre: c.nombre, descripcion: c.descripcion || '',
        foco_desarrollo: c.foco_desarrollo || 'Aplicación práctica en terreno',
        nivel_1_texto: c.nivel_1_texto || 'Conoce el concepto',
        nivel_2_texto: c.nivel_2_texto || 'Aplica con guía',
        nivel_3_texto: c.nivel_3_texto || 'Aplica consistentemente',
        nivel_4_texto: c.nivel_4_texto || 'Es referente',
        interpretacion_nivel_1: c.interpretacion_nivel_1 || '',
        interpretacion_nivel_2: c.interpretacion_nivel_2 || '',
        interpretacion_nivel_3: c.interpretacion_nivel_3 || '',
        interpretacion_nivel_4: c.interpretacion_nivel_4 || '',
        prioridad: c.prioridad, orden: c.orden || c.prioridad
      }));
    return {
      success: true,
      data: {
        programa: prog,
        participantes: participantes,
        competencias: competencias,
        encuestas: MOCK_DATA.encuestas.filter(e => e.programa_id === prog.id),
        stats: {
          total_lideres: participantes.filter(p => p.rol_programa === 'lider').length,
          total_colaboradores: participantes.filter(p => p.rol_programa === 'colaborador').length,
          total_competencias: competencias.length,
          total_encuestas: MOCK_DATA.encuestas.filter(e => e.programa_id === prog.id).length
        }
      }
    };
  },

  obtenerResumenPrograma: (token, progId) => {
    const prog = MOCK_DATA.programas.find(p => p.id === progId);
    if (!prog) return { error: 'Programa no encontrado' };
    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};
    const asociados = MOCK_DATA._participantes_programa[progId] || [];
    const lideres = asociados.filter(a => a.rol_programa === 'lider').length;
    const colaboradores = asociados.filter(a => a.rol_programa === 'colaborador').length;
    // Build evaluaciones from actual participants
    const evaluaciones = asociados.map(function(a) {
      var u = MOCK_DATA.usuarios.find(x => x.id === a.usuario_id);
      if (!u) return null;
      var lider = a.lider_id ? MOCK_DATA.usuarios.find(x => x.id === a.lider_id) : null;
      return {
        nombre: u.nombre, rol: a.rol_programa,
        auto_pre: a.rol_programa === 'lider' ? 'completada' : 'no_aplica',
        co_pre: a.rol_programa === 'colaborador' ? 'pendiente' : 'no_aplica',
        auto_post: 'pendiente',
        co_post: 'pendiente',
        colaborador_nombre: lider ? lider.nombre : ''
      };
    }).filter(Boolean);
    // Return flat object (tab-resumen expects direct properties, not wrapped in data)
    return {
      totalLideres: lideres,
      totalColaboradores: colaboradores,
      autoevaluacionesCompletadas: lideres > 0 ? 1 : 0,
      coevaluacionesCompletadas: 0,
      observacionesRealizadas: MOCK_DATA.reportesObservacion.filter(r => r.programa_id === progId).length,
      evaluaciones: evaluaciones
    };
  },

  listarCompetencias: (token, progId) => ({
    success: true,
    data: MOCK_DATA.conductas.filter(c => !progId || c.programa_id === progId).map(c => ({
      id: c.id, nombre: c.nombre, descripcion: c.descripcion || '',
      foco_desarrollo: c.foco_desarrollo || 'Aplicación práctica',
      prioridad: c.prioridad, orden: c.orden || c.prioridad,
      nivel_1_texto: c.nivel_1_texto || 'Conoce',
      nivel_2_texto: c.nivel_2_texto || 'Aplica con guía',
      nivel_3_texto: c.nivel_3_texto || 'Aplica solo',
      nivel_4_texto: c.nivel_4_texto || 'Es referente',
      interpretacion_nivel_1: c.interpretacion_nivel_1 || '',
      interpretacion_nivel_2: c.interpretacion_nivel_2 || '',
      interpretacion_nivel_3: c.interpretacion_nivel_3 || '',
      interpretacion_nivel_4: c.interpretacion_nivel_4 || ''
    }))
  }),

  listarArchivosPrograma: (token, progId) => ({
    success: true,
    data: [
      { id: 'a1', nombre_archivo: 'Gantt Programa.xlsx', tipo: 'cronograma', mensaje: 'Cronograma actualizado', drive_url: '#', fecha_subida: '2026-03-01', subido_por_nombre: 'Admin Demo', visible_participantes: true },
      { id: 'a2', nombre_archivo: 'Material de Liderazgo.pdf', tipo: 'material', mensaje: 'Lectura obligatoria', drive_url: '#', fecha_subida: '2026-03-05', subido_por_nombre: 'Admin Demo', visible_participantes: true },
      { id: 'a3', nombre_archivo: 'Instructivo Práctica.pptx', tipo: 'instructivo', mensaje: 'Instrucciones para la práctica guiada', drive_url: '#', fecha_subida: '2026-03-10', subido_por_nombre: 'Admin Demo', visible_participantes: false }
    ]
  }),

  listarInformesGenerados: (token, progId) => ({ success: true, data: [] }),
  listarCronograma: (token, progId) => ({ success: true, data: { hitos: [], fases: {} } }),
  obtenerResultadosEncuesta: (token, encId) => ({ success: true, data: { respuestas: [], estadisticas: {} } }),
  subirArchivoPrograma: () => ({ success: true, data: { id: 'a-new' } }),
  eliminarArchivoPrograma: () => ({ success: true }),
  actualizarVisibilidadArchivo: () => ({ success: true }),
  crearCompetencia: (token, datos) => {
    var newId = 'comp-' + Date.now();
    var nuevo = Object.assign({ id: newId, prioridad: 1, orden: 1 }, datos);
    MOCK_DATA.conductas.push(nuevo);
    _guardarDatos();
    return { success: true, data: { id: newId } };
  },
  actualizarCompetencia: (token, id, datos) => {
    var c = MOCK_DATA.conductas.find(x => x.id === id);
    if (c) Object.assign(c, datos);
    _guardarDatos();
    return { success: true };
  },
  desactivarCompetencia: (token, id) => {
    MOCK_DATA.conductas = MOCK_DATA.conductas.filter(c => c.id !== id);
    _guardarDatos();
    return { success: true };
  },
  importarCompetenciasExcel: (token, progId, competencias) => {
    // Remove existing competencias for this program
    MOCK_DATA.conductas = MOCK_DATA.conductas.filter(c => c.programa_id !== progId);
    // Add imported ones
    (competencias || []).forEach(function(c, i) {
      MOCK_DATA.conductas.push(Object.assign({
        id: 'comp-imp-' + Date.now() + '-' + i,
        programa_id: progId,
        prioridad: i + 1,
        orden: i + 1,
        estado: 'activa'
      }, c));
    });
    _guardarDatos();
    return { success: true, data: { message: competencias.length + ' competencias importadas exitosamente.' } };
  },
  importarParticipantesExcel: (token, progId, participantes) => {
    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};
    if (!MOCK_DATA._participantes_programa[progId]) MOCK_DATA._participantes_programa[progId] = [];

    var count = 0;
    (participantes || []).forEach(function(p, i) {
      // Create the leader user
      var liderId = 'usr-imp-' + Date.now() + '-' + i;
      MOCK_DATA.usuarios.push({
        id: liderId, nombre: p.nombre || '',
        email: p.email || '', rol: 'jefatura',
        cargo: p.cargo || '', cliente_id: null, estado: 'Activo'
      });
      // Associate leader to program
      MOCK_DATA._participantes_programa[progId].push({
        usuario_id: liderId, rol_programa: p.rol || 'lider', lider_id: null, colaborador_id: null
      });
      count++;

      // If there's a collaborator, create and associate them too
      if (p.colaborador_nombre && p.colaborador_email) {
        var colabId = 'usr-imp-c-' + Date.now() + '-' + i;
        MOCK_DATA.usuarios.push({
          id: colabId, nombre: p.colaborador_nombre,
          email: p.colaborador_email, rol: 'participante',
          cargo: '', cliente_id: null, estado: 'Activo'
        });
        MOCK_DATA._participantes_programa[progId].push({
          usuario_id: colabId, rol_programa: 'colaborador', lider_id: liderId, colaborador_id: null
        });
        count++;
      }
    });
    _guardarDatos();
    return { success: true, data: { message: count + ' participantes importados exitosamente.' } };
  },
  asignarColaborador: (token, progId, datos) => {
    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};
    if (!MOCK_DATA._participantes_programa[progId]) MOCK_DATA._participantes_programa[progId] = [];
    // Create collaborator user
    var colabId = 'usr-colab-' + Date.now();
    MOCK_DATA.usuarios.push({
      id: colabId, nombre: datos.nombre || datos.colaborador_nombre || '',
      email: datos.email || datos.colaborador_email || '', rol: 'participante',
      cargo: '', cliente_id: null, estado: 'Activo'
    });
    MOCK_DATA._participantes_programa[progId].push({
      usuario_id: colabId, rol_programa: 'colaborador', lider_id: datos.lider_id || null
    });
    _guardarDatos();
    return { success: true };
  },
  resetearPassword: () => ({ success: true }),
  generarPreguntasDesdeCompetencias: () => ({ success: true, data: { count: 3 } }),
  actualizarPreguntasEncuesta: () => ({ success: true }),
  actualizarPregunta: () => ({ success: true }),
  activarEncuesta: (token, id) => {
    var enc = MOCK_DATA.encuestas.find(e => e.id === id);
    if (enc) enc.estado = 'activa';
    _guardarDatos();
    return { success: true };
  },
  cerrarEncuesta: (token, id) => {
    var enc = MOCK_DATA.encuestas.find(e => e.id === id);
    if (enc) enc.estado = 'cerrada';
    _guardarDatos();
    return { success: true };
  },
  eliminarEncuesta: (token, id) => {
    MOCK_DATA.encuestas = MOCK_DATA.encuestas.filter(e => e.id !== id);
    _guardarDatos();
    return { success: true };
  },
  agregarPregunta: (token, datos) => {
    var encId = datos.encuesta_id || datos.encuestaId;
    var enc = MOCK_DATA.encuestas.find(e => e.id === encId);
    if (enc) {
      if (!enc.preguntas) enc.preguntas = [];
      var newId = 'preg-' + Date.now();
      var pregunta = Object.assign({ id: newId }, datos);
      enc.preguntas.push(pregunta);
      _guardarDatos();
      return { success: true, data: { id: newId } };
    }
    return { success: false, error: 'Encuesta no encontrada' };
  },
  eliminarPregunta: (token, preguntaId) => {
    // Buscar la encuesta que contiene esta pregunta
    MOCK_DATA.encuestas.forEach(function(enc) {
      if (enc.preguntas) {
        enc.preguntas = enc.preguntas.filter(p => p.id !== preguntaId);
      }
    });
    _guardarDatos();
    return { success: true };
  },
  exportarDatosExcel: () => ({ success: true, data: { url: '#' } }),
  generarInformeConsolidado: () => ({ success: true, data: { url: '#', mensaje: 'Informe generado' } }),
  generarInformeIndividual: () => ({ success: true, data: { url: '#', mensaje: 'Informe generado' } }),

  // Home del lider: programa + pendientes
  obtenerHomeLider: (token, userId) => {
    if (!userId) return { success: false, error: 'Usuario no identificado' };
    if (!MOCK_DATA._participantes_programa) MOCK_DATA._participantes_programa = {};

    // Buscar el email del usuario para fallback
    var usr = MOCK_DATA.usuarios.find(function(u) { return u.id === userId; });
    var userEmail = usr ? usr.email : null;

    // Buscar programa donde el usuario es lider (por id o por email)
    var miPrograma = null;
    var miProgId = null;
    var misColaboradores = [];
    var realUserId = userId;

    Object.keys(MOCK_DATA._participantes_programa).forEach(function(progId) {
      if (miPrograma) return; // Ya encontrado
      var asociados = MOCK_DATA._participantes_programa[progId] || [];
      var esLider = asociados.find(function(a) {
        if (a.usuario_id === userId) return true;
        // Fallback: buscar por email
        if (userEmail) {
          var u2 = MOCK_DATA.usuarios.find(function(x) { return x.id === a.usuario_id; });
          if (u2 && u2.email === userEmail) {
            realUserId = a.usuario_id;
            return true;
          }
        }
        return false;
      });
      if (esLider) {
        miProgId = progId;
        miPrograma = MOCK_DATA.programas.find(function(p) { return p.id === progId; });
        // Buscar colaboradores asignados a este lider
        asociados.forEach(function(a) {
          if (a.lider_id === realUserId || a.lider_id === userId || (a.rol_programa === 'colaborador' && !a.lider_id)) {
            var u = MOCK_DATA.usuarios.find(function(x) { return x.id === a.usuario_id; });
            if (u) {
              misColaboradores.push({
                id: u.id,
                nombre: u.nombre,
                cargo: u.cargo || '',
                email: u.email
              });
            }
          }
        });
      }
    });

    if (!miPrograma) {
      return { success: true, data: { programa: null, pendientes: [], colaboradores: [] } };
    }

    // Buscar coevaluaciones pendientes
    var pendientes = [];
    var encuestasCo = MOCK_DATA.encuestas.filter(function(e) {
      return e.programa_id === miProgId &&
             e.tipo_cuestionario === 'coevaluacion' &&
             e.estado === 'activa';
    });

    // Para cada colaborador, verificar si tiene coevaluacion pendiente
    misColaboradores.forEach(function(colab) {
      encuestasCo.forEach(function(enc) {
        pendientes.push({
          tipo: 'coevaluacion',
          titulo: 'Coevaluacion de ' + colab.nombre,
          descripcion: enc.nombre || ('Coevaluacion ' + (enc.tipo || '').toUpperCase()),
          participante: colab,
          encuesta_id: enc.id,
          estado: 'pendiente'
        });
      });
    });

    // Si no hay coevaluaciones activas pero existen en borrador, no mostrar pendientes
    // Si no hay colaboradores, agregar mensaje
    if (misColaboradores.length === 0 && pendientes.length === 0) {
      // Sin colaboradores asignados aun
    }

    return {
      success: true,
      data: {
        programa: {
          id: miPrograma.id,
          nombre: miPrograma.nombre,
          cliente_nombre: miPrograma.cliente_nombre || '',
          estado: miPrograma.estado,
          fecha_inicio: miPrograma.fecha_inicio,
          fecha_termino: miPrograma.fecha_termino
        },
        pendientes: pendientes,
        colaboradores: misColaboradores,
        stepper: {
          autoevaluacion: 'pendiente',
          coevaluacion: encuestasCo.length > 0 ? 'en-progreso' : 'pendiente',
          informe_individual: 'pendiente',
          informe_ejecutivo: 'pendiente'
        }
      }
    };
  },
};

// ============================================
// Groq AI (direct from browser)
// ============================================
var GROQ_API_KEY = 'GROQ_API_KEY_PLACEHOLDER';
var GROQ_MODEL = 'llama-3.3-70b-versatile';

function callGroqFromBrowser(messages) {

  return fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + GROQ_API_KEY
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: messages,
      temperature: 0.7,
      max_tokens: 2048
    })
  })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    if (data.choices && data.choices[0]) {
      return { success: true, response: data.choices[0].message.content };
    }
    if (data.error) throw new Error(data.error.message);
    throw new Error('Respuesta inesperada de Groq');
  });
}

// ============================================
// google.script.run mock
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
                        var args = [].slice.call(arguments);
                        // getVistaHTML: load HTML file via fetch
                        if (fn === 'getVistaHTML') {
                          fetch(args[0] + '.html?_=' + Date.now())
                            .then(function(r) {
                              if (!r.ok) throw new Error('Vista no encontrada: ' + args[0]);
                              return r.text();
                            })
                            .then(function(html) { setTimeout(function() { onOk(html); }, 60); })
                            .catch(function(e) { onErr(e); });
                          return;
                        }
                        // Backend function
                        var handler = backendFunctions[fn];
                        if (handler) {
                          try {
                            var result = handler.apply(null, args);
                            setTimeout(function() { onOk(result); }, 100);
                          } catch(e) {
                            console.error('[MOCK ERROR]', fn, e);
                            onErr(e);
                          }
                        } else {
                          console.warn('[MOCK] Not implemented:', fn);
                          setTimeout(function() { onOk({ success: true, data: [] }); }, 100);
                        }
                      };
                    }
                  });
                };
              }
              // Direct call (no failureHandler)
              return function() {
                var args = [].slice.call(arguments);
                if (p2 === 'getVistaHTML') {
                  fetch(args[0] + '.html?_=' + Date.now())
                    .then(function(r) { return r.text(); })
                    .then(function(html) { setTimeout(function() { onOk(html); }, 60); });
                  return;
                }
                var handler = backendFunctions[p2];
                if (handler) {
                  try { setTimeout(function() { onOk(handler.apply(null, args)); }, 100); }
                  catch(e) { console.error('[MOCK]', p2, e); }
                } else {
                  setTimeout(function() { onOk({ success: true, data: [] }); }, 100);
                }
              };
            }
          });
        };
      }
      if (prop === 'withFailureHandler') {
        return function() { return _mkRunner(); };
      }
      return function() { return _mkRunner(); };
    }
  });
}

console.log('%c[MSO Demo] Maqueta estática activa - mock.js cargado', 'color: #F58220; font-weight: bold;');
