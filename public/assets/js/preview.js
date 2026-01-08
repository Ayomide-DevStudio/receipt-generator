    function loadReceipt() {
            const params = new URLSearchParams(window.location.search);
            data = JSON.parse(params.get('data'));
            

                //to change it to text
              const amountTexted = toText(data.amount);


            document.getElementById('receipt-content').innerHTML = `
                <p><strong>Receipt No:</strong> ${data.receiptNumber}</p>
                <p><strong>Date:</strong> ${new Date(data.date).toLocaleDateString()}</p>
                <p><strong>Issued By:</strong> ${data.businessName}</p>
                <p><strong>Recipient:</strong> ${data.customerName}</p>
                <p class="text-xl"><strong>Purpose:</strong> ${data.purpose}</p>
                <hr class="my-6 border-gray-400">
                <p class="text-3xl font-bold text-primary mt-8 text-center">₦ ${data.amount}</p>
                <p class="text-center mt-6 text-gray-600">Payment of ${toText(data.amount)} Naira received. Thank you!</p>
            `;
        }

        // Enable buttons once libraries are loaded
        function enableDownloadButtons() {
            document.getElementById('downloadPdf').disabled = false;
            document.getElementById('downloadImage').disabled = false;
            document.getElementById('loading-msg').style.display = 'none';
        }

        // Wait for both libraries to load
        const checkLibs = setInterval(() => {
            if (window.html2pdf && window.html2canvas) {
                clearInterval(checkLibs);
                enableDownloadButtons();
                setupDownloadHandlers();
            }
        }, 200);

        function setupDownloadHandlers() {
            // Save as PDF
            document.getElementById('downloadPdf').addEventListener('click', () => {
                const element = document.querySelector('.max-w-2xl');

                const opt = {
                    margin: 0.5,
                    filename: `Receipt_${data.receiptNumber || 'Unknown'}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                };

                html2pdf().set(opt).from(element).save();
            });

            // Save as Image
            document.getElementById('downloadImage').addEventListener('click', () => {
                const element = document.querySelector('.max-w-2xl');
                const bgColor = document.documentElement.classList.contains('dark') ? '#1f2937' : '#ffffff';

                html2canvas(element, { scale: 2, backgroundColor: bgColor }).then((canvas) => {
                    const link = document.createElement('a');
                    link.download = `Receipt_${data.receiptNumber || 'Unknown'}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                });
            });
        }