import { expect } from 'chai';
import {
  reduceInputArr,
  convertDMSToDegree,
  calculateCircleAreaSlice
} from '../../src/utils/commonFunctions';

const mockInputArr = [
    [20, 6, 60, 0, 0],
    [20, 6, 59, 59, 59],
    [30, 20, 33, 30, 0],
    [40, 200, 120, 0, 0],
    [20, 3, 60, 0, 0]
];

describe('Convert DMS to degree', () => {
  it('should return zero', () => {
    expect(convertDMSToDegree(0, 0, 0)).to.equal(0);
  });

  it('should return decimal degrees', () => {
    expect(convertDMSToDegree(59, 59, 59)).to.equal(59.999722222222225);
  });
});

describe('Reduce array as object with properties radius, angle and people', () => {
  it('should return reduced array of objects', () => {
    expect(reduceInputArr(mockInputArr))
      .to.deep.equal([
        { radius: 20, people: 6, angle: 60 },
        { radius: 20, people: 6, angle: 59.999722222222225 },
        { radius: 30, people: 20, angle: 33.5 },
        { radius: 40, people: 200, angle: 120 },
        { radius: 20, people: 3, angle: 60 },
    ]);
  });
});

describe('Calculate circle slice area', () => {
  it('should return slice area result', () => {
    expect(calculateCircleAreaSlice(60, 20))
      .to.equal(209.43951);
  });

  it('should return slice area result with decimal angle value', () => {
    expect(calculateCircleAreaSlice(33.5, 30))
      .to.equal(263.108385);
  });
});