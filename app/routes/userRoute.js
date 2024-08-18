import express from "express";
import {
  fetch,
  create,
  update,
  deleteCustomer,
} from "../controllers/customerController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAllCustomers", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteCustomer);
export default route;
