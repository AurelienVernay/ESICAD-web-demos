// retrieve tabs by class name
const tabs = Array.from(document.getElementsByClassName("tab-header"));
// for each tab
tabs.forEach((tab) => {
  // register a callback function to be triggered on click, for each element
  tab.addEventListener("click", (event) => {
    // remove class `active` on each tab header
    tabs.forEach((tab) => tab.classList.remove("active"));
    // retrieve element from event
    const anchorElement = event.target;
    // add class `active` to set the tab anchor active
    anchorElement.classList.add("active");
    // retrieve value of id to display from `data-target` attribute
    const idArticleToShow = anchorElement.dataset.target;
    // for each article, remove class `show`
    Array.from(document.getElementsByTagName("article")).forEach((article) =>
      article.classList.remove("show"),
    );
    // add class `show` to element to display
    document.getElementById(idArticleToShow).classList.add("show");
  });
});
