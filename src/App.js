import { Route, Switch } from "react-router-dom";
import "./App.css";
import Anchor from "./components/Anchor/Anchor";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Documentation } from "./Pages/Documentation/Documentation";
import { Homepage } from "./Pages/Homepage/Homepage";
import { Members } from "./Pages/Members/Members";
import { Presentation } from "./Pages/Presentation/Presentation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/presentation" component={Presentation} />
        <Route exact path="/documentation" component={Documentation} />
        <Route exact path="/members" component={Members} />
      </Switch>
      <Footer />
      <Anchor />
    </div>
  );
}

export default App;
