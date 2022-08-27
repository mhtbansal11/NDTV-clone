let newsData = JSON.parse(localStorage.getItem("data")) || [];
console.log(newsData);
let LatestNewsDiv = document.getElementById("Latest_news");
LatestNewsDiv.innerHTML = null;
let div = document.createElement("div");
// let box = document.createElement("div");
let title = document.createElement("h1");
title.innerText = newsData.title;
let desc = document.createElement("p");
desc.innerText = newsData.description;
let published = document.createElement("p");
published.innerText = `${newsData.source.name} | ${newsData.publishedAt}`;
let img = document.createElement("img");
img.src = newsData.urlToImage;
let author = document.createElement("p");
author.innerText = `Author : ${newsData.author}`;
let content = document.createElement("p");
content.innerText = `Content: ${newsData.content}`
// box.append(title, published, desc);
div.append(title,img, published, desc,content,author);
LatestNewsDiv.append(div);

let inside = document.querySelector("#inside>p");
inside.innerHTML = newsData.title;

let trending;
let LatestNews;
let key="6ca668b05d17438286becc5f661348ac";
async function myTrending() {
  // in try put whatever we want to work
  try {
    let stream = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${key}&pageSize=10`
    );
    // convert the stream into actual data
    let data = await stream.json();
    trending = data.articles;
    console.log("trending:", trending);
    trendingAppend(trending);
  } catch (err) {
    // in catch put the error part
    console.log("err", err);
  }
}
myTrending();
function trendingAppend(data) {
  let trendingDiv = document.getElementById("trending");
  //   trendingDiv.innerHTML = null;

  data.forEach((element) => {
    let div = document.createElement("div");

    let title = document.createElement("h5");
    title.innerText = element.title;

    // if (element.urlToImage === null) {
    //     let img = document.createElement("img");
    //     img.src ="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/11/05/Pictures/_8ba2e79a-a350-11e6-93ed-ab826829dd0b.png"
    //     div.append(img,title);
    //     trendingDiv.append(div);
    //   } else {
    let img = document.createElement("img");
    img.src = element.urlToImage;
    div.append(img, title);
    div.addEventListener("click",function(){
        latest(element)
      })
    //   }
    trendingDiv.append(div);
  });
}
function latest(element){
    console.log(element);
    localStorage.setItem("data", JSON.stringify(element));
    window.location.href = "./news.html";
  }