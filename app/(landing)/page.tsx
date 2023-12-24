"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function page() {
  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [music, setMusic] = useState<string>("");
  const [image, setImage] = useState<string>("");

  async function fetchText() {
    setLoading(true);
    const res = await fetch("/api/text");
    const output = await res.json();
    console.log(output.data);
    setText(output.data);
    setLoading(false);
  }

  async function fetchMusic() {
    setLoading(true);
    const res = await fetch("/api/music");
    const output = await res.json();
    setMusic(output.data);
    setLoading(false);
  }

  async function fetchImage() {
    setLoading(true);
    const res = await fetch("/api/image");
    // const output = await res.json();
    // setImage(output.data);
    setLoading(false);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Button onClick={fetchText}>Text</Button>
      <Button onClick={fetchMusic}>Music</Button>
      <Button onClick={fetchImage}>Image</Button>
      <p className="text-red-500">{loading ? "loading..." : "not loading"}</p>
      {music ? (
        <audio controls>
          <source src={music} type="audio/ogg" />
          <source src={music} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>wait for music</p>
      )}
      {text ? <h1>{text}</h1> : <p>wait for text</p>}
    </div>
  );
}

export default page;
