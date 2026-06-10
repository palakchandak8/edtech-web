import { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import ComparisonTable from "../components/ComparisonTable";
import EnrollModal from "../components/EnrollModal";
import VideoSection from "../components/VideoSection";
import { courses } from "../data/courses";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* ── Navbar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          backgroundColor: scrolled ? "rgba(0,0,0,0.92)" : "transparent",
          backdropFilter: "blur(14px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#2563eb",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              🎓
            </div>
            <span style={{ fontWeight: 800, color: "#f1f5f9", fontSize: "18px", letterSpacing: "-0.5px" }}>
              LearnCode
            </span>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "32px" }}>
            <a href="#courses" style={{ color: "#94a3b8", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              Courses
            </a>
            <a href="#preview" style={{ color: "#94a3b8", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              Preview
            </a>
            <a href="#compare" style={{ color: "#94a3b8", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              Compare
            </a>
          </div>

          {/* Sign In */}
          <button
            style={{
              backgroundColor: "#2563eb",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              padding: "8px 20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header
        style={{
          paddingTop: "130px",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000000",
        }}
      >
        {/* Glow blobs */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "350px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative" }}>
          {/* Live pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8",
              fontSize: "12px",
              fontWeight: 600,
              padding: "6px 16px",
              borderRadius: "999px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#3b82f6",
                borderRadius: "50%",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            full code on github.com/palakchandak8
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.1,
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <span style={{ color: "#f1f5f9" }}>React JS</span>
            <span style={{ color: "#334155", margin: "0 12px", fontWeight: 300 }}>vs</span>
            <span style={{ color: "#f1f5f9" }}>React Native</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "17px",
              color: "#64748b",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto 36px",
              textAlign: "center",
            }}
          >
            Not sure which to learn first? Compare both courses side-by-side
            and find the right path for your career goals.
          </p>

          {/* Tech badges */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "52px",
            }}
          >
            <span
              style={{
                backgroundColor: "#2563eb",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 20px",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              🌐 Web Development
            </span>
            <span
              style={{
                backgroundColor: "#059669",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 20px",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              📱 Mobile Development
            </span>
          </div>

          {/* Trust bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "32px",
              paddingTop: "28px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {[
              { icon: "👩‍🎓", stat: "240,800+", label: "Total students" },
              { icon: "⭐",   stat: "4.8 avg",  label: "Course rating" },
              { icon: "🏆",   stat: "2 courses", label: "Expert-designed" },
              { icon: "💼",   stat: "30-day",    label: "Money-back" },
            ].map(({ icon, stat, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "24px" }}>{icon}</span>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "#f1f5f9", margin: 0 }}>{stat}</p>
                  <p style={{ fontSize: "12px", color: "#475569", margin: 0 }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
      
      {/* ── Video Preview ── */}
      <VideoSection />

      {/* ── Course Cards ── */}
      <section
        id="courses"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 80px",
          backgroundColor: "#000000",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-1px", margin: 0 }}>
            Choose Your Course
          </h2>
          <p style={{ color: "#475569", marginTop: "8px", fontSize: "14px" }}>
            Both courses include lifetime access, certificate, and free updates.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
            gap: "28px",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEnroll={setSelectedCourse}
            />
          ))}
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section
        id="compare"
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px 80px",
          backgroundColor: "#000000",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-1px", margin: 0 }}>
            Compare Both Courses
          </h2>
          <p style={{ color: "#475569", marginTop: "8px", fontSize: "14px" }}>
            A full breakdown to help you make the right decision.
          </p>
        </div>

        <ComparisonTable courses={courses} />

        {/* Recommendation */}
        <div
          style={{
            marginTop: "20px",
            background: "rgba(251,191,36,0.04)",
            border: "1px solid rgba(251,191,36,0.12)",
            borderRadius: "20px",
            padding: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "rgba(251,191,36,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                flexShrink: 0,
              }}
            >
              💡
            </div>
            <div>
              <h3 style={{ fontWeight: 800, color: "#fcd34d", fontSize: "18px", margin: "0 0 8px" }}>
                Our recommendation
              </h3>
              <p style={{ color: "rgba(253,230,138,0.65)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: "#fcd34d" }}>Start with React JS</strong> if you're new to
                programming or targeting a web career — it has the largest job market.{" "}
                <strong style={{ color: "#fcd34d" }}>Choose React Native</strong> once you know
                React and want to ship iOS & Android apps without learning Swift or Kotlin.
                Most developers do React JS first, then React Native within 3–6 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          backgroundColor: "#000000",
          padding: "28px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "28px", height: "28px", backgroundColor: "#2563eb", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>
              🎓
            </div>
            <span style={{ fontWeight: 800, color: "#475569", fontSize: "14px" }}>LearnCode</span>
          </div>
          <p style={{ fontSize: "12px", color: "#334155", margin: 0, textAlign: "center" }}>
            © 2024 LearnCode. Built with React JS + Tailwind CSS.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a key={link} href="#" style={{ fontSize: "12px", color: "#334155", textDecoration: "none" }}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Modal ── */}
      <EnrollModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </div>
  );
}