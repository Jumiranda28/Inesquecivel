const { Router } = require("express")
const userController = require("../controller/userController");

const router = Router();

router.post("/usuario", (request, response) => {
    userController.create(request, response)
});
router.get("/usuario", (request, response) => {
    userController.findAll(request, response)
});
router.put("/usuario/:id", (request, response) => {
    userController.update(request, response)
});
router.delete("/usuario/:id", (request, response) => {
    userController.delete(request, response)
});
router.get("/usuario/:id", (request, response) => {
    userController.findById(request, response)
});
module.exports = router;   