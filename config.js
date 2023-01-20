// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Aravind",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: "Good Morning!",
  greetingAfternoon: "Good Afternoon,",
  greetingEvening: "Good Evening,",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "buttons", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "9ddab50a5cfc78c5c5b0aeadc90cf2c0", // Write here your API Key
  weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "C", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "9.900239",
  defaultLongitude: "76.744881",

  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "2",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "4",
      name: "Netflix",
      icon: "film",
      link: "https://netflix.com/",
    },
    {
      id: "1",
      name: "Youtube",
      icon: "youtube",
      link: "https://youtube.com/",
    },
    {
      id: "3",
      name: "PSA",
      icon: "magnet",
      link: "https://psa.pm/",
    },
    {
      id: "5",
      name: "PrimeVideo",
      icon: "video",
      link: "https://primevideo.com/",
    },
  ],
};
