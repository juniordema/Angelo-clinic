# 🏥 Clinique Angelo Santé Plus – Logpom,Douala, Cameroun


---

## 🚀 Installation & Démarrage

### 1. Cloner et installer les dépendances
```bash
### 2. Variables d'environnement
Créez un fichier `.env` à la racine :
```env
VITE_API_BASE_URL=https://api.votre-backend.cm/v1
```
> Sans `.env`, le projet utilise les données **mock** intégrées (fonctionne sans backend).

### 3. Lancer en développement
```bash
npm run dev
```
→ Ouvrir http://localhost:5173

### 4. Build production
```bash
npm run build
```

---

## 📁 Structure du projet

```
src/
├── assets/
│   └── main.css              # Styles globaux + Tailwind
├── components/
│   ├── Navbar.vue            # Navigation responsive
│   ├── Footer.vue            # Pied de page
│   ├── DoctorCard.vue        # Carte médecin réutilisable
│   ├── ServiceCard.vue       # Carte service réutilisable
│   └── AppointmentForm.vue   # Formulaire RDV avec validation
├── views/
│   ├── HomeView.vue          # Page d'accueil
│   ├── ServicesView.vue      # Page des services
│   ├── MedecinsView.vue      # Page des médecins
│   ├── RendezVousView.vue    # Page de prise de RDV
│   └── ContactView.vue       # Page de contact
├── router/
│   └── index.js              # Configuration Vue Router
├── services/
│   └── api.js                # Couche Axios + données mock
├── App.vue                   # Composant racine + bouton WhatsApp
└── main.js                   # Point d'entrée
```

---

## 🛠️ Technologies

| Outil          | Version | Usage                    |
|----------------|---------|--------------------------|
| Vue.js         | 3.4+    | Framework principal      |
| Vue Router     | 4.x     | Navigation SPA           |
| Axios          | 1.7+    | Appels API HTTP          |
| Tailwind CSS   | 3.4+    | Design utilitaire        |
| Vite           | 5.x     | Bundler & dev server     |

---

## 📄 Pages

| Route           | Vue               | Description                     |
|-----------------|-------------------|---------------------------------|
| `/`             | HomeView          | Accueil + hero + services aperçu |
| `/services`     | ServicesView      | Liste complète des services      |
| `/medecins`     | MedecinsView      | Liste médecins + filtres         |
| `/rendez-vous`  | RendezVousView    | Formulaire RDV complet           |
| `/contact`      | ContactView       | Contact + WhatsApp + carte       |

---

## 🔌 API – Endpoints attendus

```
GET  /medecins          → Liste des médecins
GET  /services          → Liste des services
POST /rendez-vous       → Soumettre un rendez-vous
```

> En l'absence de backend, les données mock dans `src/services/api.js` sont utilisées automatiquement.

---

## ✨ Fonctionnalités

- ✅ Design responsive mobile-first
- ✅ Navigation sticky avec détection du scroll
- ✅ Transitions de pages fluides
- ✅ Formulaire RDV avec validation complète
- ✅ Filtre des médecins par spécialité
- ✅ Bouton WhatsApp flottant avec animation
- ✅ Lazy loading des pages (code splitting)
- ✅ Données mock pour le développement
- ✅ Skeletons de chargement
- ✅ Titre de page dynamique par route

---

## 🎨 Personnalisation

### Couleurs (tailwind.config.js)
- **Navy** : couleur principale bleu marine
- **Mint** : accent vert menthe (#2fb88a)
- **Cream** : fond doux (#f7f5f0)

### Informations clinique (à modifier)
- **Téléphone** : Rechercher `+237699000000` dans tout le projet
- **Adresse** : Modifier dans `Footer.vue` et `ContactView.vue`
- **Nom** : "Clinique Santé Plus" → adapter à votre clinique

---

## 📞 Contact & Support

Développé pour la communauté médicale de Douala 🇨🇲
# site_clinique_angelo
