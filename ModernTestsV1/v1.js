// next line is optional, just for IDEs autocomplete :
/// <reference types="@applitools/eyes-testcafe" />

import Eyes from "@applitools/eyes-testcafe";

// Initialize the eyes
const eyes = new Eyes();

// Set page used in the test
fixture`AppliFashion Demo App`.page`${process.env.URL}`
  // Call Close on eyes to let the server know it should display the results
  .afterEach(async () => eyes.close())
  .after(async () => {
    // Wait and collect all test results
    // we pass false to this method to suppress the exception that is thrown if we
    // find visual differences
    let allTestResults = await eyes.waitForResults(false);
    // Print results
    console.log(allTestResults);
  });

test("Task 1", async (t) => {
  // Call Open on eyes to initialize a test session
  await eyes.open({
    t, // pass testcafe controller
    appName: "AppliFashion App",
    testName: "Task 1",
  });
  // Check the app page
  await eyes.checkWindow({
    tag: "Cross-Device Elements Test",
    target: "window",
    fully: true,
  });
});

test("Task 2", async (t) => {
  // Call Open on eyes to initialize a test session
  await eyes.open({
    t, // pass testcafe controller
    appName: "AppliFashion App",
    testName: "Task 2",
  });

  // filter by black color
  await t.click("#colors__Black");

  // apply filter
  await t.click("#filterBtn");
  // Check the product grid region
  await eyes.checkWindow({
    tag: "Filter Results",
    target: "region",
    selector: "#product_grid",
  });
});

test("Task 3", async (t) => {
  // Call Open on eyes to initialize a test session
  await eyes.open({
    t, // pass testcafe controller
    appName: "AppliFashion App",
    testName: "Task 3",
  });

  // click on first item
  await t.click("#product_1");

  // Check the app page
  await eyes.checkWindow({
    tag: "Product Details test",
    target: "window",
    fully: true,
  });
});
