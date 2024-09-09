import { Hero } from "./components";
import FlexContent from "./components/FlexContent";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import Sales from "./components/Sales";
import Story from "./components/Story";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi}></Hero>
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />

        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} ifExists />
        <Story story={story} />
        <Footer footerAPI={footerAPI} />
      </main>
    </div>
  );
};

export default App;
