/**
 * Configuración del panel del webinar de The Palms. La plantilla
 * `panel-fuente.html` no sabe de qué grupo se trata: todo vive aquí.
 *
 * No hay Google Sheets: un workflow de n8n ("ZEBRA | THEPALMS | Panel webinar
 * · datos") consulta Postgres en cada lectura y devuelve los registros de
 * "Samuel Maya"."17_webinar_smaya" ya cruzados con 02_entrada_leads_thepalms
 * y rr.asesores. El panel lo pide cada minuto.
 */

const GRUPOS = [
  {
    id: "thepalms",
    salida: ".",
    titulo: "Webinar The Palms",
    marca: "TP",
    subtitulo: "22 oct 2026 · 8:00 PM",
    archivo: "Postgres · Samuel Maya.17_webinar_smaya",
    hora: "8:00 PM",
    api: "https://n8n-n8n.9qd6cz.easypanel.host/webhook/thepalms-webinar?k=686f057d04d53bd346401044",
    fuenteNombre: "Postgres · 17_webinar_smaya",
    etiquetaRegistros: "Registros al webinar",
    claveLocal: "webinar-thepalms-objetivos",
    asesoresPorId: {
      15756412: "Mario Rosado",
      15899344: "Patricia Torres",
      15898832: "Lesfer López",
      15887432: "Sofía Morocoima",
    },
    // Fechas en dd/mm/aaaa. Las metas van por nombre del asesor.
    evento: {
      anio: "2026",
      objetivo: 200,
      fechaInicio: "14/10/2026",
      fechaWebinar: "22/10/2026",
      asesores: [
        { id: "15756412", nombre: "Mario Rosado" },
        { id: "15899344", nombre: "Patricia Torres" },
        { id: "15898832", nombre: "Lesfer López" },
        { id: "15887432", nombre: "Sofía Morocoima" },
      ],
      metas: {
        "Mario Rosado": 50,
        "Patricia Torres": 50,
        "Lesfer López": 50,
        "Sofía Morocoima": 50,
      },
    },
    hojas: [
      { nombre: "General", rol: "general" },
      { nombre: "Registros", rol: "registros" },
    ],
  },
];

module.exports = { GRUPOS };
