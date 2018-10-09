
`use strict`

//......................................................................................................................

project.stories.english.intro[0] = () =>
{
  const chapter =
  {
    title: `Welcome to the Currents, ${project.states.safe.avatar.name}.`,
    image: `images/chooseBoat.png?${Date.now()}`,
    text: `We are always in need of a good people protecting these oceans.<br><br>Choose a boat and safe travels, sailor.`,
    options:
    [
      {
        buttonText: `Velkor DEB`,
        optionText: `The only bi-motor.<br><br>It's fast, the fastest really, but you better have fuel ready.`,
        image: `images/velkor.png?${Date.now()}`,
      },
      {
        buttonText: `Zlatlan`,
        optionText: `The best of both worlds.<br><br>A hybrid that combines the power of the fuel and the agility of the wind.`,
        image: `images/zlatan.png?${Date.now()}`,
      },
      {
        buttonText: `Bu Mei`,
        optionText: `Swift as a fox.<br><br>No engines, just two sails that are cunning as their captain.`,
        image: `images/bumei.png?${Date.now()}`,
      },
    ],
  }

  return chapter
}

