// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { isWindows } from "./_os.ts";
import { posixNormalize, windowsNormalize } from "./_normalize.ts";
/**
 * Normalize the `path`, resolving `'..'` and `'.'` segments.
 * Note that resolving these segments does not necessarily mean that all will be eliminated.
 * A `'..'` at the top-level will be preserved, and an empty path is canonically `'.'`.
 * @param path to be normalized
 */ export function normalize(path) {
  return isWindows ? windowsNormalize(path) : posixNormalize(path);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjIwMy4wL3BhdGgvbm9ybWFsaXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDE4LTIwMjMgdGhlIERlbm8gYXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gTUlUIGxpY2Vuc2UuXG4vLyBUaGlzIG1vZHVsZSBpcyBicm93c2VyIGNvbXBhdGlibGUuXG5cbmltcG9ydCB7IGlzV2luZG93cyB9IGZyb20gXCIuL19vcy50c1wiO1xuaW1wb3J0IHsgcG9zaXhOb3JtYWxpemUsIHdpbmRvd3NOb3JtYWxpemUgfSBmcm9tIFwiLi9fbm9ybWFsaXplLnRzXCI7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgYHBhdGhgLCByZXNvbHZpbmcgYCcuLidgIGFuZCBgJy4nYCBzZWdtZW50cy5cbiAqIE5vdGUgdGhhdCByZXNvbHZpbmcgdGhlc2Ugc2VnbWVudHMgZG9lcyBub3QgbmVjZXNzYXJpbHkgbWVhbiB0aGF0IGFsbCB3aWxsIGJlIGVsaW1pbmF0ZWQuXG4gKiBBIGAnLi4nYCBhdCB0aGUgdG9wLWxldmVsIHdpbGwgYmUgcHJlc2VydmVkLCBhbmQgYW4gZW1wdHkgcGF0aCBpcyBjYW5vbmljYWxseSBgJy4nYC5cbiAqIEBwYXJhbSBwYXRoIHRvIGJlIG5vcm1hbGl6ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gaXNXaW5kb3dzID8gd2luZG93c05vcm1hbGl6ZShwYXRoKSA6IHBvc2l4Tm9ybWFsaXplKHBhdGgpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUEwRTtBQUMxRSxxQ0FBcUM7QUFFckMsU0FBUyxTQUFTLFFBQVEsV0FBVztBQUNyQyxTQUFTLGNBQWMsRUFBRSxnQkFBZ0IsUUFBUSxrQkFBa0I7QUFDbkU7Ozs7O0NBS0MsR0FDRCxPQUFPLFNBQVMsVUFBVSxJQUFZO0VBQ3BDLE9BQU8sWUFBWSxpQkFBaUIsUUFBUSxlQUFlO0FBQzdEIn0=