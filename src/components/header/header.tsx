import React from "react";
import {
  Brand,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageHeaderTools,
  PageSection,
  PageSectionVariants,
} from "@patternfly/react-core";

export default function Header() {
  const logoProps = {
    href: "https://patternfly.org",
    onClick: () => console.log("clicked logo"),
    target: "_blank",
  };

  const PageNav = (
    <Nav aria-label="Nav" variant="horizontal">
      <NavList>
        <NavItem itemId={0}>News & Reviews</NavItem>
        <NavItem itemId={1}>About Us</NavItem>
        <NavItem itemId={2}>Partner With Us</NavItem>
      </NavList>
    </Nav>
  );

  return (
    <PageHeader
      logo="Logo"
      logoProps={logoProps}
      headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}
      topNav={PageNav}
    />
  );
}
