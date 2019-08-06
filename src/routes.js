import { Router } from 'express';
import Joi from 'joi';
import payloadValidator from './middlewares/payloadValidator';
import PizzaController from './controllers/PizzaController';

const pizzaController = new PizzaController();

const schemas = {
  points: Joi.array().items(
    Joi.array().items(Joi.number().min(0))
  ).min(2).max(1000)
}

const router = Router();

export default [
  router.post(
    '/pizza/slice',
    payloadValidator(schemas.points, 'points'),
    pizzaController.slice
  )
]