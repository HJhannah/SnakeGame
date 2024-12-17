/*
    Final Project
    Author: Hannah Jones
    Start Edits: 4-15-24
    Email: HJhannah22@gmail.com
*/

//*Third Page Script

//calling a function that will get the cookie value needed
const preferences = getCookieValue()

//putting text into the p tag to let the user know what score
//they ended with
let scorePTag = document.getElementById('scoreInfo')
scorePTag.innerHTML = 'You ended with a score of: ' + preferences.score

//will get the name=value pairs 
function getCookieValue() {
    let fields = {}

    if (document.cookie) {
        let cookieList = document.cookie.split('; ')

        //getting the values from the keys
        for (items of cookieList) {
            let cookie = items.split('=')
            let name = cookie[0]
            let value = decodeURIComponent(cookie[1])
            fields[name] = value
        }
        return fields
    }
}