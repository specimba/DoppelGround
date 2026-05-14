import { useState, useEffect } from "react";
import { 
  IconBrandGithub, 
  IconBrandSlack,
  IconBrandTelegram,
  IconDatabase,
  IconBrain,
  IconCloudComputing,
  IconCpu,
  IconChartBar,
  IconShieldCheck,
  IconRobot,
  IconPlugConnected,
  IconChevronRight,
  IconArrowUpRight,
} from "@tabler/icons-react";

const theme = {
  bg: "#0a0a0f",
  fg: "#e8e4f0",
  card: "rgba(35, 25, 55, 0.7)",
  muted: "#9890a8",
  accent: "#a855f7",
  accentLight: "#c084fc",
  border: "rgba(168, 85, 247, 0.15)",
  green: "#22c55e",
  cyan: "#06b6d4",
};

const styles = {
  page: {
    background: theme.bg,
    color: theme.fg,
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    minHeight: "100vh",
  } as React.CSSProperties,
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  } as React.CSSProperties,
  gradient: {
    background: `linear-gradient(135deg, ${theme.accent}15, ${theme.bg}, ${theme.cyan}10)`,
  } as React.CSSProperties,
};

const systems = [
  { name: "NEXUS Governor", desc: "Orchestrator — routes tasks across all agents", icon: IconCpu, color: theme.accent },
  { name: "Zo Computer", desc: "Core AI infrastructure — Slack, Telegram, webhooks, API", icon: IconRobot, color: theme.cyan },
  { name: "AutoClaw", desc: "Autonomous Telegram bot swarm executive layer", icon: IconBrandTelegram, color: "#22c55e" },
  { name: "KiloClaw-REBORN", desc: "Research & intelligence synthesis agent", icon: IconBrain, color: "#f59e0b" },
  { name: "Grok", desc: "Real-time web intelligence and X/Twitter analysis", icon: IconCloudComputing, color: "#3b82f6" },
  { name: "Composio", desc: "250+ tool integrations bridge", icon: IconPlugConnected, color: "#ec4899" },
  { name: "Hyperbrowser", desc: "Browser automation, stealth sessions, web scraping", icon: IconChartBar, color: "#8b5cf6" },
  { name: "Pinecone", desc: "Vector knowledge base for persistent agent memory", icon: IconDatabase, color: "#10b981" },
];

const stats = [
  { label: "Active Agents", value: "6" },
  { label: "Integrated Tools", value: "280+" },
  { label: "Monitored Repos", value: "8" },
  { label: "Daily Events", value: "1.2K+" },
];

export default function Landing() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div style={styles.page}>
      {/* Nav */}
      <nav style={{ ...styles.container, display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 20, paddingBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg, ${theme.accent}, ${theme.cyan})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700 }}>N</div>
          <span style={{ fontWeight: 600, fontSize: 15 }}>NEXUS<span style={{ color: theme.accent }}> OS</span></span>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href="https://github.com/specimba/nexusalpha" target="_blank" style={{ color: theme.muted, fontSize: 13, textDecoration: "none" }}>GitHub</a>
          <a href="#dashboard" style={{ color: theme.muted, fontSize: 13, textDecoration: "none" }}>Dashboard</a>
          <a href="#docs" style={{ color: theme.muted, fontSize: 13, textDecoration: "none" }}>Docs</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ ...styles.container, paddingTop: 80, paddingBottom: 80, textAlign: "center" }}>
        <div style={{ display: "inline-flex", gap: 6, padding: "6px 16px", borderRadius: 20, background: `${theme.accent}15`, border: `1px solid ${theme.border}`, fontSize: 12, color: theme.accentLight, marginBottom: 24 }}>
          <IconCloudComputing size={14} />
          Multi-Agent Infrastructure
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
          NEXUS <span style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Operating System</span>
        </h1>
        <p style={{ fontSize: 18, color: theme.muted, maxWidth: 640, margin: "0 auto 40px", lineHeight: 1.6 }}>
          A sovereign multi-agent swarm — orchestrating AI agents across Slack, Telegram, GitHub, 
          and 280+ tools with vector memory, Kafka event bus, and autonomous decision-making.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/dashboard" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 10, background: theme.accent, color: "#fff", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Open Dashboard <IconArrowUpRight size={16} />
          </a>
          <a href="https://github.com/specimba/nexusalpha" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 10, border: `1px solid ${theme.border}`, color: theme.fg, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
            <IconBrandGithub size={16} /> View on GitHub
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ ...styles.container, paddingBottom: 60 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, background: theme.card, borderRadius: 16, padding: 32, border: `1px solid ${theme.border}` }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: theme.accentLight }}>{s.value}</div>
              <div style={{ fontSize: 12, color: theme.muted, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Systems Grid */}
      <section style={{ ...styles.container, paddingBottom: 80 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>Agent Mesh</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
          {systems.map((sys) => {
            const Icon = sys.icon;
            return (
              <div key={sys.name} style={{ background: theme.card, borderRadius: 12, padding: 20, border: `1px solid ${theme.border}`, transition: "transform 0.2s, border-color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = sys.color; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.transform = "none"; }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ minWidth: 40, height: 40, borderRadius: 10, background: `${sys.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={20} color={sys.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{sys.name}</div>
                    <div style={{ fontSize: 12, color: theme.muted, marginTop: 4, lineHeight: 1.4 }}>{sys.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" style={{ ...styles.container, paddingBottom: 80 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Live Dashboard</h2>
        <p style={{ fontSize: 14, color: theme.muted, marginBottom: 24 }}>Real-time system status from the NEXUS command center.</p>
        <div style={{ background: theme.card, borderRadius: 16, border: `1px solid ${theme.border}`, overflow: "hidden", minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16, padding: 40 }}>
          <IconChartBar size={48} color={theme.accent} />
          <p style={{ color: theme.muted, fontSize: 14, textAlign: "center", maxWidth: 400, lineHeight: 1.6 }}>
            The full NEXUS Operations Dashboard is being deployed here — real-time agent status, event streams, 
            system metrics, and command dispatch.
          </p>
          <a href="https://github.com/specimba/nexusalpha/tree/DASHBOARD-GLM51" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 8, background: theme.accent, color: "#fff", fontSize: 13, fontWeight: 500, textDecoration: "none" }}>
            <IconBrandGithub size={14} /> View Dashboard Branch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${theme.border}`, padding: "32px 0" }}>
        <div style={{ ...styles.container, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontSize: 12, color: theme.muted }}>
            © 2026 <span style={{ color: theme.accent }}>NEXUS</span> OS — A DoppelGround Foundation Project
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <IconBrandSlack size={16} color={theme.muted} />
            <IconBrandTelegram size={16} color={theme.muted} />
            <IconBrandGithub size={16} color={theme.muted} />
          </div>
        </div>
      </footer>
    </div>
  );
}
