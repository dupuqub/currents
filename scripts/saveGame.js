
`use strict`

//......................................................................................................................

project.scripts.saveGame = index =>
{
  localStorage[`currents${index}`] = JSON.stringify(project.states.safe)
}

