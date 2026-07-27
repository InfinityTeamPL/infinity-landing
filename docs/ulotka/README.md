# Ulotka reklamowa Infinity Tech (A4, dwustronna)

Materiał do druku i do wysyłki mailem. Treść pochodzi ze strony infinityteam.io: cennik z `/cennik`,
etapy współpracy i statystyki ze strony głównej, realizacje z sekcji „Co zbudowaliśmy”.

## Pliki

| Plik | Do czego |
|---|---|
| `ulotka-infinity-tech.pdf` | gotowy do druku, 2 strony A4 (210 × 297 mm) |
| `ulotka-infinity-tech.html` | źródło A4 |
| `ulotka-infinity-tech-a5.pdf` | gotowy do druku, 2 strony A5 (148 × 210 mm) |
| `ulotka-infinity-tech-a5.html` | źródło A5 |

Oba HTML-e są samowystarczalne: fonty Geist i kody QR siedzą w środku pliku.

A5 to nie pomniejszony A4, tylko osobny skład. Wersja na targi i do ręki, A4 na spotkanie
i do wysyłki mailem.

## Co jest na której stronie

**Przód (ciemny).** Nagłówek, zapis prawdziwej rozmowy z publicznego dema głosowego + kod QR do niego,
pas czterech liczb (92% firm bez AI, 2–4 tygodnie, 24/7, od 5 000 zł), cztery obszary usług,
wezwanie do bezpłatnej konsultacji z telefonem i mailem.

**Tył (jasny).** Pięć etapów współpracy z czasami i tym, co klient dostaje na każdym z nich, cennik
wdrożenia i utrzymania, cztery wyróżniki, cztery działające produkty z adresami, dane firmowe,
QR do kalkulatora ROI i drobny druk (ceny netto, brak certyfikatu ISO, status dema PKS Gryfice, NDA).

Kody QR prowadzą do `pks-gryfice-demo.vercel.app` (przód) i `infinityteam.io/kalkulator` (tył).
Oba zostały sprawdzone czytnikiem po wyrenderowaniu.

## Co jest na A5

Połowa powierzchni, więc treść jest przycięta do tego, co realnie pomaga podjąć decyzję.

**Przód.** Ten sam nagłówek i obietnica 2–4 tygodni, cztery liczby, cztery obszary usług
w jednym zdaniu każdy, pas zaufania (dane w Polsce, ElevenLabs, OpenClaw, 23 kanały),
telefon i QR do dema głosowego.

**Tył.** Cztery powody, żeby wybrać nas, a nie kogoś innego (rozmawiasz z osobą, która to
zbuduje; dane w Polsce; bez uwiązania; wycena po audycie). Pod spodem cennik w ramce,
pięć etapów współpracy jako pasek z czasami, trzy działające produkty z adresami,
kontakt, QR do kalkulatora i drobny druk.

Z A4 wypadły: zapis rozmowy z dema (na przód A5 nie ma miejsca, QR zostaje), opisy etapów
współpracy (zostały same nazwy i czasy), czwarta realizacja i dane REGON.

## Druk

- A4 albo A5, dwustronnie, odbicie po **dłuższej krawędzi**
- papier 250–300 g, mat albo soft touch; przód ma dużo granatu, na błysku będą odciski palców
- projekt ma własne marginesy 13–14 mm i nie wymaga spadów. Jeśli drukarnia prosi o spady 3 mm,
  wyeksportuj PDF z opcją „scale to fit” wyłączoną, a spad dołóż w preflightcie drukarni
- kolory są w RGB. Przy większym nakładzie poproś drukarnię o konwersję do CMYK,
  granat `#0A1628` potrafi wyjść ciemniejszy niż na ekranie

## Zmiana treści

Otwórz `ulotka-infinity-tech.html` w edytorze, popraw tekst i zapisz. Fonty i QR są już wklejone
w plik, więc nic nie trzeba instalować. Potem nowy PDF:

```bash
chrome --headless --no-pdf-header-footer \
  --print-to-pdf=docs/ulotka/ulotka-infinity-tech.pdf \
  file://$PWD/docs/ulotka/ulotka-infinity-tech.html
```

W repo Chromium leży w `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`. Można też po prostu
otworzyć plik w przeglądarce i dać drukuj do PDF: marginesy „brak”, tła i grafiki włączone.

Po każdej zmianie tekstu sprawdź, czy nic nie wypadło poza stronę. Najprościej w konsoli przeglądarki:

```js
document.querySelectorAll('.page').forEach((el, i) =>
  console.log('strona', i + 1, 'nadmiar:', el.scrollHeight - el.clientHeight));
```

Obie liczby muszą być zerami.
