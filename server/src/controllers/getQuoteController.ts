// getQuoteController.ts
import { Request, Response } from 'express';

const getQuoteController = (req: Request, res: Response): void => {
res.send('Hello from getQuoteController')
};

export default getQuoteController;
