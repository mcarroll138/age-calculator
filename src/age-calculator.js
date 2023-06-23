export default class AgeCalculator {
  constructor(currentAge) {
    this.earthAge = currentAge;
    this.mercuryYears = .24;
    this.venusYears = .62;
    this.marsYears = 1.88;
    this.jupiterYears = 0;
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
}