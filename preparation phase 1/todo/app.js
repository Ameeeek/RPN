const inputBtn = document.getElementById("btn");
const filterBtn = document.getElementById("filter");
const newBtn = document.getElementById("enter");
const todoContainer = document.getElementById("container");
const formContent = document.getElementById("todo");
const deleteBtn = document.getElementById("del");
let cardContents = [];

if (cardContents.length == 0) {
  todoContainer.innerHTML = `
    <div class="card bg-sky-700 font-bold p-4 rounded-md text-white">
    <p>
    todo list mu kosong nih, mulai tambahkan todo list dengan mengetik todo list kamu dan tekan tombol input 
                </p>
                </div>
                `;
}

newBtn.addEventListener("click", function () {
  console.log(formContent);
  formContent.setAttribute("id", "todo");
  inputBtn.classList.add("opacity-100");
  formContent.setAttribute("placeholder", "masukkan todo disini");
  inputBtn.classList.add("opacity-0");
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

inputBtn.addEventListener("click", function (e) {
  if (formContent.value.length < 200) {
    e.preventDefault();
    cardContents.push({
      id: cardContents.length + 1,
      content: formContent.value,
    });
  } else {
    swal("Error", "teks tidak boleh lebih dari 200 karakter!", "warning");
  }
  fetch();
});

function bwa(e) {
  cardContents.splice(e - 1, 1);
  console.log(e - 1);
  fetch();
}

filterBtn.addEventListener("click", function () {
  formContent.setAttribute("id", "search");
  inputBtn.classList.add("opacity-0");
  formContent.setAttribute("placeholder", "cari todo");
  formContent.setAttribute("id", "search");
  if (formContent.value.length == 0) {
    todoContainer.innerHTML = `
    <div class="card bg-sky-700 font-bold p-4 rounded-md text-white">
    <p>
    lagi nyari todo list kamu? silahkan ketik todo list mu di form, dan tekan enter untuk mencari 
                </p>
                </div>
                `;
  } else {
    const searchContent = document.getElementById("search");
    searchContent.addEventListener("keypress", function (e) {
      if (e.key == "Enter") {
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

    inputBtn.classList.remove("opacity-100");
  }
});
