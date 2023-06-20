const mongoose = require("mongoose");
const schema = mongoose.Schema;

const cartSchema = new schema({
  productId: {
    type: String,
    required: true,
  },
  userId:{
    type:String,
    required:true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  size: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("cart", cartSchema);
