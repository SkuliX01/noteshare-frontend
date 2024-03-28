import axios from 'axios'

export default function addNewNote(temat: String, tresc: String, przedmiot: String, autor: String) {
    axios.post(`https://noteshare-backend-by4p.onrender.com/api/v1/insert/${temat}/${tresc}/${przedmiot}/${autor}`, {
        
    })  
    .then (function (response) {
        console.log(response)
    })
    .catch (function (error) {
        console.log(error)
    })
}