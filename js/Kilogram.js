export default class Kilogram {
  calculate(weight, province) {
    let remainingWeight;
    let TotalPrice;
    let firstTierPrice;
    switch (province) {
      case "ON":
        remainingWeight = Math.ceil(weight - 0.75);
        firstTierPrice = 23.19;
        TotalPrice = remainingWeight * 0.8 + firstTierPrice;
        break;
      case "AB":
        remainingWeight = Math.ceil(weight - 0.75);
        firstTierPrice = 53.32;
        TotalPrice = remainingWeight * 5 + firstTierPrice;
        break;
      case "SK":
        remainingWeight = Math.ceil(weight - 0.75);
        firstTierPrice = 45.44;
        TotalPrice = remainingWeight * 4.5 + firstTierPrice;
        break;
      case "MB":
        remainingWeight = Math.ceil(weight - 0.75);
        firstTierPrice = 34.26;
        TotalPrice = remainingWeight * 3.5 + firstTierPrice;
        break;
      case "QC":
        remainingWeight = Math.ceil(weight - 0.75);
        firstTierPrice = 28.37;
        TotalPrice = remainingWeight * 1.5 + firstTierPrice;
        break;
      case "NS":
        remainingWeight = Math.ceil(weight - 0.75);
        firstTierPrice = 34.26;
        TotalPrice = remainingWeight * 3.5 + firstTierPrice;
        break;
      case "PE":
        remainingWeight = Math.ceil(weight - 0.75);
        firstTierPrice = 44.11;
        TotalPrice = remainingWeight * 3.1 + firstTierPrice;
        break;
    }
    return TotalPrice.toFixed(2);
  }
}
