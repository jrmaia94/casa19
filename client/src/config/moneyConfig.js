export const valueToString = (value) => {
    value = parseFloat(value)
    var reais = parseInt(value);
    var centavos = Math.round(parseInt((value - reais) * 1000)/10);
    var centavos = centavos.toString()

    if(centavos.length < 2)centavos = `0${centavos}`
    
    const arrNumeros = reais.toString().split('');
    
    let numeroPontuado = '';
    let numeroControle = 1
    
    for (let i = arrNumeros.length - 1; i >= 0; i--) {
        numeroPontuado = `${arrNumeros[i]}${numeroPontuado}`;
        
        if(numeroControle % 3 == 0) numeroPontuado = `.${numeroPontuado}`
        
        numeroControle++
    }
    
    return `R$ ${numeroPontuado},${centavos}`
}

export const stringToValue = (string) => {

    var texto = string.replace('R$', '')

    for (let i = texto.length; i > 0; i--) {
        texto = texto.replace('.', '')        
    }

    texto = texto.replace(',', '.')

    return parseFloat(texto)
}