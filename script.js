// 曲リストをJSON形式で定義
const songs = [
  { title: "Song A", artist: "Artist A" },
  { title: "Song B", artist: "Artist B" },
  { title: "Song C", artist: "Artist C" }
];

// 曲をランダムに選ぶ関数
function getRandomSongs(num) {
  const shuffled = songs.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

// ボタンがクリックされたときの処理
document.getElementById('randomizeBtn').addEventListener('click', () => {
  const selectedSongs = getRandomSongs(3); // 3曲を選ぶ
  const songListDiv = document.getElementById('songList');
  songListDiv.innerHTML = ''; // 以前の結果をクリア

  selectedSongs.forEach(song => {
    const songItem = document.createElement('div');
    songItem.textContent = `${song.title} - ${song.artist}`;
    songListDiv.appendChild(songItem);
  });
});
