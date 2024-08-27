const data = [
  { id: 1,
    country: "Saudi-Arabien",
    company: "Saudi Aramco",
    tons: 59.26,
  },
  {
    id: 2,
    country: "USA",
    company: "Chevron",
    tons: 43.35,
  },
  {
    id: 3,
    country: "Russland",
    company: "Gazprom",
    tons: 43.23,
  },
  {
    id: 4,
    country: "USA",
    company: "Exxon Mobil",
    tons: 41.91,
  },
  {
    id: 5,
    country: "Iran",
    company: "National Iranian Oil Company",
    tons: 35.66,
  },
  {
    id: 6,
    country: "Vereinigtes Königreich",
    company: "BP",
    tons: 34.02,
  },
  {
    id: 7,
    country: "Vereinigtes Königreich",
    company: "Shell",
    tons: 31.95,
  },
  {
    id: 8,
    country: "Indien",
    company: "Coal India",
    tons: 23.12,
  },
  {
    id: 9,
    country: "Mexiko",
    company: "PEMEX",
    tons: 22.65,
  },
  {
    id: 10,
    country: "Venezuela",
    company: "Petróleos de Venezuela",
    tons: 15.75,
  },
  {
    id: 11,
    country: "China",
    company: "PetroChina",
    tons: 15.63,
  },
  {
    id: 12,
    country: "USA",
    company: "Peabody Energy",
    tons: 15.39,
  },
  {
    id: 13,
    country: "USA",
    company: "ConocoPhillips",
    tons: 15.23,
  },
  {
    id: 14,
    country: "Vereinigte Arabische Emirate",
    company: "Abu Dhabi National Oil Company",
    tons: 13.84,
  },
  {
    id: 15,
    country: "Kuwait",
    company: "Kuwait Petroleum Corporation",
    tons: 13.48,
  }
];

data.sort((a, b) => b.tons - a.tons)
data.forEach((item, index) => {
  item.rank = index + 1
})

export default data;
