import mongoose from "mongoose";

import Subjects from "./subjects.js";

const teachersScheema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    
    subjects : {
        type : [{type: mongoose.Schema.Types.ObjectId, ref : Subjects}],
        required : false
    },
    

})

var Teachers = mongoose.model("Teacher", teachersScheema);

export default Teachers;