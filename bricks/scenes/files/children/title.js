
`use strict`

//......................................................................................................................

project.bricks.scenes.files.children.title = inner =>
({
  id: `filesTitle`,
  classes: [`center`],
  styles:
  [
    [`color`, `#BBB`],
    [`font-size`, `calc(var(--u) * 120)`],
    [`transform`, `translateY(calc(var(--u) * 40))`],
  ],
  inner,
})

