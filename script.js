document.querySelectorAll('input[name="partner?"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        const fieldsets = document.querySelectorAll('.checkboxes fieldset:nth-of-type(2),.checkboxes fieldset:nth-of-type(3)');
        fieldsets.forEach(function(fieldset) {
            const nee = (document.querySelector('.checkboxes fieldset:first-of-type input:checked').value === 'nee');
            fieldset.disabled = nee;
            fieldset.querySelectorAll('input').forEach(function (input) {
                if (nee) {
                    input.removeAttribute('required');
                } else {
                    input.setAttribute('required', 'required');
                }
            });
        });
    });
});
