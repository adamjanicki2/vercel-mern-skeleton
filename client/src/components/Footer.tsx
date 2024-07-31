import Link from "@adamjanicki/ui/components/Link";

const Footer = () => (
  <footer className="pa4 flex items-center justify-center w-100 bt b--moon-gray">
    <p className="fw5 f5">
      Cloned from{" "}
      <Link
        to="https://github.com/adamjanicki2/vercel-mern-skeleton"
        target="_blank"
        rel="noreferrer"
      >
        Vercel MERN Skeleton
      </Link>
      , built by Adam
    </p>
  </footer>
);

export default Footer;
