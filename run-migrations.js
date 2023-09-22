const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);

async function runMigrations() {
  try {
    // Import your Sequelize models and migrations here

    // Run the migrations
    await sequelize.sync();
    console.log("Database migrations completed successfully.");
  } catch (error) {
    console.error("Error running migrations:", error);
  } finally {
    sequelize.close();
  }
}

runMigrations();
