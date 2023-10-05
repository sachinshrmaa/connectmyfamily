import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
});

const User = mongoose.models.UserDB || mongoose.model("UserDB", userSchema);

export default User;
