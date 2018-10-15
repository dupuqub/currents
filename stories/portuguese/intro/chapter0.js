
`use strict`

//......................................................................................................................

project.stories.portuguese.intro[0] = () =>
{
  const chapter =
  {
    title: `Bem vindo às Correntes, ${project.states.safe.avatar.name}.`,
    image: `images/chooseBoat.png?${Date.now()}`,
    text: `Nós estamos sempre precisando de pessoas boas protegendo esses oceanos.<br><br>Escolha um barco e boas viagens, marujo.`,
    options:
    [
      {
        buttonText: `Velkor D.E.B.`,
        optionText: `Move-se em todos os sentidos e bem rápido.<br><br>Não se moverá sem combustível, então é melhor coletar energia das algas.<br><br>Calmarias não te pararão.`,
        image: `images/velkor.png?${Date.now()}`,
        funktion: () =>
        {
          console.log(`velkor`)
        },
      },
      {
        buttonText: `Slatlan`,
        optionText: `Move-se agilmente em qualquer sentido, mas com metade da velocidade se "contra-vento" ou sem gás, obviamente fica parado sem os dois.<br><br>Calmarias serão uma perturbação.`,
        image: `images/slatan.png?${Date.now()}`,
        funktion: () =>
        {
          console.log(`slatan`)
        },
      },
      {
        buttonText: `Bu Mei`,
        optionText: `"Contra-vento" deixa-o dependente de correntes para girar.<br><br>Não usa gás e vai bem rápido com o vento.<br><br>Calmarias são mortais.`,
        image: `images/bumei.png?${Date.now()}`,
        funktion: () =>
        {
          console.log(`bu mei`)
        },
      },
    ],
  }

  return chapter
}

