let trending;
let healthData;
// let key = "01e4b4bb46844c7f85fac3ee76078269";
let key = `12bb5c24fa8345d9a01612d2c7b9a129`
async function myTrending() {
  // in try put whatever we want to work
  try {
    let stream = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&language=en&apiKey=${key}&pageSize=10`
    );
    // https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey

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

async function myHealth() {
    try {
        let stream = await fetch(
            `https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=${key}`
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
      let box = document.createElement("div");
      let title = document.createElement("h2");
      title.innerText = element.title;
      let desc = document.createElement("p");
      desc.innerText = element.description;
      let published = document.createElement("p");
      published.innerText = `${element.source.name} | ${element.publishedAt}`;
      published.className = "publish";
      // if (element.urlToImage === null) {
      //   let img = document.createElement("img");
      //   img.src ="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/11/05/Pictures/_8ba2e79a-a350-11e6-93ed-ab826829dd0b.png"
      //   div.append(img,title, published,desc);
      //   worldNewsDiv.append(div);
      // } else {
      let img = document.createElement("img");
      img.src = element.urlToImage;
      box.append(title, published, desc);
      div.append(img, box);
      healthDiv.append(div);
    })  
}

function trendingAppend(data) {
  let trendingDiv = document.getElementById("trending");
  //   trendingDiv.innerHTML = null;

  data.forEach((element) => {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
      NewsData(element);
    });

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

    //   }
    trendingDiv.append(div);
  });
}



let NewsData = (element) => {
  console.log(element);
  localStorage.setItem("data", JSON.stringify(element));
  window.location.href = "./news.html";
};
