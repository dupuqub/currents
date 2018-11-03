
`use strict`

//......................................................................................................................

project.stories.portuguese.intro[0] = () =>
{
  const chapter =
  {
    title: `Bem vindo às Correntes, ${project.states.safe.avatar.name}.`,
    image: `images/chooseBoat.png?${Date.now()}`,
    text: `Sempre procuramos ajuda.<br><br>Escolha um barco e boa viagem, aquanauta!`,
    options:
    [
      {
        buttonText: `Velkor D.E.B.`,
        optionText: `Depende só de energia.`,
        image: `images/velkor.png?${Date.now()}`,
        funktion: () =>
        {
          project.states.safe.boat = {name: `Velkor D.E.B.`, id: `velkor`}
          project.scripts.changeStory(`intro`, 1)
        },
      },
      {
        buttonText: `Zlatan`,
        optionText: `Usa energia e vento.`,
        image: `images/zlatan.png?${Date.now()}`,
        funktion: () =>
        {
          project.states.safe.boat = {name: `Zlatan`, id: `zlatan`}
          project.scripts.changeStory(`intro`, 1)
        },
      },
      {
        buttonText: `Bu Mei`,
        optionText: `Só corre com vento.`,
        image: `images/bumei.png?${Date.now()}`,
        funktion: () =>
        {
          project.states.safe.boat = {name: `Bu Mei`, id: `bumei`}
          project.scripts.changeStory(`intro`, 1)
        },
      },
    ],
  }

  return chapter
}

