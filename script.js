const URL = "https://api.adviceslip.com/advice";
const adviceId = document.getElementById("adv-id");
const quote = document.getElementById("quote-box");
const button = document.getElementById("btn");

button.addEventListener("click", ()=>{
    fetch(`${URL}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            quote.innerHTML = `
                <p class="quote" id="quote">
                    "${data.slip.advice}"
                </p>
            `
            adviceId.innerHTML = `
                <h4 id="advice-id">
                    Advice # ${data.slip.id}
                </h4>
            `
        })
})