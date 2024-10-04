import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      maxLength: 50,
    },
    lastName: {
      type: String,
      maxLength: 50,
    },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
      default: 'user',
    },
    userBio: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8
    },
  },
  { timestamps: true },
);
userSchema.index(
  { email: 1 },
  {
    unique: true,
    partialFilterExpression: { isDeleted: false, email: { $gt: '' } },
  },
);

const UserModel = mongoose.model('User', userSchema, 'users');

export default UserModel;