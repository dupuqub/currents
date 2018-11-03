
`use strict`

//......................................................................................................................

project.bricks.scenes.story.brick = () =>
{
  const lang = dunp.getLang()
  const {id, chapterIndex} = project.states.safe.storyAddress
  const story = project.stories[lang.id][id][chapterIndex]()
  const brick =
  {
    classes: [`fastFadeIn`],
    styles:
    [
      [`width`, `100%`],
      [`height`, `100%`],
      [`background`, `#444`],
      [`position`, `relative`],
    ],
    inner:
    [
      project.bricks.scenes.story.children.title(story),
      project.bricks.scenes.story.children.blockLeft(story),
      project.bricks.scenes.story.children.blockCenter(story),
      project.bricks.scenes.story.children.blockRight(story),
      project.bricks.footer(),
    ],
  }

  return brick
}

