import React from "react";
import { StyledCheckboxWrapper } from "./style";
import { CheckboxUnchecked, CheckboxChecked } from "../icons";

export const Checkbox = ({ checked }: { checked: boolean }) => {
  return (
    <StyledCheckboxWrapper>
      I'm a checkbox hello there
      {checked ? <CheckboxChecked /> : <CheckboxUnchecked />}
      {/* //         {props.checked ? <Icon glyph="checkmark" /> : <Icon glyph="checkbox" />} */}
      {/* //         <StyledHiddenInput */}
      {/* //           type="checkbox"
//           id={props.id}
//           checked={props.checked}
//           onChange={props.onChange}
//         />
//         {props.children} */}
    </StyledCheckboxWrapper>
  );
};
