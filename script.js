document.querySelectorAll('input[name="partner?"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        const fieldsets = document.querySelectorAll('.checkboxes fieldset:nth-of-type(2),.checkboxes fieldset:nth-of-type(3)');
        fieldsets.forEach(function(fieldset) {
            if (document.querySelector('input[name="partner?"]:checked').value === 'nee') {
                fieldset.disabled = true;
            } else {
                fieldset.disabled = false;
            }
        });
    });
});
