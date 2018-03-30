import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  desc: String,
  bio: String,
  email: String,
  thumbnail: String,
  post: {
    type: [],
    default: []
  },
  following: {
    type: [],
    default: []
  }
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
