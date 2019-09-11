/* Monthly payment amount */

/* Params */
// numberOfPayments:Number
// interestRate:Number
// totalPrice:Number

/* Return */
// monthlyPayment:Number

function amount(){
    var monthlyPayment = document.getElementById('monathlyPaymentInput').value;
    var numberOfPayments=document.getElementById('numberOfPayments').value;
    var interestRate=document.getElementById('interestRate').value;
    var totalPrice=0;
   
     return totalPrice=monthlyPayment*numberOfPayments+(monthlyPayment*numberOfPayments*interestRate)
}