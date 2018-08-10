import * as mongoose from 'mongoose';

export const ListSchema = new mongoose.Schema(
  {
    title : { type: String, require: true, unique: true },
		board : {type: mongoose.Schema.Types.ObjectId, ref: 'Board'}
  },
  {
    collection: 'lists',
    read: 'nearest'
  }
);
