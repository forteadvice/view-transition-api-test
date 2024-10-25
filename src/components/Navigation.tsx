"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import { flushSync } from "react-dom";

export default function Navigation() {
  const pathname = usePathname();
  const [current, setCurrent] = useState(getFirstPath(pathname));

  useEffect(() => {
    // flushSync ensures that the DOM is updated immediately
    // It can however hurt the performance of your app - use carefully
    flushSync(() => {
      setCurrent(getFirstPath(pathname));
    });
  }, [pathname]);

  function getFirstPath(pathname: string) {
    return `/${pathname.split("/")[1]}`;
  }

  const links = [
    { href: "/", text: "Home" },
    { href: "/subpage", text: "A cool subpage" },
    { href: "/articles", text: "Articles" },
  ];

  return (
    <div className="flex justify-center fixed top-6 left-0 w-full z-50">
      <nav className="flex gap-4 bg-white rounded-full px-8 py-2">
        {links.map((link, index) => {
          const { href, text } = link;
          return (
            <span className="relative" key={index}>
              <Link href={href} className="text-lg text-black">
                {text}
              </Link>
              {current === href && (
                <span
                  className="h-0.5 absolute -bottom-0.5 left-0 w-full bg-black rounded-full"
                  style={{ viewTransitionName: "navigation-underline" }}
                />
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
