import express, { Application, Request, Response } from 'express';
import connect_mongodb from './configs/database/mongodb';
import config from './configs/env';
import routes from './routes/router';
const app: Application = express();
const port: number = +(config.port as string) || 3000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Main api route, read the documentation'
    })
});


app.use('/api', routes)
connect_mongodb()
app.listen(port, (): void => {
    console.log(`Server started at http://localhost:${port}`);

})