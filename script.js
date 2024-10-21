const songs = [
    { 曲名: "Song A" },
    { 曲名: "Song B" },
    { 曲名: "Song C" },
    { 曲名: "Song D" }, 
    { 曲名: "Song E" }  
];

function getRandomSongs(num) {
    const shuffled = [...songs]; // 元の配列をコピー
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // ランダムなインデックス
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // 要素を交換
    }
    return shuffled.slice(0, num); // 最初のnum曲を返す
}

// ボタンがクリックされたときの処理
document.getElementById('randomizeBtn').addEventListener('click', () => {
    const selectedSongs = getRandomSongs(3); // 3曲を選ぶ
    const songListDiv = document.getElementById('songList');
    songListDiv.innerHTML = ''; // 以前の結果をクリア

    selectedSongs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.className = 'song-item'; // クラスを追加
        songItem.textContent = song.曲名; // 曲名を表示
        songListDiv.appendChild(songItem);
    });
});

