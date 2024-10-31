import { AiOutlineMenu } from "react-icons/ai"; // Import the AiOutlineMenu icon
import "./LowerHeader.css";

function LowerHeader() {
  return (
    <div className="lowerHeader">
      <div className="lowerHeader__left">
        {/* "All" with the AiOutlineMenu icon */}
        <span className="lowerHeader__link">
          <AiOutlineMenu className="menuIcon" /> All
        </span>
        <span className="lowerHeader__link">Today Deals</span>
        <span className="lowerHeader__link">Customer Service</span>
        <span className="lowerHeader__link">Registry</span>
        <span className="lowerHeader__link">Gift Cards</span>
        <span className="lowerHeader__link">Sell</span>
      </div>
    </div>
  );
}

export default LowerHeader;
