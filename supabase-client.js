// ============================================
// SUPABASE CLIENT - Reemplazo de mock.js
// Mantiene la interfaz google.script.run para compatibilidad
// ============================================

var SUPABASE_URL = 'https://loezdutwrucnoebhofjt.supabase.co';
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvZXpkdXR3cnVjbm9lYmhvZmp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5MTY0MzEsImV4cCI6MjA5MTQ5MjQzMX0.CvJnaQ1T-MryjiimGnjo2gRgIKmYBuYPE-n1691n7Ek';

// Cargar SDK de Supabase
var _supabaseReady = false;
var _supabase = null;

function initSupabase() {
  if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
    _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    _supabaseReady = true;
    console.log('%c[MSO] Supabase conectado', 'color: #10B981; font-weight: bold;');
  } else {
    console.error('[MSO] SDK de Supabase no cargado');
  }
}

// Esperar a que el SDK cargue
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initSupabase, 100);
});

// ============================================
// BACKEND FUNCTIONS (reemplazan backendFunctions de mock.js)
// ============================================

var backendFunctions = {

  // ============================================
  // AUTH
  // ============================================
  loginUsuario: async function(email, password) {
    try {
      // Login directo contra tabla usuarios (demo sin RLS)
      var perfil = await _supabase.from('usuarios').select('*').eq('email', email).eq('password_visible', password).single();
      if (perfil.error || !perfil.data) {
        return { success: false, error: 'Credenciales invalidas. Verifica tu correo y contrasena.' };
      }
      return {
        success: true,
        data: {
          token: 'demo-token',
          usuario: perfil.data
        }
      };
    } catch(e) {
      return { success: false, error: 'Error de conexion. Intenta nuevamente.' };
    }
  },

  cerrarSesion: async function() {
    return { success: true };
  },

  registrarUsuario: async function(datos) {
    try {
      var result = await _supabase.auth.signUp({
        email: datos.email,
        password: datos.password || '123456'
      });
      if (result.error) return { success: false, error: result.error.message };
      var perfil = await _supabase.from('usuarios').insert({
        auth_id: result.data.user.id,
        nombre: datos.nombre || datos.nombre_completo || '',
        email: datos.email,
        rol: datos.rol || 'participante',
        cargo: datos.cargo || '',
        cliente_id: datos.cliente_id || null
      }).select().single();
      return { success: true, data: { id: perfil.data ? perfil.data.id : null } };
    } catch(e) {
      return { success: false, error: e.message };
    }
  },

  obtenerClientesRegistro: async function() {
    var r = await _supabase.from('clientes').select('id, nombre').eq('estado', 'Activo');
    return r.data || [];
  },

  // ============================================
  // CLIENTES
  // ============================================
  listarClientes: async function() {
    var r = await _supabase.from('clientes').select('*').order('created_at', { ascending: false });
    return { success: true, data: r.data || [] };
  },

  crearCliente: async function(token, datos) {
    var r = await _supabase.from('clientes').insert({
      nombre: datos.nombre || '',
      razon_social: datos.razon_social || '',
      rubro: datos.rubro || '',
      pais: datos.pais || 'Chile',
      contacto_nombre: datos.contacto_nombre || '',
      contacto_email: datos.contacto_email || '',
      estado: 'Activo'
    }).select().single();
    if (r.error) return { success: false, error: r.error.message };
    return { success: true, data: { id: r.data.id } };
  },

  actualizarCliente: async function(token, id, datos) {
    var r = await _supabase.from('clientes').update(datos).eq('id', id);
    if (r.error) return { success: false, error: r.error.message };
    return { success: true };
  },

  desactivarCliente: async function(token, id) {
    var cli = await _supabase.from('clientes').select('estado').eq('id', id).single();
    var nuevoEstado = (cli.data && cli.data.estado === 'Activo') ? 'Inactivo' : 'Activo';
    await _supabase.from('clientes').update({ estado: nuevoEstado }).eq('id', id);
    return { success: true };
  },

  eliminarCliente: async function(token, id) {
    await _supabase.from('clientes').delete().eq('id', id);
    return { success: true };
  },

  // ============================================
  // PROGRAMAS
  // ============================================
  listarProgramas: async function() {
    var r = await _supabase.from('programas').select('*, clientes(nombre)').order('created_at', { ascending: false });
    var data = (r.data || []).map(function(p) {
      p.cliente_nombre = p.clientes ? p.clientes.nombre : '';
      delete p.clientes;
      return p;
    });
    return { success: true, data: data };
  },

  listarProgramasDashboard: async function(token, userId) {
    if (!userId) {
      var r = await _supabase.from('programas').select('*, clientes(nombre)').order('created_at', { ascending: false });
      var data = (r.data || []).map(function(p) {
        p.cliente_nombre = p.clientes ? p.clientes.nombre : '';
        delete p.clientes;
        return p;
      });
      return { success: true, data: data };
    }
    // Filtrar por usuario
    var pp = await _supabase.from('participantes_programa').select('programa_id').eq('usuario_id', userId);
    var progIds = (pp.data || []).map(function(p) { return p.programa_id; });
    if (progIds.length === 0) return { success: true, data: [] };
    var r2 = await _supabase.from('programas').select('*, clientes(nombre)').in('id', progIds);
    var data2 = (r2.data || []).map(function(p) {
      p.cliente_nombre = p.clientes ? p.clientes.nombre : '';
      delete p.clientes;
      return p;
    });
    return { success: true, data: data2 };
  },

  crearPrograma: async function(token, datos) {
    var r = await _supabase.from('programas').insert({
      nombre: datos.nombre || 'Nuevo Programa',
      cliente_id: datos.cliente_id || null,
      tipo: datos.tipo || 'piloto',
      estado: datos.estado || 'diseno',
      objetivo: datos.objetivo || '',
      fecha_inicio: datos.fecha_inicio || null,
      fecha_termino: datos.fecha_termino || null,
      fecha_medicion_pre: datos.fecha_medicion_pre || null,
      fecha_medicion_post: datos.fecha_medicion_post || null
    }).select().single();
    if (r.error) return { success: false, error: r.error.message };
    return { success: true, data: { id: r.data.id, programaId: r.data.id } };
  },

  actualizarPrograma: async function(token, id, datos) {
    var r = await _supabase.from('programas').update(datos).eq('id', id);
    if (r.error) return { success: false, error: r.error.message };
    return { success: true };
  },

  activarPrograma: async function(token, id) {
    await _supabase.from('programas').update({ estado: 'activo' }).eq('id', id);
    return { success: true };
  },

  eliminarPrograma: async function(token, id) {
    await _supabase.from('programas').delete().eq('id', id);
    return { success: true };
  },

  obtenerPrograma: async function(token, id) {
    var r = await _supabase.from('programas').select('*, clientes(nombre)').eq('id', id).single();
    if (r.error) return { success: false, error: 'Programa no encontrado' };
    var prog = r.data;
    prog.cliente_nombre = prog.clientes ? prog.clientes.nombre : '';
    var cond = await _supabase.from('competencias').select('*').eq('programa_id', id).order('orden');
    var parts = await _supabase.from('participantes_programa')
      .select('*, usuarios(id, nombre, email, cargo, rol)')
      .eq('programa_id', id);
    return {
      success: true,
      data: {
        ...prog,
        conductas: cond.data || [],
        participantes: (parts.data || []).map(function(p) {
          return {
            usuario_id: p.usuarios.id,
            nombre: p.usuarios.nombre,
            email: p.usuarios.email,
            rol_programa: p.rol_programa
          };
        })
      }
    };
  },

  // ============================================
  // USUARIOS
  // ============================================
  listarUsuarios: async function() {
    var r = await _supabase.from('usuarios').select('*, clientes(nombre)').order('created_at', { ascending: false });
    var data = (r.data || []).map(function(u) {
      u.cliente_nombre = u.clientes ? u.clientes.nombre : '';
      delete u.clientes;
      return u;
    });
    return { success: true, data: data };
  },

  crearUsuario: async function(token, datos) {
    // Crear en auth primero
    var authResult = await _supabase.auth.admin ? null : null; // No tenemos admin API desde frontend
    // Crear perfil directamente (el usuario se registrara despues o el admin lo crea desde Supabase)
    var r = await _supabase.from('usuarios').insert({
      nombre: datos.nombre || datos.nombre_completo || '',
      email: datos.email || '',
      rol: datos.rol || 'participante',
      cargo: datos.cargo || '',
      cliente_id: datos.cliente_id || null,
      estado: 'Activo'
    }).select().single();
    if (r.error) return { success: false, error: r.error.message };
    return { success: true, data: { id: r.data.id } };
  },

  actualizarUsuario: async function(token, id, datos) {
    await _supabase.from('usuarios').update(datos).eq('id', id);
    return { success: true };
  },

  cambiarEstadoUsuario: async function(token, id) {
    var usr = await _supabase.from('usuarios').select('estado').eq('id', id).single();
    var nuevoEstado = (usr.data && usr.data.estado === 'Activo') ? 'Inactivo' : 'Activo';
    await _supabase.from('usuarios').update({ estado: nuevoEstado }).eq('id', id);
    return { success: true };
  },

  // ============================================
  // PARTICIPANTES PROGRAMA
  // ============================================
  obtenerPanelPrograma: async function(token, progId) {
    var prog = await _supabase.from('programas').select('*, clientes(nombre)').eq('id', progId).single();
    if (prog.error) return { success: false, error: 'Programa no encontrado' };
    var p = prog.data;
    p.cliente_nombre = p.clientes ? p.clientes.nombre : '';

    var parts = await _supabase.from('participantes_programa')
      .select('*, usuarios(id, nombre, email, cargo, estado, rol)')
      .eq('programa_id', progId);

    var comps = await _supabase.from('competencias').select('*').eq('programa_id', progId).order('orden');
    var encs = await _supabase.from('encuestas').select('*').eq('programa_id', progId);

    var participantes = (parts.data || []).map(function(a) {
      var u = a.usuarios;
      if (!u) return null;
      var lider = a.lider_id ? (parts.data || []).find(function(x) { return x.usuario_id === a.lider_id; }) : null;
      return {
        usuario_id: u.id, nombre: u.nombre, nombre_lider: u.nombre,
        email: u.email, email_lider: u.email, cargo: u.cargo,
        rol_programa: a.rol_programa || 'lider',
        lider_id: a.lider_id || null,
        lider_nombre: lider && lider.usuarios ? lider.usuarios.nombre : null,
        estado: u.estado
      };
    }).filter(Boolean);

    var competencias = (comps.data || []).map(function(c) {
      return {
        id: c.id, nombre: c.nombre, descripcion: c.descripcion || '',
        foco_desarrollo: c.foco_desarrollo || '',
        nivel_1_texto: c.nivel_1_texto || 'Conoce el concepto',
        nivel_2_texto: c.nivel_2_texto || 'Aplica con guia',
        nivel_3_texto: c.nivel_3_texto || 'Aplica consistentemente',
        nivel_4_texto: c.nivel_4_texto || 'Es referente',
        interpretacion_nivel_1: c.interpretacion_nivel_1 || '',
        interpretacion_nivel_2: c.interpretacion_nivel_2 || '',
        interpretacion_nivel_3: c.interpretacion_nivel_3 || '',
        interpretacion_nivel_4: c.interpretacion_nivel_4 || '',
        prioridad: c.orden, orden: c.orden
      };
    });

    return {
      success: true,
      data: {
        programa: p,
        participantes: participantes,
        competencias: competencias,
        encuestas: encs.data || [],
        stats: {
          total_lideres: participantes.filter(function(x) { return x.rol_programa === 'lider'; }).length,
          total_colaboradores: participantes.filter(function(x) { return x.rol_programa === 'colaborador'; }).length,
          total_competencias: competencias.length,
          total_encuestas: (encs.data || []).length
        }
      }
    };
  },

  listarParticipantesPrograma: async function(token, progId) {
    var r = await _supabase.from('participantes_programa')
      .select('*, usuarios(id, nombre, email, cargo, rol)')
      .eq('programa_id', progId);
    var data = (r.data || []).map(function(a) {
      if (!a.usuarios) return null;
      return {
        id: a.usuarios.id, nombre: a.usuarios.nombre,
        email: a.usuarios.email, cargo: a.usuarios.cargo,
        rol_programa: a.rol_programa
      };
    }).filter(Boolean);
    return { success: true, data: data };
  },

  obtenerUsuariosDisponibles: async function(token, progId) {
    var asociados = await _supabase.from('participantes_programa').select('usuario_id').eq('programa_id', progId);
    var ids = (asociados.data || []).map(function(a) { return a.usuario_id; });
    var query = _supabase.from('usuarios').select('*').neq('rol', 'admin');
    if (ids.length > 0) {
      // Supabase no tiene NOT IN directo, filtrar en JS
      var todos = await query;
      var data = (todos.data || []).filter(function(u) { return ids.indexOf(u.id) === -1; });
      return { success: true, data: data };
    }
    var todos = await query;
    return { success: true, data: todos.data || [] };
  },

  asociarParticipantes: async function(token, progId, datos) {
    var items = Array.isArray(datos) ? datos : [datos];
    var inserts = items.map(function(d) {
      return {
        programa_id: progId,
        usuario_id: d.usuario_id || d.id || d,
        rol_programa: d.rol_programa || d.rol || 'lider',
        lider_id: d.lider_id || null
      };
    });
    var r = await _supabase.from('participantes_programa').upsert(inserts, { onConflict: 'programa_id,usuario_id' });
    return { success: true, data: { count: inserts.length } };
  },

  desasociarParticipante: async function(token, progId, userId) {
    await _supabase.from('participantes_programa').delete().eq('programa_id', progId).eq('usuario_id', userId);
    return { success: true };
  },

  // ============================================
  // COMPETENCIAS
  // ============================================
  listarCompetencias: async function(token, progId) {
    var query = _supabase.from('competencias').select('*').order('orden');
    if (progId) query = query.eq('programa_id', progId);
    var r = await query;
    return { success: true, data: r.data || [] };
  },

  crearCompetencia: async function(token, datos) {
    var r = await _supabase.from('competencias').insert(datos).select().single();
    if (r.error) return { success: false, error: r.error.message };
    return { success: true, data: { id: r.data.id } };
  },

  actualizarCompetencia: async function(token, id, datos) {
    await _supabase.from('competencias').update(datos).eq('id', id);
    return { success: true };
  },

  desactivarCompetencia: async function(token, id) {
    await _supabase.from('competencias').delete().eq('id', id);
    return { success: true };
  },

  desactivarConducta: async function(token, id) {
    await _supabase.from('competencias').delete().eq('id', id);
    return { success: true };
  },

  importarCompetenciasExcel: async function(token, progId, competencias) {
    var del = await _supabase.from('competencias').delete().eq('programa_id', progId);
    if (del.error) {
      console.error('[importarCompetenciasExcel] error borrando previas', del.error);
      return { success: false, error: del.error.message };
    }
    var inserts = (competencias || []).map(function(c, i) {
      return {
        programa_id: progId,
        orden: i + 1,
        estado: 'activa',
        nombre: c.nombre || '',
        descripcion: c.descripcion || '',
        foco_desarrollo: c.foco_desarrollo || '',
        nivel_1_texto: c.nivel_1_texto || '',
        nivel_2_texto: c.nivel_2_texto || '',
        nivel_3_texto: c.nivel_3_texto || '',
        nivel_4_texto: c.nivel_4_texto || '',
        interpretacion_nivel_1: c.interpretacion_nivel_1 || '',
        interpretacion_nivel_2: c.interpretacion_nivel_2 || '',
        interpretacion_nivel_3: c.interpretacion_nivel_3 || '',
        interpretacion_nivel_4: c.interpretacion_nivel_4 || ''
      };
    });
    if (inserts.length === 0) {
      return { success: true, data: { message: '0 competencias importadas.' } };
    }
    var r = await _supabase.from('competencias').insert(inserts).select();
    if (r.error) {
      console.error('[importarCompetenciasExcel] error insertando', r.error);
      return { success: false, error: r.error.message };
    }
    return { success: true, data: { message: (r.data || []).length + ' competencias importadas.' } };
  },

  // ============================================
  // ENCUESTAS
  // ============================================
  listarEncuestas: async function(token, progId) {
    var query = _supabase.from('encuestas').select('*').order('created_at', { ascending: false });
    if (progId) query = query.eq('programa_id', progId);
    var r = await query;
    return { success: true, data: r.data || [] };
  },

  crearEncuesta: async function(token, datos) {
    var prog = datos.programa_id ?
      await _supabase.from('programas').select('nombre').eq('id', datos.programa_id).single() : null;
    var r = await _supabase.from('encuestas').insert({
      programa_id: datos.programa_id || null,
      nombre: datos.nombre || '',
      tipo: datos.tipo || 'pre',
      tipo_cuestionario: datos.tipo_cuestionario || 'autoevaluacion',
      estado: 'borrador',
      instrucciones: datos.instrucciones || '',
      fecha_cierre: datos.fecha_cierre || null
    }).select().single();
    if (r.error) return { success: false, error: r.error.message };
    return { success: true, data: { id: r.data.id } };
  },

  actualizarEncuesta: async function(token, id, datos) {
    await _supabase.from('encuestas').update(datos).eq('id', id);
    return { success: true };
  },

  activarEncuesta: async function(token, id) {
    await _supabase.from('encuestas').update({ estado: 'activa' }).eq('id', id);
    return { success: true };
  },

  cerrarEncuesta: async function(token, id) {
    await _supabase.from('encuestas').update({ estado: 'cerrada' }).eq('id', id);
    return { success: true };
  },

  eliminarEncuesta: async function(token, id) {
    await _supabase.from('encuestas').delete().eq('id', id);
    return { success: true };
  },

  obtenerEncuestaCompleta: async function(token, id) {
    var enc = await _supabase.from('encuestas').select('*').eq('id', id).single();
    var pregs = await _supabase.from('preguntas').select('*').eq('encuesta_id', id).order('orden');
    return {
      success: true,
      data: {
        id: enc.data ? enc.data.id : id,
        nombre: enc.data ? enc.data.nombre : 'Encuesta',
        instrucciones: enc.data ? enc.data.instrucciones : '',
        tipo: enc.data ? enc.data.tipo : 'pre',
        tipo_cuestionario: enc.data ? enc.data.tipo_cuestionario : 'autoevaluacion',
        estado: enc.data ? enc.data.estado : 'borrador',
        preguntas: pregs.data || []
      }
    };
  },

  obtenerEncuestaPendiente: async function(token) {
    // Buscar encuestas activas de los programas del usuario
    var session = await _supabase.auth.getSession();
    if (!session.data.session) return { success: true, data: [] };
    var userId = null;
    var usr = await _supabase.from('usuarios').select('id').eq('auth_id', session.data.session.user.id).single();
    if (usr.data) userId = usr.data.id;
    if (!userId) return { success: true, data: [] };

    var pp = await _supabase.from('participantes_programa').select('programa_id').eq('usuario_id', userId);
    var progIds = (pp.data || []).map(function(p) { return p.programa_id; });
    if (progIds.length === 0) return { success: true, data: [] };

    var encs = await _supabase.from('encuestas').select('*, programas(nombre)').in('programa_id', progIds).eq('estado', 'activa');
    var data = (encs.data || []).map(function(e) {
      return {
        id: e.id, nombre: e.nombre,
        programa_nombre: e.programas ? e.programas.nombre : '',
        tipo: e.tipo, estado: 'pendiente', fecha_cierre: e.fecha_cierre || ''
      };
    });
    return { success: true, data: data };
  },

  // ============================================
  // PREGUNTAS
  // ============================================
  agregarPregunta: async function(token, datos) {
    var r = await _supabase.from('preguntas').insert({
      encuesta_id: datos.encuesta_id,
      texto_pregunta: datos.texto_pregunta || '',
      tipo_respuesta: datos.tipo_respuesta || 'niveles_competencia',
      competencia_id: datos.competencia_id || null,
      foco_desarrollo: datos.foco_desarrollo || '',
      opcion_nivel_1: datos.opcion_nivel_1 || '',
      opcion_nivel_2: datos.opcion_nivel_2 || '',
      opcion_nivel_3: datos.opcion_nivel_3 || '',
      opcion_nivel_4: datos.opcion_nivel_4 || ''
    }).select().single();
    if (r.error) return { success: false, error: r.error.message };
    return { success: true, data: { id: r.data.id } };
  },

  actualizarPregunta: async function(token, id, datos) {
    await _supabase.from('preguntas').update(datos).eq('id', id);
    return { success: true };
  },

  eliminarPregunta: async function(token, id) {
    await _supabase.from('preguntas').delete().eq('id', id);
    return { success: true };
  },

  // ============================================
  // RESPUESTAS
  // ============================================
  enviarRespuestas: async function(token, datos) {
    if (datos.respuestas && datos.respuestas.length > 0) {
      await _supabase.from('respuestas').upsert(datos.respuestas);
    }
    return { success: true, data: { message: 'Respuestas registradas.' } };
  },

  enviarRespuestaEncuesta: async function() { return { success: true }; },

  // ============================================
  // ARCHIVOS
  // ============================================
  listarArchivosPrograma: async function(token, progId) {
    var r = await _supabase.from('archivos_programa').select('*, usuarios(nombre)')
      .eq('programa_id', progId).order('created_at', { ascending: false });
    var data = (r.data || []).map(function(a) {
      a.subido_por_nombre = a.usuarios ? a.usuarios.nombre : '';
      a.fecha_subida = a.created_at;
      delete a.usuarios;
      return a;
    });
    return { success: true, data: data };
  },

  subirArchivoPrograma: async function(token, datos) {
    var r = await _supabase.from('archivos_programa').insert(datos).select().single();
    if (r.error) return { success: false, error: r.error.message };
    return { success: true, data: { id: r.data.id } };
  },

  eliminarArchivoPrograma: async function(token, id) {
    await _supabase.from('archivos_programa').delete().eq('id', id);
    return { success: true };
  },

  actualizarVisibilidadArchivo: async function(token, id, visible) {
    await _supabase.from('archivos_programa').update({ visible_participantes: visible }).eq('id', id);
    return { success: true };
  },

  // ============================================
  // NOTIFICACIONES
  // ============================================
  contarNotificacionesPendientes: async function() {
    var session = await _supabase.auth.getSession();
    if (!session.data.session) return { success: true, data: { count: 0 } };
    var usr = await _supabase.from('usuarios').select('id').eq('auth_id', session.data.session.user.id).single();
    if (!usr.data) return { success: true, data: { count: 0 } };
    var r = await _supabase.from('notificaciones').select('id', { count: 'exact' })
      .eq('usuario_id', usr.data.id).eq('leida', false);
    return { success: true, data: { count: r.count || 0 } };
  },

  listarNotificaciones: async function() {
    var session = await _supabase.auth.getSession();
    if (!session.data.session) return { success: true, data: [] };
    var usr = await _supabase.from('usuarios').select('id').eq('auth_id', session.data.session.user.id).single();
    if (!usr.data) return { success: true, data: [] };
    var r = await _supabase.from('notificaciones').select('*')
      .eq('usuario_id', usr.data.id).order('created_at', { ascending: false });
    return { success: true, data: r.data || [] };
  },

  marcarNotificacionLeida: async function(token, id) {
    await _supabase.from('notificaciones').update({ leida: true }).eq('id', id);
    return { success: true };
  },

  obtenerNotificaciones: async function() {
    return backendFunctions.listarNotificaciones();
  },

  marcarComoLeida: async function(token, id) {
    return backendFunctions.marcarNotificacionLeida(token, id);
  },

  // ============================================
  // DASHBOARD / KPIs
  // ============================================
  obtenerKPIsPrograma: async function(token, progId) {
    var parts = await _supabase.from('participantes_programa').select('id', { count: 'exact' });
    var total = parts.count || 0;
    return {
      success: true,
      data: {
        totalParticipantes: total,
        observacionesRealizadas: 0,
        tasaRespuestaPre: 0,
        tasaRespuestaPost: 0,
        nivelAplicacion: 0
      }
    };
  },

  obtenerComparacionPrePost: async function() {
    return { success: true, data: [] };
  },

  obtenerMapaCalor: async function() {
    return { success: true, data: [] };
  },

  obtenerResumenPorEquipo: async function() {
    return { success: true, data: [] };
  },

  obtenerMiProgreso: async function() {
    return { success: true, data: { comparacion: [], feedback: [] } };
  },

  obtenerResumenPrograma: async function(token, progId) {
    var parts = await _supabase.from('participantes_programa').select('*').eq('programa_id', progId);
    var asociados = parts.data || [];
    var lideres = asociados.filter(function(a) { return a.rol_programa === 'lider'; }).length;
    var colaboradores = asociados.filter(function(a) { return a.rol_programa === 'colaborador'; }).length;
    return {
      totalLideres: lideres,
      totalColaboradores: colaboradores,
      autoevaluacionesCompletadas: 0,
      coevaluacionesCompletadas: 0,
      observacionesRealizadas: 0,
      evaluaciones: []
    };
  },

  // ============================================
  // HOME LIDER
  // ============================================
  obtenerHomeLider: async function(token, userId) {
    if (!userId) return { success: false, error: 'Usuario no identificado' };
    // Buscar programas donde esta asociado
    var pp = await _supabase.from('participantes_programa').select('programa_id, rol_programa, lider_id').eq('usuario_id', userId);
    if (!pp.data || pp.data.length === 0) {
      return { success: true, data: { programa: null, pendientes: [], colaboradores: [] } };
    }
    var progId = pp.data[0].programa_id;
    var prog = await _supabase.from('programas').select('*, clientes(nombre)').eq('id', progId).single();
    if (!prog.data) return { success: true, data: { programa: null, pendientes: [], colaboradores: [] } };

    var programa = prog.data;
    programa.cliente_nombre = programa.clientes ? programa.clientes.nombre : '';

    // Buscar colaboradores
    var allParts = await _supabase.from('participantes_programa')
      .select('*, usuarios(id, nombre, cargo, email)')
      .eq('programa_id', progId);
    var colaboradores = (allParts.data || []).filter(function(a) {
      return a.lider_id === userId || (a.rol_programa === 'colaborador' && !a.lider_id);
    }).map(function(a) {
      return a.usuarios ? { id: a.usuarios.id, nombre: a.usuarios.nombre, cargo: a.usuarios.cargo || '', email: a.usuarios.email } : null;
    }).filter(Boolean);

    // Buscar coevaluaciones pendientes
    var encsCo = await _supabase.from('encuestas').select('*')
      .eq('programa_id', progId).eq('tipo_cuestionario', 'coevaluacion').eq('estado', 'activa');
    var pendientes = [];
    colaboradores.forEach(function(colab) {
      (encsCo.data || []).forEach(function(enc) {
        pendientes.push({
          tipo: 'coevaluacion',
          titulo: 'Coevaluacion de ' + colab.nombre,
          descripcion: enc.nombre,
          participante: colab,
          encuesta_id: enc.id,
          estado: 'pendiente'
        });
      });
    });

    return {
      success: true,
      data: {
        programa: { id: programa.id, nombre: programa.nombre, cliente_nombre: programa.cliente_nombre, estado: programa.estado },
        pendientes: pendientes,
        colaboradores: colaboradores,
        stepper: {
          autoevaluacion: 'pendiente',
          coevaluacion: (encsCo.data || []).length > 0 ? 'en-progreso' : 'pendiente',
          informe_individual: 'pendiente',
          informe_ejecutivo: 'pendiente'
        }
      }
    };
  },

  // ============================================
  // FUNCIONES STUB (se implementaran despues)
  // ============================================
  listarConductas: async function(token, progId) { return backendFunctions.listarCompetencias(token, progId); },
  crearConducta: async function(token, datos) { return backendFunctions.crearCompetencia(token, datos); },
  actualizarConducta: async function(token, id, datos) { return backendFunctions.actualizarCompetencia(token, id, datos); },
  listarChecklists: async function() { return { success: true, data: [] }; },
  crearChecklist: async function() { return { success: true, data: { id: null } }; },
  activarChecklist: async function() { return { success: true }; },
  cerrarChecklist: async function() { return { success: true }; },
  listarHallazgos: async function() { return { success: true, data: [] }; },
  crearHallazgo: async function() { return { success: true, data: { id: null } }; },
  actualizarHallazgo: async function() { return { success: true }; },
  listarFeedbackJefatura: async function() { return { success: true, data: [] }; },
  crearFeedback: async function() { return { success: true, data: { id: null } }; },
  enviarFeedback: async function() { return { success: true }; },
  registrarFeedback: async function() { return { success: true }; },
  listarFeedbackRecibido: async function() { return { success: true, data: [] }; },
  listarFeedbackEquipo: async function() { return { success: true, data: [] }; },
  listarMiEquipo: async function() { return { success: true, data: [] }; },
  listarObservacionesJefatura: async function() { return { success: true, data: [] }; },
  guardarObservacion: async function() { return { success: true }; },
  listarObservaciones: async function() { return { success: true, data: [] }; },
  listarReportesObservacion: async function() { return { success: true, data: [] }; },
  crearReporteObservacion: async function() { return { success: true, data: { id: null } }; },
  actualizarReporteObservacion: async function() { return { success: true }; },
  listarTodasObservacionesAdmin: async function() { return { success: true, data: [] }; },
  cambiarEstadoObservacion: async function() { return { success: true }; },
  listarMisActividades: async function() { return { success: true, data: [] }; },
  marcarActividadCompletada: async function() { return { success: true }; },
  listarActividades: async function() { return { success: true, data: [] }; },
  crearActividad: async function() { return { success: true, data: { id: null } }; },
  actualizarActividad: async function() { return { success: true }; },
  listarEncuestasParticipante: async function() { return backendFunctions.obtenerEncuestaPendiente(); },
  generarReporte: async function() { return { success: true, data: { url: '#', mensaje: 'Reporte generado' } }; },
  generarInformeConsolidado: async function() { return { success: true, data: { url: '#', mensaje: 'Informe generado' } }; },
  generarInformeIndividual: async function() { return { success: true, data: { url: '#', mensaje: 'Informe generado' } }; },
  exportarDatosExcel: async function() { return { success: true, data: { url: '#' } }; },
  listarArchivosPrograma: async function(token, progId) {
    var r = await _supabase.from('archivos_programa').select('*').eq('programa_id', progId).order('created_at', { ascending: false });
    return { success: true, data: r.data || [] };
  },
  listarInformesGenerados: async function() { return { success: true, data: [] }; },
  listarCronograma: async function() { return { success: true, data: { hitos: [], fases: {} } }; },
  obtenerResultadosEncuesta: async function() { return { success: true, data: { respuestas: [], estadisticas: {} } }; },
  resetearPassword: async function() { return { success: true }; },
  generarPreguntasDesdeCompetencias: async function() { return { success: true, data: { count: 0 } }; },
  actualizarPreguntasEncuesta: async function() { return { success: true }; },
  importarParticipantesExcel: async function(token, progId, participantes) {
    var count = 0;
    var errores = [];

    async function upsertUsuario(nombre, email, rol, cargo, password) {
      if (!email) return null;
      var existing = await _supabase.from('usuarios').select('*').eq('email', email).maybeSingle();
      if (existing.data) return existing.data;
      var ins = await _supabase.from('usuarios').insert({
        nombre: nombre || email, email: email,
        rol: rol, cargo: cargo || '', estado: 'Activo',
        password_visible: password || '123456'
      }).select().single();
      if (ins.error) {
        console.error('[importarParticipantesExcel] error creando usuario', email, ins.error);
        errores.push(email + ': ' + ins.error.message);
        return null;
      }
      return ins.data;
    }

    async function asociar(usuarioId, rolPrograma, liderId) {
      var assoc = await _supabase.from('participantes_programa').upsert({
        programa_id: progId, usuario_id: usuarioId,
        rol_programa: rolPrograma, lider_id: liderId || null
      }, { onConflict: 'programa_id,usuario_id' });
      if (assoc.error) {
        console.error('[importarParticipantesExcel] error asociando', usuarioId, assoc.error);
        errores.push('asociacion ' + usuarioId + ': ' + assoc.error.message);
        return false;
      }
      return true;
    }

    for (var i = 0; i < (participantes || []).length; i++) {
      var p = participantes[i];
      if (!p.email || !p.nombre) continue;

      var lider = await upsertUsuario(p.nombre, p.email, 'jefatura', p.cargo, p.password);
      if (!lider) continue;

      var ok = await asociar(lider.id, p.rol || 'lider', null);
      if (ok) count++;

      if (p.colaborador_nombre && p.colaborador_email) {
        var colab = await upsertUsuario(p.colaborador_nombre, p.colaborador_email, 'participante', '', null);
        if (colab) {
          var ok2 = await asociar(colab.id, 'colaborador', lider.id);
          if (ok2) count++;
        }
      }
    }

    if (errores.length) console.warn('[importarParticipantesExcel] errores:', errores);
    return {
      success: true,
      data: {
        message: count + ' participantes importados.' + (errores.length ? ' (' + errores.length + ' con errores - revisa consola)' : '')
      }
    };
  },
  asignarColaborador: async function(token, progId, datos) {
    var colabR = await _supabase.from('usuarios').insert({
      nombre: datos.nombre || datos.colaborador_nombre || '',
      email: datos.email || datos.colaborador_email || '',
      rol: 'participante', estado: 'Activo'
    }).select().single();
    if (colabR.data) {
      await _supabase.from('participantes_programa').insert({
        programa_id: progId, usuario_id: colabR.data.id,
        rol_programa: 'colaborador', lider_id: datos.lider_id || null
      });
    }
    return { success: true };
  },
};

// ============================================
// Groq AI (direct from browser) - se mantiene igual
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
// google.script.run mock (misma interfaz, ahora async)
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
                        if (handler) {
                          try {
                            var result = handler.apply(null, args);
                            if (result && typeof result.then === 'function') {
                              result.then(function(r) { onOk(r); }).catch(function(e) {
                                console.error('[SUPABASE ERROR]', fn, e);
                                if (onErr) onErr(e);
                              });
                            } else {
                              setTimeout(function() { onOk(result); }, 50);
                            }
                          } catch(e) {
                            console.error('[SUPABASE ERROR]', fn, e);
                            if (onErr) onErr(e);
                          }
                        } else {
                          console.warn('[SUPABASE] Not implemented:', fn);
                          setTimeout(function() { onOk({ success: true, data: [] }); }, 50);
                        }
                      };
                    }
                  });
                };
              }
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
                  try {
                    var result = handler.apply(null, args);
                    if (result && typeof result.then === 'function') {
                      result.then(function(r) { onOk(r); }).catch(function(e) { console.error('[SUPABASE]', p2, e); });
                    } else {
                      setTimeout(function() { onOk(result); }, 50);
                    }
                  } catch(e) { console.error('[SUPABASE]', p2, e); }
                } else {
                  setTimeout(function() { onOk({ success: true, data: [] }); }, 50);
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

console.log('%c[MSO] Supabase client cargado - conectando a ' + SUPABASE_URL, 'color: #F58220; font-weight: bold;');
