
`use strict`

//......................................................................................................................

project.bricks.scenes.story.children.optionButton = (option, index) =>
{
  const mouseOver = () =>
  {
    const lang = dunp.getLang().id
    const index = event.target.id.slice(-1)
    const option = project.stories[lang].intro[0]().options[index]

    if(!option.requires)
    {
      dunp.get(`#optionImageRight`).style.backgroundImage = `url('${option.image}')`
      dunp.get(`#optionTextRight`).innerHTML = option.optionText
    }
  }

  const mouseOut= () =>
  {
    const index = event.target.id.slice(-1)

    dunp.get(`#optionImageRight`).style.backgroundImage = ``
    dunp.get(`#optionTextRight`).innerHTML = ``
  }

  const brick =
  {
    id: `optionButton${index}`,
    classes: [`center`, `pointer`, `storyOptionButton`],
    extras:
    [
      [`onmouseover`, dunp.trigger(mouseOver)],
      [`onmouseout`, dunp.trigger(mouseOut)],
    ],
    styles:
    [
      [`height`, `15%`],
      [`transition`, `all 0.2s`],
      [`margin-bottom`, `calc(var(--u) * 10)`],
      [`font-size`, `calc(var(--u) * 40)`]
    ],
    inner: option.buttonText,
  }

  return brick
}

