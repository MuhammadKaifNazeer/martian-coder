import { HomeLayout } from "fumadocs-ui/home-layout";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <HomeLayout
      nav={{
        title: "Martian Coder",
      }}
      githubUrl="https://github.com/"
    >
      {children}
    </HomeLayout>
  );
};

export default Layout;
