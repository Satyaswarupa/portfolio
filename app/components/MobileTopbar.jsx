import { IconMenu, IconX } from "./icons";

export default function MobileTopbar({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="mobile-topbar">
      <span className="gradient-text" style={{ fontWeight: 800, fontSize: 20, letterSpacing: "-0.5px" }}>
        SP.dev
      </span>
      <button
        className="menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <IconX /> : <IconMenu />}
      </button>
    </header>
  );
}
