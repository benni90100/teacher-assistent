const card = document.querySelector(`.card`)
const cocktailInput = document.querySelector(`#cocktail`)
const buttonCocktail = document.querySelector(`#scegli`)
async function cocktailFetch() {
    card.innerHTML=``
    cocktailInput.value =``
    const cocktail = cocktailInput.value   
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    const cocktailData = await res.json()
    const cocktails = cocktailData.drinks[0]

    const image = document.createElement(`img`)
    image.setAttribute(`src`, cocktails.strDrinkThumb)
    image.classList.add(`image`)
    card.appendChild(image)

    const title = document.createElement(`h2`)
    title.textContent =  cocktails.strDrink
    title.classList.add(`title`)
    card.appendChild(title)

    const instruction = document.createElement(`p`)
    instruction.textContent = cocktails.strInstructionsIT
    instruction.classList.add(`instruction`)
    card.appendChild(instruction)
}
buttonCocktail.addEventListener(`click`, cocktailFetch)