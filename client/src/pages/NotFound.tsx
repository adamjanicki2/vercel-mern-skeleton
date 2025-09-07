import Page from "src/components/Page";
import Link from "src/components/Link";
import { ui } from "@adamjanicki/ui";

export default function NotFound() {
  return (
    <Page title="404">
      <ui.p
        vfx={{
          paddingX: "l",
          fontSize: "m",
          fontWeight: 5,
          color: "muted",
          textAlign: "center",
        }}
      >
        Oops! The requested page does not exist.
        <ui.br />
        Try going <Link to="/">home</Link>.
      </ui.p>
    </Page>
  );
}
