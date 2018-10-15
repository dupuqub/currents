
`use strict`

//......................................................................................................................

project.bricks.scenes.main.brick = () =>
{
  const lang = dunp.getLang()
  const brick =
  {
    classes: [`center`, `column`, `fastFadeIn`],
    styles:
    [
      [`width`, `100%`],
      [`height`, `100%`],
      [`background`, `#444`],
      [`position`, `relative`],
    ],
    inner:
    [
      project.bricks.scenes.main.children.title(lang.title),
      project.bricks.scenes.main.children.play(lang.play, `dunp.changeScene(\`files\`)`),
      project.bricks.lang(dunp.upper(lang.name)),
    ],
  }

  return brick
}

