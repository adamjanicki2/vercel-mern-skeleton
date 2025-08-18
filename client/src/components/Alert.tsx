import { useEffect, useState } from "react";
import useAlert, { type Alert as AlertType } from "src/hooks/useAlert";
import AlertComponent from "@adamjanicki/ui/components/Alert";
import "src/components/alert.css";
import { Animated } from "@adamjanicki/ui";

export default function Alert() {
  const { alert } = useAlert();
  const [savedAlert, setSavedAlert] = useState<AlertType>();

  useEffect(() => {
    if (alert) {
      setSavedAlert(alert);
    }
  }, [alert]);

  return (
    <Animated
      animated={Boolean(alert)}
      className="toast"
      animateFrom={{ style: { opacity: 0 } }}
      animateTo={{ style: { opacity: 1 } }}
    >
      {savedAlert ? (
        <AlertComponent type={savedAlert.type}>
          {savedAlert.message}
        </AlertComponent>
      ) : null}
    </Animated>
  );
}
