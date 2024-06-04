const currentUser = require("../currentUser");
const Message = require("../models/message");
const Account = require("../models/userCredential");
const asyncHandler = require("express-async-handler");

module.exports = {
  createMessage: asyncHandler(async (req, res, next) => {
    if (req.user) {
      const sessionUser = await currentUser(req, Account);
      const newMessage = new Message({
        account: sessionUser,
        message: req.body.textbox,
      });

      await newMessage.save();
    }
  }),
  deleteMessage: "",
};
