<template>
  <!-- ServicesView.vue – Page des services médicaux -->
  <div class="pt-20">

    <!-- En-tête page -->
    <section class="bg-navy-800 py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="badge mb-4">Ce que nous offrons</span>
        <h1 class="font-display text-4xl md:text-5xl text-white font-semibold mb-4">Nos Services Médicaux</h1>
        <p class="text-gray-400 max-w-2xl mx-auto text-lg">
          Une gamme complète de soins médicaux assurée par des spécialistes expérimentés, avec des équipements modernes.
        </p>
      </div>
    </section>

    <!-- Liste des services -->
    <section class="py-20 bg-cream">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Loader -->
        <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="n in 6" :key="n" class="bg-white rounded-2xl p-6 animate-pulse">
            <div class="w-14 h-14 bg-gray-200 rounded-2xl mb-4"></div>
            <div class="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div class="space-y-2">
              <div class="h-3 bg-gray-100 rounded"></div>
              <div class="h-3 bg-gray-100 rounded w-5/6"></div>
            </div>
          </div>
        </div>

        <!-- Grille des services -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard v-for="service in services" :key="service.id" :service="service" />
        </div>

      </div>
    </section>

    <!-- Bannière CTA -->
    <section class="py-16 bg-mint-500">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="font-display text-3xl text-white font-semibold mb-4">
          Besoin d'une consultation ?
        </h2>
        <p class="text-white text-opacity-90 mb-6">
          Nos médecins sont disponibles du lundi au samedi.
        </p>
        <RouterLink to="/rendez-vous" class="inline-flex items-center gap-2 bg-white text-mint-600 font-semibold
               px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
          📅 Prendre rendez-vous
        </RouterLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import ServiceCard from '@/components/ServiceCard.vue'
import { getServices } from '@/services/api.js'

const services = ref([])
const loading  = ref(true)

onMounted(async () => {
  services.value = await getServices()
  loading.value  = false
})
</script>
