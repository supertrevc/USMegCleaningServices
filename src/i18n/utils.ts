export type Lang = "en" | "es";
export const LANGS: Lang[] = ["en", "es"];
export const DEFAULT_LANG: Lang = "en";

/** Extract the active language from a URL pathname (`/en/...`, `/es/...`). */
export function getLang(url: URL): Lang {
  const seg = url.pathname.split("/").filter(Boolean)[0];
  return seg === "es" ? "es" : "en";
}

/**
 * Page key → localized slug per language. The home page is "".
 * Used to build hreflang alternates and the language toggle.
 */
export const ROUTES: Record<string, Record<Lang, string>> = {
  home: { en: "/en/", es: "/es/" },
  services: { en: "/en/services/", es: "/es/servicios/" },
  book: { en: "/en/book/", es: "/es/reservar/" },
  privacy: { en: "/en/privacy/", es: "/es/privacidad/" },
  terms: { en: "/en/terms/", es: "/es/terminos/" },
  cookies: { en: "/en/cookies/", es: "/es/cookies/" },
  accessibility: { en: "/en/accessibility/", es: "/es/accesibilidad/" },
};

/** Reverse lookup: which page key does this pathname belong to? */
export function pageKeyFromPath(pathname: string): string | null {
  const norm = pathname.endsWith("/") ? pathname : pathname + "/";
  for (const [key, byLang] of Object.entries(ROUTES)) {
    if (Object.values(byLang).includes(norm)) return key;
  }
  return null;
}

/** The equivalent URL in the other language for the current page. */
export function alternateForLang(pathname: string, lang: Lang): string {
  const key = pageKeyFromPath(pathname);
  if (key) return ROUTES[key][lang];
  return lang === "es" ? "/es/" : "/en/";
}

export const HTML_LANG: Record<Lang, string> = { en: "en-US", es: "es-US" };
export const OG_LOCALE: Record<Lang, string> = { en: "en_US", es: "es_US" };
