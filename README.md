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



### Volgende week


</details>
<details>
<summary><h2>Week 4</h2></summary>

### Doel


### Voortgang


### Volgende week


</details>
