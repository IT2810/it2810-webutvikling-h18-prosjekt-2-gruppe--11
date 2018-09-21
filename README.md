# IT2810 – Webutvikling | Prosjekt 2 (Gruppe 11), Høst 2018

### Oppgavebeskrivelse
I dette prosjektet skal vi lage en online utstilling med brukerstyrte kombinasjoner av lyd, svg-grafikk og tekst. Dette skal implementeres som en single page application (SPA) med React og data skal lastes automatisk med ajax. 

Utstillingen skal ha responsiv web design hvor layout, skalering og interaksjonsmuligheter tilpasses type enhet og størrelse på skjerm. Det skal se bra ut og interaksjonen skal fungere både på mobil, pad og pc med skjerm av forskjellig størrelse.  

Mer infomasjon om oppgaven kan ses på Blackboard. (Krever tilgang)

### Prosjekt 2
Utifra følgende kategori genereres det fire kombinasjoner av valgt underkategori:

* Bilder
    * Alminnelige katter
    * Stripete katter
    * Flekkete katter
* Lyd
    * Små katter
    * Store katter
    * Tilfeldig
* Tekst
    * Sang
    * Dikt
    * Sitat
    
## Teknologier
Prosjektet krever at følgende kjører (minimum):  
* react.js
* ajax
* npm, v. 6.4.1

Alle andre avhengigheter, som definert i package.json, kan installeres ved å kjøre npm installasjon i project2_gr11-mappen.
    
### Drevet av
Systemet er hovedsakelig bygget ved hjelp av følgende:
* HTML5    
* CSS
* React.js    

## Kjør programmet:  
1. Klon prosjektet it2810-webutvikling-h18-prosjekt-2-gruppe--11. 
2. npm install
3. npm run
    
## Gruppa består av:
* [Minh Ha Do](https://github.com/mhado)    
* [Kim Duong](https://github.com/kimduo)    
* [Catriona Thora Tørklep](https://github.com/CatrionaTorklep)    

# Dokumentasjon
## Krav til innhold og funksjonalitet på websiden
### Tabs
Da vi først så etter online ressurser for å lære oss hvordan vi kunne implementere tabs på vår Single Page Application, opplevde vi at de fleste forklarte det med bruk av tredjepartsbiblioteker, hvilket ikke kan brukes i denne oppgaven. Vi vurderte en løsning som tok i bruk prop.types da dette tidligere har vært innebygd i React, men ettersom det senere har blitt flyttet ut som et separat bibliotek valgte vi å gå bort ifra dette til fordel for en løsning vi kom frem til på egenhånd. Vi valgte å løse problemet med å implementere tabs ved å innføre fire lenker som representerer ulike tab-knapper, som hver omdirigerer brukeren til en annen state av den samme siden.  

### Samling av medier
Vi valgte å samle de ulike mediene ved å lage tre mapper, en for hver medietype, som inneholder tre kategorimapper hver. Disse kategorimappene inneholder fire elementer av mappens gitte kategori. Elementene har nummerbaserte navn som består av et tall mellom 1 til 4. Navnene er på denne formen slik at vi kan bruke en random number generator til å velge ut et tilfeldig tall i dette intervallet, som videre kan plottes inn i et AJAX-kall for uthenting av tilfeldige elementer innen en bestemt kategori. Mediene ligger i en public mappe, slik at det er mulig å generere en webaddresse for å hente mediene ved hjelp av Fetch API.

imageMedia består av samlinger av SVG filer i mappene plainCats, spottedCats og stripedCats. Bruken av Fetch-APIet til AJAX for å hente disse gjør at filene er nødt til å leses som en tekst, da Fetch API ikke støtter direkte parsing av XML. Funksjonen “dangerouslySetInnerHTML” er React sin versjon av innerHTML. Vi bruker dermed dangerouslySetInnerHTML til å sette SVGen, som nå er en string, inn i en div. dangerouslySetInnerHTML håndterer altså stringen, tekststrengen vi fikk fra fetch, som XML markup som vi setter inn i HTMLen.

textMedia består av tekst lagret i JSON i mappene poems, quotes og songs. Fetch API støtter parsing av JSON fra respons slik at dataen man får er et JavaScript objekt. I objektet kan man da få tak i de diverse delene av innholdet (author, text...) ved hjelp av keys, som kan behandles som en vanlig string i JavaScript. JSON-filene inneholder tittel, tekst, og kilder. Tekst med newline er gjort om til en JSON array hvor hvert element er en ny linje. Dermed må tekstene lagret som en JSON array håndteres slik at de holder samme format. Dette gjøres via en textFormatter funksjon vi har laget som tar inn en array, legger til <br/ >i hver iterasjon som lagres i en string, og for at dette skal kunne behandles som JSX, brukes det dangerouslySetInnerHTML for å sette stringen inn i en p-tag.
   
soundMedia består av underkategoriene bigCat, smallCat, og surpriseSounds, som alle inneholder fire .mp3 filer hver. I motsetning til de to overnevnte mappene, krever ikke denne kategorien AJAX, og har dermed ikke samme behov for kompleksitet ved henting. Lydfilene hentes enkelt gjennom HTML5 sin audio-tag.

### Responsivt design
Siden har et responsivt design som egner seg både mobil- og desktop-nettlesere. Når siden vises på en desktop-skjerm i normal størrelse, vil det være en bar tilgjengelig med de fire tab-mulighetene i seg. Dersom siden skaleres ned eller vises på en mobilskjerm som typisk har mye større høyde enn bredde, vil denne gjøres om til en såkalt hamburgermeny, som brukeren kan klikke på for å få opp en liste over de ulike tabbene. Elementene plassert på siden vil også skalere eller endre på seg for å tilpasse seg skjermvinduet.

## Krav til bruk av teknologi
### React
Vi har utviklet nettapplikasjonen med React og JSX, og tatt i bruk ES6. Vi har ikke benyttet oss av noen tredjeparts biblioteker eller komponenter for å løse denne oppgaven.

### AJAX
Vi brukte Fetch APIet, som er nettleseren sin innebygde API, til AJAX kallet for innhenting av JSON-tekst og SVG-bilder. Det er mulig å bruke en tredje-biblioteks API som axios og jQuery AJAX, men vi valgte det innebygde ettersom det er lett å bruke og det da ikke er nødvendig å laste ned et annet bibliotek bare for å kalle på AJAX, slik som i JQuery AJAX.

### Responsive Webdesign 
Siden bruker en CSS-grid til å plassere elementer hensiktsmessig i forhold til viewporten. Gridden sin default oppførsel gjør at siden ser ut slik vi ønsker at den skal se ut på en mobil enhet, der alt innhold befinner seg på et endimensjonalt kolonnebasert format for økt visibilitet på en mindre skjerm. En media-query aktiveres når skjermstørrelsen når et minimum på 760px, som er rettet mot desktop-oppførsel. Da går siden over til et todimensjonalt layout. SVG bildet skaleres og teksten omformateres i tillegg slik forventet oppførsel skal være.

### Samarbeid, bruk av git, koding og leveranse
Vi startet arbeidet med å dele hovedoppgaven inn i flere mindre oppgaver, som vi la til i vårt git repository som issues. Vi self-assignet deretter til oppgavene vi jobbet med for lett oversikt over hvem som gjør hva og hva som blir gjort. På enkelte issues jobbet vi sammen om løsninger, som vi kunne tagge med #[issue nr] for å koble branchen til issuen vi jobbet med. Vi jobbet hovedsakelig i feature-branches i git, som så ble merget sammen i developmentbranch etterhvert som features ble ferdige. Feature branchene er navngitt med issue nummer, slik at de er koblet til issues på GitHub. Da alle features var ferdigstilte og vi kunne bekrefte at nettsiden fungerte slik planlagt, merget vi development branch med master for den ferdige versjonen av webapplikasjonen. Hovedsakelig jobbet vi med App.js og en mappe kalt “components” som inneholder komponentene våre, samt at vi hadde alle lyd-, bilde- og tekstfiler tilgjengelig i sine respektive mapper under public.


## Testing av GUI
(coming soon)

## Credits
Alle bilder er laget av [Terdpongvector](https://www.freepik.com/terdpongvector).

Alle tekster har forfatter oppgitt i sine json-filer, og forfatter vises i tillegg på nettsiden når teksten blir fremstilt.

Alle lyder har forfatter oppgitt i filmappevisning.
