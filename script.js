const API_KEY = "f3b76d0034af8ae373aae206b993e014";
const BASE_URL = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}`;

const container = document.getElementById("flightContainer");
const loader = document.getElementById("loader");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const sortOption = document.getElementById("sortOption");
const toggleTheme = document.getElementById("toggleTheme");

let flights = [];

async function fetchFlights() {
  loader.style.display = "block";
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    flights = data.data.slice(0, 50); 
    displayFlights(flights);
  } catch (err) {
    container.innerHTML = "<p>Error fetching data</p>";
  }
  loader.style.display = "none";
}

function displayFlights(data) {
  container.innerHTML = "";

  data.map(flight => {
    const card = document.createElement("div");
    card.classList.add("flight-card");

    card.innerHTML = `
      <h3>${flight.airline.name}</h3>
      <p><strong>Flight:</strong> ${flight.flight.iata || "N/A"}</p>
      <p><strong>From:</strong> ${flight.departure.airport}</p>
      <p><strong>To:</strong> ${flight.arrival.airport}</p>
      <p><strong>Status:</strong> ${flight.flight_status}</p>
    `;

    container.appendChild(card);
  });
}

function applyFilters() {
  let result = [...flights];

  const searchValue = searchInput.value.toLowerCase();
  result = result.filter(f =>
    f.airline.name.toLowerCase().includes(searchValue) ||
    (f.flight.iata || "").toLowerCase().includes(searchValue)
  );

  if (statusFilter.value) {
    result = result.filter(f => f.flight_status === statusFilter.value);
  }

  if (sortOption.value === "az") {
    result.sort((a, b) => a.airline.name.localeCompare(b.airline.name));
  } else if (sortOption.value === "za") {
    result.sort((a, b) => b.airline.name.localeCompare(a.airline.name));
  }

  displayFlights(result);
}

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

searchInput.addEventListener("input", applyFilters);
statusFilter.addEventListener("change", applyFilters);
sortOption.addEventListener("change", applyFilters);

fetchFlights();