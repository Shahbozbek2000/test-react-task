import { Spinner } from "react-bootstrap";
import { systemColors } from "../../assets/styles/colors";

export default function SpinnerComponent() {
  return (
    <div>
      <Spinner
        animation="border"
        style={{
          color: `${systemColors.mainBlue}`,
          width: "20px",
          height: "20px",
        }}
      />
    </div>
  );
}
