import express from 'express';
import bookController from '../controllers/book-controller.js';

const routes = express.Router();
routes.get('/books', bookController.getItems);
routes.get('/books/:id', bookController.getItemById);
routes.post('/books', bookController.postItem);
routes.put('/books/:id', bookController.putItemById);
routes.delete('/books/:id', bookController.deleteItemById);

export default routes;