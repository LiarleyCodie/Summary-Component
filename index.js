const categoryElement = document.querySelector("#category")
const categoriesElement = document.querySelector("#categories")
const buttonElement = document.querySelector("#button")
var delay = 0
categoryElement.remove()

function fetchData() {
  return fetch("data.json")
    .then(response => response.json())
    .then(data => {
      data.map((item, i) => {
        const { category, score, icon } = item
        const newCategory = categoryElement.cloneNode(true)
        const categoryIcon = newCategory.querySelector("#icon")
        const categoryTitle = newCategory.querySelector("#title")
        const categoryScore = newCategory.querySelector("#userScore")
        categoryIcon.src = icon
        categoryTitle.innerHTML = category
        categoryScore.innerHTML = score
        newCategory.classList.add(category)

        delay = i * 50
        newCategory.style.animation = `revealCategory 500ms ease backwards ${delay}ms`
        categoriesElement.appendChild(newCategory)
      })
    })
    .catch(error => console.error(error))
}

async function main() {
  await fetchData()
  buttonElement.style.animationDelay = `${delay + 50}ms`
  buttonElement.style.animationPlayState = "running"
}

main()