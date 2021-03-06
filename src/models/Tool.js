const mongoose = require('mongoose');

const ToolSchema = new mongoose.Schema({
  title: String,
  link: String,
  description: String,
  tags: [String],
});

module.exports = mongoose.model('Tool', ToolSchema);