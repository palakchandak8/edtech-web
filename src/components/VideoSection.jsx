import { useState } from "react";

const videos = [
  {
    id: "web",
    label: "React JS",
    icon: "🌐",
    color: "#2563eb",
    softBg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    youtubeId: "SqcY0GlETPk",
    title: "React JS Full Course Preview",
    instructor: "Sarah Chen",
    duration: "38 hours",
    transcript: [
      {
        time: "00:00",
        text: "Welcome to the React JS complete course. In this course, you'll go from zero to building production-grade web applications.",
      },
      {
        time: "01:20",
        text: "We'll start with the fundamentals — what React is, why it exists, and how it differs from plain JavaScript.",
      },
      {
        time: "03:45",
        text: "Then we move into JSX, the syntax extension that lets you write HTML-like code inside JavaScript files.",
      },
      {
        time: "06:10",
        text: "Components are the heart of React. You'll learn how to create reusable building blocks for any UI.",
      },
      {
        time: "09:30",
        text: "State and props — the two most important concepts in React. We'll master useState and understand data flow.",
      },
      {
        time: "13:00",
        text: "Hooks like useEffect, useContext, and custom hooks will take your React skills to the next level.",
      },
      {
        time: "17:45",
        text: "We wrap up with 5 real projects: a Todo App, Weather Dashboard, and a full E-Commerce store with cart and checkout.",
      },
    ],
  },
  {
    id: "mobile",
    label: "React Native",
    icon: "📱",
    color: "#059669",
    softBg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    youtubeId: "0-S5a0eXPoc",
    title: "React Native Full Course Preview",
    instructor: "Marcus Johnson",
    duration: "42 hours",
    transcript: [
      {
        time: "00:00",
        text: "Welcome to React Native with Expo. By the end of this course, you'll have published real apps to the App Store and Google Play.",
      },
      {
        time: "01:15",
        text: "React Native lets you write one JavaScript codebase that runs natively on both iOS and Android.",
      },
      {
        time: "03:00",
        text: "We start with Expo — the fastest way to get a React Native app running on your phone within minutes.",
      },
      {
        time: "05:40",
        text: "Core components like View, Text, ScrollView, and TouchableOpacity replace the HTML elements you know from web.",
      },
      {
        time: "08:20",
        text: "React Navigation handles all your routing needs — Stack, Tab, and Drawer navigators covered in full.",
      },
      {
        time: "12:00",
        text: "Device APIs are where mobile gets exciting — we use the Camera, Location, and Push Notifications APIs.",
      },
      {
        time: "16:30",
        text: "Final projects include a Habit Tracker with offline storage, a Food Delivery UI, and a real-time Chat App.",
      },
    ],
  },
];

export default function VideoSection() {
  const [activeTab, setActiveTab] = useState("web");
  const [showTranscript, setShowTranscript] = useState(false);
  const [activeTime, setActiveTime] = useState(null);

  const current = videos.find((v) => v.id === activeTab);

  return (
    <section
      id="preview"
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 24px 80px",
        backgroundColor: "#000000",
      }}
    >
      {/* Section heading */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#94a3b8",
            fontSize: "11px",
            fontWeight: 700,
            padding: "6px 14px",
            borderRadius: "999px",
            marginBottom: "16px",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
          }}
        >
          🎬 Free Preview
        </div>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#f1f5f9",
            letterSpacing: "-1px",
            margin: "0 0 8px",
          }}
        >
          Watch Before You Enroll
        </h2>
        <p style={{ color: "#475569", fontSize: "14px", margin: 0 }}>
          Get a real feel for each course before committing.
        </p>
      </div>

      {/* Tab switcher */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "28px",
        }}
      >
        {videos.map((v) => (
          <button
            key={v.id}
            onClick={() => {
              setActiveTab(v.id);
              setShowTranscript(false);
              setActiveTime(null);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              borderRadius: "12px",
              border: activeTab === v.id
                ? `1px solid ${v.border}`
                : "1px solid rgba(255,255,255,0.07)",
              backgroundColor: activeTab === v.id ? v.softBg : "transparent",
              color: activeTab === v.id ? v.color : "#475569",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <span>{v.icon}</span>
            {v.label}
          </button>
        ))}
      </div>

      {/* Video card */}
      <div
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        {/* Video meta bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#f1f5f9",
                margin: "0 0 2px",
              }}
            >
              {current.title}
            </p>
            <p style={{ fontSize: "12px", color: "#475569", margin: 0 }}>
              👨‍🏫 {current.instructor} &nbsp;·&nbsp; ⏱ {current.duration} total
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.2)",
              color: "#f87171",
              fontSize: "11px",
              fontWeight: 700,
              padding: "5px 12px",
              borderRadius: "999px",
              letterSpacing: "0.5px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#ef4444",
                borderRadius: "50%",
                display: "inline-block",
                animation: "pulse 1.5s infinite",
              }}
            />
            FREE PREVIEW
          </div>
        </div>

        {/* YouTube embed */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%",
            backgroundColor: "#0a0a0a",
          }}
        >
          <iframe
            key={current.youtubeId}
            src={`https://www.youtube.com/embed/${current.youtubeId}?rel=0&modestbranding=1&color=white`}
            title={current.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>

        {/* Transcript toggle */}
        <div style={{ padding: "20px 24px" }}>
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              padding: "14px 18px",
              backgroundColor: showTranscript
                ? current.softBg
                : "rgba(255,255,255,0.03)",
              border: `1px solid ${showTranscript ? current.border : "rgba(255,255,255,0.07)"}`,
              borderRadius: "14px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <span style={{ fontSize: "16px" }}>📝</span>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: showTranscript ? current.color : "#64748b",
                flex: 1,
                textAlign: "left",
              }}
            >
              {showTranscript ? "Hide Transcript" : "Show Transcript"}
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "#475569",
                transform: showTranscript ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
                display: "inline-block",
              }}
            >
              ▾
            </span>
          </button>

          {/* Transcript content */}
          {showTranscript && (
            <div
              style={{
                marginTop: "12px",
                backgroundColor: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              {/* Transcript header */}
              <div
                style={{
                  padding: "12px 18px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#334155",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                  }}
                >
                  Course Transcript
                </span>
                <span style={{ fontSize: "11px", color: "#334155" }}>
                  {current.transcript.length} segments
                </span>
              </div>

              {/* Transcript rows */}
              <div style={{ maxHeight: "320px", overflowY: "auto" }}>
                {current.transcript.map((line, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveTime(i)}
                    style={{
                      display: "flex",
                      gap: "14px",
                      padding: "14px 18px",
                      borderBottom:
                        i < current.transcript.length - 1
                          ? "1px solid rgba(255,255,255,0.04)"
                          : "none",
                      backgroundColor:
                        activeTime === i ? current.softBg : "transparent",
                      cursor: "pointer",
                      transition: "background 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (activeTime !== i)
                        e.currentTarget.style.backgroundColor =
                          "rgba(255,255,255,0.02)";
                    }}
                    onMouseLeave={(e) => {
                      if (activeTime !== i)
                        e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: activeTime === i ? current.color : "#334155",
                        flexShrink: 0,
                        marginTop: "2px",
                        fontFamily: "monospace",
                        minWidth: "38px",
                      }}
                    >
                      {line.time}
                    </span>
                    <p
                      style={{
                        fontSize: "13px",
                        color: activeTime === i ? "#cbd5e1" : "#64748b",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {line.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}