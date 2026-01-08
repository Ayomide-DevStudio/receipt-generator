import StorageConfig from "../config/storage.config.js";

document.getElementById("clear").addEventListener("click", () => {

  if (!confirm("Clear all receipts?")) return;

  StorageConfig.backupReceipt(); // 🔥 backup first
  StorageConfig.clearReceipt();

  alert("Receipts cleared. You can undo.");
  location.reload();
});
