import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import FilterBox from "./FilterBox";

function FilterAccordion() {
  return (
    <MDBAccordion borderless initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle="Date" className="my-2">
        <div
          style={{ display: "flex", flexDirection: "row", flexFlow: "wrap" }}
        >
          <FilterBox name="Today" />
          <FilterBox name="Tomorrow" />
          <FilterBox name="This Weekend" />
        </div>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle="Language" className="my-2">
        <div
          style={{ display: "flex", flexDirection: "row", flexFlow: "wrap" }}
        >
          <FilterBox name="Hindi" />
          <FilterBox name="English" />
          <FilterBox name="Kannada" />
          <FilterBox name="Tamil" />
          <FilterBox name="Bengali" />
          <FilterBox name="Marathi" />
        </div>
      </MDBAccordionItem>
      <MDBAccordionItem
        collapseId={3}
        headerTitle="Categories"
        className="my-2"
      >
        <div
          style={{ display: "flex", flexDirection: "row", flexFlow: "wrap" }}
        >
          <FilterBox name="Theater" />
          <FilterBox name="Storytelling" />
          <FilterBox name="Improv Theater" />
        </div>
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={4} headerTitle="Genre" className="my-2">
        <div
          style={{ display: "flex", flexDirection: "row", flexFlow: "wrap" }}
        >
          <FilterBox name="Drama" />
          <FilterBox name="Classic" />
          <FilterBox name="Comedy" />
          <FilterBox name="Fantasy" />
        </div>
      </MDBAccordionItem>
    </MDBAccordion>
  );
}
export default FilterAccordion;
