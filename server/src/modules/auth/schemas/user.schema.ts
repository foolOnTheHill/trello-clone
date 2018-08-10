import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    email : { type: String, require: true, unique: true },
		name : { type: String, require: true },
    password : { type: String, require: true }
  },
  {
    collection: 'users',
    read: 'nearest'
  }
);
