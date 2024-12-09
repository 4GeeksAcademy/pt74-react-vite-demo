import { useState } from "react";

const VolumeSlider = () => {
  const [volume, setVolume] = useState(0);

  return (
    <div className="border border-2 rounded border-primary-subtle px-3 py-2">
      <h1 className={volume > 10 ? "text-danger" : ""}>{volume}</h1>
      <input
        type="range"
        value={volume}
        min={0}
        max={11}
        step={1}
        onChange={(ev) => setVolume(ev.target.value)}
        className="form-range"
      />
    </div>
  );
};

export default VolumeSlider;
