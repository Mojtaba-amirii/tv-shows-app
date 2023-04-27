const showsData = [
  {
    id: 169,
    name: "Breaking Bad",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Crime", "Thriller"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2008-01-20",
    ended: "2019-10-11",
    rating: {
      average: 9.3,
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg",
    },
  },
  {
    id: 130,
    url: "https://www.tvmaze.com/shows/130/two-and-a-half-men",
    name: "Two and a Half Men",

    language: "English",
    genres: ["Comedy"],
    status: "Ended",
    runtime: 30,
    averageRuntime: 30,
    premiered: "2003-09-22",
    ended: "2015-02-19",
    rating: {
      average: 6.6,
    },

    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/118/296850.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/118/296850.jpg",
    },
  },
  {
    id: 1,
    url: "https://www.tvmaze.com/shows/1/under-the-dome",
    name: "Under the Dome",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Science-Fiction", "Thriller"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2013-06-24",
    ended: "2015-09-10",
    officialSite: "http://www.cbs.com/shows/under-the-dome/",
    schedule: {
      time: "22:00",
      days: ["Thursday"],
    },
    rating: {
      average: 6.5,
    },
    weight: 97,
    network: {
      id: 2,
      name: "CBS",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.cbs.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 25988,
      thetvdb: 264492,
      imdb: "tt1553656",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
    },
  },
  {
    id: 10,
    url: "https://www.tvmaze.com/shows/10/grimm",
    name: "Grimm",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Crime", "Supernatural"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2011-10-28",
    ended: "2017-03-31",
    officialSite: "http://www.nbc.com/grimm",
    schedule: {
      time: "20:00",
      days: ["Friday"],
    },
    rating: {
      average: 8.4,
    },
    weight: 97,
    network: {
      id: 1,
      name: "NBC",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.nbc.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 28352,
      thetvdb: 248736,
      imdb: "tt1830617",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/69/174906.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/69/174906.jpg",
    },
  },
  {
    id: 40,
    url: "https://www.tvmaze.com/shows/40/death-note",
    name: "Death Note",
    type: "Animation",
    language: "Japanese",
    genres: ["Drama", "Anime", "Thriller", "Mystery"],
    status: "Ended",
    runtime: 30,
    averageRuntime: 30,
    premiered: "2006-10-03",
    ended: "2007-06-26",
    officialSite: "http://www.j-deathnote.com/",
    schedule: {
      time: "13:00",
      days: ["Tuesday"],
    },
    rating: {
      average: 8.8,
    },
    weight: 94,
    network: {
      id: 137,
      name: "NTV",
      country: {
        name: "Japan",
        code: "JP",
        timezone: "Asia/Tokyo",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 13555,
      thetvdb: 79481,
      imdb: "tt0877057",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/403/1009233.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/403/1009233.jpg",
    },
  },
  {
    id: 30,
    url: "https://www.tvmaze.com/shows/30/american-horror-story",
    name: "American Horror Story",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Horror", "Thriller"],
    status: "Running",
    runtime: 60,
    averageRuntime: 61,
    premiered: "2011-10-05",
    ended: null,
    officialSite: "http://www.fxnetworks.com/shows/american-horror-story",
    schedule: {
      time: "22:00",
      days: ["Wednesday"],
    },
    rating: {
      average: 7.7,
    },
    weight: 100,
    network: {
      id: 13,
      name: "FX",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 28776,
      thetvdb: 250487,
      imdb: "tt1844624",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/427/1068035.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/427/1068035.jpg",
    },
  },
  {
    id: 21,
    url: "https://www.tvmaze.com/shows/21/the-last-ship",
    name: "The Last Ship",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Action", "Thriller"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2014-06-22",
    ended: "2018-11-11",
    officialSite: "http://www.tntdrama.com/shows/the-last-ship",
    schedule: {
      time: "21:00",
      days: ["Sunday"],
    },
    rating: {
      average: 7.6,
    },
    weight: 98,
    network: {
      id: 14,
      name: "TNT",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 33158,
      thetvdb: 269533,
      imdb: "tt2402207",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/164/412464.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/164/412464.jpg",
    },
  },
  {
    id: 22,
    url: "https://www.tvmaze.com/shows/22/true-blood",
    name: "True Blood",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Romance", "Supernatural"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2008-09-07",
    ended: "2014-08-24",
    officialSite: "http://www.hbo.com/true-blood",
    schedule: {
      time: "21:00",
      days: ["Sunday"],
    },
    rating: {
      average: 8,
    },
    weight: 98,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.hbo.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 12662,
      thetvdb: 82283,
      imdb: "tt0844441",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/410/1026956.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/410/1026956.jpg",
    },
  },
  {
    id: 23,
    url: "https://www.tvmaze.com/shows/23/once-upon-a-time-in-wonderland",
    name: "Once Upon a Time in Wonderland",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Adventure", "Fantasy"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2013-10-10",
    ended: "2014-04-03",
    officialSite: null,
    schedule: {
      time: "20:00",
      days: ["Thursday"],
    },
    rating: {
      average: 6.9,
    },
    weight: 73,
    network: {
      id: 3,
      name: "ABC",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://abc.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 35215,
      thetvdb: 269654,
      imdb: "tt2802008",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/73/183661.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/73/183661.jpg",
    },
  },
  {
    id: 24,
    url: "https://www.tvmaze.com/shows/24/hawaii-five-0",
    name: "Hawaii Five-0",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Action", "Crime"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2010-09-20",
    ended: "2020-04-03",
    officialSite: "http://www.cbs.com/shows/hawaii_five_0/",
    schedule: {
      time: "21:00",
      days: ["Friday"],
    },
    rating: {
      average: 7.6,
    },
    weight: 99,
    network: {
      id: 2,
      name: "CBS",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.cbs.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 24840,
      thetvdb: 164541,
      imdb: "tt1600194",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/213/532575.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/213/532575.jpg",
    },
  },
  {
    id: 25,
    url: "https://www.tvmaze.com/shows/25/hellsing",
    name: "Hellsing",
    type: "Animation",
    language: "Japanese",
    genres: ["Anime", "Horror", "Supernatural"],
    status: "Ended",
    runtime: 30,
    averageRuntime: 30,
    premiered: "2001-10-10",
    ended: "2002-01-16",
    officialSite: null,
    schedule: {
      time: "",
      days: ["Wednesday"],
    },
    rating: {
      average: 7.6,
    },
    weight: 72,
    network: {
      id: 131,
      name: "Fuji TV",
      country: {
        name: "Japan",
        code: "JP",
        timezone: "Asia/Tokyo",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 9139,
      thetvdb: 71278,
      imdb: "tt0325547",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/178/446544.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/178/446544.jpg",
    },
  },
  {
    id: 26,
    url: "https://www.tvmaze.com/shows/26/hellsing-ultimate",
    name: "Hellsing Ultimate",
    type: "Animation",
    language: "Japanese",
    genres: ["Drama", "Action", "Anime", "Horror"],
    status: "Ended",
    runtime: 50,
    averageRuntime: 50,
    premiered: "2006-02-10",
    ended: "2012-12-26",
    officialSite: null,
    schedule: {
      time: "12:00",
      days: ["Wednesday"],
    },
    rating: {
      average: 7.8,
    },
    weight: 67,
    network: {
      id: 159,
      name: "TBS",
      country: {
        name: "Japan",
        code: "JP",
        timezone: "Asia/Tokyo",
      },
      officialSite: "https://www.tbs.co.jp/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 29109,
      thetvdb: 263688,
      imdb: "tt0495212",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/178/446780.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/178/446780.jpg",
    },
  },
  {
    id: 27,
    url: "https://www.tvmaze.com/shows/27/berserk",
    name: "Berserk",
    type: "Animation",
    language: "Japanese",
    genres: ["Anime", "Fantasy", "Horror"],
    status: "Ended",
    runtime: 25,
    averageRuntime: 25,
    premiered: "1997-10-07",
    ended: "1998-03-31",
    officialSite: null,
    schedule: {
      time: "",
      days: ["Tuesday"],
    },
    rating: {
      average: 8.3,
    },
    weight: 88,
    network: {
      id: 137,
      name: "NTV",
      country: {
        name: "Japan",
        code: "JP",
        timezone: "Asia/Tokyo",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 2764,
      thetvdb: 73752,
      imdb: "tt0318871",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/396/991619.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/396/991619.jpg",
    },
  },
  {
    id: 28,
    url: "https://www.tvmaze.com/shows/28/californication",
    name: "Californication",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Comedy"],
    status: "Ended",
    runtime: 30,
    averageRuntime: 30,
    premiered: "2007-08-13",
    ended: "2014-06-29",
    officialSite: "http://www.sho.com/sho/californication/home",
    schedule: {
      time: "21:30",
      days: ["Sunday"],
    },
    rating: {
      average: 7.9,
    },
    weight: 95,
    network: {
      id: 9,
      name: "Showtime",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.sho.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 15319,
      thetvdb: 80349,
      imdb: "tt0904208",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/38/95017.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/38/95017.jpg",
    },
  },
]

export default showsData