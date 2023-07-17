import Card from './Components/card';
import "./App.css";

function App() {
  return (
    <div className="App">
       <Card
        title={"Card title"}
        text={
          " Some quick example text to build on the card title and make up the\n" +
          "          bulk of the card's content."
        }
      >
        <img
          alt={""}
          src={"https://w.forfun.com/fetch/b1/b1f74a00706ac59ec75daa8ab0ac8e90.jpeg"}
          className="card-img-top"
        />
      </Card>
      <Card
        title={"Special title treatment"}
        text={
          "With supporting text below as a natural lead-in to additional content."
        }
      />
    </div>
  );
}

export default App;
