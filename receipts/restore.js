import StorageConfig from "../config/storage.config.js";


document.getElementById("restore").addEventListener("click", () => {

  const restored = StorageConfig.restoreReceipt();

  if (!restored) {
    alert("No backup found");
    return;
  }

  alert("Receipt history restored successfully");
  location.reload();
});
