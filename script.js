const api_url = "https://type.fit/api/quotes";

const qoutesPara = document.querySelector(".qoutep");
const generator = document.querySelector(".Genbtn");
const author = document.querySelector(".qouteau")

let qoutes = [];
const genQoute = async ()=>{
  
    const response = await fetch(api_url);
     qoutes = await response.json();
    console.log(qoutes);
    const randomIndex = Math.floor(Math.random()* qoutes.length)
    qoutesPara.innerHTML = `${qoutes[randomIndex].text}`;
    author.innerHTML = `~ : ${qoutes[randomIndex].author}`;
    
    
    
}

generator.addEventListener("click", (e)=>{
e.preventDefault();
genQoute();
} )



