import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Forms from "./pages/Forms";
import Stash from "./pages/Stash";

function App() {
  return (
    <>
      <Router>
        <header className="absolute left-0 top-0 w-screen">
          <HeaderComponent />
        </header>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/forms">
              <Forms />
            </Route>
            <Route path="/stash">
              <Stash />
            </Route>
          </Switch>
        </div>
        <footer className="static left-0 bottom-0 footerComp">
          <FooterComponent />
        </footer>
      </Router>
    </>
  );
}

export default App;
