// riskRatingController.ts
import { Request, Response } from 'express';

const riskRatingController = (req: Request, res: Response): void => { 
    res.send('Hello from riskRatingController!');

};

export default riskRatingController;
