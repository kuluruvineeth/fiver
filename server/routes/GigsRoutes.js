import multer from "multer";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { Router } from "express";
import {
  addGig,
  editGig,
  getGigsData,
  getUserAuthGigs,
  searchGigs,
} from "../controllers/GigsController.js";

export const gigsRoutes = Router();
const upload = multer({ dest: "uploads/" });

gigsRoutes.post("/add", verifyToken, upload.array("images"), addGig);
gigsRoutes.get("/get-user-gigs", verifyToken, getUserAuthGigs);
gigsRoutes.get("/get-gig-data/:gigid", getGigsData);
gigsRoutes.put(
  "/edit-gig/:gigid",
  verifyToken,
  upload.array("images"),
  editGig
);
gigsRoutes.get("/search-gigs", searchGigs);
