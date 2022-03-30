import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data.js";

function App() {
  const dataElements = Data.map((dataCard) => {
    return (
      <Card
        key={dataCard.id}
        title={dataCard.title}
        description={dataCard.description}
        price={dataCard.price}
        coverImg={dataCard.coverImg}
        stats={dataCard.stats}
        location={dataCard.location}
        openSpots={dataCard.openSpots}
      />
    );
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
