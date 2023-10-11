// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { CHAR_COLON } from "./_constants.ts";
import { assertPath, isPathSeparator, isPosixPathSeparator, isWindowsDeviceRoot } from "./_util.ts";
/**
 * Verifies whether provided path is absolute
 * @param path to be verified as absolute
 */ export function windowsIsAbsolute(path) {
  assertPath(path);
  const len = path.length;
  if (len === 0) return false;
  const code = path.charCodeAt(0);
  if (isPathSeparator(code)) {
    return true;
  } else if (isWindowsDeviceRoot(code)) {
    // Possible device root
    if (len > 2 && path.charCodeAt(1) === CHAR_COLON) {
      if (isPathSeparator(path.charCodeAt(2))) return true;
    }
  }
  return false;
}
/**
 * Verifies whether provided path is absolute
 * @param path to be verified as absolute
 */ export function posixIsAbsolute(path) {
  assertPath(path);
  return path.length > 0 && isPosixPathSeparator(path.charCodeAt(0));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjIwMy4wL3BhdGgvX2lzX2Fic29sdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE4LTIwMjMgdGhlIERlbm8gYXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gTUlUIGxpY2Vuc2UuXG4vLyBUaGlzIG1vZHVsZSBpcyBicm93c2VyIGNvbXBhdGlibGUuXG5cbmltcG9ydCB7IENIQVJfQ09MT04gfSBmcm9tIFwiLi9fY29uc3RhbnRzLnRzXCI7XG5pbXBvcnQge1xuICBhc3NlcnRQYXRoLFxuICBpc1BhdGhTZXBhcmF0b3IsXG4gIGlzUG9zaXhQYXRoU2VwYXJhdG9yLFxuICBpc1dpbmRvd3NEZXZpY2VSb290LFxufSBmcm9tIFwiLi9fdXRpbC50c1wiO1xuXG4vKipcbiAqIFZlcmlmaWVzIHdoZXRoZXIgcHJvdmlkZWQgcGF0aCBpcyBhYnNvbHV0ZVxuICogQHBhcmFtIHBhdGggdG8gYmUgdmVyaWZpZWQgYXMgYWJzb2x1dGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpbmRvd3NJc0Fic29sdXRlKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBhc3NlcnRQYXRoKHBhdGgpO1xuXG4gIGNvbnN0IGxlbiA9IHBhdGgubGVuZ3RoO1xuICBpZiAobGVuID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgaWYgKGlzUGF0aFNlcGFyYXRvcihjb2RlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzV2luZG93c0RldmljZVJvb3QoY29kZSkpIHtcbiAgICAvLyBQb3NzaWJsZSBkZXZpY2Ugcm9vdFxuXG4gICAgaWYgKGxlbiA+IDIgJiYgcGF0aC5jaGFyQ29kZUF0KDEpID09PSBDSEFSX0NPTE9OKSB7XG4gICAgICBpZiAoaXNQYXRoU2VwYXJhdG9yKHBhdGguY2hhckNvZGVBdCgyKSkpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVmVyaWZpZXMgd2hldGhlciBwcm92aWRlZCBwYXRoIGlzIGFic29sdXRlXG4gKiBAcGFyYW0gcGF0aCB0byBiZSB2ZXJpZmllZCBhcyBhYnNvbHV0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9zaXhJc0Fic29sdXRlKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBhc3NlcnRQYXRoKHBhdGgpO1xuICByZXR1cm4gcGF0aC5sZW5ndGggPiAwICYmIGlzUG9zaXhQYXRoU2VwYXJhdG9yKHBhdGguY2hhckNvZGVBdCgwKSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFO0FBQzFFLHFDQUFxQztBQUVyQyxTQUFTLFVBQVUsUUFBUSxrQkFBa0I7QUFDN0MsU0FDRSxVQUFVLEVBQ1YsZUFBZSxFQUNmLG9CQUFvQixFQUNwQixtQkFBbUIsUUFDZCxhQUFhO0FBRXBCOzs7Q0FHQyxHQUNELE9BQU8sU0FBUyxrQkFBa0IsSUFBWTtFQUM1QyxXQUFXO0VBRVgsTUFBTSxNQUFNLEtBQUssTUFBTTtFQUN2QixJQUFJLFFBQVEsR0FBRyxPQUFPO0VBRXRCLE1BQU0sT0FBTyxLQUFLLFVBQVUsQ0FBQztFQUM3QixJQUFJLGdCQUFnQixPQUFPO0lBQ3pCLE9BQU87RUFDVCxPQUFPLElBQUksb0JBQW9CLE9BQU87SUFDcEMsdUJBQXVCO0lBRXZCLElBQUksTUFBTSxLQUFLLEtBQUssVUFBVSxDQUFDLE9BQU8sWUFBWTtNQUNoRCxJQUFJLGdCQUFnQixLQUFLLFVBQVUsQ0FBQyxLQUFLLE9BQU87SUFDbEQ7RUFDRjtFQUNBLE9BQU87QUFDVDtBQUVBOzs7Q0FHQyxHQUNELE9BQU8sU0FBUyxnQkFBZ0IsSUFBWTtFQUMxQyxXQUFXO0VBQ1gsT0FBTyxLQUFLLE1BQU0sR0FBRyxLQUFLLHFCQUFxQixLQUFLLFVBQVUsQ0FBQztBQUNqRSJ9