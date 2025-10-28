body class="min-h-screen"

img class="aspect-thumbnail"
width={1024}
height={1024 / 1.5}

flex: grow, flex-1

NEW CSS:

pb-[max(6rem,20vh)]
gap-[min(6vw,6rem)]

grid functions: repeat(), minmax()

clamp() - for more flexible gaps or margins, for example.

ASPECT-RATIO (used for a circular button)
The aspect-ratio CSS property allows you to define the desired width-to-height ratio of an element's box.

```
place-items: center;
padding: 0 2em;
aspect-ratio: 1;
```

PLACE-ITEMS: align-items and justify-items

INSET-0:
top: 0;
right: 0;
bottom: 0;
left: 0;

EXAMPLE: BIG ROUND BUTTON

```
<a class="inline-grid px-10 aspect-square place-items-center rounded-full"></a>
```

ACCESSIBILITY

// for screen-readers (for visually impared people) - still in the DOM but hidden (exists in TW).

```
.sr-only {
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap; /_ added line _/
border: 0;
}
```

btn aria-controls="primary-navigation" + ul id="primary-navigation"
aria-expanded="false"
aria-hidden="true" (hiding elem from screen readers)
skip to content - id="main" <a>Skip to main</a>, hidden but appearing on focus

HOVER BASED ON PARENT ELEMENT:

- on parent: group,
- on children: group-hover:border-b-2, etc.

but here it was enough:

```
 <li class={`${isActive ? "border-b-2 border-white" : ""} pb-2 hover:border-b-2 hover:border-white/40`}></li>
```

MOBILE MENU: transform-x-100% transition
TO CHECK IF MENU IS OPEN: check data attribute.

QUESTION:

- HOW TO MAKE the WIDTH of a paragraph FIT the WIDTH of the title above it?
  (grid columns)

  in the tutorial they used a fancy interesting grid, with the first and the last columns for the margins.

```
  <div class="grid gap-x-8 grid-cols-[minmax(2rem,1fr)_repeat(2,_minmax(0,30rem))_minmax(2rem,1fr)]"
  >
      <div class="col-start-2"></div>
      <div class="col-start-3"></div>
  </div>
```

- HOW TO MAKE NAVIGATION HALF-TRANSPARENT? ===> backdrop-blur (TW)

- WHERE TO STORE IMAGES IN ASTRO?
  (gpt answer)
  Images you import directly in .astro, .jsx, or .tsx (e.g. <img src={myImage}>) - src/assets
  Images you reference in CSS or Tailwind (bg-[url(...)]) - public/

SOLUTION: Instead of attaching the images as bg to body, I added an image stored in assets
so that images are properly processed by Astro:

```
<img
    class="hidden md:block fixed top-0 left-0 w-full h-full -z-10"
    src={desktopBg.src}
    alt="planet seen from space"
    fetchpriority="high"
  />
```

- WHAT'S og:image

WHAT I LEARNED TODAY (15.10.25.)

- IMAGES in Astro: keep in src/assets so that they are processed by Astro, import in a file, use with <img>, etc.
  As I understood, in order to have images as a background image (for example, attached to body), they have to be in public folder.

FLEX GROW - for an element to grow,
FLEX-1 FLEX-1 - two identical columns

INSET instead of top, right, bottom, left.

WHAT I LEARNED TODAY (16-17.10.25.)

- group hover (group on li, added span with group-hover inside li)

- use data attributes (not classes) to work with js (check it to toggle menu)

WHAT I LEARNED TODAY (18.10.25.)

Image optimisation (images for different screens, gpt advice)

```
  <picture>
    <source srcset={desktopBg.src} media="(min-width: 768px)" />
    <source srcset={tabletBg.src} media="(min-width: 640px)" />
    <img
      src={mobileBg.src}
      alt="planet seen from space"
      class="fixed inset-0 w-full h-full object-cover -z-10"
      fetchpriority="high"
    />
  </picture>
```

align-content: start ===> on grid container, for larger screens for elements not to stretch too far away from each other (i just did max-w)
