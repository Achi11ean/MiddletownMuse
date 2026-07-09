// About.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/*
  Shares the design system introduced in VoiceStudioServices.jsx: curtain plum
  backdrop, brass gold accent, cream text, coral as a second warm accent,
  Fraunces (display/italic) + Work Sans (body) + IBM Plex Mono (labels).
  Keep these palette values in sync if either file changes.

  This page's own signature: staff lines standing in for the banner photo —
  a nod to Jeffrey's music-education background, quieter than the Services
  page's sound wave since this is a read, not a pitch.
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

function StaffBanner() {
  const lines = [0, 1, 2, 3, 4];
  return (
    <div
      className="relative h-[34vh] min-h-56 md:h-[42vh] overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${palette.curtain} 0%, ${palette.curtainDeep} 70%, ${palette.curtainDeeper} 100%)`,
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex flex-col justify-center gap-6 px-8 sm:px-16 opacity-70">
        {lines.map((i) => (
          <div
            key={i}
            className="h-px w-full"
            style={{ backgroundColor: "rgba(201,162,39,0.35)" }}
          />
        ))}
      </div>
      <div
        className="absolute rounded-full"
        style={{
          width: 10,
          height: 10,
          top: "38%",
          left: "22%",
          backgroundColor: palette.coral,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 10,
          height: 10,
          top: "58%",
          left: "68%",
          backgroundColor: palette.goldSoft,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#170D1A] via-transparent to-transparent" />
    </div>
  );
}

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block w-full text-center px-6 py-3 font-semibold rounded-xl border transition-all duration-300"
    style={{
      color: palette.cream,
      borderColor: "rgba(201,162,39,0.35)",
      backgroundColor: "rgba(247,241,230,0.04)",
      fontFamily: "'Work Sans', system-ui, sans-serif",
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
    {children}
  </Link>
);

const credentials = [
  {
    label: "Stage Experience",
    copy:
      "Years spent singing in bands aboard cruise ships, performing nightly for audiences from Alaska to the Caribbean.",
  },
  {
    label: "Music Education",
    copy:
      "A degree in music education, with training in vocal pedagogy and how the voice actually works.",
  },
  {
    label: "New Music",
    copy:
      "Currently writing and recording a new album — bringing the same technique I teach into my own artist practice.",
  },
];

export default function About() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: `linear-gradient(180deg, ${palette.curtain} 0%, ${palette.curtainDeep} 45%, ${palette.curtainDeeper} 100%)`,
        fontFamily: "'Work Sans', system-ui, sans-serif",
      }}
    >
      <link rel="stylesheet" href={fontImport} />

      {/* Banner */}
      <section className="relative w-full">
        <StaffBanner />

        <div className="absolute bottom-[-48px] sm:bottom-[-64px] left-1/2 -translate-x-1/2 w-11/12 sm:w-auto">
          <div
            className="px-6 sm:px-12 py-5 sm:py-7 rounded-2xl shadow-2xl text-center"
            style={{
              backgroundColor: palette.cardCream,
              border: `1px solid rgba(43,24,48,0.08)`,
            }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl tracking-wide"
              style={{
                color: palette.curtain,
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              Meet Jeffrey Jones
            </h1>
            <div
              className="h-px w-full mt-3 mb-2"
              style={{ backgroundColor: "rgba(43,24,48,0.15)" }}
            />
            <span
              className="text-sm sm:text-base tracking-widest uppercase"
              style={{ color: palette.coral, fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Singer · Educator · Recording Artist
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        <nav aria-label="Primary">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/ourteam">Team</NavLink>
          </div>
        </nav>

        <motion.p
          className="mt-14 text-center text-xl sm:text-2xl md:text-3xl leading-snug"
          style={{ color: palette.cream, fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 500 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          I want every student to understand their voice, not just imitate mine.
        </motion.p>

        <motion.p
          className="mt-6 text-base sm:text-lg max-w-2xl mx-auto text-center leading-relaxed"
          style={{ color: palette.lavender }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          Before teaching, I spent years singing in bands aboard cruise
          ships, performing night after night for rooms full of strangers. I
          hold a degree in music education, and I'm currently writing and
          recording a new album of my own. Performing and teaching have
          always run side by side for me — each one keeps the other honest.
        </motion.p>

        {/* Credentials */}
        <section className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {credentials.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl p-7"
                style={{ backgroundColor: palette.cardCream, border: "1px solid rgba(43,24,48,0.08)" }}
              >
                <div
                  className="text-xs uppercase tracking-[0.2em] mb-3"
                  style={{ color: palette.coral, fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {c.label}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#4A3B4E" }}>
                  {c.copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <article
            className="rounded-2xl p-7 md:p-9"
            style={{ backgroundColor: palette.cardCream, border: "1px solid rgba(43,24,48,0.08)" }}
          >
            <h2
              className="text-2xl md:text-3xl mb-4"
              style={{ color: palette.curtain, fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 500 }}
            >
              An encouraging environment
            </h2>
            <p className="text-base md:text-lg leading-7 md:leading-8" style={{ color: "#4A3B4E" }}>
              My goal is to create a space where students learn how their
              voice actually works, rather than being told what to imitate.
              Understanding builds a technique that holds up long after the
              lesson ends — and it's a lot more encouraging along the way.
            </p>
          </article>
          <article
            className="rounded-2xl p-7 md:p-9"
            style={{ backgroundColor: palette.cardCream, border: "1px solid rgba(43,24,48,0.08)" }}
          >
            <h2
              className="text-2xl md:text-3xl mb-4"
              style={{ color: palette.curtain, fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 500 }}
            >
              Built around your goals
            </h2>
            <p className="text-base md:text-lg leading-7 md:leading-8" style={{ color: "#4A3B4E" }}>
              Every lesson is tailored to the student in front of me —
              whether you want to sing for your own enjoyment, prepare for
              an audition, sharpen your technique, or grow as a performing
              artist. The plan follows your goals, not the other way around.
            </p>
          </article>
        </section>

        {/* Welcome callout for hesitant adult beginners */}
        <section className="mt-6 ">
          <div
            className="rounded-2xl px-8 py-12 text-center relative overflow-hidden"
            style={{ backgroundColor: "rgba(247,241,230,0.05)" }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: `linear-gradient(90deg, ${palette.coral}, ${palette.goldSoft}, ${palette.gold})` }}
            />
            <p
              className="text-2xl sm:text-3xl leading-snug max-w-2xl mx-auto"
              style={{ color: palette.cream, fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 500 }}
            >
              It's not too late to learn to sing.
            </p>
          <div
  className="mt-5 max-h-[300px] overflow-auto max-w-2xl mx-auto space-y-6 text-base sm:text-lg leading-relaxed"
  style={{ color: palette.lavender }}
>
  <p>
    I'm a professional singer, performer, songwriter, and voice teacher with
    a Bachelor of Music in Voice and years of experience performing
    professionally, including as a cruise ship musician. My background includes
    classical vocal training, contemporary commercial music, recording,
    songwriting, and live performance, giving me a broad perspective on both
    the artistry and the mechanics of singing.
  </p>

  <p>
    I believe that every student has a unique voice and a unique reason for
    wanting to sing. Some students are preparing for auditions or performances.
    Others are writing their own music or looking to improve their technique.
    Many simply want to experience the joy and confidence that comes from
    discovering their voice. Whatever brings you to lessons, my goal is to help
    you achieve your personal musical goals in a supportive and encouraging
    environment.
  </p>

  <p>
    I am especially passionate about working with adults who have always wanted
    to sing but never felt it was "for them." It is never too late to begin
    learning, and I love helping students discover abilities they didn't know
    they had. At the same time, I welcome singers of every experience level,
    musical style, and voice type, from complete beginners to experienced
    performers.
  </p>

  <p>
    My studio is proudly LGBTQ+ affirming and committed to providing a
    welcoming, respectful space where every student can learn, grow, and
    express themselves authentically.
  </p>

  <div className="pt-2">
    <h3
      className="mb-3 text-2xl font-semibold"
      style={{ color: palette.gold }}
    >
      My Teaching Philosophy
    </h3>

    <p className="mb-6">
      I believe singing is a skill that can be learned and developed through
      thoughtful instruction, healthy technique, and consistent practice. While
      every voice is different, everyone deserves the opportunity to understand
      how their instrument works and how to use it with confidence.
    </p>

    <p className="mb-6">
      My teaching focuses on building healthy vocal habits rather than simply
      asking students to imitate sounds. I tailor each lesson to the individual,
      helping students develop efficient technique while strengthening
      musicality, artistry, and self-confidence. I want my students to
      understand <em>why</em> something works, because lasting progress comes
      from knowledge as much as repetition.
    </p>

    <p>
      Above all, I strive to create lessons that are encouraging, collaborative,
      and enjoyable. Learning to sing should be challenging, but it should also
      be rewarding. Whether your goal is to perform on stage, prepare for an
      audition, record your own music, or simply sing with greater freedom and
      confidence, my goal is to help you become the healthiest, most confident
      version of your own voice.
    </p>
  </div>
</div>
          </div>
        </section>
      </main>
    </div>
  );
}