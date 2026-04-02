<template>
  <!--
    AppointmentForm.vue
    Formulaire de prise de rendez-vous avec validation complète
  -->
  <div class="bg-white rounded-2xl shadow-card p-8">

    <!-- Succès -->
    <Transition name="fade">
      <div v-if="submitted" class="text-center py-8">
        <div class="w-20 h-20 bg-mint-400 bg-opacity-15 rounded-full flex items-center justify-center
                    mx-auto mb-4 text-4xl animate-bounce">
          ✅
        </div>
        <h3 class="font-display text-2xl text-navy-800 font-semibold mb-2">
          Rendez-vous confirmé !
        </h3>
        <p class="text-gray-500 text-sm mb-6">
          Nous vous contacterons sous 24h pour confirmer votre créneau.
        </p>
        <button @click="reset" class="btn-outline text-sm">
          Prendre un autre rendez-vous
        </button>
      </div>
    </Transition>

    <!-- Formulaire -->
    <Transition name="fade">
      <div v-if="!submitted">
        <h2 class="font-display text-2xl text-navy-800 font-semibold mb-1">
          Votre rendez-vous
        </h2>
        <p class="text-gray-500 text-sm mb-8">
          Remplissez le formulaire, nous confirmons sous 24h.
        </p>

        <div class="space-y-5">

          <!-- Nom complet -->
          <div>
            <label class="block text-sm font-semibold text-navy-700 mb-1.5">
              Nom complet <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.nom"
              type="text"
              placeholder="Ex : junior demanou"
              class="input-field"
              :class="errors.nom ? 'border-red-400 ring-1 ring-red-400' : ''"
              @blur="validateField('nom')"
            />
            <p v-if="errors.nom" class="text-red-500 text-xs mt-1">{{ errors.nom }}</p>
          </div>

          <!-- Téléphone -->
          <div>
            <label class="block text-sm font-semibold text-navy-700 mb-1.5">
              Téléphone <span class="text-red-500">*</span>
            </label>
            <div class="flex gap-2">
              <span class="input-field w-auto px-3 bg-gray-50 text-gray-500 flex items-center whitespace-nowrap">
                🇨🇲 +237
              </span>
              <input
                v-model="form.telephone"
                type="tel"
                placeholder="6XX XXX XXX"
                class="input-field flex-1"
                :class="errors.telephone ? 'border-red-400 ring-1 ring-red-400' : ''"
                @blur="validateField('telephone')"
                maxlength="9"
              />
            </div>
            <p v-if="errors.telephone" class="text-red-500 text-xs mt-1">{{ errors.telephone }}</p>
          </div>

          <!-- Choix du médecin -->
          <div>
            <label class="block text-sm font-semibold text-navy-700 mb-1.5">
              Médecin <span class="text-red-500">*</span>
            </label>
            <select
              v-model="form.medecin_id"
              class="input-field"
              :class="errors.medecin_id ? 'border-red-400 ring-1 ring-red-400' : ''"
              @blur="validateField('medecin_id')"
            >
              <option value="">Sélectionnez un médecin</option>
              <option
                v-for="doc in medecins"
                :key="doc.id"
                :value="doc.id"
                :disabled="!doc.disponible"
              >
                {{ doc.nom }} – {{ doc.specialite }}
                {{ !doc.disponible ? '(Non disponible)' : '' }}
              </option>
            </select>
            <p v-if="errors.medecin_id" class="text-red-500 text-xs mt-1">{{ errors.medecin_id }}</p>
          </div>

          <!-- Date souhaitée -->
          <div>
            <label class="block text-sm font-semibold text-navy-700 mb-1.5">
              Date souhaitée <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.date"
              type="date"
              :min="minDate"
              class="input-field"
              :class="errors.date ? 'border-red-400 ring-1 ring-red-400' : ''"
              @blur="validateField('date')"
            />
            <p v-if="errors.date" class="text-red-500 text-xs mt-1">{{ errors.date }}</p>
          </div>

          <!-- Motif (optionnel) -->
          <div>
            <label class="block text-sm font-semibold text-navy-700 mb-1.5">
              Motif de consultation
              <span class="text-gray-400 font-normal">(optionnel)</span>
            </label>
            <textarea
              v-model="form.motif"
              placeholder="Décrivez brièvement votre motif..."
              rows="3"
              class="input-field resize-none"
            ></textarea>
          </div>

          <!-- Erreur globale -->
          <div v-if="globalError" class="bg-red-50 border border-red-200 rounded-xl p-4">
            <p class="text-red-600 text-sm">{{ globalError }}</p>
          </div>

          <!-- Bouton soumettre -->
          <button
            @click="handleSubmit"
            :disabled="loading"
            class="btn-primary w-full justify-center text-base py-4"
            :class="loading ? 'opacity-70 cursor-not-allowed' : ''"
          >
            <span v-if="loading" class="animate-spin">⏳</span>
            <span v-else>📅</span>
            {{ loading ? 'Envoi en cours...' : 'Confirmer le rendez-vous' }}
          </button>

          <p class="text-center text-xs text-gray-400">
            🔒 Vos informations sont strictement confidentielles
          </p>

        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
/**
 * AppointmentForm.vue – Composition API
 * Gère la validation et la soumission du formulaire de RDV
 */
import { ref, reactive, computed, onMounted } from 'vue'
import { getMedecins, soumettreRendezVous } from '@/services/api.js'

// ─── State ───────────────────────────────────────────────
const medecins    = ref([])
const loading     = ref(false)
const submitted   = ref(false)
const globalError = ref('')

const form = reactive({
  nom:        '',
  telephone:  '',
  medecin_id: '',
  date:       '',
  motif:      '',
})

const errors = reactive({
  nom:        '',
  telephone:  '',
  medecin_id: '',
  date:       '',
})

// Date minimum = demain
const minDate = computed(() => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
})

// ─── Validation ──────────────────────────────────────────
const rules = {
  nom: (v) => {
    if (!v.trim()) return 'Le nom est obligatoire.'
    if (v.trim().length < 3) return 'Le nom doit contenir au moins 3 caractères.'
    return ''
  },
  telephone: (v) => {
    if (!v.trim()) return 'Le numéro de téléphone est obligatoire.'
    if (!/^6\d{8}$/.test(v.replace(/\s/g, '')))
      return 'Numéro invalide (ex : 699000000).'
    return ''
  },
  medecin_id: (v) => {
    if (!v) return 'Veuillez choisir un médecin.'
    return ''
  },
  date: (v) => {
    if (!v) return 'La date est obligatoire.'
    if (v < minDate.value) return 'La date doit être dans le futur.'
    return ''
  },
}

const validateField = (field) => {
  errors[field] = rules[field](form[field])
}

const validateAll = () => {
  let valid = true
  for (const field of Object.keys(rules)) {
    errors[field] = rules[field](form[field])
    if (errors[field]) valid = false
  }
  return valid
}

// ─── Soumission ───────────────────────────────────────────
const handleSubmit = async () => {
  globalError.value = ''
  if (!validateAll()) return

  loading.value = true
  try {
    const result = await soumettreRendezVous({
      ...form,
      telephone: '+237' + form.telephone,
    })
    if (result.success) submitted.value = true
    else globalError.value = 'Une erreur est survenue. Veuillez réessayer.'
  } catch {
    globalError.value = 'Impossible d\'envoyer le formulaire. Vérifiez votre connexion.'
  } finally {
    loading.value = false
  }
}

const reset = () => {
  Object.assign(form, { nom: '', telephone: '', medecin_id: '', date: '', motif: '' })
  Object.assign(errors, { nom: '', telephone: '', medecin_id: '', date: '' })
  submitted.value = false
}

// ─── Chargement des médecins ──────────────────────────────
onMounted(async () => {
  medecins.value = await getMedecins()
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
