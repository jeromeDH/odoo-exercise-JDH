# 🌐 Odoo One-Page Website Exercise - made by Jérôme De Hertogh

This project is a **responsive one-page website** built as a front-end exercise using **HTML5**, **Bootstrap 5.3.8**, and **custom SCSS**.  
The goal was to reproduce a provided mock-up while ensuring responsiveness, accessibility, and modern design practices.

---

## 🧱 Tech Stack
- **Bootstrap 5.3.8** — grid layout, responsive utilities, and components
- **SCSS** — modular and maintainable custom styles
- **Bootstrap Icons** — lightweight icon system
- **Google Fonts** — custom typography to use Nunito Sans (the closest I found to your mockup)
- **Vanilla JavaScript** — interactive components (accordion)

---

## 📱 Features
- Fully responsive layout (mobile-first)
- Collapsible **FAQ accordion**
- Hamburger menu for mobile navigation
- Modern diagonal section separators using `clip-path`
- Clean grid structure and consistent spacing
- Reusable SCSS structure with variables and mixins
- Lazy-loaded images for performance

---

## 💬 Reflection on the Mock-up

### ✅ What I find good
- **Clear visual hierarchy** — the mock-up presents a strong first impression with distinct hero and call-to-action areas.
- **Consistent spacing and grid** — clean use of alignment helps guide the eye smoothly.
- **Color palette** — modern and minimalist, fits well with the product identity.

### ⚠️ What I find bad / less effective
- **Text contrast** — some light-colored text on light-colored backgrounds could reduce readability, ie: 
    - the white font in the hero section having a contrast of only 3,45 / 1 (so not enough for smaller texts)
    - the chips for the categories ("tools", "features", "technology")
- **Overlapping elements** — while stylish, they complicate usability, ie:
    - the video player on top of what seems to be timecodes (do they work together?)
- **Component purpose** — the element on the right ("manage cards") in the hero section might be too complex or text-heavy to be simply illustrative:
    - users might get confused whether they can interact with it or not

### 💡 What I would improve
- 1: Increase **color contrast** to make sure it complies with accessibility criterias.
- 2: Improve **accessibility** by avoiding modern looking layout (it should never get in the way of accessibility).
- 3: Simplify the **hero section** for clarity and provide a clearer space for the CTA.
- 4: Increase some **button sizes** to make them easier to click (ie: socials in the footer).

### 🔧 What I would change
- A: I'd change the **hero section**, to make clear at first sights what Odoo does:
    - Better text on the left (What means "Development" to people? Is the term "scratch" obvious to everyone?)
    - Another kind of illustration, maybe the logos of all the tools build by Odoo?
    - Showcase all the use cases covered by Odoo (from HR to finance, going through the website)?
- B: make all the **offers** provided by Odoo more clear:
    - It should be clearer at first sight, not only going through a full video for each section.
    - Maybe include only one video at the top and in the below sections only one illustration / section.
- C: Provide an **easy way to contact** someone, through a CTA. Many advertise to buy, but I don't see a simple way to reach a contact form.

---

I hope to be able to hear soon about my application process.
Thanks for taking the time to read me and review my exercise 😉
