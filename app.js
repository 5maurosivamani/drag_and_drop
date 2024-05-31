const king = document.querySelector(".chess-piece");
const squares = document.querySelectorAll(".square");
const infoDisplay = document.querySelector("#info");

console.log({ king, squares });

king.addEventListener("drag", dragging);
king.addEventListener("dragstart", dragStart);

squares.forEach((square) => {
  square.addEventListener("dragover", dragOver);
  square.addEventListener("dragenter", dragEnter);
  square.addEventListener("dragleave", dragLeave);
  square.addEventListener("drop", dragDrop);
  square.addEventListener("dragend", dragEnd);
});

let beingDragged;

function dragging() {
  console.log(beingDragged + " is being dragged");
}

function dragStart(e) {
  beingDragged = e.target;
  console.log("dragging has been started on " + beingDragged);
  infoDisplay.innerText = "You are dragging a king";
}

function dragOver(e) {
  e.preventDefault();
  console.log("You are dragging something over the" + e.target.classList);
}

function dragEnter(e) {
  e.target.classList.add("highlight");
  console.log("You are entering the space of " + e.target.classList);
}

function dragLeave(e) {
  console.log("You are leaving the space of " + e.target.classList);
  e.target.classList.remove("highlight");
}

function dragDrop(e) {
  e.target.append(beingDragged);
  console.log("You are dropped something into " + e.target.classList);
  e.target.classList.remove("highlight");
  infoDisplay.innerText = "";
}

function dragEnd(e) {
  console.log("You are drag has been ended in " + e.target.classList);
  e.target.classList.add("target");
  setTimeout(() => {
    e.target.classList.remove("target");
  }, 100);
}
