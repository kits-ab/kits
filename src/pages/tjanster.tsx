import {
  Breakout,
  colors,
  ContentHeading,
  Horizontal,
  SectionHeading,
  Lead,
  MainHeading,
  spacing,
  Text,
  types,
  Vertical,
  width,
  Wrapper,
  SubHeading
} from "@kokitotsos/react-components"
import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { Seo } from "../components/Seo"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { PageProps } from "../types/PageProps"

const StyledBreakout = styled(Breakout)`
  background-color: ${colors.background2};
  background-color: var(--background2);
  padding: ${spacing.large}px 0;
`

const StyledSectionHeading = styled(SectionHeading)`
  > span {
    background-color: ${colors.background2} !important;
    background-color: var(--background2) !important;
  }
`

const TjansterPage = ({ location }: PageProps) => {
  return (
    <DefaultLayout location={location}>
      <Seo
        title="Våra Tjänster"
        description="KITS hjälper företag att utveckla och säkra digitala lösningar. Vi kombinerar systemutveckling och cybersäkerhet för att skapa robusta, effektiva och säkra system."
        pathname={location.pathname}
      />
      <Vertical spacing={spacing.large}>
        <MainHeading>Våra tjänster</MainHeading>
        <Lead>
          Vi hjälper företag att utveckla, modernisera och säkra sina digitala lösningar. Vårt
          erbjudande bygger på två kompletterande principer:{" "}
          <span style={{ fontWeight: "bold" }}>Keep IT Simple</span> att skapa tydliga, effektiva
          och hållbara system och <span style={{ fontWeight: "bold" }}>Keep IT Secure</span> att
          säkerställa att de är robusta och trygga över tid.
        </Lead>

        <Lead>
          Genom att kombinera dessa två perspektiv täcker vi hela kedjan från systemutveckling och
          integration till avancerade säkerhetsgranskningar och skydd av verksamhetskritiska
          miljöer. Utforska våra tjänster nedan och se hur vi kan stärka er organisation.
        </Lead>

        <Vertical spacing={spacing.medium}>
          <Link to="/teknik-och-utveckling" style={{ textDecoration: "none", color: "inherit" }}>
            <SectionHeading>
              Keep IT Simple
              <br />
              Teknik & utveckling
            </SectionHeading>
          </Link>
          <Text>
            <p>
              Vi utvecklar moderna, skalbara och lättförvaltade digitala lösningar inom frontend,
              backend, cloud och integration. Med Keep IT Simple i grunden bygger vi system som är
              tydliga, effektiva och lätta att vidareutveckla, men alltid med Keep IT Secure som en
              naturlig del av arkitektur och arbetssätt. Våra konsulter förstärker utvecklingsteam,
              leder tekniska initiativ och tar helhetsansvar för att leverera plattformar som håller
              långsiktigt.
            </p>
          </Text>

          <Horizontal
            breakpoint={width.tablet}
            distribute={true}
            spacing={spacing.large}
            alignVertical={types.Alignment.Start}
          >
            <Vertical spacing={spacing.small}>
              <Link
                to="/teknik-och-utveckling/systemutveckling"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ContentHeading>Systemutveckling</ContentHeading>
              </Link>
              <Text>
                <p>
                  <SubHeading>Tjänstekategorier</SubHeading>
                </p>
                <ul>
                  <li>Frontend</li>
                  <li>Backend</li>
                  <li>Fullstack</li>
                  <li>Arkitektur</li>
                </ul>
                <p>
                  <SubHeading>Områden</SubHeading>
                </p>
                <ul>
                  <li>Webb & API</li>
                  <li>Cloud-native</li>
                  <li>Mobilappar</li>
                </ul>
              </Text>
            </Vertical>

            <Vertical spacing={spacing.small}>
              <Link
                to="/teknik-och-utveckling/integration"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ContentHeading>Integration</ContentHeading>
              </Link>
              <Text>
                <p>
                  <SubHeading>Tjänstekategorier</SubHeading>
                </p>
                <ul>
                  <li>Systemintegration</li>
                  <li>API-utveckling</li>
                </ul>
                <p>
                  <SubHeading>Områden</SubHeading>
                </p>
                <ul>
                  <li>ERP/CRM</li>
                  <li>E-handel</li>
                  <li>IoT</li>
                  <li>Molnintegrationer</li>
                </ul>
              </Text>
            </Vertical>

            <Vertical spacing={spacing.small}>
              <Link
                to="/teknik-och-utveckling/projektledning"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ContentHeading>Projektledning</ContentHeading>
              </Link>
              <Text>
                <p>
                  <SubHeading>Tjänstekategorier</SubHeading>
                </p>
                <ul>
                  <li>Projektledning</li>
                  <li>Leveransledning</li>
                </ul>
                <p>
                  <SubHeading>Områden</SubHeading>
                </p>
                <ul>
                  <li>Systemutveckling</li>
                  <li>Införandeprojekt</li>
                </ul>
              </Text>
            </Vertical>
          </Horizontal>
        </Vertical>
      </Vertical>

      <StyledBreakout>
        <Wrapper>
          <Vertical spacing={spacing.medium}>
            <Link to="/cybersakerhet" style={{ textDecoration: "none", color: "inherit" }}>
              <StyledSectionHeading>
                Keep IT Secure
                <br />
                Cybersäkerhet
              </StyledSectionHeading>
            </Link>
            <Text>
              <p>
                Vi hjälper organisationer att skydda applikationer, plattformar och
                verksamhetskritiska miljöer genom säkerhetsgranskningar, arkitekturstöd,
                utbildningar och specialiserade OT-tjänster. Med Keep IT Secure som grund
                säkerställer vi att lösningar är motståndskraftiga, följer regelverk och klarar de
                krav som ställs i dagens hotlandskap. Samtidigt arbetar vi enligt Keep IT Simple i
                våra processer, tydliga analyser, konkreta rekommendationer och lösningar som är
                praktiska att implementera i er verksamhet.
              </p>
            </Text>

            <Horizontal
              breakpoint={width.tablet}
              distribute={true}
              spacing={spacing.large}
              alignVertical={types.Alignment.Start}
            >
              <Vertical spacing={spacing.small}>
                <Link
                  to="/cybersakerhet/it-sakerhet"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ContentHeading>IT-säkerhet</ContentHeading>
                </Link>
                <Text>
                  <p>
                    <SubHeading>Tjänstekategorier</SubHeading>
                  </p>
                  <ul>
                    <li>Penetrationstestning</li>
                    <li>Kodgranskning och kvalitetssäkring</li>
                    <li>Säker systemdesign och arkitektur</li>
                    <li>Utbildning och kompetensstöd</li>
                  </ul>
                  <p>
                    <SubHeading>Områden</SubHeading>
                  </p>
                  <p>
                    <SubHeading>Programvara och moln</SubHeading>
                  </p>
                  <ul>
                    <li>Applikationssäkerhet / Mobilsäkerhet</li>
                    <li>Molnsäkerhet (AWS och Azure)</li>
                  </ul>
                  <p>
                    <SubHeading>Utrustning och system</SubHeading>
                  </p>
                  <ul>
                    <li>Säkerhet för uppkopplade enheter (IoT)</li>
                    <li>Säkerhet i inbyggda system</li>
                    <li>Fordonssäkerhet</li>
                  </ul>
                </Text>
              </Vertical>

              <Vertical spacing={spacing.small}>
                <Link
                  to="/cybersakerhet/ot-sakerhet"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ContentHeading>OT-säkerhet</ContentHeading>
                </Link>
                <Text>
                  <p>
                    <SubHeading>Tjänstekategorier</SubHeading>
                  </p>
                  <ul>
                    <li>Säkerhetsgranskning och arkitektur för OT-miljöer</li>
                    <li>Säker systemdesign och arkitektur</li>
                    <li>Utbildning och kompetensstöd</li>
                  </ul>
                  <p>
                    <SubHeading>Områden</SubHeading>
                  </p>
                  <ul>
                    <li>Industriella styrsystem (ICS)</li>
                    <li>SCADA-system</li>
                    <li>DCS (Distributed Control Systems)</li>
                    <li>Kritisk infrastruktur</li>
                  </ul>
                </Text>
              </Vertical>
            </Horizontal>
          </Vertical>
        </Wrapper>
      </StyledBreakout>

      <Wrapper>
        <Vertical spacing={spacing.medium} style={{ marginTop: spacing.large }}>
          <SectionHeading>Paketerade erbjudanden</SectionHeading>
          <Text>
            <p>
              Våra paketerade erbjudanden är tydligt avgränsade tjänster med definierat innehåll,
              metodik och leveransformat. De är framtagna för att snabbt ge er konkreta resultat,
              oavsett om ni behöver testa säkerheten i ett system, stärka skyddet i en driftkritisk
              miljö eller höja kompetensen i utvecklingsteamet.
            </p>
          </Text>

          <Horizontal
            breakpoint={width.tablet}
            distribute={true}
            spacing={spacing.large}
            alignVertical={types.Alignment.Start}
          >
            <Vertical spacing={spacing.small}>
              <Link
                to="/cybersakerhet/pentest"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ContentHeading>Pentest</ContentHeading>
              </Link>
              <Text>
                <p>
                  Identifiera sårbarheter innan angripare gör det. Vi utför manuella och
                  automatiserade penetrationstester av applikationer, infrastrukturer, molnmiljöer
                  och IoT-system.
                </p>
              </Text>
            </Vertical>

            <Vertical spacing={spacing.small}>
              <Link
                to="/cybersakerhet/ot-sakerhetsexpert"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ContentHeading>OT-säkerhetsexpert</ContentHeading>
              </Link>
              <Text>
                <p>
                  Löpande stöd från en dedikerad OT-säkerhetsspecialist. Få hjälp med strategi,
                  arkitektur, riskhantering och compliance (NIS2, IEC 62443).
                </p>
              </Text>
            </Vertical>

            <Vertical spacing={spacing.small}>
              <Link
                to="/cybersakerhet/utbildning-applikationssakerhet"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ContentHeading>Utbildning i applikationssäkerhet</ContentHeading>
              </Link>
              <Text>
                <p>
                  En praktisk utbildning som ger utvecklare och DevOps-team kunskap att förebygga
                  vanliga sårbarheter. Baserad på OWASP ASVS och OWASP Top 10.
                </p>
              </Text>
            </Vertical>
          </Horizontal>
        </Vertical>
      </Wrapper>
    </DefaultLayout>
  )
}

export default TjansterPage
