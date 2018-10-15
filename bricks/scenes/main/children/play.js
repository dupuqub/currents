
`use strict`

//......................................................................................................................

project.bricks.scenes.main.children.play = (inner, funktion) =>
({
  id: `mainPlay`,
  classes: [`center`, `pointer`, `mainButton`, `delaySlowFadeIn`],
  extras: [[`onclick`, funktion]],
  styles:
  [
    [`width`, `25%`],
    [`height`, `15%`],
    [`transition`, `all 0.2s`],
    [`font-size`, `calc(var(--u) * 80)`],
    [`margin-bottom`, `calc(var(--u) * 10)`],
    [`border-radius`, `calc(var(--u) * 30)`],
  ],
  inner,
})

