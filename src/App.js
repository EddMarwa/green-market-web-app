import React from "react";
import { db } from "./firebase";

const App = () => {
  React.useEffect(() => {
    console.log("Firebase DB:", db);
  }, []);

  return <h1>Green Market</h1>;
};

export default App;
