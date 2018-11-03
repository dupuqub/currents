
`use strict`

//......................................................................................................................

project.bricks.scenes.files.children.button = (index, defaultText) =>
{
  //....................................................................................................................

  const click = () =>
  {
    const lang = dunp.getLang()
    const defaultText = lang.files[1]
    const index = event.target.id.slice(-1)
    const file = localStorage[`currents${index}`]
    const script = file ? `loadGame` : `newGame`

    project.scripts[script](index)
  }

  //....................................................................................................................

  const file = localStorage[`currents${index}`]
  const inner = file ? JSON.parse(file).avatar.name : defaultText
  const brick =
  {
    id: `filesButton${index}`,
    classes: [`center`, `pointer`, `mainButton`, `slowFadeInDelayed`],
    extras: [[`onclick`, dunp.trigger(click)]],
    styles:
    [
      [`color`, `#BBB`],
      [`width`, `50%`],
      [`height`, `18%`],
      [`transition`, `all 0.2s`],
      [`font-size`, `calc(var(--u) * 60)`],
      [`border-radius`, `calc(var(--u) * 30)`],
      [`margin-bottom`, `0.5%`],
    ],
    inner,
  }

  return brick
}