import StarRating from "./StarRating";

export default function CourseCard({ course, onEnroll }) {
  const isWeb = course.badge === "Web";

  const accent = isWeb
    ? {
        gradient: "linear-gradient(135deg, #1d4ed8, #3b82f6, #60a5fa)",
        btnBg: "#2563eb",
        btnHover: "#1d4ed8",
        softBg: "rgba(59,130,246,0.08)",
        softBorder: "rgba(59,130,246,0.18)",
        accentColor: "#60a5fa",
        priceColor: "#93c5fd",
      }
    : {
        gradient: "linear-gradient(135deg, #065f46, #059669, #34d399)",
        btnBg: "#059669",
        btnHover: "#047857",
        softBg: "rgba(16,185,129,0.08)",
        softBorder: "rgba(16,185,129,0.18)",
        accentColor: "#34d399",
        priceColor: "#6ee7b7",
      };

  return (
    <div
      style={{
        backgroundColor: "#111111",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "24px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Gradient Header */}
      <div style={{ background: accent.gradient, padding: "32px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
          <div
            style={{
              width: "52px", height: "52px",
              backgroundColor: "rgba(255,255,255,0.18)",
              borderRadius: "16px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "28px",
            }}
          >
            {course.icon}
          </div>
          <span
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              padding: "5px 12px",
              borderRadius: "999px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            {course.badge}
          </span>
        </div>
        <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#fff", margin: "0 0 4px", letterSpacing: "-0.5px" }}>
          {course.technology}
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", margin: 0 }}>
          {course.tagline}
        </p>

        {/* Floating price */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "28px",
            transform: "translateY(50%)",
            backgroundColor: "#111111",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "10px 18px",
            display: "flex",
            alignItems: "baseline",
            gap: "8px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
          }}
        >
          <span style={{ fontSize: "22px", fontWeight: 800, color: accent.priceColor }}>
            {course.price}
          </span>
          <span style={{ fontSize: "13px", color: "#475569", textDecoration: "line-through" }}>
            $199.99
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "40px 28px 28px", display: "flex", flexDirection: "column", flex: 1 }}>

        {/* Rating + Students */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <StarRating rating={course.rating} />
          <span style={{ fontSize: "13px", color: "#475569" }}>
            <strong style={{ color: "#94a3b8" }}>{course.students}</strong> students
          </span>
        </div>

        {/* Description */}
        <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7, marginBottom: "24px", textAlign: "center" }}>
          {course.description}
        </p>

        {/* Meta grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginBottom: "24px",
          }}
        >
          {[
            { label: "Duration",   value: course.duration,    icon: "⏱" },
            { label: "Level",      value: course.level,       icon: "📊" },
            { label: "Instructor", value: course.instructor,  icon: "👨‍🏫" },
            { label: "Updated",    value: course.lastUpdated, icon: "🗓" },
          ].map(({ label, value, icon }) => (
            <div
              key={label}
              style={{
                backgroundColor: accent.softBg,
                border: `1px solid ${accent.softBorder}`,
                borderRadius: "14px",
                padding: "12px 14px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: 700, color: accent.accentColor, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.8px" }}>
                {icon} {label}
              </p>
              <p style={{ fontSize: "13px", fontWeight: 600, color: "#cbd5e1", margin: 0 }}>
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* What you'll learn */}
        <p style={{ fontSize: "11px", fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "1.5px", textAlign: "center", marginBottom: "14px" }}>
          What you'll learn
        </p>
        <div style={{ marginBottom: "24px" }}>
          {course.highlights.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "8px" }}>
              <div
                style={{
                  width: "18px", height: "18px",
                  borderRadius: "50%",
                  backgroundColor: accent.softBg,
                  border: `1px solid ${accent.softBorder}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, marginTop: "2px",
                }}
              >
                <span style={{ color: accent.accentColor, fontSize: "10px", fontWeight: 700 }}>✓</span>
              </div>
              <span style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Projects */}
        <p style={{ fontSize: "11px", fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "1.5px", textAlign: "center", marginBottom: "14px" }}>
          Projects you'll build
        </p>
        <div style={{ marginBottom: "24px" }}>
          {course.projects.map((project, i) => (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "center", gap: "12px",
                backgroundColor: accent.softBg,
                border: `1px solid ${accent.softBorder}`,
                borderRadius: "14px",
                padding: "12px 16px",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  width: "32px", height: "32px",
                  borderRadius: "10px",
                  backgroundColor: accent.btnBg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "14px", flexShrink: 0,
                }}
              >
                🛠
              </div>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#cbd5e1", margin: 0 }}>{project.name}</p>
                <p style={{ fontSize: "12px", color: "#475569", margin: 0 }}>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pros / Cons */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }}>
          <div style={{ backgroundColor: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.12)", borderRadius: "14px", padding: "14px" }}>
            <p style={{ fontSize: "10px", fontWeight: 700, color: "#34d399", textTransform: "uppercase", letterSpacing: "1.5px", textAlign: "center", margin: "0 0 10px" }}>Pros</p>
            {course.pros.map((pro, i) => (
              <p key={i} style={{ fontSize: "12px", color: "#64748b", margin: "0 0 5px", display: "flex", gap: "6px" }}>
                <span style={{ color: "#34d399", fontWeight: 700 }}>+</span>{pro}
              </p>
            ))}
          </div>
          <div style={{ backgroundColor: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: "14px", padding: "14px" }}>
            <p style={{ fontSize: "10px", fontWeight: 700, color: "#f87171", textTransform: "uppercase", letterSpacing: "1.5px", textAlign: "center", margin: "0 0 10px" }}>Cons</p>
            {course.cons.map((con, i) => (
              <p key={i} style={{ fontSize: "12px", color: "#64748b", margin: "0 0 5px", display: "flex", gap: "6px" }}>
                <span style={{ color: "#f87171", fontWeight: 700 }}>−</span>{con}
              </p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => onEnroll(course)}
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "16px",
            backgroundColor: accent.btnBg,
            color: "#fff",
            fontSize: "15px",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            transition: "background 0.2s ease, transform 0.1s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = accent.btnHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = accent.btnBg)}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Enroll Now — {course.price}
        </button>
        <p style={{ textAlign: "center", fontSize: "12px", color: "#334155", marginTop: "10px" }}>
          🔒 30-day money-back guarantee
        </p>
      </div>
    </div>
  );
}