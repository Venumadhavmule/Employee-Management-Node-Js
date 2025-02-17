const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    default: null,
  },
  city: {
    type: String,
    default: '',
  },
});
module.exports = mongoose.model('Employee', employeeSchema);