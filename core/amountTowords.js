// function toText(num) {
//     const ones = ['', 'One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
//     const teens = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
//     const tens = ['', '', 'Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];

//     if (num === 0) return 'Zero';
//     if (num < 10) return ones[num];
//     if (num < 20) return teens[num - 10];

//     if (num < 100)
//         return tens[Math.floor(num / 10)] +
//                (num % 10 !== 0 ? ' ' + ones[num % 10] : '');

//     if (num < 1000)
//         return ones[Math.floor(num / 100)] + ' Hundred' +
//                (num % 100 !== 0 ? ' ' + 'And' + '<br>' + toText(num % 100) : '');

//     if (num < 10000)
//         return ones[Math.floor(num / 1000)] + ' Thousand' +
//                (num % 1000 !== 0 ? ' ' + toText(num % 1000) : '');

//     if (num < 100000)
//         return ones[Math.floor(num / 100000)] + ' And' +
//                (num % 10000 !== 0 ? ' ' + 'Thousand' + '<br>' + toText(num % 100) : '');



// }

function toText(num){
    if (num === 0) return 'Zero'; 

    const ones = ['', 'One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
    const teens = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
    const tens = ['', '', 'Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];

    function helper(n){
        let result = '';
        if (n >= 1000000000){
            result += helper(Math.floor(n/1000000000)) + 'Billion';
            n %= 1000000000
        }
        if (n >= 1000000){
            result += helper(Math.floor(n/1000000)) + 'Million' + ' ';
            n %= 1000000
        }
        if (n >= 1000){
            result += helper(Math.floor(n/1000)) + 'Thousand';
            n %= 1000
        }
        if (n >= 100){
            result += ones[Math.floor(n/100)] + 'Hundred';
            n %= 100
        }
        if (n >= 20){
            result += tens[Math.floor(n/10)] + '';
            n %= 10;
        } else if (n >= 10){
            result += teens[n - 10] + '';
            return result;
        }
        if (n > 0) {
            result += ones[n] + '';
        }
        return result.trim();
    }
        return helper(num);
}