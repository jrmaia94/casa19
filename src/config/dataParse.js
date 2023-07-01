function ObjDateForString(date){

    var dia = date.getDate()
    if(dia < 10) dia = `0${dia}`

    var mes = date.getMonth() + 1
    if(mes < 10) mes = `0${mes}`

<<<<<<< HEAD
    var ano = date.getFullYear()
=======
    var ano = date. getFullYear()
>>>>>>> 8b2930b185456ecc4f462a4502209c1480559f42

    return `${ano}-${mes}-${dia}`

}

function StrDateForObj(date){
<<<<<<< HEAD
    return new Date(`${date}T04:00:05`)
=======
    return new Date(`${date}T00:00:05`)
>>>>>>> 8b2930b185456ecc4f462a4502209c1480559f42
}

export { ObjDateForString, StrDateForObj }