import express from 'express';
import authorController from '../controllers/author-controller.js';

const routes = express.Router();
routes.get('/authors', authorController.getItems);
routes.get('/authors/:id', authorController.getItemById);
routes.post('/authors', authorController.postItem);
routes.put('/authors/:id', authorController.putItemById);
routes.delete('/authors/:id', authorController.deleteItemById);

export default routes;