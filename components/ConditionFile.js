import { GrStatusGoodSmall } from "react-icons/gr";
import { MdCancel } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

function Condition({ condition_evse, condition_status }) {
  if (condition_evse == "SI") {
    return <IoMdCheckmark style={{ color: "green", fontSize: "16px" }} />;
  } else if (condition_evse == "NO") {
    return <MdCancel style={{ color: "red", fontSize: "16px" }} />;
  } else if (condition_status == "SI") {
    return <GrStatusGoodSmall style={{ color: "green", fontSize: "16px" }} />;
  } else if (condition_status == "NO") {
    return <GrStatusGoodSmall style={{ color: "red", fontSize: "16px" }} />;
  }
}

export default Condition;
