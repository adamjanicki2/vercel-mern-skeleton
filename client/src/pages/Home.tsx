import PageWrapper from "src/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper title="Home">
      <p className="ph4 f4 fw5 dark-gray tc">
        You should run <code>setup.py</code> to auto-rename a bunch of strings.
        <br />
        You can search for <code>skeleton</code> in your editor to find all
        places where you should make your own changes if you really want to do
        it manually
      </p>
    </PageWrapper>
  );
}
