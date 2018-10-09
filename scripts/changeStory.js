
`use strict`

//......................................................................................................................

project.scripts.changeStory = (id, chapter) =>
{
  project.states.safe.story = {id, chapter}

  dunp.changeScene(`story`, true, true)
}

