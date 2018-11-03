
`use strict`

//......................................................................................................................

project.bricks.scenes.story.children.optionButton = (option, index) =>
{
  //....................................................................................................................

  const mouseOver = () =>
  {
    const lang = dunp.getLang().id
    const index = event.target.id.slice(-1)
    const {id, chapterIndex} = project.states.safe.storyAddress
    const option = project.stories[lang][id][chapterIndex]().options[index]

    dunp.get(`#optionImageRight`).classList.remove(`fastFadeIn`)
    dunp.get(`#optionTextRight`).classList.remove(`fastFadeIn`)

    const delayed = () =>
    {
      dunp.get(`#optionImageRight`).classList.add(`fastFadeIn`)
      dunp.get(`#optionTextRight`).classList.add(`fastFadeIn`)

      dunp.get(`#optionImageRight`).style.backgroundImage = `url('${option.image}')`
      dunp.get(`#optionTextRight`).innerHTML = option.optionText
    }

    setTimeout(delayed, 0)
  }

  //....................................................................................................................

  const mouseOut= () =>
  {
    const index = event.target.id.slice(-1)

    dunp.get(`#optionImageRight`).style.backgroundImage = ``
    dunp.get(`#optionTextRight`).innerHTML = ``
  }

  //....................................................................................................................

  const click = () =>
  {
    const index = event.target.id.slice(-1)
    const {id, chapterIndex} = project.states.safe.storyAddress
    const lang = dunp.getLang().id
    const chapter = project.stories[lang][id][chapterIndex]()
    const option = chapter.options[index]

    option.funktion()
  }

  //....................................................................................................................

  const brick =
  {
    id: `optionButton${index}`,
    classes: [`center`, `pointer`, `storyOptionButton`, `slowFadeInDelayed`],
    extras:
    [
      [`onmouseover`, dunp.trigger(mouseOver)],
      [`onmouseout`, dunp.trigger(mouseOut)],
      [`onclick`, dunp.trigger(click)],
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

