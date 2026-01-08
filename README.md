
Receipt Generator
A simple, offline-first web application for generating and managing payment receipts. Built with vanilla JavaScript, HTML, and CSS — no frameworks or backend required. All receipts are saved locally in the browser using localStorage.

Features
Create professional-looking receipts with custom details:
Receipt number
Business name
Customer name
Amount (in Naira ₦)
Purpose (with "Other" option for custom text)
Automatic current date
Receipts are saved automatically in the browser
View full receipt history with clean, responsive cards
Amount displayed in both numeric and word format (e.g., ₦50,000 → "Fifty Thousand Naira")
Fully responsive design (mobile-friendly)
Works completely offline after first load
No accounts, no server, no data collection — your data stays on your device
Live Demo
Open index.html in your browser to start using it immediately.

Project Structure
text
receipt-generator/
├── index.html              # Main page: Create new receipts
├── history.html            # View all saved receipts
├── css/
│   └── style.css           # Styling (Tailwind-inspired classes or custom)
├── js/
│   ├── script.js           # Form handling and receipt creation
│   ├── history.js          # Display saved receipts
│   ├── saveReceipts.js     # Logic for saving receipts
│   └── config/
│       └── storage.config.js # LocalStorage wrapper
└── README.md               # This file
How to Use
Open index.html in any modern browser
Fill in the receipt details
Click "Generate Receipt" or submit the form
Receipt is saved and you get a success message
Click "View Receipt History" to see all past receipts
Technologies Used
HTML5
CSS3 (with responsive design)
Vanilla JavaScript (ES6 Modules)
localStorage for persistence
No external dependencies
Customization
Easy to customize:

Change business name default in the form
Modify styling in css/style.css
Update currency symbol (currently ₦ for Naira)
Add logo or branding in the receipt card template
Browser Support
Works on all modern browsers:

Chrome
Firefox
Safari
Edge
Future Ideas
 Print receipts directly
 Export as PDF
 Search/filter receipts
 Delete individual receipts
 Add receipt templates
 Dark mode toggle
License
MIT License - feel free to use, modify, and distribute.

Made with ❤️ in Nigeria by Ayomide DevStudio (https://www.ayomidedevstudio.rf.gd)

Perfect for small businesses, freelancers, churches, schools, or anyone who needs quick receipt generation without internet or complex software.
