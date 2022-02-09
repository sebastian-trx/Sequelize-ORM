const { Band, User } = require("../src/db");

async function preloadUser_Band() {
  let band1 = await Band.create(
    {
      name: "Los abrazafarolas",
      year: 1990,
      users: [
        {
          name: "Lucia",
          age: 18,
          mail: "lucia@gmail.com",
          surname: "mogollon",
        },
        {
          name: "Alberto",
          age: 22,
          mail: "alberto@gmail.com",
          surname: "mogollon",
        },
      ],
    },
    {
      include: "users",
    }
  );

  let user1 = await User.create({
    name: "Sergio",
    age: 38,
    mail: "sergio@gmail.com",
    surname: "asdfg",
  });
  let user2 = await User.create({
    name: "Monica",
    age: 44,
    mail: "monica@gmail.com",
    surname: "ñlkjh",
  });

  let band2 = await Band.create({
    name: "Los Picateclas",
    year: 2000,
  });

  // band2.addUsers([ user1, user2 ]);
  band2.addUser(user1);
  band2.addUser(user2);

  // Nuevo usuario
  let user3 = await User.create({
    name: "Paula",
    age: 16,
    mail: "paula@gmail.com",
    surname: "zxccv",
  });
  user3.setBands([band1, band2]);
}
module.exports = {
  preloadUser_Band,
};
