import {
  reduceInputArr,
  calculateCircleAreaSlice
} from '../utils/commonFunctions';

export default class PizzaService {
  constructor(matrix) {
    this.sourceArr = reduceInputArr(matrix); 
  }

  slice() {
    return new Promise((resolve, reject) => {
      const result = [];
      this.sourceArr.map(item => {

        // Angle should be decided up on number of people and angle of cutting
        const angle = ((item.people - 1) * item.angle) >= 360 ?
          item.angle
          : 360 - (item.angle * (item.people - 1));
        
        result.push(calculateCircleAreaSlice(angle, item.radius));
      });
      resolve(result);
    });
  }
}