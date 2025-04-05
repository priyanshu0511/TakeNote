import React, { useEffect, useState } from 'react'
import NotePreview from './NotePreview'
import { getAllNotes } from '../services/noteService'
import { Link, useNavigate } from 'react-router-dom';
import {useAuthContext} from '../hooks/useAuthContext'

const NoteContainer = () => {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate=useNavigate();
    const {user}=useAuthContext();

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const data = await getAllNotes(user);
                setNotes(data);
                setLoading(false);
                // console.log(data);
            }
            catch (err) {
                console.log("Error while fetching Notes :", err);
                setError(err);
                setLoading(false);
            }
        }
        if(user){
            fetchNotes();
        }
    }, [user])

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center text-red-500 mt-20 text-xl">{error}</p>;
    if (!notes.length) {
        return (
            <div className="flex flex-col items-center justify-center text-gray-600 mt-32">
                <p className="text-3xl font-medium">No notes found.</p>
                <Link to='/create'><p className="text-xl underline text-midnight">Start by creating a new note!</p></Link>
            </div>
        );
    }
    

    return (
        <div className="w-10/12 mx-auto mt-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Your Notes</h2>
                <button
                    onClick={() => navigate("/create")}
                    className="flex w-40 items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    + Create Note
                </button>
            </div>
            <div className='grid grid-cols-3 p-4 gap-5 h-auto'>
                {notes.map((note) => (
                    <NotePreview key={note._id} id={note._id} title={note.title} content={note.content} />
                ))}
            </div>
        </div>
    )
}

export default NoteContainer