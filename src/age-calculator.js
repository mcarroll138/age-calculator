export default class AgeCalculator {
  constructor(currentAge, yearInquiry) {
    this.earthAge = currentAge;
    this.yearInquiry = yearInquiry;
    this.mercuryYears = .24;
    this.venusYears = .62;
    this.marsYears = 1.88;
    this.jupiterYears = 11.86;
  }

  getAgeAll() {
    const mercuryYears = this.earthAge / this.mercuryYears;
    const venusYears = this.earthAge / this.venusYears;
    const marsYears = this.earthAge / this.marsYears;
    const jupiterYears = this.earthAge / this.jupiterYears;
    return {
      mercuryYears: mercuryYears.toFixed(2),
      venusYears: venusYears.toFixed(2),
      marsYears: marsYears.toFixed(2),
      jupiterYears: jupiterYears.toFixed(2),
    }
  }

  yearDiffernce() {
    const earthAge = this.earthAge;
    const yearInquiry = this.yearInquiry;
    const yearDiff = earthAge - yearInquiry;
    return Math.abs(yearDiff);
  };
}


