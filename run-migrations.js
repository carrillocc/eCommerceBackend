const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);
const { execSync } = require("child_process"); // To execute CLI commands

async function runMigrations() {
  try {
    // Run Sequelize migrations using sequelize-cli
    execSync("npx sequelize db:migrate", { stdio: "inherit" });

    console.log("Database migrations completed successfully.");
  } catch (error) {
    console.error("Error running migrations:", error);
  } finally {
    sequelize.close();
  }
}

runMigrations();
