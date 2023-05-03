import express from "express";
import morgan from 'morgan';


export function expressConfig(app) {

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))
}

