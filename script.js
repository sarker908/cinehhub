// API Configuration
const API_KEY = '17f0e8466113d048979b4f379b94909c';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

// 25 Streaming Sources
const STREAMING_SOURCES = [
    {
        name: 'vidsrc.mov',
        qualities: ['1080p', '720p'],
        priority: 1,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://vidsrc.mov/embed/movie/${imdbId}`;
            } else {
                return `https://vidsrc.mov/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'godriveplayer',
        qualities: ['1080p', '720p'],
        priority: 2,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
             const formattedImdbId = imdbId.startsWith('tt') ? imdbId : `tt${imdbId}`;
            if (type === 'movie') {
                return `https://godriveplayer.com/embed/movie/${imdbId}`;
            } else {
                return `https://godriveplayer.com/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'Vidzee',
        qualities: ['1080p', '720p'],
        priority: 3,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://vidzee.com/embed/movie/${imdbId}`;
            } else {
                return `https://vidzee.com/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'VidRock',
        qualities: ['1080p', '720p'],
        priority: 4,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://vidrock.com/embed/movie/${imdbId}`;
            } else {
                return `https://vidrock.com/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'VidSrc.wtf (API 1)',
        qualities: ['1080p', '720p'],
        priority: 5,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://vidsrc.wtf/api/1/movie/${imdbId}`;
            } else {
                return `https://vidsrc.wtf/api/1/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'VidSrc.wtf (API 2)',
        qualities: ['1080p', '720p'],
        priority: 6,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://vidsrc.wtf/api/2/movie/${imdbId}`;
            } else {
                return `https://vidsrc.wtf/api/2/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'VidSrc.wtf (API 3)',
        qualities: ['1080p', '720p'],
        priority: 7,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://vidsrc.wtf/api/3/movie/${imdbId}`;
            } else {
                return `https://vidsrc.wtf/api/3/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'Vidnest',
        qualities: ['1080p', '720p'],
        priority: 8,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://vidnest.com/embed/movie/${imdbId}`;
            } else {
                return `https://vidnest.com/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'RiveEmbed',
        qualities: ['1080p', '720p'],
        priority: 9,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://riveembed.com/embed/movie/${imdbId}`;
            } else {
                return `https://riveembed.com/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'SmashyStream',
        qualities: ['1080p', '720p'],
        priority: 10,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://embed.smashystream.com/playere.php?imdb=${imdbId}`;
            } else {
                return `https://embed.smashystream.com/playere.php?tvimdb=${imdbId}&season=${season}&episode=${episode}`;
            }
        }
    },
    {
        name: '111Movies',
        qualities: ['1080p', '720p'],
        priority: 11,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://111movies.com/embed/movie/${imdbId}`;
            } else {
                return `https://111movies.com/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'Videasy',
        qualities: ['1080p', '720p'],
        priority: 12,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://videasy.net/embed/movie/${imdbId}`;
            } else {
                return `https://videasy.net/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'VidLink',
        qualities: ['720p'],
        priority: 13,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            return `https://vidlink.pro/${type}/${imdbId}/${season || ''}/${episode || ''}`;
        }
    },
    {
        name: 'VidFast',
        qualities: ['1080p', '720p'],
        priority: 14,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://vidfast.co/embed/movie/${imdbId}`;
            } else {
                return `https://vidfast.co/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'Embed.su',
        qualities: ['720p'],
        priority: 15,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://embed.su/embed/movie/${imdbId}`;
            } else {
                return `https://embed.su/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: '2Embed',
        qualities: ['1080p', '720p'],
        priority: 16,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://www.2embed.cc/embed/${imdbId}`;
            } else {
                return `https://www.2embed.cc/embed/${imdbId}&s=${season}&e=${episode}`;
            }
        }
    },
    {
        name: 'MoviesAPI',
        qualities: ['1080p', '720p'],
        priority: 17,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://moviesapi.club/movie/${imdbId}`;
            } else {
                return `https://moviesapi.club/tv/${imdbId}-${season}-${episode}`;
            }
        }
    },
    {
        name: 'AutoEmbed',
        qualities: ['1080p', '720p'],
        priority: 18,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://autoembed.cc/embed/movie/${imdbId}`;
            } else {
                return `https://autoembed.cc/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'MultiEmbed',
        qualities: ['1080p', '720p'],
        priority: 19,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://multiembed.mov/?video_id=${imdbId}&tmdb=1`;
            } else {
                return `https://multiembed.mov/?video_id=${imdbId}&tmdb=1&s=${season}&e=${episode}`;
            }
        }
    },
    {
        name: 'VidSrc.xyz',
        qualities: ['1080p', '720p'],
        priority: 20,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://vidsrc.xyz/embed/movie/${imdbId}`;
            } else {
                return `https://vidsrc.xyz/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'PrimeWire',
        qualities: ['1080p', '720p'],
        priority: 21,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://primewire.to/embed/movie/${imdbId}`;
            } else {
                return `https://primewire.to/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'WarezCDN',
        qualities: ['1080p', '720p'],
        priority: 22,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://warezcdn.com/embed/movie/${imdbId}`;
            } else {
                return `https://warezcdn.com/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'SuperFlix',
        qualities: ['1080p', '720p'],
        priority: 23,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://superflix.net/embed/movie/${imdbId}`;
            } else {
                return `https://superflix.net/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    },
    {
        name: 'VidUp',
        qualities: ['1080p', '720p'],
        priority: 24,
        type: 'embed',
        supported: ['movie', 'tv'],
        getUrl: (imdbId, type, season, episode) => {
            if (type === 'movie') {
                return `https://vidup.io/embed/movie/${imdbId}`;
            } else {
                return `https://vidup.io/embed/tv/${imdbId}/${season}/${episode}`;
            }
        }
    }
];

// DOM Elements
const navBtns = document.querySelectorAll('.nav-btn');
const moviesSection = document.getElementById('movies-section');
const tvSection = document.getElementById('tvshows-section');
const backButton = document.getElementById('back-button');
const breadcrumb = document.getElementById('breadcrumb');
const historyPrev = document.getElementById('history-prev');
const historyNext = document.getElementById('history-next');
const historyIndicator = document.getElementById('history-indicator');
const modalBackBtn = document.getElementById('modal-back-btn');
const modalForwardBtn = document.getElementById('modal-forward-btn');
const modalBreadcrumb = document.getElementById('modal-breadcrumb');
const episodeNavigation = document.getElementById('episode-navigation');
const prevEpisodeBtn = document.getElementById('prev-episode-btn');
const nextEpisodeBtn = document.getElementById('next-episode-btn');
const currentEpisodeDisplay = document.getElementById('current-episode-display');

// Movies Elements
const movieGrid = document.getElementById('movie-grid');
const movieLoading = document.getElementById('movie-loading');
const movieSearch = document.getElementById('movie-search');
const movieSearchBtn = document.getElementById('movie-search-btn');
const movieSearchType = document.getElementById('movie-search-type');
const movieSuggestions = document.getElementById('movie-suggestions');
const movieGenre = document.getElementById('movie-genre');
const movieYear = document.getElementById('movie-year');
const movieRating = document.getElementById('movie-rating');
const movieLanguage = document.getElementById('movie-language');
const movieApplyFilters = document.getElementById('movie-apply-filters');
const movieResetFilters = document.getElementById('movie-reset-filters');
const movieRandom = document.getElementById('movie-random');
const movieLoadMore = document.getElementById('movie-load-more');
const movieNavBtns = document.querySelectorAll('[data-movie-endpoint]');

// TV Elements
const tvGrid = document.getElementById('tv-grid');
const tvLoading = document.getElementById('tv-loading');
const tvSearch = document.getElementById('tv-search');
const tvSearchBtn = document.getElementById('tv-search-btn');
const tvSearchType = document.getElementById('tv-search-type');
const tvSuggestions = document.getElementById('tv-suggestions');
const tvGenre = document.getElementById('tv-genre');
const tvYear = document.getElementById('tv-year');
const tvRating = document.getElementById('tv-rating');
const tvLanguage = document.getElementById('tv-language');
const tvApplyFilters = document.getElementById('tv-apply-filters');
const tvResetFilters = document.getElementById('tv-reset-filters');
const tvRandom = document.getElementById('tv-random');
const tvLoadMore = document.getElementById('tv-load-more');
const tvNavBtns = document.querySelectorAll('[data-tv-endpoint]');

// Modal Elements
const episodeModal = document.getElementById('episode-modal');
const episodeModalBody = document.getElementById('episode-modal-body');
const streamingModal = document.getElementById('streaming-modal');
const watchlistModal = document.getElementById('watchlist-modal');
const continueWatchingModal = document.getElementById('continue-watching-modal');
const continueWatchingGrid = document.getElementById('continue-watching-grid');
const similarModal = document.getElementById('similar-modal');
const similarGrid = document.getElementById('similar-grid');
const similarTitle = document.getElementById('similar-title');
const castModal = document.getElementById('cast-modal');
const castDetails = document.getElementById('cast-details');
const watchlistGrid = document.getElementById('watchlist-grid');
const sourcesGrid = document.getElementById('sources-grid');
const sourcesLoading = document.getElementById('sources-loading');
const streamingInfo = document.getElementById('streaming-info');
const sourceTabs = document.querySelectorAll('.source-tab');
const playerContainer = document.getElementById('streaming-player-container');
const playerIframeContainer = document.getElementById('player-iframe-container');
const currentSourceBadge = document.getElementById('current-source-badge');
const streamQuality = document.getElementById('stream-quality');
const sourceCount = document.getElementById('source-count');
const notification = document.getElementById('notification');
const currentYearSpan = document.getElementById('current-year');

// Progress Elements
const progressContainer = document.getElementById('progress-container');
const progressTime = document.getElementById('progress-time');
const progressDuration = document.getElementById('progress-duration');
const progressFill = document.getElementById('progress-fill');
const saveProgressBtn = document.getElementById('save-progress-btn');

// Global Variables
let movieGenres = [];
let tvGenres = [];
let movieCurrentPage = 1;
let tvCurrentPage = 1;
let movieTotalPages = 1;
let tvTotalPages = 1;
let movieResults = [];
let tvResults = [];
let currentMovieEndpoint = 'movie/now_playing';
let currentTvEndpoint = 'tv/airing_today';
let movieQuery = '';
let tvQuery = '';
let movieFilters = {};
let tvFilters = {};
let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
let continueWatching = JSON.parse(localStorage.getItem('continueWatching')) || [];
let trendingItems = [];
let currentStreamingItem = null;
let progressInterval = null;
let movieSuggestionsTimeout = null;
let tvSuggestionsTimeout = null;

// Initialize the app
async function init() {
    currentYearSpan.textContent = new Date().getFullYear();
    
    try {
        await fetchTrendingForHeader();
        await fetchGenres('movie', movieGenre);
        await fetchGenres('tv', tvGenre);
        populateYearDropdowns();
        setupEventListeners();
        
        // Load initial content
        fetchMovies(currentMovieEndpoint);
        fetchTVShows(currentTvEndpoint);
        
        // Make sure movies section is active
        document.querySelector('[data-section="movies"]').classList.add('active');
        document.querySelector('[data-section="tvshows"]').classList.remove('active');
        moviesSection.classList.add('active');
        tvSection.classList.remove('active');
        
        // Rotate header background
        setInterval(setRandomHeaderBackground, 10000);
    } catch (error) {
        console.error("Initialization error:", error);
        showNotification("Failed to initialize app. Please refresh.", "error");
    }
}

// Fetch trending for header
async function fetchTrendingForHeader() {
    try {
        const response = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
        const data = await response.json();
        trendingItems = data.results.filter(item => item.backdrop_path);
        setRandomHeaderBackground();
    } catch (error) {
        console.error("Error fetching trending:", error);
    }
}

// Set random header background with smooth fade
function setRandomHeaderBackground() {
    if (trendingItems.length === 0) return;
    
    const random = trendingItems[Math.floor(Math.random() * trendingItems.length)];
    const backdropUrl = `${IMAGE_BASE_URL}original${random.backdrop_path}`;
    const header = document.getElementById('dynamic-header');
    
    // Create a new image object to preload
    const img = new Image();
    img.src = backdropUrl;
    
    img.onload = function() {
        // Apply the new background smoothly
        header.style.transition = 'background-image 2s ease-in-out';
        header.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(30, 30, 30, 0.8)), url('${backdropUrl}')`;
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = 'center';
    };
    
    const title = random.title || random.name;
    const headerTitle = header.querySelector('h1');
    const headerSubtitle = header.querySelector('p');
    
    if (headerTitle) headerTitle.innerHTML = '<i class="fas fa-film"></i> CineHub';
    if (headerSubtitle) headerSubtitle.textContent = `Featured: ${title}`;
}

// Fetch genres
async function fetchGenres(type, selectElement) {
    try {
        const response = await fetch(`${BASE_URL}/genre/${type}/list?api_key=${API_KEY}&language=en-US`);
        const data = await response.json();
        
        if (type === 'movie') {
            movieGenres = data.genres;
        } else {
            tvGenres = data.genres;
        }
        
        populateGenreDropdown(selectElement, data.genres);
    } catch (error) {
        console.error(`Error fetching ${type} genres:`, error);
    }
}

// Populate genre dropdown
function populateGenreDropdown(selectElement, genres) {
    selectElement.innerHTML = '<option value="">All Genres</option>';
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre.id;
        option.textContent = genre.name;
        selectElement.appendChild(option);
    });
}

// Populate year dropdowns
function populateYearDropdowns() {
    const currentYear = new Date().getFullYear();
    
    [movieYear, tvYear].forEach(select => {
        select.innerHTML = '<option value="">All Years</option>';
        for (let year = currentYear; year >= 1950; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            select.appendChild(option);
        }
    });
}

// Switch to movies section
window.switchToMovies = function() {
    document.querySelector('[data-section="movies"]').click();
};

// Switch to TV shows section
window.switchToTVShows = function() {
    document.querySelector('[data-section="tvshows"]').click();
};

// Setup event listeners
function setupEventListeners() {
    // Section switching
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const section = btn.dataset.section;
            moviesSection.classList.toggle('active', section === 'movies');
            tvSection.classList.toggle('active', section === 'tvshows');
            
            // Reset search when switching sections
            if (section === 'movies') {
                resetMovieSearch();
            } else if (section === 'tvshows') {
                resetTVSearch();
            }
            
            // Close any open modals
            closeAllModals();
        });
    });

    // Watchlist nav button
    document.getElementById('watchlist-nav-btn').addEventListener('click', () => {
        openWatchlist();
    });

    // Continue Watching nav button
    document.getElementById('continue-watching-nav-btn').addEventListener('click', () => {
        openContinueWatching();
    });

    // Movie navigation
    movieNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            movieNavBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMovieEndpoint = btn.dataset.movieEndpoint;
            movieCurrentPage = 1;
            movieQuery = '';
            movieFilters = {};
            resetMovieSearch();
            fetchMovies(currentMovieEndpoint);
        });
    });

    // TV navigation
    tvNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tvNavBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTvEndpoint = btn.dataset.tvEndpoint;
            tvCurrentPage = 1;
            tvQuery = '';
            tvFilters = {};
            resetTVSearch();
            fetchTVShows(currentTvEndpoint);
        });
    });

    // ============================================
    // WORKING SEARCH SUGGESTIONS - FIXED
    // ============================================
    
    // Movie search with suggestions
    movieSearch.addEventListener('input', function() {
        const query = this.value.trim();
        const searchType = movieSearchType.value;
        
        // Clear previous timeout
        if (movieSuggestionsTimeout) {
            clearTimeout(movieSuggestionsTimeout);
        }
        
        // Hide suggestions if query is too short
        if (query.length < 2) {
            movieSuggestions.style.display = 'none';
            return;
        }
        
        // Set timeout to fetch suggestions
        movieSuggestionsTimeout = setTimeout(() => {
            fetchSuggestions(query, searchType, 'movie');
        }, 300);
    });

    // TV search with suggestions
    tvSearch.addEventListener('input', function() {
        const query = this.value.trim();
        const searchType = tvSearchType.value;
        
        // Clear previous timeout
        if (tvSuggestionsTimeout) {
            clearTimeout(tvSuggestionsTimeout);
        }
        
        // Hide suggestions if query is too short
        if (query.length < 2) {
            tvSuggestions.style.display = 'none';
            return;
        }
        
        // Set timeout to fetch suggestions
        tvSuggestionsTimeout = setTimeout(() => {
            fetchSuggestions(query, searchType, 'tv');
        }, 300);
    });

    // Focus events - show suggestions if there are any
    movieSearch.addEventListener('focus', function() {
        if (this.value.trim().length >= 2 && movieSuggestions.children.length > 0) {
            movieSuggestions.style.display = 'block';
        }
    });

    tvSearch.addEventListener('focus', function() {
        if (this.value.trim().length >= 2 && tvSuggestions.children.length > 0) {
            tvSuggestions.style.display = 'block';
        }
    });

    // Click outside to hide suggestions
    document.addEventListener('click', function(e) {
        if (!movieSearch.contains(e.target) && !movieSuggestions.contains(e.target)) {
            movieSuggestions.style.display = 'none';
        }
        if (!tvSearch.contains(e.target) && !tvSuggestions.contains(e.target)) {
            tvSuggestions.style.display = 'none';
        }
    });

    // Prevent suggestions from closing when clicking inside them
    movieSuggestions.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    tvSuggestions.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Search buttons
    movieSearchBtn.addEventListener('click', () => searchMovies());
    movieSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            movieSuggestions.style.display = 'none';
            searchMovies();
        }
    });

    tvSearchBtn.addEventListener('click', () => searchTVShows());
    tvSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            tvSuggestions.style.display = 'none';
            searchTVShows();
        }
    });

    // Movie filters
    movieApplyFilters.addEventListener('click', () => applyMovieFilters());
    movieResetFilters.addEventListener('click', () => resetMovieFilters());
    movieRandom.addEventListener('click', () => getRandomMovie());

    // TV filters
    tvApplyFilters.addEventListener('click', () => applyTVFilters());
    tvResetFilters.addEventListener('click', () => resetTVFilters());
    tvRandom.addEventListener('click', () => getRandomTVShow());

    // Load more
    movieLoadMore.addEventListener('click', () => loadMoreMovies());
    tvLoadMore.addEventListener('click', () => loadMoreTVShows());

    // Watchlist
    document.getElementById('footer-watchlist')?.addEventListener('click', (e) => {
        e.preventDefault();
        openWatchlist();
    });

    // Continue Watching footer
    document.getElementById('footer-continue')?.addEventListener('click', (e) => {
        e.preventDefault();
        openContinueWatching();
    });

    // Close modals
    document.querySelector('.close-episode')?.addEventListener('click', () => {
        closeEpisodeModal();
        switchToMovies();
    });
    
    document.querySelector('.close-watchlist')?.addEventListener('click', () => {
        closeWatchlistModal();
        switchToMovies();
    });
    
    document.querySelector('.close-continue')?.addEventListener('click', () => {
        closeContinueWatchingModal();
        switchToMovies();
    });
    
    document.querySelector('.close-streaming')?.addEventListener('click', closeStreamingModal);
    document.querySelector('.close-similar')?.addEventListener('click', closeSimilarModal);
    document.querySelector('.close-cast')?.addEventListener('click', closeCastModal);

    // Modal navigation
    modalBackBtn?.addEventListener('click', () => {
        if (currentStreamingItem?.media_type === 'tv') {
            const newEpisode = parseInt(currentStreamingItem.episode) - 1;
            if (newEpisode >= 1) {
                loadEpisode(currentStreamingItem.showId, currentStreamingItem.season, newEpisode);
            }
        }
    });

    modalForwardBtn?.addEventListener('click', () => {
        if (currentStreamingItem?.media_type === 'tv') {
            const newEpisode = parseInt(currentStreamingItem.episode) + 1;
            if (newEpisode <= currentStreamingItem.totalEpisodes) {
                loadEpisode(currentStreamingItem.showId, currentStreamingItem.season, newEpisode);
            }
        }
    });

    // Episode navigation
    prevEpisodeBtn?.addEventListener('click', () => {
        if (currentStreamingItem?.media_type === 'tv') {
            const newEpisode = parseInt(currentStreamingItem.episode) - 1;
            if (newEpisode >= 1) {
                loadEpisode(currentStreamingItem.showId, currentStreamingItem.season, newEpisode);
            }
        }
    });

    nextEpisodeBtn?.addEventListener('click', () => {
        if (currentStreamingItem?.media_type === 'tv') {
            const newEpisode = parseInt(currentStreamingItem.episode) + 1;
            if (newEpisode <= currentStreamingItem.totalEpisodes) {
                loadEpisode(currentStreamingItem.showId, currentStreamingItem.season, newEpisode);
            }
        }
    });

    // Source tabs
    sourceTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            sourceTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterSources(this.dataset.filter);
        });
    });

    // Save progress button
    saveProgressBtn?.addEventListener('click', () => {
        saveCurrentProgress();
    });

    // Click outside to close modals
    window.addEventListener('click', (e) => {
        if (e.target === episodeModal) {
            closeEpisodeModal();
            switchToMovies();
        }
        if (e.target === watchlistModal) {
            closeWatchlistModal();
            switchToMovies();
        }
        if (e.target === continueWatchingModal) {
            closeContinueWatchingModal();
            switchToMovies();
        }
        if (e.target === streamingModal) closeStreamingModal();
        if (e.target === similarModal) closeSimilarModal();
        if (e.target === castModal) closeCastModal();
    });
}

// ============================================
// SEARCH SUGGESTIONS FUNCTIONS - FIXED
// ============================================

// Fetch search suggestions from TMDB
async function fetchSuggestions(query, type, section) {
    try {
        let url = '';
        let items = [];
        
        // Build URL based on search type
        if (type === 'actor') {
            url = `${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
        } else if (type === 'movie') {
            url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
        } else if (type === 'tv') {
            url = `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
        } else {
            return;
        }
        
        // Fetch from TMDB
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Process results
        if (type === 'actor') {
            items = data.results.slice(0, 5).map(person => ({
                name: person.name,
                id: person.id,
                type: 'actor',
                known_for: person.known_for_department
            }));
        } else {
            items = data.results.slice(0, 5).map(item => ({
                name: item.title || item.name,
                id: item.id,
                type: type,
                year: (item.release_date || item.first_air_date || '').substring(0, 4)
            }));
        }
        
        // Display suggestions
        displaySuggestions(items, section);
        
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        const suggestionsDiv = section === 'movie' ? movieSuggestions : tvSuggestions;
        if (suggestionsDiv) {
            suggestionsDiv.style.display = 'none';
        }
    }
}

// Display suggestions dropdown
function displaySuggestions(items, section) {
    const suggestionsDiv = section === 'movie' ? movieSuggestions : tvSuggestions;
    const searchInput = section === 'movie' ? movieSearch : tvSearch;
    
    if (!suggestionsDiv) return;
    
    // Hide if no items
    if (items.length === 0) {
        suggestionsDiv.style.display = 'none';
        return;
    }
    
    // Build HTML
    let html = '';
    items.forEach(item => {
        if (item.type === 'actor') {
            html += `
                <div class="suggestion-item" onclick="selectSuggestion('${item.name.replace(/'/g, "\\'")}', '${section}', 'actor', '${item.id}')">
                    <i class="fas fa-user"></i>
                    <div class="suggestion-details">
                        <span class="suggestion-name">${item.name}</span>
                        <span class="suggestion-type">Actor</span>
                    </div>
                </div>
            `;
        } else {
            html += `
                <div class="suggestion-item" onclick="selectSuggestion('${item.name.replace(/'/g, "\\'")}', '${section}', '${item.type}', '${item.id}')">
                    <i class="fas fa-${item.type === 'movie' ? 'film' : 'tv'}"></i>
                    <div class="suggestion-details">
                        <span class="suggestion-name">${item.name}</span>
                        <span class="suggestion-year">${item.year || ''}</span>
                    </div>
                </div>
            `;
        }
    });
    
    suggestionsDiv.innerHTML = html;
    suggestionsDiv.style.display = 'block';
}

// Select suggestion
window.selectSuggestion = function(name, section, type, id) {
    const searchInput = section === 'movie' ? movieSearch : tvSearch;
    const suggestionsDiv = section === 'movie' ? movieSuggestions : tvSuggestions;
    
    if (searchInput) {
        searchInput.value = name;
    }
    
    if (suggestionsDiv) {
        suggestionsDiv.style.display = 'none';
    }
    
    // Perform search based on type
    if (type === 'actor') {
        if (section === 'movie') {
            searchActorMovies(name);
        } else {
            searchActorTVShows(name);
        }
    } else {
        if (section === 'movie') {
            movieQuery = name;
            showMovieLoading();
            fetchMovieSearch(name);
        } else {
            tvQuery = name;
            showTVLoading();
            fetchTVSearch(name);
        }
    }
};

// Reset movie search
function resetMovieSearch() {
    movieSearch.value = '';
    movieQuery = '';
    if (movieSuggestions) {
        movieSuggestions.style.display = 'none';
        movieSuggestions.innerHTML = '';
    }
}

// Reset TV search
function resetTVSearch() {
    tvSearch.value = '';
    tvQuery = '';
    if (tvSuggestions) {
        tvSuggestions.style.display = 'none';
        tvSuggestions.innerHTML = '';
    }
}

// Reset movie filters
function resetMovieFilters() {
    movieGenre.value = '';
    movieYear.value = '';
    movieRating.value = '0';
    movieLanguage.value = '';
    movieFilters = {};
    movieQuery = '';
    resetMovieSearch();
    movieCurrentPage = 1;
    fetchMovies(currentMovieEndpoint);
    showNotification('Filters and search reset', 'info');
}

// Reset TV filters
function resetTVFilters() {
    tvGenre.value = '';
    tvYear.value = '';
    tvRating.value = '0';
    tvLanguage.value = '';
    tvFilters = {};
    tvQuery = '';
    resetTVSearch();
    tvCurrentPage = 1;
    fetchTVShows(currentTvEndpoint);
    showNotification('Filters and search reset', 'info');
}

// Search movies based on selected type
async function searchMovies() {
    const query = movieSearch.value.trim();
    const searchType = movieSearchType.value;
    
    if (query.length < 2) {
        showNotification('Please enter at least 2 characters', 'warning');
        return;
    }
    
    movieQuery = query;
    movieFilters = {};
    movieCurrentPage = 1;
    movieSuggestions.style.display = 'none';
    
    showMovieLoading();
    
    if (searchType === 'actor') {
        await searchActorMovies(query);
    } else if (searchType === 'tv') {
        await searchTVShowsInMovies(query);
    } else {
        await fetchMovieSearch(query);
    }
}

// Search TV shows based on selected type
async function searchTVShows() {
    const query = tvSearch.value.trim();
    const searchType = tvSearchType.value;
    
    if (query.length < 2) {
        showNotification('Please enter at least 2 characters', 'warning');
        return;
    }
    
    tvQuery = query;
    tvFilters = {};
    tvCurrentPage = 1;
    tvSuggestions.style.display = 'none';
    
    showTVLoading();
    
    if (searchType === 'actor') {
        await searchActorTVShows(query);
    } else if (searchType === 'movie') {
        await searchMoviesInTVShows(query);
    } else {
        await fetchTVSearch(query);
    }
}

// Search actor movies (get all movies by actor)
async function searchActorMovies(actorName) {
    try {
        const personResponse = await fetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(actorName)}`);
        const personData = await personResponse.json();
        
        if (personData.results.length === 0) {
            showNotification('No actor found with that name', 'info');
            hideMovieLoading();
            return;
        }
        
        const person = personData.results[0];
        
        const creditsResponse = await fetch(`${BASE_URL}/person/${person.id}/movie_credits?api_key=${API_KEY}`);
        const creditsData = await creditsResponse.json();
        
        const allMovies = creditsData.cast.sort((a, b) => b.popularity - a.popularity);
        
        if (allMovies.length === 0) {
            movieGrid.innerHTML = `
                <div class="empty-watchlist">
                    <i class="fas fa-user"></i>
                    <h3>No movies found for ${person.name}</h3>
                    <p>This actor hasn't appeared in any movies yet</p>
                </div>
            `;
            movieLoadMore.style.display = 'none';
            hideMovieLoading();
            return;
        }
        
        displayActorMovies(allMovies, person.name);
        showNotification(`Found ${allMovies.length} movies featuring ${person.name}`, 'success');
        
    } catch (error) {
        console.error('Error searching actor movies:', error);
        showNotification('Failed to search actor movies', 'error');
        hideMovieLoading();
    }
}

// Search actor TV shows (get all TV shows by actor)
async function searchActorTVShows(actorName) {
    try {
        const personResponse = await fetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(actorName)}`);
        const personData = await personResponse.json();
        
        if (personData.results.length === 0) {
            showNotification('No actor found with that name', 'info');
            hideTVLoading();
            return;
        }
        
        const person = personData.results[0];
        
        const creditsResponse = await fetch(`${BASE_URL}/person/${person.id}/tv_credits?api_key=${API_KEY}`);
        const creditsData = await creditsResponse.json();
        
        const allShows = creditsData.cast.sort((a, b) => b.popularity - a.popularity);
        
        if (allShows.length === 0) {
            tvGrid.innerHTML = `
                <div class="empty-watchlist">
                    <i class="fas fa-user"></i>
                    <h3>No TV shows found for ${person.name}</h3>
                    <p>This actor hasn't appeared in any TV shows yet</p>
                </div>
            `;
            tvLoadMore.style.display = 'none';
            hideTVLoading();
            return;
        }
        
        displayActorTVShows(allShows, person.name);
        showNotification(`Found ${allShows.length} TV shows featuring ${person.name}`, 'success');
        
    } catch (error) {
        console.error('Error searching actor TV shows:', error);
        showNotification('Failed to search actor TV shows', 'error');
        hideTVLoading();
    }
}

// Display actor movies
function displayActorMovies(movies, actorName) {
    movieGrid.innerHTML = '';
    movieResults = [];
    
    const fragment = document.createDocumentFragment();
    
    movies.forEach(movie => {
        const card = createMovieCard(movie);
        const actorBadge = document.createElement('div');
        actorBadge.className = 'actor-badge';
        actorBadge.innerHTML = `<i class="fas fa-user"></i> ${actorName}`;
        card.querySelector('.info').prepend(actorBadge);
        fragment.appendChild(card);
        movieResults.push(movie);
    });
    
    movieGrid.appendChild(fragment);
    movieLoadMore.style.display = 'none';
    hideMovieLoading();
}

// Display actor TV shows
function displayActorTVShows(shows, actorName) {
    tvGrid.innerHTML = '';
    tvResults = [];
    
    const fragment = document.createDocumentFragment();
    
    shows.forEach(show => {
        const card = createTVShowCard(show);
        const actorBadge = document.createElement('div');
        actorBadge.className = 'actor-badge';
        actorBadge.innerHTML = `<i class="fas fa-user"></i> ${actorName}`;
        card.querySelector('.info').prepend(actorBadge);
        fragment.appendChild(card);
        tvResults.push(show);
    });
    
    tvGrid.appendChild(fragment);
    tvLoadMore.style.display = 'none';
    hideTVLoading();
}

// Search TV shows from movies section
async function searchTVShowsInMovies(query) {
    try {
        const url = `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${movieCurrentPage}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results.length === 0) {
            showNotification('No TV shows found', 'info');
        }
        
        movieTotalPages = data.total_pages;
        displayTVShowsInMovies(data.results, !movieCurrentPage === 1);
        
    } catch (error) {
        console.error('Error searching TV shows:', error);
        showNotification('Search failed', 'error');
        hideMovieLoading();
    }
}

// Search movies from TV shows section
async function searchMoviesInTVShows(query) {
    try {
        const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${tvCurrentPage}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results.length === 0) {
            showNotification('No movies found', 'info');
        }
        
        tvTotalPages = data.total_pages;
        displayMoviesInTVShows(data.results, !tvCurrentPage === 1);
        
    } catch (error) {
        console.error('Error searching movies:', error);
        showNotification('Search failed', 'error');
        hideTVLoading();
    }
}

// Display TV shows in movies grid
function displayTVShowsInMovies(shows, clear = true) {
    if (clear) {
        movieGrid.innerHTML = '';
        movieResults = [];
    }
    
    const newShows = shows.filter(s => !movieResults.some(existing => existing.id === s.id));
    movieResults = [...movieResults, ...newShows];
    
    const fragment = document.createDocumentFragment();
    
    newShows.forEach(show => {
        const card = createTVShowCard(show);
        const typeBadge = document.createElement('div');
        typeBadge.className = 'type-badge';
        typeBadge.textContent = 'TV Show';
        card.querySelector('.info').prepend(typeBadge);
        fragment.appendChild(card);
    });
    
    movieGrid.appendChild(fragment);
    movieLoadMore.style.display = movieCurrentPage < movieTotalPages ? 'block' : 'none';
    hideMovieLoading();
}

// Display movies in TV shows grid
function displayMoviesInTVShows(movies, clear = true) {
    if (clear) {
        tvGrid.innerHTML = '';
        tvResults = [];
    }
    
    const newMovies = movies.filter(m => !tvResults.some(existing => existing.id === m.id));
    tvResults = [...tvResults, ...newMovies];
    
    const fragment = document.createDocumentFragment();
    
    newMovies.forEach(movie => {
        const card = createMovieCard(movie);
        const typeBadge = document.createElement('div');
        typeBadge.className = 'type-badge';
        typeBadge.textContent = 'Movie';
        card.querySelector('.info').prepend(typeBadge);
        fragment.appendChild(card);
    });
    
    tvGrid.appendChild(fragment);
    tvLoadMore.style.display = tvCurrentPage < tvTotalPages ? 'block' : 'none';
    hideTVLoading();
}

// Apply movie filters
function applyMovieFilters() {
    movieFilters = {
        genre: movieGenre.value,
        year: movieYear.value,
        rating: movieRating.value,
        language: movieLanguage.value
    };
    movieQuery = '';
    resetMovieSearch();
    movieCurrentPage = 1;
    
    showMovieLoading();
    fetchMoviesWithFilters();
}

// Apply TV filters
function applyTVFilters() {
    tvFilters = {
        genre: tvGenre.value,
        year: tvYear.value,
        rating: tvRating.value,
        language: tvLanguage.value
    };
    tvQuery = '';
    resetTVSearch();
    tvCurrentPage = 1;
    
    showTVLoading();
    fetchTVShowsWithFilters();
}

// Fetch movies
async function fetchMovies(endpoint, loadMore = false) {
    if (!loadMore) {
        showMovieLoading();
        movieGrid.innerHTML = '';
        movieResults = [];
    }
    
    try {
        const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&page=${movieCurrentPage}`;
        const response = await fetch(url);
        const data = await response.json();
        
        movieTotalPages = data.total_pages;
        displayMovies(data.results, !loadMore);
    } catch (error) {
        console.error('Error fetching movies:', error);
        showNotification('Failed to load movies', 'error');
    } finally {
        hideMovieLoading();
    }
}

// Fetch TV shows
async function fetchTVShows(endpoint, loadMore = false) {
    if (!loadMore) {
        showTVLoading();
        tvGrid.innerHTML = '';
        tvResults = [];
    }
    
    try {
        const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&page=${tvCurrentPage}`;
        const response = await fetch(url);
        const data = await response.json();
        
        tvTotalPages = data.total_pages;
        displayTVShows(data.results, !loadMore);
    } catch (error) {
        console.error('Error fetching TV shows:', error);
        showNotification('Failed to load TV shows', 'error');
    } finally {
        hideTVLoading();
    }
}

// Fetch movie search
async function fetchMovieSearch(query, loadMore = false) {
    try {
        const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${movieCurrentPage}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results.length === 0) {
            showNotification('No movies found', 'info');
        }
        
        movieTotalPages = data.total_pages;
        displayMovies(data.results, !loadMore);
    } catch (error) {
        console.error('Error searching movies:', error);
        showNotification('Search failed', 'error');
    } finally {
        hideMovieLoading();
    }
}

// Fetch TV search
async function fetchTVSearch(query, loadMore = false) {
    try {
        const url = `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${tvCurrentPage}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results.length === 0) {
            showNotification('No TV shows found', 'info');
        }
        
        tvTotalPages = data.total_pages;
        displayTVShows(data.results, !loadMore);
    } catch (error) {
        console.error('Error searching TV shows:', error);
        showNotification('Search failed', 'error');
    } finally {
        hideTVLoading();
    }
}

// Fetch movies with filters
async function fetchMoviesWithFilters(loadMore = false) {
    let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${movieCurrentPage}`;
    
    if (movieFilters.genre) url += `&with_genres=${movieFilters.genre}`;
    if (movieFilters.rating) url += `&vote_average.gte=${movieFilters.rating}`;
    if (movieFilters.year) url += `&primary_release_year=${movieFilters.year}`;
    if (movieFilters.language) url += `&with_original_language=${movieFilters.language}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results.length === 0) {
            showNotification('No movies match your filters', 'info');
        }
        
        movieTotalPages = data.total_pages;
        displayMovies(data.results, !loadMore);
    } catch (error) {
        console.error('Error fetching filtered movies:', error);
        showNotification('Failed to apply filters', 'error');
    } finally {
        hideMovieLoading();
    }
}

// Fetch TV shows with filters
async function fetchTVShowsWithFilters(loadMore = false) {
    let url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=${tvCurrentPage}`;
    
    if (tvFilters.genre) url += `&with_genres=${tvFilters.genre}`;
    if (tvFilters.rating) url += `&vote_average.gte=${tvFilters.rating}`;
    if (tvFilters.year) url += `&first_air_date_year=${tvFilters.year}`;
    if (tvFilters.language) url += `&with_original_language=${tvFilters.language}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results.length === 0) {
            showNotification('No TV shows match your filters', 'info');
        }
        
        tvTotalPages = data.total_pages;
        displayTVShows(data.results, !loadMore);
    } catch (error) {
        console.error('Error fetching filtered TV shows:', error);
        showNotification('Failed to apply filters', 'error');
    } finally {
        hideTVLoading();
    }
}

// Get random movie
async function getRandomMovie() {
    showMovieLoading();
    
    try {
        const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
        const response = await fetch(url);
        const data = await response.json();
        
        const totalPages = Math.min(data.total_pages, 100);
        const randomPage = Math.floor(Math.random() * totalPages) + 1;
        
        const randomUrl = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${randomPage}`;
        const randomResponse = await fetch(randomUrl);
        const randomData = await randomResponse.json();
        
        const randomIndex = Math.floor(Math.random() * randomData.results.length);
        const randomMovie = randomData.results[randomIndex];
        
        displayMovies([randomMovie], true);
    } catch (error) {
        console.error('Error getting random movie:', error);
        showNotification('Failed to get random movie', 'error');
    } finally {
        hideMovieLoading();
    }
}

// Get random TV show
async function getRandomTVShow() {
    showTVLoading();
    
    try {
        const url = `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1`;
        const response = await fetch(url);
        const data = await response.json();
        
        const totalPages = Math.min(data.total_pages, 100);
        const randomPage = Math.floor(Math.random() * totalPages) + 1;
        
        const randomUrl = `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=${randomPage}`;
        const randomResponse = await fetch(randomUrl);
        const randomData = await randomResponse.json();
        
        const randomIndex = Math.floor(Math.random() * randomData.results.length);
        const randomShow = randomData.results[randomIndex];
        
        displayTVShows([randomShow], true);
    } catch (error) {
        console.error('Error getting random TV show:', error);
        showNotification('Failed to get random TV show', 'error');
    } finally {
        hideTVLoading();
    }
}

// Load more movies
function loadMoreMovies() {
    if (movieCurrentPage >= movieTotalPages) return;
    
    movieCurrentPage++;
    movieLoadMore.disabled = true;
    movieLoadMore.textContent = 'Loading...';
    
    if (movieQuery) {
        fetchMovieSearch(movieQuery, true).finally(() => {
            movieLoadMore.disabled = false;
            movieLoadMore.textContent = 'Load More Movies';
        });
    } else if (Object.keys(movieFilters).length > 0) {
        fetchMoviesWithFilters(true).finally(() => {
            movieLoadMore.disabled = false;
            movieLoadMore.textContent = 'Load More Movies';
        });
    } else {
        fetchMovies(currentMovieEndpoint, true).finally(() => {
            movieLoadMore.disabled = false;
            movieLoadMore.textContent = 'Load More Movies';
        });
    }
}

// Load more TV shows
function loadMoreTVShows() {
    if (tvCurrentPage >= tvTotalPages) return;
    
    tvCurrentPage++;
    tvLoadMore.disabled = true;
    tvLoadMore.textContent = 'Loading...';
    
    if (tvQuery) {
        fetchTVSearch(tvQuery, true).finally(() => {
            tvLoadMore.disabled = false;
            tvLoadMore.textContent = 'Load More Shows';
        });
    } else if (Object.keys(tvFilters).length > 0) {
        fetchTVShowsWithFilters(true).finally(() => {
            tvLoadMore.disabled = false;
            tvLoadMore.textContent = 'Load More Shows';
        });
    } else {
        fetchTVShows(currentTvEndpoint, true).finally(() => {
            tvLoadMore.disabled = false;
            tvLoadMore.textContent = 'Load More Shows';
        });
    }
}

// Display movies
function displayMovies(movies, clear = true) {
    if (clear) {
        movieResults = [];
        movieGrid.innerHTML = '';
    }
    
    const newMovies = movies.filter(m => !movieResults.some(existing => existing.id === m.id));
    movieResults = [...movieResults, ...newMovies];
    
    const fragment = document.createDocumentFragment();
    
    newMovies.forEach(movie => {
        const card = createMovieCard(movie);
        fragment.appendChild(card);
    });
    
    movieGrid.appendChild(fragment);
    movieLoadMore.style.display = movieCurrentPage < movieTotalPages ? 'block' : 'none';
    updateWatchlistButtons();
}

// Display TV shows
function displayTVShows(shows, clear = true) {
    if (clear) {
        tvResults = [];
        tvGrid.innerHTML = '';
    }
    
    const newShows = shows.filter(s => !tvResults.some(existing => existing.id === s.id));
    tvResults = [...tvResults, ...newShows];
    
    const fragment = document.createDocumentFragment();
    
    newShows.forEach(show => {
        const card = createTVShowCard(show);
        fragment.appendChild(card);
    });
    
    tvGrid.appendChild(fragment);
    tvLoadMore.style.display = tvCurrentPage < tvTotalPages ? 'block' : 'none';
    updateWatchlistButtons();
}

// Create movie card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'content-card';
    
    const posterPath = movie.poster_path 
        ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
        : 'https://placehold.co/500x750/0A1828/BFA181?text=No+Poster';
    
    card.innerHTML = `
        <button class="watchlist-btn ${isInWatchlist(movie.id) ? 'added' : ''}" data-id="${movie.id}" data-type="movie">
            <i class="fas fa-${isInWatchlist(movie.id) ? 'check' : 'bookmark'}"></i>
        </button>
        <img src="${posterPath}" alt="${movie.title}" class="poster" loading="lazy">
        <div class="info">
            <h3 title="${movie.title}">${movie.title}</h3>
            <div class="details">
                <span><i class="fas fa-calendar"></i> ${movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</span>
                <span class="rating">
                    <i class="fas fa-star"></i> ${movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                </span>
            </div>
            <div class="card-actions">
                <button class="stream-btn" onclick="openMovieStream('${movie.id}')">
                    <i class="fas fa-play"></i> Watch Now
                </button>
                <button class="similar-btn" onclick="showSimilarContent('${movie.id}', 'movie')">
                    <i class="fas fa-film"></i> Similar
                </button>
                <button class="cast-btn" onclick="showMovieCast('${movie.id}')">
                    <i class="fas fa-users"></i> Cast
                </button>
            </div>
        </div>
    `;
    
    card.querySelector('.watchlist-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWatchlist(movie.id, 'movie', movie);
    });
    
    return card;
}

// Create TV show card
function createTVShowCard(show) {
    const card = document.createElement('div');
    card.className = 'content-card';
    
    const posterPath = show.poster_path 
        ? `${IMAGE_BASE_URL}w500${show.poster_path}`
        : 'https://placehold.co/500x750/0A1828/BFA181?text=No+Poster';
    
    card.innerHTML = `
        <button class="watchlist-btn ${isInWatchlist(show.id) ? 'added' : ''}" data-id="${show.id}" data-type="tv">
            <i class="fas fa-${isInWatchlist(show.id) ? 'check' : 'bookmark'}"></i>
        </button>
        <img src="${posterPath}" alt="${show.name}" class="poster" loading="lazy">
        <div class="info">
            <h3 title="${show.name}">${show.name}</h3>
            <div class="details">
                <span><i class="fas fa-calendar"></i> ${show.first_air_date ? show.first_air_date.substring(0, 4) : 'N/A'}</span>
                <span class="rating">
                    <i class="fas fa-star"></i> ${show.vote_average ? show.vote_average.toFixed(1) : 'N/A'}
                </span>
            </div>
            <div class="card-actions">
                <button class="stream-btn" onclick="openTVShowEpisodes('${show.id}')">
                    <i class="fas fa-list"></i> Select Episode
                </button>
                <button class="similar-btn" onclick="showSimilarContent('${show.id}', 'tv')">
                    <i class="fas fa-film"></i> Similar
                </button>
                <button class="cast-btn" onclick="showTVCast('${show.id}')">
                    <i class="fas fa-users"></i> Cast
                </button>
            </div>
        </div>
    `;
    
    card.querySelector('.watchlist-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWatchlist(show.id, 'tv', show);
    });
    
    return card;
}

// Show similar content
async function showSimilarContent(id, type) {
    try {
        showNotification('Loading similar content...', 'info');
        
        const response = await fetch(`${BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}`);
        const data = await response.json();
        
        const grid = similarGrid;
        grid.innerHTML = '';
        
        if (data.results.length === 0) {
            grid.innerHTML = `
                <div class="empty-watchlist">
                    <i class="fas fa-film"></i>
                    <h3>No similar content found</h3>
                </div>
            `;
        } else {
            const fragment = document.createDocumentFragment();
            
            data.results.slice(0, 12).forEach(item => {
                const card = type === 'movie' ? createMovieCard(item) : createTVShowCard(item);
                fragment.appendChild(card);
            });
            
            grid.appendChild(fragment);
        }
        
        similarTitle.innerHTML = `<i class="fas fa-film"></i> Similar ${type === 'movie' ? 'Movies' : 'TV Shows'}`;
        similarModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
    } catch (error) {
        console.error('Error fetching similar content:', error);
        showNotification('Failed to load similar content', 'error');
    }
}

// Show movie cast
async function showMovieCast(movieId) {
    try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
        const data = await response.json();
        
        displayCastDetails(data.cast, 'movie');
    } catch (error) {
        console.error('Error fetching cast:', error);
        showNotification('Failed to load cast', 'error');
    }
}

// Show TV cast
async function showTVCast(tvId) {
    try {
        const response = await fetch(`${BASE_URL}/tv/${tvId}/credits?api_key=${API_KEY}`);
        const data = await response.json();
        
        displayCastDetails(data.cast, 'tv');
    } catch (error) {
        console.error('Error fetching cast:', error);
        showNotification('Failed to load cast', 'error');
    }
}

// Display cast details
function displayCastDetails(cast, type) {
    castDetails.innerHTML = `
        <h2 class="modal-title"><i class="fas fa-users"></i> Cast (${cast.length})</h2>
        <div class="cast-grid">
            ${cast.map(person => `
                <div class="cast-card" onclick="searchByPerson('${person.id}', '${person.name}', '${type}')">
                    <img src="${person.profile_path ? IMAGE_BASE_URL + 'w185' + person.profile_path : 'https://placehold.co/185x278/0A1828/BFA181?text=No+Image'}" 
                         alt="${person.name}" class="cast-image">
                    <div class="cast-info">
                        <h4>${person.name}</h4>
                        <p>${person.character || 'Unknown Role'}</p>
                        <span class="cast-search-hint"><i class="fas fa-search"></i> Click to find all their ${type === 'movie' ? 'movies' : 'shows'}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    castModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Search by person
async function searchByPerson(personId, personName, type) {
    closeCastModal();
    showNotification(`Searching for all ${personName}'s ${type === 'movie' ? 'movies' : 'shows'}...`, 'info');
    
    try {
        const creditsResponse = await fetch(`${BASE_URL}/person/${personId}/${type}_credits?api_key=${API_KEY}`);
        const creditsData = await creditsResponse.json();
        
        const allCredits = creditsData.cast.sort((a, b) => b.popularity - a.popularity);
        
        if (type === 'movie') {
            switchToMovies();
            movieGrid.innerHTML = '';
            displayActorMovies(allCredits, personName);
        } else {
            switchToTVShows();
            tvGrid.innerHTML = '';
            displayActorTVShows(allCredits, personName);
        }
        
    } catch (error) {
        console.error('Error searching by person:', error);
        showNotification('Failed to search by cast', 'error');
    }
}

// Open movie stream
window.openMovieStream = async function(movieId, savedSource = null) {
    try {
        showNotification('Loading streaming sources...', 'info');
        
        const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
        const movie = await response.json();
        
        let imdbId = movie.imdb_id;
        if (!imdbId) {
            const externalResponse = await fetch(`${BASE_URL}/movie/${movieId}/external_ids?api_key=${API_KEY}`);
            const external = await externalResponse.json();
            imdbId = external.imdb_id;
        }
        
        if (!imdbId) {
            showNotification('Could not find streaming ID for this movie', 'error');
            return;
        }
        
        const savedProgress = continueWatching.find(item => item.id === movieId && item.type === 'movie');
        
        currentStreamingItem = {
            ...movie,
            media_type: 'movie',
            imdb_id: imdbId,
            progress: savedProgress ? savedProgress.progress : 0,
            lastSource: savedSource || (savedProgress ? savedProgress.lastSource : null)
        };
        
        episodeNavigation.style.display = 'none';
        
        if (savedProgress) {
            progressContainer.style.display = 'block';
            progressFill.style.width = `${savedProgress.progress}%`;
            progressTime.textContent = formatTime(savedProgress.currentTime || 0);
            progressDuration.textContent = formatTime(savedProgress.duration || 0);
        } else {
            progressContainer.style.display = 'none';
        }
        
        streamingModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        streamingInfo.innerHTML = `
            <img src="${IMAGE_BASE_URL}w200${movie.poster_path}" alt="${movie.title}" class="streaming-info-poster">
            <div class="streaming-info-details">
                <h2 class="streaming-info-title">${movie.title} (${movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'})</h2>
                <div class="streaming-info-meta">
                    <span><i class="fas fa-star"></i> ${movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}/10</span>
                    <span><i class="fas fa-clock"></i> ${movie.runtime || 'N/A'} min</span>
                </div>
                <p class="streaming-info-overview">${movie.overview || 'No overview available.'}</p>
            </div>
        `;
        
        displayAllSources(imdbId, 'movie', null, null, savedSource);
        startProgressTracking();
        
    } catch (error) {
        console.error('Error opening movie stream:', error);
        showNotification('Failed to open stream', 'error');
    }
};

// Open TV show episodes
window.openTVShowEpisodes = async function(showId, savedSource = null) {
    try {
        const response = await fetch(`${BASE_URL}/tv/${showId}?api_key=${API_KEY}`);
        const show = await response.json();
        
        let imdbId = show.external_ids?.imdb_id;
        if (!imdbId) {
            const externalResponse = await fetch(`${BASE_URL}/tv/${showId}/external_ids?api_key=${API_KEY}`);
            const external = await externalResponse.json();
            imdbId = external.imdb_id;
        }
        
        if (!imdbId) {
            showNotification('Could not find streaming ID for this show', 'error');
            return;
        }
        
        currentStreamingItem = {
            ...show,
            media_type: 'tv',
            imdb_id: imdbId,
            showId: showId,
            lastSource: savedSource
        };
        
        const seasons = show.seasons.filter(s => s.season_number > 0);
        const firstSeason = seasons[0]?.season_number || 1;
        
        const savedProgress = continueWatching.find(item => item.id === showId && item.type === 'tv');
        
        if (savedProgress) {
            showEpisodeSelector(show, imdbId, savedProgress.season || firstSeason, savedProgress.episode, savedSource);
        } else {
            showEpisodeSelector(show, imdbId, firstSeason, null, savedSource);
        }
        
    } catch (error) {
        console.error('Error opening TV show:', error);
        showNotification('Failed to load episodes', 'error');
    }
};

// Show episode selector
async function showEpisodeSelector(show, imdbId, seasonNum, selectedEpisode = null, savedSource = null) {
    try {
        const response = await fetch(`${BASE_URL}/tv/${show.id}/season/${seasonNum}?api_key=${API_KEY}`);
        const seasonData = await response.json();
        
        const savedProgress = continueWatching.find(item => item.id === show.id && item.type === 'tv');
        
        episodeModalBody.innerHTML = `
            <div class="episode-selector">
                <div class="episode-header">
                    <img src="${IMAGE_BASE_URL}w200${show.poster_path}" alt="${show.name}" class="episode-poster">
                    <div class="episode-info">
                        <h2>${show.name}</h2>
                        <p>${show.overview?.substring(0, 200) || 'No overview available'}...</p>
                        ${savedProgress ? `
                            <div class="resume-info">
                                <i class="fas fa-play-circle"></i> 
                                Resume from Season ${savedProgress.season}, Episode ${savedProgress.episode} (${Math.round(savedProgress.progress)}% complete)
                                ${savedProgress.lastSource ? `<br><small>Last source: ${savedProgress.lastSource}</small>` : ''}
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                <div class="season-selector">
                    <label for="season-select">Select Season:</label>
                    <select id="season-select" onchange="changeSeason('${show.id}', '${imdbId}', this.value, '${savedSource || ''}')">
                        ${show.seasons.filter(s => s.season_number > 0).map(s => `
                            <option value="${s.season_number}" ${s.season_number == seasonNum ? 'selected' : ''}>
                                ${s.name} (${s.episode_count} episodes)
                            </option>
                        `).join('')}
                    </select>
                </div>
                
                <div class="episodes-grid">
                    ${seasonData.episodes.map(episode => {
                        const isResumeEpisode = savedProgress && 
                                                savedProgress.season == seasonNum && 
                                                savedProgress.episode == episode.episode_number;
                        
                        return `
                            <div class="episode-card ${isResumeEpisode ? 'resume-episode' : ''}" 
                                 onclick="playTVEpisode('${show.id}', '${imdbId}', '${seasonNum}', '${episode.episode_number}', '${savedSource || ''}')">
                                <img src="${episode.still_path ? IMAGE_BASE_URL + 'w300' + episode.still_path : 'https://placehold.co/300x169/0A1828/BFA181?text=No+Preview'}" 
                                     alt="${episode.name}" class="episode-still">
                                <div class="episode-details">
                                    <h4>Episode ${episode.episode_number}: ${episode.name}</h4>
                                    <p>${episode.overview?.substring(0, 100) || 'No description'}...</p>
                                    <span class="episode-rating"><i class="fas fa-star"></i> ${episode.vote_average?.toFixed(1) || 'N/A'}</span>
                                    ${isResumeEpisode ? '<span class="resume-badge"><i class="fas fa-play"></i> Resume</span>' : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
        
        episodeModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } catch (error) {
        console.error('Error loading episodes:', error);
        showNotification('Failed to load episodes', 'error');
    }
}

// Change season
window.changeSeason = async function(showId, imdbId, seasonNum, savedSource = '') {
    try {
        const response = await fetch(`${BASE_URL}/tv/${showId}?api_key=${API_KEY}`);
        const show = await response.json();
        showEpisodeSelector(show, imdbId, parseInt(seasonNum), null, savedSource);
    } catch (error) {
        console.error('Error changing season:', error);
    }
};

// Play TV episode
window.playTVEpisode = function(showId, imdbId, seasonNum, episodeNum, savedSource = null) {
    closeEpisodeModal();
    
    const savedProgress = continueWatching.find(item => 
        item.id === showId && 
        item.type === 'tv' && 
        item.season == seasonNum && 
        item.episode == episodeNum
    );
    
    if (savedProgress) {
        loadEpisode(showId, seasonNum, episodeNum, savedProgress.progress, savedSource || savedProgress.lastSource);
    } else {
        loadEpisode(showId, seasonNum, episodeNum, 0, savedSource);
    }
};

// Load episode
async function loadEpisode(showId, seasonNum, episodeNum, savedProgress = 0, savedSource = null) {
    try {
        stopStreaming();
        
        const response = await fetch(`${BASE_URL}/tv/${showId}?api_key=${API_KEY}`);
        const show = await response.json();
        
        let imdbId = show.external_ids?.imdb_id;
        if (!imdbId) {
            const externalResponse = await fetch(`${BASE_URL}/tv/${showId}/external_ids?api_key=${API_KEY}`);
            const external = await externalResponse.json();
            imdbId = external.imdb_id;
        }
        
        const seasonResponse = await fetch(`${BASE_URL}/tv/${showId}/season/${seasonNum}?api_key=${API_KEY}`);
        const seasonData = await seasonResponse.json();
        
        currentStreamingItem = {
            ...show,
            media_type: 'tv',
            imdb_id: imdbId,
            showId: showId,
            season: seasonNum,
            episode: episodeNum,
            totalEpisodes: seasonData.episodes.length,
            progress: savedProgress,
            lastSource: savedSource
        };
        
        currentEpisodeDisplay.textContent = `S${seasonNum} • E${episodeNum} • ${seasonData.episodes[episodeNum-1]?.name || ''}`;
        
        prevEpisodeBtn.disabled = episodeNum <= 1;
        nextEpisodeBtn.disabled = episodeNum >= seasonData.episodes.length;
        
        episodeNavigation.style.display = 'flex';
        
        if (savedProgress > 0) {
            progressContainer.style.display = 'block';
            progressFill.style.width = `${savedProgress}%`;
            progressTime.textContent = 'Resuming...';
            progressDuration.textContent = '';
        } else {
            progressContainer.style.display = 'none';
        }
        
        streamingInfo.innerHTML = `
            <img src="${IMAGE_BASE_URL}w200${show.poster_path}" alt="${show.name}" class="streaming-info-poster">
            <div class="streaming-info-details">
                <h2 class="streaming-info-title">${show.name}</h2>
                <div class="streaming-info-meta">
                    <span><i class="fas fa-star"></i> ${show.vote_average?.toFixed(1) || 'N/A'}/10</span>
                    <span><i class="fas fa-calendar"></i> ${show.first_air_date?.substring(0, 4) || 'N/A'}</span>
                    <span><i class="fas fa-tv"></i> Season ${seasonNum} Episode ${episodeNum}</span>
                </div>
                <p class="streaming-info-overview">${seasonData.episodes[episodeNum-1]?.overview || show.overview || 'No overview available.'}</p>
            </div>
        `;
        
        displayAllSources(imdbId, 'tv', seasonNum, episodeNum, savedSource);
        
        streamingModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        startProgressTracking();
        
    } catch (error) {
        console.error('Error loading episode:', error);
        showNotification('Failed to load episode', 'error');
    }
}

// Start progress tracking
function startProgressTracking() {
    if (progressInterval) {
        clearInterval(progressInterval);
    }
    
    let elapsedSeconds = 0;
    let duration = 120;
    if (currentStreamingItem.media_type === 'tv') {
        duration = 45;
    } else {
        duration = currentStreamingItem.runtime || 120;
    }
    
    if (currentStreamingItem.progress > 0) {
        elapsedSeconds = Math.floor((currentStreamingItem.progress / 100) * duration * 60);
    }
    
    progressInterval = setInterval(() => {
        elapsedSeconds++;
        
        const progress = (elapsedSeconds / (duration * 60)) * 100;
        
        if (progress <= 100) {
            progressFill.style.width = `${progress}%`;
            progressTime.textContent = formatTime(elapsedSeconds);
            progressDuration.textContent = formatTime(duration * 60);
            
            if (elapsedSeconds % 10 === 0) {
                updateProgress(progress, elapsedSeconds, duration * 60);
            }
        } else {
            clearInterval(progressInterval);
            progressFill.style.width = '100%';
            progressTime.textContent = formatTime(duration * 60);
            updateProgress(100, duration * 60, duration * 60);
        }
    }, 1000);
}

// Format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update progress
function updateProgress(progress, currentTime, duration) {
    if (!currentStreamingItem) return;
    
    const existingIndex = continueWatching.findIndex(item => 
        item.id === currentStreamingItem.id && 
        item.type === currentStreamingItem.media_type
    );
    
    const progressItem = {
        id: currentStreamingItem.id,
        type: currentStreamingItem.media_type,
        title: currentStreamingItem.title || currentStreamingItem.name,
        poster_path: currentStreamingItem.poster_path,
        progress: progress,
        currentTime: currentTime,
        duration: duration,
        lastWatched: new Date().toISOString(),
        lastSource: currentSourceBadge ? currentSourceBadge.textContent : (currentStreamingItem.lastSource || 'Unknown')
    };
    
    if (currentStreamingItem.media_type === 'tv') {
        progressItem.season = currentStreamingItem.season;
        progressItem.episode = currentStreamingItem.episode;
        progressItem.showId = currentStreamingItem.showId;
    }
    
    if (existingIndex >= 0) {
        continueWatching[existingIndex] = progressItem;
    } else {
        continueWatching.push(progressItem);
    }
    
    if (continueWatching.length > 30) {
        continueWatching = continueWatching.slice(-30);
    }
    
    localStorage.setItem('continueWatching', JSON.stringify(continueWatching));
}

// Save current progress manually
function saveCurrentProgress() {
    if (!currentStreamingItem) return;
    
    const progress = parseFloat(progressFill.style.width) || 0;
    const timeMatch = progressTime.textContent.split(':');
    const currentTime = parseInt(timeMatch[0]) * 60 + parseInt(timeMatch[1]);
    const durationMatch = progressDuration.textContent.split(':');
    const duration = parseInt(durationMatch[0]) * 60 + parseInt(durationMatch[1]);
    
    updateProgress(progress, currentTime, duration);
    showNotification('Progress saved!', 'success');
}

// Display all sources
function displayAllSources(imdbId, type, season = null, episode = null, savedSourceName = null) {
    sourcesGrid.innerHTML = '';
    sourcesLoading.style.display = 'none';
    
    const filteredSources = STREAMING_SOURCES.filter(source => source.supported.includes(type));
    
    sourceCount.textContent = `${filteredSources.length} sources available`;
    
    let foundSavedSource = false;
    
    filteredSources.forEach(source => {
        const url = source.getUrl(imdbId, type, season, episode);
        const card = document.createElement('div');
        card.className = 'source-card available';
        card.id = `source-${source.name.replace(/\s+/g, '-')}`;
        
        if (savedSourceName && source.name === savedSourceName) {
            foundSavedSource = true;
            card.style.border = '3px solid var(--gold)';
            card.style.transform = 'scale(1.02)';
            card.style.boxShadow = '0 0 20px var(--gold)';
            
            setTimeout(() => {
                playSource(source);
            }, 1000);
        }
        
        card.innerHTML = `
            <div class="source-quality">${source.qualities[0]}</div>
            <div class="source-name">${source.name}</div>
            <div class="source-status available">
                <i class="fas fa-play-circle"></i> Click to stream
            </div>
            <span class="source-badge">${source.type}</span>
        `;
        
        card.onclick = () => playSource(source);
        sourcesGrid.appendChild(card);
    });
    
    if (savedSourceName && !foundSavedSource) {
        showNotification(`Your previous source "${savedSourceName}" is not available. Please select another source.`, 'warning');
    }
}

// Play source
function playSource(source) {
    const url = source.getUrl(
        currentStreamingItem.imdb_id,
        currentStreamingItem.media_type,
        currentStreamingItem.season,
        currentStreamingItem.episode
    );
    
    playerContainer.style.display = 'block';
    playerIframeContainer.innerHTML = `
        <iframe 
            src="${url}" 
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameborder="0">
        </iframe>
    `;
    
    const title = currentStreamingItem?.title || currentStreamingItem?.name || 'Now Playing';
    document.getElementById('now-playing-title').textContent = title;
    currentSourceBadge.textContent = source.name;
    streamQuality.textContent = source.qualities[0];
    
    if (currentStreamingItem) {
        currentStreamingItem.lastSource = source.name;
    }
    
    playerContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showNotification(`Now streaming from ${source.name}`, 'success');
}

// Filter sources
function filterSources(filter) {
    const cards = document.querySelectorAll('.source-card');
    
    cards.forEach(card => {
        switch(filter) {
            case 'all':
                card.style.display = 'block';
                break;
            case 'hd':
                const quality = card.querySelector('.source-quality')?.textContent;
                card.style.display = quality?.includes('1080p') ? 'block' : 'none';
                break;
            case '4k':
                const q4k = card.querySelector('.source-quality')?.textContent;
                card.style.display = q4k?.includes('4K') ? 'block' : 'none';
                break;
        }
    });
}

// Toggle fullscreen
window.toggleFullscreen = function() {
    const iframe = document.querySelector('.player-iframe-container iframe');
    if (iframe) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    }
};

// Stop streaming
window.stopStreaming = function() {
    playerContainer.style.display = 'none';
    playerIframeContainer.innerHTML = '';
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
    progressContainer.style.display = 'none';
};

// Watchlist functions
function toggleWatchlist(id, type, data) {
    if (isInWatchlist(id)) {
        watchlist = watchlist.filter(item => item.id !== id);
        showNotification('Removed from watchlist', 'info');
    } else {
        watchlist.push({ id, type, ...data });
        showNotification('Added to watchlist', 'success');
    }
    
    saveWatchlist();
    updateWatchlistButtons();
}

function isInWatchlist(id) {
    return watchlist.some(item => item.id == id);
}

function saveWatchlist() {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
}

function updateWatchlistButtons() {
    document.querySelectorAll('.watchlist-btn').forEach(btn => {
        const id = btn.dataset.id;
        if (isInWatchlist(id)) {
            btn.classList.add('added');
            btn.innerHTML = '<i class="fas fa-check"></i>';
        } else {
            btn.classList.remove('added');
            btn.innerHTML = '<i class="fas fa-bookmark"></i>';
        }
    });
}

function openWatchlist() {
    if (watchlist.length === 0) {
        watchlistGrid.innerHTML = `
            <div class="empty-watchlist">
                <i class="fas fa-bookmark"></i>
                <h3>Your watchlist is empty</h3>
                <p>Start adding movies and TV shows by clicking the bookmark icon!</p>
            </div>
        `;
    } else {
        watchlistGrid.innerHTML = '';
        watchlist.forEach(item => {
            const card = item.type === 'movie' ? 
                createMovieCard(item) : 
                createTVShowCard(item);
            watchlistGrid.appendChild(card);
        });
    }
    
    watchlistModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Open continue watching
function openContinueWatching() {
    const sortedContinueWatching = [...continueWatching].sort((a, b) => 
        new Date(b.lastWatched) - new Date(a.lastWatched)
    );
    
    if (sortedContinueWatching.length === 0) {
        continueWatchingGrid.innerHTML = `
            <div class="empty-watchlist">
                <i class="fas fa-play-circle"></i>
                <h3>Nothing in progress</h3>
                <p>Start watching something to see it here!</p>
            </div>
        `;
    } else {
        continueWatchingGrid.innerHTML = '';
        sortedContinueWatching.forEach(item => {
            const card = document.createElement('div');
            card.className = 'content-card continue-card';
            
            const posterPath = item.poster_path 
                ? `${IMAGE_BASE_URL}w500${item.poster_path}`
                : 'https://placehold.co/500x750/0A1828/BFA181?text=No+Poster';
            
            card.innerHTML = `
                <img src="${posterPath}" alt="${item.title}" class="poster" loading="lazy">
                <div class="info">
                    <h3 title="${item.title}">${item.title}</h3>
                    <div class="progress-indicator">
                        <div class="progress-bar-small">
                            <div class="progress-fill-small" style="width: ${item.progress}%"></div>
                        </div>
                        <span class="progress-text">${Math.round(item.progress)}% watched</span>
                    </div>
                    ${item.type === 'tv' ? `
                        <div class="episode-info">
                            S${item.season} • E${item.episode}
                        </div>
                    ` : ''}
                    <div class="source-info">
                        <i class="fas fa-video"></i> Last source: ${item.lastSource || 'Unknown'}
                    </div>
                    <div class="card-actions">
                        <button class="stream-btn resume-btn" onclick="resumeContent('${item.id}', '${item.type}', '${item.lastSource || ''}')">
                            <i class="fas fa-play"></i> Resume (${Math.round(item.progress)}%)
                        </button>
                        <button class="remove-progress-btn" onclick="removeFromContinueWatching('${item.id}', '${item.type}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            
            continueWatchingGrid.appendChild(card);
        });
    }
    
    continueWatchingModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Resume content
window.resumeContent = function(id, type, lastSource = null) {
    closeContinueWatchingModal();
    
    if (type === 'movie') {
        openMovieStream(id, lastSource);
    } else {
        openTVShowEpisodes(id, lastSource);
    }
};

// Remove from continue watching
window.removeFromContinueWatching = function(id, type) {
    continueWatching = continueWatching.filter(item => !(item.id == id && item.type === type));
    localStorage.setItem('continueWatching', JSON.stringify(continueWatching));
    openContinueWatching();
    showNotification('Removed from continue watching', 'info');
};

// Modal controls
function closeEpisodeModal() {
    episodeModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeWatchlistModal() {
    watchlistModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeContinueWatchingModal() {
    continueWatchingModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeStreamingModal() {
    streamingModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    stopStreaming();
}

function closeSimilarModal() {
    similarModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function closeCastModal() {
    castModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Show notification
function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = `notification show ${type}`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Loading controls
function showMovieLoading() {
    movieLoading.style.display = 'flex';
    movieGrid.style.display = 'none';
    movieLoadMore.style.display = 'none';
}

function hideMovieLoading() {
    movieLoading.style.display = 'none';
    movieGrid.style.display = 'grid';
}

function showTVLoading() {
    tvLoading.style.display = 'flex';
    tvGrid.style.display = 'none';
    tvLoadMore.style.display = 'none';
}

function hideTVLoading() {
    tvLoading.style.display = 'none';
    tvGrid.style.display = 'grid';
}

// Close all modals
function closeAllModals() {
    episodeModal.style.display = 'none';
    watchlistModal.style.display = 'none';
    continueWatchingModal.style.display = 'none';
    streamingModal.style.display = 'none';
    similarModal.style.display = 'none';
    castModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    stopStreaming();
}

// Initialize
document.addEventListener('DOMContentLoaded', init);