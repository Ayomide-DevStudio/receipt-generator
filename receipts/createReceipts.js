// import {saveReceipt} from "./saveReceipts.js";
// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("receipt-form");
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//     })
//     const receipt = {
//         id : getElementById('receipt-number').value.trim(),
//         businessName : getElementById('business-name').value.trim(),
//         customerNmae : getElementById('customer-name').value.trim(),
//         purpose : getElementById('receipt-number').value.trim(),
//         amount : getElementById('amount'),
//         date :newDate().toISOString()
//     }
//     saveReceipt(receipt);
//     alert("Receipt created successfully");
//     form.reset();
// });

import { saveReceipt } from "./saveReceipts.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("receipt-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page refresh

        // Get values correctly
        const receiptNumber = document.getElementById('receipt-number').value.trim();
        const businessName = document.getElementById('business-name').value.trim();
        const customerName = document.getElementById('customer-name').value.trim();
        const amount = parseFloat(document.getElementById('amount').value); // Convert to number
        const purposeSelect = document.getElementById('purpose');
        const customPurpose = document.getElementById('custom-purpose')?.value.trim() || '';

        // Determine final purpose (handles "Other" option)
        const purpose = purposeSelect.value === 'Other' ? customPurpose : purposeSelect.value;

        // Create receipt object
        const receipt = {
            id: receiptNumber,
            businessName: businessName,
            customerName: customerName,  // Fixed typo
            purpose: purpose,            // Correct field
            amount: amount,              // Now a number
            date: new Date().toISOString()  // Fixed: new Date()
        };

        // Save it
        saveReceipt(receipt);

        // Feedback and reset
        alert("Receipt saved!");
        //form.reset();
    });
});