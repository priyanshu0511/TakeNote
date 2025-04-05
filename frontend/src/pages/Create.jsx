import React, { useState } from 'react'
import { postANote } from '../services/noteService';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Create = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const {user} =useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      return alert("You must be logged in to create a note.");
    }
    if (!title || !content) {
      return alert("Title and Content are required.");
    }
    try {
      const data = await postANote({ title, content },user);
      console.log(data)
    }
    catch (err) {
      console.log("Error while creating a note:", err);
    }
  }

  return (
    <div className="w-3/4 mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Create a New Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 mb-3 rounded-md"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border px-3 py-2 mb-3 rounded-md h-52"
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={() => navigate("/")}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Save Note
          </button>
        </div>
      </form>
    </div>
  );
};


export default Create