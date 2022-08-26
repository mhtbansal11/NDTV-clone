let key = "01e4b4bb46844c7f85fac3ee76078269";
let businessData;
let entertainmentData;
let generalData;
let healthData;
let scienceData;
let sportsData;
let technologyData;
let indiaData;

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
