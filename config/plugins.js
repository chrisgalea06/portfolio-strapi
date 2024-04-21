module.exports = ({ env }) => ({
    // ...
    // sample: http://localhost:1337/api/slugify/slugs/test/judul2
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
            test: {
                field: 'slug',
                references: 'title',
            },
        },
      },
    },
    "rest-cache": {
      config: {
        provider: {
          name: "memory",
          options: {
            max: 32767,
            maxAge: 3600,
          },
        },
        strategy: {
          contentTypes: [
            // list of Content-Types UID to cache
            "api::test.test",
          ],
        },
      },
    },    
    ///api/fuzzy-search/search?query=<your-query-string>
    "fuzzy-search": {
      enabled: true,
      config: {
        contentTypes: [
          // {
          //   uid: "api::author.author",
          //   modelName: "author",
          //   transliterate: true,
          //   fuzzysortOptions: {
          //     characterLimit: 300,
          //     threshold: -600,
          //     limit: 10,
          //     keys: [
          //       {
          //         name: "name",
          //         weight: 100,
          //       },
          //       {
          //         name: "description",
          //         weight: -100,
          //       },
          //     ],
          //   },
          // },
          {
            uid: "api::test.test",
            modelName: "test",
            fuzzysortOptions: {
              characterLimit: 500,
              transliterate: true,

              keys: [
                {
                  name: "title",
                  weight: 200,
                },
                // {
                //   name: "content",
                //   weight: -200,
                // },
              ],
            },
          },
        ],
      },
    },    
    // ...
  });