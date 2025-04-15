const { Router } = require("express")
const userController = require("../controller/userController");
 
const router = Router();
 
router.post("/usuario", (request, response) => {
    userController.create(request, response)
});
 
module.exports = router;   