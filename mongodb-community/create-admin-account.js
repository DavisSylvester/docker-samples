db.createUser({
    user: "mongoAdmin",
    pwd: process.env.MONGO_ADMIN_PASSWORD,
    roles: [
        { role: "userAdminAnyDatabase", db: "admin" },
      ],
});


