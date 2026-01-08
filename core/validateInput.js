document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('receipt-form');


            form.addEventListener('submit', function(e){
            e.preventDefault();

                

            const businessName = document.getElementById('business-name').value.trim();
            const customerName = document.getElementById('customer-name').value.trim();
            const customPurposeInput = document.getElementById('custom-purpose').value.trim();
            const amount = document.getElementById('amount').value.trim();
            const errMsg = document.getElementById('errorMsg');
            const purposeSelect = document.getElementById('purpose');

            errMsg.textContent = '';

            //check if  true

            if (businessName === ''){
                errMsg.textContent = 'Your business name is required!';
                return;
            }

            if (customerName === ''){
                errMsg.textContent = 'Customer name is required!';
                return;
            }
            
            if (/[^a-zA-Z]/.test(businessName)){
                errMsg.textContent = 'Can only contain letters, spaces, hyphens, and apostrophes!'
            }

            if (/[^a-zA-Z]/.test(customerName)){
                errMsg.textContent = 'Can only contain letters, spaces, hyphens, and apostrophes!'
            }
             
            if (amount === '' || isNaN(amount) || Number(amount) <= 0){
                errMsg.textContent = 'Invalid amount!';
                return;
            }
             if (Number(amount) <= 49){
                errMsg.textContent = 'Least amount is ₦50';
                return;
            }
          

                        // Set today's date by default
                document.getElementById('date').valueAsDate = new Date();

                // Form submission - opens preview in new tab
                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const finalPurpose = purposeSelect.value === 'Other' 
                        ? customPurposeInput.value.trim() 
                        : purposeSelect.value;

                    if (purposeSelect.value === 'Other' && !finalPurpose) {
                        alert('Please enter a custom purpose.');
                        return;
                    }

                    const data = {
                        businessName: document.getElementById('business-name').value,
                        receiptNumber: document.getElementById('receipt-number').value,
                        date: document.getElementById('date').value,
                        customerName: document.getElementById('customer-name').value,
                        purpose: finalPurpose,
                        amount: parseFloat(document.getElementById('amount').value).toFixed(2)
                    };

                    const queryString = new URLSearchParams({ data: JSON.stringify(data) }).toString();
                    window.open(`preview.html?${queryString}`, '_blank');
                });
        });

})



