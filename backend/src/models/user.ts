import { model, Schema, Document, Types } from 'mongoose';

export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  todos: Types.ObjectId[]; // Ссылка на задачи
}

const UserSchema = new Schema<IUser>({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }] 
});

const User = model<IUser>('User', UserSchema);

export default User;
