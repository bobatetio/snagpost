"use client";

import Link from "next/link";
import { useState } from "react";

const DASHBOARD_URL = "https://bobatetio.github.io/snagpost-dashboard/";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = DASHBOARD_URL;
    }, 800);
  }

  return (
    <div className="auth-page">
      <div className="auth-left">
        <div className="auth-logo">
          <Link href="/" className="auth-logo-link">
            <LogoMark />
            <span>SnagPost</span>
          </Link>
        </div>

        <div className="auth-form-wrap">
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-sub">Log in to your SnagPost account.</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <label className="auth-label">
              <span>Email</span>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
              />
            </label>
            <label className="auth-label">
              <span className="auth-label-row">
                Password
                <Link href="/forgot-password" className="auth-forgot">Forgot password?</Link>
              </span>
              <input
                type="password"
                required
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
              />
            </label>
            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="auth-switch">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="auth-switch-link">Sign up free</Link>
          </p>
        </div>
      </div>

      <div className="auth-right">
        <AuthPanel />
      </div>
    </div>
  );
}

function LogoMark() {
  return (
    <span className="auth-logomark">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    </span>
  );
}

function AuthPanel() {
  return (
    <div className="auth-panel">
      <div className="auth-panel-glow" />
      <div className="auth-panel-content">
        <h2 className="auth-panel-title">Stop guessing.<br />Start seeing.</h2>
        <p className="auth-panel-sub">
          Capture every post, like, and share from any Facebook profile — straight to a dashboard you can study.
        </p>
        <ul className="auth-perks">
          {[
            "Captures posts as you scroll — no clicking",
            "Analytics across every profile you track",
            "AI-ready exports to Claude, ChatGPT, Excel",
            "Discovery feed of top 1% viral posts",
          ].map((p) => (
            <li key={p} className="auth-perk">
              <Tick />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Tick() {
  return (
    <span className="auth-tick">
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <path d="m2 5 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
