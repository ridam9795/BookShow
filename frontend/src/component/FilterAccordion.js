import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import FilterBox from "./FilterBox";

function FilterAccordion() {
  return (
    <MDBAccordion borderless initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle="Date">
        <div
          style={{ display: "flex", flexDirection: "row", flexFlow: "wrap" }}
        >
          <FilterBox name="Today" />
          <FilterBox name="Tomorrow" />
          <FilterBox name="This Weekend" />
        </div>
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={2}
        headerTitle="Language"
      ></MDBAccordionItem>
      <MDBAccordionItem
        collapseId={3}
        headerTitle="Categories"
      ></MDBAccordionItem>
      <MDBAccordionItem collapseId={4} headerTitle="Genre"></MDBAccordionItem>
    </MDBAccordion>
  );
}
export default FilterAccordion;
