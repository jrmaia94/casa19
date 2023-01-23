export const dateToString = (d) => {
    var date  = new Date(d)
    let dd = String(date.getDay())
    let mm = String(parseInt(date.getMonth()) + 1)
    let yyyy = date.getFullYear()

    if(dd.length <= 1) dd = `0${dd}`
    if(mm.length <= 1) mm = `0${mm}`

    return `${dd}/${mm}/${yyyy}`
}

export const stringToDate = (date) => {
    
    var splitDate = date.split('/')

    var dd = splitDate[0]
    var mm = parseInt(splitDate[1]) - 1
    var yyyy = splitDate[2]

    return new Date(yyyy, mm, dd)

}