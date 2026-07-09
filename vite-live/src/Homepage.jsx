import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const EMAILJS_SERVICE_ID = "service_ud7473n";
const EMAILJS_TEMPLATE_ID = "template_fjyy9w7";
const EMAILJS_PUBLIC_KEY = "BDPsT3cNRMnCg-OaU";
const NAV_LINKS = [
  { id: "about", label: "About & Philosophy" },
  { id: "teach", label: "Who I Teach" },
  { id: "contact", label: "Contact" },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function ScoreLine({ className = "", flip = false }) {
  // The studio's signature: a hand-drawn vocal pitch-contour line.
  return (
    <svg
      viewBox="0 0 600 60"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
      aria-hidden="true"
    >
      <path
        d="M0 40 C 40 10, 70 55, 110 30 S 180 5, 220 32 S 300 55, 340 25 S 420 5, 460 30 S 540 52, 600 22"
        fill="none"
        stroke="url(#scoreGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="scoreGrad" x1="0" y1="0" x2="600" y2="0">
          <stop offset="0%" stopColor="#C9A24B" stopOpacity="0" />
          <stop offset="15%" stopColor="#C9A24B" stopOpacity="1" />
          <stop offset="85%" stopColor="#C9A24B" stopOpacity="1" />
          <stop offset="100%" stopColor="#C9A24B" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function HomePage() {
  const aboutRef = useReveal();
  const teachRef = useReveal();
  const contactRef = useReveal();

  const goTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#F7F2E7] text-[#1E2320]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Work+Sans:wght@300;400;500;600&display=swap');

        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Work Sans', system-ui, sans-serif; }

        .reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .grain::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.06;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
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
        .gold-btn:focus-visible::after {
          transform: translateX(0);
        }

        .chip {
          border: 1px solid rgba(201,162,75,0.55);
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .chip:hover {
          background: rgba(201,162,75,0.12);
          border-color: #C9A24B;
        }
      `}</style>

      {/* ---------------------------------------------------------- HEADER */}


      {/* ------------------------------------------------------------ HERO */}
      <section
        id="home"
        className="relative grain bg-[#0F2E2B] text-[#F3EDDC] overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(201,162,75,0.16) 0%, rgba(15,46,43,0) 70%)",
          }}
        />
        <div className="relative max-w-full mx-auto px-2 pt-24 pb-20 sm:pt-32 sm:pb-28 text-center">
 <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
  <div className="grid items-center gap-16 lg:grid-cols-2">

    {/* LEFT */}
    <div className="text-center lg:text-left">
      <p className="font-body uppercase tracking-[0.3em] text-xs sm:text-sm text-[#C9A24B] mb-6">
        Middletown, Connecticut &nbsp;·&nbsp; Private Voice Studio
      </p>

      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-[#F7F2E7]">
        Find the Voice
        <br />
        <span className="italic text-[#E4C878]">
          You Were Always Meant to Sing
        </span>
      </h1>

      <p className="font-body text-base sm:text-lg text-[#F3EDDC]/80 max-w-xl mt-8 leading-relaxed lg:mx-0 mx-auto">
        Professional singer, performer, and voice teacher helping students
        develop healthy vocal technique, artistic confidence, and expressive
        musicianship.
      </p>

      <div className="mt-10 flex justify-center lg:justify-start">
        <a
          href="#contact"
          onClick={goTo("contact")}
          className="gold-btn font-body text-base font-semibold px-8 py-4 rounded-full shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3EDDC]"
        >
          <span>Schedule a Lesson</span>
        </a>
      </div>

      <ScoreLine className="w-full max-w-md mt- lg:mx-0 mx-auto h-10" />
    </div>

    {/* RIGHT */}
    <div className="relative flex justify-center">
      {/* Glow */}
      <div className="absolute h-96 w-96 rounded-full bg-[#C9A24B]/15 blur-3xl" />

      {/* Gold Ring */}
      <div className="relative rounded-full border border-[#C9A24B]/40 bg-white/5 p-8 backdrop-blur-sm shadow-[0_0_80px_rgba(201,162,75,0.2)]">
        <img
          src="/middletownmuselogo.png"
          alt="Middletown Muse"
          className="w-72 sm:w-80 md:w-[26rem] object-contain drop-shadow-2xl"
        />
      </div>
    </div>

  </div>
</div>
          <ScoreLine className="w-full max-w-md mx-auto  h-10" />
        </div>
      </section>

      {/* --------------------------------------------------------- ABOUT */}
      <section
        id="about"
        ref={aboutRef}
        className="reveal relative bg-[#F7F2E7] py-6 sm:py-32"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-start">
            {/* Portrait frame */}
            <div className="mx-auto md:mx-0 w-full max-w-xs">
              <div className="aspect-[4/5] rounded-sm border border-[#C9A24B]/50 p-2">
                <div className="w-full h-full rounded-sm bg-gradient-to-b from-[#163B36] to-[#0F2E2B] flex items-center justify-center">
              <img
  src="/jefff.PNG"
  alt="Jeffrey Jones"
  className="h-full w-full object-cover"
/>
                </div>
              </div>
            </div>

            {/* Bio + philosophy */}
            <div>
              <p className="font-body uppercase tracking-[0.25em] text-xs text-[#6B2737] mb-4">
                About the Studio
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0F2E2B] mb-8">
                Teaching Philosophy
              </h2>

              <div className="space-y-5 font-body text-[#1E2320]/90 leading-relaxed">
                <p>
                  I hold a Bachelor of Music in Voice and have spent years
                  performing professionally in front of live audiences —
                  from stages at sea as a cruise ship musician to work as an
                  independent recording artist, songwriter, and performer.
                  My training is classical at its core, but my career has
                  been built on contemporary performance, which shapes how I
                  teach: technically grounded, stylistically versatile.
                </p>
                <p>
                  I believe every voice deserves to understand itself. My
                  goal is to create an encouraging environment where
                  students learn how their voice actually works, rather than
                  simply being told what to imitate. Every lesson is
                  tailored to the individual — whether you want to sing for
                  personal enjoyment, prepare for an audition, refine your
                  technique, or grow as a performing artist.
                </p>
              </div>

              <blockquote className="mt-10 border-l-2 border-[#C9A24B] pl-6">
                <p className="font-display italic text-2xl sm:text-3xl text-[#0F2E2B] leading-snug">
                  "Healthy technique isn't a cage around your voice — it's
                  what sets it free."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#F7F2E7]">
        <ScoreLine className="w-full max-w-md mx-auto h-8 opacity-70" flip />
      </div>

      {/* ------------------------------------------------- WHO I TEACH */}
      <section
        id="teach"
        ref={teachRef}
        className="reveal relative grain bg-[#0F2E2B] text-[#F3EDDC] py-24 sm:py-32"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-body uppercase tracking-[0.25em] text-xs text-[#C9A24B] mb-4">
            A Studio for Every Voice
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#F7F2E7] mb-6">
            Especially for the Singer Who's Never Felt Ready
          </h2>
          <p className="font-body text-[#F3EDDC]/80 max-w-2xl mx-auto leading-relaxed mb-16">
            So many adults have always wanted to sing, but never felt
            comfortable taking that first lesson — convinced they
            "can't sing," or that it's simply too late to learn. This studio
            was built especially for you. Singers of every experience level
            and style are welcome here.
          </p>

          <div className="grid sm:grid-cols-3 gap-10 text-left">
            <div>
              <h3 className="font-display text-xl text-[#E4C878] mb-4">
                Levels
              </h3>
              <ul className="space-y-3 font-body text-sm">
                {[
                  "Beginners",
                  "Intermediate & advanced singers",
                  "Teens & adults",
                  "All voice types",
                ].map((item) => (
                  <li
                    key={item}
                    className="chip rounded-full px-4 py-2 text-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl text-[#E4C878] mb-4">
                Styles
              </h3>
              <ul className="space-y-3 font-body text-sm">
                {[
                  "Classical",
                  "Musical theatre",
                  "Pop & contemporary",
                  "Singer-songwriters",
                ].map((item) => (
                  <li
                    key={item}
                    className="chip rounded-full px-4 py-2 text-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl text-[#E4C878] mb-4">
                Focus Areas
              </h3>
              <ul className="space-y-3 font-body text-sm">
                {[
                  "Audition preparation",
                  "Performance coaching",
                  "Healthy vocal technique",
                  "Confidence & artistry",
                ].map((item) => (
                  <li
                    key={item}
                    className="chip rounded-full px-4 py-2 text-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-body text-sm text-[#F3EDDC]/70 max-w-2xl mx-auto mt-16 leading-relaxed">
            Middletown Muse is an LGBTQ+ affirming studio, welcoming
            students of every background, identity, and story. Everyone who
            walks through the door is met with the same respect, patience,
            and care.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------- CONTACT */}
      <section
        id="contact"
        ref={contactRef}
        className="reveal relative bg-[#F7F2E7] py-24 sm:py-32"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-body uppercase tracking-[0.25em] text-xs text-[#6B2737] mb-4">
            Get Started
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0F2E2B] mb-6">
            Schedule a Lesson
          </h2>
          <p className="font-body text-[#1E2320]/80 leading-relaxed mb-10">
            Reach out to set up your first lesson or ask a question — no
            experience required, just curiosity about your own voice.
          </p>

          <div className="bg-white/70 border border-[#C9A24B]/40 rounded-sm p-8 sm:p-10 space-y-4 font-body">

    
            <p className="text-[#0F2E2B]/70 text-sm">
              Middletown, Connecticut <br/>In-studio & online lessons
            </p>
          </div>
<Link
  to="/contact"
  className="gold-btn inline-block font-body text-base font-semibold px-8 py-4 rounded-full shadow-lg mt-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2E2B]"
>
  <span>Contact Us</span>
</Link>
        </div>
      </section>

      {/* ---------------------------------------------------------- FOOTER */}
      <footer className="bg-[#0F2E2B] text-[#F3EDDC]/60 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-body text-xs tracking-wide">
          <span>© {new Date().getFullYear()} Middletown Muse. All rights reserved.</span>
          <span className="italic font-display text-sm text-[#E4C878]/80">
            Discover your voice.
          </span>
        </div>
      </footer>
    </div>
  );
}