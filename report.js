const newman = require("newman");

newman.run(
  {
    collection: 'https://api.postman.com/collections/29201751-b9747882-6e81-4cc0-935f-ab13974b71b6?access_key=PMAT-01H9MNB8981XEM5PQVMSWJNQT1', // pointing to local JSON file.

    iterationCount: 1,
    reporters: "htmlextra",
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
