import express from "express";
import { getAllStudents, getStudentById } from "../controller/studentsCtlr.js";

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", getStudentById);

export default router;
