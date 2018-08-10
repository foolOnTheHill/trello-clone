import * as mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema(
  {
    title : String,
		description : String,
		list : {type: mongoose.Schema.Types.ObjectId, ref: 'List'}
  },
  {
    collection: 'cards',
    read: 'nearest'
  }
);
