const url = "https://official-joke-api.appspot.com/random_joke";


const button = document.querySelector(".button")
const resultContainer = document.querySelector(".resultContainer")

  async function makeApiCall(){

    const response = await fetch(url);
   
    const data = await response.json();
  
    const info = data.setup;
    resultContainer.innerHTML = "";

    return info;
    
    
  };


    button.onclick = async function() {
      const joke = await makeApiCall();
      resultContainer.innerHTML = `<div class="results">${joke}</div>`
    }
    
    
   makeApiCall();

  
  


