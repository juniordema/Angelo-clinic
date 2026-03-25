<template>
  <!--
    App.vue – Composant racine
    Inclut : Navbar, RouterView (pages), Footer, bouton WhatsApp flottant
  -->
  <div class="min-h-screen flex flex-col">

    <!-- Navigation fixe -->
    <Navbar />

    <!-- Contenu des pages (transition entre routes) -->
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <!-- Pied de page -->
    <Footer />

    <!-- ══════════════════════════════
         BOUTON WHATSAPP FLOTTANT
    ══════════════════════════════ -->
    <a
      :href="whatsappLink"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      class="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      <!-- Tooltip -->
      <span class="hidden sm:block bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-xl
                   opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap
                   pointer-events-none shadow-lg">
        💬 Écrire sur WhatsApp
      </span>

      <!-- Bouton rond -->
      <div class="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-2xl
                  shadow-xl hover:bg-green-400 transition-colors duration-300
                  whatsapp-pulse hover:scale-110 active:scale-95">
        💬
      </div>
    </a>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const whatsappLink = computed(() =>
  `https://wa.me/237699000000?text=${encodeURIComponent('Bonjour Clinique Santé Plus ! Je souhaite prendre rendez-vous.')}`
)
</script>

<style>
/* Transition entre les pages */
.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
