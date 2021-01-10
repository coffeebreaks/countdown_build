import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Count from "./Count";

function App() {
  return (
    <div className="App">
    
      <Count />

      <p>Givetvis är du välkommen att kontakta oss innan dess på <a href="mailto:info@poolbutiken.se"> info@poolbutiken.se</a> </p>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
