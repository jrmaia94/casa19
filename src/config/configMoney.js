function StrMoneyForNumber(string){

    return parseFloat(string.replace('R$', '').replace(/\./g, '').replace(',', '.'))

}

function NumberMoneyForStr(number){

    number = Math.round(number * 100) / 100
    
    let decimais = Math.round((number - parseInt(number)) * 100).toString()
    let inteiro = parseInt(number)

    let inteiroString = ''
    if(decimais.toString().length < 2) decimais = `0${decimais}`
    inteiro.toString().split('').reverse().forEach( (e,i) => {
        if(i % 3 === 0 && i !== 0){
            inteiroString = `${inteiroString}.${e}`
        }else{
            inteiroString = `${inteiroString}${e}`
        }
    })

    inteiroString = inteiroString.split('').reverse().join('')

    return `R$ ${inteiroString},${decimais}`

}

export { StrMoneyForNumber, NumberMoneyForStr }