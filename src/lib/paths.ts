export function getBasePath(): string {
  const baseUrl = (import.meta as any).env?.BASE_URL ?? "/";
  if (typeof baseUrl !== "string") return "";
  if (baseUrl === "/") return "";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

