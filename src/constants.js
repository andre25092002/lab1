export const GENDERS = { MALE: "male", WOMAN: "woman" };

export const persons = [
  {
    name: "Roberto",
    age: 90,
    gen: GENDERS.MALE,
    children: [
      {
        name: "Donatello",
        age: 50,
        gen: GENDERS.MALE,
        parents: { name: "Roberto", age: 90, gen: GENDERS.MALE },
        children: {
          name: "Pypa",
          age: 30,
          gen: GENDERS.MALE,
          children: {
            name: "Lisa",
            age: 11,
            gen: GENDERS.WOMAN,
            parents: {
              name: "Pypa",
              age: 30,
              gen: GENDERS.MALE,
              parents: {
                name: "Donatello",
                age: 50,
                gen: GENDERS.MALE,
                parents: { name: "Roberto", age: 90, gen: GENDERS.MALE },
              },
            },
          },
          parents: {
            name: "Donatello",
            age: 50,
            gen: GENDERS.MALE,
            parents: { name: "Roberto", age: 90, gen: GENDERS.MALE },
          },
        },
      },
      {
        name: "Sofia",
        age: 40,
        gen: GENDERS.WOMAN,
        children: {
          name: "Betty",
          age: 10,
          gen: GENDERS.WOMAN,
          parents: {
            name: "Sofia",
            age: 40,
            gen: GENDERS.WOMAN,
            parents: {
              name: "Roberto",
              age: 90,
              gen: GENDERS.MALE,
            },
          },
        },
        parents: {
          name: "Roberto",
          age: 90,
          gen: GENDERS.MALE,
        },
      },
    ],
  },
  {
    name: "Donatello",
    age: 50,
    gen: GENDERS.MALE,
    parents: { name: "Roberto", age: 90, gen: GENDERS.MALE },
    children: {
      name: "Pypa",
      age: 30,
      gen: GENDERS.MALE,
      children: {
        name: "Lisa",
        age: 11,
        gen: GENDERS.WOMAN,
        parents: {
          name: "Pypa",
          age: 30,
          gen: GENDERS.MALE,
          parents: {
            name: "Donatello",
            age: 50,
            gen: GENDERS.MALE,
            parents: { name: "Roberto", age: 90, gen: GENDERS.MALE },
          },
        },
      },
      parents: {
        name: "Donatello",
        age: 50,
        gen: GENDERS.MALE,
        parents: { name: "Roberto", age: 90, gen: GENDERS.MALE },
      },
    },
  },
  {
    name: "Pypa",
    age: 30,
    gen: GENDERS.MALE,
    children: {
      name: "Lisa",
      age: 11,
      gen: GENDERS.WOMAN,
      parents: {
        name: "Pypa",
        age: 30,
        gen: GENDERS.MALE,
        parents: {
          name: "Donatello",
          age: 50,
          gen: GENDERS.MALE,
          parents: { name: "Roberto", age: 90, gen: GENDERS.MALE },
        },
      },
    },
    parents: {
      name: "Donatello",
      age: 50,
      gen: GENDERS.MALE,
      parents: { name: "Roberto", age: 90, gen: GENDERS.MALE },
    },
  },
  {
    name: "Lypa",
    age: 20,
    gen: GENDERS.MALE,
    parents: {
      name: "Donatello",
      age: 50,
      gen: GENDERS.MALE,
      parents: { name: "Roberto", age: 90, gen: GENDERS.MALE },
    },
  },
  {
    name: "Lisa",
    age: 11,
    gen: GENDERS.WOMAN,
    parents: {
      name: "Pypa",
      age: 30,
      gen: GENDERS.MALE,
      parents: {
        name: "Donatello",
        age: 50,
        gen: GENDERS.MALE,
        parents: { name: "Roberto", age: 90, gen: GENDERS.MALE },
      },
    },
  },
  {
    name: "Sofia",
    age: 40,
    gen: GENDERS.WOMAN,
    children: {
      name: "Betty",
      age: 10,
      gen: GENDERS.WOMAN,
      parents: {
        name: "Sofia",
        age: 40,
        gen: GENDERS.WOMAN,
        parents: {
          name: "Roberto",
          age: 90,
          gen: GENDERS.MALE,
        },
      },
    },
    parents: {
      name: "Roberto",
      age: 90,
      gen: GENDERS.MALE,
    },
  },
  {
    name: "Betty",
    age: 10,
    gen: GENDERS.WOMAN,
    parents: {
      name: "Sofia",
      age: 40,
      gen: GENDERS.WOMAN,
      parents: {
        name: "Roberto",
        age: 90,
        gen: GENDERS.MALE,
      },
    },
  },
];

export const data = {
  name: "Roberto",
  children: [
    {
      name: "Sofia",
      children: [{ name: "Betty" }],
    },
    {
      name: "Donatello",
      children: [
        { name: "Pypa", children: [{ name: "Lisa" }] },
        { name: "Lypa" },
      ],
    },
  ],
};
