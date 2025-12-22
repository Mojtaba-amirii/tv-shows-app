import {
  getHomeShows,
  searchForShow,
  getShowByID,
} from "./helpers/showsHelper";

export async function homeLoader() {
  const shows = await getHomeShows();
  if (!shows) {
    throw new Error("Failed to load shows");
  }
  return shows;
}

export async function searchLoader({ params }) {
  const shows = await searchForShow(params.searchText);
  if (!shows) {
    throw new Error("Failed to search shows");
  }
  return shows;
}

export async function showLoader({ params }) {
  const show = await getShowByID(params.showID);
  if (!show) {
    throw new Response("Not Found", { status: 404 });
  }
  return show;
}

export async function upcomingLoader() {
  const popularShows = [
    "The Bear",
    "House of the Dragon",
    "Wednesday",
    "Stranger Things",
    "The Last of Us",
  ];
  const showPromises = popularShows.map((show) => searchForShow(show));
  const results = await Promise.all(showPromises);

  const shows = results
    .filter((result) => result && result.length > 0)
    .map((result) => result[0])
    .filter((show) => show !== null);

  return shows;
}
export async function favoritesLoader() {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (favorites.length === 0) return [];

  const promises = favorites.map((favorite) => getShowByID(favorite));
  const showsData = await Promise.all(promises);
  return showsData.filter((show) => show !== null);
}
