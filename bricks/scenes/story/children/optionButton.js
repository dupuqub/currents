
`use strict`

//......................................................................................................................

project.bricks.scenes.story.children.optionButton = (option, index) =>
{
  //....................................................................................................................

  const mouseOver = () =>
  {
    const {get, getLang} = dunp
    const lang = getLang().id
    const index = event.target.id.slice(-1)
    const {id, chapterIndex} = project.states.safe.story
    const option = project.stories[lang][id][chapterIndex]().options[index]

    get(`#optionImageRight`).classList.remove(`fastFadeIn`)
    get(`#optionTextRight`).classList.remove(`fastFadeIn`)

    const delayed = () =>
    {
      get(`#optionImageRight`).classList.add(`fastFadeIn`)
      get(`#optionTextRight`).classList.add(`fastFadeIn`)

      get(`#optionImageRight`).style.backgroundImage = `url('${option.image}')`
      get(`#optionTextRight`).innerHTML = option.optionText
    }

    setTimeout(delayed, 0)
  }

  //....................................................................................................................

  const mouseOut= () =>
  {
    const {get} = dunp
    const index = event.target.id.slice(-1)

    get(`#optionImageRight`).style.backgroundImage = ``
    get(`#optionTextRight`).innerHTML = ``
  }

  //....................................................................................................................

  const click = () =>
  {
    const index = event.target.id.slice(-1)
    const story = project.states.safe.story
    const {id, chapterIndex} = story
    const lang = dunp.getLang().id
    const chapter = project.stories[lang][id][chapterIndex]()
    const option = chapter.options[index]

    option.funktion()
  }

  //....................................................................................................................

  const brick =
  {
    id: `optionButton${index}`,
    classes: [`center`, `pointer`, `storyOptionButton`, `delaySlowFadeIn`],
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

