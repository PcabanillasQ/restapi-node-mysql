import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";
const router = Router();

router.get("/employes", getEmployees);

router.get("/employes/:id", getEmployeeById);

router.post("/employes", createEmployee);

router.patch("/employes/:id", updateEmployee);

router.delete("/employes/:id", deleteEmployee);

export default router;
