
`use strict`

//......................................................................................................................

project.bricks.scenes.story.children.blockCenter = story =>
{
  const needsWereMet = option =>
  {
    const {typeOf, combo, play, array} = dunp
    const {valid} = array
    const needs =

        valid(option.needs)
      ? option.needs.map(play).reduce(combo)
      : typeOf(option.needs) === `function`
      ? option.needs()
      : true

    return needs
  }

  const brick =
  {
    id: `blockCenter`,
    classes: [`center`, `column`],
    styles:
    [
      [`width`, `calc(100% / 3)`],
      [`height`, `82%`],
      [`float`, `left`],
    ],
    inner: () =>
    {
      const {optionButton} = project.bricks.scenes.story.children
      const brick =

        dunp.array
        .new(story.options.length)
        .map((unused, index) =>
        {
          const testedOption =

              needsWereMet(story.options[index])
            ? optionButton(story.options[index], index)
            : ``

          return testedOption
        })

      return brick
    },
  }

  return brick
}

