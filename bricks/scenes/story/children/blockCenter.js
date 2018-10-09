
`use strict`

//......................................................................................................................

project.bricks.scenes.story.children.blockCenter = story =>
({
  id: `blockCenter`,
  classes: [`center`, `column`],
  styles:
  [
    [`width`, `calc(100% / 3)`],
    [`height`, `82%`],
    [`float`, `left`],
  ],
  inner: () =>
  {
    const {optionButton} = project.bricks.scenes.story.children
    const brick =

      dunp.array
      .new(story.options.length)
      .map((item, index) => optionButton(story.options[index], index))

    return brick
  },
})

