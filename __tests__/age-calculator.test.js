import AgeCalculator from '../src/age-calculator.js';

describe('AgeCalculator', () => {

  test('should correctly determine the earth age of a person based on their input', () => {
    const ageCalculator = new AgeCalculator(40);
    expect(ageCalculator.earthAge).toEqual(40);
  });
  test('should correctly determine the age of a person in mercury years', () => {
    const ageCalculator = new AgeCalculator(40);
    expect(ageCalculator.mercuryYears).toEqual(40 / .24);
  });

});