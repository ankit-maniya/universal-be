const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema(
  {
    menuName: {
      type: String,
    },
    iconName: {
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

const Menu = mongoose.model('Menu', MenuSchema)
module.exports = Menu
