const User = require("../model/user");
 const bcrypt = require("bcryptjs"); // Importando o bcrypt para criptografar a senha


const userController = {
    create: async (request, response) => {
        try {
            const { nome, email, senha } = request.body;

            // Para tela de login
            if (!email || !senha) {
                return response.status(400).json({
                    msg: "Campos Invalidos"
                });
            }

            if (!nome || !email || !senha) {
                return response.status(400).json({
                    msg: "Campos incompleto"
                });
            }

            // Senha criptografada 
            const hasehedSenha = await bcrypt.hash(senha, 10);
 
            // Salvar a senha criptografada no banco de dados
            const userCriado = await User.create({ nome, email, senha: hasehedSenha });
 
            return response.status(201).json({
                msg:" o usuario foi crido com sucesso",
                userCriado
            })
             
        } catch (error) {
            console.log(error)
            return response.status(500).json({
                msg: " Ocorreu um erro ao acessar a API"
            })
        }
    },
    update: async (request, response) => {
        try {
            const { id } = request.params;
            const { nome, email, senha } = request.body;
 
            if(!nome || !email || !senha) {
                return response.status(400).json({
                    msg: "Campos incompleto"
                });
            }
 
            const userExiste = await User.findByPk(id);
            if(!userExiste) {
                return response.status(400).json({
                    msg: "usuario não encontrado"
                });
            }
 
            await User.update({
                nome, email, senha
            }, {
                where: {
                    id: id
                }
            });
        } catch (error) {
            return response.status(500).json({
                msg: " Ocorreu um erro ao acessar a API"
            })
        }
     },
    // Listar todos os usuarios
    findAll: async (request, response) => {
        try {
            const user = await User.findAll()
 
            return response.status(201).json(user)
        } catch (erro) {
            return response.status(500).json({
                msg: " Ocorreu um erro interno ao buscar todos os usuarios"
            })
        }
    },
    delete: async (request, response) => {
        try {
            const { id } = request.params;
            const existeUser = await User.findByPk(id)
     
 
            if (!existeUser) {
                return response.status(400).json({
                    msg: "Usuario não foi encontrado"
                })
            }
            await User.destroy({
                where: {
                    id: id
                }
            })
            return response.status(200).json({
                msg: " o usuario foi deletado com sucesso"
            })
 
        } catch (erro) {
            return response.status(500).json({
                msg: " Ocorreu um erro interno ao deletar o usuario"
            })
        }
    },
    findById: async (request, response) => {
        try {
           
            const { id } = request.params;
 
            const userEncontrado = await User.findByPk(id);
 
            if (!existeUser) {
             
                return response.status(204).json({
                    msg: "usuario não foi encontrado"
                })
            }
            return response.status(200).json(userEncontrado)
             
        } catch (error) {
            return response.status(500).json({
                msg: " Ocorreu um erro interno ao deletar o usuario"
            })
        }
    }
}
 
module.exports = userController;