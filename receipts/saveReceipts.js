import StorageConfig from "../config/storage.config.js";
 export function saveReceipt(receipt){
    //const receipts = StorageConfig.getReceipts();
    // Get existing receipts (you'll need to decide on a key)
    let receipts = StorageConfig.getReceipt("receipts") || [];

    // If it's not an array yet, make it one
    if (!Array.isArray(receipts)) receipts = [];

    receipts.push(receipt);
   //  StorageConfig.saveReceipt(receipts);
     StorageConfig.saveReceipt("receipts", receipts);
      console.log("Receipt saved:", receipt);
    console.log("All receipts:", receipts);
 }