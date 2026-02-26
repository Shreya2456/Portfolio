import { useEffect, useState } from "react";
import "../styles/backgrounds.css";

const OPTIONS = ["gradient", "blobs", "stripes"] as const;
type Option = typeof OPTIONS[number];

const Backgrounds = () => {
  const [mode, setMode] = useState<Option>(() => {
    try {
      const stored = localStorage.getItem("bgAnimation");
      if (stored && OPTIONS.includes(stored as Option)) return stored as Option;
    } catch (e) {
      // ignore
    }
    return "gradient";
  });

  useEffect(() => {
    try {
      localStorage.setItem("bgAnimation", mode);
    } catch (e) {
      // ignore
    }
  }, [mode]);

  return (
    <>
      <div className={`absolute inset-0 pointer-events-none bg-anim-${mode}`} aria-hidden>
        {mode === "blobs" && <div />}
      </div>

      {/* UI control - small select in top-right */}
      <div className="absolute top-4 right-4 z-30">
        <label className="sr-only" htmlFor="bg-select">Background animation</label>
        <select
          id="bg-select"
          value={mode}
          onChange={(e) => setMode(e.target.value as Option)}
          className="bg-background/60 backdrop-blur-sm text-sm px-3 py-2 rounded-lg border border-border focus:outline-none"
          aria-label="Choose background animation"
        >
          <option value="gradient">Gradient</option>
          <option value="blobs">Blobs</option>
          <option value="stripes">Stripes</option>
        </select>
      </div>
    </>
  );
};

export default Backgrounds;
