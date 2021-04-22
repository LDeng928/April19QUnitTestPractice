export default class Tax {
  calculate(income, taxPaid) {
    let onTax;
    let fedTax;
    let totalTaxAmount;
    let remainingTax;
    let aTax = [];

    if (income < 0) {
      onTax = 0;
    } else if (income >= 0 && income <= 40922) {
      onTax = income * 0.0505;
    } else if (income > 40922 && income <= 81847) {
      onTax = (income - 40922) * 0.0915 + 2067;
    } else if (income > 81847 && income <= 150000) {
      onTax = (income - 81847) * 0.1116 + 5811;
    } else if (income > 150000 && income <= 220000) {
      onTax = (income - 150000) * 0.1216 + 13417;
    } else if (income > 220000) {
      onTax = (income - 220000) * 0.1316 + 21929;
    }

    if (income < 0) {
      fedTax = 0;
    } else if (income >= 0 && income <= 45282) {
      fedTax = income * 0.15;
    } else if (income > 45282 && income <= 90563) {
      fedTax = (income - 45282) * 0.205 + 6792;
    } else if (income > 90563 && income <= 140388) {
      fedTax = (income - 90563) * 0.26 + 16075;
    } else if (income > 140388 && income <= 200000) {
      fedTax = (income - 140388) * 0.29 + 29029;
    } else if (income > 200000) {
      fedTax = (income - 200000) * 0.33 + 46317;
    }

    totalTaxAmount = onTax + fedTax;
    remainingTax = totalTaxAmount - taxPaid;

    // put the outcomes into aTax array
    aTax.push(onTax.toFixed(2));
    aTax.push(fedTax.toFixed(2));
    aTax.push(totalTaxAmount.toFixed(2));
    aTax.push(remainingTax.toFixed(2));

    return aTax;
  }
}
