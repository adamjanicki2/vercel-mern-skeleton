import { useAlert } from "src/hooks";
import "src/components/alert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons";

const TYPE_TO_ICON = {
  success: <FontAwesomeIcon icon={faCircleCheck} className="success" />,
  error: <FontAwesomeIcon icon={faCircleExclamation} className="error" />,
  info: <FontAwesomeIcon icon={faCircleInfo} className="info" />,
  warning: <FontAwesomeIcon icon={faCirclePause} className="warning" />,
} as const;

const InnerAlert = () => {
  const { alert } = useAlert();
  if (!alert) return null;
  const { type, message } = alert;
  return (
    <div className={`flex items-center pa3 fw5 bg-white ba fade ${type}`}>
      {TYPE_TO_ICON[type]}
      <p className="ma0 ml2 default-color">{message}</p>
    </div>
  );
};

const Alert = () => {
  const alert = InnerAlert();
  return (
    <div className={`toast alert-${alert ? "visible" : "hidden"}`}>{alert}</div>
  );
};

export default Alert;
