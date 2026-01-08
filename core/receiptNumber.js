// const min = 0;
// const max = 9;
// const text = new Date();


// function generate(min, max){
//  return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const receiptNumber = '' + generate(0,9) + generate(0,9) + generate(0,9) + generate(0,9) + -text;
// document.getElementById('receipt-number').value = receiptNumber;
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateID(length){
    let result = '';
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
     return result;

}

document.getElementById('receipt-number').value = generateID(8);