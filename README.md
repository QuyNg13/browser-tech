# Browser tech
Browser-tech repository | Quy Nguyen

<details>
<summary><h2>Week 1</h2></summary>

### Doel
Het doel deze week was voor mij om er achter te komen hoe ik in HTML een form moest opbouwen en welk deel van het formulier ik wou gaan maken.

### Voortgang
Tijdens het onderzoeken van hoe forms worden opgebouwd kwam ik een [MDN artikel](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) tegen. Aangezien het allemaal best nieuw was voor mij heb ik besloten om te beginnen bij de eerste van het formulier om te oefenen met het structuur van de HTML. Ik heb hier geleerd hoe ik `<ieldset>` en `<legend>` kan gebruiker en wat de functies zijn van verschillende elementen zoals `<label>` en verschillende `<input>` types.

  <details>
  <summary><h4>eerste versie form HTML</h4></summary>
    
```
    <form>
 
         <fieldset>
             <legend>
                 <h3>Vraag 1a</h3>
             </legend>
             <fieldset>
                 <legend>Naam<strong>*</strong></legend><label for="voorletter(s)"><input type="text" id="voorletter(s)" name="voorletter(s)-overledene" required></label>
                 <label for="tussenvoegsel(s)"><input type="text" id="tussenvoegsel(s)" name="tussenvoegsel(s)-overledene" required></label>
                 <label for="achternaam"><input type="text" id="achternaam" name="achternaam-overledene" required></label>
             </fieldset>
             <fieldset>
                 <legend>Burgerservicenummer overledene<strong>*</strong></legend><label for="Burgerservicenummer"><input type="text" id="Burgerservicenummer" name="Burgerservicenummer" required></label>
             </fieldset>
             <fieldset>
                 <legend>Overlijdensdatum<strong>*</strong></legend>
                 <label for="Overlijdensdatum"><input type="date" value="2025-02-27" max="2025-02-27" id="Overlijdensdatum" name="Overlijdensdatum" required></label>
             </fieldset>
         </fieldset>
         <fieldset>
             <legend>
                 <h3>Vraag 1b</h3>
             </legend>
             <fieldset>
                 <legend>getrouwd/ geregistreerd parter<strong>*</strong></legend>
                 <p>Was de overledene getrouwd of had de overledene een geregistreerd partner op het moment vanoverlijden?</p>
                 <ul>
                     <li><label for="partner?"><input type="radio" name="partner?" value="ja" />Ja</label></li>
                     <li><label for="partner?"><input type="radio" name="partner?" value="nee" />Nee <i>Ga verder met vraag 1c</i></label></li>
                 </ul>
             </fieldset>
             <fieldset>
                 <legend>partnerschapsvoorwaarden</legend>
                 <p>Hadden de overledene en diens echtgenoot of geregistreerd partner huwelijkse of partnerschapsvoorwaarden laten vastleggen in een notariële akte?</p>
                 <ul>
                     <li><label for="partnerschapsvoorwaarden?"><input type="radio" name="partnerschapsvoorwaarden?" value="ja" />Ja</label></li>
                     <li><label for="partnerschapsvoorwaarden?"><input type="radio" name="partnerschapsvoorwaarden?" value="nee" />Nee</label></li>
                 </ul>
             </fieldset>
             <fieldset>
                 <legend>finaal verrekenbeding</legend>
                 <p>Hadden de overledene en diens partner een finaal verrekenbeding?</p>
                 <ul>
                     <li><label for="finaal-verrekenbeding?"><input type="radio" name="finaal-verrekenbeding?" value="ja" />Ja</label></li>
                     <li><label for="finaal-verrekenbeding?"><input type="radio" name="finaal-verrekenbeding?" value="nee" />Nee</label></li>
                 </ul>
             </fieldset>
         </fieldset>
     </form>
```
</details>
</details>
<details>
<summary><h2>Week 2</h2></summary>

### Doel
Het doel deze week is om een styling toe te passen en het form te enhancements te maken bij het bestaande form. Ik wil de inputs logisch indelen in het scherm en respensive maken zodat de styling weg gaat als het scherm kleiner is.

### Voortgang
Het leek mij handig om het formulier te verdelen in meerder pagina's waar de gebruiker doorheen gaat. Ik wil dit doen omdat het in een echte situatie dan mogelijk is om tussen stappen door de inhoud van de velden door te sturen naar de backend aangezien er op elke pagine een submit button zit.

<details>
  <summary>vraag 1a HTML</h4></summary>
    
```
               <form id="vraag1a" action="1b.html">
                <legend>
                    <h2>vul hier de gegevens in van de overledene</h2>
                </legend>
                <fieldset>
                    <legend>
                        <h3>Vraag 1a</h3>
                    </legend>
                    <fieldset>
                        <legend hidden>volledige naam overledene*</legend>
                        <label for="voorletter(s)">
                            voorletter(s)*
                            <input type="text" id="voorletter(s)" name="voorletter(s)-overledene" required></label>
                        <label for="tussenvoegsel(s)">
                            tussenvoegsel(s)
                            <input type="text" id="tussenvoegsel(s)" name="tussenvoegsel(s)-overledene"></label>
                        <label for="achternaam">
                            achternaam*
                            <input type="text" id="achternaam" name="achternaam-overledene" required></label>
                    </fieldset>
                    <fieldset>
                        <legend hidden>Burgerservicenummer overledene*</legend>
                        <label for="Burgerservicenummer">
                            Burgerservicenummer overledene*
                            <input type="text" id="Burgerservicenummer" name="Burgerservicenummer" pattern="\d{9,9}"
                                required></label>
                    </fieldset>
                    <fieldset>
                        <legend hidden>Overlijdensdatum*</legend>
                        <label for="Overlijdensdatum">
                            Overlijdensdatum*
                            <input type="date" value="2025-02-27" max="2025-02-27" id="Overlijdensdatum"
                                name="Overlijdensdatum" required></label>
                    </fieldset>
                </fieldset>
                <div>
                    <input type="submit" value="Volgende" class="btn">
                </div>
            </form>
```
</details>

<details>
  <summary>vraag 1b HTML</h4></summary>
    
```
                           <form class="checkboxes">
                <fieldset>
                    <legend>
                        <h3>Vraag 1b</h3>
                    </legend>
                    <fieldset>
                        <legend hidden>getrouwd/ geregistreerd parter*</legend>
                        <p>Was de overledene getrouwd of had de overledene een geregistreerd partner op het moment
                            vanoverlijden?</p>
                        <label>
                            <input type="radio" name="partner?" value="ja" required>Ja</label>
                        <label>
                            <input type="radio" name="partner?" value="nee">Nee <i>Ga verder met vraag 1c</i>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend hidden>partnerschapsvoorwaarden</legend>
                        <p>Hadden de overledene en diens echtgenoot of geregistreerd partner huwelijkse of
                            partnerschapsvoorwaarden laten vastleggen in een notariële akte?</p>
                        <label>
                            <input type="radio" name="partnerschapsvoorwaarden?" value="ja">Ja</label>
                        <label>
                            <input type="radio" name="partnerschapsvoorwaarden?" value="nee">Nee</label>
                    </fieldset>
                    <fieldset>
                        <legend hidden>finaal verrekenbeding</legend>
                        <p>Hadden de overledene en diens partner een finaal verrekenbeding?</p>
                        <label>
                            <input type="radio" name="finaal-verrekenbeding?" value="ja">Ja</label>
                        <label>
                            <input type="radio" name="finaal-verrekenbeding?" value="nee">Nee</label>
                    </fieldset>
                </fieldset>
                <div>
                    <a href="1a.html" class="btn">Vorige</a>
                    <input type="submit" value="Volgende" class="btn">
                </div>
            </form>
```
</details>

Ik heb styling toegepast door de kleuren van NS als custom property op te slaan bovenaan in de css. Ik heb ook vraag 1a in een grid gezet zodat het er mooi uit ziet op een groot scherm. Hierbij zijn de velden voor de voorletters, tusssenvoegsels en achternaam naast elkaar gezet en de 2 resterende velden daar onde naast elkaar. 

<details>
  <summary>grid van vraag1a</h4></summary>
    
```
    #vraag1a{
        fieldset:nth-of-type(1) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
    
            fieldset:nth-of-type(1) {
                grid-column-start: 1;
                grid-column-end: end;
    
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                justify-content: space-between;
    
                label:not(:nth-last-of-type(1)) {
                    max-width: 90%;
                }
            }
    
            fieldset:nth-of-type(2) {
                grid-column-start: 1;
                grid-column-end: 2;
                width: 100%;
            }
    
            fieldset:nth-of-type(3) {
                grid-column-start: 2;
                grid-column-end: 3;
                width: 100%;
            }
    
            label {
                display: flex;
                flex-direction: column;
            }
        }
```
</details>

Ik ben er deze week ook achter gekomen dat bij vraag 1b, vragen worden overgeslagen op basis van welk antwoord er wordt gegeven. ik wou er graag voor zorgen dat de vragen die mogelijk worden overgeslagen in eerste instantie niet zichtbaar zijn tenzij je op de benodigde radio button hebt gedrukt. Ik heb dit gedaan door een javascript bestand te maken en daar de fielsets te laten verschijnen op basis van de waarde van de fieldset daarboven met een `if else` statement. op basis van deze value zeg ik ook dat de velden die tevoorschijn komen `required` worden.

<details>
  <summary>fieldset zichtbaar en required maken script</h4></summary>
    
```
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
```
</details>

Ik heb deze week ook een begin gemaakt aan de buttons waarmee de gebruiker door het formulier kan navigeren.

</details>
<details>
<summary><h2>Week 3</h2></summary>

### Doel
momenteeel worden de vragen die weergegeven worden op basis van de value van de radio buttons standaard niet weergegeven, Dit betekend dat iemand die geen JS geladen heeft de vragen niet kan zien. Ik wil dit deze week gaan oplossen. Ook wil ik deze functie zo maken dat hij op meerdere plekken in het formulier gebruikt kan worden. Ook wil ik me meer verdiepen in validatie.

### Voortgang
Ik heb een beetje verdiept in validatie door te kijken naar het veld voor het BSN nummer. Met behulp van `pattern`, `minlength` en `maxlength` heb ik ervoor gezorgd dat alleen cijfers geldig zijn in het veld en dat het veld alleen valid is als er 8 of 9 characters in zitten.
<details>
  <summary>BSN validatie</h4></summary>
    
```
<label for="Burgerservicenummer">
  Burgerservicenummer overledene*
  <input type="text" id="Burgerservicenummer" name="Burgerservicenummer" minlength="8" maxlength="9" pattern="[0-9]+"
  required>
</label>
```
</details>

Ik heb met behulp van de [code van jeremy keith](https://gist.github.com/rosemulazada/29379f3e0586491f235e0eb39d108aa5) ervoor gezorgd dat alle invoervelden, checkboxes en radiobuttons worden opgeslagen in sessionstorage. Ik heb ervoor gekozen om de gegevens op te slaan in session storage omdat het mij de veiligere optie leek omdat het elke keer leeg wordt gehaald als het tabje gesloten wordt, ook vond ik het makkelijker te begrijpen dan de andere opties.
De code van Jeremy code zorgt ervoor dat ingevulde gegevens in een formulier automatisch worden opgeslagen in localStorage zodra je een invoerveld verlaat `(blur-event)`. Dit werkt zolang het formulier een data-form-topic attribuut heeft. Bij het openen van de pagina kijkt de code of er eerder opgeslagen gegevens zijn en vult die automatisch in. Dit gebeurt door de localStorage uit te lezen en de juiste velden weer in te vullen. De gegevens worden opgeslagen als een object, waarbij de veldnamen de sleutels zijn en de ingevulde waarden worden onthouden. Hierdoor blijven je gegevens bewaard de pagina vernieuwd wordt. In mijn geval heb ik localstorage uitgewisselt met sessionstorage.
<details>
  <summary>sessionstorage</h4></summary>
    
```
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
```
</details>

Ik heb deze week meerdere versies gemaakt van de functie die er voor zorgt dat je optionele vragen pas te zien krijgs als de value van de radio button juist is. De code moest niet onnodig lang/ingewikkeld zijn en zelf de benodigde fieldset onzichtbaar maken zodat als JS niet werkt de gebruiker het hele form ziet en gewoon door kan gaan met het formulier invullen. Bij vraag 1b komen er 2 vragen uit, uit beide van deze vragen komt nog een invoerveld op basis van hoe je de vraag beantwoord. Ik ben er hier dus achter gekomen dat de vragen en inputs tevoorschijn moeten komen afhankelijk van de value van de radio button van de directe parent.
<details>
  <summary>alle versies</summary>
    
In de eerste verbetering heb ik gebruik gemaakt van `toggleAttribute` op basis van feedback van Vasilis, dit is korter dat een if else gebruiken met `setattribute` en `removeattribute`. 
<details>
  <summary>versie 1</summary>
    
```
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
```
</details>

In de tweede verbetering heb ik andere versie gemaakt die voor mij beter leesbaar was. Ik heb hier geprobeerd om hem zo te maken dat het mogelijk is om hem ook op andere plekken te gebruiken mocht het formulier hetzelfde opgebouwd zijn.
<details>
  <summary>versie 2</summary>
    
```
document.querySelectorAll('.checkboxes > fieldset:first-of-type input').forEach(radio => {
    radio.addEventListener('change', () => {
        const value = document.querySelector('.checkboxes fieldset:first-of-type input:checked').value;

        document.querySelectorAll('.checkboxes fieldset:not(:first-of-type)').forEach(fieldset => {
            fieldset.querySelectorAll('input').forEach(input => input.removeAttribute('required'));

            switch (value) {
                case 'ja':
                    fieldset.style.display = 'flex';
                    fieldset.style.flexDirection = 'column';
                    fieldset.disabled = false;
                    fieldset.querySelectorAll('input').forEach(input => input.setAttribute('required', 'true'));
                    break;

                case 'nee':
                    fieldset.style.display = 'none';
                    break;
            }
        });
    });
});
```
</details>

In de derde verbetering heb ik advies van Vasilis opgevolgd en gebruik gemaakt van `<div>` om de elementen het die ik wil verbergen met een `-data-` atribuut om ze aan te roepen. op deze manier kan ik de divs koppelen aan de vragen en op ze op die manier tevoorschijn laten komen. maar in deze versie heb ik de vunctie praktisch gezien elke keer opnieuw geschreven voor elke vraag.
<details>
  <summary>versie 3</summary>
    
```
function toggleDivVisibility() {
    const partnerRadioButtons = document.querySelectorAll('input[name="morepartner"]');
    const partnerschapsvoorwaardenRadioButtons = document.querySelectorAll('input[name="morepartnerschapsvoorwaarden"]');

    const partnerDiv = document.querySelector('[data-name="namepartner"]');
    const partnerschapsvoorwaardenDiv = document.querySelector('[data-name="namepartnerschapsvoorwaarden"]');

    partnerRadioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            if (document.querySelector('input[name="morepartner"]:checked').value === 'ja') {
                partnerDiv.style.display = 'flex';
                partnerDiv.style.flexDirection = 'column';
                partnerDiv.querySelectorAll('input').forEach(input => input.setAttribute('required', 'true'));
            } else {
                partnerDiv.style.display = 'none';
                partnerDiv.querySelectorAll('input').forEach(input => input.removeAttribute('required'));
            }
        });
    });

    partnerschapsvoorwaardenRadioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            if (document.querySelector('input[name="morepartnerschapsvoorwaarden"]:checked').value === 'ja') {
                partnerschapsvoorwaardenDiv.style.display = 'flex';
                partnerschapsvoorwaardenDiv.style.flexDirection = 'column';
                partnerschapsvoorwaardenDiv.querySelectorAll('input').forEach(input => input.setAttribute('required', 'true'));
            } else {
                partnerschapsvoorwaardenDiv.style.display = 'none';
                partnerschapsvoorwaardenDiv.querySelectorAll('input').forEach(input => input.removeAttribute('required'));
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', toggleDivVisibility);
```
</details>

In de vierde verbetering heb ik een poging gedaan om het korter te maken maken, maar ik moet nog steeds voor elke vraag die ik op deze manier wil laten functioneren iets toevoegen aan het script wat ik niet wil.
<details>
  <summary>versie 4</summary>
    
```
function toggleDivVisibility() {
    const toggleVisibility = (radioButtons, divSelector) => {
        radioButtons.forEach(button => {
            button.addEventListener('change', () => {
                const selectedButton = document.querySelector(`input[name="${radioButtons[0].name}"]:checked`);
                
                // Controleer of er een geselecteerde radio button is
                if (selectedButton) {
                    const selectedValue = selectedButton.value;
                    const div = document.querySelector(divSelector);

                    if (selectedValue === 'ja') {
                        div.style.display = 'flex';
                        div.style.flexDirection = 'column';
                        div.querySelectorAll('input').forEach(input => input.setAttribute('required', 'true'));
                    } else {
                        div.style.display = 'none';
                        div.querySelectorAll('input').forEach(input => input.removeAttribute('required'));
                    }
                }
            });
        });
    };

    const partnerRadioButtons = document.querySelectorAll('input[name="morepartner"]');
    const partnerschapsvoorwaardenRadioButtons = document.querySelectorAll('input[name="morepartnerschapsvoorwaarden"]');
    
    toggleVisibility(partnerRadioButtons, '[data-name="namepartner"]');
    toggleVisibility(partnerschapsvoorwaardenRadioButtons, '[data-name="namepartnerschapsvoorwaarden"]');
}
```
</details>

Uiteindelijk is het me gelukt bij de vijfde verbetering door te queryselector zo aan te passen dat hij zoekt naar een `name=` attribute dat begint met more. dit betekent dat de vragen wel verschillende names kunnen hebben als ze maar beginnen met "more" en de div waaraan ze gekoppelt zijn een `-data-name` hebben die begint met "name".
<details>
  <summary>versie 5</summary>
    
```
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
                targetDiv.querySelectorAll('input').forEach(input => input.setAttribute('required', 'true'));
            } else {
                targetDiv.style.display = 'none';
                targetDiv.querySelectorAll('input').forEach(input => input.removeAttribute('required'));
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', toggleDivVisibility);
```
</details>
</details>

Ik heb na de JS funtie werkend te krijgen nog kort kunnen zitten aan validatie. Hiervoor gebruik ik `input:user-invalid` en `input:user-valid` in CSS om styling te geven aan de border om duidelijk feedback te geven aan de gebruiker.
<details>
  <summary>progressive enhancement</summary>
    
```
input:user-invalid{
     border:solid var(--NS-error-color);
 }
 
 input:user-valid{
     border:solid var(--NS-success-color);
 }
```
</details>
</details>

<details>
<summary><h2>Week 4</h2></summary>

### Doel
Na zo lang gewerkt te hebben aan hetzelfe probleem wil ik deze week beginnen aan wat anders wat nog wel realistisch is om af te maken voor de deadline. Ik heb ervoor gekozen om vraag 3b te maken. In dit stuk van het formulier geef je aan of er verkrijgers zijn voor wie je geen aangifte doet. Als deze er zijn moet je voor elke verkrijger een klein formulier invullen met hun gegevens er op. Ik wil het zo maken dat het formulier voor elke verkrijger in eerste instantie niet zichtbaar is.

### Voortgang
Om ervoor te zorgen dat alles zichtbaar is wanneer JS niet werkt heb ik het zo gemaakt dat staandaard alles zichtbaar is en dat JS de elementen onzichtbaar maakt.
<details>
  <summary>progressive enhancement</summary>
    
```
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
```
</details>

Bij het maken van vraag 3b ben ik begonnen met het maken van de HTML. Ik ben er vanuit gegaan dat als JS niet werkt dat er dan vier verkrijgers zijn zoals bij het PDF bestand. deze vier formulieren staan ook niet op required aangezien we er niet van uit kunnen gaan dat iedereen deze velden nodig heeft.

<details>
  <summary>vraag 3b HTML</summary>
    
```
<form id="geenverkrijgers" data-form-topic="3b">
                <fieldset>
                    <legend>
                        <h3>Vraag 3b</h3>
                    </legend>
                    <fieldset>
                        <legend hidden>voor wie doet u geen aangifte?</legend>
                        <p>Zijn er verkrijgers voor wie u <b>geen</b> aangifte doet?</p>
                        <label>
                            <input type="radio" name="moreverkrijger" value="ja" required>Ja</label>
                        <label>
                            <input type="radio" name="moreverkrijger" value="nee">Nee</label>
                    </fieldset>
                    <div data-name="nameverkrijger">
                        <div>
                            <fieldset class="columnlabel">
                                <legend hidden>Gegevens vergkrijger*</legend>
                                <h4>Gegevens verkrijger 1</h4>
                                <div class="threecolumns">
                                    <legend hidden>volledige naam verkrijger*</legend>
                                    <label for="voorletter(s)">
                                        voorletter(s)*
                                        <input type="text" id="voorletter(s)" name="voorlettersoverledene"></label>
                                    <label for="tussenvoegsel(s)">
                                        tussenvoegsel(s)
                                        <input class="notrequired" type="text" id="tussenvoegsel(s)"
                                            name="tussenvoegselsoverledene"></label>
                                    <label for="achternaam">
                                        achternaam*
                                        <input type="text" id="achternaam" name="achternaamoverledene" ></label>
                                    <label for="Burgerservicenummer">
                                        Burgerservicenummer verkrijger*
                                        <input type="text" id="Burgerservicenummer" name="Burgerservicenummer"
                                            minlength="8" maxlength="9" pattern="[0-9]+" >
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset>
                                <p>Krijgt deze verkrijger waarvoor u geen aangifte doet het hele vermogen?</p>
                                <label>
                                    <input type="radio" name="gehelevermogen" value="ja" >Ja</label>
                                <label>
                                    <input type="radio" name="gehelevermogen" value="nee">Nee</label>
                            </fieldset>
                            <fieldset>
                                <p>Doet deze verkrijger een beroep op diens legitieme portie (wettelijke erfdeel)?</p>
                                <label>
                                    <input type="radio" name="legitiemeportie" value="ja" >Ja</label>
                                <label>
                                    <input type="radio" name="legitiemeportie" value="nee">Nee</label>
                            </fieldset>
                        </div>
                        <div id="nojs">
                            <div>
                                <fieldset class="columnlabel">
                                    <legend hidden>Gegevens vergkrijger*</legend>
                                    <h4>Gegevens verkrijger 1</h4>
                                    <div class="threecolumns">
                                        <legend hidden>volledige naam verkrijger*</legend>
                                        <label for="voorletter(s)">
                                            voorletter(s)*
                                            <input type="text" id="voorletter(s)" name="voorlettersoverledene"></label>
                                        <label for="tussenvoegsel(s)">
                                            tussenvoegsel(s)
                                            <input class="notrequired" type="text" id="tussenvoegsel(s)"
                                                name="tussenvoegselsoverledene"></label>
                                        <label for="achternaam">
                                            achternaam*
                                            <input type="text" id="achternaam" name="achternaamoverledene" ></label>
                                        <label for="Burgerservicenummer">
                                            Burgerservicenummer verkrijger*
                                            <input type="text" id="Burgerservicenummer" name="Burgerservicenummer"
                                                minlength="8" maxlength="9" pattern="[0-9]+" >
                                        </label>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <p>Krijgt deze verkrijger waarvoor u geen aangifte doet het hele vermogen?</p>
                                    <label>
                                        <input type="radio" name="gehelevermogen" value="ja" >Ja</label>
                                    <label>
                                        <input type="radio" name="gehelevermogen" value="nee">Nee</label>
                                </fieldset>
                                <fieldset>
                                    <p>Doet deze verkrijger een beroep op diens legitieme portie (wettelijke erfdeel)?</p>
                                    <label>
                                        <input type="radio" name="legitiemeportie" value="ja" >Ja</label>
                                    <label>
                                        <input type="radio" name="legitiemeportie" value="nee">Nee</label>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset class="columnlabel">
                                    <legend hidden>Gegevens vergkrijger*</legend>
                                    <h4>Gegevens verkrijger 1</h4>
                                    <div class="threecolumns">
                                        <legend hidden>volledige naam verkrijger*</legend>
                                        <label for="voorletter(s)">
                                            voorletter(s)*
                                            <input type="text" id="voorletter(s)" name="voorlettersoverledene"></label>
                                        <label for="tussenvoegsel(s)">
                                            tussenvoegsel(s)
                                            <input class="notrequired" type="text" id="tussenvoegsel(s)"
                                                name="tussenvoegselsoverledene"></label>
                                        <label for="achternaam">
                                            achternaam*
                                            <input type="text" id="achternaam" name="achternaamoverledene" ></label>
                                        <label for="Burgerservicenummer">
                                            Burgerservicenummer verkrijger*
                                            <input type="text" id="Burgerservicenummer" name="Burgerservicenummer"
                                                minlength="8" maxlength="9" pattern="[0-9]+" >
                                        </label>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <p>Krijgt deze verkrijger waarvoor u geen aangifte doet het hele vermogen?</p>
                                    <label>
                                        <input type="radio" name="gehelevermogen" value="ja" >Ja</label>
                                    <label>
                                        <input type="radio" name="gehelevermogen" value="nee">Nee</label>
                                </fieldset>
                                <fieldset>
                                    <p>Doet deze verkrijger een beroep op diens legitieme portie (wettelijke erfdeel)?</p>
                                    <label>
                                        <input type="radio" name="legitiemeportie" value="ja" >Ja</label>
                                    <label>
                                        <input type="radio" name="legitiemeportie" value="nee">Nee</label>
                                </fieldset>
                            </div>
                            <div>
                                <fieldset class="columnlabel">
                                    <legend hidden>Gegevens vergkrijger*</legend>
                                    <h4>Gegevens verkrijger 1</h4>
                                    <div class="threecolumns">
                                        <legend hidden>volledige naam verkrijger*</legend>
                                        <label for="voorletter(s)">
                                            voorletter(s)*
                                            <input type="text" id="voorletter(s)" name="voorlettersoverledene"></label>
                                        <label for="tussenvoegsel(s)">
                                            tussenvoegsel(s)
                                            <input class="notrequired" type="text" id="tussenvoegsel(s)"
                                                name="tussenvoegselsoverledene"></label>
                                        <label for="achternaam">
                                            achternaam*
                                            <input type="text" id="achternaam" name="achternaamoverledene" ></label>
                                        <label for="Burgerservicenummer">
                                            Burgerservicenummer verkrijger*
                                            <input type="text" id="Burgerservicenummer" name="Burgerservicenummer"
                                                minlength="8" maxlength="9" pattern="[0-9]+" >
                                        </label>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <p>Krijgt deze verkrijger waarvoor u geen aangifte doet het hele vermogen?</p>
                                    <label>
                                        <input type="radio" name="gehelevermogen" value="ja" >Ja</label>
                                    <label>
                                        <input type="radio" name="gehelevermogen" value="nee">Nee</label>
                                </fieldset>
                                <fieldset>
                                    <p>Doet deze verkrijger een beroep op diens legitieme portie (wettelijke erfdeel)?</p>
                                    <label>
                                        <input type="radio" name="legitiemeportie" value="ja" >Ja</label>
                                    <label>
                                        <input type="radio" name="legitiemeportie" value="nee">Nee</label>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="1b.html" class="btn">Vorige</a>
                        <input type="submit" value="Volgende" class="btn">
                    </div>
            </form>
```
</details>

Als de JS wel werkt moeten de velden niet weergegeven worden. Dit doe ik met de `hideverkrijger()` functie die ik eerder heb laten zien. Ook wordt de knop om verkrijgers toe te voegen alleen weergegeven als de JS werkt.
<details>
  <summary>knop bij werkende JS</summary>
    
```
function verkrijgerknop(){
    const verkrijgerContainer = document.querySelector('[data-name="nameverkrijger"] > div');
    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.textContent = "Voeg verkrijger toe";
    addButton.onclick = verkrijgertoevoegen;
    addButton.classList.add("btn");
    verkrijgerContainer.appendChild(addButton);
}
```
</details>

De knop roept een functie aan die kleine formulieren aan de container toe voegt. elk vormulier krijgt een cijfer op basis van `verkrijgerTeller`, deze variable gaat elke keer omhoog als er een nieuw form word aangemaakt en omlaag als er eentje wordt weggehaald. Als er een formulier wordt weggehaald wordt het formulier met de hoogste cijfer verwijderd.
<details>
  <summary>toevoegen en verwijderen van fieldsets</summary>
    
```
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


function verkrijgerVerwijderen() {
    const formContainer = document.querySelector('[data-name="nameverkrijger"]');
    const verkrijgers = formContainer.querySelectorAll(".verkrijger");

    if (verkrijgers.length > 0) {
        formContainer.removeChild(verkrijgers[verkrijgers.length - 1]);
        verkrijgerTeller--;
    }

    verplaatsKnoppen();
}
```
</details>

Elke keer dat er een formulier wordt toegevoegd of verwijderd moet de knoppen van het toevoegen en verwijder verplaatst worden naar het laatste form. Dit heb ik gedaan met een functie die de knoppen elke keer verwijders wanner er een formulier word toegevoegd of verwijderd en de knoppen onder het form zet met de hoogste teller. Ik heb deze functie gemaakt met behulp van chatGPT. ik had de knoppen eerst onder elke form staan en werden niet verwijderd, hierdoor stonden de knoppen onder elke form.
<details>
  <summary>knoppen verplaatsen op basis van aantal forms</summary>
    
```
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
```
</details>
</details>

<details>
<summary><h2>Bronnen</h2></summary>
  - [MDN artikel over opbouw van forms]<br>(https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) <br>
  - [localstorage code van jeremy keith]<br>(https://gist.github.com/rosemulazada/29379f3e0586491f235e0eb39d108aa5) <br>
  - ChatGPT voor troubleshooting en helpen met het maken van vraag 3b 
</details>
