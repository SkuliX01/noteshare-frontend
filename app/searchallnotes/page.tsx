"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from "../mycomponents/note";
import { HashLoader } from 'react-spinners';

interface Note {
  id: number;
  title: string;
  content: string;
  image: string;
  subject: string;
  author: string;
}

const MyComponent = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://skulix.xyz:3000/allNotes')
      .then(response => {
        setNotes(response.data.notes);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex items-center justify-center p-12 flex-col mt-[10px]">
      <h1 className='text-center text-light'>Wszystkie nasze notatki</h1>
      {isLoading ? (
        <div className='flex justify-center items-center align-center h-screen'><HashLoader color='#2462eb'/></div>
      ) : error ? (
        <div>Error: {(error as Error).message}</div>
      ) : (
        notes.map((note: Note) => (
          <Note
            key={note.id}
            title={note.title}
            description={note.content}
            image={note.image}
            subject={note.subject}
            author={note.author}
          />
        ))
      )}
    </div>
  );
};

export default MyComponent;
