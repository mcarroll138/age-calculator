import AgeCalculator from '../src/age-calculator.js';

describe('AgeCalculator', () => {

  test('should correctly determine the earth age of a person based on their input', () => {
    const ageCalculator = new AgeCalculator(40);
    expect(ageCalculator.earthAge).toEqual(40);
  });
  test('should correctly determine the age of a person in mercury years', () => {
    const ageCalculator = new AgeCalculator(40);
    const mercuryYears = ageCalculator.earthAge / ageCalculator.mercuryYears;
    expect(mercuryYears).toBeCloseTo(166.67);
  });
  test('should correctly determine the age of a person in venus years', () => {
    const ageCalculator = new AgeCalculator(40);
    expect(ageCalculator.getAgeVenus()).toEqual(40 / .62);
  });
  test('should correctly determine the age of a person in mars years', () => {
    const ageCalculator = new AgeCalculator(40);
    expect(ageCalculator.getAgeMars()).toEqual(40 / 1.88);
  });
  test('should correctly determine the age of a person in jupiter years', () => {
    const ageCalculator = new AgeCalculator(40);
    expect(ageCalculator.getAgeJupiter()).toEqual(40 / 11.86);
  });
  test('should correctly determine the difference between the age of a person and their privious birthday in earth years', () => {
    const ageCalculator = new AgeCalculator(40, 20);
    expect(ageCalculator.yearDiffernce()).toEqual(20);
  });
  test('should correctly determine the difference between the age of a person and their future birthday in earth years', () => {
    const ageCalculator = new AgeCalculator(40, 50);
    expect(ageCalculator.yearDiffernce()).toEqual(10);
  });
  // calculate how many years have passed
  // calculate how many years have yet to pass
});