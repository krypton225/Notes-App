let headerModalTitle = document.getElementById("header-modal-name"),
  headerModalContent = document.getElementById("header-modal-content"),
  containerContentDiv = document.getElementById("containerContent"),
  addNoteBtn = document.getElementById("addNote");
class Note {
  constructor(noteTitle, noteContent) {
    this.noteTitle = noteTitle;
    this.noteTitle = noteContent;
  }

  elementsInDOM(noteTitle, noteContent) {
    let myNewCard = `
        <div class="container__content__card">
            <h4 class="container__content__card__title">${noteTitle}</h4>

            <div class="container__content__card__icon">
                <i class="fas fa-ellipsis-h"></i>
                <div class="container__content__card__icon__content">
                    <p class="container__content__card__icon__content__edit">تعديل</p>
                    <p class="container__content__card__icon__content__delete">حذف</p>
                </div> <!-- ./container__content__card__icon__content -->
            </div> <!-- ./container__content__card__icon -->

            <div class="container__content__card__body">
                ${noteContent}
            </div> <!-- ./container__content__card__body -->
        </div> <!-- ./container__content__card -->`;

    containerContentDiv.innerHTML += myNewCard;
  }
}

let myDiv = document.createElement("div");

const modalHeader = () => {
  // * Open the modal when click on the button in the header.
  document.getElementById("addNewNoteBtn").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("headerModal").classList.add("header-modal-open");

    myDiv.className = "layer";

    document.body.appendChild(myDiv);

    // * Close the modal when click on the close button in the modal body.
    const closeOfHeaderModal = () => {
      let closeHeaderModal = document.getElementById("closeHeaderModal");
      closeHeaderModal.addEventListener("click", () => {
        closePopup();
      });
    };

    closeOfHeaderModal();
  });
};

modalHeader();

const closePopup = () => {
  document.getElementById("headerModal").classList.remove("header-modal-open");

  setTimeout(() => {
    myDiv.classList.remove("layer");
  }, 600);
};

addNoteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (headerModalTitle !== "" && headerModalContent !== "") {
    let card = new Note(headerModalTitle.value, headerModalContent.value);

    card.elementsInDOM(headerModalTitle.value, headerModalContent.value);

    headerModalTitle.value = "";
    headerModalContent.value = "";

    closePopup();

    card = null;
  } else {
    alert("Please, Enter all inputs!");
  }
});
