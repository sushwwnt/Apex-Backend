// entry file for express
// express related logic


import { Express } from "express";

export function createApp(){

    const app = express()

    app.use(express.json())



}