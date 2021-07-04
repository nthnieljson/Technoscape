import { DataProvider } from "./context/data";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TempHome from "./pages/TempHome";
import CreateBooking from "./pages/CreateBooking";
import Navbar from "./components/Navbar/Navbar";

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
