import { Hero } from "./components";
import FlexContent from "./components/FlexContent";
import NavBar from "./components/NavBar";

import Sales from "./components/Sales";
import { heroapi, popularsales, toprateslaes, highlight } from "./data/data";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi}></Hero>
        <Sales endpoint={popularsales} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={highlight} ifExists />
      </main>
    </div>
  );
};

export default App;
