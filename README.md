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
assets/img/          – zdjęcia (WebP)
robots.txt           – instrukcje dla robotów wyszukiwarek + odnośnik do sitemap.xml
sitemap.xml          – mapa strony dla wyszukiwarek
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

Na stronie są **prawdziwe prace Marcina** (`assets/img/`), w formacie **WebP**
(znacznie lżejszy niż JPG — szybsze ładowanie strony). Oryginały dostarczone
przez klienta leżą w `assets/images/` (pliki `1.webp`–`17.webp`) — to materiał
źródłowy; na stronie używane są ich kopie pod nazwami opisowymi. Oryginalne
pliki JPG zostały usunięte po konwersji — jeśli potrzebna wersja w wyższej
rozdzielczości lub bez znaku wodnego, podmień plik `.webp`, zachowując tę samą
nazwę (nic w kodzie nie trzeba zmieniać).

| Plik na stronie | Gdzie się pojawia | Źródło |
|------|-------------------|--------|
| `hero.webp` | tło sekcji powitalnej | `11` — para na łące, Karkonosze |
| `about.webp` | sekcja „O mnie” | `8` — ceremonia w kościele |
| `svc-wedding.webp` | kafel „Śluby i wesela” | `3` — wesele, emocje |
| `svc-couple.webp` | kafel „Sesje narzeczeńskie i plenerowe” | `1` — para w plenerze |
| `svc-dance.webp` | kafel „Fotografia taneczna i sceniczna” | `10` — samba |
| `svc-mountains.webp` | kafel „Sesje górskie i przygodowe” | `4` — wspinacz na iglicy |
| `svc-food.webp` | kafel „Kulinaria i produkt” | `2` — danie |
| `svc-auto.webp` | kafel „Motoryzacja i eventy” | `6` — Ferrari |
| `contact-bg.webp` | tło sekcji kontaktu | `7` — światło UV |
| `g-climb.webp` | portfolio | `16` — wspinaczka |
| `g-car.webp` | portfolio | `9` — para w aucie |
| `g-cocktail.webp` | portfolio | `15` — drink |
| `g-details.webp` | portfolio | `13` — detale |
| `g-prep.webp` | portfolio | `17` — przygotowania |
| `g-aerial.webp` | portfolio | `14` — akrobatyka |
| `g-pet.webp` | portfolio | `12` — pupil |

Uwagi:
- Wszystkie zdjęcia mają **znak wodny** „Marcin Kaźmieruk Fotografia”.
- Nieużyte źródło: `assets/images/5.webp` (sala konferencyjna) — można dorzucić
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
3. **Domena i SEO** — w kodzie jest placeholder `https://twoja-domena.pl/`.
   Gdy domena będzie znana, wyszukaj i zamień ten tekst we wszystkich trzech
   plikach: `index.html` (canonical, og:url, JSON-LD `url`/`@id`), `robots.txt`
   i `sitemap.xml`.
4. **sameAs w danych strukturalnych** — gdy podmienisz linki Instagram/Facebook
   (patrz punkt 2 wyżej), dodaj je też jako `"sameAs": [...]` w bloku JSON-LD
   w `index.html` — to wzmacnia lokalne SEO (Google wie, że to te same profile).
5. **Dane** — telefon (505 183 969), adres (Jelenia Góra, 58-500) i ocena
   (5,0 / 131 opinii) pochodzą z wizytówki Google; zaktualizuj, gdy się zmienią.

## SEO

- **Dane strukturalne (JSON-LD):** `ProfessionalService` (podtyp `LocalBusiness`)
  z adresem, współrzędnymi geograficznymi, oceną i obszarem działania —
  Google rozpoznaje to jako lokalną firmę usługową.
- **Meta tagi:** canonical, Open Graph (z `og:locale`, `og:url`), Twitter Card,
  tagi geograficzne (`geo.region`, `geo.placename`, `ICBM`).
- **`robots.txt` / `sitemap.xml`:** gotowe do wdrożenia, wymagają tylko
  podmiany placeholdera domeny (patrz sekcja wyżej).
- **Link do Google Maps** przy adresie w sekcji kontaktowej.
- Zdjęcia w formacie WebP — szybsze ładowanie strony, co Google traktuje jako
  sygnał rankingowy (Core Web Vitals).

## Dostępność i jakość

- Responsywna od dużych ekranów po telefon.
- Widoczny fokus klawiatury, obsługa `prefers-reduced-motion`, semantyczny HTML,
  teksty alternatywne zdjęć, dane strukturalne `ProfessionalService`.
# mk-fotografia
