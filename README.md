# PG6301 eksamen <Express Yourself>

[Heroku](https://pgr6301-exam-gilajoanna.herokuapp.com)
[Test rapport]()
 
[![.github/workflows/verify.yaml](https://github.com/kristiania-pg6301-2022/pgr6301-exam-Gilajoanna/actions/workflows/verify.yaml/badge.svg)](https://github.com/kristiania-pg6301-2022/pgr6301-exam-Gilajoanna/actions/workflows/verify.yaml)

## EXPRESS YOURSELF
Min version av oppgaven där registrerade användare kan skriva egna och läsa andras opinions-artiklar!

* [ ] Skriv info i din readMe


## Kode brukt från föreläsning
* AppContext är inspirerat av Reference 12 MovieApiContext. Jag tyckte att denna var en god lösning för att spara linjer med kode och ha den globalt och enkelt tillgänglig för alla filer. 
* postJSON, fetchJSON, useLoader
* Jag har sammarbetat med ett fåtal andra personer när jag gjorde min mock-examen. Denna har jag använt och modifierat kod ifrån.


## Egenutfylling av funksjonelle krav

* [x] Anonyme brukere skal se nyhetsaker når de kommer til nettsiden. Legg inn noen nyhetssaker for å demonstrere.
  *Listan med nyhetstitlar till vänster syns också för brukere som inte är inloggade.* 
  *Ett problem här är att den listan inte uppdaterar sig med mindre man refresher sidan när man har lagt till ny artikel* 

* [x] En bruker som er logget inn kan klikke på en nyhetssak for å se detaljene om nyhetssaken.
  *Det var tänkt att listan med artikel-titlar skulle haft en läs-knapp bruker skulle trycka på så visas enskild artikel. Jag fick bara implementerat att om man är inloggad bruker så har man tillgång till detaljerad artikel-lista.*

* [x] Redaksjonelle brukere kan publisere nye nyhetsartikler
  *I min lösning så fick jag inte till att hardkode in en admin bruker med särkilda permissions som att skriva, uppdatera och delete. Därför kan alla inloggade lägga till och ta bort artiklar.*

* [x] Brukeren skal forhindres fra å sende inn en nyhetsartikkel som mangler kategori, tittel eller tekst
  *Inte löst på bästa sätt då jag inte fick ut en error-melding i en ny div. Nu visas en Alert och bruker får inte lagt till i databasen.*


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


## Egenutfylling av tekniske krav

* [x] Oppsett av package.json, parcel, express, prettier
* [x] React Router
* [x] Express app
* [x] Kommunikasjon mellom frontend (React) og backend (Express)
* [x] Deployment til Heroku
* [x] Bruk av MongoDB
  * *Har inte fått till update av existerande document, men implementerat delete av document.*
* [x] OpenID Connect
* [ ] Web Sockets
  * *Inte fått implementerat*
* [x] Jest med dokumentert testdekning
  * *På grund av slut på minuter så kör inte mina tester längre i Github actions. Jag har lagt ved screenshots av gröna tester och av testdekkning.*
 
