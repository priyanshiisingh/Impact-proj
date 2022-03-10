// Icon.tsx
import IcoMoon, { IconComponent } from "react-icomoon";
const iconSet = require("./selection2.json");

const Icon2: typeof IconComponent = (props) => (
  <IcoMoon iconSet={iconSet} {...props} />
);

export default Icon2;
