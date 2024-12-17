'use strict';

/*
    Final Project
    Author: Hannah Jones
    Start Edits: 4-15-24
    Email: HJhannah22@gmail.com
*/
//*Used for both rounds of the game (for first player, then second player)
let pickedInputs = {
    extractInput: function() {
        let inputsArray = []
        let qString = location.search.slice(1);
        qString = qString.replace(/\+/g, " ");
        qString = decodeURIComponent(qString);
        let formData = qString.split(/&/g);
        for (let items of formData) {
            let fieldValuePair = items.split(/=/)
            let fieldValue = fieldValuePair[1]
            //adding those colors to this array
            inputsArray.push(fieldValue)
        }
        return inputsArray
    }
}