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

    const HandleTematChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTemat(event.target.value)
    }

    const HandlePrzedmiotChange = (event: ChangeEvent<HTMLInputElement>) => {
        SetPrzedmiot(event.target.value)
    }

    const HandleAutorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAutor(event.target.value)
    }

    const HandleNotatkaChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setNotatka(event.currentTarget.value);
    }

    return (
        <main className="flex min-h-screen flex-col align-items justify-between p-12">
            <section id="main">
            <Toaster richColors position="top-right" closeButton/>
                <p className="text-center text-[24px]">Note Share</p>
                <div className="flex justify-center align-center mt-[10px]">
                    <div className="flex flex-col">
                    <Input placeholder="Temat" value={Temat} onChange={HandleTematChange} className="w-[290px]"/>
                    <Textarea placeholder="Wpisz tutaj treść swojej notatki" className="resize-none mt-[10px]" value={Notatka} onChange={HandleNotatkaChange}/>
                    <Subjectlist value={Przedmiot} onChange={HandlePrzedmiotChange}/>
                    <Input placeholder="Autor" value={Autor} onChange={HandleAutorChange} className="mt-[10px]"></Input>
                    <Button className="w-[290px] mt-[10px] bg-[#2462eb] text-white hover:bg-[#163b8d]" onClick={() => addNewNote(Temat, Notatka, Przedmiot, Autor)}>Dodaj nową notatkę</Button>
                    <Button asChild className="w-[290px] mt-[10px] bg-[#2462eb] text-white hover:bg-[#163b8d]">
                        <Link href={'/searchallnotes'}>Przeczytaj wszystkie notatki</Link>
                    </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}