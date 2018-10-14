
`use strict`

//......................................................................................................................

project.stories.model = () =>
{
  const chapter =
  {
    title: null,
    image: null,
    text: null,
    options:
    [
      // Option A.
      {
        needs: [() => true, () => true],
        buttonText: null,
        optionText: null,
        image: null,
      },

      // Option B.
      {
        needs: () => true,
        buttonText: null,
        optionText: null,
        image: null,
      },

      // etc...
    ],
  }

  return chapter
}

