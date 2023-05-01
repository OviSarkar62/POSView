const mongoose = require("mongoose");

const billSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, "Customer name is required"],
    },
    customerNumber: {
      type: String,
      required: [true, "Customer number is required"],
    },
    subTotal:{
      type: Number,
      required: [true, "SubTotal amount is required"],
    },
    totalAmount: {
      type: Number,
      required: [true, "Total amount is required"],
    },
    tax: {
      type: Number,
      required: [true, "Tax is required"],
    },
    paymentMode: {
      type: String,
      required: [true, "Payment mode is required"],
    },
    cartItems: {
      type: Array,
      required: [true, "Cart items are required"],
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
);

const Bills = mongoose.model("bills", billSchema);

module.exports = Bills;
