import { SvgIcon } from "@mui/material";
import { ReactComponent as Angel } from "./saint.svg";
import { ReactComponent as Devil } from "./wings_64.svg";

export function SaintIcon(props) {
  return <SvgIcon component={Angel} viewBox="0 0 58 58"></SvgIcon>;
}

export function DevilIcon(props) {
  return <SvgIcon component={Devil} viewBox="0 0 58 58"></SvgIcon>;
}
