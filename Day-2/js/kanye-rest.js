const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => quoteDisplay(data))
}

const quoteDisplay = quote => {
    const blogContainer = document.getElementById('container');
    blogContainer.innerText = quote.quote;
    console.log(quote)
}