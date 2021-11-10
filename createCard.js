export const createCard = function (x) {
    const pokeCard = document.createElement("div")
    pokeCard.classList = "poke-card"
    pokeCard.innerHTML = `
        <div class="poke-name">${x.name || "The Unknow"}</div>
        <div class="box-up">
            <img class="img" src="${x.image}" alt="">
        </div>
         <div class="box-down">
                <div class="box-down-small">Height <br> <span class="span-inside-small-box-chenar">${x.height}"</span> </div>
                <div class="box-down-small">Category <br> <span class="span-inside-small-box-chenar">${x.category}</span></div>
                <div class="box-down-small">Weight <br><span class="span-inside-small-box-chenar">${x.weight} ${x.weightUnit}</span></div>
                <div class="box-down-small">Abilities <br><span class="span-inside-small-box-chenar">${x.abilitis}</span></div>
        </div>
        `
    return pokeCard
}