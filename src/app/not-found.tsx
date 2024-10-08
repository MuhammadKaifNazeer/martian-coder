import { HomeLayout } from "fumadocs-ui/home-layout";

const NotFound = () => {
  return (
    <HomeLayout
      nav={{
        title: "Martian Coder",
      }}
      githubUrl="https://github.com/MuhammadKaifNazeer"
    >
      <div className="text-center h-screen w-full flex flex-col items-center justify-center">
        <p className="my-4 text-4xl font-bold">404 Not Found</p>
      </div>
    </HomeLayout>
  );
};

export default NotFound;
