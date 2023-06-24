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
    const venusYears = ageCalculator.earthAge / ageCalculator.venusYears;
    expect(venusYears).toBeCloseTo(64.52);
  });
  test('should correctly determine the age of a person in mars years', () => {
    const ageCalculator = new AgeCalculator(40);
    const marsYears = ageCalculator.earthAge / ageCalculator.marsYears;
    expect(marsYears).toBeCloseTo(21.28);
  });
  test('should correctly determine the age of a person in jupiter years', () => {
    const ageCalculator = new AgeCalculator(40);
    const jupiterYears = ageCalculator.earthAge / ageCalculator.jupiterYears;
    expect(jupiterYears).toBeCloseTo(3.37);
  });
  test('should correctly determine the difference between the age of a person and their privious and/or future birthday in earth years', () => {
    const ageCalculator = new AgeCalculator(40, 20);
    const yearDiff = ageCalculator.earthAge - ageCalculator.yearInquiry;
    expect(Math.abs(yearDiff)).toEqual(20);
  });
});