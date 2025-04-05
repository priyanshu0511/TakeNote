import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteANote, getANote, updateANote } from '../services/noteService';
import { useAuthContext } from '../hooks/useAuthContext';

const SingleNote = () => {

    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editing, setEditing] = useState(false);
    const [editedNote, setEditedNote] = useState({ title: "", content: "" });
    const navigate = useNavigate();
    const {user} =useAuthContext();

    const handleDelete = async () => {
        try {
            await deleteANote(id);
            navigate('/');
        } catch (error) {
            console.log("Error occured while deleting the note: ", error)
        }
    }

    const handleEdit = () =>{
        setEditing(true);
    };

    const handleChange=(e)=>{
        setEditedNote({...editedNote,[e.target.name]:e.target.value});
    };
    
    const handleSave = async() =>{
        try{
            await updateANote(id,editedNote);
            setNote(editedNote);
            setEditing(false);
        }
        catch(err){
            console.log("Error while editing the note:",err);
        }
    }

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const data = await getANote(id,user);
                // console.log(data)
                setNote(data);
                setEditedNote({ title: data.title, content: data.content });
                setLoading(false);
            }
            catch (err) {
                setError("Failed to fetch the note");
                setLoading(false);
            }
        }
        if(user){
            fetchNote();
        }
    }, [id])

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center text-red-500 mt-20 text-xl">{error}</p>;
    if (!note) return <p className="text-center mt-30 text-2xl">Note not found.</p>;

    return (
        <div className='mt-10'>
            <div className='w-3/4 mx-auto flex justify-between items-center'>
                <div>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-200 hover:bg-blue-300 transition shadow">
                        <span className="text-lg">←</span>
                    </button>
                </div>
                <div className="flex gap-4 mt-4">
                    <button
                        onClick={() => handleEdit(id)}
                        className="px-4 py-2 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition">
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(id)}
                        className="px-4 py-2 bg-red-400 text-white font-semibold rounded-lg shadow-md hover:bg-red-500 transition">
                        Delete
                    </button>
                </div>
            </div>

            {!loading && <div className="border border-blue-500 p-4 w-3/4 mx-auto mt-10 shadow-md h-80">
                <h1 className="text-xl font-bold border-b-2 border-black pb-2">{note.title}</h1>
                <p className="mt-10 px-2">{note.content}</p>
            </div>
            }
            {editing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <h2 className="text-xl font-bold mb-4">Edit Note</h2>
                        <input
                            type="text"
                            name='title'
                            value={editedNote.title}
                            onChange={handleChange}
                            className="w-full text-lg font-bold border-b-2 border-black pb-2 outline-none"
                        />
                        <textarea
                            name='content'
                            value={editedNote.content}
                            onChange={handleChange}
                            className="w-full mt-4 p-2 border rounded-md outline-none resize-none"
                            rows="6"
                        ></textarea>
                        <div className="flex justify-end gap-4 mt-4">
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setEditing(false)}
                                className="px-4 py-2 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SingleNote