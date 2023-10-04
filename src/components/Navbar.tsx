import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container ">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="#">
            Home
          </Link>
          <Link className="navbar__link relative" href="/categories">
            Categories
          </Link>
          <Link className="navbar__link relative" href="/tools">
            Tools
          </Link>
          <Link className="navbar__link relative" href="/materials">
            Materials
          </Link>
          <Link className="navbar__link relative" href="/blog">
            Blog
          </Link>
          <Link className="navbar__link relative" href="/hotoffers">
            Hot Offers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
