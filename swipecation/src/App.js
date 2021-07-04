import { DataProvider } from "./context/data";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TempHome from "./pages/TempHome";
import CreateBooking from "./pages/CreateBooking";

function App() {
  return (
    <DataProvider>
      <BrowserRouter basename="/">
        <div className="app">
          <h1>
            <div>
              <h1>Swipecation</h1>
            </div>
            <div className="container">
              <Switch>
                <Route path="/booking/create" component={CreateBooking} />
                <Route path="/" component={TempHome} />
              </Switch>
            </div>
          </h1>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
