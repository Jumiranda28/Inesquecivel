const jwt = require("jsonwebtoken");

// Middleware -> Autenticação
export function authMiddleware(request, response, next) {
    //capturando o token da requisição
    const authMiddleware = request.headers.authorization;


}