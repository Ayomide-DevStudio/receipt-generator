document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('receipt-form');
    const purposeSelect = document.getElementById('purpose');
    const customPurposeContainer = document.getElementById('custom-purpose-container');
    const customPurposeInput = document.getElementById('custom-purpose');
    const themeToggle = document.getElementById('theme-toggle');

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }

                  // Show/hide custom purpose field
                purposeSelect.addEventListener('change', () => {
                    if (purposeSelect.value === 'Other') {
                        customPurposeContainer.classList.remove('hidden');
                        customPurposeInput.required = true;
                    } else {
                        customPurposeContainer.classList.add('hidden');
                        customPurposeInput.required = false;
                    }
                });

   
});