import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaMicrophoneAlt } from "react-icons/fa";
import { Menu, X } from "lucide-react";

/**
 * NavBar — Middletown Muse
 * -----------------------------------------------------------------------
 * Matches the studio's identity: ink-teal + antique gold, Cormorant
 * Garamond for the wordmark, Work Sans for links.
 *
 * Desktop: a quiet horizontal bar with a gold "Schedule a Lesson" CTA.
 * Mobile: a full-height side drawer (not a dropdown) that slides in from
 * the right over a dimmed backdrop — closes on link click, backdrop
 * click, or Escape, and locks page scroll while open.
 *
 * NOTE: "Our Team" was replaced with a plain "Lessons" link since this is
 * a solo studio — rename freely to match your actual site structure.
 * Swap the wordmark for an <img> logo if/when you have one; the small
 * gold mark beside it is a placeholder motif, not a real logo asset.
 * -----------------------------------------------------------------------
 */

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Lessons", path: "/services" },
  { name: "Contact", path: "/contact" },
];

function Wordmark() {
  return (
    <span className="flex items-center gap-2">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 16c2-6 4-6 6 0s4 6 6 0s4-6 4-1"
          stroke="#C9A24B"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="font-display italic text-2xl sm:text-3xl tracking-wide text-[#F3EDDC]">
        Middletown Muse
      </span>
    </span>
  );
}

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll and allow Escape-to-close while the drawer is open.
  useEffect(() => {
    if (menuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKeyDown = (e) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = previousOverflow;
        window.removeEventListener("keydown", onKeyDown);
      };
    }
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400;1,500&family=Work+Sans:wght@400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Work Sans', system-ui, sans-serif; }

        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 1px;
          background: #C9A24B;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .nav-link:hover::after,
        .nav-link:focus-visible::after {
          transform: scaleX(1);
        }

        .gold-btn {
          position: relative;
          overflow: hidden;
          background: #C9A24B;
          color: #0F2E2B;
          transition: color 0.35s ease;
        }
        .gold-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          background: #E4C878;
          transform: translateX(-101%);
          transition: transform 0.45s cubic-bezier(.4,0,.2,1);
          z-index: 0;
        }
        .gold-btn > span { position: relative; z-index: 1; }
        .gold-btn:hover::after,
        .gold-btn:focus-visible::after { transform: translateX(0); }

        .drawer-link {
          opacity: 0;
          transform: translateX(16px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .drawer-open .drawer-link {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <nav className="bg-[#0F2E2B]/95 backdrop-blur-md shadow-lg w-full sticky top-0 z-50 border-b border-[#C9A24B]/20">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24B] rounded-sm"
          >
            <Wordmark />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="nav-link font-body text-sm tracking-[0.15em] uppercase text-[#F3EDDC]/85 hover:text-[#E4C878] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24B] rounded-sm"
              >
                {item.name}
              </Link>
            ))}
<div className="flex items-center gap-3 pl-2">
  <a
    href="https://karaoverse.com/artist/the-elegant-hippo-presents"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Jeffrey Jones on Karaoverse"
    className="text-[#C9A24B] hover:text-[#F3EDDC] text-lg transition-transform duration-300 hover:scale-110"
  >
    <FaMicrophoneAlt />
  </a>
</div>
            <Link
              to="/contact"
              className="gold-btn font-body text-sm font-medium px-5 py-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EDDC]"
            >
              <span>Schedule a Lesson</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-[#F3EDDC] z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24B] rounded-sm p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* ---------------------------------------------------- MOBILE DRAWER */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0F2E2B]/60 backdrop-blur-sm transition-opacity duration-400 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed top-0 right-0 h-full w-[82%] max-w-sm z-[70] bg-[#0F2E2B] border-l border-[#C9A24B]/40 shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] md:hidden flex flex-col ${
          menuOpen ? "translate-x-0 drawer-open" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#C9A24B]/20">
          <span className="font-display italic text-xl text-[#F3EDDC]">Menu</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="text-[#F3EDDC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24B] rounded-sm p-1"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-8 gap-6 flex-1 overflow-y-auto">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="drawer-link font-display text-3xl italic text-[#F3EDDC] hover:text-[#E4C878] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24B] rounded-sm"
              style={{ transitionDelay: menuOpen ? `${i * 60 + 80}ms` : "0ms" }}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="drawer-link gold-btn inline-block w-fit font-body text-sm font-semibold px-6 py-3 rounded-full mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EDDC]"
            style={{ transitionDelay: menuOpen ? `${NAV_ITEMS.length * 60 + 80}ms` : "0ms" }}
          >
            <span>Schedule a Lesson</span>
          </Link>
        </div>

<div className="flex items-center gap-5 px-6 py-6 border-t border-[#C9A24B]/20">
  <a
    href="https://karaoverse.com/artist/the-elegant-hippo-presents"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Jeffrey Jones on Karaoverse"
    className="text-[#C9A24B] hover:text-[#F3EDDC] text-2xl transition-transform duration-300 hover:scale-110"
  >
    <FaMicrophoneAlt />
  </a>
</div>
      </div>
    </>
  );
};

export default NavBar;