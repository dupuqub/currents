
`use strict`

//......................................................................................................................

project.scripts.changeStory = (id, chapterIndex) =>
{
  project.states.safe.storyAddress = {id, chapterIndex}

  dunp.changeScene(`story`, true, true)
}

