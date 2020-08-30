//variables

const quote = document.getElementById('quote');
const author = document.getElementById('author');

let url = "https://quotes.rest/qod.json";



getData();

async function getData(){
    const response = await fetch(url);
    const data = await response.json();

    quote.textContent = data.contents.quotes[0].quote;
    author.textContent = data.contents.quotes[0].author;
}
    
    