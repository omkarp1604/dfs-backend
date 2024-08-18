import express from "express";
import {
  fetch,
  create,
  deleteEmployee,
  update,
} from "../controllers/employeeController.js";

const employeeRoute = express.Router();

employeeRoute.post("/create", create);
employeeRoute.get("/getAllEmployee", fetch);
employeeRoute.put("/update/:id", update);
employeeRoute.delete("/delete/:id", deleteEmployee);
export default employeeRoute;
