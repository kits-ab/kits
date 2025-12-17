import {
  ContentHeading,
  Lead,
  MainHeading,
  spacing,
  Text,
  Vertical
} from "@kokitotsos/react-components"
import * as React from "react"
import { Helmet } from "react-helmet"

import { DefaultLayout } from "../../layouts/DefaultLayout"
import { PageProps } from "../../types/PageProps"

const ProjektledningPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="Projektledning">
        <meta
          name="description"
          content="Våra erfarna projektledare driver komplexa tekniska projekt i mål. Vi erbjuder ledning inom systemutveckling, agila metoder och teknisk leveransansvar."
        />
      </Helmet>
      <Vertical spacing={spacing.large}>
        <MainHeading>Projektledning</MainHeading>
        <Lead>
          Vi leder tekniska projekt med fokus på struktur, resultat och kvalitet. Våra projektledare
          och leveransledare säkerställer att utvecklingsteam, produktägare och verksamhet arbetar
          mot samma mål och att lösningar levereras framgångsrikt.
        </Lead>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>Hur vi arbetar</ContentHeading>
          <Text>
            <p>
              Vi kombinerar teknisk förståelse med praktisk ledarskapserfarenhet. Våra projektledare
              driver initiativ inom systemutveckling, integration, införanden och moderniseringar.
              Vi anpassar metodik efter uppdrag, från agila arbetssätt till mer traditionell
              projektstyrning när situationen kräver det.
            </p>
            <p>
              Med Keep IT Simple skapar vi tydlighet och fokus. Med Keep IT Secure säkerställer vi
              att risker hanteras och att projektet landar i en hållbar, robust lösning.
            </p>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>Vi kan hjälpa er med:</ContentHeading>
          <Text>
            <ul>
              <li>Projektledning för utvecklings- och införandeprojekt</li>
              <li>Leveransledning och koordinering av team</li>
              <li>Stöd till produktägare och verksamhetsansvariga</li>
              <li>Planering, roadmap och prioriteringsstöd</li>
              <li>Riskhantering och kvalitetssäkring</li>
              <li>Styrning av externa leverantörer och partners</li>
            </ul>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>Varför välja KITS som projektpartner?</ContentHeading>
          <Text>
            <p>
              För att vi kombinerar teknisk förståelse med strukturerad leveransförmåga. Vi leder
              projekt från start till mål och skapar de förutsättningar som krävs för att teamet ska
              kunna leverera.
            </p>
          </Text>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export default ProjektledningPage
