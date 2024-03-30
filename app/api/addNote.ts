import axios from 'axios'
import { toast } from 'sonner'

export default function addNewNote(temat: String, tresc: String, przedmiot: String, autor: String) {
    axios.post(`https://noteshare-backend-by4p.onrender.com/api/v1/insert/${temat}/${tresc}/${przedmiot}/${autor}`, {
        
    })  
    .then (function (response) {
        if (response.status === 200) {
            // Successful response
            toast.success(`Pomyślnie dodano nową notatkę z przedmiotu: ${przedmiot}`);
        }
    })
    .catch(error => {
        if(error.response && error.response.status === 409) {
            toast.warning('W naszej bazie występuje już notatka z takim tytułem');
        } else if (error.response.status === 404) {
            toast.error('Wystąpił błąd serwera.');
        } else {
            toast.error(`Nieoczekiwany kod statusu: ${error.response.status}`);
        }
    })
}