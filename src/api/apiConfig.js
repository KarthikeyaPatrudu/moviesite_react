const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6e8bbd00125921530b80f988f43cfdc3',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;