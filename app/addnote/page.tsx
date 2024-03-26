"use client"

import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea";
import { Subjectlist } from '../mycomponents/list'

export default function addNote() {

    const [Temat, setTemat] = useState("");
    const [Przedmiot, SetPrzedmiot] = useState("");
    const [Notatka, setNotatka] = useState("");
    const [Autor, setAutor] = useState("");

    const HandleTematChange = (event) => {
        setTemat(event.target.value)
    }

    const HandlePrzedmiotChange = (event) => {
        SetPrzedmiot(event.target.value)
    }

    const HandleAutorChange = (event) => {
        setAutor(event.target.value)
    }

    const HandleNotatkaChange = (event) => {
        setNotatka(event.target.value)
    }

    return (
        <main className="flex min-h-screen flex-col align-items justify-between p-12">
            <section id="main">
                <p className="text-center text-[24px]">Note Share</p>
                <div className="flex justify-center align-center mt-[10px]">
                    <div>
                    <Input placeholder="Temat" value={Temat} onChange={HandleTematChange} className="w-[290px]"/>
                    <Textarea placeholder="Wpisz tutaj treść swojej notatki" className="resize-none mt-[10px]" value={Notatka} onChange={HandleNotatkaChange}/>
                    <Subjectlist value={Przedmiot} onChange={HandlePrzedmiotChange}/>
                    <Input placeholder="Autor" value={Autor} onChange={HandleAutorChange} className="mt-[10px]"></Input>
                    <Button className="w-[290px] mt-[10px]">Dodaj nową notatkę</Button>
                    </div>
                </div>
            </section>
        </main>
    )
}