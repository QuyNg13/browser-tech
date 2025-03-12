document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".checkboxes fieldset:not(:first-of-type)").forEach(fieldset => {
        fieldset.style.display = "none";
    });
});

document.querySelectorAll('.checkboxes fieldset:first-of-type input').forEach(function (radio) {
    radio.addEventListener('change', function () {
        const fieldsets = document.querySelectorAll('.checkboxes fieldset:nth-of-type(2),.checkboxes fieldset:nth-of-type(3)');
        const ja = (document.querySelector('.checkboxes fieldset:first-of-type input:checked').value === 'ja');
        fieldsets.forEach(function (fieldset) {
            if (ja) {
                fieldset.style.display = 'flex';
                fieldset.style.flexDirection = 'column';  
            } else {
                fieldset.style.display = 'none';
            }
            fieldset.disabled = !ja;
            fieldset.querySelectorAll('input').forEach(function (input) {
                if (ja) {
                    input.setAttribute('required', 'required');
                } else {
                    input.removeAttribute('required');
                }
            });
        });
    });
});
