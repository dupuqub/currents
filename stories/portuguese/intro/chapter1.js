
`use strict`

//......................................................................................................................

project.stories.portuguese.intro[1] = () =>
{
  const {boat} = project.states.safe
  const chapter =
  {
    title: `Precisa testar o barco?`,
    image: `images/chosen${dunp.title(boat.id)}.png?${Date.now()}`,
    text: `As correntes são cheais de perigo.<br><br>Talvez você deva praticar com o ${boat.name} primeiro.`,
    options:
    [
      {
        buttonText: `Não`,
        optionText: `Boas viagens, aquanauta!`,
        image: `images/wut.png?${Date.now()}`,
        funktion: () =>
        {
          console.log(`game`)
        },
      },
      {
        buttonText: `Por favor e obrigado`,
        optionText: `Boa sorte!<br><br>Lembre-se sempre que errar é aprender!`,
        image: `images/wut.png?${Date.now()}`,
        funktion: () =>
        {
          console.log(`tutorial`)
        },
      },
      {
        buttonText: `Posso mudar o barco?`,
        optionText: `Sem problemas!`,
        image: `images/wut.png?${Date.now()}`,
        funktion: () =>
        {
          project.scripts.changeStory(`intro`, 0)
        },
      },
    ],
  }

  return chapter
}

