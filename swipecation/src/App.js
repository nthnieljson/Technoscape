import { DataProvider } from "./context/data";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateBooking from "./pages/CreateBooking";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/TempHome";
import { COLOR } from "./constants/Style";

// const cityData = [
//   {
//     url: "https://picsum.photos/300",
//     title: "West Jakarta, Jakarta",
//   },
//   {
//     url: "https://picsum.photos/300",
//     title: "East Jakarta, Jakarta",
//   },
//   {
//     url: "https://picsum.photos/300",
//     title: "North Jakarta, Jakarta",
//   },
//   {
//     url: "https://picsum.photos/300",
//     title: "South Jakarta, Jakarta",
//   },
//   {
//     url: "https://picsum.photos/300",
//     title: "Tokyo, Japan",
//   },
// ];

function App() {
  return (
    <DataProvider>
      <BrowserRouter basename="/">
        <div
          style={{
            backgroundColor: COLOR.DARK,
            width: "100vw",
            height: "100vh",
            zIndex: "-1",
            position: "fixed",
            background: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(85px)",
          }}
        ></div>
        <div
          style={{
            zIndex: "-2",
            position: "fixed",
            borderRadius: "50%",
            width: "490px",
            height: "490px",
            background: "rgba(145, 117, 219, 0.8)",
            top: "490px",
            left: "-150px",
          }}
        ></div>
        <div
          style={{
            zIndex: "-2",
            position: "fixed",
            borderRadius: "50%",
            width: "379px",
            height: "379px",
            background: "#FFB9DB",
            top: "-58px",
            left: "54px",
          }}
        ></div>
        <div
          className="app"
          style={{
            zIndex: "0",
          }}
        >
          <div className="mb-5">
            <Navbar />
          </div>
          <div className="container">
            <Switch>
              <Route path="/booking/create" component={CreateBooking} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
