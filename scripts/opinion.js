// --------------------------------search function-------------------------------

document.getElementById("search").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let query = document.getElementById("s").value;

    function data(query) {
      let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=28ab8a6823464f37bb09605fd44a8feb`;
      getsearch(url);
      async function getsearch(url) {
        let res = await fetch(url);
        let data = await res.json();

        append(data.articles);
      }
    }
    data(query);
  }
});

// ---------------------------------------body news---------------------------------------------

// let url = `https://newsapi.org/v2/everything?q=ndtv&apiKey=866f8ab704f84601a6cedfa0d17251c7`
let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=866f8ab704f84601a6cedfa0d17251c7`;

let data;
async function getdata(url) {
  try {
    let res = await fetch(url);
    let result = await res.json();
    data = result.articles;
    append(data);
    console.log(data);
  } catch (err) {
    console.log("err", err);
  }
}
getdata(url);

function append(data) {
  let cnt = document.getElementById("cnt20");
  cnt.innerHTML = null;
  data.forEach((el) => {
    let div1 = document.createElement("div");
    div1.id = "div1";

    let img = document.createElement("img");
    // img.className = 'plus'
    let div2 = document.createElement("div");
    div2.id = "div2";
    let title = document.createElement("h2");
    title.innerText = `Opinion: ${el.title}`;
    let name = document.createElement("p");
    name.id = "name";
    let time = document.createElement("p");
    time.id = "time";
    time.innerText = `|  ${el.publishedAt}`;
    let des = document.createElement("p");
    des.innerText = el.description;

    if (el.urlToImage === null || el.author === null) {
      name.innerText = "NDTV LIVE";
      name.append(time);

      img.src = "https://anyflix.tv/upload/source/N-NDTV.png";
    } else {
      img.src = el.urlToImage;
      name.innerText = el.author;
      name.append(time);
    }

    img.addEventListener("click", function () {
      localStorage.setItem("news", JSON.stringify(el));
      location.href = "./news1.html";
    });
    title.addEventListener("click", function () {
      localStorage.setItem("news", JSON.stringify(el));
      location.href = "./news1.html";
    });

    div2.append(title, name, des);
    div1.append(img, div2);
    cnt.append(div1);
  });
}
