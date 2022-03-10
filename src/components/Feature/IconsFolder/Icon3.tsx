// Icon.tsx
import IcoMoon, { IconComponent } from "react-icomoon";
const iconSet = require("./selection3.json");

const Icon3: typeof IconComponent = (props) => (
  <IcoMoon iconSet={iconSet} {...props} />
);

export default Icon3;
