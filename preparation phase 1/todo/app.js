const inputBtn = document.getElementById("btn");
const filterBtn = document.getElementById("filter");
const newBtn = document.getElementById("enter");
const todoContainer = document.getElementById("container");
const formContent = document.getElementById("todo");
const deleteBtn = document.getElementById("del");
let cardContents = [];

if (cardContents.length == 0) {
  todoContainer.innerHTML = `
    <div class="card bg-sky-700 text-sm md:text-lg  font-bold p-4 rounded-md text-white">
    <p>
    todo list mu kosong nih, mulai tambahkan todo list dengan mengetik todo list kamu dan tekan tombol input 
    </p>
    </div>
    `;
}

inputBtn.addEventListener("click", function (e) {
  if (formContent.value.length < 200 || formContent.value.length > 1) {
    e.preventDefault();
    cardContents.push({
      id: cardContents.length + 1,
      content: formContent.value,
    });
    formContent.value = "";
    fetch();
  } else {
    swal("Error", "teks tidak boleh lebih dari 200 karakter!", "warning");
  }
});

newBtn.addEventListener("click", function () {
  formContent.removeAttribute("id", "search");
  formContent.setAttribute("id", "todo");
  inputBtn.classList.add("opacity-100");
  formContent.setAttribute("placeholder", "masukkan todo disini");
  fetch();
});

function fetch() {
  todoContainer.innerHTML = cardContents
    .map((content) => {
      return `
        <div class="card bg-sky-700 font-bold p-4 rounded-md text-white">
        <p>
        ${content.content}
                    </p>
                    <button
                    onclick="bwa(${content.id})"
                    type="button"
                    class="p-2 rounded-md ml-48 mt-6 text-white font-black bg-rose-600 active:text-black active:bg-white"
                    id="del"
                    >
                    delete
                    </button>
                    </div>
                    `;
    })
    .join("");
}
// });
function bwa(e) {
  cardContents.splice(e - 1, 1);
  console.log(e - 1);
  fetch();
}

filterBtn.addEventListener("click", function () {
  formContent.value = ''
  formContent.removeAttribute("id", "todo");
  formContent.setAttribute("placeholder", "cari todo");
  formContent.setAttribute("id", "search");
  const searchContent = document.getElementById("search");
  console.log(searchContent.value.length);
  if (searchContent.value.length == 0) {
    todoContainer.innerHTML = `
    <div class="card bg-sky-700 font-bold p-4 rounded-md text-white">
    <p>
    lagi nyari todo list kamu? silahkan ketik todo list mu di form, dan tekan enter untuk mencari
                </p>
                </div>
                `;
  } 
  searchContent.addEventListener("keydown", (e) => {
    if (e.isComposing == false) {
      let filtered = cardContents.filter((a) => {
        return a.content.includes(formContent.value);
      });
      todoContainer.innerHTML = filtered
        .map((content) => {
          return `
      <div class="card bg-sky-700 font-bold p-4 rounded-md text-white">
      <p>
      ${content.content}
                  </p>
                  </div>
                  `;
        })
        .join("");
    }
  });
  
});
