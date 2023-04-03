const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("content");
const apiKey = "SjapSLcf+FWJN6yGs2mVQg==SEISupoOi6aSQKLe";
const options = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey},
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
 async function joke(){
    try { jokeEl.innerHTML="Loading..."
    btnEl.dissabled = false;
    btnEl.innerHTML= "Updating..."
    const response = await fetch(apiUrl,options);
    btnEl.dissabled = true;
    btnEl.innerHTML= "Tell Me a Joke";
    const data = await response.json();
    jokeEl.innerHTML = data[0].joke;
        
    } catch (error) {

      jokeEl.innerHTML = "An Error occured,Try Again Later"  
      btnEl.dissabled = false;
    btnEl.innerHTML= "Tell Me a Joke";
    }
   
}
btnEl.addEventListener("click",joke)