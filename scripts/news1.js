let data = JSON.parse(localStorage.getItem('news'));


function append(data) {
    let cnt = document.getElementById('cnt2')
    cnt.innerHTML = null;
    document.getElementById('newsT').innerText = ` ${data.title}`
    document.getElementById('head').innerText = data.title;
    document.getElementById('name').innerText = data.author;
    document.getElementById('time').innerText = `Updated: ${data.publishedAt}`;
    document.getElementById('img').src = data.urlToImage;

    // let img = document.createElement('img');
    // img.id = 'bigimg'
    // img.src = data.urlToImage;
    document.getElementById('bimg').src = data.urlToImage;
        let div = document.createElement('div');
    div.innerText = data.content
    cnt.append(div)
};


append(data)



async function getsearch() {
    let url = `https://newsapi.org/v2/everything?q=trending&apiKey=866f8ab704f84601a6cedfa0d17251c7&pageSize=10`

    // let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=28ab8a6823464f37bb09605fd44a8feb`;

    let res = await fetch(url);
    let data = await res.json();

    appenda(data.articles)

}

getsearch()


function appenda(data) {
    let cnt = document.getElementById('cnt1')
    cnt.innerHTML = null;
    console.log(data)
    let t = document.createElement('h3');
    t.innerText = 'TRENDING';
    t.id = 'h3'
    cnt.append(t)
    data.forEach(el => {
        let div = document.createElement('div');
        div.id = 'cnt1div'
        let img = document.createElement('img');
        img.id = 'cnt1img'
        img.src = el.urlToImage;
        let title = document.createElement('a')
        title.innerText = el.title;
        title.id = 'cnt1tit'

        img.addEventListener('click', function () {
            localStorage.setItem('news', JSON.stringify(el))
            location.href = './all.html'
        })
        title.addEventListener('click', function () {
            localStorage.setItem('news', JSON.stringify(el))
            location.href = './all.html'
        })


        div.append(img, title);
        cnt.append(div)
    });

};





