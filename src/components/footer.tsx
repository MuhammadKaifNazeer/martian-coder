import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="border-t border-neutral-100 dark:border-white/[0.1] py-20 bg-background mt-4">
        <div className="container text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start">
          <div>
            <div className="mr-4 md:flex mb-4">
              <Link
                href="/"
                className="flex items-center justify-start space-x-2 text-2xl font-bold text-center text-neutral-600 dark:text-gray-100 mr-10 py-0"
              >
                <div className="flex flex-col">
                  <h1 className="text-black dark:text-white font-sans">
                    Martian Coder
                  </h1>
                </div>
              </Link>
            </div>
            <div>
              Brought to you by{" "}
              <Link
                target="__blank"
                className="dark:text-sky-500 text-neutral-600 font-medium"
                href="https://bento.me/muhammadkaifnazeer"
              >
                Muhammad Kaif Nazeer
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <Link
                href="/"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Home
              </Link>
              <Link
                href="https://muhammadkaifnazeer.vercel.app"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Portfolio
              </Link>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              <Link
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="https://x.com/MuhammadKaif999"
              >
                Twitter
              </Link>
              <Link
                target="__blank"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="https://discord.gg/yZpeqXgqNc"
              >
                Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
