<template>
  <!-- RendezVousView.vue – Page de prise de rendez-vous -->
  <div class="pt-20 min-h-screen bg-cream">

    <!-- En-tête -->
    <section class="bg-navy-800 py-14">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="badge mb-4">Simple et rapide</span>
        <h1 class="font-display text-4xl md:text-5xl text-white font-semibold mb-4">
          Prendre Rendez-vous
        </h1>
        <p class="text-gray-400 max-w-xl mx-auto">
          Remplissez le formulaire ci-dessous. Notre équipe vous contactera sous 24h pour confirmer votre créneau.
        </p>
      </div>
    </section>

    <!-- Contenu principal -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-10 items-start">

          <!-- Formulaire (3/5) -->
          <div class="lg:col-span-3">
            <AppointmentForm />
          </div>

          <!-- Infos pratiques (2/5) -->
          <div class="lg:col-span-2 space-y-5">

            <!-- Horaires -->
            <div class="card p-6">
              <h3 class="font-display font-semibold text-navy-800 text-xl mb-4">⏰ Horaires d'ouverture</h3>
              <ul class="space-y-2 text-sm">
                <li v-for="h in horaires" :key="h.jour"
                  class="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <span class="text-gray-600">{{ h.jour }}</span>
                  <span :class="h.urgent ? 'text-mint-600 font-semibold' : 'text-navy-700 font-medium'">
                    {{ h.heures }}
                  </span>
                </li>
              </ul>
            </div>

            <!-- Contact rapide -->
            <div class="card p-6">
              <h3 class="font-display font-semibold text-navy-800 text-xl mb-4">📞 Contact direct</h3>
              <div class="space-y-3">
                <a href="tel:+237699000000"
                  class="flex items-center gap-3 p-3 bg-cream rounded-xl hover:bg-gray-100 transition">
                  <span class="text-xl">📞</span>
                  <div>
                    <p class="text-xs text-gray-400">Téléphone</p>
                    <p class="font-semibold text-navy-800">+237 699 000 000</p>
                  </div>
                </a>
                <a :href="whatsappLink" target="_blank"
                  class="flex items-center gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition">
                  <span class="text-xl">💬</span>
                  <div>
                    <p class="text-xs text-gray-400">WhatsApp</p>
                    <p class="font-semibold text-green-700">Écrire sur WhatsApp</p>
                  </div>
                </a>
              </div>
            </div>

            <!-- Rappel -->
            <div class="bg-mint-500 bg-opacity-10 border border-mint-300 rounded-2xl p-5">
              <p class="text-mint-700 text-sm font-semibold mb-1">💡 Bon à savoir</p>
              <p class="text-gray-600 text-sm leading-relaxed">
                Apportez votre carnet de santé et vos ordonnances précédentes lors de votre consultation.
                Arrivez 10 minutes à l'avance.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppointmentForm from '@/components/AppointmentForm.vue'

const whatsappLink = computed(() =>
  `https://wa.me/237699000000?text=${encodeURIComponent('Bonjour, je souhaite prendre rendez-vous à la Clinique Santé Plus.')}`
)

const horaires = [
  { jour: 'Lundi – Vendredi', heures: '07h30 – 19h00' },
  { jour: 'Samedi',           heures: '08h00 – 14h00' },
  { jour: 'Dimanche',         heures: 'Fermé' },
  { jour: 'Urgences',         heures: '24h/24 – 7j/7', urgent: true },
]
</script>
