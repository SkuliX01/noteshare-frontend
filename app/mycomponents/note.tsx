import { Button } from "@/components/ui/button";

interface NoteProps {
    title: string,
    subject: string,
    body: string,
    author: string,
}


export default function Note({title, subject, body, author}: NoteProps){

    const DownloadNote = () => {

        const content = `Tytuł: ${title} \n\nTreść: ${body} \n\nAutor: ${author}`

        const blob = new Blob([content], {type: 'text/plain'});

        const anchor = document.createElement('a');
        anchor.href = URL.createObjectURL(blob);

        anchor.download = `${title}`;

        document.body.appendChild(anchor);
        anchor.click();

        document.body.removeChild(anchor)
    }

    return (
        <div className="max-w-[1050px] w-10/12 h-auto rounded-[15px] bg-[#Ececec] shadow-lg mt-[20px] overflow-hidden ">
            <p className="text-[24px] text-black ml-[12px] mt-[12px]">Tytuł: {title}</p>
            <p className="text-[24px] text-black ml-[12px] mt-[-3px] break-words overflow-hidden text-ellipsis max-h-[500px]">Przedmiot: {subject}</p>
            <p className="text-[15px] text-black ml-[12px] mt-[5px]">{body}</p>
            <p className="text-[17px] text-black ml-[12px] mt-[15px]">Autor: {author}</p>
            <div className="flex justify-center items-center mb-[10px]">
                <Button onClick={DownloadNote} className="bg-[#2462eb] text-white hover:bg-[#163b8d] hover:text-white h-[30px]">Pobierz Notatkę</Button>
            </div>
        </div>
    )
}