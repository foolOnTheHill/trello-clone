import * as mongoose from 'mongoose';

export const BoardSchema = new mongoose.Schema(
  {
    title : String,
		user : {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },
  {
    collection: 'boards',
    read: 'nearest'
  }
);
