import express from "express";
import { getFeedPost, getUserPosts, likedPost } from "../controllers/post.js";
import { verifiedToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/", verifiedToken, getFeedPost);
router.get("/:userId/posts", verifiedToken, getUserPosts);

// UPDATE
router.patch("/:id/like", verifiedToken, likedPost);

export default router;
