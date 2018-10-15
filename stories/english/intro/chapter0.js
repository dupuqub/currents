
`use strict`

//......................................................................................................................

project.stories.english.intro[0] = () =>
{
  const chapter =
  {
    title: `Welcome to the Currents, ${project.states.safe.avatar.name}.`,
    image: `images/chooseBoat.png?${Date.now()}`,
    text: `We are always in need of good people protecting these oceans.<br><br>Choose a boat and safe travels, sailor.`,
    options:
    [
      {
        buttonText: `Velkor D.E.B.`,
        optionText: `Move in every angle and also very fast.<br><br>Won't move with no fuel, so you better collect energy from algae.<br><br>No doldrums may stop you.`,
        image: `images/velkor.png?${Date.now()}`,
        funktion: () =>
        {
          console.log(`velkor`)
        },
      },
      {
        buttonText: `Slatlan`,
        optionText: `Move swiftly in every angle, but at half-speed if at "no-go" or without fuel (of course no speed if both).<br><br>Doldrums might get very annoying.`,
        image: `images/slatan.png?${Date.now()}`,
        funktion: () =>
        {
          console.log(`slatan`)
        },
      },
      {
        buttonText: `Bu Mei`,
        optionText: `"No-go" makes you dependent on currents to turn.<br><br>Uses no fuel and goes very fast with the wind.<br><br>Doldrums are deadly.`,
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

