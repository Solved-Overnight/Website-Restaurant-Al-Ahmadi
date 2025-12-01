# Al Ahmadi Restaurant 🇰🇼

![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Gemini AI](https://img.shields.io/badge/Google_Gemini-AI-8E75B2?style=for-the-badge&logo=google)

> A premium, culturally-inspired digital experience for Al Ahmadi Restaurant in Kuwait. Merging traditional hospitality with modern web technologies.

## 🌟 Overview

This project is a high-performance, responsive Single Page Application (SPA) designed to represent the luxury and warmth of **Al Ahmadi Restaurant**. It features a bespoke design system rooted in Kuwaiti aesthetics (Sand, Gold, Geometric Patterns), seamless bilingual support (RTL/LTR), and an integrated AI concierge.

## ✨ Key Features

### 🎨 Design & Experience
*   **Premium Aesthetic**: A custom color palette featuring Kuwaiti Gold (`#C5A059`), Deep Green, and Desert Sand.
*   **Smooth Animations**: Custom `Reveal` components utilizing Intersection Observers for fade-up, parallax, and stagger effects.
*   **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices.
*   **Cultural Pattern Overlays**: Subtle Arabesque geometric patterns used for texture and depth.

### 🛠 Functional Modules
*   **AI Concierge**: A floating chat widget powered by **Google Gemini 2.5 Flash**, capable of answering questions about the menu, hours, and culture in both English and Arabic.
*   **Bilingual Support (i18n)**: Instant toggle between English and Arabic with full Right-to-Left (RTL) layout adjustment.
*   **Online Ordering System**:
    *   Full menu with categories (Appetizers, Main, Desserts, Beverages).
    *   Shopping Cart with quantity management.
    *   Checkout simulation for Delivery and Takeaway.
*   **Reservation System**: A modal-based table booking form with validation.
*   **Data Visualization**: "Popular Times" bar chart using `Recharts`.
*   **Location Integration**: Embedded Google Maps without requiring a public API key.

## 🏗️ Tech Stack

*   **Core**: React 19, TypeScript
*   **Styling**: Tailwind CSS (Custom configuration)
*   **AI Integration**: `@google/genai` SDK
*   **Icons**: Lucide React
*   **Charts**: Recharts
*   **Fonts**: 'Amiri' (Arabic Serif) & 'Plus Jakarta Sans' (Modern Sans)

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/al-ahmadi-restaurant.git
    cd al-ahmadi-restaurant
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory to store your Google Gemini API key:
    ```env
    REACT_APP_API_KEY=your_google_genai_api_key_here
    ```

4.  **Run the application**
    ```bash
    npm start
    ```
    The app will run at `http://localhost:3000`.

## 📂 Project Structure

```
al-ahmadi-restaurant/
├── components/          # React Components
│   ├── ui/              # Reusable UI elements (Section, Reveal)
│   ├── About.tsx        # About section
│   ├── AIChat.tsx       # Gemini AI Chat widget
│   ├── CartSidebar.tsx  # Shopping cart drawer
│   ├── Hero.tsx         # Hero section with parallax
│   ├── Menu.tsx         # Menu grid and logic
│   ├── Navbar.tsx       # Sticky navigation
│   └── ...
├── contexts/            # Global State
│   ├── CartContext.tsx  # Cart logic
│   └── LanguageContext.tsx # i18n & Direction logic
├── data/
│   └── content.ts       # Menu items and Translation dictionaries
├── services/
│   └── geminiService.ts # AI API integration logic
└── types.ts             # TypeScript interfaces
```

## 🎨 Design System

The `tailwind.config.js` is customized with specific cultural colors:

*   **Kuwait Gold**: `#C5A059` (Primary Accent)
*   **Kuwait Green**: `#1A3C34` (Secondary/Background)
*   **Kuwait Cream**: `#F9F9F4` (Base Background)
*   **Kuwait Dark**: `#2D241E` (Text/Footer)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Designed with Kuwaiti Pride* 🇰🇼
