# ✈️ Live Flight Tracker Web Application

## 📌 Project Overview

This project is a **Live Flight Tracker Web Application** that allows users to view real-time flight information using the **Aviationstack API**. The application demonstrates core JavaScript concepts such as API integration, dynamic UI rendering, and the use of Array Higher-Order Functions.

---

## 🎯 Objective

The goal of this project is to build an interactive and responsive web application that:

* Fetches real-time flight data from a public API
* Displays the data dynamically
* Allows users to search, filter, and sort flight information
* Provides a clean and user-friendly interface

---

## 🌐 API Used

* **Aviationstack API**
* Provides real-time flight status and aviation data
* Documentation: https://aviationstack.com/documentation

---

## 🚀 Features

### 🔍 Core Features

* **Live Flight Data**

  * Displays real-time flight details such as airline, flight number, departure, arrival, and status

* **Search Functionality**

  * Search flights by airline name, flight number, or airport

* **Filtering**

  * Filter flights based on:

    * Flight status (e.g., active, landed, delayed)
    * Departure or arrival airport

* **Sorting**

  * Sort flights by:

    * Airline name (A–Z / Z–A)
    * Departure time
    * Arrival time

* **Responsive Design**

  * Fully responsive UI for mobile, tablet, and desktop devices

---

### ⚙️ Additional Features (Bonus)

* 🌙 Dark Mode / Light Mode toggle
* ⏳ Loading Indicator while fetching data
* 💾 Local Storage (to save preferences like theme or favorites)
* ⏱️ Debounced search input for better performance
* 📄 Pagination or Infinite Scroll for large datasets

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3 / Tailwind CSS / Bootstrap** – Styling and responsiveness
* **JavaScript (ES6+)** – Core logic and interactivity
* **Fetch API** – For API integration

---

## 🧠 JavaScript Concepts Used

* Fetch API for asynchronous data retrieval
* Promises & Async/Await
* DOM Manipulation
* Event Handling
* Array Higher-Order Functions:

  * `map()`
  * `filter()`
  * `sort()`
  * `find()`

---

## 📂 Project Structure

```id="q9d2m1"
live-flight-tracker/
│
├── index.html
├── style.css
├── script.js
├── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Add API Key

* Sign up on Aviationstack and get your API key
* Replace the API key in `script.js`:

```javascript id="x3n8c7"
const API_KEY = "YOUR_API_KEY_HERE";
```

### 2️⃣ Run the Project

* Open `index.html` in your browser
  OR
* Use Live Server (recommended)

---

## 📸 Screenshots (Optional)

*Add screenshots of your UI here*

---

## ⚠️ Error Handling

* Displays a message if API fails
* Handles empty search results
* Prevents crashes due to undefined data

---

## 📅 Milestone Progress

### ✅ Milestone 1

* Project idea finalized
* API selected
* Repository created
* README added

### 🔄 Milestone 2

* API integration using fetch
* Dynamic data rendering
* Responsive UI

### 🔄 Milestone 3

* Search, filter, and sort implemented using HOFs
* Interactive UI features added

### 🔄 Milestone 4

* Code cleanup and optimization
* Deployment
* Final documentation

---

## 🚀 Deployment

The project will be deployed using:

* GitHub Pages / Netlify / Vercel

---

## 💡 Future Improvements

* Add real-time map tracking of flights
* Integrate multiple APIs for richer data
* Improve UI animations
* Add user authentication

---

## 👨‍💻 Author

* **Vishal Kumar Mishra**

---

## 📜 License

This project is for educational purposes only.

---

## 🙌 Acknowledgements

* Aviationstack API
* Open-source community

---
