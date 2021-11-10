import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	read: false,
});

const Book = mongoose.model('Book', bookSchema);

export{
  Book
}