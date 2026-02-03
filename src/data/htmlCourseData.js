export const htmlCourse = {
  id: "html-course",
  title: "HTML Interactive Course",

  topics: [
    {
      id: "html-basic",
      title: "HTML Basic",

      lessons: [
        {
          id: "html-headings",
          title: "HTML Headings",

          description:
            "HTML has six heading tags from h1 to h6. h1 is the biggest and most important heading.",

          instructions:
            "Add h1 to h6 headings inside the body and see how their size changes.",

          starterCode: `<!DOCTYPE html>
<html>
<head>
<title>HTML Headings</title>
</head>
<body>

<!-- Add your headings here -->

</body>
</html>`
        },

        {
          id: "html-paragraph",
          title: "HTML Paragraphs",

          description:
            "The <p> tag is used to define paragraphs in HTML.",

          instructions:
            "Create two paragraphs inside the body.",

          starterCode: `<!DOCTYPE html>
<html>
<body>

<h1>My Page</h1>

<!-- Add paragraph tags here -->

</body>
</html>`
        },

        {
          id: "html-links",
          title: "HTML Links",

          description:
            "Links are created using the anchor tag <a>.",

          instructions:
            "Create a link that opens Google in a new tab.",

          starterCode: `<!DOCTYPE html>
<html>
<body>

<h2>My Link</h2>

<!-- Add your link here -->

</body>
</html>`
        },

        {
          id: "html-images",
          title: "HTML Images",

          description:
            "Images are added using the <img> tag with src and alt attributes.",

          instructions:
            "Add an image using any public image URL.",

          starterCode: `<!DOCTYPE html>
<html>
<body>

<h2>My Image</h2>

<!-- Add img tag here -->

</body>
</html>`
        }
      ]
    }
  ]
};
