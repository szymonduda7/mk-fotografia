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

## ⚠️ Zdjęcia są tymczasowe (placeholdery)

Wszystkie zdjęcia w `assets/img/` to nastrojowe ujęcia poglądowe (Unsplash),
dobrane pod klimat strony. **Przed publikacją podmień je na prawdziwe prace
Marcina** — wystarczy zachować te same nazwy plików, a nic w kodzie nie trzeba
zmieniać:

| Plik | Gdzie się pojawia | Sugerowane zdjęcie |
|------|-------------------|--------------------|
| `hero.jpg` | tło sekcji powitalnej (poziome, szerokie) | mocne ujęcie w złotym świetle |
| `wedding-couple.jpg` | kafel „Śluby i wesela” + portfolio | para młoda, emocje |
| `wedding-beach.jpg` | portfolio | para młoda, plener |
| `portrait.jpg` | kafel „Sesje portretowe” | portret / sesja |
| `dance.jpg` | kafel „Fotografia taneczna” + portfolio | taniec, ruch |
| `mountain-adventure.jpg` | kafel „Sesje górskie” + portfolio | szczyt / skała / szlak |
| `mountain-golden.jpg` | portfolio | góry o zachodzie |
| `mountain-bluehour.jpg` | tło sekcji kontaktu | góry o zmierzchu |
| `night-sky.jpg` | portfolio (duży kafel) | noc / gwiazdy |
| `photographer-gear.jpg` | sekcja „O mnie” | warsztat / kulisy |

Jeśli któregoś pliku zabraknie, w jego miejscu pokaże się elegancki gradient
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
