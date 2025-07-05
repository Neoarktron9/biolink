import React, { useRef } from "react";
import "./index.css";

export default function App() {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  // Parallax tilt and glow effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 10; // max 10deg
    card.style.transform = `perspective(700px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    // Border glow logic
    const topDist = y;
    const bottomDist = rect.height - y;
    const leftDist = x;
    const rightDist = rect.width - x;
    const min = Math.min(topDist, bottomDist, leftDist, rightDist);
    glow.classList.remove("top", "right", "bottom", "left");
    if (min === topDist) {
      glow.classList.add("top");
    } else if (min === rightDist) {
      glow.classList.add("right");
    } else if (min === bottomDist) {
      glow.classList.add("bottom");
    } else {
      glow.classList.add("left");
    }
  };
  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (card) {
      card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
    }
    if (glow) {
      glow.classList.remove("top", "right", "bottom", "left");
    }
  };

  return (
    <div
      className="card"
      id="profileCard"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.25s cubic-bezier(.4,0,.2,1)" }}
    >
      <div className="card-glow" id="cardGlow" ref={glowRef}></div>
      <div className="card-top"></div>
      <img
        className="profile-img"
        src="https://placehold.co/64x64"
        alt="Profile"
      />
      <div className="card-content">
        <div className="username">maneki</div>
        <div className="links">
          <a className="link-btn" href="#">
            <span className="icon">
              {/* Twitter X SVG */}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.53 3H21L13.47 10.98L22.24 21H15.68L10.61 14.89L4.97 21H1.5L9.53 12.49L1 3H7.68L12.27 8.61L17.53 3ZM16.32 19H18.13L7.76 4.89H5.82L16.32 19Z" fill="#e0e0e0"/></svg>
            </span>
            Twitter
          </a>
          <a className="link-btn" href="#">
            <span className="icon">
              {/* Telegram SVG */}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.75 4.73L18.6 19.13C18.36 20.13 17.75 20.38 16.89 19.93L12.13 16.36L9.97 18.44C9.72 18.69 9.53 18.88 9.06 18.88L9.38 14.02L17.88 6.77C18.25 6.47 17.81 6.29 17.34 6.59L6.75 13.13L2.04 11.68C1.06 11.38 1.05 10.72 2.23 10.27L20.25 3.36C21.09 3.05 21.75 3.51 21.75 4.73Z" fill="#e0e0e0"/></svg>
            </span>
            Telegram
          </a>
          <a className="link-btn" href="#">
            <span className="icon">
              {/* Key SVG (PGP) */}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="15" r="4" stroke="#e0e0e0" strokeWidth="1.5"/><rect x="13" y="13" width="7" height="3" rx="1.5" fill="#e0e0e0"/></svg>
            </span>
            PGP
          </a>
          <a className="link-btn" href="#">
            <span className="icon">
              {/* Email SVG */}
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#e0e0e0" strokeWidth="1.5"/><path d="M3 7l9 7 9-7" stroke="#e0e0e0" strokeWidth="1.5"/></svg>
            </span>
            Email
          </a>
        </div>
        <div className="quote">Idolize none but thyself.</div>
      </div>
    </div>
  );
} 