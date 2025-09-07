import Page from "src/components/Page";
import Link from "src/components/Link";

export default function NotFound() {
  return (
    <Page title="404">
      <p className="ph4 f4 fw5 dark-gray tc">
        Oops! The requested page does not exist.
        <br />
        Try going <Link to="/">home</Link>.
      </p>
    </Page>
  );
}
