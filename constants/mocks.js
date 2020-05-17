const trips = [
  {
    id: 1,
    date: "Yesterday",
    score: 7.2,
    distance: "45.6 mi",
    from: "Mulund, Mumbai, IN",
    to: "Ghatkopar, Mumbai, IN",
  },
  {
    id: 2,
    date: "Oct 12",
    score: 8.3,
    distance: "837.9 mi",
    from: "Dadar, Mumbai, IN",
    to: "Fort, Mumbai, IN",
  },
];

const drivingData = [
  {
    id: 1,
    status: "bad",
    action: "breaking",
    icon: require("../assets/images/Icon/BreakingBad.png"),
  },
  {
    id: 2,
    status: "fair",
    action: "speeding",
    icon: require("../assets/images/Icon/SpeedingFair.png"),
  },
  {
    id: 3,
    status: "good",
    action: "breaking",
    icon: require("../assets/images/Icon/BreakingGood.png"),
  },
];

const location = {
  latitude: 19.1733943,
  longitude: 72.9517128,
  latitudeDelta: 0.06,
  longitudeDelta: 0.06,
};

export { trips, drivingData, location };
