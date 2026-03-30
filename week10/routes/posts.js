const express = require("express");
const router = express.Router();
const controller = require("../controllers/postsController");

const apiKeyAuth = require("../middleware/apiKeyAuth");
const validatePost = require("../middleware/validatePost");

router.get("/", controller.getAllPosts);
router.get("/:id", controller.getPostById);

router.post("/", apiKeyAuth, validatePost, controller.createPost);

router.patch("/:id", apiKeyAuth, controller.updatePost);

router.delete("/:id", apiKeyAuth, controller.deletePost);

module.exports = router;
