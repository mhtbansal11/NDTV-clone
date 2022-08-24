import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


let get = async () => {
    let url = `http://api.mediastack.com/v1/news?access_key=b1b29ee5cbf14c364b53f30b96fa87bc&languages=en&countries=in`;
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.data)
    append(data.data)
    append1(data.data)

}
get()


function append(data) {
    let container1 = document.getElementById('top_stories')
    data.forEach((el) => {
        let div = document.createElement('div')
        let div1 = document.createElement('div')

        let img = document.createElement('img')
        img.src = el.image
        let category = document.createElement('h6')
        category.innerText = el.category;
        let title = document.createElement('h5')
        title.innerText = el.title;
        let hr = document.createElement('hr')

        div.append(category,title)
        div1.append(img, div)
        div1.setAttribute('id','first')
        container1.append(div1,hr)

    });
}
function append1(data) {
    let container = document.getElementById('center')
    data.forEach((el) => {
        let div = document.createElement('div')
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')

        let img = document.createElement('img')
        img.src = el.image;
      
        let title = document.createElement('h3')
        title.innerText = el.title;
        let press = document.createElement('h6')
        press.innerText = `Press ${el.source}`;
        let date = document.createElement('h6')
        date.innerText = ` | ${el.published_at}`;
        let place = document.createElement('h6')
        place.innerText = `,${el.country}`;
        let des = document.createElement('p')
        des.innerText=el.description
        div2.append(press, date, place)
        div2.setAttribute('id','press')
        div.append(title, div2,des)
        div.setAttribute('id','headline')
        div1.append(img, div)
        div1.setAttribute('id', 'second')

        container.append(div1); 
    });
}