import { Page, PageSection, PageSectionVariants } from "@patternfly/react-core";
import React from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Landing from "./components/landing/landing";

function App() {
  return (
    <div>
      <Page header={<Header />}></Page>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
