document.addEventListener("DOMContentLoaded", () => {
    let red_br = document.querySelector('#red_border')
    let green_br = document.querySelector('#green_border')
    let blue_br = document.querySelector('#blue_border')
    let width_br = document.querySelector('#width')
    let red_ba = document.querySelector('#red_back')
    let green_ba = document.querySelector('#green_back')
    let blue_ba = document.querySelector('#blue_back')
    let p = document.querySelector('#p')
    document.querySelector('#confirm').addEventListener('click', () => {
        let width = parseInt(width_br.value)
        let red_r = parseInt(red_br.value)
        let green_r = parseInt(green_br.value)
        let blue_r = parseInt(blue_br.value)
        let red_b = parseInt(red_ba.value)
        let green_b = parseInt(green_ba.value)
        let blue_b = parseInt(blue_ba.value)
        css_width = String(width) + 'px'
        p.style.borderWidth = css_width
        css_border_color = 'rgb(' + String(red_r) + ',' + String(green_r) + ',' + String(blue_r) + ')'
        css_background_color = 'rgb(' + String(red_b) + ',' + String(green_b) + ',' + String(blue_b) + ')'
        p.style.borderColor = css_border_color
        p.style.backgroundColor = css_background_color
        console.log(p.style.borderColor)
        console.log(p.style.backgroundColor)
        info = 'Color units are ' + css_border_color + ', ' + css_background_color
        document.querySelector('#info').innerText = info
    })
})