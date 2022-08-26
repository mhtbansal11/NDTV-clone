let data = JSON.parse(localStorage.getItem('news'));


function append(data) {
    let cnt = document.getElementById('cnt2')
    cnt.innerHTML = null;
    document.getElementById('newsT').innerText = `Opinion: ${data.title}`
    document.getElementById('head').innerText = data.title;
    document.getElementById('name').innerText = data.author;
    document.getElementById('time').innerText = `Updated: ${data.publishedAt}`;
    document.getElementById('img').src = data.urlToImage
    let div = document.createElement('div');
    div.innerText = data.content
    cnt.append(div)
};


append(data)



async function getsearch() {
let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=28ab8a6823464f37bb09605fd44a8feb`;

    let res = await fetch(url);
    let data = await res.json();

    console.log(data)

}

getsearch()