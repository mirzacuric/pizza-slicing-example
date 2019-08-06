import PizzaService from '../services/PizzaService';

export default class PizzaController {
  
  slice(req, res) {
    const { points } = req.body;
    // Remove the first element that indicates size of matrix
    if(points[0].length === 1) { points.shift(); }
    const pizzaService = new PizzaService(points);
    pizzaService.slice()
      .then(result => res.status(200).json(result))
      .catch(err => res.status(400).json(new Error(err)));
  }
}