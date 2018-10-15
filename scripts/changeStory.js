
`use strict`

//......................................................................................................................

project.scripts.changeStory = (id, chapterIndex) =>
{
  project.states.safe.story = {id, chapterIndex}

  dunp.changeScene(`story`, true, true)
}

