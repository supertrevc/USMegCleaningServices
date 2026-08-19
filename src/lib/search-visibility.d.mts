/**
 * Types for search-visibility.mjs.
 *
 * The implementation is plain .mjs because the Next config cannot import
 * TypeScript, and this declaration keeps it fully typed on the TypeScript side
 * without requiring `allowJs` in every project's tsconfig.
 */
export type SearchVisibility = "noindex" | "blocked" | "public";

/** Resolved mode. Falls back to "noindex" for unset or unrecognised values. */
export declare const SEARCH_VISIBILITY: SearchVisibility;

/** True only on the production deployment of a launched, purchased site. */
export declare const IS_INDEXABLE: boolean;

/** X-Robots-Tag header value, or null when the site is public. */
export declare const ROBOTS_TAG: string | null;
