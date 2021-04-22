import "https://code.jquery.com/jquery-1.12.1.min.js";
import Tax from "./Tax.js";

$(document).ready(() => {
  $("#calculate").click((event) => {
    event.preventDefault();

    const nTaxableIncome = $("#taxableIncome").val();
    const nTaxDeducted = $("#taxDeducted").val();
    const oTax = new Tax();

    $("#ontarioTax").html(oTax.calculate(nTaxableIncome, nTaxDeducted)[0]);
    $("#federalTax").html(oTax.calculate(nTaxableIncome, nTaxDeducted)[1]);
    $("#totalTax").html(oTax.calculate(nTaxableIncome, nTaxDeducted)[2]);
    $("#taxOwing").html(oTax.calculate(nTaxableIncome, nTaxDeducted)[3]);
  });
});

// import Hst from "./Hst.js";
// import "https://code.jquery.com/jquery-1.12.1.min.js";

// $(document).ready(()=>{
//     $("#calculate").click((evt)=>{
//         evt.preventDefault();
//         const nAmount = $("#price").val();
//         const oHst = new Hst();
//         $("#amount").html(nAmount);
//         $("#hst").html(oHst.calculate(nAmount, "ON"));
//     })
// });

// import Kilogram from "./Kilogram.js";
// import "https://code.jquery.com/jquery-1.12.1.min.js";

// $(document).ready(() => {
//   $("#calculate").click((event) => {
//     event.preventDefault();
//     const nKilogram = $("#kilogram").val();
//     const sProvince = $("#provinces").val();
//     const oKilogram = new Kilogram();

//     $("#kg").html(nKilogram);
//     $("#pro").html(sProvince);
//     $("#totalPrice").html(oKilogram.calculate(nKilogram, sProvince));
//   });
// });
