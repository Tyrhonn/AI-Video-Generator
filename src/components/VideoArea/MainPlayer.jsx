function MainPlayer({ isGenerating, generatedVideoUrl, isPlaying, togglePlay, videoRef, setIsPlaying }) {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden aspect-video relative shadow-2xl ring-1 ring-white/10 mb-8 bg-black">
      {isGenerating ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10">
          <span className="material-symbols-outlined text-secondary text-5xl animate-spin mb-4">hourglass_empty</span>
          <p className="text-secondary font-label tracking-widest text-xs animate-pulse">SYNTHESIZING VIDEO...</p>
        </div>
      ) : generatedVideoUrl ? (
        <>
          <video 
            ref={videoRef}
            src={generatedVideoUrl} 
            className="w-full h-full object-cover"
            onEnded={() => setIsPlaying(false)}
          />
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'bg-black/0 opacity-0 hover:opacity-100' : 'bg-black/40 opacity-100'}`}
            onClick={togglePlay}
          >
            <button className="w-16 h-16 rounded-full border border-secondary/50 bg-secondary/10 backdrop-blur-md flex items-center justify-center hover:scale-110 hover:bg-secondary/20 transition-all group cursor-pointer">
              <span className="material-symbols-outlined text-secondary text-3xl group-hover:text-white transition-colors">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/80 flex items-center justify-center">
          <span className="material-symbols-outlined text-outline/30 text-6xl">movie</span>
        </div>
      )}
    </div>
  );
}

export default MainPlayer;