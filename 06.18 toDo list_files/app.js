const boards = document.querySelectorAll(".board");

console.log(boards);

const todoElement = document.querySelector("#todo");
const inProgressElement = document.querySelector("#inProgress");
const blockedElement = document.querySelector("#blocked");
const doneElement = document.querySelector("#done");

// Unique ID generator

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36);
};

// Card element

const cardElement = (props) => {
  const props = { id, title, description, status, priority };

  return;
};
