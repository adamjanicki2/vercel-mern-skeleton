import PageWrapper from "src/components/PageWrapper";
import Link from "src/components/Link";

export default function NotFound() {
  return (
    <PageWrapper title="404">
      <p className="ph4 f4 fw5 dark-gray tc">
        Oops! The requested page does not exist.
        <br />
        Try going <Link to="/">home</Link>.
      </p>
    </PageWrapper>
  );
}
