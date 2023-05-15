import { Router } from "express";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import {
  confirmOrder,
  createOrder,
  getBuyerOrders,
  getSellerOrders,
} from "../controllers/OrderControllers.js";

export const ordersRoutes = Router();

ordersRoutes.post("/create", verifyToken, createOrder);
ordersRoutes.put("/success", verifyToken, confirmOrder);
ordersRoutes.get("/get-buyer-orders", verifyToken, getBuyerOrders);
ordersRoutes.get("/get-seller-orders", verifyToken, getSellerOrders);
