document.querySelectorAll('input[name="partner?"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        const fieldsets = document.querySelectorAll('form:nth-of-type(2) fieldset:nth-of-type(2),form:nth-of-type(2) fieldset:nth-of-type(3)');
        fieldsets.forEach(function(fieldset) {
            if (document.querySelector('input[name="partner?"]:checked').value === 'nee') {
                fieldset.hidden = true;
                fieldset.disabled = true;
            } else {
                fieldset.hidden = false;
                fieldset.disabled = false;
            }
        });
    });
});
