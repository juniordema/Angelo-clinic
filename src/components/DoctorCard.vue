<template>
  <!--
    DoctorCard.vue
    Carte médecin réutilisable avec photo, nom, spécialité et CTA
  -->
  <div class="card p-6 flex flex-col items-center text-center group">
    <!-- Photo + badge disponibilité -->
    <div class="relative mb-4">
      <img
        :src="doctor.photo"
        :alt="`Photo de ${doctor.nom}`"
        class="w-24 h-24 rounded-2xl object-cover shadow-md
               group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />

      <span
        class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white"
        :class="doctor.disponible ? 'bg-mint-500' : 'bg-gray-300'"
        :title="doctor.disponible ? 'Disponible' : 'Non disponible'"
      ></span>
    </div>



    <h3 class="font-display font-semibold text-navy-800 text-lg leading-tight mb-1">
      {{ doctor.nom }}
    </h3>

    <span class="badge mb-3">{{ doctor.specialite }}</span>

    <div class="flex items-center gap-4 text-xs text-gray-500 mb-4">
      <span>🏥 {{ doctor.experience }}</span>
      <span>🗣️ {{ doctor.langues?.join(', ') }}</span>
    </div>

    <p class="text-xs mb-4" :class="doctor.disponible ? 'text-mint-600' : 'text-gray-400'">
      {{ doctor.disponible ? '✅ Disponible cette semaine' : '⏳ Prochain créneau disponible' }}
    </p>

    <RouterLink to="/rendez-vous" class="btn-primary text-sm w-full justify-center">
      📅 Prendre rendez-vous
    </RouterLink>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  doctor: {
    type: Object,
    required: true
  }
})
</script>
