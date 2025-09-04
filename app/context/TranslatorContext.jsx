"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Create context
const TranslatorContext = createContext();

// Utility: collect all text nodes
function getTextNodes(node) {
  let nodes = [];
  if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
    nodes.push(node);
  } else {
    for (let child of node.childNodes) {
      nodes = nodes.concat(getTextNodes(child));
    }
  }
  return nodes;
}

// Utility: chunk array
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export function TranslatorProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") || "en";
    setLang(saved);
    document.documentElement.lang = saved;
    document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
  }, []);

  // Translate function
  const translatePage = async (newLang) => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";

    const textNodes = getTextNodes(document.body);
    const texts = textNodes.map((n) => n.nodeValue);

    try {
      const textChunks = chunkArray(texts, 50);
      let translatedResults = [];

      for (let chunk of textChunks) {
        const res = await fetch("https://libretranslate.com/translate", {
          method: "POST",
          body: JSON.stringify({
            q: chunk,
            source: "en",
            target: newLang,
            format: "text",
          }),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        if (Array.isArray(data)) {
          translatedResults = [
            ...translatedResults,
            ...data.map((d) => d.translatedText),
          ];
        } else {
          translatedResults.push(data.translatedText);
        }
      }

      translatedResults.forEach((t, i) => {
        if (textNodes[i]) textNodes[i].nodeValue = t;
      });
    } catch (err) {
      console.error("Translation failed:", err);
    }
  };

  return (
    <TranslatorContext.Provider value={{ lang, translatePage }}>
      {children}
    </TranslatorContext.Provider>
  );
}

// Custom hook
export function useTranslator() {
  return useContext(TranslatorContext);
}
