/**
 * router/index.js
 * Configuration de Vue Router avec les 5 routes principales
 */
import { createRouter, createWebHistory } from 'vue-router'

// Importation des vues (statique)
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import MedecinsView from '@/views/MedecinsView.vue'
import RendezVousView from '@/views/RendezVousView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Accueil – Clinique Santé Plus' }
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
    meta: { title: 'Nos Services – Clinique Santé Plus' }
  },
  {
    path: '/medecins',
    name: 'medecins',
    component: MedecinsView,
    meta: { title: 'Nos Médecins – Clinique Santé Plus' }
  },
  {
    path: '/rendez-vous',
    name: 'rendez-vous',
    component: RendezVousView,
    meta: { title: 'Prendre Rendez-vous – Clinique Santé Plus' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Contact – Clinique Santé Plus' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes,
  // Comportement de défilement amélioré
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: 'smooth' })
      }, 100)
    })
  }
})

// Mise à jour du titre et gestion de l'état de chargement
router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Clinique Santé Plus'
})

export default router
