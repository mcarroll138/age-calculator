import AgeCalculator from '../src/age-calculator.js';

describe('AgeCalculator', () => {

  test('should correctly determine the age of a person based on the location of a planet', () => {
    const ageCalculator = new AgeCalculator();
    expect(ageCalculator.earthAge).toEqual(40);
  });
});