
`use strict`

//......................................................................................................................

project.bricks.scenes.files.brick = () =>
{
  const lang = dunp.getLang()
  const brick =
  {
    classes: [`center`, `column`],
    styles:
    [
      [`width`, `100%`],
      [`height`, `100%`],
      [`background`, `#444`],
      [`position`, `relative`],
    ],
    inner:
    [
      project.bricks.scenes.files.children.title(lang.files[0]),
      project.bricks.scenes.files.children.button(0, lang.files[1]),
      project.bricks.scenes.files.children.button(1, lang.files[1]),
      project.bricks.scenes.files.children.button(2, lang.files[1]),
      project.bricks.scenes.files.children.button(3, lang.files[1]),
      project.bricks.lang(dunp.upper(lang.name)),
    ],
  }

  return brick
}

