import { SwipeableCards } from "./components/global/SwipeableCards.jsx";
import "./App.css";

const cityData = [
  {
    url: "https://picsum.photos/300",
    name: "West Jakarta, Jakarta",
  },
  {
    url: "https://picsum.photos/300",
    name: "East Jakarta, Jakarta",
  },
  {
    url: "https://picsum.photos/300",
    name: "North Jakarta, Jakarta",
  },
  {
    url: "https://picsum.photos/300",
    name: "South Jakarta, Jakarta",
  },
  {
    url: "https://picsum.photos/300",
    name: "Tokyo, Japan",
  },
];

const staycationData = [
  {
    url: "https://picsum.photos/300",
    name: "Hotel A",
    rating: "3.0",
    cost: "250k",
  },
  {
    url: "https://picsum.photos/300",
    name: "Apartment A",
    rating: "3.0",
    cost: "250k",
  },
  {
    url: "https://picsum.photos/300",
    name: "Hotel B",
    rating: "3.0",
    cost: "250k",
  },
  {
    url: "https://picsum.photos/300",
    name: "Villa A",
    rating: "3.0",
    cost: "250k",
  },
  {
    url: "https://picsum.photos/300",
    name: "Apartment B",
    rating: "3.0",
    cost: "250k",
  },
];

function App() {
  return (
    <div className="App">
      <SwipeableCards data={cityData} />
      <SwipeableCards data={staycationData} />
    </div>
  );
}

export default App;
