export const truncateJobAd = (adText: string) => {
  // Find all <p> that are followed by "<strong>" and "Om tjänsten"
  // This is a very fragile and specific match, but will have to work for now
  const regex = /(<p>)(?=(<strong>)(Om tjänsten))/mg

  const indexOfMatch = adText.search(regex)

  if (indexOfMatch !== -1) {
    return adText.substring(0, indexOfMatch)
  } else {
    return adText
  }
}
