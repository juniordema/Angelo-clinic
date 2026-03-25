<template>
  <!-- ServiceCard.vue – Carte d'un service médical -->
  <div
    class="card p-6 group border border-transparent"
    :class="service.couleur === 'mint' ? 'hover:border-mint-300' : 'hover:border-navy-200'"
  >
    <div
      class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4
             transition-transform duration-300 group-hover:scale-110"
      :class="service.couleur === 'mint' ? 'bg-mint-400 bg-opacity-15' : 'bg-navy-50'"
    >
      {{ service.icon }}
    </div>

    <h3 class="font-display font-semibold text-navy-800 text-xl mb-2">{{ service.nom }}</h3>

    <p class="text-gray-500 text-sm leading-relaxed">{{ service.description }}</p>

    <RouterLink
      to="/rendez-vous"
      class="inline-flex items-center gap-1 mt-4 text-mint-600 text-sm font-semibold
             hover:gap-2 transition-all duration-200"
    >
      Consulter <span>→</span>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({ service: { type: Object, required: true } })
</script>
