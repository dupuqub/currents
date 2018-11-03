
`use strict`

//......................................................................................................................

project.bricks.scenes.main.children.play = (inner, funktion) =>
({
  classes: [`center`],
  styles:
  [
    [`width`, `100%`],
    [`height`, `47%`],
  ],
  inner:
  {
    id: `mainPlay`,
    classes: [`center`, `pointer`, `mainButton`, `slowFadeInDelayed`],
    extras: [[`onclick`, funktion]],
    styles:
    [
      [`width`, `25%`],
      [`height`, `30%`],
      [`transition`, `all 0.2s`],
      [`font-size`, `calc(var(--u) * 80)`],
      [`transform`, `translateY(calc(var(--u) * -80))`],
      [`border-radius`, `calc(var(--u) * 30)`],
    ],
    inner,
  },
})

