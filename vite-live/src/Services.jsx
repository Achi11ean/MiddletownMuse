// VoiceStudioServices.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

/*
  Design notes (so future edits stay on-brief):
  - Palette: "curtain plum" backdrop (a small recital room at dusk), brass gold
    for accents/numerals, warm cream for readable text, soft coral as a second
    warm accent, muted lavender for secondary copy.
  - Type: Fraunces (display, italic for warmth) + Work Sans (body) +
    IBM Plex Mono (prices/durations, so rates read like a program listing).
  - Signature element: the "sustained note" wave — a row of bars that breathe
    gently, standing in for a held tone. Used once, as the hero/body divider.
  - Custom hex colors are applied via inline style (no Tailwind arbitrary
    values), Tailwind utilities handle layout/spacing/type scale.
*/

const palette = {
  curtain: "#2B1830",
  curtainDeep: "#1B0F1F",
  curtainDeeper: "#170D1A",
  gold: "#C9A227",
  goldSoft: "#E0BE5C",
  cream: "#F7F1E6",
  coral: "#E2836B",
  lavender: "#B7A2BB",
  cardCream: "#FBF7EE",
};

const fontImport =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,500&family=Work+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap";

const defaultCategories = [
  {
    title: "Beginners",
    blurb:
      "New to singing? We start with breath, posture, and simple exercises that build real confidence without overwhelm. No experience required — just curiosity.",
  },
  {
    title: "Intermediate & Advanced Singers",
    blurb:
      "Refine technique, expand range, and dig into repertoire that challenges you. Lessons grow with your skill and ambition, not a fixed curriculum.",
  },
  {
    title: "Teens & Adults",
    blurb:
      "Whether you're thirteen or sixty-three, lessons are paced to your goals, schedule, and stage of life — never one-size-fits-all.",
  },
  {
    title: "All Voice Types",
    blurb:
      "Soprano to bass and everywhere between — every voice type gets technique and repertoire suited to its natural color and range.",
  },
  {
    title: "Classical",
    blurb:
      "Art song, opera arias, and foundational bel canto technique for singers building a classical core.",
  },
  {
    title: "Musical Theatre",
    blurb:
      "Belt, mix, and storytelling technique for the stage — prepping you for auditions, callbacks, and opening night.",
  },
  {
    title: "Pop & Contemporary",
    blurb:
      "Mic technique, riffs, and the stylistic choices that make contemporary singing feel natural and expressive.",
  },
  {
    title: "Singer-Songwriters",
    blurb:
      "Bring your own songs. We work on vocal delivery, range, and performance choices that serve your original material.",
  },
  {
    title: "Audition Preparation",
    blurb:
      "Material selection, cuts, and coaching so you can walk into any audition room ready and calm.",
  },
  {
    title: "Performance Coaching",
    blurb:
      "Stage presence, breath under pressure, and the instincts that turn a good singer into a compelling performer.",
  },
];

const defaultRates = [
  { minutes: 30, price: 50 },
  { minutes: 45, price: 70 },
  { minutes: 60, price: 95 },
];

function SoundWave({ bars = 24 }) {
  const heights = Array.from({ length: bars }, (_, i) => {
    // gentle hand-drawn variance so it reads like a held note, not a spectrum analyzer
    const base = 14 + Math.sin(i * 0.7) * 10 + Math.cos(i * 0.35) * 6;
    return Math.max(8, Math.round(base));
  });
  return (
    <div
      className="flex items-end justify-center gap-[3px] sm:gap-1 h-14 sm:h-16 my-10"
      aria-hidden="true"
    >
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-[3px] sm:w-1 rounded-full wave-bar"
          style={{
            height: `${h}px`,
            background: i % 3 === 0 ? palette.coral : palette.goldSoft,
            animationDelay: `${i * 0.06}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function VoiceStudioServices({
  contactPath = "/contact",
  categories = defaultCategories,
  rates = defaultRates,
}) {
  const [selected, setSelected] = useState(null);

  const BookButton = ({ full = false }) => (
    <Link to={contactPath} className={full ? "block w-full sm:w-auto" : ""}>
      <button
        className="px-10 py-3 rounded-full font-semibold text-base tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        style={{
          backgroundColor: palette.gold,
          color: palette.curtainDeeper,
          fontFamily: "'Work Sans', system-ui, sans-serif",
        }}
      >
        Book a Lesson
      </button>
    </Link>
  );

  return (
    <div
      className="min-h-screen"
      style={{
        background: `linear-gradient(180deg, ${palette.curtain} 0%, ${palette.curtainDeep} 55%, ${palette.curtainDeeper} 100%)`,
        fontFamily: "'Work Sans', system-ui, sans-serif",
      }}
    >
      <link rel="stylesheet" href={fontImport} />
      <style>{`
        @keyframes wave-breathe {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.55); }
        }
        .wave-bar {
          animation: wave-breathe 2.4s ease-in-out infinite;
          transform-origin: bottom;
        }
        @media (prefers-reduced-motion: reduce) {
          .wave-bar { animation: none; }
        }
        .fade-in-up {
          animation: fadeInUp .28s ease;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translate3d(0, 10px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
      `}</style>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-2 text-center">
        <div
          className="text-xs tracking-[0.25em] uppercase mb-5"
          style={{ color: palette.lavender, fontFamily: "'IBM Plex Mono', monospace" }}
        >
          Voice Studio · Lessons
        </div>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl leading-tight"
          style={{
            color: palette.cream,
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontWeight: 500,
          }}
        >
          Every voice is welcome here.
        </h1>
        <p
          className="mt-6 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: palette.lavender }}
        >
          I happily teach beginners and advanced singers alike — teens
          through adults, every voice type, and every style from classical to
          pop. Whatever brought you to singing, there's a lesson built around
          you.
        </p>
      </div>

      <SoundWave />

      {/* Who I Teach */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <div
            className="text-xs tracking-[0.25em] uppercase mb-3"
            style={{ color: palette.gold, fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Who I Teach
          </div>
          <p className="text-sm" style={{ color: palette.lavender }}>
            Tap any specialty to learn more.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pb-4">
          {categories.map((c, i) => (
            <button
              key={i}
              onClick={() => setSelected(c)}
              className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: "rgba(201,162,39,0.35)",
                backgroundColor: "rgba(247,241,230,0.04)",
                color: palette.cream,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = palette.gold;
                e.currentTarget.style.backgroundColor = "rgba(201,162,39,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.35)";
                e.currentTarget.style.backgroundColor = "rgba(247,241,230,0.04)";
              }}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      {/* Affirming banner */}
      <div className="max-w-5xl mx-auto px-6 mt-14">
        <div
          className="rounded-2xl px-8 py-10 text-center relative overflow-hidden"
          style={{ backgroundColor: "rgba(247,241,230,0.05)" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background:
                "linear-gradient(90deg, #E2836B, #E0BE5C, #C9A227, #4FB3A9, #6E8FB5, #8F5FA8)",
            }}
          />
          <p
            className="text-xl sm:text-2xl leading-snug"
            style={{ color: palette.cream, fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            This studio is LGBTQ+ affirming
          </p>
          <p
            className="mt-3 text-sm sm:text-base max-w-xl mx-auto"
            style={{ color: palette.lavender }}
          >
            Every student is welcomed exactly as they are — your identity,
            background, and story are always safe here.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <BookButton />
      </div>

      {/* Lessons & Rates */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div className="text-center mb-10">
          <div
            className="text-xs tracking-[0.25em] uppercase mb-3"
            style={{ color: palette.gold, fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Lessons & Rates
          </div>
          <h2
            className="text-2xl sm:text-3xl"
            style={{ color: palette.cream, fontFamily: "'Fraunces', serif", fontStyle: "italic" }}
          >
            Simple pricing, flexible scheduling
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {rates.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 text-center border"
              style={{
                backgroundColor: palette.cardCream,
                borderColor: "rgba(43,24,48,0.08)",
              }}
            >
              <div
                className="text-4xl mb-1"
                style={{
                  color: palette.curtain,
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontWeight: 600,
                }}
              >
                ${r.price}
              </div>
              <div
                className="text-sm uppercase tracking-wide"
                style={{ color: palette.coral, fontFamily: "'IBM Plex Mono', monospace" }}
              >
                {r.minutes} Minute Lesson
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-8 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
          style={{ color: palette.lavender }}
        >
          Lessons are available both in person and online. Scheduling is
          flexible and can be worked out around each student's goals and
          availability.
        </p>
      </div>

      <div className="flex justify-center my-16">
        <BookButton />
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
          <div
            onClick={() => setSelected(null)}
            className="absolute inset-0 backdrop-blur-sm"
            style={{ backgroundColor: "rgba(23,13,26,0.75)" }}
          />
          <div className="relative z-10 flex min-h-full items-center justify-center p-4">
            <div
              className="w-full max-w-lg rounded-3xl shadow-2xl p-8 fade-in-up"
              style={{ backgroundColor: palette.cardCream }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3
                  className="text-2xl"
                  style={{
                    color: palette.curtain,
                    fontFamily: "'Fraunces', serif",
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  {selected.title}
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  title="Close"
                  className="shrink-0 h-9 w-9 rounded-full flex items-center justify-center transition"
                  style={{ backgroundColor: "rgba(43,24,48,0.08)", color: palette.curtain }}
                >
                  ✕
                </button>
              </div>
              <div
                className="mt-3 h-px"
                style={{ backgroundColor: "rgba(43,24,48,0.12)" }}
              />
              <p
                className="mt-5 leading-relaxed"
                style={{ color: "#4A3B4E" }}
              >
                {selected.blurb}
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <BookButton />
                <button
                  onClick={() => setSelected(null)}
                  className="w-full sm:w-auto rounded-xl px-5 py-2.5 font-semibold transition"
                  style={{ backgroundColor: palette.curtain, color: palette.cream }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}