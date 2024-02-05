document.getElementsByTagName("button")[0].addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.innerText = "Ceci est un paragraphe ajouté";
  document.body.appendChild(newParagraph);
});
