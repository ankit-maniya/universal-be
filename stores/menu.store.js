const { Menu } = require('../models/index.js')

class MenuStore {
  async getAll() {
    try {
      const response = await Menu.find()

      return response
    } catch (exception) {
      throw new Error('Error on get Menu!')
    }
  }

  async create(objectToCreate) {
    try {
      const response = await Menu.create(objectToCreate)

      return response
    } catch (exception) {
      console.log('exception : ', exception);
      throw new Error('Error on create Menu!')
    }
  }

  async udpate(menuId, objectToUpdate) {
    try {
      const response = await Menu.findByIdAndUpdate({ _id: menuId }, { $set: { ...objectToUpdate } }, { new: true })

      return response
    } catch (exception) {
      throw new Error('Error on update Menu!')
    }
  }

  async delete(menuId) {
    try {
      const response = await Menu.remove({ _id: menuId })

      return response
    } catch (exception) {
      throw new Error('Error on delete Menu!')
    }
  }
}

module.exports = new MenuStore()