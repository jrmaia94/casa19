function ObjDateForString(date){

    var dia = date.getDate()
    if(dia < 10) dia = `0${dia}`

    var mes = date.getMonth() + 1
    if(mes < 10) mes = `0${mes}`

    var ano = date.getFullYear()

    return `${ano}-${mes}-${dia}`

}

function StrDateForObj(date){
    return new Date(`${date}T04:00:05`)
}

export { ObjDateForString, StrDateForObj }