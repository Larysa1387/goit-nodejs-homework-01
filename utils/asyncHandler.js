const colors = require("colors");

const asyncHandler = fn => {
  return Promise.resolve(fn).catch(error => console.log(error.message.orange));
};

module.exports = asyncHandler;
