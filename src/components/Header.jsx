"use client";
import { usePathname } from "next/navigation";
import "@/styles/header.scss";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LangSwitcher from "./LangSwitcher";

const Header = () => {
  const pathname = usePathname();
  const [menuOpened, setMenuOpened] = useState(false);

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  const closeMenu = () => {
    setMenuOpened(false);
    setButtonActive(false);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header>
        <div className="_container">
          <div className="row">
            <Link href="/">
              <img src="/images/Logo.svg" alt="Logo" />
            </Link>
            <nav>
              <Link href="/" className={pathname === "/" ? "current" : ""}>
                Home
              </Link>
              <Link
                href="/agency"
                className={pathname === "/agency" ? "current" : ""}
              >
                Agency
              </Link>
              <Link
                href="/services"
                className={pathname === "/services" ? "current" : ""}
              >
                Services
              </Link>
              <Link
                href="/solutions"
                className={pathname === "/solutions" ? "current" : ""}
              >
                Solutions
              </Link>
              <Link
                href="/results"
                className={pathname === "/results" ? "current" : ""}
              >
                Results
              </Link>
              <Link
                href="/resources"
                className={pathname === "/resources" ? "current" : ""}
              >
                Resources
              </Link>
              <Link
                href="/pricing"
                className={pathname === "/pricing" ? "current" : ""}
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className={pathname === "/faq" ? "current" : ""}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className={pathname === "/contact" ? "current" : ""}
              >
                Contact
              </Link>
            </nav>
            <div className="language">
              <LangSwitcher />
            </div>
            <Link href="/request-form" className="head-button">
              Get started
            </Link>
            <button
              onClick={menuOpen}
              className={`menu-btn ${menuOpened ? "active" : ""}`}
            >
              {!menuOpened ? (
                <img src="/images/menu.svg" alt="menu-burger" />
              ) : (
                <img alt="logo" src="/images/menu-close.svg" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className={`menu-wrap ${menuOpened ? "active" : ""}`}>
        <div className="_container">
          <nav>
            <Link href="/" className={pathname === "/" ? "current" : ""}>
              Home
            </Link>
            <Link
              href="/agency"
              className={pathname === "/agency" ? "current" : ""}
            >
              Agency
            </Link>
            <Link
              href="/services"
              className={pathname === "/services" ? "current" : ""}
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className={pathname === "/solutions" ? "current" : ""}
            >
              Solutions
            </Link>
            <Link
              href="/results"
              className={pathname === "/results" ? "current" : ""}
            >
              Results
            </Link>
            <Link
              href="/resources"
              className={pathname === "/resources" ? "current" : ""}
            >
              Resources
            </Link>
            <Link
              href="/pricing"
              className={pathname === "/pricing" ? "current" : ""}
            >
              Pricing
            </Link>
            <Link href="/faq" className={pathname === "/faq" ? "current" : ""}>
              FAQ
            </Link>
            <Link
              href="/request-form"
              className={pathname === "/request-form" ? "current" : ""}
            >
              Contact
            </Link>
          </nav>
          <Link href="/request-form" className="main-button">
            <span>Get started</span>
            <img src="/images/arrow.svg" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
