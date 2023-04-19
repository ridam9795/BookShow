import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import FilterBox from "./FilterBox";

function FilterAccordion(props) {
  return (
    <MDBAccordion borderless initialActive={0}>
      {Object.keys(props.filter).map((category, index) => {
        return (
          <MDBAccordionItem
            collapseId={index + 1}
            headerTitle={category}
            className="my-2"
            key={index}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexFlow: "wrap",
              }}
              key={index}
            >
              {props.filter[category].map((item, i) => {
                return <FilterBox name={item} key={i} />;
              })}
            </div>
          </MDBAccordionItem>
        );
      })}
    </MDBAccordion>
  );
}
export default FilterAccordion;
