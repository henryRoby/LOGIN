var notes = require('../Controleur/controle');


module.exports.route =function (app) {

app.route('/login')
  .post(notes.PosteLogin)

  app.route('/')
  .post(notes.GetLogin)
  

  // app.route('/prof')
  // .post(notes.PosteProf)
  // .get(notes.GetProf)
  

  // app.route('/eleveProf/:id')
  // .get(notes.findOne)
}
