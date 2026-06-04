import { useState } from "react";

export default function EnrollModal({ course, onClose }) {
  const [enrolled, setEnrolled] = useState(false);
  if (!course) return null;

  const isWeb = course.badge === "Web";
  const gradient = isWeb
    ? "linear-gradient(135deg, #1d4ed8, #3b82f6)"
    : "linear-gradient(135deg, #065f46, #059669)";
  const btnBg    = isWeb ? "#2563eb" : "#059669";
  const btnHover = isWeb ? "#1d4ed8" : "#047857";
  const priceColor = isWeb ? "#93c5fd" : "#6ee7b7";

  const handleConfirm = () => {
    setEnrolled(true);
    setTimeout(onClose, 2800);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        display: "flex", alignItems: "flex-end", justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          width: "100%",
          maxWidth: "440px",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
        }}
      >
        {enrolled ? (
          <div style={{ padding: "48px 32px", textAlign: "center" }}>
            <div style={{ width: "72px", height: "72px", backgroundColor: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <span style={{ fontSize: "32px" }}>✅</span>
            </div>
            <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#f1f5f9", margin: "0 0 10px" }}>
              You're enrolled! 🎉
            </h2>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>
              Welcome to <strong style={{ color: "#e2e8f0" }}>{course.technology}</strong>.
              Check your email for course access.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div style={{ background: gradient, padding: "24px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: "rgba(255,255,255,0.18)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px" }}>
                  {course.icon}
                </div>
                <div>
                  <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#fff", margin: 0 }}>{course.technology}</h2>
                  <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", margin: 0 }}>{course.tagline}</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "24px 28px" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "#334155", textTransform: "uppercase", letterSpacing: "1.5px", textAlign: "center", margin: "0 0 12px" }}>
                Order Summary
              </p>

              <div style={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden", marginBottom: "20px" }}>
                {[
                  ["Course",     course.technology],
                  ["Instructor", course.instructor],
                  ["Duration",   course.duration],
                  ["Access",     "Lifetime + updates"],
                ].map(([label, val], i, arr) => (
                  <div
                    key={label}
                    style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "12px 16px", fontSize: "13px",
                      borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    }}
                  >
                    <span style={{ color: "#475569" }}>{label}</span>
                    <span style={{ fontWeight: 600, color: "#cbd5e1" }}>{val}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", backgroundColor: "rgba(255,255,255,0.04)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontWeight: 700, color: "#94a3b8" }}>Total today</span>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ fontSize: "20px", fontWeight: 800, color: priceColor }}>{course.price}</span>
                    <span style={{ fontSize: "12px", color: "#334155", textDecoration: "line-through" }}>$199.99</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                style={{ width: "100%", padding: "15px", borderRadius: "14px", backgroundColor: btnBg, color: "#fff", fontSize: "15px", fontWeight: 700, border: "none", cursor: "pointer", marginBottom: "10px" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = btnHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = btnBg)}
              >
                Confirm Enrollment — {course.price}
              </button>

              <button
                onClick={onClose}
                style={{ width: "100%", padding: "13px", borderRadius: "14px", backgroundColor: "transparent", color: "#475569", fontSize: "14px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.06)", cursor: "pointer", marginBottom: "16px" }}
              >
                Maybe later
              </button>

              <div style={{ display: "flex", justifyContent: "center", gap: "20px", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                {["🔒 Secure", "↩️ 30-day refund", "♾️ Lifetime"].map((item) => (
                  <span key={item} style={{ fontSize: "11px", color: "#334155" }}>{item}</span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}