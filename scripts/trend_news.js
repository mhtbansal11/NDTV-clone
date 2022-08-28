import navbar1Inside from "../components/navbar1Inside.js";
document.querySelector("#nav1").innerHTML += navbar1Inside();

import navbar2Inside from "../components/navbar2Inside.js";
document.querySelector("#nav2").innerHTML += navbar2Inside();

import footerInside from "../components/footerInside.js";
document.querySelector("#footer").innerHTML += footerInside();

let ele = JSON.parse(localStorage.getItem('news'))
let gets = async () => {
    let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=cac2a3600da541eebf8893025a6f052a`;
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.articles)
    append(data.articles)


}
gets()

function append(data) {
    let container1 = document.getElementById('top_stories')
    data.forEach((el) => {
        let div = document.createElement('div')
        let div1 = document.createElement('div')
        let img = document.createElement('img')
        img.src = el.urlToImage
      
        let title = document.createElement('h5')
        title.innerText = el.title;
        let hr = document.createElement('hr')
        div.append(title)
        div1.append(img, div)
        div1.setAttribute('id', 'first')
        div1.addEventListener('click', function () {
            save(el)
        })
        container1.append(div1, hr)

    });
}



let container = document.getElementById('center')
let div1 = document.createElement('div')
let img = document.createElement('img')
img.src = ele.urlToImage;
let title = document.getElementById('title')
title.innerText = ele.title;
let press = document.getElementById('Desc')
press.innerText = `Press ${ele.source.name}`;
let date = document.getElementById('Date')
date.innerText = ` | Updated: ${ele.publishedAt}`;
let place = document.getElementById('Place')
place.innerText = `,${ele.country}`;
let des = document.createElement('p')
des.innerText = ele.description;
let con = document.createElement('p')
con.innerText = ele.content;
div1.append(img, des,con)
container.append(div1);
let newsline = document.getElementById('newsline')
newsline.innerText=ele.title

let newslin = document.getElementById('newspage')
newslin.innerHTML = "Trending News"


function save(el) {
    localStorage.setItem('news', JSON.stringify(el));
    window.location.href = "./trend_news.html";
  
}

document.getElementById('logo').addEventListener('click', home)
function home() {
    window.location.href = './index.html';
}
document.getElementById('search_input').addEventListener('click', show)
function show() {
    document.getElementById('search_input').style.visibility = "hidden"
    document.getElementById('search').style.visibility = "visible"

}

document.getElementById('search').addEventListener('keydown', search)
async function search(event) {
    if (event.key == "Enter") {
        let search1 = document.getElementById("search").value;
        let obj = {
            que: search1,
        }
        let url = `https://newsapi.org/v2/everything?q=${search1}&apiKey=cac2a3600da541eebf8893025a6f052a`;
        let res = await fetch(url);
        let data = await res.json();

        (data.articles);
        localStorage.setItem("query", JSON.stringify(obj));
        window.location.href = "search.html";

    }
}