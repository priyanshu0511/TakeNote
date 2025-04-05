import axios from "axios";

const API_URL = `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/notes`;

// Fetch all notes-
export const getAllNotes = async (user) => {
    const response = await axios.get(API_URL, {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    });
    return response.data;
}

//Fetch a note-
export const getANote=async(id,user)=>{
    const response=await axios.get(`${API_URL}/${id}`,{
        headers: {
            'Authorization':`Bearer ${user.token}`
        }
    });
    return response.data;
}

//Post a note-
export const postANote = async (noteData, user) => {
    const response = await axios.post(API_URL, noteData, {
        headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}

//Update a note-
export const updateANote = async (id, noteData, user) => {
    const response = await axios.put(`${API_URL}/${id}`, noteData, {
        headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data;
}

//Delete a note-
export const deleteANote = async (id, user) => {
    const response = await axios.delete(`${API_URL}/${id}`, {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    });
}

