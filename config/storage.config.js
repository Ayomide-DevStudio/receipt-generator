const StorageConfig = {

  saveReceipt(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  getReceipt(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },

  deleteReceipt(key) {
    localStorage.removeItem(key);
  },

  clearAll() {
    localStorage.clear();
  },

  /* =====================
     BACKUP / RESTORE
  ===================== */

  backupReceipt() {
    const receipts = this.getReceipt("receipts") || [];
    localStorage.setItem("receipts_backup", JSON.stringify(receipts));
  },

  restoreReceipt() {
    const backup = localStorage.getItem("receipts_backup");
    if (!backup) return false;

    localStorage.setItem("receipts", backup);
    localStorage.removeItem("receipts_backup");
    return true;
  },

  clearReceipt() {
    localStorage.removeItem("receipts");
  },

  /* =====================
     CLEAR SINGLE RECEIPT
  ===================== */

  deleteOneReceipt(receiptId) {
    const receipts = this.getReceipt("receipts") || [];

    const updated = receipts.filter(
      r => r.id !== receiptId 
    );

    this.saveReceipt("receipts", updated);

    return receipts.length !== updated.length;
  }
};

export default StorageConfig;
