<template>
  <!-- ======================================================
       WhatsAppButton.vue – Bouton flottant WhatsApp
       Visible uniquement après le premier scroll
       ====================================================== -->
  <Transition name="bounce">
    <a
      v-if="isVisible"
      href="https://wa.me/237699000000?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous%20à%20la%20Clinique%20Santé%20Plus."
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600
             text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center
             transition-all duration-200 hover:scale-110"
      aria-label="Contacter sur WhatsApp"
    >
      <!-- Pulsation -->
      <span class="absolute w-full h-full rounded-full bg-green-400 animate-ping opacity-30" />
      <!-- Icône WhatsApp -->
      <svg class="w-7 h-7 relative" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.555 4.1 1.524 5.823L.057 23.571l5.889-1.435A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.686-.497-5.23-1.368l-.374-.222-3.497.852.877-3.398-.244-.392A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    </a>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 100
}

onMounted(()  => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.bounce-enter-active {
  animation: bounceIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.bounce-leave-active {
  animation: bounceIn 0.2s ease reverse;
}
@keyframes bounceIn {
  from { opacity: 0; transform: scale(0.5); }
  to   { opacity: 1; transform: scale(1); }
}
</style>
