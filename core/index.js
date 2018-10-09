
`use strict`

//......................................................................................................................

onresize = unused => dunp.changeScene(project.states.temp.scene.id, true, true)

//......................................................................................................................

project.begin = () =>
{
  dunp.get(`title`).innerHTML = dunp.getLang().title
  dunp.changeScene(`main`, true, true)

  // temporary
  // project.states.safe.lang = `portuguese`
  // project.states.safe.avatar = {name: `bob`}
  // project.scripts.changeStory(`intro`, 0)
}

//......................................................................................................................

project.loop = () =>
{
  project.states.temp.scene.loop()
  dunp.requestFrame(project.loop)
}

//......................................................................................................................

project.begin()
project.loop()

