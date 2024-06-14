


const tog = document.querySelectorAll(".icons")
const togoff = document.querySelectorAll('ion-icon[name="close-outline"]')

tog.forEach(div => {
    div.addEventListener("click", () => {
        const parents = div.parentNode
        const span = parents.querySelector("span")
        const icon = parents.querySelector
        ('ion-icon[name="close-outline"]')

        parents.style.backgroundColor = "#FFFFFF"
        parents.style.boxShadow = "0px 3px 3px 0px rgba(0, 0, 0, 0.278)"
        span.classList.remove("hide")
        div.classList.add("hide")
        icon.classList.remove("hide")
    })
})

togoff.forEach(div => {
    div.addEventListener("click", () => {
        const parents = div.parentNode
        const span = parents.querySelector("span")
        const icons = parents.querySelector(".icons")

        parents.style.backgroundColor = "transparent"
        parents.style.boxShadow = "none"
        span.classList.add("hide")
        div.classList.add("hide")
        icons.classList.remove("hide")
    })
})
