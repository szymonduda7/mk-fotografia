# Marcin Kaźmieruk Fotografia — landing page

Jednostronicowa wizytówka (landing page) dla fotografa Marcina Kaźmieruka
z Jeleniej Góry. Statyczna strona — czysty HTML / CSS / JS, bez frameworków
i bez procesu budowania.

## Podgląd

Otwórz `index.html` w przeglądarce. Dla pełnej obsługi (czcionki, ścieżki)
najlepiej uruchomić lokalny serwer, np.:

```bash
python3 -m http.server 8000
# następnie wejdź na http://localhost:8000
```

## Struktura

```
index.html          – treść strony
css/styles.css       – wygląd (kolory, typografia, układ, animacje)
js/main.js           – menu mobilne, nagłówek, animacje wejścia, formularz
assets/img/          – zdjęcia
image.png            – materiał źródłowy (zrzut z Google) — nie jest używany na stronie
reviews.json         – materiał źródłowy z opiniami
```

## Kierunek wizualny

- **Motyw przewodni: „maluję światłem”.** Ciemna, zmierzchowa baza pozwala,
  by to światło na zdjęciach mówiło — dokładnie tak, jak piszą o pracy Marcina
  klienci w opiniach.
- **Kolory:** ciepłe złoto „złotej godziny” na tle chłodnego błękitu
  Karkonoszy o zmierzchu.
- **Typografia:** Fraunces (serif, nagłówki) + Manrope (tekst) + JetBrains Mono
  (podpisy w stylu metadanych zdjęcia / kliszy).
- **Sygnatura:** ciepła poświata światła wokół nagłówka + subtelne ziarno filmu.

## Zdjęcia

Na stronie są **prawdziwe prace Marcina** (`assets/img/`). Oryginały dostarczone
przez klienta leżą w `assets/images/` (pliki `1.jpg`–`17.jpg`) — to materiał
źródłowy; na stronie używane są ich kopie pod nazwami opisowymi:

| Plik na stronie | Gdzie się pojawia | Źródło |
|------|-------------------|--------|
| `hero.jpg` | tło sekcji powitalnej | `11` — para na łące, Karkonosze |
| `about.jpg` | sekcja „O mnie” | `8` — ceremonia w kościele |
| `svc-wedding.jpg` | kafel „Śluby i wesela” | `3` — wesele, emocje |
| `svc-couple.jpg` | kafel „Sesje narzeczeńskie i plenerowe” | `1` — para w plenerze |
| `svc-dance.jpg` | kafel „Fotografia taneczna i sceniczna” | `10` — samba |
| `svc-mountains.jpg` | kafel „Sesje górskie i przygodowe” | `4` — wspinacz na iglicy |
| `svc-food.jpg` | kafel „Kulinaria i produkt” | `2` — danie |
| `svc-auto.jpg` | kafel „Motoryzacja i eventy” | `6` — Ferrari |
| `contact-bg.jpg` | tło sekcji kontaktu | `7` — światło UV |
| `g-climb.jpg` | portfolio | `16` — wspinaczka |
| `g-car.jpg` | portfolio | `9` — para w aucie |
| `g-cocktail.jpg` | portfolio | `15` — drink |
| `g-details.jpg` | portfolio | `13` — detale |
| `g-prep.jpg` | portfolio | `17` — przygotowania |
| `g-aerial.jpg` | portfolio | `14` — akrobatyka |
| `g-pet.jpg` | portfolio | `12` — pupil |

Uwagi:
- Wszystkie zdjęcia mają **znak wodny** „Marcin Kaźmieruk Fotografia”. Jeśli
  woli wersje bez znaku lub w wyższej rozdzielczości — wystarczy podmienić pliki,
  zachowując te same nazwy (nic w kodzie nie trzeba zmieniać).
- Nieużyte źródło: `assets/images/5.jpg` (sala konferencyjna) — można dorzucić
  do portfolio jako dodatkowy kafel.
- Jeśli któregoś pliku zabraknie, w jego miejscu pokaże się elegancki gradient
  (strona nigdy nie „rozsypie się” od brakującego obrazka).

## Co warto uzupełnić przed publikacją

1. **Formularz kontaktowy** — obecnie pokazuje tylko potwierdzenie po stronie
   przeglądarki (bez wysyłki). Aby wiadomości faktycznie przychodziły, podłącz
   usługę typu [Formspree](https://formspree.io) lub własny backend:
   w `index.html` ustaw `action`/`method` formularza `#contact-form`,
   a w `js/main.js` usuń `e.preventDefault()` (komentarz w pliku wskazuje miejsce).
2. **Linki do social mediów** — w sekcji kontaktu i w stopce podmień `href="#"`
   na adresy Instagrama i Facebooka.
3. **Domena i SEO** — uzupełnij puste pola `url` / `@id` w bloku danych
   strukturalnych (JSON-LD) oraz adres w meta `og:image`, gdy znana będzie domena.
4. **Dane** — telefon (505 183 969), adres (Jelenia Góra, 58-500) i ocena
   (5,0 / 131 opinii) pochodzą z wizytówki Google; zaktualizuj, gdy się zmienią.

## Dostępność i jakość

- Responsywna od dużych ekranów po telefon.
- Widoczny fokus klawiatury, obsługa `prefers-reduced-motion`, semantyczny HTML,
  teksty alternatywne zdjęć, dane strukturalne `Photograph`.
# mk-fotografia
