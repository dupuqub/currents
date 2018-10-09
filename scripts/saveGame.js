
`use strict`

//......................................................................................................................

project.scripts.saveGame = index =>
{
  localStorage[`NKNWN${index}`] = JSON.stringify(project.states.safe)
}

