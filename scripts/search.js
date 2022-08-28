import navbar2Inside from "../components/navbar2Inside.js";
document.querySelector("#nav2").innerHTML += navbar2Inside();

import navbar1Inside from "../components/navbar1Inside.js";
document.querySelector("#nav1").innerHTML += navbar1Inside();

import footerInside from "../components/footerInside.js";
document.querySelector("#footer").innerHTML += footerInside();

let append = (data) => {
    let main = document.getElementById("results");
    main.innerHTML = null;
    data.forEach((el) => {
        let div = document.createElement("div");
        div.setAttribute('id','div')
        let div1 = document.createElement("div");

        div.setAttribute("class", "news");
        let img = document.createElement("img");
        img.src = el.urlToImage;
        let p = document.createElement("h2");
        p.innerText = el.title;

        div1.append(p)
        div.append(img, div1);
        div.addEventListener('click', function () {
            Save(el)
        })
        main.append(div);
    });
}
let q = JSON.parse(localStorage.getItem("query"));
let sear = q.que;
console.log(sear);
let gett = async () => {
    let url = `https://newsapi.org/v2/everything?q=${q.que}&apiKey=cac2a3600da541eebf8893025a6f052a`;
    let res = await fetch(url);
    let data = await res.json();
    append(data.articles);
    console.log(data.articles);

}
gett();


let search = document.getElementById("search");
let get = async (event) => {
    if (event.key == "Enter") {
        let search1 = search.value;
        let obj = {
            que: search1,
        }
        localStorage.setItem("query", JSON.stringify(obj));
        window.location.reload();
    }
}
search.addEventListener("keydown", function () {
    get(event);
})




document.getElementById('search_input').addEventListener('click', show)
function show() {
    document.getElementById('search_input').style.visibility = "hidden"
    document.getElementById('search').style.visibility = "visible"

}
function Save(el) {
    localStorage.setItem('newss', JSON.stringify(el));
    window.location.href = "./news_detail.html";
}