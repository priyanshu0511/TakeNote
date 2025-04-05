const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        content:{
            type: String,
            required: true
        },
        user_id:{
            type: String,
            required: true
        }
    },{
        timestamps: true
    }
)

const Note=mongoose.model("Note",productSchema);

module.exports = Note;