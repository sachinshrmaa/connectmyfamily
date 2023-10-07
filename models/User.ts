import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please provide a name"] },
  phone: {
    type: Number,
    unique: true,
    required: [true, "Please provide a phone number"],
  },
  address: { type: String, required: [true, "Please provide an address"] },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
});

const User = mongoose.models.UserDB || mongoose.model("UserDB", userSchema);

export default User;
