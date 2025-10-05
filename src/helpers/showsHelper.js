import showsData from "../shows-data.js";

// Using a more reliable placeholder image that won't be blocked by ad blockers
const defaultImg = {
  medium:
    "data:image/svg+xml;charset=UTF-8,%3Csvg width='210' height='295' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%23666'%3ENo Image%3C/text%3E%3C/svg%3E",
  original:
    "data:image/svg+xml;charset=UTF-8,%3Csvg width='210' height='295' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%23666'%3ENo Image%3C/text%3E%3C/svg%3E",
};

function transformShow(show) {
  return { ...show, image: show.image || defaultImg };
}

function removeDuplicateShows(shows) {
  return shows.filter(
    (show, index, self) => index === self.findIndex((s) => s.id === show.id)
  );
}

async function fetchData(url) {
  try {
    // Add a timeout to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(url, {
      signal: controller.signal,
      mode: "cors",
      cache: "default",
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`❌ Fetch error for ${url}:`, error);

    if (error.name === "AbortError") {
      console.error("⏱️ Request timed out after 10 seconds");
    } else if (
      error.name === "TypeError" &&
      error.message.includes("Failed to fetch")
    ) {
      console.error(
        "🔍 Network error - check network connectivity or ad blockers"
      );
    }

    return null;
  }
}

export async function getShowByID(id) {
  const showData = await fetchData(
    `https://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=seasons`
  );
  return showData ? transformShow(showData) : null;
}

export async function getHomeShows() {
  const jsonData = await fetchData("https://api.tvmaze.com/schedule");

  if (!jsonData) {
    console.warn(
      "⚠️ Failed to fetch schedule data, falling back to local shows data"
    );
    // Fallback to local data when API is not available
    return showsData.map((show) => transformShow(show)).slice(0, 10);
  }

  // Extract shows and remove duplicates based on show ID
  const shows = jsonData.map((episode) => transformShow(episode.show));
  const uniqueShows = removeDuplicateShows(shows);

  return uniqueShows;
}

export async function searchForShow(text) {
  const jsonData = await fetchData(
    `https://api.tvmaze.com/search/shows?q=${text}`
  );
  if (!jsonData) return [];

  const shows = jsonData.map((element) => transformShow(element.show));
  const uniqueShows = removeDuplicateShows(shows);

  return uniqueShows;
}
