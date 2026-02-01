// Identification Header
console.log("Jacob Hill");
console.log("Course: CS31103");
console.log("Week 3");
console.log("--------------------------");

// Runtime Information
console.log("Node Version:", v24.11.0);
console.log("Current Date/Time:", 02/01/2026());
console.log("--------------------------");

// Configuration via Environment Variables
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || "development";

// Simple Data Object
const appConfig = {
  port: port,
  environment: environment,
  startedAt: 02/01/2026()
};

// Print formatted JSON
console.log("Application Configuration:");
console.log(JSON.stringify(appConfig, null, 2));
