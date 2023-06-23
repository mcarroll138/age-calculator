import AgeCalculator from '../src/age-calculator.js';

describe('AgeCalculator', () => {

  test('should correctly determine the earth age of a person based on their input', () => {
    const ageCalculator = new AgeCalculator(40);
    expect(ageCalculator.earthAge).toEqual(40);
  });
  test('should correctly determine the age of a person in mercury years', () => {
    const ageCalculator = new AgeCalculator(40);
    expect(ageCalculator.getAgeMecury()).toEqual(40 / .24);
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
});