const slides = [
  {
    id: 1,
    name: "model1",
    link: require("./assets/images/pog3.jpg"),
  },
  {
    id: 2,
    name: "model2",
    link: require("./assets/images/pog4.jpg"),
  },
  {
    id: 3,
    name: "model3",
    link: require("./assets/images/pog1.jpg"),
  },
  {
    id: 4,
    name: "model4",
    link: require("./assets/images/pog2.jpg"),
  },
  {
    id: 5,
    name: "model5",
    link: require("./assets/images/pog5.jpg"),
  },
];



const models = [
  {
    name: "model1",
    link: require("./assets/images/build-1.jpg"),
    desc: "made by TATA builders",
  },
  {
    name: "model2",
    link: require("./assets/images/build-2.jpg"),
    desc: "made by TATA builders",
  },
  {
    name: "model3",
    link: require("./assets/images/build-3.webp"),
    desc: "made by TATA builders",
  },
  {
    name: "model4",
    link: require("./assets/images/build-4.jpg"),
    desc: "made by Adani builders",
  },
  {
    name: "model5",
    link: require("./assets/images/build-5.jpg"),
    desc: "made by Adani builders",
  },
];


const raw_material = [
  {
    name: "WOOD",
    desc1: "Sustainable Sourcing, Carbon Sequestration, Biodegradability",
    desc2: "Deforestation Impact, Chemical Treatments",
    link: require("./assets/images/mat1.jpg"),
  },
  {
    name: "Recycled Materials",
    desc1: "Reduced Waste, Energy Savings",
    desc2: "Quality Control, Sorting and Processing",
    link: require("./assets/images/mat2.jpg"),
  },
  {
    name: " Concrete",
    desc1: "High Carbon Footprint, Resource Intensive",
    desc2: "Alternative Mixes, Longevity",
    link: require("./assets/images/mat3.jpg"),
  },
  {
    name: "Steel",
    desc1: "Recyclability, Strength",
    desc2: "Production Impact, Corrosion Concerns",
    link: require("./assets/images/mat4.jpg"),
  },
  {
    name: "Plastic",
    desc1: "Non-Biodegradable,Resource Depletion",
    desc2: "Recycling Initiatives, Alternative Use",
    link: require("./assets/images/mat5.webp"),
  },
];

module.exports = { slides,models,raw_material };
