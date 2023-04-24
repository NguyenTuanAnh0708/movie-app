const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "8b2c321b73c3c971688a508ecd627b7c",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
