# PG6301 eksamen <Express Yourself>

[Heroku](https://pgr6301-exam-gilajoanna.herokuapp.com)
[Test rapport](https://github.com/kristiania-pg6301-2022/pgr6301-exam-Gilajoanna/commit/e06a2f62ec9b76c08045a90d0cdc8e21df31a24e#commitcomment-72929877)
 
[![.github/workflows/verify.yaml](https://github.com/kristiania-pg6301-2022/pgr6301-exam-Gilajoanna/actions/workflows/verify.yaml/badge.svg)](https://github.com/kristiania-pg6301-2022/pgr6301-exam-Gilajoanna/actions/workflows/verify.yaml)

* [x] Gå igenom alla filer
* [x] Se över namn i koden
* [x] Ta bort kod du inte använder
* [x] Ändra färger på designen
* [ ] Skriv info i din readMe


## Tips

* Bruk versjoner av alle dependencies som vi brukte på forelesningene. Det skjer hele tiden endringer i JavaScript-land og noen ganger vil siste versjon oppføre seg forskjellig - ikke kast bort verdifull eksamenstid. Du kan kopiere package.json fra innlevering eller en øving
* Spesielt: React 18 kom i løpet av semesteret. Alt vi har vist er på React 17. Kjør på React 17 nå med mindre du har brukt en del tid på versjon 18 den siste måneden. Det er vesentlige problemer!
* Start med å løse det kritiske: Deployment til Heroku
* Ikke bli sittende med ting du ikke får til mens det er enklere ting du kunne ha gjort. Spesielt tester har overraskende mye vrient med seg. Legg det til siden og løs andre ting om du har problemer
* Les de funksjonelle kravene grundig og test at løsningen din oppfyller dem
* Les læringsmålene beskrevet i eksamensteksten grundig og sjekk at løsningen din demonstrere at du behersker disse

Dette er versjonene vi brukte under forelesningene om som er validert som ok:

```
"jest": "^27.5.1",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^6.2.2"
```


## Egenutfylling av funksjonelle krav

*beskriv eventuelle mangler eller problemer for delvis uttelling*

* [x] Anonyme brukere skal se nyhetsaker når de kommer til nettsiden. Legg inn noen nyhetssaker for å demonstrere
* [ ] Når en ny sak publiseres, skal alle brukerne få se den nye saken umiddelbart. Bruk websockets for å sende oppdateringer
* [x] Brukere kan logge seg inn. Det anbefales at du implementerer at brukerne logger seg inn med Google, men andre mekanismer er også akseptabelt
* [x] En bruker som er logget inn kan se på sin profilside (userinfo fra Google)
* [x] Brukere skal forbli logget inn når de refresher websiden
* [ ] En bruker som er logget inn kan klikke på en nyhetssak for å se detaljene om nyhetssaken. 
  * [x] Detaljene skal inkludere en nyhetskategori, overskrift, tekst og navn på den som publiserte den
* [ ] "Redaksjonelle brukere" kan logge seg inn med Active Directory. Det må fungere å logge seg inn med en Active Directory på skolens AD ( domain_hint=egms.no )
* [x] Redaksjonelle brukere kan publisere nye nyhetsartikler
* [ ] Nyhetsartikkel skal inneholde en kategori valgt fra en nedtrekksliste ( <select> ), tittel ( <input> ) og tekst ( <textarea> )
* [ ] Dersom noen allerede har publisert en nyhetsartikkel med samme tittel skal serveren sende HTTP status kode 400 og en feilmelding
* [x] Brukeren skal forhindres fra å sende inn en nyhetsartikkel som mangler kategori, tittel eller tekst
* [ ] En redaksjonell bruker skal kunne redigere en artikkel de selv har publisert
* [x] Alle feil fra serves skal presenteres til bruker på en pen måte, med mulighet for brukeren til å prøve igjen.


## Må-krav til teknisk løsning
* [ ] Besvarelsen skal inneholde en README-fil med link til Heroku og test coverage. 
* [x] npm start skal starte server og klient. Concurrently og parcel anbefales
* [x] npm test skal kjøre tester. Testene skal ikke feile
* [x] Koden skal ha konsistent formattering. Prettier og Husky anbefales
* [x] Nettsidene skal ha god layout med CSS Grid (Holy Grail layout) og horisontal navigasjonsmeny. Brukeren må kunne navigere overalt uten å bruke "back" eller redigere URL
* [x] Serveren validerer at brukeren er logget inn
* [ ] Innleveringen skal være i form av en ZIP-fil. Maks størrelse på fila er 1MB Artikler skal lagres i MongoDB
* [x] Applikasjonen skal deployes til Heroku
* [x] Testene skal kjøre på Github Actions


## Bør-krav til teknisk løsning
* [x] Github Actions bør beregne testcoverage. Testdekningen bør være over 50%. Bruk collectCoverage för att inkludera alle filer. Kun genererte filer som coverage og dist skal ekskluderes.
* [x] Vi har fått en rabattkode som gjør det mulig å benytter coveralls. Du kan bruke denne eller
* [x] Brukeren ser kun menyvalg som de har tilgang til
* [x] Brukere som går til en side de ikke har tilgang til blir bedt om å logge inn 
* [x] Brukere bør alltid se listen over artikler når de navigerer seg rundt på sidene


## Egenutfylling av tekniske krav

* [x] Oppsett av package.json, parcel, express, prettier
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] React Router
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Express app
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Kommunikasjon mellom frontend (React) og backend (Express)
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Deployment til Heroku
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Bruk av MongoDB
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] OpenID Connect
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [ ] Web Sockets
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Jest med dokumentert testdekning
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
 
