# 0001. Dokumentera beslut som ADR

- Datum: 2026-11-12
- Status: Beslutat

## Bakgrund

Beslut om kod och arkitektur har hamnat i PR-beskrivningar, commit-meddelanden och lokala
planeringsfiler. De är svåra att hitta i efterhand, och det syns inte vilka som fortfarande gäller.
Ombyggnaden till grafisk profil 2026 gav många sådana beslut.

## Beslut

Vi dokumenterar beslut om kod och arkitektur som ADR:er (Architecture Decision Records) i
`docs/adr/`, en Markdown-fil per beslut, enligt [mall.md](mall.md). Loggen är levande: ett beslut
som har gällt skrivs inte om, utan ersätts av en ny ADR. Indexet i [README.md](README.md) visar
vilka som gäller.

Inte varje implementationsval behöver en ADR. Skriv en när beslutet påverkar hur framtida kod
skrivs, är svårt att ändra, eller när någon annars skulle fråga "varför är det så här?".

## Konsekvenser

- En ny ADR följer med i samma PR som ändringen och granskas där.
- Små val stannar i commit-meddelanden.
- Inga verktyg behövs, bara Markdown.
