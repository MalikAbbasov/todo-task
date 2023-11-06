const inp = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector(".list");
btn.onclick = function (e) {
    console.log(inp.value);
    const li = document.createElement("li");
    li.textContent = inp.value;
    list.append(li);
    li.addEventListener("click",function () {
        li.classList.toggle("active")
    })
    inp.value =""
    localStorage.setItem("salam", li.textContent)
}
