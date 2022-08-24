import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();


let get = async () => {
    let url = `http://api.mediastack.com/v1/news?access_key=b1b29ee5cbf14c364b53f30b96fa87bc&languages=en&countries=in`;
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.data)
    append(data.data)
}
get()


function append(data) {
    let container = document.getElementById('center')
    data.forEach((el)=> {
        let img = document.createElement('img')
        img.src=el.image
        container.append(img)
    });
}