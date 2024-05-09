const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userCredSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  account: { type: Schema.Types.ObjectId, ref: "Account" }, //stores all the roles and messages a user may have
});

userCredSchema.virtual("fullname", () => {
  return `${this.firstname} ${this.lastname}`;
});

const userCredential = mongoose.model("Credential", userCredSchema);
