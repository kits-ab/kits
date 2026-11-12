# 0006. Vilande sidor bara i dev-servern

- Datum: 2026-11-12
- Status: Beslutat

## Bakgrund

Några sidor är vilande med flit: sidor med `_`-prefix i `src/pages/` och personsidorna. De byggdes
med den gamla profilen och syns inte på sajten. De behöver kunna granskas utan att publiceras.

## Beslut

Vilande sidor skapas bara i dev-servern, under `/vilande/`, och aldrig i produktionsbygget. Innan
en vilande sida aktiveras ska den byggas om i profil 2026. Att aktivera eller ta bort en vilande
sida är ett eget beslut.

## Konsekvenser

- Vilande sidor kan se ostylade ut i dev-servern tills de byggts om.
- Komponenter som bara används av vilande sidor, till exempel `PersonList`, får ligga kvar.
