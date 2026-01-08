import StorageConfig from "../config/storage.config.js";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("deleteForm");
    const result = document.getElementById("delete-result");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        //get receipt ID
        const receiptID =  document.getElementById("delete-id").value.trim();

        if (!receiptID) {
            result.textContent = "Please enter a receipt number!";
            return;
        }

        //delete the receipt danu
        const deleted = StorageConfig.deleteOneReceipt(receiptID);

        if (deleted){
            result.innerHTML = `<p class="text-green-600 font-medium"> Receipt deleted successfully</p>`;
        }else{
            result.innerHTML =`<p class="text-red-600 font-medium">Receipt not found!</p>`;
        }

    });



});


