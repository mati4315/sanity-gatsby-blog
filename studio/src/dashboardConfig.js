export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60ecf03fa421f861733acfd0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-tryu6rsk",
                  apiId: "e094efde-8843-4fd7-8795-065e1fa094df",
                },
                {
                  buildHookId: "60ecf03fc241515ab85c3cc4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-kjw1xrvg",
                  apiId: "2ebf9c6f-895a-4d7e-a81d-ce990c3a5c6f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mati4315/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-kjw1xrvg.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
