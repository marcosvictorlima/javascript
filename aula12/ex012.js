var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 6) {
    console.log('uma boa madrugada!! ')
} else if (hora < 12) {
    console.log('Tenha um bom dia!!')
} else if (hora < 18.00){
    console.log('Tenha uma boa tarde!!')
} else {
    console.log('Tenha uma boa noite!!')
}