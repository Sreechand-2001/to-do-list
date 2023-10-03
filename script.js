`use strict`;
const getInput = document.querySelector(".getInput");
const deleteAll = document.querySelector(".deleteAll");
const container = document.querySelector(".container");
const addBtn = document.querySelector(".addBtn");
const editBox = document.querySelector(".editBox");
const wrapper = document.querySelector(".wrapper");
getInput.focus();
let giveData = () => {
  if (getInput.value !== "") {
    itemBox(getInput.value);
    setTimeout(() => {
      getInput.value = "";
    }, 300);
  } else {
    getInput.placeholder = "Do enter something ...";
    setTimeout(() => {
      getInput.placeholder = "Type Here ...";
    }, 2000);
  }
};
getInput.addEventListener("keydown", (x) => {
  if (x.code === "Enter") {
    giveData();
  }
});
addBtn.addEventListener("click", () => {
  giveData();
});
deleteAll.addEventListener("click", () => {
  arr.forEach((x) => {
    x.style.transform = "scale(0)";
    setTimeout(() => {
      x.style.display = "none";
    }, 200);
  });
});
let arr = [];
let itemBox = (item) => {
  const div = document.createElement("div");
  const content = document.createElement("div");
  const options = document.createElement("div");
  const deleteBtn = document.createElement("i");
  const editBtn = document.createElement("i");
  div.className = "item";
  options.className = "options";
  content.className = "content";
  deleteBtn.className = "fa-solid fa-trash";
  editBtn.className = "fa-solid fa-pen";
  content.innerHTML = `<p>${item}</p>`;
  wrapper.appendChild(div);
  div.appendChild(content);
  div.appendChild(options);
  options.appendChild(deleteBtn);
  options.appendChild(editBtn);
  arr.push(div);
  setTimeout(() => {
    div.style.transform = "scale(1)";
  }, 100);
  deleteBtn.addEventListener("click", () => {
    content.style.textDecoration = "line-through";
    div.style.transform = "scale(0)";
    setTimeout(() => {
      div.style.display = "none";
    }, 500);
  });
  const getEditInput = document.querySelector(".getEditInput");
  const checkBtn = document.querySelector(".checkBtn");
  const section = document.querySelector("section");
  editBtn.addEventListener("click", () => {
    let counter = true;
    section.classList.toggle("blur");
    editBox.style.visibility = "visible";
    getEditInput.value = content.innerText;
    getEditInput.focus();
    checkBtn.addEventListener("click", () => {
      if (counter === true) {
        counter = false;
        checkBtn.style.color = "#A2FF86";
        content.innerText = getEditInput.value;
        setTimeout(() => {
          section.classList.toggle("blur");
          editBox.style.visibility = "hidden";
          checkBtn.style.color = "red";
        }, 300);
      }
    });
  });
};
