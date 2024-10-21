const songs = [
    { title: "Song A", artist: "Artist A" },
    { title: "Song B", artist: "Artist B" },
    { title: "Song C", artist: "Artist C" },
    { title: "Song D", artist: "Artist D" },
    { title: "Song E", artist: "Artist E" },
    { title: "Song F", artist: "Artist F" },
    { title: "Song G", artist: "Artist G" },
    { title: "Song H", artist: "Artist H" }
];

function getRandomSongs(num) {
    const shuffled = songs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

document.getElementById('randomizeBtn').addEventListener('click', () => {
    const selectedSongs = getRandomSongs(3);
    const songListDiv = document.getElementById('songList');
    songListDiv.innerHTML = '';

    selectedSongs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.textContent = `${song.title} - ${song.artist}`;
        songListDiv.appendChild(songItem);
    });
});
