# ASCII ocean source

The unmodified `math.ts`, `renderer.ts`, `species.ts`, and `world.ts` are from
[stackedlol/ascii-sharks](https://github.com/stackedlol/ascii-sharks), pinned to
commit `c521e24a787e6d4cc460d4cf2b9815f25e4fe453`.
The upstream snapshot contains no license file.

`../ocean-background.ts` supplies the site's background lifecycle, 30 fps rendering,
smaller fish population, pause preference, reduced-motion behavior, and visibility
handling. It deliberately does not attach the demo's pointer interactions.

Run `npm install` and `npm run build:ocean` after editing these sources. The compiled
`assets/js/ocean-background.js` is checked in so GitHub Pages needs only Jekyll.
These underscore-prefixed source directories are excluded from Jekyll output.
