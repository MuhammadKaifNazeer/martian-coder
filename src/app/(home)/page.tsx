import { getPages } from "@/app/source";
import { PostCard } from "@/components/post-card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { NotebookPen } from "lucide-react";

const HomePage = () => {
  const posts = getPages().toSorted(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return (
    <main className="container">
      <div className="mb-6 text-2xl font-bold">
        <section className="flex flex-col items-start gap-2 py-8 ">
          <Link
            className="group inline-flex items-center px-0.5 text-sm font-medium"
            href="https://github.com/MuhammadKaifNazeer/mdx_blog"
            target="_blank"
          >
            <NotebookPen className="size-4" />
            <div
              data-orientation="vertical"
              role="none"
              className="shrink-0 bg-border w-[1px] mx-2 h-4"
            ></div>
            <span className="underline-offset-4 group-hover:underline capitalize">
              Write a post
            </span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            Martian Coder
          </h1>
          <p className="max-w-2xl text-[1rem] lg:text-[1.1rem] font-light text-foreground">
            Embark on a cosmic adventure of programming insights, web
            development wisdom, and tech innovation.
          </p>
          <div className="flex w-full items-center justify-start gap-2 py-2">
            <Link
              href="https://x.com/MuhammadKaif999"
              target="_blank"
              className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs"
            >
              Connect on Twitter
            </Link>
            <Link
              href="https://discord.gg/yZpeqXgqNc"
              target="_blank"
              className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs"
            >
              Join Discord
            </Link>
          </div>
        </section>
        <Separator className="mb-8" />
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left pb-10">
        {posts.map((post) => {
          const date = new Date(post.data.date).toLocaleDateString("en-PK", {
            timeZone: "Asia/Karachi",
          });
          return (
            <PostCard
              title={post.data.title}
              description={post.data.description ?? ""}
              url={post.url}
              date={date}
              key={post.url}
            />
          );
        })}
      </div>
    </main>
  );
};

export default HomePage;
