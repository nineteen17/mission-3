import { Request, Response } from 'express';

const carValueController = (req: Request, res: Response) => {
    res.send('Hello from carValueController!');
}

export default carValueController;
