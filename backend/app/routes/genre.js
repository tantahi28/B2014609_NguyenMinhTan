const express = require("express")
const genresController = require("../controllers/genres.controller")
const authMiddleware = require("../middlewares/auth.middleware")
const isAdminMiddleware = require("../middlewares/isAdmin.middleware")

const router = express.Router()

router
  .route("/")
    .get(genresController.getAll)

router
  .route("/:id")
    .get(genresController.getOne)

router.use(authMiddleware)
router.use(isAdminMiddleware)

router
  .route("/")
    .post(genresController.createOne)

router
  .route("/:id")
    .put(genresController.updateOne)
    .delete(genresController.deleteOne)

module.exports = router
