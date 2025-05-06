const jwt = require("jsonwebtoken");

// Middleware -> Autenticação
export function authMiddleware(request, response, next) {
    //capturando o token da requisição
    const authMiddleware = request.headers.authorization;

    if (!authMiddleware|| !authMiddleware.startsWith("Bearer ")) {
        return response.status(401).json({
            msg: "Token não encontrado"
        });
    }
    
    const [bearer, token] = authMiddleware.split(" ");

}