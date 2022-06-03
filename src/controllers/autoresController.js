import autores from './../models/Autor.js';

class AutorController {

  static listarAutores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    })
  }

  static obterAutorPorId = (req, res) => {
    const id = req.params.id;

    autores.findById(id, (err, autor) => {
      if(!err) {
        res.status(200).json(autor);

      } else {
        res.status(400).send({message: `${err.message} - ID do Autor não localizado`})
      }
    })
  }

  static cadastrarAutor = (req, res) => {
    let sutor = new autores(req.body);

    sutor.save(err => {
      if(err) {
        res.status(500).send({message: `${err.message} - Falha ao cadastrar Autor.`})
      } else {
        res.status(201).send(sutor.toJSON());
      }
    })
  }

  static atualizarAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Autor atualizado com sucesso!'});

      } else {
        res.status(500).send({message: `${err.message} - Erro ao atualizar o Autor`});
      }
    })
  }

  static excluirAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (err) => {
      if(!err) {
        res.status(200).send({message: 'Autor excluido com sucesso'});

      } else {
        res.status(500).send({message: `${err.message}`});
      }
    })
  }

}

export default AutorController;