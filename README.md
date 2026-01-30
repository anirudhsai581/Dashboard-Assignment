# DigiSpace Dashboard – Frontend Assignment

**Live Demo:** https://anirudh-avm-digispace.netlify.app/  
**LinkedIn Profile:** https://www.linkedin.com/in/anirudh-sai-chava-66b399245

This repository contains a frontend implementation of the provided DigiSpace dashboard design. The goal was to recreate the UI as closely as possible with focus on layout accuracy, spacing, typography, and component structure.

---

## Tech Stack

- React
- Vite
- Apache ECharts
- JavaScript
- CSS

---

## Implementation details

- Each card in the design (Lights, Water Consumption, Carbon Intensity, Energy Consumption, Footfall, etc.) is implemented as a **separate React component**.
- The layout is intentionally **not responsive**, per the assignment requirements.

### Fixed resolution used

- **1920 × 1080 (Full HD)**

All spacing, alignment, and sizing decisions are made with this resolution in mind.

---

## Design accuracy

- Font families and color values are taken from the provided `colors_fonts.txt`.
- Font weights were chosen to closely match the design.
- Padding, margins, alignment, and font sizes are implemented to achieve visual parity where possible.
- Provided icons are used where available; visually similar alternatives were chosen when an exact icon was not present.

---

## Charts

All charts are implemented using **Apache ECharts**:

- Gauge chart for Lights
- Donut chart for Carbon Intensity
- Bar chart for Energy Consumption
- Area chart for Footfall

Chart styling (colors, radii, gradients, axis visibility) has been adjusted to match the design closely.

---

## Project structure (relevant files)

src/
├─ components/
│ ├─ Sidebar.jsx
│ ├─ LightsCard.jsx
│ ├─ WaterConsumptionCard.jsx
│ ├─ CarbonIntensityCard.jsx
│ ├─ EnergyConsumptionCard.jsx
│ └─ FootfallCard.jsx
├─ assets/
├─ App.jsx
├─ main.jsx
└─ index.css

---

## Setup

Install dependencies:

    npm install

Run locally (development server):

    npm run dev

Build for production:

    npm run build

---

## Deployment

- The repository is suitable for deployment on static hosting platforms (Netlify, Vercel).
- For Netlify: connect the GitHub repository and use the build command `npm run build` with the publish directory `dist`.

---

## Links

- **GitHub repository:** https://github.com/anirudhsai581/Dashboard-Assignment
- **Live Demo:** https://anirudh-avm-digispace.netlify.app/
- **LinkedIn Profile:** https://www.linkedin.com/in/anirudh-sai-chava-66b399245

---

## Notes

This project is submitted as a UI implementation task. It focuses on pixel accuracy and componentization. Backend integration, authentication, and real-time feeds are out of scope for this submission.

---
