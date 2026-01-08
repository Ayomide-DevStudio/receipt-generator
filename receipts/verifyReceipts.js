import StorageConfig from "../config/storage.config.js";
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("verifyForm");
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        const receiptId = document.getElementById("receipt-id").value.trim()
        // const receipts = StorageConfig.getReceipt();
        // const found = receipts.found(r => r.id === receiptId);
                // Get all receipts (make sure to use the same key you saved receipts under)
        const receipts = StorageConfig.getReceipt("receipts") || []; // <-- add key and default to []

        // Use .find instead of .found
        const found = receipts.find(r => r.id === receiptId || r.receiptNumber === receiptId);
        const result = document.getElementById("verify-result");
        if (found){
            result.innerHTML = `
             <p class="text-center mt-6 text-green-600" >Receipt is valid </p><br>
            <div class="receipt-card">
                <p><strong>Receipt No:</strong> ${found.id}</p>
                <p><strong>Date:</strong> ${new Date(found.date).toLocaleDateString()}</p>
                <p><strong>Issued By:</strong> ${found.businessName}</p>
                <p><strong>Recipient:</strong> ${found.customerName}</p>
                <p class="text-xl"><strong>Purpose:</strong> ${found.purpose}</p>
                <hr class="my-6 border-gray-400">
                <p class="text-3xl font-bold text-primary mt-8 text-center">₦ ${found.amount}</p>
                <p class="text-center mt-6 text-gray-600">Payment of ${toText(found.amount)} Naira was received.</p>
            </div>
            `
        } else{
            result.innerHTML = `<p class="text-center mt-6 text-red-600" >Receipt not found!</p>`
        }
    })
})