const colors = require("colors");

// const asyncHandler = fn => {
//   return Promise.resolve(fn).catch(error => console.log(error.message.orange));
// };

const asyncHandler = async fn => {
  try {
    const result = await fn;
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = asyncHandler;
