import axios from 'axios'
import { toast } from 'sonner'

export default function addNewNote(temat: String, tresc: String, przedmiot: String, autor: String) {
    axios.post(`https://skulix.xyz:3000/create`, {
        title: temat,
        body: tresc,
        subject: przedmiot,
        author: autor
    })  
    .then (function (response) {
        if (response.status === 201) {
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