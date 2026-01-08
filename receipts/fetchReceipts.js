import StorageConfig from "../config/storage.config.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("result-list");
    if (!container) return;

    fetchReceiptHistory(); // ✅ LOAD ON PAGE OPEN

    function fetchReceiptHistory() {

      const receipts = StorageConfig.getReceipt("receipts") || [];
      console.log(receipts);


        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            if (key.startsWith("receipt_")) {
                const receipt = StorageConfig.getReceipt(key);
                if (receipt) receipts.push(receipt);
            }
        }

        if (receipts.length === 0) {
            container.innerHTML = `
                <p class='text-sm sm:text-base md:text-lg text-red-600 dark:text-red-400 font-medium px-4 py-2 rounded-md text-center w-full max-w-md mx-auto mt-4'>
                    No receipts found!
                </p>`;
            return;
        }

        receipts.sort((a, b) => new Date(b.date) - new Date(a.date));

        container.innerHTML = receipts.map(r => `
            <div class="receipt-card bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
                <p><strong>Receipt No:</strong> ${r.id || r.receiptNumber || 'N/A'}</p>
                <p><strong>Date:</strong> ${new Date(r.date).toLocaleDateString('en-GB')}</p>
                <p><strong>Issued By:</strong> ${r.businessName}</p>
                <p><strong>Recipient:</strong> ${r.customerName}</p>
                <p class="text-xl"><strong>Purpose:</strong> ${r.purpose}</p>
                <hr class="my-6 border-gray-400">
                <p class="text-3xl font-bold text-primary mt-8 text-center">
                    ₦ ${Number(r.amount).toLocaleString()}
                </p>
                <p class="text-center mt-6 text-gray-600">
                    Payment of ${toText(r.amount)} Naira was received. Thank you!
                </p>
            </div>
        `).join("");
    }
});
