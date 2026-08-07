import MainPlayer from "./MainPlayer";
import RecentVideos from "./RecentVideos";

function VideoArea({
  isGenerating, generatedVideoUrl, setGeneratedVideoUrl, isPlaying,
  setIsPlaying, togglePlay, handleDownload, videoRef
}) {
  return (
    <section className="flex-1 flex flex-col justify-center pl-4 lg:pl-10">
      <div className="w-full max-w-[800px] mx-auto">
        
        {/* Tiêu đề và nút Download */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-label text-secondary text-[11px] tracking-widest flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full bg-secondary ${isGenerating ? 'animate-pulse' : ''}`}></span>
            GENERATED HISTORICAL VIDEO
          </h2>
          <button 
            onClick={handleDownload} disabled={!generatedVideoUrl}
            className={`border text-[10px] px-4 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${generatedVideoUrl ? 'border-secondary/40 text-secondary hover:bg-secondary hover:text-black bronze-glow cursor-pointer' : 'border-outline-variant/30 text-outline cursor-not-allowed'}`}
          >
            <span className="material-symbols-outlined text-sm">download</span> DOWNLOAD
          </button>
        </div>

        <MainPlayer 
          isGenerating={isGenerating} generatedVideoUrl={generatedVideoUrl} 
          isPlaying={isPlaying} togglePlay={togglePlay} 
          videoRef={videoRef} setIsPlaying={setIsPlaying} 
        />
        
        <RecentVideos 
          setGeneratedVideoUrl={setGeneratedVideoUrl} 
          setIsPlaying={setIsPlaying} 
        />

      </div>
    </section>
  );
}

export default VideoArea;