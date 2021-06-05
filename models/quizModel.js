// Dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema

// Quiz Schema
const QuestionSchema = new Schema({
    question: {
	   type: String,
	   required: true
	  },
    options: [
	   {
	  	   type: String,
	       required: true
	   }
    ],
    answer: {
       type: Number,
       required: true
      }
});

export default mongoose.model('Question', QuestionSchema);