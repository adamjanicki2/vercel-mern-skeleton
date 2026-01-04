import { ui, Link } from "@adamjanicki/ui";

export default function Footer() {
  return (
    <ui.footer
      vfx={{
        axis: "x",
        align: "center",
        justify: "center",
        paddingY: "xxl",
        borderTop: true,
      }}
    >
      <ui.p vfx={{ fontWeight: 5 }}>
        Cloned from{" "}
        <Link to="https://github.com/adamjanicki2/vercel-mern-skeleton" newTab>
          Vercel MERN Skeleton
        </Link>
        , built by Adam
      </ui.p>
    </ui.footer>
  );
}
