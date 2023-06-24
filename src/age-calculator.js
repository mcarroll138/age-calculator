default class AgeCalculator {
  constructor(currentAge, yearInquiry) {
    this.earthAge = currentAge;
    this.yearInquiry = yearInquiry;
    this.mercuryYears = .24;
    this.venusYears = .62;
    this.marsYears = 1.88;
    this.jupiterYears = 11.86;
  }

  getAgeAll() {
    const mercuryYears = this.mercuryYears * this.earthAge;
    const venusYears = this.venusYears * this.earthAge;
    const marsYears = this.marsYears * this.earthAge;
    const jupiterYears = this.jupiterYears * this.earthAge;
    console.log((mercuryYears).toFixed(2));
    console.log((venusYears).toFixed(2));
    console.log((marsYears).toFixed(2));
    console.log((jupiterYears).toFixed(2));
  }

  yearDiffernce() {
    const earthAge = this.earthAge;
    const yearInquiry = this.yearInquiry;
    const yearDiff = earthAge - yearInquiry;
    return Math.abs(yearDiff);
  }
}