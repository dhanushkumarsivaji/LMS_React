const Datas = {
  json: [
    {
      email: "dhanushmech1995@gmail.com",
      password: "12345",
      role: 1,
      posistion: "Manager",
      id: 900,
      name: "Dhanush",
    },
    {
      email: "dhanush@gmail.com",
      password: "12345",
      role: 2,
      posistion: "Developer",
      id: 345,
      name: "Kumar",
      leaves: 12,
      holidays: [
        {
          id: 1,
          date: "July 12,2019",
          reason: "personal commitment",
          status: [
            {
              Applied: true,
              cancelled: false,
            },
          ],
        },
        {
          id: 2,
          date: "July 19,2019",
          reason: "Vacation",
          status: [
            {
              Applied: true,
              Approved: false,
            },
          ],
        },
        {
          id: 3,
          date: "August 15,2019",
          reason: "Hangout Day",
          status: [
            {
              Applied: false,
            },
          ],
        },
      ],
    },
  ],
};

export default Datas;
