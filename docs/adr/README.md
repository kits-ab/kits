# Arkitekturbeslut (ADR)

Här loggas beslut om kod och arkitektur för kits.se, ett beslut per fil. Loggen är levande: ett
beslut som har gällt skrivs inte om. När något ändras skrivs en ny ADR som ersätter den gamla, och
den gamla får status "Ersatt av NNNN". Så syns både vad som gäller nu och varför det ändrats.

## Så skriver du en ADR

1. Kopiera [mall.md](mall.md) till `NNNN-kort-titel.md` med nästa lediga nummer (gemener, ASCII,
   bindestreck).
2. Fyll i bakgrund, beslut och konsekvenser. Kort räcker.
3. Lägg till den i tabellen nedan.
4. Ersätter den ett äldre beslut: sätt den gamla till "Ersatt av NNNN" och hänvisa bakåt i den nya.
5. Ta med ADR:en i samma PR som ändringen den gäller. Där diskuteras den.

Status är en av: Föreslaget, Beslutat, Ersatt av NNNN, Avvecklat.

## Beslut

| Nr                                             | Beslut                                            | Status   |
| ---------------------------------------------- | ------------------------------------------------- | -------- |
| [0001](0001-dokumentera-beslut-som-adr.md)     | Dokumentera beslut som ADR                        | Beslutat |
| [0002](0002-kits-ui-som-designsystem.md)       | kits-ui som designsystem                          | Beslutat |
| [0003](0003-sajtkomponenter-och-kits-ui.md)    | Sajtspecifika komponenter i `src/components/web/` | Beslutat |
| [0004](0004-tillganglighet-fore-skiss.md)      | Tillgänglighet går före skissen                   | Beslutat |
| [0005](0005-innehall-i-server-html.md)         | Allt innehåll i den server-renderade HTML:en      | Beslutat |
| [0006](0006-vilande-sidor-bara-i-dev.md)       | Vilande sidor bara i dev-servern                  | Beslutat |
| [0007](0007-morkt-tema-styrt-pa-ett-stalle.md) | Mörkt tema, styrt på ett ställe                   | Beslutat |
| [0008](0008-last-beroenden.md)                 | Låsta beroenden                                   | Beslutat |
| [0009](0009-projektets-sprak-ar-svenska.md)    | Projektets språk är svenska                       | Beslutat |
