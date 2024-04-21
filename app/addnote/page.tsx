"use client"
import { ChangeEvent, ChangeEventHandler } from "react"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea";
import { Subjectlist } from '../mycomponents/list'
import { Toaster, toast } from 'sonner'
import addNewNote from '../api/addNote'
import Link from "next/link";

export default function AddNote() {

    const [Temat, setTemat] = useState("");
    const [Przedmiot, SetPrzedmiot] = useState("polski");
    const [Notatka, setNotatka] = useState("");
    const [Autor, setAutor] = useState("");
    const [img, setImage] = useState<File | null>(null);

    const HandleTematChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTemat(event.target.value)
    }

    const HandlePrzedmiotChange = (event: ChangeEvent<HTMLSelectElement>) => {
        SetPrzedmiot(event.target.value)
    }

    const HandleAutorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAutor(event.target.value)
    }

    const HandleNotatkaChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setNotatka(event.currentTarget.value);
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const maxSize = 3 * 1024 * 1024; // 3 MB
        const minWidth = 800; // Minimum width
        const minHeight = 800; // Minimum height
    
        if (file && file.size > maxSize) {
            toast.error("Maximum image size is 3MB");
            event.target.value = ""; // Reset the input value
        } else if (file) {
            const url = URL.createObjectURL(file);
            const img = new Image() as HTMLImageElement;

            img.onload = function() {
                if (img.width < minWidth || img.height < minHeight) {
                    toast.error("Minimum image dimensions are 800x800");
                    URL.revokeObjectURL(url); // Free up memory
                    event.target.value = ""; // Reset the input value
                } else {
                    setImage(file);
                    URL.revokeObjectURL(url); // Free up memory
                }
            };

            img.src = url;
        }
    };

    const convertImageToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result as string);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    return (
        <main className="flex min-h-screen flex-col align-items justify-between p-12">
            <section id="main">
            <Toaster richColors position="top-right" closeButton/>
                <p className="text-center text-[24px]">Note Share</p>
                <div className="flex justify-center align-center mt-[10px]">
                    <div className="flex flex-col">
                        <Input placeholder="Temat" value={Temat} onChange={HandleTematChange} className="w-[290px]" required/>
                        <Textarea placeholder="Wpisz tutaj treść swojej notatki" className="resize-none mt-[10px]" value={Notatka} onChange={HandleNotatkaChange} required/>
                        <Input type="file" id="picture" placeholder="Zdjęcie" className="w-[290px] mt-[10px]" onChange={handleImageChange} required />
                        <Subjectlist value={Przedmiot} onChange={HandlePrzedmiotChange}/>
                        <Input placeholder="Autor" value={Autor} onChange={HandleAutorChange} className="mt-[10px]" required/>
                        <Button className="w-[290px] mt-[10px] bg-[#2462eb] text-white hover:bg-[#163b8d]" onClick={async () => { addNewNote(Temat, Notatka, Przedmiot, Autor, await convertImageToBase64(img as File) || "s"); }}>Dodaj nową notatkę</Button>
                        <Button asChild className="w-[290px] mt-[10px] bg-[#2462eb] text-white hover:bg-[#163b8d]">
                            <Link href={'/searchallnotes'}>Przeczytaj wszystkie notatki</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}