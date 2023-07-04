import "./styles.scss";

const title: string = "Hola Mundo";

const h2Element = document.createElement("h2");

h2Element.textContent = title;

document.getElementById("container").appendChild(h2Element);
