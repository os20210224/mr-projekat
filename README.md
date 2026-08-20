# mrzim javascript

uputstvo za linux sa apt package managerom

## zavisnosti

### node

node v24.13.0

ostao od iteh proejkta, ne secam se procesa instalacije sem da je bilo naporno

### java

java 21.0.11

```
sudo apt install openjdk-21-jdk
```

### android studio

jos jedan glupi naduvani jetbrains softver
^3.5 prikletih gigabajta

skinuti tar.gz sa oficijalnog sajta i ekstraktovati u /usr/local/ direktorijum

preko njega instalirati android SDK jer downlaod SDK-a sa sajta ne postoji
(uprkos informaciji koju android studio pruza uz beskorisni link)

ne znam da li je dalje neophodno zadrzati android studio, plasim se da ga obrisem jer je projekat jedva proradio

## build

prvo skinuti beskrajnu kolicinu javascripta

```
npm install
```
^projekat ima 1253 paketa od kojih zavisi zato sto je to razumna stvar koja ima smisla i apsolutno nista nije pogresno u vezi toga

obavezan korak - pomoliti se bogovima npm-a da se nece dogoditi beskonacna cirkularna neusaglasenost paketa i ostale posasti koje se neminovno pojave (ovaj put imamo samo 8 sigurnosnih falinki)

```
ionic serve
```
^se moze koristiti za live browser preview


```
ionic build && npx cap sync android && cd android && ./gradlew assembleDebug && cd ..
```
^za build android .apk fajla

lokacija: FOLDER_PROJEKTA/android/app/build/outputs/apk/debug/app-debug.apk

