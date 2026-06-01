"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
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
          {sent ? (
            <>
              <div className="auth-sent-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#233987" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h1 className="auth-title">Check your email</h1>
              <p className="auth-sub">
                We sent a reset link to <strong>{email}</strong>. Click the link to choose a new password.
              </p>
              <Link href="/login" className="auth-btn" style={{ display: "flex", justifyContent: "center", marginTop: "24px", textDecoration: "none" }}>
                Back to sign in
              </Link>
            </>
          ) : (
            <>
              <h1 className="auth-title">Reset your password</h1>
              <p className="auth-sub">Enter your email and we&apos;ll send you a reset link.</p>

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
                <button type="submit" className="auth-btn">
                  Send reset link
                </button>
              </form>

              <p className="auth-switch">
                Remember your password?{" "}
                <Link href="/login" className="auth-switch-link">Sign in</Link>
              </p>
            </>
          )}
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
