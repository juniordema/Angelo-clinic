<template>
  <!--
    Footer.vue
    Pied de page avec liens, infos de contact et mentions légales
  -->
  <footer class="bg-navy-900 text-white pt-16 pb-6">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Grille principale -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        <!-- Colonne 1 : Marque -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-mint-500 rounded-xl flex items-center justify-center">
              <span class="text-white font-display font-bold">S+</span>
            </div>
            <div>
              <p class="font-display font-semibold text-base">Clinique Santé Plus</p>
              <p class="text-xs text-gray-400">Douala, Cameroun</p>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Votre santé est notre priorité. Des soins modernes et humains au cœur de Douala depuis 2021.
          </p>
        </div>

        <!-- Colonne 2 : Navigation -->
        <div>
          <h4 class="font-display font-semibold text-lg mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li v-for="link in navLinks" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-gray-400 hover:text-mint-400 text-sm transition-colors duration-200"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Colonne 3 : Services -->
        <div>
          <h4 class="font-display font-semibold text-lg mb-4">Nos Services</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li>🩺 Médecine Générale</li>
            <li>❤️ Cardiologie</li>
            <li>👶 Pédiatrie</li>
            <li>🌸 Gynécologie</li>
            <li>🔬 Radiologie</li>
            <li>🧪 Laboratoire</li>
          </ul>
        </div>

        <!-- Colonne 4 : Contact -->
        <div>
          <h4 class="font-display font-semibold text-lg mb-4">Contact</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-2">
              <span class="mt-0.5">📍</span>
              <span>Boulevard de la Liberté, Logpom<br />Douala, Cameroun</span>
            </li>
            <li class="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+237699000000" class="hover:text-mint-400 transition">+237 690 83 69 01</a>
            </li>
            <li class="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:contact@clinique-sante.cm" class="hover:text-mint-400 transition">
                contact@clinique-sante.cm
              </a>
            </li>
          </ul>

          <!-- Horaires -->
          <div class="mt-4 p-3 bg-navy-800 rounded-xl text-xs text-gray-400">
            <p class="text-white font-semibold mb-1">⏰ Horaires</p>
            <p>Lun – Ven : 7h30 – 19h00</p>
            <p>Samedi : 8h00 – 14h00</p>
            <p class="text-mint-400">Urgences : 24h/24</p>
          </div>
        </div>
      </div>

      <!-- Séparateur -->
      <div class="border-t border-navy-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-gray-500 text-xs">
          Clinique Angelo – Tous droits réservés.
        </p>
        <p class="text-gray-600 text-xs">
          Conçu avec ❤️ à Douala, Cameroun
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const currentYear = computed(() => new Date().getFullYear())

const navLinks = [
  { to: '/',           label: 'Accueil'          },
  { to: '/services',   label: 'Nos Services'     },
  { to: '/medecins',   label: 'Nos Médecins'     },
  { to: '/rendez-vous',label: 'Rendez-vous'      },
  { to: '/contact',    label: 'Contact'          },
]
</script>
