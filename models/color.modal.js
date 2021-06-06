const mongoose = require('mongoose')

const ColorSchema = new mongoose.Schema(
  {
    colorName: {
      type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isDelete: {
        type: Boolean,
        default: false,
    }
  },
  { timestamps: true, strict: false }
)

const Color = mongoose.model('Color', ColorSchema)
module.exports = Color
