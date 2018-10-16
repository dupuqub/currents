
`use strict`

//......................................................................................................................

project.stories.portuguese.intro[1] = () =>
{
  const chapter =
  {
    title: `Are you experienced?`,
    image: `images/wut.png`,
    text: `These waters are treacherous and vile.<br><br>Take this package to [city name] so we can hook you up with some better paying jobs.`,
    options:
    [
      {
        buttonText: `Sweet`,
        optionText: `Long live life, sailor!`,
        image: `images/wut.png`,
        funktion: () =>
        {
          console.log(`sweet`)
        },
      },
      {
        buttonText: `What?`,
        optionText: `Don't worry about it.<br><br>You'll get the hang of it eventually`,
        image: `images/wut.png`,
        funktion: () =>
        {
          console.log(`what`)
        },
      },
    ],
  }

  return chapter
}

