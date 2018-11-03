
`use strict`

//......................................................................................................................

project.bricks.scenes.main.children.title = inner =>
({
  id: `mainTitle`,
  classes: [`center`, `slowFadeIn`],
  styles:
  [
    [`height`, `47%`],
    [`color`, `#BBB`],
    [`font-size`, `calc(var(--u) * 200)`],
    [`transform`, `translateY(calc(var(--u) * 60))`],
  ],
  inner,
})

