const body = document.body
const switchBtn = document.querySelector('.switch')
const switchPara = document.querySelector('.color')

// Ao clicar vai armazenar os valores nas três variaveis
switchBtn.addEventListener('click', function() {
    let color1 = getRandomNum(); // RED
    let color2 = getRandomNum(); // BLUE
    let color3 = getRandomNum(); // GREEN

    // Vai armazenar os numeros das variaveis como valor do RGB
    const colorString = `rgb(${color1}, ${color2}, ${color3})`
    console.log(colorString)

    // Vai colocar no CSS e na tela como texto
    body.style.backgroundColor = colorString
    switchPara.innerText = colorString
})

// Gera os números do "RGB"
function getRandomNum() {
    // Math.floor arredonda o número tirando casas decimais
    // Math.random gera numeros aleatorios com um valor de limite
    return Math.floor(Math.random() * 256)
}