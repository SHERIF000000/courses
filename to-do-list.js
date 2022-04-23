const button = document.querySelector("button")
const container = document.getElementById("container")
const input = document.querySelector("input")







button.addEventListener("click", (eo) => {
    eo.preventDefault()
    const task = `
    <div class="task">
        <span class="icon-star-o"></span>
        <p class="task-text">    ${input.value}   </p>
        <div class="small">
        <span class="icon-bin trash"></span>
        <span class="icon-angry"></span>
        </div>
    </div>
        `
    container.innerHTML += task
    input.value = ""
})

container.style.border = "medium none color"
container.addEventListener("click", (eo) => {
    switch (eo.target.className) {

        case "icon-bin trash":
            eo.target.parentElement.parentElement.remove()
            break;
        case "icon-angry":
            const heart = `       <span class="icon-heart"></span>             `;
            eo.target.classList.add("dn");
            eo.target.parentElement.parentElement
                .getElementsByClassName("task-text")[0]
                .classList.add("finish")


            eo.target.parentElement.innerHTML += heart;

            break;
        case "icon-heart":
            eo.target.parentElement.parentElement
                .getElementsByClassName("task-text")[0]
                .classList.remove("finish")

            eo.target.classList.add("dn")

            const addHeart =
                ` 
        <span class="icon-angry"></span>
        
        `
            eo.target.parentElement.innerHTML += addHeart
            break;
        case "icon-star-o":
            eo.target.classList.add("orange")
            container.prepend(eo.target.parentElement)
            break;
        case "icon-star-o orange":
            eo.target.classList.remove("orange")
            break;

        // if (eo.target.className == "icon-bin trash") {
        //     eo.target.parentElement.parentElement.remove()

        // } else if (eo.target.className == "icon-angry") {
        //     // console.log("subject")
        //     const heart = `       <span class="icon-heart"></span>             `;
        //     eo.target.classList.add("dn");


        //     eo.target.parentElement.parentElement
        //         .getElementsByClassName("task-text")[0]
        //         .classList.add("finish")


        //     eo.target.parentElement.innerHTML += heart;



        // } else if (eo.target.className == "icon-heart") {
        //     eo.target.parentElement.parentElement
        //         .getElementsByClassName("task-text")[0]
        //         .classList.remove("finish")

        //     eo.target.classList.add("dn")

        //     const addHeart =
        //         ` 
        //         <span class="icon-angry"></span>

        //         `
        //     eo.target.parentElement.innerHTML += addHeart



        // } else if (eo.target.className == "icon-star-o") {
        //     eo.target.classList.add("orange")
        //     container.prepend(eo.target.parentElement)
        // } else if (eo.target.className == "icon-star-o orange") {
        //     eo.target.classList.remove("orange")
        // }













    }
})