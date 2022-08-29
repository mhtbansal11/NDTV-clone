import navbar1Inside from "../components/navbar1Inside.js";
document.querySelector("#nav1").innerHTML += navbar1Inside();

import navbar2Inside from "../components/navbar2Inside.js";
document.querySelector("#nav2").innerHTML += navbar2Inside();

import footerInside from "../components/footerInside.js";
document.querySelector("#footer").innerHTML += footerInside();
// let url = `http://api.mediastack.com/v1/news?access_key=70e250225f82fd05fd9a1daf86aa4a2a&languages=en&countries=in&limit=100`;
let url = `http://api.mediastack.com/v1/news?access_key=ce7ea8c6513f70ccecd1e152e928ac83&languages=en&countries=in&limit=100`;

let gets = async () => {
    // let url = `http://api.mediastack.com/v1/news?access_key=70e250225f82fd05fd9a1daf86aa4a2a&languages=en&countries=in&limit=100`;
    let res = await fetch(url)
    let data = await res.json()
  
    append1(data.data)

}
gets()
function append1(data) {
    let container = document.getElementById('center')
    data.forEach((el) => {
        if (el.image === null) {
            let div = document.createElement('div')
            let div1 = document.createElement('div')
            let div2 = document.createElement('div')

            let img = document.createElement('img')
            img.src = "https://c.ndtvimg.com/ndtv-logo_625x300_1530090600008.jpg"

            let title = document.createElement('h3')
            title.innerText = el.title;
            let press = document.createElement('h6')
            press.innerText = `Press ${el.source}`;
            let date = document.createElement('h6')
            date.innerText = ` | ${el.published_at}`;
            let place = document.createElement('h6')
            place.innerText = `,${el.country}`;
            let des = document.createElement('p')
            des.innerText = el.description
            div2.append(press, date, place)
            div2.setAttribute('id', 'press')
            div.append(title, div2, des)
            div.setAttribute('id', 'headline')
            div1.append(img, div)
            div1.setAttribute('id', 'second')
            div1.addEventListener('click', function () {
                Save(el)
            })

            container.append(div1);
        } else {
            let div = document.createElement('div')
            let div1 = document.createElement('div')
            let div2 = document.createElement('div')

            let img = document.createElement('img')
            img.src = el.image;

            let title = document.createElement('h3')
            title.innerText = el.title;
            let press = document.createElement('h6')
            press.innerText = `Press ${el.source}`;
            let date = document.createElement('h6')
            date.innerText = ` | ${el.published_at}`;
            let place = document.createElement('h6')
            place.innerText = `,${el.country}`;
            let des = document.createElement('p')
            des.innerText = el.description
            div2.append(press, date, place)
            div2.setAttribute('id', 'press')
            div.append(title, div2, des)
            div.setAttribute('id', 'headline')
            div1.append(img, div)
            div1.setAttribute('id', 'second')
            div1.addEventListener('click', function () {
                Save(el)
            })

            container.append(div1); 
        }
    });
}
 
function Save(el) {
    localStorage.setItem('news', JSON.stringify(el));
    window.location.href = "./news_detail.html";
}
function dave(el) {
    localStorage.setItem('news', JSON.stringify(el));
    window.location.href = "./trend_news.html";
}


let get = async () => {
    let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=12bb5c24fa8345d9a01612d2c7b9a129`;
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    append(data.articles)


}
get()

function append(data) {
    let container1 = document.getElementById('top_stories')
    data.forEach((el) => {
        if (el.urlToImage === null) {
            let div = document.createElement('div')
            let div1 = document.createElement('div')

            let img = document.createElement('img')
            img.src = "https://c.ndtvimg.com/ndtv-logo_625x300_1530090600008.jpg"

            let title = document.createElement('h5')
            title.innerText = el.title;
            let hr = document.createElement('hr')

            div.append(title)
            div1.append(img, div)
            div1.setAttribute('id', 'first')
            div1.addEventListener('click', function () {
                dave(el)
            })
            container1.append(div1, hr)
        } else {
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
                dave(el)
            })
            container1.append(div1, hr)
        }
    });
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