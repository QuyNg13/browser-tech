// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".checkboxes fieldset:not(:first-of-type)").forEach(fieldset => {
//         fieldset.style.display = "none";
//     });
// });

function toggleDivVisibility() {
    const radioButtons = document.querySelectorAll('input[type="radio"][name^="more"]');

    radioButtons.forEach(radio => {
        const radioName = radio.name;
        const dataName = `[data-name="name${radioName.replace('more', '')}"]`;

        const targetDiv = document.querySelector(dataName);

        radio.addEventListener('change', () => {
            const isChecked = document.querySelector(`input[name="${radioName}"]:checked`);

            if (isChecked && isChecked.value === 'ja') {
                targetDiv.style.display = 'flex';
                targetDiv.style.flexDirection = 'column';
                targetDiv.querySelectorAll('input:not(.notrequired)').forEach(input => input.setAttribute('required', 'true'));
            } else {
                targetDiv.style.display = 'none';
                targetDiv.querySelectorAll('input').forEach(input => input.removeAttribute('required'));
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[data-name^="name"]').forEach(div => {
        div.style.display = 'none';
    });

    toggleDivVisibility();
    verkrijgerknop();
    hideverkrijger();

});

function hideverkrijger(){
    document.getElementById('nojs').style.display = 'none';
}

function verkrijgerknop(){
    const verkrijgerContainer = document.querySelector('[data-name="nameverkrijger"] > div');
    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.textContent = "Voeg verkrijger toe";
    addButton.onclick = verkrijgertoevoegen;
    verkrijgerContainer.appendChild(addButton);
}

let verkrijgerTeller = 1;

function verkrijgertoevoegen() {
    verkrijgerTeller++;

    const formContainer = document.querySelector('[data-name="nameverkrijger"]');

    const newForm = document.createElement("div");
    newForm.classList.add("verkrijger")
    newForm.innerHTML = `
        <fieldset class="columnlabel">
            <h4>Gegevens verkrijger ${verkrijgerTeller}</h4>
            <div class="threecolumns">
                <label for="voorletter${verkrijgerTeller}">voorletter(s)*
                    <input type="text" id="voorletter${verkrijgerTeller}" name="voorletters${verkrijgerTeller}" required>
                </label>
                <label for="tussenvoegsel${verkrijgerTeller}">tussenvoegsel(s)
                    <input class="notrequired" type="text" id="tussenvoegsel${verkrijgerTeller}" name="tussenvoegsel${verkrijgerTeller}">
                </label>
                <label for="achternaam${verkrijgerTeller}">achternaam*
                    <input type="text" id="achternaam${verkrijgerTeller}" name="achternaam${verkrijgerTeller}" required>
                </label>
                <label for="Burgerservicenummer${verkrijgerTeller}">Burgerservicenummer verkrijger*
                    <input type="text" id="Burgerservicenummer${verkrijgerTeller}" name="Burgerservicenummer${verkrijgerTeller}" minlength="8"
                        maxlength="9" pattern="[0-9]+" required>
                </label>
            </div>
        </fieldset>
        <fieldset>
            <p>Krijgt deze verkrijger waarvoor u geen aangifte doet het hele vermogen?</p>
            <label>
                <input type="radio" name="gehelevermogen${verkrijgerTeller}" value="ja" required>Ja
            </label>
            <label>
                <input type="radio" name="gehelevermogen${verkrijgerTeller}" value="nee">Nee
            </label>
        </fieldset>
        <fieldset>
            <p>Doet deze verkrijger een beroep op diens legitieme portie (wettelijke erfdeel)?</p>
            <label>
                <input type="radio" name="legitiemeportie${verkrijgerTeller}" value="ja" required>Ja
            </label>
            <label>
                <input type="radio" name="legitiemeportie${verkrijgerTeller}" value="nee">Nee
            </label>
        </fieldset>
        <button type="button" onclick="verkrijgertoevoegen()">verkrijger toevoegen</button>
        <button type="button" onclick="verkrijgerVerwijderen()">laatste verkrijger verwijderen</button>`;

    formContainer.appendChild(newForm);
}

function verkrijgerVerwijderen() {
    const formContainer = document.querySelector('[data-name="nameverkrijger"]');
    const verkrijgers = formContainer.querySelectorAll(".verkrijger");

    if (verkrijgers.length > 0) {
        formContainer.removeChild(verkrijgers[verkrijgers.length - 1]);
        verkrijgerTeller--;
    }
}

// function toggleDivVisibility() {
//     const partnerRadioButtons = document.querySelectorAll('input[name="morepartner"]');
//     const partnerschapsvoorwaardenRadioButtons = document.querySelectorAll('input[name="morepartnerschapsvoorwaarden"]');

//     const partnerDiv = document.querySelector('[data-name="namepartner"]');
//     const partnerschapsvoorwaardenDiv = document.querySelector('[data-name="namepartnerschapsvoorwaarden"]');

//     partnerRadioButtons.forEach(radio => {
//         radio.addEventListener('change', () => {
//             if (document.querySelector('input[name="morepartner"]:checked').value === 'ja') {
//                 partnerDiv.style.display = 'flex';
//                 partnerDiv.style.flexDirection = 'column';
//                 partnerDiv.querySelectorAll('input').forEach(input => input.setAttribute('required', 'true'));
//             } else {
//                 partnerDiv.style.display = 'none';
//                 partnerDiv.querySelectorAll('input').forEach(input => input.removeAttribute('required'));
//             }
//         });
//     });

//     partnerschapsvoorwaardenRadioButtons.forEach(radio => {
//         radio.addEventListener('change', () => {
//             if (document.querySelector('input[name="morepartnerschapsvoorwaarden"]:checked').value === 'ja') {
//                 partnerschapsvoorwaardenDiv.style.display = 'flex';
//                 partnerschapsvoorwaardenDiv.style.flexDirection = 'column';
//                 partnerschapsvoorwaardenDiv.querySelectorAll('input').forEach(input => input.setAttribute('required', 'true'));
//             } else {
//                 partnerschapsvoorwaardenDiv.style.display = 'none';
//                 partnerschapsvoorwaardenDiv.querySelectorAll('input').forEach(input => input.removeAttribute('required'));
//             }
//         });
//     });
// }

// document.addEventListener('DOMContentLoaded', toggleDivVisibility);

// document.querySelectorAll('.checkboxes > fieldset:first-of-type input').forEach(radio => {
//     radio.addEventListener('change', () => {
//         const value = document.querySelector('.checkboxes fieldset:first-of-type input:checked').value;

//         document.querySelectorAll('.checkboxes fieldset:not(:first-of-type)').forEach(fieldset => {
//             fieldset.querySelectorAll('input').forEach(input => input.removeAttribute('required'));

//             switch (value) {
//                 case 'ja':
//                     fieldset.style.display = 'flex';
//                     fieldset.style.flexDirection = 'column';
//                     fieldset.disabled = false;
//                     fieldset.querySelectorAll('input').forEach(input => input.setAttribute('required', 'true'));
//                     break;

//                 case 'nee':
//                     fieldset.style.display = 'none';
//                     break;
//             }
//         });
//     });
// });

// document.querySelectorAll('.checkboxes >fieldset:first-of-type input').forEach(radio => {
//     radio.addEventListener('change', () => {
//         const ja = document.querySelector('.checkboxes fieldset:first-of-type input:checked').value === 'ja';
//         document.querySelectorAll('.checkboxes fieldset:not(:first-of-type)').forEach(fieldset => {
//             fieldset.style.display = ja ? 'flex' : 'none';
//             fieldset.style.flexDirection = 'column';
//             fieldset.disabled = !ja;
//             fieldset.querySelectorAll('input').forEach(input => input.toggleAttribute('required', ja));
//         });
//     });
// });

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
