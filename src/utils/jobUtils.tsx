export const truncateJobAd = (adText: string) => {
  // Find all <p> that are followed by "Om tjänsten"
  // This will match all <p> that precede "Om tjänsten",
  // so we get the last one and truncate from there
  const regex = /(<p>)(?=.*(Om tjänsten))/mg

  const matchArray = [...adText.matchAll(regex)]
  const lastMatchIndex = matchArray && matchArray.length !== 0 ? matchArray[matchArray.length - 1].index : undefined

  if (lastMatchIndex) {
    return adText.substring(0, lastMatchIndex)
  } else {
    return adText
  }
}
