import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParam";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adope Me !"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Berger Allemand"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Foxy",
  //     animal: "Dog",
  //     breed: "Fox Terrier"
  //   }),
  //   React.createElement(Pet, { name: "Doggo", animal: "Dog", breed: "Boxer" })
  // ]);

  return (
    // <div>
    //   <h1>Adopt Me !</h1>
    //   <Pet name="Luna" animal="Ship" breed="Black" />
    //   <Pet name="Doggo" animal="Dog" breed="Berger Allemand" />
    //   <Pet name="Speedy" animal="Mouse" breed="Mixed" />
    // </div>
    <div>
      <h1 id="test">Adopt Me !</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
