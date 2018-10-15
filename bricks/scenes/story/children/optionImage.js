
`use strict`

//......................................................................................................................

project.bricks.scenes.story.children.optionImage = (block, image) =>
({
  classes: [`slowFadeIn`],
  styles:
  [
    [`width`, `96%`],
    [`height`, `40%`],
    [`background`, `#222`],
    [`border-radius`, `calc(var(--u) * 30) calc(var(--u) * 30) 0 0`],
  ],
  inner:
  {
    id: `optionImage${block}`,
    styles:
    [
      [`width`, `100%`],
      [`height`, `100%`],
      [`box-sizing`, `border-box`],
      [`border-radius`, `calc(var(--u) * 30)`],
      [`border`, `calc(var(--u) * 15) solid #222`],
      [`background-image`, image ? `url(${image})` : ``],
      [`background-size`, `cover`],
    ],
  },
})

