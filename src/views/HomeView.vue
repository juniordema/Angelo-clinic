<template>
  <div>

    <!-- HERO -->
    <section class="relative min-h-screen flex items-center bg-navy-900 overflow-hidden pt-20">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -right-32 top-1/4 w-96 h-96 bg-mint-500 opacity-10 rounded-full blur-3xl"></div>
        <div class="absolute -left-20 bottom-1/3 w-72 h-72 bg-navy-600 opacity-40 rounded-full blur-2xl"></div>
        <div class="absolute inset-0 opacity-5"
          style="background-image:radial-gradient(circle,#fff 1px,transparent 1px);background-size:32px 32px"></div>
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="badge mb-4 inline-block animate-fade-in-up">🏥 Clinique agréée – Douala, Cameroun</span>
          <h1 class="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6 animate-fade-in-up delay-100">
            Votre santé,<br /><span class="text-mint-400">notre mission</span>
          </h1>
          <p class="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg animate-fade-in-up delay-200">
            Des soins de qualité avec une équipe médicale expérimentée. Consultez nos médecins spécialistes et prenez rendez-vous en ligne.
          </p>
          <div class="flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <RouterLink to="/rendez-vous" class="btn-primary text-base px-8 py-4">📅 Prendre rendez-vous</RouterLink>
            <RouterLink to="/services" class="btn-outline-white text-base px-8 py-4">Nos services →</RouterLink>
          </div>
          <div class="mt-8 flex items-center gap-3 animate-fade-in-up delay-400">
            <div class="w-2 h-2 bg-mint-400 rounded-full animate-pulse"></div>
            <p class="text-gray-400 text-sm">
              Urgences 24h/24 :
              <a href="tel:+237699000000" class="text-mint-400 font-semibold hover:underline">+237 699 000 000</a>
            </p>
          </div>
        </div>

        <div class="hidden lg:flex flex-col gap-4 animate-fade-in delay-200">
          <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-10">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-mint-500 rounded-xl flex items-center justify-center text-xl">⭐</div>
              <div>
                <p class="text-white font-semibold">Clinique de référence</p>
                <p class="text-gray-400 text-sm">Plus de 15 ans d'excellence</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-3">
              <div v-for="stat in stats" :key="stat.label"
                class="bg-white bg-opacity-5 rounded-xl p-3 text-center">
                <p class="text-mint-400 font-display text-2xl font-semibold">{{ stat.value }}</p>
                <p class="text-gray-400 text-xs">{{ stat.label }}</p>
              </div>
            </div>
          </div>
          <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-5 border border-white border-opacity-10">
            <p class="text-white font-semibold mb-3 text-sm">🗓️ Créneaux disponibles aujourd'hui</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="slot in slots" :key="slot"
                class="bg-mint-500 bg-opacity-20 text-mint-400 text-xs px-3 py-1.5 rounded-lg font-medium">
                {{ slot }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="#f7f5f0"/>
        </svg>
      </div>
    </section>

    <!-- SERVICES APERÇU -->
    <section class="py-20 bg-cream">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <span class="badge mb-3">Nos spécialités</span>
          <h2 class="section-title">Des soins complets<br />pour toute la famille</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard v-for="service in services.slice(0,6)" :key="service.id" :service="service" />
        </div>
        <div class="text-center mt-10">
          <RouterLink to="/services" class="btn-outline">Voir tous nos services →</RouterLink>
        </div>
      </div>
    </section>

    <!-- POURQUOI NOUS -->
    <section class="py-20 bg-navy-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="badge mb-4">Pourquoi nous ?</span>
            <h2 class="section-title text-white mb-6">Une clinique moderne<br />au service des Doualais</h2>
            <p class="text-gray-400 leading-relaxed mb-8">
              Depuis 2010, Clinique Santé Plus offre des soins de qualité internationale dans un environnement chaleureux, avec les équipements les plus modernes du Cameroun.
            </p>
            <RouterLink to="/medecins" class="btn-primary">Rencontrer nos médecins →</RouterLink>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="f in features" :key="f.title"
              class="bg-navy-700 rounded-2xl p-5 hover:bg-navy-600 transition-colors duration-300">
              <span class="text-3xl mb-3 block">{{ f.icon }}</span>
              <h4 class="text-white font-semibold mb-1">{{ f.title }}</h4>
              <p class="text-gray-400 text-sm">{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-cream">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <span class="text-5xl mb-6 block">📅</span>
        <h2 class="section-title mb-4">Prêt à prendre soin de vous ?</h2>
        <p class="text-gray-500 mb-8 max-w-xl mx-auto">Prenez rendez-vous en quelques clics. Consultation confirmée sous 24h.</p>
        <RouterLink to="/rendez-vous" class="btn-primary text-base px-10 py-4">📅 Prendre rendez-vous maintenant</RouterLink>
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
onMounted(async () => { services.value = await getServices() })

const stats    = [{ value:'15+', label:'Années' }, { value:'20+', label:'Médecins' }, { value:'50k+', label:'Patients' }]
const slots    = ['08h00','09h30','11h00','14h00','15h30','17h00']
const features = [
  { icon:'🩺', title:'Équipe experte',      desc:'20+ médecins spécialistes certifiés.' },
  { icon:'🏥', title:'Équipements modernes', desc:'Matériel médical de dernière génération.' },
  { icon:'🕐', title:'Urgences 24h/24',      desc:'Disponibles à toute heure pour vous.' },
  { icon:'💳', title:'Assurances acceptées', desc:'CNPS, MGEN, assurances privées.' },
]
</script>
