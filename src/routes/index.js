import express from 'express';
import cors from 'cors';
import bookRoutes from './book-routes.js';
import authorRoutes from './author-routes.js';

const routes = (app) => {
    app.use(cors());
    app.route('/').get((req, res) => res.status(200).send('Curso de NodeJS'));
    app.use(express.json(), bookRoutes, authorRoutes);
};

export default routes;