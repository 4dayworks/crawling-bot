export const l = (
  header: string,
  color: "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white",
  message?: string,
  isTime: boolean = true
) => {
  const timeMessage = !isTime ? "" : "[utc]" + new Date().toISOString().slice(5, 19).replace("-", "/") + "+9:00";
  switch (color) {
    case "red":
      console.log("\x1b[31m%s\x1b[0m %s", header.padStart(10), timeMessage, message); // red
      break;
    case "green":
      console.log("\x1b[32m%s\x1b[0m %s", header.padStart(10), timeMessage, message); // green
      break;
    case "yellow":
      console.log("\x1b[33m%s\x1b[0m %s", header.padStart(10), timeMessage, message); // yellow
      break;
    case "blue":
      console.log("\x1b[34m%s\x1b[0m %s", header.padStart(10), timeMessage, message); // blue
      break;
    case "magenta":
      console.log("\x1b[35m%s\x1b[0m %s", header.padStart(10), timeMessage, message); // magenta
      break;
    case "cyan":
      console.log("\x1b[36m%s\x1b[0m %s", header.padStart(10), timeMessage, message); // cyan
      break;
    default: // cyan
      console.log("%s %s", header.padStart(10), message);
      break;
  }
};
