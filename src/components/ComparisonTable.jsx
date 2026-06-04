export default function ComparisonTable({ courses }) {
  const rows = [
    { label: "Platform",     icon: "🖥",  values: ["Web browsers",              "iOS & Android"] },
    { label: "Language",     icon: "💻",  values: ["JavaScript + JSX",          "JavaScript + JSX"] },
    { label: "Duration",     icon: "⏱",  values: [courses[0].duration,         courses[1].duration] },
    { label: "Difficulty",   icon: "📊",  values: [courses[0].level,            courses[1].level] },
    { label: "Price",        icon: "💰",  values: [courses[0].price,            courses[1].price] },
    { label: "Rating",       icon: "⭐",  values: [`${courses[0].rating} / 5`,  `${courses[1].rating} / 5`] },
    { label: "Students",     icon: "👥",  values: [courses[0].students,         courses[1].students] },
    { label: "Instructor",   icon: "🧑‍🏫", values: [courses[0].instructor,       courses[1].instructor] },
    { label: "Last Updated", icon: "🗓",  values: [courses[0].lastUpdated,      courses[1].lastUpdated] },
  ];

  return (
    <div style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "24px", overflow: "hidden" }}>

      {/* Header */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", backgroundColor: "#0a0a0a", padding: "24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#334155", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px" }}>Feature</span>
        </div>
        {courses.map((c) => (
          <div key={c.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "44px", height: "44px",
                borderRadius: "14px",
                backgroundColor: c.badge === "Web" ? "rgba(59,130,246,0.12)" : "rgba(16,185,129,0.12)",
                border: c.badge === "Web" ? "1px solid rgba(59,130,246,0.2)" : "1px solid rgba(16,185,129,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px",
              }}
            >
              {c.icon}
            </div>
            <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px", textAlign: "center" }}>{c.technology}</span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: "999px",
                backgroundColor: c.badge === "Web" ? "rgba(59,130,246,0.12)" : "rgba(16,185,129,0.12)",
                color: c.badge === "Web" ? "#60a5fa" : "#34d399",
                border: c.badge === "Web" ? "1px solid rgba(59,130,246,0.2)" : "1px solid rgba(16,185,129,0.2)",
              }}
            >
              {c.badge}
            </span>
          </div>
        ))}
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            padding: "14px 24px",
            alignItems: "center",
            backgroundColor: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
            borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "15px" }}>{row.icon}</span>
            <span style={{ fontSize: "13px", color: "#475569", fontWeight: 500 }}>{row.label}</span>
          </div>
          {row.values.map((val, j) => (
            <div key={j} style={{ display: "flex", justifyContent: "center" }}>
              <span style={{
                fontSize: "13px",
                fontWeight: 600,
                textAlign: "center",
                color: row.label === "Price"
                  ? (j === 0 ? "#60a5fa" : "#34d399")
                  : "#cbd5e1",
              }}>
                {val}
              </span>
            </div>
          ))}
        </div>
      ))}

      {/* Best for footer */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", backgroundColor: "#0a0a0a", padding: "20px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ color: "#334155", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px" }}>Best for</span>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ backgroundColor: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)", borderRadius: "12px", padding: "10px 14px", maxWidth: "150px", textAlign: "center" }}>
            <p style={{ color: "#93c5fd", fontSize: "12px", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>Beginners & web career seekers</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ backgroundColor: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: "12px", padding: "10px 14px", maxWidth: "150px", textAlign: "center" }}>
            <p style={{ color: "#6ee7b7", fontSize: "12px", fontWeight: 600, margin: 0, lineHeight: 1.4 }}>React devs going mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
}