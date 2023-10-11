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
  status: {
    type: String,
    required: [true, "Please provide a status"],
  },
  image: {
    type: String,
    required: false,
    default:
      "https://firebasestorage.googleapis.com/v0/b/connectmyfamilysikkim.appspot.com/o/images%2Fdefualt_user_image.jpg?alt=media&token=83f0a374-e844-4a93-b75f-7ce37642715a&_gl=1*mos2zz*_ga*Njc1MTQxNDUuMTY5NjY5Nzg5NA..*_ga_CW55HF8NVT*MTY5NjY5NzkxNS4xLjEuMTY5NjcwMzA2MS4yNi4wLjA.",
  },
});

const User = mongoose.models.UserDB || mongoose.model("UserDB", userSchema);

export default User;
