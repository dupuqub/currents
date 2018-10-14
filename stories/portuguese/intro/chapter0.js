
`use strict`

//......................................................................................................................

project.stories.portuguese.intro[0] = () =>
{
  const chapter =
  {
    title: `Bem vindo às Correntes, ${project.states.safe.avatar.name}.`,
    image: `images/chooseBoat.png?${Date.now()}`,
    text: `Nós sempre precisamos de boas pessoas protegendo esses oceanos.<br><br>Escolha um barco e boas viagens, marujo.`,
    options:
    [
      {
        buttonText: `Velkor DEB`,
        optionText: `Um poderoso bi-motor.<br><br>É rápido, o mais rápido, mas é bom que você tenha gás perto.`,
        image: `images/velkor.png?${Date.now()}`,
      },
      {
        buttonText: `Slatan`,
        optionText: `O equilíbrio.<br><br>Um híbrido que combina o poder do gás e a agilidade do vento.`,
        image: `images/slatan.png?${Date.now()}`,
      },
      {
        buttonText: `Bu Mei`,
        optionText: `Rápido como uma raposa.<br><br>Sem motores, só duas velas tão espertas quanto seu capitão.`,
        image: `images/bumei.png?${Date.now()}`,
      },
    ],
  }

  return chapter
}

