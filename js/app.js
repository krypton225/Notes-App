const modalHeader = () => {
  // * Open the modal when click on the button in the header.
  document.getElementById("addNewNoteBtn").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("headerModal").classList.add("header-modal-open");

    let myDiv = document.createElement("div");
    myDiv.className = "layer";

    document.body.appendChild(myDiv);

    // * Close the modal when click on the close button in the modal body.
    const closeOfHeaderModal = () => {
      let closeHeaderModal = document.getElementById("closeHeaderModal");
      closeHeaderModal.addEventListener("click", () => {
        document
          .getElementById("headerModal")
          .classList.remove("header-modal-open");

        setTimeout(() => {
          myDiv.classList.remove("layer");
        }, 600);
      });
    };

    closeOfHeaderModal();
  });
};

modalHeader();
