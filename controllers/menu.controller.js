const { MenuStore } = require("../stores")

class MenuController {
  get = async (req, res) => {
    res.send('Hello get Called')
  }

  getAll = async (req, res) => {
    const response = await MenuStore.getAll()
    const data = {
      data: response
    }
    res.send(data)
  }

  create = async (req, res) => {
    const createObject = req.body
    const response = await MenuStore.create(createObject)
    const data = {
      data: response
    }
    res.send(data)
  }

  update = async (req, res) => {
    const updateObject = req.body
    const { menuId } = req.params

    const response = await MenuStore.udpate(menuId, updateObject)
    const data = {
      data: response
    }
    res.send(data)
  }

  delete = async (req, res) => {
    res.send('Hello Delete Called')
  }
}

module.exports = new MenuController()