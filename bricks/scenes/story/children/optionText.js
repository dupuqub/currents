
`use strict`

//......................................................................................................................

project.bricks.scenes.story.children.optionText = (block, text) =>
({
  id: `optionText${block}`,
  classes: [`center`],
  styles:
  [
    [`width`, `96%`],
    [`height`, `57%`],
    [`color`, `#BBB`],
    [`padding`, `5%`],
    [`background`, `#222`],
    [`box-sizing`, `border-box`],
    [`font-size`, `calc(var(--u) * 40)`],
    [`border-radius`, `0 0 calc(var(--u) * 20) calc(var(--u) * 20)`],
  ],
  inner: text
})
