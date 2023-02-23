document.querySelector("#items")
.addEventListener("wheel", event => {
    if(event.deltaY > 0) {
        console.log("sscroll up")
        event.target.scrollBy(300, 0)
    } else {
        event.target.scrollBy(-300, 0)
    }
})