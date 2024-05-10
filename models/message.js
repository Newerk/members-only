const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  account: { type: Schema.Types.ObjectId, ref: "Account", req: true }, //links to whoever owns the messages added to the website
  message: { type: String, req: true },
  timestamp: { type: Date, default: Date.now },
});

messageSchema.virtual("username", () => {
  return this.account.username;
});

module.exports = mongoose.model("Message", messageSchema);
