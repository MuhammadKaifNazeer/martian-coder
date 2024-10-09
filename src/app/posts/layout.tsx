import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { sortedByDatePageTree } from "../source";

const RootDocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <DocsLayout
      tree={sortedByDatePageTree}
      nav={{
        title: "Matian Coder",
      }}
      githubUrl="https://github.com/MuhammadKaifNazeer/martian-coder/"
    >
      {children}
    </DocsLayout>
  );
};

export default RootDocsLayout;
