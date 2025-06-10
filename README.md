# 🚛 Skip Hire Redesign - React Challenge

## 📝 Overview
A complete redesign of the "Choose Your Skip Size" page for [WeWantWaste.co.uk](https://wewantwaste.co.uk/).  
**Key Goals:**  
✔ Modern UI/UX while preserving functionality  
✔ Fully responsive design  
✔ Dark mode support  

## ✨ Features
- **Dark/Light Mode Toggle** (persists via `localStorage`)
- **Interactive Skip Cards** with hover animations
- **Real-time Price Calculation** (VAT + transport costs)
- **API Integration** with loading/error states
- **Mobile-First** responsive layout

## 🛠 Technologies
![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-blue?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.4-yellow?logo=vite)

## 🚀 Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/afshinkarampour/skip-hire-redesign.git
2. Install dependencies:
   npm install
3. Run the dev server:
   npm run dev

## 🌐 API Usage
Fetches skip data from:
  `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`

## 🎨 Design Decisions
Component	  Approach
Skip Cards	Visual hierarchy with size/price
Dark Mode 	System preference + manual toggle
Mobile View	Simplified content on small screens

## 📌 Future Improvements
Add postcode input form
Implement multi-step checkout
Add Jest/Vitest unit tests

## 🤝 Contributing
Pull requests welcome! For major changes, please open an issue first.
