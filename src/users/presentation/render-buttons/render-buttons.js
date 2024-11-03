import usersStore from "../../store/users-store";
import "./render-buttons.css";
import { renderTable } from "../render-table/render-table";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderButtons = (element) => {
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next >";

  nextButton.addEventListener("click", async () => {
    await usersStore.loadNextPage();
    currentPageLabel.innerHTML = usersStore.getCurrentPage();
    renderTable(element);
  });

  const prevButton = document.createElement("button");
  prevButton.innerText = "< Prev";
  prevButton.addEventListener("click", async () => {
    await usersStore.loadPrevPage();
    currentPageLabel.innerHTML = usersStore.getCurrentPage();
    renderTable(element);
  });

  const currentPageLabel = document.createElement("span");
  currentPageLabel.id = "current-page";
  currentPageLabel.innerText = usersStore.getCurrentPage();

  element.append(prevButton, currentPageLabel, nextButton);
};
