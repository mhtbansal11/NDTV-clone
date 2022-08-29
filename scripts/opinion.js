import navbar1Inside from "../components/navbar1Inside.js";
document.querySelector("#nav1").innerHTML += navbar1Inside();

import navbar2Inside from "../components/navbar2Inside.js";
document.querySelector("#nav2").innerHTML += navbar2Inside();

import footerInside from "../components/footerInside.js";
document.querySelector("#footer").innerHTML += footerInside();
// --------------------------------search function-------------------------------

document.getElementById("search").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let query = document.getElementById("s").value;

    function data(query) {
      let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=12bb5c24fa8345d9a01612d2c7b9a129`;
      getsearch(url);
      async function getsearch(url) {
        let res = await fetch(url);
        let data = await res.json();

        append(data.articles);
      }
    }
    data(query);
  }
});

// ---------------------------------------body news---------------------------------------------

// let url = `https://newsapi.org/v2/everything?q=ndtv&apiKey=efaf4c9a36944122b6eca506c319dcd2`
let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=12bb5c24fa8345d9a01612d2c7b9a129`;

let data;
async function getdata(url) {
  try {
    let res = await fetch(url);
    let result = await res.json();
    data = result.articles;
    append(data);
    console.log(data);
  } catch (err) {
    console.log("err", err);
  }
}
getdata(url);

function append(data) {
  let cnt = document.getElementById("cnt20");
  cnt.innerHTML = null;
  data.forEach((el) => {
    let div1 = document.createElement("div");
    div1.id = "div1";

    let img = document.createElement("img");
    // img.className = 'plus'
    let div2 = document.createElement("div");
    div2.id = "div2";
    let title = document.createElement("h2");
    title.innerText = `Opinion: ${el.title}`;
    let name = document.createElement("p");
    name.id = "name";
    let time = document.createElement("p");
    time.id = "time";
    time.innerText = `|  ${el.publishedAt}`;
    let des = document.createElement("p");
    des.innerText = el.description;

    if (el.urlToImage === null || el.author === null) {
      name.innerText = "NDTV LIVE";
      name.append(time);

      img.src = "https://anyflix.tv/upload/source/N-NDTV.png";
    } else {
      img.src = el.urlToImage;
      name.innerText = el.author;
      name.append(time);
    }

    img.addEventListener("click", function () {
      localStorage.setItem("news", JSON.stringify(el));
      location.href = "./news1.html";
    });
    title.addEventListener("click", function () {
      localStorage.setItem("news", JSON.stringify(el));
      location.href = "./news1.html";
    });

    div2.append(title, name, des);
    div1.append(img, div2);
    cnt.append(div1);
  });
}
document.getElementById("search_input").addEventListener("click", show);
function show() {
  document.getElementById("search_input").style.visibility = "hidden";
  document.getElementById("search").style.visibility = "visible";
}

document.getElementById("search").addEventListener("keydown", search);
async function search(event) {
  if (event.key == "Enter") {
    let search1 = document.getElementById("search").value;
    let obj = {
      que: search1,
    };
    let url = `https://newsapi.org/v2/everything?q=${search1}&apiKey=cac2a3600da541eebf8893025a6f052a`;
    let res = await fetch(url);
    let data = await res.json();

    data.articles;
    localStorage.setItem("query", JSON.stringify(obj));
    window.location.href = "search.html";
  }
}
