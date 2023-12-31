const Usuario = require('../models/Usuario')

module.exports = class UsuarioController {

  static async allUsuarios(req, res) {
    const usuarios = await Usuario.findAll({ raw: true })
    res.render('usuarios/listarusuarios', { usuarios })
  }

  static async updateUsuario(req, res) {
    const id = req.params.id
    const usuario = await Usuario.findOne({ where: { id: id }, raw: true })
    res.render('usuarios/edit',{usuario})

  }

  //update Usuario
  static async updateUsuarioSave(req, res) {
    const id = req.body.id
    const usuario = {
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password
    }
    await Usuario.update(usuario, { where: { id: id } })
      .then(res.redirect('/usuarios/allUsuarios'))
      .catch((err) => {
        console.log(err)
      })
  }

  static async removeUsuario(req, res) {
    const id = req.body.id
    await Usuario.destroy({ where: { id: id } })
      .then(res.redirect('/usuarios/allUsuarios'))
      .catch((err) => {
        console.log(err)
      })
  }


}
