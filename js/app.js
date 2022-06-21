const modalHeaderOpen = () => {
  document.getElementById("addNewNoteBtn").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("headerModal").classList.add("header-modal-open");

    let myDiv = document.createElement("div");
    myDiv.className = "layer";

    document.body.appendChild(myDiv);
  });
};

modalHeaderOpen();

const closeHeaderModal = () => {
  document.getElementById("closeHeaderModal").addEventListener("click", (e) => {
    e.preventDefault();
    document
      .getElementById("closeHeaderModal")
      .classList.remove("header-modal-open");
  });
};
