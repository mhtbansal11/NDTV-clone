import navbar1Home from "../components/navbar1Home";
document.querySelector("#nav1").innerHTML += navbar1Home();
import navbar2Home from "../components/navbar2Home.js";
document.querySelector("#nav2").innerHTML += navbar2Home();
import footer from "../components/footer.js";
document.querySelector("#footer").innerHTML += footer();

document.getElementById('searc_input').addEventListener('click', show)
function show() {
    document.getElementById('searc_input').style.visibility = "hidden"
    document.getElementById('search').style.visibility = "visible"

}
document.getElementById('search').addEventListener('keydown', function(){
    search(event)
})
async function search(event) {
    if (event.key == "Enter") {
        let search1 = document.getElementById("search").value;
        let obj = {
            que: search1,
        }
        let url = `https://masai-api.herokuapp.com/news?q=${search1}`;
        let res = await fetch(url);
        let data = await res.json();

        (data.articles);
        localStorage.setItem("query", JSON.stringify(obj));
        window.location.href = "search.html";

    }
}

// ________________________ads_____________________________




document.getElementById('ad1').addEventListener('click', function () {
    location.href = 'https://admissions.tmu.ac.in/?utm_source=GoogleAds&utm_medium=Display&utm_campaign=June&gclid=CjwKCAjw3qGYBhBSEiwAcnTRLpe8ASdZ1p2bXn3avkD9fFTAudS801JZL7j0N6BpbCdPcLOlHKQslRoCoXcQAvD_BwE'
})
document.getElementById('ad2').addEventListener('click', function () {
    location.href = 'https://special.ndtv.com/telangana-turns-the-tide-98/'
})

// _________________________________________top stories_______________________________

async function a() {
    let url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=12bb5c24fa8345d9a01612d2c7b9a129';

    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    appenda(data.articles)
}
a()

async function appenda(data) {
    let cnt = document.getElementById('topcnt');
    cnt.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement('div');
        div.id = 'topdiv'
        let img = document.createElement('img');
        img.id = 'topimg'
        img.src = el.urlToImage;

        let title = document.createElement('a');
        title.innerText = el.title;

        img.addEventListener('click', function () {
            localStorage.setItem('news', JSON.stringify(el))
            location.href = './all.html'
        })

        title.addEventListener('click', function () {
            localStorage.setItem('news', JSON.stringify(el))
            location.href = './all.html'
        })

        div.append(img, title);
        cnt.append(div);
    });
}




// _________________________________________opinion href_______________________________


async function b() {
    let url = 'https://newsapi.org/v2/everything?q=apple&from=2022-08-25&to=2022-08-25&sortBy=popularity&apiKey=12bb5c24fa8345d9a01612d2c7b9a129&pageSize=3';

    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    appendb(data.articles)
}
b()

async function appendb(data) {
    let cnt = document.getElementById('opcnt');
    cnt.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement('div');
        div.id = 'opdiv'
        let img = document.createElement('img');
        img.id = 'opimg'
        img.src = el.urlToImage;
        let div1 = document.createElement('div');
        div1.id = 'div1'
        let title = document.createElement('a');
        title.innerText = el.title;
        let name = document.createElement('a');
        name.innerText = el.author;


        img.addEventListener('click', function () {
            localStorage.setItem('news', JSON.stringify(el))
            location.href = './news1.html'
        })

        title.addEventListener('click', function () {
            localStorage.setItem('news', JSON.stringify(el))
            location.href = './news1.html'
        })

        name.addEventListener('click', function () {
            localStorage.setItem('news', JSON.stringify(el))
            location.href = './news1.html'
        })

        div1.append(title, name);
        div.append(img, div1);
        cnt.append(div);
    });
}


// _________________________________________middle section _______________________________


async function c() {

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=866f8ab704f84601a6cedfa0d17251c7&pageSize=3`
    // let url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-08-26&sortBy=popularity&apiKey=12bb5c24fa8345d9a01612d2c7b9a129&pageSize=3';

    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    appendc(data.articles)
}
c()

function appendc(data) {
    let cnt = document.getElementById('b3a');
    cnt.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement('div');
        div.id = 'b3div'
        let img = document.createElement('img');
        img.id = 'b3img'
        img.src = el.urlToImage;

        let title = document.createElement('h3');
        title.id = 'b3h3'
        title.innerText = el.title;



        img.addEventListener('click', function () {
            localStorage.setItem('news', JSON.stringify(el))
            location.href = './all.html'
        })

        title.addEventListener('click', function () {
            localStorage.setItem('news', JSON.stringify(el))
            location.href = './all.html'
        })




        div.append(title, img);
        cnt.append(div);
    });
}





// _________________________________________middle section 2 _______________________________


async function d() {
    let url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-08-26&sortBy=popularity&apiKey=12bb5c24fa8345d9a01612d2c7b9a129&pageSize=3';

    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    appendd(data.articles)
}
d()

function appendd(data) {
    let cnt = document.getElementById('b5a');
    cnt.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement('div');
        div.id = 'b5div'
        let img = document.createElement('img');
        img.id = 'b5img'
        img.src = el.urlToImage;

        let title = document.createElement('h3');
        title.id = 'b5h3'
        title.innerText = el.title;



        img.addEventListener('click', function () {
            localStorage.setItem('news', JSON.stringify(el))
            location.href = './all.html'
        })

        title.addEventListener('click', function () {
            localStorage.setItem('news', JSON.stringify(el))
            location.href = './all.html'
        })




        div.append(title, img);
        cnt.append(div);
    });
}

