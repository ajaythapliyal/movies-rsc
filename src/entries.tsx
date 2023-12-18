import { defineRouter } from "waku/router/server";

export default defineRouter(
  async (id) => {
    switch (id) {
      case "layout":
        return import("./components/shell.js");
      case "page":
      case "movies/page":
        return import("./components/movies.js");
      default:
        return null;
    }
  },
  async () => {
    return ["/", "/movies"];
  }
);
