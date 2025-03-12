document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".checkboxes fieldset:not(:first-of-type)").forEach(fieldset => {
        fieldset.style.display = "none";
    });
});

// document.querySelectorAll('.checkboxes fieldset:first-of-type input').forEach(function (radio) {
//     radio.addEventListener('change', function () {
//         const fieldsets = document.querySelectorAll('.checkboxes fieldset:nth-of-type(2),.checkboxes fieldset:nth-of-type(3)');
//         const ja = (document.querySelector('.checkboxes fieldset:first-of-type input:checked').value === 'ja');
//         fieldsets.forEach(function (fieldset) {
//             if (ja) {
//                 fieldset.style.display = 'flex';
//                 fieldset.style.flexDirection = 'column';  
//             } else {
//                 fieldset.style.display = 'none';
//             }
//             fieldset.disabled = !ja;
//             fieldset.querySelectorAll('input').forEach(function (input) {
//                 if (ja) {
//                     input.setAttribute('required', 'required');
//                 } else {
//                     input.removeAttribute('required');
//                 }
//             });
//         });
//     });
// });

document.querySelectorAll('.checkboxes fieldset:first-of-type input').forEach(radio => {
    radio.addEventListener('change', () => {
        const ja = document.querySelector('.checkboxes fieldset:first-of-type input:checked').value === 'ja';
        document.querySelectorAll('.checkboxes fieldset:not(:first-of-type)').forEach(fieldset => {
            fieldset.style.display = ja ? 'flex' : 'none';
            fieldset.style.flexDirection = 'column';
            fieldset.disabled = !ja;
            fieldset.querySelectorAll('input').forEach(input => input.toggleAttribute('required', ja));
        });
    });
});


// =======================================================================================

let savedData = {};
let autocompletedData;

const inputs = document.getElementsByTagName("input");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    if (window.sessionStorage) {
        if (!form) {
            return;
        }

        if (!form.dataset.formTopic) {
            return;
        }

        let getFormTopic = sessionStorage.getItem(form.dataset.formTopic);
        if (!getFormTopic) {
            return;
        }
        autocompletedData = JSON.parse(getFormTopic);

        var formTopic = form.dataset.formTopic;
        console.log(formTopic);

        function getKeyValue() {
            for (const dataKey in autocompletedData) {
                let value = autocompletedData[dataKey];

                let formField = document.querySelector(
                    "[name = " + dataKey + "]"
                );

                switch (formField.type) {
                    case "radio":
                        formField = document.querySelector(
                            `input[name = '${dataKey}'][value = '${value}']`
                        );
                        formField.setAttribute("checked", "checked");
                        break;
                    case "checkbox":
                        formField.setAttribute("checked", "checked");
                        break;
                    case "file":
                        break;
                    default:
                        formField.value = value;
                }
            }
        }

        getKeyValue();
    }
});

if (window.sessionStorage) {
    function saveFormDataToSessionStorage(e) {
        const form = e.target.closest("form");
        let submitData = new FormData(form);

        for (let [dataKey, value] of submitData.entries()) {
            savedData[dataKey] = value;
            console.log(dataKey, value);
        }

        window.sessionStorage.setItem(
            form.dataset.formTopic,
            JSON.stringify(savedData)
        );
    }

    Array.prototype.forEach.call(inputs, function (input) {
        switch (input.type) {
        }

        input.addEventListener("blur", function (e) {
            e.preventDefault();

            saveFormDataToSessionStorage(e);
        });
    });
}
