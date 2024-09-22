import Navbar from "./pages/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import Nopage from "./pages/Nopage.jsx";

export default function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
