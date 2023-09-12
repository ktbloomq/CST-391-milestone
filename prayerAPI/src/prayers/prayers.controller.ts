import { Request, RequestHandler, Response } from "express";
import * as PrayerDao from './prayers.dao'
import { OkPacket } from "mysql";

export const readPrayers: RequestHandler = async (req: Request, res: Response) => {
    try {
        let prayers;
        let postID = parseInt(req.query.postID as string);
        let userID = parseInt(req.query.userID as string);

        // console.log('postID ', postID);
        // console.log('userID', userID);
        if(Number.isInteger(postID)) {
            prayers = await PrayerDao.readPrayersById(postID);
        } else  if(Number.isInteger(userID)) {
            prayers = await PrayerDao.readPrayersByUserId(userID);
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

export const pray: RequestHandler = async (req:Request, res:Response) => {
    try {
        let postID = parseInt(req.params.postID as string);
        if(!Number.isNaN(postID)) {
            const okPacket: OkPacket = await PrayerDao.pray(postID);

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
    {id: 1, userID: 1, content: 'test1', prayers: 1, parentPost: null},
    {id: 2, userID: 2, content: 'test2', prayers: 2, parentPost: null},
    {id: 3, userID: 3, content: 'test3', prayers: 3, parentPost: null},
    {id: 4, userID: 4, content: 'test4', prayers: 4, parentPost: null},
];

export const getPrayers = ( req: Request, res: Response) => {
    res.send(PRAYERS);
};
*/