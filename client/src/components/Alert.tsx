import { useEffect, useState } from "react";
import useAlert from "src/hooks/useAlert";
import AlertBase from "@adamjanicki/ui/components/Alert";
import { Icon, Animated } from "@adamjanicki/ui";

const TYPE_TO_ICON = {
  success: "check-circle",
  error: "x-circle",
  warning: "warning-circle",
  info: "info-circle",
} as const;

export default function Alert() {
  {
    const { alert } = useAlert();
    const [cachedAlert, setCachedAlert] = useState(alert);

    useEffect(() => {
      if (alert) {
        setCachedAlert(alert);
      }
    }, [alert]);

    const visible = Boolean(alert);
    const alertToRender = alert || cachedAlert;

    return (
      <Animated
        visible={visible}
        vfx={{ pos: "fixed", z: "max" }}
        animateFrom={{ style: { opacity: 0, bottom: 16 } }}
        animateTo={{ style: { opacity: 1, bottom: 32 } }}
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        {!alertToRender ? null : (
          <AlertBase
            type={alertToRender.type}
            vfx={{ axis: "x", align: "center", gap: "s", width: "max" }}
          >
            <Icon size="s" icon={TYPE_TO_ICON[alertToRender.type]} />
            {alertToRender.message}
          </AlertBase>
        )}
      </Animated>
    );
  }
}
