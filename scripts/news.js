let newsData = JSON.parse(localStorage.getItem("data")) || [];
console.log(newsData);
let worldNewsDiv = document.getElementById("world_news");
worldNewsDiv.innerHTML = null;
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
content.innerText = `Content: ${newsData.content}`;
// box.append(title, published, desc);
div.append(title, img, published, desc, content, author);
worldNewsDiv.append(div);

let inside = document.querySelector("#inside>p");
inside.innerHTML = newsData.title;

let trending;
let worldNews;
// let key="01e4b4bb46844c7f85fac3ee76078269";
let key = `12bb5c24fa8345d9a01612d2c7b9a129`;
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

    if (element.urlToImage === null) {
      let img = document.createElement("img");
      img.src =
        "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/11/05/Pictures/_8ba2e79a-a350-11e6-93ed-ab826829dd0b.png";
      div.append(img, title);
      trendingDiv.append(div);
    } else {
      let img = document.createElement("img");
      img.src = element.urlToImage;
      div.append(img, title);
    }
    trendingDiv.append(div);
  });
}
