const titleContainer = document.getElementsByClassName("title");
const listContainer = document.getElementsByClassName("list");

for (let i = 0; i < titleContainer.length; i++) {
      titleContainer[i].addEventListener("mouseover", () => {
            listContainer[i].style.visibility = "visible";
      });
      titleContainer[i].addEventListener("mouseout", () => {
            listContainer[i].style.visibility = "hidden";
      });
}
