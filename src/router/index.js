/**
 * router/index.js
 * Configuration de Vue Router avec les 5 routes principales
 */
import { createRouter, createWebHistory } from 'vue-router'

// Lazy loading des pages pour de meilleures performances
const HomeView        = () => import('@/views/HomeView.vue')
const ServicesView    = () => import('@/views/ServicesView.vue')
const MedecinsView    = () => import('@/views/MedecinsView.vue')
const RendezVousView  = () => import('@/views/RendezVousView.vue')
const ContactView     = () => import('@/views/ContactView.vue')

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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Scroll en haut à chaque changement de page
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

// Mise à jour du titre de la page
router.afterEach((to) => {
  document.title = to.meta.title || 'Clinique Santé Plus'
})

export default router
