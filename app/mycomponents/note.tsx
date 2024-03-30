export default function Note({title, subject, description, author}){
    return (
        <div className="w-[750px] h-auto rounded-[15px] bg-[#Ececec] shadow-lg mt-[20px] overflow-hidden ">
            <p className="text-[24px] text-black ml-[12px] mt-[12px]">Tytuł: {title}</p>
            <p className="text-[24px] text-black ml-[12px] mt-[-3px] break-words overflow-hidden text-ellipsis max-h-[500px]">Przedmiot: {subject}</p>
            <p className="text-[15px] text-black ml-[12px] mt-[5px]">{description}</p>
            <p className="text-[17px] text-black ml-[12px] mt-[15px]">Autor: {author}</p>
        </div>
    )
}