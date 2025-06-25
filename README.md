# 🥚 Easter Egg: Enorm → Fightclub Transition Animation

Een interactieve Easter egg die op speelse wijze de overgang van **Enorm** naar **Fightclub** visualiseert. De animatie combineert branding, interactie en verrassing in een verborgen ervaring die alleen zichtbaar wordt bij specifieke acties van de gebruiker.

> 🚀 Live demo: [Bekijk de Easter Egg](https://easter-eggs-doaaaltair.vercel.app)

---

## 🎯 Doel van het project

Ontwikkelen van een interactieve Easter egg die de overgang van **Enorm** naar **Fightclub** markeert en op een verrassende manier de identiteit van beide bedrijven samenbrengt. De ervaring is verborgen – bezoekers ontdekken het alleen via speelse interactie.

---

## 📸 Screenshots

| Enorm-logo vliegt | Bokshandschoen verschijnt | Confetti + Fightclub-logo |
|-------------------|---------------------------|----------------------------|
| ![vliegend logo](./public/screenshots/enorm-flying.png) | ![handschoen](./public/screenshots/punch.png) | ![confetti](./public/screenshots/confetti.png) |

---

## ⚙️ Functionaliteiten

✅ Verborgen Easter egg (klik-gestuurd)  
✅ Vliegend Enorm-logo (met groei-effect)  
✅ Mouseover pauzeert animatie  
✅ Bokshandschoen met punchgeluid  
✅ Confetti + cheer-geluid ter afsluiting  
✅ Aangepaste muiscursor als bokshandschoen  
✅ Gebouwd met HTML, CSS, JavaScript

---

## 🧩 Interactieproces uitgelegd

### 🔍 Start met een verborgen logo
- **Wat**: Het Enorm-logo is klein (100x75px) en verborgen achter het Fightclub-hond-logo.
- **Waarom**: Hierdoor ontstaat een echte Easter egg – een verborgen verrassing die pas na klik zichtbaar wordt.

### 🐶 Klik op de hond → vliegend logo
- **Wat**: Na een klik op de hond verschijnt het Enorm-logo, groeit naar 300x150px en begint direct te vliegen naar willekeurige plekken (elke 3 seconden).
- **Waarom**: Directe actie zorgt voor een dynamisch, speels effect.

### 🛑 Mouseover stopt het vliegen
- **Wat**: Als je met de muis over het logo beweegt, stopt het.
- **Waarom**: Dit geeft de gebruiker controle – je kunt het logo als het ware "vangen".

### 👊 Tweede klik → bokshandschoen-slag
- **Wat**: Klik op het vliegende logo toont een bokshandschoen die het logo "slaat", met een punch-geluid.
- **Waarom**: Het voegt spanning en humor toe – het logo wordt letterlijk uit de weg geslagen.

### 🎉 Feestelijke afsluiting
- **Wat**: Het Enorm-logo verdwijnt, het Fightclub-logo verschijnt met confetti en een juichend geluid. Alles verdwijnt na vier seconden.
- **Waarom**: Een feestelijke, positieve afsluiter die de merkovergang krachtig benadrukt.

---

## 🛠️ Gebruikte technologieën

- HTML5 & CSS3
- JavaScript (DOM-events, `setInterval`, `Math.random`)
- Externe library: [`canvas-confetti`](https://www.npmjs.com/package/canvas-confetti)
- Custom cursors via `cursor: url(...)`
- Hosting via GitHub Pages & Vercel

---

## 🧪 Installatie en gebruik

1. Clone deze repository:

   ```bash
   git clone https://github.com/DoaaAltair/Easter-Eggs.git
   cd Easter-Eggs
