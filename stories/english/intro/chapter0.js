
`use strict`

//......................................................................................................................

project.stories.english.intro[0] = () =>
{
  const chapter =
  {
    title: `Welcome to the Currents, ${project.states.safe.avatar.name}.`,
    image: `images/chooseBoat.png?${Date.now()}`,
    text: `We're always looking for help.<br><br>Choose a boat and safe travels, aquanaut!`,
    options:
    [
      {
        buttonText: `Velkor D.E.B.`,
        optionText: `Fully dependent on energy.`,
        image: `images/velkor.png?${Date.now()}`,
        funktion: () =>
        {
          project.states.safe.boat = {name: `Velkor D.E.B.`, id: `velkor`}
          project.scripts.changeStory(`intro`, 1)
        },
      },
      {
        buttonText: `Zlatan`,
        optionText: `Uses energy and wind.`,
        image: `images/zlatan.png?${Date.now()}`,
        funktion: () =>
        {
          project.states.safe.boat = {name: `Zlatan`, id: `zlatan`}
          project.scripts.changeStory(`intro`, 1)
        },
      },
      {
        buttonText: `Bu Mei`,
        optionText: `Runs on wind only.`,
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

