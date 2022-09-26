import React, { useState, useEffect } from "react";
export function useTitle(defaultTitle?: string): { title: string, setTitle: React.Dispatch<React.SetStateAction<string>> } {
  const [title, setTitle] = useState(defaultTitle ?? "React App");
  useEffect(() => {
    document.title = title;
    console.log("");
  }, [title]);
  return { title, setTitle };
}
