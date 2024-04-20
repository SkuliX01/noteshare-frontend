"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from "../mycomponents/note"
import { HashLoader } from 'react-spinners'

interface Note {
  id: number,
  title: string,
  subject: string,
  body: string,
  author: string,
}

const MyComponent = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://skulix.xyz:5820/api/getNotes');
        setNotes(response.data.notes); // Accessing response.data.notes
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel any pending requests (optional)
    return () => {
      // Cancel the request if the component is unmounted or the data fetching is no longer needed
    };
  }, []);

  if (isLoading) {
    return <div className='flex justify-center items-center align-center h-screen'><HashLoader color='#2462eb'/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex items-center justify-center p-12 flex-col mt-[10px]">
      <h1 className='text-center text-light'>Wszystkie nasze notatki</h1>
      {notes.map(note => (
        <Note
          key={note.id}
          title={note.title}
          subject={note.subject}
          description={note.body}
          author={note.author}
          id={note.id}
        />
      ))}
    </div>
  );
};

export default MyComponent;
