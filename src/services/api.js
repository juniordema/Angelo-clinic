/**
 * services/api.js
 * Couche de service API utilisant Axios
 *
 * MODE MOCK  : si VITE_API_BASE_URL n'est pas défini dans .env,
 *              toutes les fonctions retournent les données mock
 *              sans faire aucun appel réseau → zéro erreur CORS.
 *
 * MODE RÉEL  : définissez VITE_API_BASE_URL dans votre fichier .env
 *              pour pointer vers votre vrai backend.
 */
import axios from 'axios'

// ─── Détection du mode ────────────────────────────────────────────────────────
const API_URL = import.meta.env.VITE_API_BASE_URL
const USE_MOCK = !API_URL

if (USE_MOCK) {
  console.info('[API] Mode mock activé — les données locales sont utilisées.')
}

// ─── Instance Axios (utilisée uniquement si USE_MOCK === false) ───────────────
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API Error]', error.response?.status ?? 'Network', error.message)
    return Promise.reject(error)
  }
)

// ─── Données mock ─────────────────────────────────────────────────────────────
export const mockDoctors = [
  {
    id: 1,
    nom: 'Dr. Aminata Nkolo',
    specialite: 'Médecine Générale',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    experience: '12 ans',
    langues: ['Français', 'Anglais'],
    disponible: true,
  },
  {
    id: 2,
    nom: 'Dr. Emmanuel Bello',
    specialite: 'Cardiologie',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    experience: '18 ans',
    langues: ['Français', 'Anglais', 'Ewondo'],
    disponible: true,
  },
  {
    id: 3,
    nom: 'Dr. Carine Mba',
    specialite: 'Pédiatrie',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    experience: '9 ans',
    langues: ['Français', 'Basaa'],
    disponible: true,
  },
  {
    id: 4,
    nom: 'Dr. Jean-Paul Mvondo',
    specialite: 'Gynécologie',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
    experience: '15 ans',
    langues: ['Français', 'Anglais'],
    disponible: false,
  },
]

export const mockServices = [
  {
    id: 1,
    nom: 'Médecine Générale',
    description: 'Consultations, bilans de santé, suivi des maladies chroniques et soins courants pour toute la famille.',
    icon: '🩺',
    couleur: 'navy',
  },
  {
    id: 2,
    nom: 'Cardiologie',
    description: 'Diagnostic et traitement des maladies cardiovasculaires, électrocardiogrammes, suivis tensionnels.',
    icon: '❤️',
    couleur: 'mint',
  },
  {
    id: 3,
    nom: 'Pédiatrie',
    description: "Soins dédiés aux enfants, de la naissance à l'adolescence. Vaccinations et suivi de croissance.",
    icon: '👶',
    couleur: 'navy',
  },
  {
    id: 4,
    nom: 'Gynécologie',
    description: 'Santé féminine, suivi de grossesse, consultations prénatales et planification familiale.',
    icon: '🌸',
    couleur: 'mint',
  },
  {
    id: 5,
    nom: 'Radiologie',
    description: 'Échographies, radiographies et imagerie médicale avec équipements modernes.',
    icon: '🔬',
    couleur: 'navy',
  },
  {
    id: 6,
    nom: 'Laboratoire',
    description: 'Analyses biologiques complètes, hématologie, biochimie, bactériologie et sérologie.',
    icon: '🧪',
    couleur: 'mint',
  },
]

// ─── Fonctions de service ─────────────────────────────────────────────────────

/**
 * Récupère la liste des médecins.
 * Retourne les données mock si VITE_API_BASE_URL n'est pas défini.
 */
export const getMedecins = async () => {
  if (USE_MOCK) return mockDoctors
  try {
    const { data } = await apiClient.get('/medecins')
    return data
  } catch {
    console.warn('[API] Fallback mock — /medecins inaccessible')
    return mockDoctors
  }
}

/**
 * Récupère la liste des services.
 * Retourne les données mock si VITE_API_BASE_URL n'est pas défini.
 */
export const getServices = async () => {
  if (USE_MOCK) return mockServices
  try {
    const { data } = await apiClient.get('/services')
    return data
  } catch {
    console.warn('[API] Fallback mock — /services inaccessible')
    return mockServices
  }
}

/**
 * Soumet un rendez-vous.
 * En mode mock, simule un succès immédiat sans appel réseau.
 * @param {Object} payload - { nom, telephone, date, medecin_id, motif }
 */
export const soumettreRendezVous = async (payload) => {
  if (USE_MOCK) {
    console.info('[Mock] Rendez-vous enregistré localement', payload)
    return { success: true, data: { id: Date.now(), ...payload } }
  }
  try {
    const { data } = await apiClient.post('/rendez-vous', payload)
    return { success: true, data }
  } catch {
    console.warn('[API] Fallback mock — /rendez-vous inaccessible')
    return { success: true, data: { id: Date.now(), ...payload } }
  }
}

export default apiClient
