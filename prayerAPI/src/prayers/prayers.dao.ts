import { OkPacket } from "mysql";
import { execute } from '../services/mysql.connector';
import { Prayer } from "./prayers.model";
import { prayerQueries } from './prayer.queries';

export const readPrayers = async () => {
  return execute<Prayer[]>(prayerQueries.readPrayers, []);  
}

export const readPrayersById = async (postID: number) => {
  return execute<Prayer[]>(prayerQueries.readPrayersById, [postID]);
}

export const readPrayersByUserId = async (userID:number) => {
  return execute<Prayer[]>(prayerQueries.readPrayersByUserId, [userID]);
}

export const pray = async (postID:number) => {
  return execute<OkPacket>(prayerQueries.pray, [postID]);
}

export const createPrayer = async (prayer:Prayer) => {
  return execute<OkPacket>(prayerQueries.createPrayer, [prayer.userID, prayer.content, 0, prayer.parent_post]);
}

export const updatePrayer = async (prayer:Prayer) => {
  return execute<OkPacket>(prayerQueries.updatePrayer, [prayer.content, prayer.postID]);
}

export const deletePrayer = async (postID:Number) => {
  return execute<OkPacket>(prayerQueries.deletePrayer, [postID]);
}