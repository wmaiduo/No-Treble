import { compareTwoStrings } from "string-similarity";

const returnClosestTracksArray = (search, TracksArray) => {
  const similarityValueArray = TracksArray.map((Track) => ({
    ...Track,
    similarityValue:
      compareTwoStrings(search, Track.name) >=
      compareTwoStrings(search, Track.singer)
        ? compareTwoStrings(search, Track.name)
        : compareTwoStrings(search, Track.singer),
  }));
  const sortedSimilarityValueArray = similarityValueArray.sort((a, b) => {
      return b.similarityValue - a.similarityValue;
  })
  sortedSimilarityValueArray.forEach((el) => {
      delete el.similarityValue;
  })
  return sortedSimilarityValueArray;
};

export default returnClosestTracksArray;
