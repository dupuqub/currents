
`use strict`

//......................................................................................................................

project.bricks.scenes.main.children.title = inner =>
({
  id: `mainTitle`,
  classes: [`center`],
  styles:
  [
    [`color`, `#BBB`],
    [`font-size`, `calc(var(--u) * 200)`],
    [`margin-bottom`, `calc(var(--u) * 150)`],
  ],
  inner,
})

