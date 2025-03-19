// functies aan zetten en onzichtbaar maken als javascript het doet
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[data-name^="name"]').forEach(div => {
        div.style.display = 'none';
    });

    toggleDivVisibility();
    verkrijgerknop();
    hideverkrijger();

});

// div zichtbaar op basis van radio value
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

// onzichtbaar maken als javascript het doet
function hideverkrijger(){
    document.getElementById('nojs').style.display = 'none';
}

// knop aanmaken als javascript het doet
function verkrijgerknop(){
    const verkrijgerContainer = document.querySelector('[data-name="nameverkrijger"] > div');
    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.textContent = "Voeg verkrijger toe";
    addButton.onclick = verkrijgertoevoegen;
    addButton.classList.add("btn");
    verkrijgerContainer.appendChild(addButton);
}

// form toevoegen bij drukken op knop
let verkrijgerTeller = 1;
function verkrijgertoevoegen(button) {
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
        </fieldset>`;
        

    formContainer.appendChild(newForm);

    verplaatsKnoppen();
}

// knoppen verwijderen bij verwijderen van form
function verkrijgerVerwijderen() {
    const formContainer = document.querySelector('[data-name="nameverkrijger"]');
    const verkrijgers = formContainer.querySelectorAll(".verkrijger");

    if (verkrijgers.length > 0) {
        formContainer.removeChild(verkrijgers[verkrijgers.length - 1]);
        verkrijgerTeller--;
    }

    verplaatsKnoppen();
}

// knoppen verplaatsen bij teovoegen van form
function verplaatsKnoppen() {
    const formContainer = document.querySelector('[data-name="nameverkrijger"]');
    const verkrijgers = formContainer.querySelectorAll(".verkrijger");

    document.querySelector(".verkrijgerbuttons")?.remove();

    if (verkrijgers.length > 0) {
        const laatsteVerkrijger = verkrijgers[verkrijgers.length - 1];

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("verkrijgerbuttons");
        buttonContainer.innerHTML = `
            <button class="btn" type="button" onclick="verkrijgertoevoegen()">verkrijger toevoegen</button>
            <button class="btn" type="button" onclick="verkrijgerVerwijderen()">laatste verkrijger verwijderen</button>
        `;

        laatsteVerkrijger.appendChild(buttonContainer);
    }
}

// alles opslaan in sessionstorage
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
