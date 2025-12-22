function Hero() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-0 bg-linear-to-br from-primary/40 via-transparent to-secondary/40"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-50/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Discover Your Next
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
              Favorite Show
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
            Explore thousands of TV shows, track your favorites, and stay
            updated with the latest episodes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#shows"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/50 hover:-translate-y-1"
            >
              Browse Shows
            </a>
            <a
              href="/search"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold transition-all border border-white/20 hover:-translate-y-1"
            >
              Search Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
