const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userCredentialSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  isMember: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
});

userCredentialSchema.virtual("fullname", () => {
  return `${this.firstname} ${this.lastname}`;
});

userCredentialSchema.virtual("url", () => {
  return `/account/${this._id}`;
});

module.exports = mongoose.model("Account", userCredentialSchema);
