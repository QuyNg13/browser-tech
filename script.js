document.querySelectorAll('.checkboxes fieldset:first-of-type input').forEach(function (radio) {
    radio.addEventListener('change', function () {
        const fieldsets = document.querySelectorAll('.checkboxes fieldset:nth-of-type(2),.checkboxes fieldset:nth-of-type(3)');
        const nee = (document.querySelector('.checkboxes fieldset:first-of-type input:checked').value === 'nee');
        fieldsets.forEach(function (fieldset) {
            if (nee) {
                fieldset.style.display = 'none';
            } else {
                fieldset.style.display = 'flex';
                fieldset.style.flexDirection = 'column';
            }
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
