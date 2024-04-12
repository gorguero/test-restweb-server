import express from 'express';
import path from 'path';




export class Server{

    private app = express();

    constructor(){}


    async start(){

    /* MIDDLEWARES */


    /* PUBLIC FOLDER */
    this.app.use( express.static('public') );

    /* SPA */
    this.app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + '../../public/index.html');
        res.sendFile(indexPath);
    })

    this.app.listen(3000, () => {
        console.log(`Server running on port ${3000}`);
    });

    }

}






