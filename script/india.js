import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
// let url = `http://api.mediastack.com/v1/news?access_key=70e250225f82fd05fd9a1daf86aa4a2a&languages=en&countries=in&limit=100`;
let url = `http://api.mediastack.com/v1/news?access_key=ce7ea8c6513f70ccecd1e152e928ac83&languages=en&countries=in&limit=100`;


// let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=cac2a3600da541eebf8893025a6f052a`;

let DaTa = [];
let pagesize = 5;
let currentPage = 1;

// let container = document.getElementById('center');

// container.innerHTML=null
async function render(page=1) {
    await get()
    var contain = ""

    if (page === 1) {
        prevButton.style.visibility="hidden"
    } else {
        prevButton.style.visibility = "visible"
    }

    if (page === numberOfpage()) {
        nextButton.style.visibility = "hidden"
    } else {
        nextButton.style.visibility = "visible"
    }
    console.log(DaTa)
    DaTa.filter((row, index) => {
        let start = (currentPage - 1) * pagesize
        let end = currentPage * pagesize
        
        if (index >= start && index < end) return true;
    }).forEach(el => {
        contain+=`<img id="on" src=${el.image}>`
        contain += `<h3 id="on">${(el.title)}</h3>`
        contain += `<h6 id="on">${(el.author)} | ${(el.publishedAt)}</h6>`
        contain += `<p id="on">${(el.description)}</p>`
    })
    document.getElementById('center').innerHTML=contain;
// console.log(contain)
}

render()

function prePage() {
    if (currentPage > 1)
        currentPage--;
    render(currentPage)
}
function nextPage() {
    if (currentPage * pagesize < DaTa.length)
        currentPage++;
    console.log(currentPage)
    render(currentPage)
}

function numberOfpage() {
    return Math.ceil(DaTa.length / pagesize)
    
}
document.getElementById('prevButton').addEventListener('click', prePage, false)
document.getElementById('nextButton').addEventListener('click', nextPage, false)
 async function get(){
    let res = await fetch(url)
    let data = await res.json()
    DaTa = data.data

    console.log(data.data)
    // append(data.data)
}
function Save(el) {
    localStorage.setItem('news', JSON.stringify(el));
    window.location.href = "india/news_detail.html";
}
function dave(el) {
    localStorage.setItem('news', JSON.stringify(el));
    window.location.href = "india/trend_news.html";
}


let gets = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=cac2a3600da541eebf8893025a6f052a`;
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.data)
    append(data.data)


}
gets()

function append(data) {
    let container1 = document.getElementById('top_stories')
    data.forEach((el) => {
        let div = document.createElement('div')
        let div1 = document.createElement('div')

        let img = document.createElement('img')
        img.src = el.image

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

    });
}