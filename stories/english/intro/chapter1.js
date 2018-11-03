
`use strict`

//......................................................................................................................

project.stories.english.intro[1] = () =>
{
  const {boat} = project.states.safe
  const chapter =
  {
    title: `Need a test drive?`,
    image: `images/chosen${dunp.title(boat.id)}.png?${Date.now()}`,
    text: `The Currents are full of dangers.<br><br>Maybe you should practice a little with ${boat.name} first.`,
    options:
    [
      {
        buttonText: `Nah`,
        optionText: `Safe travels, aquanaut!`,
        image: `images/wut.png?${Date.now()}`,
        funktion: () =>
        {
          console.log(`game`)
        },
      },
      {
        buttonText: `Please and thank you`,
        optionText: `Good luck!<br><br>Always remember that making mistakes is learning.`,
        image: `images/wut.png?${Date.now()}`,
        funktion: () =>
        {
          console.log(`tutorial`)
        },
      },
      {
        buttonText: `Can I change the boat?`,
        optionText: `No problem.`,
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

