import editoras from './../models/Editora.js';

class EditoraController {

  static listarEditoras = (req, res) => {
    editoras.find((err, editoras) => {
      if(!err) {
        res.status(200).send(editoras);
      }
    })
  }

  static buscarEditoraPorId = (req, res) => {
    const id = req.params.id;

    editoras.findById(id, (err, editora) => {
      if(!err) {
        res.status(200).send(editora);

      } else {
        res.status(400).send({message: `${err.message} - ID da editora não localizado`});
      }
    })
  }

  static cadastrarEditora = (req, res) => {
    const editora = new editoras(req.body);

    editora.save(err => {
      if(!err) {
        res.status(201).send(editora.toJSON());

      } else {
        res.status(500).send({message: `${err.message} - Erro ao cadastrar editora!`})
      }
    })
  }

  static atualizarEditora = (req, res) => {
    const id = req.params.id;

    editoras.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Editora atualizada com sucesso'});

      } else {
        res.status(500).send({message: `${err.message} - Erro ao atualizar a editora!`})
      }
    })
  }

  static excluirEditora = (req, res) => {
    const id = req.params.id;

    editoras.findByIdAndDelete(id, (err) => {
      if(!err) {
        res.status(200).send({message: 'Editora excluida com sucesso'});
        
      } else {
        res.status(500).send({message: `${err.message} - Erro ao excluir editora!`})
      }
    })
  }

}

export default EditoraController;