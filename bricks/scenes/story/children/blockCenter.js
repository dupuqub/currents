
`use strict`

//......................................................................................................................

project.bricks.scenes.story.children.blockCenter = story =>
{
  //....................................................................................................................

  const allGood = option =>
  {
    const {typeOf, combo, run, array} = dunp
    const needs =

        array.valid(option.needs)
      ? option.needs.map(run).reduce(combo)
      : typeOf(option.needs) === `function`
      ? option.needs()
      : true

    return needs
  }

  //....................................................................................................................

  const brick =
  {
    id: `blockCenter`,
    classes: [`center`, `column`, `slowFadeInDelayed`],
    styles:
    [
      [`width`, `calc(100% / 3)`],
      [`height`, `82%`],
      [`float`, `left`],
    ],
    inner: () =>
    {
      const {optionButton} = project.bricks.scenes.story.children
      const {options} = story
      const brick =

        dunp.array
        .new(story.options.length)
        .map((unused, index) => allGood(options[index]) ? optionButton(options[index], index) : ``)

      return brick
    },
  }

  return brick
}

