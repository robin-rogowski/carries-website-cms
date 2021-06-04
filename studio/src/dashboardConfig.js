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
                    "60b97b46493c4137e5c21c98",
                  title: "Sanity Studio",
                  name: "carries-website-cms-studio",
                  apiId: "3c063ee7-9c36-4e07-97c1-1661c8528d1b",
                },
                {
                  buildHookId: "60b97b4620d8bb48207dd362",
                  title: "Blog Website",
                  name: "carries-website-cms",
                  apiId: "dace0d02-8fdf-4060-9c84-4bfe979cdebf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/robin-rogowski/carries-website-cms",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://carries-website-cms.netlify.app",
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
