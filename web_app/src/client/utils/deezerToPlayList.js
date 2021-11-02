const deezerToPlayList = (deezerData) => {
  const PlayListData = deezerData.map((deezerDatum) => ({
    name: deezerDatum.title,
    singer: deezerDatum.artist.name,
    musicSrc: deezerDatum.preview,
    cover: deezerDatum.album.cover_medium,
  }));
  return PlayListData;
};

export default deezerToPlayList;