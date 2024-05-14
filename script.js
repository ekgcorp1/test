document.addEventListener("DOMContentLoaded", function() {
    const playlist = [
         { name: "1. Dime", src: "https://firebasestorage.googleapis.com/v0/b/la-nueva-calle.appspot.com/o/Ivy%20Queen%2FIvy%20Queen%20-%20Dime%20(HQ)%20(1).mp3?alt=media&token=160afc73-c31c-43c0-bed5-aca3cec5ee0f" },
        { name: "2. La Vida es asi", src: "https://firebasestorage.googleapis.com/v0/b/la-nueva-calle.appspot.com/o/Ivy%20Queen%2FIvy%20Queen%20-%20La%20Vida%20Es%20As%C3%AD%20(Video%20Oficial).mp3?alt=media&token=1a98b6b7-bd93-4cad-b88e-2035ef2ab37d" },
        { name: "3. Te e Querido", src: "https://firebasestorage.googleapis.com/v0/b/la-nueva-calle.appspot.com/o/Ivy%20Queen%2FIvy%20Queen%20-%20Te%20He%20Querido%2CTe%20He%20Llorado%20(HD).mp3?alt=media&token=ffd4e622-a891-4e5c-98b6-bd5567b3622b" }

        // Add more tracks as needed
    ];

    const audioPlayer = document.getElementById("audioPlayer");
    const playlistElement = document.getElementById("playlist");
    const upcomingSongsElement = document.getElementById("upcomingSongs");
    let currentTrackIndex = 0;

    function playTrack(index) {
        const track = playlist[index];
        audioPlayer.src = track.src;
        audioPlayer.play();
    }

    function displayPlaylist() {
        playlistElement.innerHTML = "";
        playlist.forEach((track, index) => {
            const listItem = document.createElement("li");
            listItem.textContent =  "" + track.name;
            listItem.addEventListener("click", function() {
                currentTrackIndex = index;
                playTrack(currentTrackIndex);
                displayPlaylist();
                displayUpcomingSongs();
            });
            if (index === currentTrackIndex) {
                listItem.classList.add("current");
            }
            playlistElement.appendChild(listItem);
        });
    }

    function displayUpcomingSongs() {
        upcomingSongsElement.innerHTML = "";
        for (let i = currentTrackIndex + 1; i < playlist.length; i++) {
            const track = playlist[i];
            const listItem = document.createElement("li");
            listItem.textContent = track.title + " - " + track.name;
            upcomingSongsElement.appendChild(listItem);
        }
    }

    audioPlayer.addEventListener("ended", function() {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length; // Move to the next track or loop back to the first track
        playTrack(currentTrackIndex);
        displayPlaylist();
        displayUpcomingSongs();
    });

    // Initially play the first track
    playTrack(currentTrackIndex);
    displayPlaylist();
    displayUpcomingSongs();
});
