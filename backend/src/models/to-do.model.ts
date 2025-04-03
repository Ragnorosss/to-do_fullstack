import { Document, Schema, Types, model } from 'mongoose';

export interface IToDo extends Document {
  title: string;
  descriptions: string;
  user: Types.ObjectId;
  isCompleted: boolean;
}

const toDoScemas = new Schema<IToDo>({
  title: { type: String, required: true },
  descriptions: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const ToDo = model<IToDo>('Todo', toDoScemas);
export default ToDo;
