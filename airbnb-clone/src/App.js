import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data.js";

function App() {
  const dataElements = Data.map((dataCard) => {
    return <Card key={dataCard.id} {...dataCard} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="cards-list">{dataElements}</section>
    </div>
  );
}

export default App;
