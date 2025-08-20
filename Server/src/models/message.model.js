import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  senderId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat"
  },
  content: {
    type: String,
    required: true
  },
  isRead: {
    type: Boolean,
    default: false
  }
},{timestamps: true});

export const Message = mongoose.model("Message", MessageSchema);