import { useContext } from "react";
import { LenisContext } from "../context/LenisContext";

export const useLenis = () => {
  const context = useContext(LenisContext);
  if (context === undefined) {
    throw new Error("useLenis must be used within LenisProvider");
  }
  return context;
};