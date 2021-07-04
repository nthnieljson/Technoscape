import { SwipeableCards } from "./components/global/SwipeableCards.jsx";
import "./App.css";

const cityData = [
  {
    url: "https://picsum.photos/300",
    title: "West Jakarta, Jakarta",
  },
  {
    url: "https://picsum.photos/300",
    title: "East Jakarta, Jakarta",
  },
  {
    url: "https://picsum.photos/300",
    title: "North Jakarta, Jakarta",
  },
  {
    url: "https://picsum.photos/300",
    title: "South Jakarta, Jakarta",
  },
  {
    url: "https://picsum.photos/300",
    title: "Tokyo, Japan",
  },
];

const staycationData = [
  {
    url: "https://picsum.photos/300",
    title: "Hotel A",
    rating: "3.0",
    cost: "250k",
  },
  {
    url: "https://picsum.photos/300",
    title: "Apartment A",
    rating: "3.0",
    cost: "250k",
  },
  {
    url: "https://picsum.photos/300",
    title: "Hotel B",
    rating: "3.0",
    cost: "250k",
  },
  {
    url: "https://picsum.photos/300",
    title: "Villa A",
    rating: "3.0",
    cost: "250k",
  },
  {
    url: "https://picsum.photos/300",
    title: "Apartment B",
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
