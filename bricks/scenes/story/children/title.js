
`use strict`

//......................................................................................................................

project.bricks.scenes.story.children.title = story =>
({
  id: `storyTitle`,
  classes: [`center`],
  styles:
  [
    [`width`, `100%`],
    [`height`, `12%`],
    [`color`, `#BBB`],
    [`background`, `#222`],
    [`font-size`, `calc(var(--u) * 60)`],
  ],
  inner: story.title,
})

