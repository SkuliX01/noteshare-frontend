"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from "../mycomponents/note"

interface Note {
  id: number,
  title: string,
  subject: string,
  description: string,
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
        const response = await axios.get('https://noteshare-backend-by4p.onrender.com/api/v1/getallnotes');
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
    return <div>Loading...</div>;
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
          description={note.description}
          author={note.author}
        />
      ))}
    </div>
  );
};

export default MyComponent;
