module.exports = {
  apps: [
    {
      name: "vandaq",
      cwd: "/var/www/vandaq/site",
      script: "node_modules/.bin/next",
      args: "start",
      instances: 1,
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
