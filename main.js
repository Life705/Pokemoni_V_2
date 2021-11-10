import { database } from "./database.js";
import { createCard } from "./createCard.js";

const main = document.querySelector(".main")
database.forEach(poke => {
    const pokeCard = createCard(poke)

    main.appendChild(pokeCard)
})

const pokeName = document.querySelector("#poke-name")
const pokePicture = document.querySelector("#poke-picture")
const pokeHeigth = document.querySelector("#poke-height")
const pokeCat = document.querySelector("#poke-category")
const pokeWeight = document.querySelector("#poke-weight")
const pokeAbilities = Array.from(document.querySelectorAll(".power-select"))
const buttonSearch = document.querySelector(".glass-search-button")
const searchValue = document.querySelector(".search")

const btnAddPoke = document.querySelector(".button-add-poke")
btnAddPoke.addEventListener("click", function (e) {
    e.preventDefault()
    const newPoke = {
        name: pokeName.value,
        image: './PokePoze/016.png',
        height: pokeHeigth.value,
        category: pokeCat.value,
        weight: pokeWeight.value,
        weightUnit: "lbs",
        abilitis: pokeAbilities.filter(x => x.checked).map(x => x.name).join(", ")
    }
    database.push(newPoke)
    const pokeCard = createCard(newPoke)
    main.appendChild(pokeCard)
    pokeName.value = ""
    pokePicture.value = ""
    pokeHeigth.value = ""
    pokeCat.value = ""
    pokeWeight.value = ""
    pokeAbilities.forEach(x => x.checked = false)
})


buttonSearch.addEventListener("click", function (e) {
    e.preventDefault()
    main.innerHTML = ""

    const pokeSearch = database.filter(x => x.name.toLowerCase().includes(searchValue.value.toLowerCase()))
    pokeSearch.forEach(x => {
        main.appendChild(createCard(x))
    }
    )

    // const createSearch = createCard(pokeSearch[0])
    // main.appendChild(createSearch)
})
console.log(database[1].name[0])
searchValue.addEventListener("keyup", function (e) {
    e.preventDefault()
    main.innerHTML = ""
    const searchInputValue = searchValue.value
    const pokeSearch = database.filter(x => x.name.toLowerCase().substring(0, searchValue.value.length) == searchInputValue.toLowerCase())
    pokeSearch.forEach(x => {
        main.appendChild(createCard(x))
    }
    )
}


)



