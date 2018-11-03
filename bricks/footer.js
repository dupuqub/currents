
`use strict`

//......................................................................................................................

project.bricks.footer = () =>
{
  const lang = dunp.getLang()
  const brick =
  {
    id: `footer`,
    classes: [`center`],
    styles:
    [
      [`width`, `100%`],
      [`height`, `6%`],
      [`background`, `#222`],
      [`font-size`, `calc(var(--u) * 150)`],
    ],
    inner:
    [
      project.bricks.lang(dunp.upper(lang.name)),
    ],
  }

  return brick
}

