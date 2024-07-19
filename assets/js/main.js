
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

    const recentlySong = $('.row .recently')
    const latest = $('.latest')
    const singleSong = $('.row .single')
    const latestSong = $('.latest__song')

    const navLists = $$('.nav__list-item')

    const imgSongBar = $('.song__bar-img') 
    const nameSongBar = $('.song__bar-name') 
    const singerSongBar = $('.song__bar-singer') 
    const audio = $('#audio')

    const volumeControl = $('.volume__control')
    const volumeSlider = $('.volume__slider')
    const volumeLine = $('.volume__line')
    const progressVolume = $('.progress')
    const maxVolume = $('.max-volume')
    const lowVolume = $('.low-volume')
    const veryLowVolume = $('.very-low-volume')
    const muteVolume = $('.mute-volume')

    const timeNow = $('.time__now')
    const timeEnd = $('.time__end')

    const playBtn = $('.toggle-play__btn');
    const player = $('.display__control.player')
    const timeLine = $('#time__line')
    const timeProgress = $('.time_progress')
    const nextBtn = $('.next__btn')
    const prevBtn = $('.prev__btn')
    const repeatBtn = $('.repeat__btn')
    const randomBtn = $('.random__btn')
    const volumeBtn = $('.volume__btn')

    const musicBar = $('.music__bar.player')

    const app = {
        currentIndex: 0,
        isPlaying: false,
        isRandom: false,
        isRepeat: false,
        recently__songs: [
            {
                name: 'sao trông em lại như thế này',
                singer: 'Negav',
                path: './assets/song/Recently/negav - sao trông em lại như thế này.mp3',
                image: './assets/image/image_song/recently/saotronngemlainhuthenay.jpg'
            },
            {
                name: 'sao trông em lại như thế này',
                singer: 'Negav',
                path: './assets/song/Recently/negav - sao trông em lại như thế này.mp3',
                image: './assets/image/image_song/recently/saotronngemlainhuthenay.jpg'
            },
            {
                name: 'sao trông em lại như thế này',
                singer: 'Negav',
                path: './assets/song/Recently/negav - sao trông em lại như thế này.mp3',
                image: './assets/image/image_song/recently/saotronngemlainhuthenay.jpg'
            },
            {
                name: 'sao trông em lại như thế này',
                singer: 'Negav',
                path: './assets/song/Recently/negav - sao trông em lại như thế này.mp3',
                image: './assets/image/image_song/recently/saotronngemlainhuthenay.jpg'
            },
            {
                name: 'sao trông em lại như thế này',
                singer: 'Negav',
                path: './assets/song/Recently/negav - sao trông em lại như thế này.mp3',
                image: './assets/image/image_song/recently/saotronngemlainhuthenay.jpg'
            },
        ],
        latest__songs:[
            {
                number: '01',
                image: './assets/image/image_song/latest/canhdongyeuthuong.jpg',
                name: 'Cánh Đồng Yêu Thương',
                singer: 'Mr. Siro',
                lyric: 'Lời sắp nói chắc sẽ đau lòng phải không em...',
                day: 'Latest Release Aug 14, 2017',
                minute: '03:40',
                path: './assets/song/Latest/CanhDongYeuThuong(NewPiano).mp3',
            },
            {
                number: '02',
                image: './assets/image/image_song/latest/vohinhtrongtimem.jpg',
                name: 'Vô Hình Trong Tim Em',
                singer: 'Mr. Siro',
                lyric: 'Thật vô nghĩa phải không em...',
                day: 'Latest Release Aug 14, 2017',
                minute: '03:40',
                path: './assets/song/Latest/Mr Siro - Vô Hình Trong Tim Em (Piano Version).mp3',
            },
            {
                number: '01',
                image: './assets/image/image_song/latest/canhdongyeuthuong.jpg',
                name: 'Cánh Đồng Yêu Thương',
                singer: 'Mr. Siro',
                lyric: 'Lời sắp nói chắc sẽ đau lòng phải không em...',
                day: 'Latest Release Aug 14, 2017',
                minute: '03:40',
                path: './assets/song/Latest/CanhDongYeuThuong(NewPiano).mp3',
            },
            {
                number: '02',
                image: './assets/image/image_song/latest/vohinhtrongtimem.jpg',
                name: 'Vô Hình Trong Tim Em',
                singer: 'Mr. Siro',
                lyric: 'Thật vô nghĩa phải không em...',
                day: 'Latest Release Aug 14, 2017',
                minute: '03:40',
                path: './assets/song/Latest/Mr Siro - Vô Hình Trong Tim Em (Piano Version).mp3',
            },
            {
                number: '01',
                image: './assets/image/image_song/latest/canhdongyeuthuong.jpg',
                name: 'Cánh Đồng Yêu Thương',
                singer: 'Mr. Siro',
                lyric: 'Lời sắp nói chắc sẽ đau lòng phải không em...',
                day: 'Latest Release Aug 14, 2017',
                minute: '03:40',
                path: './assets/song/Latest/CanhDongYeuThuong(NewPiano).mp3',
            },
            {
                number: '02',
                image: './assets/image/image_song/latest/vohinhtrongtimem.jpg',
                name: 'Vô Hình Trong Tim Em',
                singer: 'Mr. Siro',
                lyric: 'Thật vô nghĩa phải không em...',
                day: 'Latest Release Aug 14, 2017',
                minute: '03:40',
                path: './assets/song/Latest/Mr Siro - Vô Hình Trong Tim Em (Piano Version).mp3',
            },
            {
                number: '01',
                image: './assets/image/image_song/latest/canhdongyeuthuong.jpg',
                name: 'Cánh Đồng Yêu Thương',
                singer: 'Mr. Siro',
                lyric: 'Lời sắp nói chắc sẽ đau lòng phải không em...',
                day: 'Latest Release Aug 14, 2017',
                minute: '03:40',
                path: './assets/song/Latest/CanhDongYeuThuong(NewPiano).mp3',
            },
            {
                number: '02',
                image: './assets/image/image_song/latest/vohinhtrongtimem.jpg',
                name: 'Vô Hình Trong Tim Em',
                singer: 'Mr. Siro',
                lyric: 'Thật vô nghĩa phải không em...',
                day: 'Latest Release Aug 14, 2017',
                minute: '03:40',
                path: './assets/song/Latest/Mr Siro - Vô Hình Trong Tim Em (Piano Version).mp3',
            },
            {
                number: '02',
                image: './assets/image/image_song/latest/vohinhtrongtimem.jpg',
                name: 'Vô Hình Trong Tim Em',
                singer: 'Mr. Siro',
                lyric: 'Thật vô nghĩa phải không em...',
                day: 'Latest Release Aug 14, 2017',
                minute: '05:20',
                path: './assets/song/NONSTOP 2024 MIXTAPE - NHẠC TRẺ REMIX 2024 HAY NHẤT HIỆN NAY - NONSTOP 2024 VINAHOUSE BASS CỰC MẠNH.mp3',
            },
            {
                number: '01',
                image: './assets/image/image_song/single/Pokémon_Café_Mix_Cover_Art.jpg',
                name: 'Title Theme',
                singer: 'Pokémon Café Mix',
                lyric: 'Thật vô nghĩa phải không em...',
                day: 'Latest Release Aug 14, 2017',
                minute: '01:25:06',
                path: './assets/song/Single/Title Theme (Short Ver.) - Pokémon Café Mix.mp3',
            },
        ],
        single__songs: [
            {
                name: 'Title Theme',
                singer: 'Pokémon Café Mix',
                path: './assets/song/Single/Title Theme (Short Ver.) - Pokémon Café Mix.mp3',
                image: './assets/image/image_song/single/Pokémon_Café_Mix_Cover_Art.jpg'
            },
            {
                name: 'Title Theme',
                singer: 'Pokémon Café Mix',
                path: './assets/song/Single/Title Theme (Short Ver.) - Pokémon Café Mix.mp3',
                image: './assets/image/image_song/single/Pokémon_Café_Mix_Cover_Art.jpg'
            },
            {
                name: 'Title Theme',
                singer: 'Pokémon Café Mix',
                path: './assets/song/Single/Title Theme (Short Ver.) - Pokémon Café Mix.mp3',
                image: './assets/image/image_song/single/Pokémon_Café_Mix_Cover_Art.jpg'
            },
            {
                name: 'Title Theme',
                singer: 'Pokémon Café Mix',
                path: './assets/song/Single/Title Theme (Short Ver.) - Pokémon Café Mix.mp3',
                image: './assets/image/image_song/single/Pokémon_Café_Mix_Cover_Art.jpg'
            },
            {
                name: 'Title Theme',
                singer: 'Pokémon Café Mix',
                path: './assets/song/Single/Title Theme (Short Ver.) - Pokémon Café Mix.mp3',
                image: './assets/image/image_song/single/Pokémon_Café_Mix_Cover_Art.jpg'
            },
        ],
        renderRecently: function() {
            const recently = this.recently__songs.map((song, index) => {
                return `
                    <div class="col l-2-10">
                        <div class="recently__song" data-index="${index}">
                            <img class="re__song-img" src="${song.image}" alt="">
                            <div class="re__song-info">
                                <h4 class="re__song-name">${song.name}</h4>
                                <p class="re__song-singer">${song.singer}</p>
                            </div>
                        </div>
                    </div>
                `
            });
            recentlySong.innerHTML = recently.join('');
        },
        renderLatest: function() {
            const _latest = this.latest__songs.map((song, index) => {
                return `
                    <div class="latest__song" data-index="${index}">
                        <div class="latest__song-info">
                            <p class="song__number">${song.number}</p>
                            <img src="${song.image}" alt="" class="latest__img">
                            <p class="song__text">${song.lyric}</p>
                        </div>
                        <div class="latest__song_time">
                            <p class="song__day">${song.day}</p>
                            <p class="song__minute">${song.minute}</p>
                        </div>
                        <i class="fa-solid fa-music"></i>
                    </div>
                `
            });
            latest.innerHTML = _latest.join('');
        },
        renderSingle: function() {
            const single = this.single__songs.map((song, index) => {
                return `
                    <div class="col l-2-10">
                        <div class="single__song" data-index="${index}">
                            <img class="si__song-img" src="${song.image}" alt="">
                        </div>
                    </div>
                `
            });
            singleSong.innerHTML = single.join('');
        },
        defineProperties: function() {
            Object.defineProperty(this, 'currentSongRecently', {
                get: function() {
                    return this.recently__songs[this.currentIndex];
                }
            });

            Object.defineProperty(this, 'currentSongLatest', {
                get: function() {
                    return this.latest__songs[this.currentIndex];
                }
            });

            Object.defineProperty(this, 'currentSongSingle', {
                get: function() {
                    return this.single__songs[this.currentIndex];
                }
            });
        },
        loadRecentlyCurrentSong: function() {
            nameSongBar.textContent = this.currentSongRecently.name;
            singerSongBar.textContent = this.currentSongRecently.singer;
            imgSongBar.src = `${this.currentSongRecently.image}`;
            audio.src = this.currentSongRecently.path; 
        },
        loadLatestCurrentSong: function() {
            nameSongBar.textContent = this.currentSongLatest.name;
            singerSongBar.textContent = this.currentSongLatest.singer;
            imgSongBar.src = `${this.currentSongLatest.image}`;
            audio.src = this.currentSongLatest.path; 
            timeEnd.textContent = this.currentSongLatest.minute;
        },
        loadSingleCurrentSong: function() {
            nameSongBar.textContent = this.currentSongSingle.name;
            singerSongBar.textContent = this.currentSongSingle.singer;
            imgSongBar.src = `${this.currentSongSingle.image}`;
            audio.src = this.currentSongSingle.path; 
        },
        scrollToActiveSong: function() {
            setTimeout(() => {
                $('.latest__song.active').scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }, 200);
        },
        navListClick: function() {
            // NavList 
            navLists.forEach((item) => {
                item.onclick = function() {
                    $('.nav__list-item.active').classList.remove('active')
                    this.classList.add('active');
                };
            });
        },
        handleEvents: function() {
            const _this = this;
            duration = 10000;

            // Xu ly khi Click Play
            playBtn.onclick = function() {
                if (_this.isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                };
            };

            // Khi bai hat play
            audio.onplay = function() {
                _this.isPlaying = true;
                player.classList.add('playing');
            };

            // Khi bai hat pause
            audio.onpause = function() {
                _this.isPlaying = false;
                player.classList.remove('playing');
            };

            // Khi tien do bai hat thay doi
            audio.ontimeupdate = function() {;
                // Current Time
                var currentHours = Math.floor(audio.currentTime / 3600);
                var currentMinutes = Math.floor(audio.currentTime / 60 % 60);
                var currentSeconds = Math.floor(audio.currentTime % 60);

                timeNow.textContent = `${currentHours ? currentHours + ':' : ''}${currentMinutes >= 10 ? currentMinutes : '0' + currentMinutes}:${currentSeconds >= 10 ? currentSeconds : '0' + currentSeconds}`;

                // Time Line
                if (audio.duration) {
                    const timeLinePercent = Math.floor(audio.currentTime / audio.duration * 100);
                    timeProgress.value = timeLine.value;
                    timeLine.value = timeLinePercent;
                };
            };

            // Xy ly khi tua
            timeLine.oninput = function(e) {
                const seekTime = audio.duration * e.target.value / 100;
                audio.currentTime = seekTime;
            };

            // Khi next
            nextBtn.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong(); 
                } else {
                    _this.nextSong();
                };
                audio.play();
                _this.scrollToActiveSong();
            };

            // Khi prev
            prevBtn.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong(); 
                } else {
                    _this.prevSong();
                };
                audio.play();
                _this.scrollToActiveSong();
            };

            // Random Button Bat / Tat 
            randomBtn.onclick = function(e) {
                _this.isRandom = !_this.isRandom;
                randomBtn.classList.toggle('active', _this.isRandom);
            };

            // Repeat Button Bat / Tat
            repeatBtn.onclick = function(e) {
                _this.isRepeat = !_this.isRepeat;
                repeatBtn.classList.toggle('active', _this.isRepeat);
            };

            // Xu ly next song khi audio ended or repeat
            audio.onended = function() {
                if (_this.isRepeat) {
                    audio.play();
                } else {
                    nextBtn.click();
                };
            };

            // Xu ly Volume
            volumeLine.oninput = function() {
                progressVolume.value = volumeLine.value;
                audio.volume = volumeLine.value / 100
                if (volumeLine.value <= 0) {
                    maxVolume.style.display = 'none';
                    lowVolume.style.display = 'none';
                    veryLowVolume.style.display = 'none';
                    muteVolume.style.display = 'inline-block';
                } else if (volumeLine.value <= 25) {
                    audio.muted = false;
                    maxVolume.style.display = 'none';
                    lowVolume.style.display = 'none';
                    veryLowVolume.style.display = 'inline-block';
                    muteVolume.style.display = 'none';
                } else if (volumeLine.value <= 60) {
                    audio.muted = false;
                    maxVolume.style.display = 'none';
                    lowVolume.style.display = 'inline-block';
                    veryLowVolume.style.display = 'none';
                    muteVolume.style.display = 'none';
                } else {
                    audio.muted = false;
                    maxVolume.style.display = 'inline-block';
                    lowVolume.style.display = 'none';
                    veryLowVolume.style.display = 'none';
                    muteVolume.style.display = 'none';
                }
            };

                // Value
            setInterval(function() {
                progressVolume.value = volumeLine.value;
            });
            
                // Xu ly icon / volume
            volumeBtn.onclick = function() {
                audio.muted = !audio.muted;
                if (audio.muted) {
                    maxVolume.style.display = 'none';
                    lowVolume.style.display = 'none';
                    veryLowVolume.style.display = 'none';
                    muteVolume.style.display = 'inline-block';
                    volumeLine.value = '0';
                } else {
                    volumeLine.value = audio.volume * 100;
                    if (audio.volume > 0 && audio.volume <= 0.25) {
                        maxVolume.style.display = 'none';
                        lowVolume.style.display = 'none';
                        veryLowVolume.style.display = 'inline-block';
                        muteVolume.style.display = 'none';
                    } else if (audio.volume > 0.25 && audio.volume <= 0.6) {
                        maxVolume.style.display = 'none';
                        lowVolume.style.display = 'inline-block';
                        veryLowVolume.style.display = 'none';
                        muteVolume.style.display = 'none';
                    } else if (audio.volume > 0.6 && audio.volume <= 1) {
                        maxVolume.style.display = 'inline-block';
                        lowVolume.style.display = 'none';
                        veryLowVolume.style.display = 'none';
                        muteVolume.style.display = 'none';
                    }; 
                };
            };

            // Lang nghe hanh vi click vao playlist
                // Recently Song
            recentlySong.onclick = function(e) {
                const recentlyNotPlaying = e.target.closest('.recently__song:not(.playing)');
                const recentlyPlaying = e.target.closest('.recently__song.playing');
                var recentlySongs = $$('.recently__song')
                recentlySongs[_this.currentIndex].classList.remove('playing');
                if (recentlyNotPlaying || recentlyPlaying) {
                    if (recentlyNotPlaying) {
                        _this.currentIndex = Number(recentlyNotPlaying.dataset.index);
                        recentlySongs[_this.currentIndex].classList.add('playing');
                        _this.loadRecentlyCurrentSong();
                        audio.play();
                        musicBar.classList.add('playing');
                    };
                    if (recentlyPlaying) {
                        audio.pause();
                        recentlySongs[_this.currentIndex].classList.remove('playing');
                        musicBar.classList.remove('playing');
                    };
                }
                if (recentlyNode) {
                    _this.currentIndex = Number(recentlyNode.dataset.index);
                    _this.loadRecentlyCurrentSong();
                    _this.renderRecently();
                    audio.play();
                    musicBar.classList.add('playing');
                };
            };
                // Latest Song
            latest.onclick = function(e) {
                const latestNotActive = e.target.closest('.latest__song:not(.active)');
                const latestActive = e.target.closest('.latest__song.active');
                var latestSongs = $$('.latest__song')
                latestSongs[_this.currentIndex].classList.remove('active');
                if (latestNotActive || latestActive) {
                    // Doi voi the khong co class active (Bat active)
                    if (latestNotActive) {
                        _this.currentIndex = Number(latestNotActive.dataset.index);
                        latestSongs[_this.currentIndex].classList.add('active');
                        _this.loadLatestCurrentSong();
                        audio.play();
                        musicBar.classList.add('playing');
                    };
                    // Doi voi the co class active (Tat active)
                    if (latestActive) {
                        audio.pause();
                        musicBar.classList.remove('playing');
                    };
                };

                }
                // Single Song
            singleSong.onclick = function(e) {
                const singleNotPlaying = e.target.closest('.single__song:not(.playing)');
                const singlePlaying = e.target.closest('.single__song.playing');
                var singleSongs = $$('.single__song')
                singleSongs[_this.currentIndex].classList.remove('playing');

                if (singleNotPlaying || singlePlaying) {
                    if (singleNotPlaying) {
                        _this.currentIndex = Number(singleNotPlaying.dataset.index);
                        singleSongs[_this.currentIndex].classList.add('playing');
                        _this.loadSingleCurrentSong();
                        audio.play();
                        musicBar.classList.add('playing');
                    };
                    if (singlePlaying) {
                        audio.pause();
                        singleSongs[_this.currentIndex].classList.remove('playing');
                        musicBar.classList.remove('playing');
                    };
                }
            };
        },

        start: function() {
            this.navListClick();

            this.renderRecently();
            this.renderLatest();
            this.renderSingle();

            this.defineProperties();

            this.loadRecentlyCurrentSong();
            this.loadLatestCurrentSong();
            this.loadSingleCurrentSong();

            this.handleEvents();
        },
        nextSong: function() {
            let latestSongs = $$('.latest__song')
            latestSongs[this.currentIndex].classList.remove('active');

            this.currentIndex++;
            if (this.currentIndex >= this.latest__songs.length) {
                this.currentIndex = 0;
            };

            latestSongs[this.currentIndex].classList.add('active');
            this.loadLatestCurrentSong();
        },
        prevSong: function() {
            let latestSongs = $$('.latest__song')
            latestSongs[this.currentIndex].classList.remove('active');

            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.latest__songs.length - 1;
            };

            latestSongs[this.currentIndex].classList.add('active');
            this.loadLatestCurrentSong();
        },
        playRandomSong: function() {
            let latestSongs = $$('.latest__song')
            latestSongs[this.currentIndex].classList.remove('active');

            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * this.latest__songs.length);
            } while (newIndex === this.currentIndex);

            this.currentIndex = newIndex;
            latestSongs[this.currentIndex].classList.add('active');
            this.loadLatestCurrentSong();
        },
    }
    // Start
    app.start();