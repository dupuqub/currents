
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
    [`margin-bottom`, `calc(var(--u) * 100)`],
  ],
  inner,
})

