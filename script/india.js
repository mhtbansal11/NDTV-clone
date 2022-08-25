import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=cac2a3600da541eebf8893025a6f052a`;

let DaTa = [];
let pagesize = 5;
let currentPage = 1;

let container = document.getElementById('center');

// container.innerHTML=null
async function render(page=1) {
    await get()
     container = ""

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
       
 let div = document.createElement('div')
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')

        let img = document.createElement('img')
        img.src = el.urlToImage;
      
        let title = document.createElement('h3')
        title.innerText = el.title;
        let press = document.createElement('h6')
        press.innerText = `Press ${el.author}`;
        let date = document.createElement('h6')
        date.innerText = ` | ${el.publishedAt}`;
      
        let des = document.createElement('p')
        des.innerText=el.description
        div2.append(press, date)
        div2.setAttribute('id','press')
        div.append(title, div2,des)
        div.setAttribute('id','headline')
        div1.append(img, div)
        div1.setAttribute('id', 'second')
        div1.addEventListener('click', function () {
            Save(el)
        })

        container.append(div1)
        
        // contain += '<div>'

        // contain+=`<img src=${el.urlToImage}>`
        // '</div>'


        // contain += `<h3>${(el.title)}</h3>`
       
        // contain += `<h6>${(el.author)} | ${(el.publishedAt)}</h6>`
       
        // contain += `<p>${(el.description)}</p>`
      
    
     

     
    })


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


async function get() {
  
    let res = await fetch(url)
    let data = await res.json()
    DaTa=data.articles
    // console.log(data.data)
    // append(DaTa)
    // append1(DaTa)

}


// function append(data) {
//     let container1 = document.getElementById('top_stories')
//     data.forEach((el) => {
//         let div = document.createElement('div')
//         let div1 = document.createElement('div')

//         let img = document.createElement('img')
//         img.src = el.image
//         let category = document.createElement('h6')
//         category.innerText = el.category;
//         let title = document.createElement('h5')
//         title.innerText = el.title;
//         let hr = document.createElement('hr')

//         div.append(category,title)
//         div1.append(img, div)
//         div1.setAttribute('id', 'first')
//         div1.addEventListener('click', function () {
//             dave(el)
//         })
//         container1.append(div1,hr)

//     });
// }
// function append1(data) {
//     container.innerHTML=null
//     data.forEach((el) => {
//         let div = document.createElement('div')
//         let div1 = document.createElement('div')
//         let div2 = document.createElement('div')

//         let img = document.createElement('img')
//         img.src = el.image;
      
//         let title = document.createElement('h3')
//         title.innerText = el.title;
//         let press = document.createElement('h6')
//         press.innerText = `Press ${el.source}`;
//         let date = document.createElement('h6')
//         date.innerText = ` | ${el.published_at}`;
//         let place = document.createElement('h6')
//         place.innerText = `,${el.country}`;
//         let des = document.createElement('p')
//         des.innerText=el.description
//         div2.append(press, date, place)
//         div2.setAttribute('id','press')
//         div.append(title, div2,des)
//         div.setAttribute('id','headline')
//         div1.append(img, div)
//         div1.setAttribute('id', 'second')
//         div1.addEventListener('click', function () {
//             Save(el)
//         })

//         container.append(div1); 
//     });
// }

function Save(el) {
    localStorage.setItem('news', JSON.stringify(el));
    window.location.href = "india/news_detail.html";
}
function dave(el) {
    localStorage.setItem('news', JSON.stringify(el));
    window.location.href = "india/trend_news.html";
}


