
import { Tooltip } from 'react-tooltip';

const InfoTooltip = () => (
  <div>
    <svg
      data-tooltip-id="info-tooltip"
      data-tooltip-content="El número al lado del carrito indica la cantidad de artículos añadidos"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="28"
      height="28"
    >
      <path fill="#4CAF50" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
    </svg>
    <Tooltip id="info-tooltip" place="bottom" type="dark" effect="solid" />
  </div>
);

export default InfoTooltip;
