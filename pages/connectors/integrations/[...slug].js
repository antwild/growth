import React from "react";

import { useRouter } from "next/router";

import Head from "next/head";
import ConnectorHero from "../../../components/ConnectorHero";
import PageCta from "../../../components/PageCta";
import AppStream from "../../../components/AppStream";
import ConnectorSteps from "../../../components/ConnectorSteps";
import data from "../../api/data.json";
import style from "./slug.module.css";
import Link from 'next/link';

const DEFAULT_CONNECTORS = data.connectors;

const findConnectors = (slug) => {
  const slugConnectors = slug.split("-")
  const filteredConnectors = {};

  // Ensures the services render in the same order they are in the URL
  slugConnectors.map((slugConnector, ind) => {
    // Fallbacks if the service requested is not found
    const sfdc = DEFAULT_CONNECTORS[0];
    const asana = DEFAULT_CONNECTORS[1];

    // Find and render requested services in page and child components, using SDFC as a
    // fallback if the service in the URL isn't found in data.json
    const obj = DEFAULT_CONNECTORS.filter((connector) => connector.slug === slugConnector); 
    if(!obj[0]){
      filteredConnectors[`name_${ind}`] = sfdc.name;
      filteredConnectors[`slug_${ind}`] = sfdc.slug;
      filteredConnectors[`logo_${ind}`] = sfdc.logo;
      // To avoid Salesforce appearing for both services when both incorrect,
      // the second will fallback to Asana
      if(ind == 1 && filteredConnectors["name_0"] === "Salesforce"){
        filteredConnectors[`name_${ind}`] = asana.name;
        filteredConnectors[`slug_${ind}`] = asana.slug;
        filteredConnectors[`logo_${ind}`] = asana.logo;
      };
    } else {
      filteredConnectors[`name_${ind}`] = obj[0].name;
      filteredConnectors[`slug_${ind}`] = obj[0].slug;
      filteredConnectors[`logo_${ind}`] = obj[0].logo;
    };
  });

  return filteredConnectors;
};

export default function Connectors() {
  const router = useRouter();
  const slug = router.query.slug || [];
  if (!slug[0]) {
    return <div>loading...</div>;
  }
  
  const combinationConnectors = findConnectors(slug[0]);

  // Use service to link to docs page. Ternary statement as Microsoft Teams slug needs mapping
  const serviceOneLink = combinationConnectors.slug_0 == "microsoftteams" ? "microsoft-teams" : combinationConnectors.slug_0;
  const serviceTwoLink = combinationConnectors.slug_1 == "microsoftteams" ? "microsoft-teams" : combinationConnectors.slug_1;

  return (
    <>
      <Head>
        <title>{combinationConnectors.name} Integrations + Automations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ConnectorHero connector={combinationConnectors} />

      <div
        style={{
          padding: "2em",
          textAlign: "center"
        }}
      >
        <h3 className="h3" style={{fontFamily: "Akkurat", fontSize: "1.125em", fontWeight: "300"}}>By utilising Tray.io, transferring data between {combinationConnectors.name_0} and {combinationConnectors.name_1} becomes second nature</h3>
        <ConnectorSteps connector={combinationConnectors} />
      </div>

      <div 
        style={{
          maxWidth: "1120px",
          margin: "0 auto"
        }}
      >
        <div className={style.learnButtonsContainer}>
          <Link href={"https://tray.io/documentation/connectors/service/" + serviceOneLink}>
            <button className={style.learnButton}>Learn about our {combinationConnectors.name_0} connector</button>
          </Link>
          <Link href={"https://tray.io/documentation/connectors/service/" + serviceTwoLink}>
            <button className={style.learnButton}>Learn about our {combinationConnectors.name_1} connector</button>
          </Link>
        </div>

        <h2 className={style.solutionsHeader}>{combinationConnectors.name_0} and {combinationConnectors.name_1} Solutions</h2>
        
        <div
          style={{
            display: "grid",
            gridGap: "2em",
            gridTemplateColumns: "1fr 1fr"
          }}
        >
  
          <p style={{ lineHeight: "1.625em", fontFamily: "var(--brand-brown-font)" }}>Business professionals that want to integrate {combinationConnectors.name_0} with the software tools that they use every day love that the Tray Platform gives them the power to sync all data, connect deeply into apps, and configure flexible workflows with clicks-or-code.</p>
          <ul>
            <li className={style.bullets}>
              <img src="/checkmark.svg"></img>
              <p className={style.checkmarkText}>Integrate with any app with our unique Universal Connector</p></li>
            <li className={style.bullets}>
              <img src="/checkmark.svg"></img>
              <p className={style.checkmarkText}>Easily use our drag-and-drop workflow builder</p></li>
            <li className={style.bullets}>
              <img src="/checkmark.svg"></img>
              <p className={style.checkmarkText}>Partner with our CS team and receive hands-on {combinationConnectors.name_0} support</p></li>
          </ul>
        </div>
      </div>

      <AppStream connectors={DEFAULT_CONNECTORS} />
      <PageCta />
    </>
  );
}