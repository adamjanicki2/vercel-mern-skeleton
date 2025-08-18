import PageWrapper from "src/components/PageWrapper";

export default function About() {
  return (
    <PageWrapper title="About">
      <p className="ph4 f4 fw5 dark-gray tc">
        This is a skeleton that can you can use to build a web app. It uses a
        React frontend, an express backend, and a MongoDB database. You can
        deploy it to Vercel for free. In your editor, search for{" "}
        <code>skeleton</code> to find all places where you should make your own
        changes.
      </p>
    </PageWrapper>
  );
}
