const btnEl = document.getElementById("btn")
const quoteEl = document.getElementById("quote")
const authorEl = document.getElementById("author")

const apiURL = "https://api.quotable.io/random"

async function getQuote(){
    try {
        btnEl.innerText = "LOADING..";
        btnEl.disabled = true;
        quoteEl.innerText ="Updating...";
        authorEl.innerText = "Updating..."
        const response = await fetch(apiURL);
        const data = await response.json();
        const qouteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = qouteContent;
        authorEl.innerText = "~ " + quoteAuthor;
        btnEl.innerText = "Get a Quote";
        btnEl.disabled = false;
        console.log(data);
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An error happened, try again later";
        authorEl.innerText = "An error happened"
        btnEl.innerText = "Get a Quote";
        btnEl.disabled = false;
    }
}

getQuote()

btnEl.addEventListener("click", getQuote)