import Link from "next/link";

export const PostCard = ({
  title,
  description,
  url,
  date,
}: {
  title: string;
  description: string;
  url: string;
  date: string;
}) => {
  return (
    <>
      <Link href={url}>
        <button className="flex flex-col items-start w-full gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent h-[10rem]">
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold text-xs">Martian Coder</div>
                <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              </div>
              <div className="ml-auto text-xs text-muted-foreground">
                {date}
              </div>
            </div>
            <div className="text-md font-medium wrap-text line-clamp-2">
              {title}
            </div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            {description}
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <Link href={url}>
              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                Read More
              </div>
            </Link>
          </div>
        </button>
      </Link>
    </>
  );
};
