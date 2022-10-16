import Card from "./components/card/Card";
import {languages} from "./helper/data.js"
import "./app.css";
import react from "./assets/react.svg"

function App() {
  return (
    <div className="content">
      <div className="headerReact">
        <img className="reactimg" src={react} alt="" />
      </div>
      <div className="container">
        {languages.map(item=>(
          <Card key={item.name} data = {item}/>
        ))}      
      </div>
    </div>
  );
}

export default App;
