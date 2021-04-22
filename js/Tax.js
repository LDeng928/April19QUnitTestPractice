export default class Tax {
  calculate(income, taxPaid) {
    let onTax;
    let fedTax;
    let totalTaxAmount;
    let remainingTax;

    switch (true) {
      case 0 <= income && income < 40922:
        onTax = income * 0.0505;
        totalTaxAmount += onTax;
        remainingTax = totalTaxAmount - taxPaid;
        break;
      case income < 81847:
        onTax = income * 0.0915;
        totalTaxAmount += onTax;
        remainingTax = totalTaxAmount - taxPaid;
        break;
      case income < 150000:
        onTax = income * 0.1116;
        totalTaxAmount += onTax;
        remainingTax = totalTaxAmount - taxPaid;
        break;
      case income < 220000:
        onTax = income * 0.1216;
        totalTaxAmount += onTax;
        remainingTax = totalTaxAmount - taxPaid;
        break;
      case income > 220000:
        onTax = income * 0.1316;
        totalTaxAmount += onTax;
        remainingTax = totalTaxAmount - taxPaid;
        break;
      case 0 <= income && income < 45282:
        fedTax = income * 0.15;
        totalTaxAmount += fedTax;
        remainingTax = totalTaxAmount - taxPaid;
        break;
      case income < 90563:
        fedTax = income * 0.205;
        totalTaxAmount += fedTax;
        remainingTax = totalTaxAmount - taxPaid;
        break;
      case income < 140388:
        fedTax = income * 0.26;
        totalTaxAmount += fedTax;
        remainingTax = totalTaxAmount - taxPaid;
        break;
      case income < 200000:
        fedTax = income * 0.29;
        totalTaxAmount += fedTax;
        remainingTax = totalTaxAmount - taxPaid;
        break;
      case income > 200000:
        fedTax = income * 0.33;
        totalTaxAmount += fedTax;
        remainingTax = totalTaxAmount - taxPaid;
        break;
    }
    return remainingTax.toFixed(2);
  }
}
