import navbar1Home from "../components/navbar1Home.js";
document.querySelector("#nav1").innerHTML += navbar1Home();
import navbar2Home from "../components/navbar2Home.js";
document.querySelector("#nav2").innerHTML += navbar2Home();
import footer from "../components/footer.js";
document.querySelector("#footer").innerHTML += footer();

// let key = `e56af2cd452e4a229a9908b9bfb62d8d`
let key = `12bb5c24fa8345d9a01612d2c7b9a129`
let businessData;
let entertainmentData;
let generalData;
let healthData;
let scienceData;
let sportsData;
let technologyData;
let indiaData;

// import navbar2Home from "../components/navbar2Home.js";
// document.querySelector("#nav2").innerHTML += navbar2Home();

// Business API fetch & append 
async function myBusiness() {
    try {
        let stream = await fetch(
            `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${key}&pageSize=5`
        );

        // convert the stream into actual data
        let data = await stream.json();
        businessData = data.articles;
        console.log("businessData:", businessData);
        businessAppend(businessData);
    } catch (error) {
        console.log("error", error);
    }
}
myBusiness();

function businessAppend(data) {
    let businessDiv = document.getElementById("business");

    data.forEach((element) => {
        let div = document.createElement("div");
        div.addEventListener("click", function () {
            NewsData(element);
        });

        let title = document.createElement("h5");
        title.innerText = element.title;
        let img = document.createElement("img");
        img.src = element.urlToImage;
        div.append(img, title);

        businessDiv.append(div);
    });
}

// entertainment API fetch and append
async function myEntertainment() {
    try {
        let stream = await fetch(
            `https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=${key}&pageSize=5`
        );

        // convert the stream into actual data
        let data = await stream.json();
        entertainmentData = data.articles;
        console.log("entertainmentData:", entertainmentData);
        entertainmentAppend(entertainmentData);
    } catch (error) {
        console.log("error", error);
    }
}
myEntertainment();

function entertainmentAppend(data) {
    let entertainmentDiv = document.getElementById("entertainment");

    data.forEach((element) => {
        let div = document.createElement("div");
        div.addEventListener("click", function () {
            NewsData(element);
        });

        let title = document.createElement("h5");
        title.innerText = element.title;
        let img = document.createElement("img");
        img.src = element.urlToImage;
        div.append(img, title);

        entertainmentDiv.append(div);
    });
}

// General API fetch and append
async function myGeneral() {
    try {
        let stream = await fetch(
            `https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=${key}&pageSize=5`
        );

        // convert the stream into actual data
        let data = await stream.json();
        generalData = data.articles;
        console.log("generalData:", generalData);
        generalAppend(generalData);
    } catch (error) {
        console.log("error", error);
    }
}
myGeneral();

function generalAppend(data) {
    let generalDiv = document.getElementById("general");

    data.forEach((element) => {
        let div = document.createElement("div");
        div.addEventListener("click", function () {
            NewsData(element);
        });

        let title = document.createElement("h5");
        title.innerText = element.title;
        let img = document.createElement("img");
        img.src = element.urlToImage;
        div.append(img, title);

        generalDiv.append(div);
    });
}

// Health API fetch and append
async function myHealth() {
    try {
        let stream = await fetch(
            `https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=${key}&pageSize=5`
        );

        // convert the stream into actual data
        let data = await stream.json();
        healthData = data.articles;
        console.log("healthData:", healthData);
        healthAppend(healthData);
    } catch (error) {
        console.log("error", error);
    }
}
myHealth();

function healthAppend(data) {
    let healthDiv = document.getElementById("health");

    data.forEach((element) => {
        let div = document.createElement("div");
        div.addEventListener("click", function () {
            NewsData(element);
        });

        let title = document.createElement("h5");
        title.innerText = element.title;
        let img = document.createElement("img");
        img.src = element.urlToImage;
        div.append(img, title);

        healthDiv.append(div);
    });
}


// Science API fetch and data append

async function myScience() {
    try {
        let stream = await fetch(
            `https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=${key}&pageSize=5`
        );

        // convert the stream into actual data
        let data = await stream.json();
        scienceData = data.articles;
        console.log("scienceData:", scienceData);
        scienceAppend(scienceData);
    } catch (error) {
        console.log("error", error);
    }
}
myScience();

function scienceAppend(data) {
    let scienceDiv = document.getElementById("science");

    data.forEach((element) => {
        let div = document.createElement("div");
        div.addEventListener("click", function () {
            NewsData(element);
        });

        let title = document.createElement("h5");
        title.innerText = element.title;
        let img = document.createElement("img");
        img.src = element.urlToImage;
        div.append(img, title);

        scienceDiv.append(div);
    });
}


// Sports API fetch and append data
async function mySports() {
    try {
        let stream = await fetch(
            `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${key}&pageSize=5`
        );

        // convert the stream into actual data
        let data = await stream.json();
        sportsData = data.articles;
        console.log("sportsData:", sportsData);
        sportAppend(sportsData);
    } catch (error) {
        console.log("error", error);
    }
}
mySports();

function sportAppend(data) {
    let sportsDiv = document.getElementById("sports");

    data.forEach((element) => {
        let div = document.createElement("div");
        div.addEventListener("click", function () {
            NewsData(element);
        });

        let title = document.createElement("h5");
        title.innerText = element.title;
        let img = document.createElement("img");
        img.src = element.urlToImage;
        div.append(img, title);

        sportsDiv.append(div);
    });
}


// Technology API fetch and data append
async function myTechnology() {
    try {
        let stream = await fetch(
            `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${key}&pageSize=5`
        );

        // convert the stream into actual data
        let data = await stream.json();
        technologyData = data.articles;
        console.log("technologyData:", technologyData);
        technologyAppend(technologyData);
    } catch (error) {
        console.log("error", error);
    }
}
myTechnology();

function technologyAppend(data) {
    let techDiv = document.getElementById("technology");

    data.forEach((element) => {
        let div = document.createElement("div");
        div.addEventListener("click", function () {
            NewsData(element);
        });

        let title = document.createElement("h5");
        title.innerText = element.title;
        let img = document.createElement("img");
        img.src = element.urlToImage;
        div.append(img, title);

        techDiv.append(div);
    });
}


// India fetch API and append data
async function myIndia() {
    try {
        let stream = await fetch(
            `https://newsapi.org/v2/top-headlines?country=in&language=en&apiKey=${key}&pageSize=5`
        );

        // convert the stream into actual data
        let data = await stream.json();
        indiaData = data.articles;
        console.log("indiaData:", indiaData);
        indiaAppend(indiaData);
    } catch (error) {
        console.log("error", error);
    }
}
myIndia();

function indiaAppend(data) {
    let indiaDiv = document.getElementById("india");

    data.forEach((element) => {
        let div = document.createElement("div");
        div.addEventListener("click", function () {
            NewsData(element);
        });

        let title = document.createElement("h5");
        title.innerText = element.title;
        let img = document.createElement("img");
        img.src = element.urlToImage;
        div.append(img, title);

        indiaDiv.append(div);
    });
}

let NewsData = (element) => {
    console.log(element);
    localStorage.setItem("data", JSON.stringify(element));
    window.location.href = "./news.html";
};



//  Varinder code from down here



let url = `https://newsdata.io/api/1/news?apikey=pub_10596d448c2f0018dc245e89c54c74082de67&q=job`;

let DaTa = [];
let pagesize = 1;
let currentPage = 1;
async function render() {
    await get()
    var contain = ""
    console.log(DaTa)
    DaTa.filter((ro, index) => {
        let start = (currentPage - 1) * pagesize
        let end = currentPage * pagesize

        if (index >= start && index < end) return true;
    }).forEach(el => {
        contain += `<img id="on" src="https://cdn.searchenginejournal.com/wp-content/uploads/2017/06/shutterstock_268688447.jpg">`
        contain += `<h3 id="on">${(el.title)}</h3>`
        contain += '<hr>'


    })

    document.getElementById('job').innerHTML = contain;
    // console.log(contain)
}

render()





async function get() {

    let res = await fetch(url)
    let data = await res.json()
    DaTa = data.results
}


function append(data) {
    let container1 = document.getElementById('job')
    data.forEach((el) => {

        if (el.image_url == null) {
            let div = document.createElement('div')
            let div1 = document.createElement('div')
            let img = document.createElement('img')
            img.src = "https://i.ndtvimg.com/i/2015-06/exam-generic_650x400_51435598669.jpg?im=FaceCrop,algorithm=dnn,width=213,height=160"
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


        } else {

            let div = document.createElement('div')
            let div1 = document.createElement('div')
            let img = document.createElement('img')
            img.src = el.image_url
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
        }
    });
}

function save(el) {
    localStorage.setItem('news', JSON.stringify(el));
    window.location.href = "./news_detail.html";
}
let urls = `https://newsdata.io/api/1/news?apikey=pub_10596d448c2f0018dc245e89c54c74082de67`;



let Dataa = [];
let Pagesize = 1;
let CurrentPage = 1;
async function rnder() {
    await gets()
    var contains = ""
    console.log(Dataa)
    Dataa.filter((rows, index) => {
        let start = (CurrentPage - 1) * Pagesize
        let end = CurrentPage * Pagesize

        if (index >= start && index < end) return true;
    }).forEach(el => {
        contains += `<img  src="https://assets.vogue.com/photos/6300f5d4be0e9b0e8c9fc447/4:3/w_1600%2Cc_limit/HB-PLATFORM_1x1-use-this.jpg">`
        contains += `<h3>${(el.title)}</h3>`
        contains += '<hr>'


    })

    document.getElementById('feshion').innerHTML = contains;
    // console.log(contain)
}

rnder()

async function gets() {
    let res = await fetch(urls)
    let data = await res.json()
    // console.log(data)
    Dataa = data.results
}
let urlss = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${key}`;

let Dataas = [];
let Pagsize = 1;
let CurentPage = 1;
async function rnders() {
    await getss()
    var contains = ""
    console.log(Dataas)
    Dataas.filter((rows, index) => {
        let start = (CurentPage - 1) * Pagsize
        let end = CurentPage * Pagsize

        if (index >= start && index < end) return true;
    }).forEach(el => {
        contains += `<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfAWT7B6cR5u5V3G6zHu_KRYNBky9ZonukEBC-OoeAu_7hBt40kXby1g&s=10">`
        contains += `<h3>${(el.title)}</h3>`
        contains += '<hr>'


    })

    document.getElementById('world').innerHTML = contains;
    // console.log(contain)
}

rnders()

async function getss() {
    let res = await fetch(urlss)
    let data = await res.json()
    // console.log(data)
    Dataas = data.articles
}
let urlsss = `https://newsdata.io/api/1/news?apikey=pub_10596d448c2f0018dc245e89c54c74082de67&q=south%20india&country=in`;

let Dataass = [];
let Pasize = 1;
let CuentPage = 1;
async function rnderss() {
    await getsss()
    var contains = ""
    console.log(Dataass)
    Dataass.filter((rowss, index) => {
        let start = (CuentPage - 1) * Pasize
        let end = CuentPage * Pasize

        if (index >= start && index < end) return true;
    }).forEach(el => {
        contains += `<img  src="https://i.pinimg.com/564x/e6/ed/c7/e6edc77703809572319da6695c48f0cf.jpg">`
        contains += `<h3>${(el.title)}</h3>`
        contains += '<hr>'


    })

    document.getElementById('south').innerHTML = contains;
    // console.log(contain)
}

rnderss()

async function getsss() {
    let res = await fetch(urlsss)
    let data = await res.json()
    // console.log(data)
    Dataass = data.results
}

async function getsssz() {
    let res = await fetch(urlsss)
    let data = await res.json()
    // console.log(data)
    Dataassz = data.results
}

let urlssss = `https://newsdata.io/api/1/news?apikey=pub_10596d448c2f0018dc245e89c54c74082de67&q=cities&country=in`;

let Dataassz = [];
let Psize = 1;
let CentPage = 1;
async function rndersss() {
    await getsssz()
    var contains = ""
    console.log(Dataassz)
    Dataassz.filter((rowss, index) => {
        let start = (CentPage - 1) * Psize
        let end = CentPage * Psize

        if (index >= start && index < end) return true;
    }).forEach(el => {
        contains += `<img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAADDCAMAAABeUu/HAAAAJFBMVEX+///k5OTo6Oj5+vrs7e329/fm5ub7/Pz09fXx8vLs7Ozh4eFOKlxuAAAC2UlEQVR4nO3Z26KbIBBGYY8g4f3ft01lZjiZ7DaperG+q2yJBn4mSNzDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4nXlSy1q1ScM8+Okrtk4H/EOcMdyeOY4qjqFoS01xHXz2rk90OvCQDw+dxlPMxeDi5LM2afpeBO0w7crnjbky14PLMvh+BPnVd1IEnXTO0kTgrO0/RLBUH68XdsNlmghGW5Y6EcTcv2Qwlx+/yHXrpfhEbQTWG4tAXk5+zqzByUluyUwSph3Sep+KT9dop6Zj59EIpN9ZTbZ3hKanelZ+UKY2n1kJq5zuOxSBReCHIP2R27dOvY6gicDLOXmB9yLYel/6WxSBRTDb6iy93Jv2pXo76OrUGW4vAn1jzPZHuieoVohz5REMUtWpl9ESSBm0ESzlKcWxIoK53QBICTX3iXMVEchXIZVBLOp26kYgE/k2gs4OQI80u4VTFRHoorUP6Nlkt8jwWRVke4s04psUQRVBWQax6N6nEehhueZNiqCKoCyDWAx6+fCLYEtN/DNmLYLrtsa7KoItL4NYTJH7tAq0xvbLaBF8e0h/q4qgKIOo3R3SuI6r4O1NMb/4cyd0myJoIlizv/eX7jkSP9n0Faa8tpPDCPL90WIvL1ZHYFveTTfIwTaK9elrr5oPI8gurveH3pOkczURaBmM+uI4Alk6xuKp13EE+mnuPkXQRmAzpYLe0135LNDeUszlcQS2BkrMV/4+StoI/FgLbx+ZlHP5IoL64pf+PkraCGzR+nEE1Vy+iMD2R/uJl/4+SjoRDKEa8LsI6oe/ryIYijMve3Ce60Vg6/zPIqgX9ZcRhOzEePHWeCcRVCUZnA06voqg/t/DU4rgYKlzdvLFv48Snx7wPeoJ8WsQv4ey9IWt92UO+43D9SNY9bbiblEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPp+AY0nFLiRYdCuAAAAAElFTkSuQmCC">`
        contains += `<h3>${(el.title)}</h3>`
        contains += '<hr>'
    })

    document.getElementById('city').innerHTML = contains;
    // console.log(contain)
}

rndersss()

async function getssss() {
    let res = await fetch(urlssss)
    let data = await res.json()
    console.log('data:',data)
    Dataasss = data.results
}
document.getElementById('enter').addEventListener('click', etn)
function etn() {
    window.location.href = './entertainment.html';
}
let gt = async () => {
    let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=12bb5c24fa8345d9a01612d2c7b9a129`;
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.articles)
    appends(data.articles)


}
gt()
function appends(data) {
    let container1 = document.getElementById('top_stories')
    data.forEach((el) => {
        let div = document.createElement('div')
        let div1 = document.createElement('div')
        let img = document.createElement('img')
        img.src = el.urlToImage

        let title = document.createElement('h5')
        title.innerText = el.title;
        let hr = document.createElement('hr')
        hr.setAttribute('id','hr')
        div.append(title)
        div1.append(img, div)
        div1.setAttribute('id', 'first')
        div1.addEventListener('click', function () {
            ssave(el)
        })
        container1.append(div1, hr)

    });
}
function ssave(el) {
    localStorage.setItem('news', JSON.stringify(el));
    window.location.href = "./trend_news.html";

}


document.getElementById('searc_input').addEventListener('click', show)
function show() {
    document.getElementById('searc_input').style.visibility = "hidden"
    document.getElementById('search').style.visibility = "visible"

}
document.getElementById('search').addEventListener('keydown', function () {
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

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=12bb5c24fa8345d9a01612d2c7b9a129&pageSize=3`
    // let url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-08-26&sortBy=popularity&apiKey=866f8ab704f84601a6cedfa0d17251c7&pageSize=3';

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




// document.getElementById('searc_input').addEventListener('click', show)
// function show() {
//     document.getElementById('searc_input').style.visibility = "hidden"
//     document.getElementById('search').style.visibility = "visible"

// }