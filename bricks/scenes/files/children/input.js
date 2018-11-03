
`use strict`

//......................................................................................................................

project.bricks.scenes.files.children.input = index =>
{
  //....................................................................................................................

  const unfocus = () =>
  {
    const lang = dunp.getLang()
    const index = event.target.id.slice(-1)
    const button = dunp.get(`#filesButton${index}`)

    button.innerHTML = lang.files[1]
  }

  //....................................................................................................................

  const click = () =>
  {
    const lang = dunp.getLang()
    const index = event.target.id.slice(-1)
    const input = dunp.get(`#filesInput${index}`).value

    project.states.safe.avatar =
    {
      name: input,
      birth: new Date(),
    }

    project.scripts.changeStory(`intro`, 0)
  }

  //....................................................................................................................

  const lang = dunp.getLang()
  const brick =
  [
    // Input.
    {
      id: `filesInput${index}`,
      tag: `input`,
      classes: [`fastFadeIn`],
      extras:
      [
        [`type`, `text`],
        [`placeholder`, lang.files[3]],
        [`onfocusout`, dunp.trigger(unfocus)],
      ],
      styles:
      [
        [`width`, `69.5%`],
        [`height`, `83%`],
        [`background`, `#888`],
        [`font-size`, `calc(var(--u) * 60)`],
        [`text-align`, `center`],
        [`color`, `#DDD`],
        [`float`, `left`],
        [`outline`, `none`],
        [`border`, `0`],
        [`box-sizing`, `border-box`],
        [`border-radius`, `calc(var(--u) * 25) 0 0 calc(var(--u) * 25)`],
      ],
    },

    // Button.
    {
      id: `filesConfirm${index}`,
      classes: [`center`, `filesConfirm`, `fastFadeIn`],
      extras: [[`onmousedown`, dunp.trigger(click)]],
      styles:
      [
        [`width`, `28%`],
        [`height`, `83%`],
        [`font-size`, `calc(var(--u) * 60)`],
        [`border-radius`, `0 calc(var(--u) * 25) calc(var(--u) * 25) 0`],
        [`transition`, `0.2s`],
        [`float`, `left`],
      ],
      inner: lang.files[2],
    }
  ]

  return brick
}

