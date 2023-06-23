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
    let earthAge = this.earthAge;
    let mercuryYears = this.mercuryYears;
    return earthAge / mercuryYears;
  }

  getAgeVenus() {
    let earthAge = this.earthAge;
    let venusYears = this.venusYears;
    return earthAge / venusYears;
  }

  getAgeMars() {
    let earthAge = this.earthAge;
    let marsYears = this.marsYears;
    return earthAge / marsYears;
  }

  getAgeJupiter() {
    let earthAge = this.earthAge;
    let jupiterYears = this.jupiterYears;
    return earthAge / jupiterYears;
  }

  yearDiffernce() {
    const earthAge = this.earthAge;
    const yearInquiry = this.yearInquiry;
    let yearDiff = earthAge - yearInquiry;
    return Math.abs(yearDiff);
  }
}