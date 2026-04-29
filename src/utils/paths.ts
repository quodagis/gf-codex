const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function sitePath(path: string) {
  if (/^(https?:|mailto:|tel:)/.test(path)) {
    return path;
  }

  if (path === "/") {
    return `${base}/`;
  }

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
