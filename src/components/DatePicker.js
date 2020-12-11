import React, { useState } from "react";
import { StyledDatePicker, StyledButton } from "./styled/StyledDatePicker";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useHistory } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";

function DatePicker() {
  const history = useHistory();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  return (
    <StyledDatePicker>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        ranges={state}
        direction="horizontal"
      />
      <StyledButton onClick={() => history.push("/search")}>
        Search Airbnb
      </StyledButton>
    </StyledDatePicker>
  );
}

export default DatePicker;
