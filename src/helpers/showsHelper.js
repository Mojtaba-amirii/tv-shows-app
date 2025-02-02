const defaultImg = { medium: "https://via.placeholder.com/210x295?text=:(" };

function transformShow(show) {
  return { ...show, image: show.image || defaultImg };
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
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
  return jsonData ? jsonData.map((episode) => transformShow(episode.show)) : [];
}

export async function searchForShow(text) {
  const jsonData = await fetchData(
    `https://api.tvmaze.com/search/shows?q=${text}`
  );
  return jsonData ? jsonData.map((element) => transformShow(element.show)) : [];
}
