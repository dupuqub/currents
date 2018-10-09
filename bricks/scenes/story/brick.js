
`use strict`

//......................................................................................................................

project.bricks.scenes.story.brick = () =>
{
  const lang = dunp.getLang().id
  const {id, chapter} = project.states.safe.story
  const story = project.stories[lang][id][chapter]()
  const brick =
  {
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

