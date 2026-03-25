<template>
  <!-- ContactView.vue – Page de contact avec carte et infos -->
  <div class="pt-20">

    <!-- En-tête -->
    <section class="bg-navy-800 py-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="badge mb-4">On vous répond vite</span>
        <h1 class="font-display text-4xl md:text-5xl text-white font-semibold mb-4">Nous Contacter</h1>
        <p class="text-gray-400 max-w-xl mx-auto">
          Vous avez une question ? Notre équipe est disponible pour vous aider du lundi au samedi.
        </p>
      </div>
    </section>

    <!-- Cartes d'infos -->
    <section class="py-16 bg-cream">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div v-for="info in infos" :key="info.titre"
            class="card p-6 text-center group">
            <div class="w-14 h-14 bg-navy-50 rounded-2xl flex items-center justify-center text-2xl
                        mx-auto mb-4 group-hover:bg-mint-400 group-hover:bg-opacity-15 transition-colors duration-300">
              {{ info.icon }}
            </div>
            <h3 class="font-display font-semibold text-navy-800 mb-2">{{ info.titre }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ info.contenu }}</p>
            <a v-if="info.lien" :href="info.lien"
              class="inline-block mt-3 text-mint-600 text-sm font-semibold hover:underline">
              {{ info.labelLien }}
            </a>
          </div>
        </div>

        <!-- Zone carte + formulaire contact rapide -->
        <div class="grid lg:grid-cols-2 gap-10 items-start">

          <!-- Fausse carte (Google Maps embed en prod) -->
          <div class="card overflow-hidden">
            <div class="bg-navy-100 h-64 flex items-center justify-center relative">
              <!-- Placeholder carte -->
              <div class="absolute inset-0 bg-navy-50"
                style="background-image: linear-gradient(rgba(26,58,107,0.05) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(26,58,107,0.05) 1px, transparent 1px);
                       background-size: 30px 30px;">
              </div>
              <div class="relative z-10 text-center">
                <span class="text-5xl block mb-3">📍</span>
                <p class="font-semibold text-navy-800">Boulevard de la Liberté, Akwa</p>
                <p class="text-gray-500 text-sm">Douala, Cameroun</p>
                <a
                  href="https://maps.google.com/?q=Douala+Akwa+Cameroun"
                  target="_blank"
                  class="inline-block mt-3 btn-primary text-sm"
                >
                  🗺️ Ouvrir dans Maps
                </a>
              </div>
            </div>
            <div class="p-5">
              <h3 class="font-display font-semibold text-navy-800 text-lg mb-2">Notre adresse</h3>
              <p class="text-gray-500 text-sm">
                Boulevard de la Liberté, Quartier Akwa<br />
                Douala, Région du Littoral, Cameroun<br />
                (En face de la Pharmacie Centrale)
              </p>
            </div>
          </div>

          <!-- Formulaire de contact rapide -->
          <div class="card p-8">
            <h3 class="font-display font-semibold text-navy-800 text-2xl mb-1">Envoyez-nous un message</h3>
            <p class="text-gray-500 text-sm mb-6">Réponse garantie sous 24h ouvrées.</p>

            <div v-if="contactSubmitted" class="text-center py-8">
              <span class="text-4xl mb-3 block">📨</span>
              <h4 class="font-display text-xl text-navy-800 font-semibold mb-2">Message envoyé !</h4>
              <p class="text-gray-500 text-sm">Nous vous répondrons dans les meilleurs délais.</p>
            </div>

            <div v-else class="space-y-4">
              <input v-model="contact.nom" type="text" placeholder="Votre nom" class="input-field" />
              <input v-model="contact.email" type="email" placeholder="Votre email" class="input-field" />
              <input v-model="contact.sujet" type="text" placeholder="Sujet" class="input-field" />
              <textarea v-model="contact.message" rows="4" placeholder="Votre message..." class="input-field resize-none"></textarea>
              <button @click="envoyerContact" class="btn-primary w-full justify-center">
                ✉️ Envoyer le message
              </button>
            </div>
          </div>
        </div>

        <!-- Bouton WhatsApp principal -->
        <div class="mt-16 bg-green-500 rounded-2xl p-8 text-center text-white">
          <span class="text-5xl block mb-4">💬</span>
          <h3 class="font-display text-2xl font-semibold mb-2">Préférez-vous WhatsApp ?</h3>
          <p class="text-green-100 mb-6 max-w-md mx-auto">
            Écrivez-nous directement sur WhatsApp pour une réponse encore plus rapide, 7j/7.
          </p>
          <a
            :href="whatsappLink"
            target="_blank"
            class="inline-flex items-center gap-3 bg-white text-green-600 font-bold
                   px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <span class="text-xl">💬</span> Écrire sur WhatsApp
          </a>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const contactSubmitted = ref(false)

const contact = reactive({ nom: '', email: '', sujet: '', message: '' })

const envoyerContact = () => {
  if (!contact.nom || !contact.message) return
  // En production : appel API
  contactSubmitted.value = true
}

const whatsappLink = computed(() =>
  `https://wa.me/237699000000?text=${encodeURIComponent('Bonjour Clinique Santé Plus, je souhaite obtenir des informations.')}`
)

const infos = [
  {
    icon: '📍',
    titre: 'Adresse',
    contenu: 'Boulevard de la Liberté, Akwa, Douala, Cameroun',
    lien: 'https://maps.google.com/?q=Douala+Akwa',
    labelLien: 'Voir sur Maps →'
  },
  {
    icon: '📞',
    titre: 'Téléphone',
    contenu: '+237 699 000 000\n+237 233 000 000',
    lien: 'tel:+237699000000',
    labelLien: 'Appeler maintenant →'
  },
  {
    icon: '✉️',
    titre: 'Email',
    contenu: 'contact@clinique-sante.cm',
    lien: 'mailto:contact@clinique-sante.cm',
    labelLien: 'Écrire un email →'
  },
  {
    icon: '⏰',
    titre: 'Horaires',
    contenu: 'Lun–Ven 7h30–19h00\nSamedi 8h00–14h00\nUrgences 24h/24',
    lien: null,
    labelLien: ''
  },
]
</script>
