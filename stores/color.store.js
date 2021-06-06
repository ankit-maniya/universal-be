const { Color } = require('../models/index.js')

class ColorStore {
  async getAll() {
    try {
      const response = await Color.find()

      return response
    } catch (exception) {
      throw new Error('Error on get Color!')
    }
  }

  async create(objectToCreate) {
    try {
      const response = await Color.create(objectToCreate)

      return response
    } catch (exception) {
      console.log('exception : ', exception);
      throw new Error('Error on create Color!')
    }
  }

  async udpate(colorId, objectToUpdate) {
    try {
      const response = await Color.findByIdAndUpdate({ _id: colorId }, { $set: { ...objectToUpdate } }, { new: true })

      return response
    } catch (exception) {
      throw new Error('Error on update Color!')
    }
  }

  async delete(colorId) {
    try {
      const response = await Color.remove({ _id: colorId })

      return response
    } catch (exception) {
      throw new Error('Error on delete Color!')
    }
  }
}

module.exports = new ColorStore()