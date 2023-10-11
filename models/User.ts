import mongoose, { trusted } from "mongoose";

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
    default: "Missing",
  },
  image: {
    type: String,
    required: false,
    default:
      "https://firebasestorage.googleapis.com/v0/b/sikkimconnectmyfamily.appspot.com/o/images%2Fdefault_img.png?alt=media&token=cc6ce384-3bb0-4a1e-81ca-c83219feee1f&_gl=1*992oe1*_ga*Njc1MTQxNDUuMTY5NjY5Nzg5NA..*_ga_CW55HF8NVT*MTY5NzA0Nzg5OC41LjEuMTY5NzA1MDg2NS40MC4wLjA.",
  },
  createdAt: {
    type: Date,
    default: Date.now, // Set the default value to the current date and time
  },
});

const User = mongoose.models.UserDB || mongoose.model("UserDB", userSchema);

export default User;
