import express from "express";
import { getImage, uploadImage } from "../controller/image-controller.js";
import upload from '../middleware/multer.js'
const router = express.Router();

router.post("/upload",upload.single("file"), uploadImage);
router.get('/file/:id',getImage)

export default router;
