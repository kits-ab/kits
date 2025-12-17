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

const OTSecExpertPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Helmet title="OT-säkerhetsexpert">
        <meta
          name="description"
          content="Få löpande stöd av en dedikerad OT-säkerhetsspecialist. Vi hjälper er med strategi, NIS2-efterlevnad och säkerhetsarkitektur för driftkritiska miljöer."
        />
      </Helmet>
      <Vertical spacing={spacing.large}>
        <MainHeading>OT-säkerhetsexpert</MainHeading>
        <Lead>
          Organisationer med driftkritiska miljöer behöver ofta löpande stöd i arbetet med att
          planera, prioritera och genomföra säkerhetsåtgärder inom OT, ICS och SCADA. Med vårt
          erbjudande OT-säkerhetsexpert får ni tillgång till en dedikerad OT-säkerhetsspecialist som
          fungerar som rådgivare, bollplank och stöd i både strategiska och operativa beslut.
        </Lead>

        <Vertical spacing={spacing.medium}>
          <Text>
            <p>
              Vår expert hjälper er att navigera regelverk som NIS2 och IEC 62443, prioriterar
              risker, ger råd kring segmentering och arkitektur, samt stöttar verksamhetens
              OT-ansvariga i det dagliga säkerhetsarbetet. Tjänsten kan nyttjas löpande, vid behov
              eller i samband med specifika initiativ såsom uppgraderingar, projekt eller
              revisioner.
            </p>
          </Text>
        </Vertical>

        <Vertical spacing={spacing.medium}>
          <ContentHeading>Vad ni får</ContentHeading>
          <Text>
            <ul>
              <li>Tillgång till en erfaren OT-säkerhetsspecialist</li>
              <li>Rådgivning inom strategi, arkitektur och riskprioritering</li>
              <li>Stöd till OT-ansvariga, driftteam och ledning</li>
              <li>Vägledning i arbetet med NIS2, IEC 62443 och annan compliance</li>
              <li>Underlag för planering, roadmap och säkerhetsinitiativ</li>
              <li>Löpande stöd eller ad hoc, efter era behov</li>
            </ul>
          </Text>
        </Vertical>
      </Vertical>
    </DefaultLayout>
  )
}

export default OTSecExpertPage
