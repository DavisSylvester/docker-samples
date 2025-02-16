db.createUser({
    user: "mongoAdmin",
    pwd: process.env.MONGO_ADMIN_PASSWORD || "mongo",
    roles: [
        { role: "userAdminAnyDatabase", db: "admin" },
      ],
});


use random_profile_temp;

db.names.insertMany(
  [   
  { name: "Davis", gender: 8, type: 8, type: 8},
            { name: "Randy", gender: 8, type: 8, type: 8},
            { name: "Peter", gender: 8, type: 8},
            { name: "Bobby", gender: 8, type: 8},
            { name: "Luke", gender: 8, type: 8},
            { name: "Ted", gender: 8, type: 8},
            { name: "John", gender: 8, type: 8},
            { name: "Ken", gender: 8, type: 8},
            { name: "Wesley", gender: 8, type: 8},
            { name: "Clyde", gender: 8, type: 8},
            { name: "Ramon", gender: 8, type: 8},
            { name: "Collin", gender: 8, type: 8},
            { name: "Ralph", gender: 8, type: 8},
            { name: "Frank", gender: 8, type: 8},
            { name: "Marcos", gender: 8, type: 8},
            { name: "Patrick", gender: 8, type: 8},
            { name: "Ryan", gender: 8, type: 8},
            { name: "Brandon", gender: 8, type: 8},
            { name: "Aaron", gender: 8, type: 8},
            { name: "Gunner", gender: 8, type: 8},
            { name: "Harold", gender: 8, type: 8},
            { name: "Miles", gender: 8, type: 8},
            { name: "Kayson", gender: 8, type: 8},
            { name: "Mitch", gender: 8, type: 8},


            { name: "Judy", gender: 16, type: 16 },
            { name: "Jane", gender: 16, type: 16 },
            { name: "Angela", gender: 16, type: 16 },
            { name: "Jennifer", gender: 16, type: 16 },
            { name: "Ashley", gender: 16, type: 16 },
            { name: "Shannon", gender: 16, type: 16 },
            { name: "Sophie", gender: 16, type: 16 },
            { name: "Desiree", gender: 16, type: 16 },
            { name: "Camille", gender: 16, type: 16 },
            { name: "Helen", gender: 16, type: 16 },
            { name: "Terra", gender: 16, type: 16 },
            { name: "Andrea", gender: 16, type: 16 },
            { name: "Chloe", gender: 16, type: 16 },
            { name: "Kim", gender: 16, type: 16 },
            { name: "Rebecca", gender: 16, type: 16 },
            { name: "Samantha", gender: 16, type: 16 },
            { name: "Amber", gender: 16, type: 16 },
            { name: "Vanessa", gender: 16, type: 16 },
            { name: "Rachel", gender: 16, type: 16 },
            { name: "Megan", gender: 16, type: 16 },
            { name: "Lily", gender: 16, type: 16 },
            { name: "Mia", gender: 16, type: 16 },
            { name: "Jessica", gender: 16, type: 16 },
            { name: "Emma", gender: 16, type: 16 },
  ]
);