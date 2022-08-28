 document.getElementById("search_input").addEventListener('keydown',search)

search = async (event) => {
    if (event.key == "Enter") {
        let search1 = document.getElementById("search_input").value;
        let obj = {
            que: search1,
        }
        let url = `https://masai-api.herokuapp.com/news?q=${search1}`;
        let res = await fetch(url);
        let data = await res.json();

        (data.articles);
        localStorage.setItem("query", JSON.stringify(obj));
        window.location.href = "search.html";

    }
}