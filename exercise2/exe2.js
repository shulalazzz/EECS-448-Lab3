document.addEventListener("DOMContentLoaded", () => {
    current = 0
    image_arr = new Array
    image_arr[0] = "1.jpg"
    image_arr[1] = "2.jpg"
    image_arr[2] = "3.jpg"
    image_arr[3] = "4.jpg"
    image_arr[4] = "5.jpg"
    document.querySelector("#image").src = image_arr[current]
    document.querySelector("#pre").addEventListener("click", () => {
        console.log("pre clicked")
        if (current == 0) {
            current = 4
        }
        else
            current -= 1
        document.querySelector("#image").src = image_arr[current]
    })
    document.querySelector("#next").addEventListener("click", () => {
        console.log("next clicked")
        if (current == 4) {
            current = 0
        }
        else
            current += 1
        document.querySelector("#image").src = image_arr[current]
    })
})