import { Request, RequestHandler, Response } from "express";
import * as PrayerDao from './prayers.dao'
import { OkPacket } from "mysql";

export const readPrayers: RequestHandler = async (req: Request, res: Response) => {
    try {
        let prayers;
        let postId = parseInt(req.query.postId as string);
        let userId = parseInt(req.query.userId as string);

        // console.log('prayerId ', postId);
        // console.log('userId', userId);
        if(Number.isInteger(postId)) {
            prayers = await PrayerDao.readPrayersById(postId);
        } else  if(Number.isInteger(userId)) {
            prayers = await PrayerDao.readPrayersByUserId(userId);
        } else {
            prayers = await PrayerDao.readPrayers();
        }

        res.status(200).json(prayers);
    } catch (error) {
        console.error('[prayers.controller][readPrayers][Error] ', error);
        res.status(500).json({
            message: 'There was an error fetching the posts'
        });
    }
};

export const createPrayer: RequestHandler = async (req:Request, res: Response) => {
    try {
        // console.log('req.body', req.body);

        const okPacket: OkPacket = await PrayerDao.createPrayer(req.body);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[prayers.controller][createPrayer][Error] ', error);
        res.status(500).json({
            message: 'There was an error creating prayer'
        });
    }
};

export const updatePrayer: RequestHandler = async (req:Request, res: Response) => {
    try {
        // console.log('req.body', req.body);

        const okPacket: OkPacket = await PrayerDao.updatePrayer(req.body);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[prayers.controller][updatePrayer][Error] ', error);
        res.status(500).json({
            message: 'There was an error updating prayer'
        });
    }
};

export const deletePrayer: RequestHandler = async (req:Request, res:Response) => {
    try {
        let postID = parseInt(req.params.postID as string);

        console.log('postID', postID);
        if(!Number.isNaN(postID)) {
            const okPacket: OkPacket = await PrayerDao.deletePrayer(postID);

            res.status(200).json(okPacket);
        } else {
            throw new Error('Integer expected for postID');
        }
    } catch(error) {
        console.error('[prayer.controller][deletePrayer][Error] ', error);
        res.status(500).json({
            message: 'There was an error deleting prayers'
        });
    }
}

/*
const PRAYERS = [
    {id: 1, userId: 1, content: 'test1', prayers: 1, parentPost: null},
    {id: 2, userId: 2, content: 'test2', prayers: 2, parentPost: null},
    {id: 3, userId: 3, content: 'test3', prayers: 3, parentPost: null},
    {id: 4, userId: 4, content: 'test4', prayers: 4, parentPost: null},
];

export const getPrayers = ( req: Request, res: Response) => {
    res.send(PRAYERS);
};
*/