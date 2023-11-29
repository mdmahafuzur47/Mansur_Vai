import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

// parser
app.use(express.json());
app.use(cors());

// startup route
const controllerFunc = (req: Request,res: Response) => {
    res.send("Server is Runing.");
}

app.get("/",controllerFunc);


export default app;
