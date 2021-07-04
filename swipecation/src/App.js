import { DataProvider } from "./context/data";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TempHome from "./pages/TempHome";
import CreateBooking from "./pages/CreateBooking";
import Navbar from "./components/Navbar/Navbar";

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
    <DataProvider>
      <BrowserRouter basename="/">
        <div className="app">
          <div className="mb-5">
            <Navbar />
          </div>
          <div className="container">
            <Switch>
              <Route path="/booking/create" component={CreateBooking} />
              <Route path="/" component={TempHome} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
