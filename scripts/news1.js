import navbar1Inside from "../components/navbar1Inside.js";
document.querySelector("#nav1").innerHTML += navbar1Inside();

import navbar2Inside from "../components/navbar2Inside.js";
document.querySelector("#nav2").innerHTML += navbar2Inside();

import footerInside from "../components/footerInside.js";
document.querySelector("#footer").innerHTML += footerInside();

let data = JSON.parse(localStorage.getItem("news"));

function append(data) {
  let cnt = document.getElementById("cnt2");
  cnt.innerHTML = null;
  document.getElementById("newsT").innerText = ` ${data.title}`;
  document.getElementById("head").innerText = data.title;
  document.getElementById("name").innerText = data.author;
  document.getElementById("time").innerText = `Updated: ${data.publishedAt}`;
  document.getElementById("img").src = data.urlToImage;

  // let img = document.createElement('img');
  // img.id = 'bigimg'
  // img.src = data.urlToImage;
  document.getElementById("bimg").src = data.urlToImage;
  let div = document.createElement("div");
  div.innerText = data.content;
  cnt.append(div);
}

append(data);

async function getsearch() {
  let url = `https://newsapi.org/v2/everything?q=trending&apiKey=efaf4c9a36944122b6eca506c319dcd2&pageSize=10`;

  // let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=28ab8a6823464f37bb09605fd44a8feb`;

  let res = await fetch(url);
  let data = await res.json();

  appenda(data.articles);
}

getsearch();

function appenda(data) {
  let cnt = document.getElementById("cnt1");
  cnt.innerHTML = null;
  console.log(data);
  let t = document.createElement("h3");
  t.innerText = "TRENDING";
  t.id = "h3";
  cnt.append(t);
  data.forEach((el) => {
    let div = document.createElement("div");
    div.id = "cnt1div";
    let img = document.createElement("img");
    img.id = "cnt1img";
    img.src = el.urlToImage;
    let title = document.createElement("a");
    title.innerText = el.title;
    title.id = "cnt1tit";

    img.addEventListener("click", function () {
      localStorage.setItem("news", JSON.stringify(el));
      location.href = "./all.html";
    });
    title.addEventListener("click", function () {
      localStorage.setItem("news", JSON.stringify(el));
      location.href = "./all.html";
    });

    div.append(img, title);
    cnt.append(div);
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
    let url = `https://newsapi.org/v2/everything?q=${search1}&apiKey=efaf4c9a36944122b6eca506c319dcd2`;
    let res = await fetch(url);
    let data = await res.json();

    data.articles;
    localStorage.setItem("query", JSON.stringify(obj));
    window.location.href = "search.html";
  }
}
async function getdatc() {
  try {
      let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=efaf4c9a36944122b6eca506c319dcd2&pageSize=5`;
      let res = await fetch(url);
      let result = await res.json();
      data = result.articles;
      appendc(data);
      console.log(data);
  } catch (err) {
      console.log("err", err);
  }
}
getdatc();
function appendc(data) {
  let cnt = document.getElementById("cnt3");
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
