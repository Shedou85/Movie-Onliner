import Link from "next/link";
import { ERoutes } from "@/utils/routes";

const Header = () => {
  return (
    <>
      <header className=" flex  justify-center gap-20 -center w-[100%] border border-solid-red-500">
        <nav className="gap-20 flex min-h-[50px] border-red-500 p-5">
          <Link
            href={ERoutes.About}
            className="hover:underline hover:text-yellow-400"
          >
            About
          </Link>
          <Link
            href={ERoutes.Movies}
            className="hover:underline hover:text-yellow-400"
          >
            Movie
          </Link>
          <Link
            href={ERoutes.Home}
            className="hover:underline hover:text-yellow-400"
          >
            Contacts
          </Link>
        </nav>
      </header>
    </>
  );
};

export { Header };
