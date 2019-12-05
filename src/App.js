const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adope Me !"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Berger Allemand"
    }),
    React.createElement(Pet, {
      name: "Foxy",
      animal: "Dog",
      breed: "Fox Terrier"
    }),
    React.createElement(Pet, { name: "Doggo", animal: "Dog", breed: "Boxer" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
