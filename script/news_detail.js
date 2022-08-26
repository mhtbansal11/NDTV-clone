import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let ele=JSON.parse(localStorage.getItem('news'))


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
        // let category = document.createElement('h6')
        // category.innerText = el.category;
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


if (ele.image === null) {
    let container = document.getElementById('center')

    let div1 = document.createElement('div')
    let img = document.createElement('img')
    img.src = "https://c.ndtvimg.com/ndtv-logo_625x300_1530090600008.jpg";
    let title = document.getElementById('title')
    title.innerText = ele.title;
    let press = document.getElementById('desc')
    press.innerText = `Press ${ele.source}`;
    let date = document.getElementById('date')
    date.innerText = ` | Updated: ${ele.published_at}`;
    let place = document.getElementById('place')
    place.innerText = `,${ele.country}`;
    let des = document.createElement('p')
    des.innerText = ele.description;
    div1.append(img, des)

    let newsline = document.getElementById('newsline')
    newsline.innerText = ele.title

    container.append(div1);


    let newslin = document.getElementById('newspage')
    newslin.innerHTML = "All India"
} else {
    let container = document.getElementById('center')

    let div1 = document.createElement('div')
    let img = document.createElement('img')
    img.src = ele.image;
    let title = document.getElementById('title')
    title.innerText = ele.title;
    let press = document.getElementById('desc')
    press.innerText = `Press ${ele.source}`;
    let date = document.getElementById('date')
    date.innerText = ` | Updated: ${ele.published_at}`;
    let place = document.getElementById('place')
    place.innerText = `,${ele.country}`;
    let des = document.createElement('p')
    des.innerText = ele.description;
    div1.append(img, des)

    let newsline = document.getElementById('newsline')
    newsline.innerText = ele.title

    container.append(div1);


    let newslin = document.getElementById('newspage')
    newslin.innerHTML = "All India"
}

function save(el) {
    localStorage.setItem('news', JSON.stringify(el));
    window.location.href = "../india/trend_news.html";
}
// function functio() {
//     window.location.href="/india.html"
// }
document.getElementById('logo').addEventListener('click', home)
function home() {
    window.location.href = '../index.html';
}