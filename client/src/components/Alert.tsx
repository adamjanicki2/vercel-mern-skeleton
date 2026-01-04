import { useEffect, useState } from "react";
import useAlert from "src/hooks/useAlert";
import { Icon, Animated, Alert as UIAlert } from "@adamjanicki/ui";
import {
  infoCircle,
  xCircle,
  warningCircle,
  checkCircle,
} from "@adamjanicki/ui/icons";

const TYPE_TO_ICON = {
  success: checkCircle,
  error: xCircle,
  warning: warningCircle,
  info: infoCircle,
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
          <UIAlert
            type={alertToRender.type}
            vfx={{ axis: "x", align: "center", gap: "s", width: "max" }}
          >
            <Icon size="s" icon={TYPE_TO_ICON[alertToRender.type]} />
            {alertToRender.message}
          </UIAlert>
        )}
      </Animated>
    );
  }
}
