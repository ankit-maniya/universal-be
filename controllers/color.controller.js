const { ColorStore } = require("../stores")

class ColorController {
  get = async (req, res) => {
    res.send('Hello get Called')
  }

  getAll = async (req, res) => {
    const response = await ColorStore.getAll()
    const data = {
      data: response
    }
    res.send(data)
  }

  create = async (req, res) => {
    const createObject = req.body
    const response = await ColorStore.create(createObject)
    const data = {
      data: response
    }
    res.send(data)
  }

  update = async (req, res) => {
    const updateObject = req.body
    const { colorId } = req.params

    const response = await ColorStore.udpate(colorId, updateObject)
    const data = {
      data: response
    }
    res.send(data)
  }

  delete = async (req, res) => {
    res.send('Hello Delete Called')
  }
}

module.exports = new ColorController()