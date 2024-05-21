const expressAsyncHandler = require("express-async-handler");

module.exports = currentUser = expressAsyncHandler(async (req, account) => {
  if (req.user) {
    return await account.findById(req.user.id).exec();
  }
});
