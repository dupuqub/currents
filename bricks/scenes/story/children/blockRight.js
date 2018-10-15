
`use strict`

//......................................................................................................................

project.bricks.scenes.story.children.blockRight = story =>
({
  id: `blockRight`,
  classes: [`center`, `column`, `delaySlowFadeIn`],
  styles:
  [
    [`width`, `calc(100% / 3)`],
    [`height`, `82%`],
    [`float`, `left`],
  ],
  inner:
  [
    project.bricks.scenes.story.children.optionImage(`Right`),
    project.bricks.scenes.story.children.optionText(`Right`),
  ],
})

