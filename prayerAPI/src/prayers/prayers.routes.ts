import express, { Router } from "express";
import * as PrayersController from "./prayers.controller";

// | GET | localhost/api/prayers/userID | get all prayers from user
// | GET | localhost/api/prayers/id | get prayer from id
// | POST | localhost/api/prayers | post a prayer
// | POST | localhost/api/prayers/id | reply to a prayer by id
// | DELETE | localhost/api/prayers/id | delete prayer

// read prayers
const router = Router();
router
    .route('/prayers')
    .get(PrayersController.readPrayers);

// mark prayed
router
    .route('/pray/:postID')
    .put(PrayersController.pray);

// create prayer
router
    .route('/prayers')
    .post(PrayersController.createPrayer);

// update prayer
router
    .route('/prayers')
    .put(PrayersController.updatePrayer);

// delete prayer
router
    .route('/prayers/:postID')
    .delete(PrayersController.deletePrayer);
export default router;