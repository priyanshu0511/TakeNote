import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotePreview = ({ id, title, content }) => {

  const shortContent = content.length > 68 ? content.substring(0, 65) + "..." : content;
  const shortTitle = title.length > 48 ? title.substring(0, 45) + "..." : title;

  return (
    <div>
      <div className="border border-blue-500 p-4 rounded-lg shadow-md h-[150px]">
        <Link to={`/notes/${id}`}>
          <h1 className="font-bold border border-darkblack underline bg-lightblue px-4 py-2 min-h-[40px]">
            {title}
          </h1>
        </Link>
        <p className="mt-2 px-4 pb-2 min-h-[40px]">{shortContent}</p>
      </div>
    </div>
  );
}

export default NotePreview