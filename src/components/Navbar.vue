<template>
  <!--
    Navbar.vue
    Barre de navigation responsive avec menu mobile
  -->
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white shadow-md' : 'bg-transparent'"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group" @click="closeMenu">
          <div class="w-10 h-10 bg-mint-500 rounded-xl flex items-center justify-center shadow-md
                      group-hover:bg-mint-600 transition-colors duration-200">
            <span class="text-white text-xl font-display font-bold">S+</span>
          </div>
          <div>
            <p class="font-display font-semibold text-navy-800 leading-tight text-sm md:text-base">
              Clinique Santé Plus
            </p>
            <p class="text-xs text-gray-500 font-body hidden sm:block">Douala, Cameroun</p>
          </div>
        </RouterLink>

        <!-- Navigation desktop -->
        <ul class="hidden md:flex items-center gap-1">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="font-body font-medium text-sm px-4 py-2 rounded-lg transition-all duration-200
                     text-navy-700 hover:text-mint-500 hover:bg-mint-400 hover:bg-opacity-10"
              active-class="text-mint-500 bg-mint-400 bg-opacity-10"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>

        <!-- CTA Button desktop -->
        <RouterLink
          :to="{ name: 'rendez-vous' }"
          class="hidden md:flex btn-primary text-sm"
        >
          <span>📅</span> Rendez-vous
        </RouterLink>

        <!-- Burger menu mobile -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-lg text-navy-700 hover:bg-gray-100 transition"
          aria-label="Menu"
        >
          <div class="w-5 space-y-1.5 cursor-pointer">
            <span
              class="block h-0.5 bg-current transition-all duration-300 origin-center"
              :class="menuOpen ? 'rotate-45 translate-y-2' : ''"
            ></span>
            <span
              class="block h-0.5 bg-current transition-all duration-300"
              :class="menuOpen ? 'opacity-0' : ''"
            ></span>
            <span
              class="block h-0.5 bg-current transition-all duration-300 origin-center"
              :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"
            ></span>
          </div>
        </button>
      </div>

      <!-- Menu mobile déroulant -->
      <Transition name="slide-down">
        <div
          v-if="menuOpen"
          class="md:hidden bg-white rounded-2xl shadow-xl mb-4 overflow-hidden"
        >
          <ul class="py-2">
            <li v-for="link in navLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                @click="closeMenu"
                class="flex items-center px-6 py-3 font-body font-medium text-navy-700
                       hover:bg-mint-400 hover:bg-opacity-10 hover:text-mint-600 transition"
                active-class="bg-mint-400 bg-opacity-10 text-mint-600"
              >
                {{ link.label }}
              </RouterLink>
            </li>
            <li class="px-4 pb-3 pt-1">
              <RouterLink :to="{ name: 'rendez-vous' }" @click="closeMenu" class="btn-primary w-full justify-center">
                📅 Prendre rendez-vous
              </RouterLink>
            </li>
          </ul>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
/**
 * Navbar.vue – Composition API
 */
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen  = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { to: { name: 'home' },     label: 'Accueil'  },
  { to: { name: 'services' }, label: 'Services' },
  { to: { name: 'medecins' }, label: 'Médecins' },
  { to: { name: 'contact' },  label: 'Contact'  },
]

const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu  = () => { menuOpen.value = false }

const handleScroll = () => { isScrolled.value = window.scrollY > 20 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
