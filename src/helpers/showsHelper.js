import showsData from "../shows-data"

export function getShowByID(id) {
  return showsData.find( show => show.id.toString() === id)
}

export function getHomeShows() {
  return showsData
}

export function searchForShow (text) {
  return showsData.filter(show => show.name.toLowerCase().includes(text.toLowerCase()))
}