<template>
  <!-- MedecinsView.vue – Liste des médecins -->
  <div class="pt-20">

    <!-- En-tête -->
    <section class="bg-navy-800 py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="badge mb-4">Notre équipe</span>
        <h1 class="font-display text-4xl md:text-5xl text-white font-semibold mb-4">Nos Médecins Spécialistes</h1>
        <p class="text-gray-400 max-w-2xl mx-auto text-lg">
          Une équipe pluridisciplinaire de professionnels de santé dévoués à votre bien-être.
        </p>
      </div>
    </section>

    <!-- Filtres par spécialité -->
    <section class="bg-white border-b border-gray-100 sticky top-16 z-30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-3 overflow-x-auto py-4 scrollbar-hide">
          <button
            v-for="spec in specialites"
            :key="spec"
            @click="filtreActif = spec"
            class="whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
            :class="filtreActif === spec
              ? 'bg-navy-800 text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'"
          >
            {{ spec }}
          </button>
        </div>
      </div>
    </section>

    <!-- Liste des médecins -->
    <section class="py-16 bg-cream">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Loader skeleton -->
        <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="n in 4" :key="n" class="bg-white rounded-2xl p-6 animate-pulse text-center">
            <div class="w-24 h-24 bg-gray-200 rounded-2xl mx-auto mb-4"></div>
            <div class="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
            <div class="h-3 bg-gray-100 rounded w-1/2 mx-auto"></div>
          </div>
        </div>

        <!-- Grille médecins filtrés -->
        <template v-else>
          <div v-if="medecinsFiltres.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DoctorCard v-for="doc in medecinsFiltres" :key="doc.id" :doctor="doc" />
          </div>
          <div v-else class="text-center py-16 text-gray-400">
            <span class="text-4xl mb-4 block">🔍</span>
            <p>Aucun médecin trouvé pour cette spécialité.</p>
          </div>
        </template>

      </div>
    </section>

    <!-- CTA rejoindre -->
    <section class="py-14 bg-navy-800 text-center">
      <div class="max-w-2xl mx-auto px-4">
        <h2 class="font-display text-2xl text-white font-semibold mb-3">
          Vous êtes médecin ? Rejoignez notre équipe
        </h2>
        <p class="text-gray-400 mb-6 text-sm">
          Nous recrutons des professionnels de santé passionnés pour renforcer notre équipe.
        </p>
        <a href="mailto:recrutement@clinique-sante.cm"
          class="btn-primary">
          ✉️ Candidater
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import DoctorCard from '@/components/DoctorCard.vue'
import { getMedecins } from '@/services/api.js'

const medecins    = ref([])
const loading     = ref(true)
const filtreActif = ref('Tous')

onMounted(async () => {
  medecins.value = await getMedecins()
  loading.value  = false
})

// Liste dynamique des spécialités uniques
const specialites = computed(() => {
  const specs = medecins.value.map(d => d.specialite)
  return ['Tous', ...new Set(specs)]
})

// Médecins filtrés selon spécialité sélectionnée
const medecinsFiltres = computed(() => {
  if (filtreActif.value === 'Tous') return medecins.value
  return medecins.value.filter(d => d.specialite === filtreActif.value)
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
