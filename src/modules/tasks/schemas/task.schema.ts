import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  description: String,
  active: Boolean,
  userId: String,
});
