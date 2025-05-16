import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer les plugins GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Configuration globale de GSAP
gsap.config({
  nullTargetWarn: false,
});

export default gsap;
