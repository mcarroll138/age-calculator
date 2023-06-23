export default class AgeCalculator {
  constructor(currentAge, yearInquiry) {
    this.earthAge = currentAge;
    this.yearInquiry = yearInquiry;
    this.mercuryYears = .24;
    this.venusYears = .62;
    this.marsYears = 1.88;
    this.jupiterYears = 11.86;
  }
  getAgeMecury() {
    const earthAge = this.earthAge;
    const mercuryYears = this.mercuryYears;
    return earthAge / mercuryYears;
  }

  getAgeVenus() {
    const earthAge = this.earthAge;
    const venusYears = this.venusYears;
    return earthAge / venusYears;
  }

  getAgeMars() {
    const earthAge = this.earthAge;
    const marsYears = this.marsYears;
    return earthAge / marsYears;
  }

  getAgeJupiter() {
    const earthAge = this.earthAge;
    const jupiterYears = this.jupiterYears;
    return earthAge / jupiterYears;
  }

  yearDiffernce() {
    const earthAge = this.earthAge;
    const yearInquiry = this.yearInquiry;
    const yearDiff = earthAge - yearInquiry;
    return Math.abs(yearDiff);
  }
}