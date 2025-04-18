import { demo } from "./astro.config.mjs";

(async () => {
  try {
    await demo();
    console.log("Script executed after Astro build");
  } catch (error) {
    console.error("Error in script:", error.message);
  }
})();
