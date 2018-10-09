
`use strict`

//......................................................................................................................

project.scripts.newGame = index =>
{
  const brick = project.bricks.scenes.files.children.input(index)

  dunp.get(`#filesButton${index}`).innerHTML = dunp.htmlify(brick)
  dunp.get(`#filesInput${index}`).focus()
}

