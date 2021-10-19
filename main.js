import { database } from "./database.js";

const limitDB = database.split(0, 10)
const main = document.querySelector(".main")

database.forEach(poke => {
    const pokeCard = document.createElement("div")
    pokeCard.classList = "poke-card"
    pokeCard.innerHTML = `
        <div class="chenar-sus">
            <img class="imaginea" src="${poke.image}" alt="">
        </div>
        <div class="chenar-jos">
        <div class="chenar-jos-mic">Height <br> <span class="span-inside-mic-chenar">${poke.height}"</span> </div>
        <div class="chenar-jos-mic">Category <br> <span class="span-inside-mic-chenar">${poke.category}</span></div>
        <div class="chenar-jos-mic">Weight <br><span class="span-inside-mic-chenar">${poke.weight} ${poke.weightUnit}</span></div>
        <div class="chenar-jos-mic">Abilities <br><span class="span-inside-mic-chenar">${poke.abilitis}</span></div>
        </div>
        `
    main.appendChild(pokeCard)
})




