
`use strict`

//......................................................................................................................

project.bricks.scenes.story.children.blockLeft = story =>
({
  id: `blockLeft`,
  classes: [`center`, `column`, `slowFadeInDelayed`],
  styles:
  [
    [`width`, `calc(100% / 3)`],
    [`height`, `82%`],
    [`float`, `left`],
  ],
  inner:
  [
    project.bricks.scenes.story.children.optionImage(`Left`, story.image),
    project.bricks.scenes.story.children.optionText(`Left`, story.text),
  ],
})

