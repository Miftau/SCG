"use client";
import { useEffect } from "react";

export default function DisableRightClick({ children }) {
  useEffect(() => {
    // ----- 1. Disable right-click -----
    const handleContextMenu = (e) => e.preventDefault();

    // ----- 2. Disable shortcut keys -----
    const handleKeyDown = (e) => {
      // F12
      if (e.key === "F12") e.preventDefault();

      // Ctrl+Shift+I / J / C or Cmd+Opt+I / J / C
      if (
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        (e.metaKey && e.altKey && ["I", "J", "C"].includes(e.key.toUpperCase()))
      ) {
        e.preventDefault();
      }

      // Ctrl+U or Cmd+U (View Source)
      if ((e.ctrlKey || e.metaKey) && e.key.toUpperCase() === "U") {
        e.preventDefault();
      }

      // Ctrl+S / C / V / X / P or Cmd+S / C / V / X / P
      if ((e.ctrlKey || e.metaKey) && ["S", "C", "V", "X", "P"].includes(e.key.toUpperCase())) {
        e.preventDefault();
      }
    };

    // ----- 3. Disable text selection & drag -----
    const handleSelectStart = (e) => e.preventDefault();
    const handleDragStart = (e) => e.preventDefault();

    // ----- 4. DevTools detection (safe) -----
    let devToolsOpenCounter = 0;
    const threshold = 200; 
    const checkDevTools = () => {
      const isDesktop = window.innerWidth > 768; // Ignore small screens
      if (!isDesktop) {
        console.log("Skipping DevTools check: Not a desktop screen");
        return;
      }

      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      // Log differences for debugging
      console.log(`widthDiff: ${widthDiff}, heightDiff: ${heightDiff}, counter: ${devToolsOpenCounter}`);

      // Detect DevTools based on reasonable differences
      if (widthDiff > threshold || heightDiff > threshold) {
        devToolsOpenCounter += 1;
      } else {
        devToolsOpenCounter = 0;
      }

      // Trigger only after 4 consecutive checks (~4s)
      if (devToolsOpenCounter > 3) {
        console.warn("DevTools detected!");
        // Disabled aggressive actions for testing
        window.location.href = "about:blank";
        // document.body.innerHTML = "";
      }
    };

    // ----- Attach listeners -----
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("dragstart", handleDragStart);
    window.addEventListener("resize", checkDevTools);

    // Run checkDevTools after a longer delay to ensure stable window sizes
    const initialCheck = setTimeout(checkDevTools, 2000); // Increased to 2s

    // Run periodically
    const interval = setInterval(checkDevTools, 1000);

    // ----- Cleanup -----
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("dragstart", handleDragStart);
      window.removeEventListener("resize", checkDevTools);
      clearTimeout(initialCheck);
      clearInterval(interval);
    };
  }, []);

  return <>{children}</>;
}