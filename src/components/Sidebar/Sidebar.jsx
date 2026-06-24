import GlassPanel from "../common/GlassPanel";
import UploadArea from "./UploadArea";
import CharacterList from "./CharacterList";
import InputArea from "./InputArea";

function Sidebar({
  selectedImage, setSelectedImage, handleImageUpload, activeTab, setActiveTab,
  scriptText, setScriptText, audioFile, setAudioFile, isGenerateReady,
  isGenerating, handleGenerate, errorMessage
}) {
  return (
    <section className="w-[420px] flex-shrink-0">
      <GlassPanel className="h-full p-8 flex flex-col">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="font-display font-bold text-[32px] leading-[1] tracking-[0.03em] text-secondary bronze-glow">
            AI VIDEO<br />GENERATOR
          </h1>
          <p className="mt-4 font-label text-[10px] tracking-[0.25em] text-outline">
            TURN HISTORICAL PORTRAITS INTO SPEAKING VIDEOS
          </p>
        </div>

        <UploadArea selectedImage={selectedImage} handleImageUpload={handleImageUpload} />
        <CharacterList selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        <InputArea 
          activeTab={activeTab} setActiveTab={setActiveTab} 
          scriptText={scriptText} setScriptText={setScriptText}
          audioFile={audioFile} setAudioFile={setAudioFile} 
        />

        {/* GENERATE BUTTON & ERROR */}
        {errorMessage && (
          <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400 mt-4">
            ⚠ {errorMessage}
          </div>
        )}
        <div className="mt-6 pt-4 border-t border-outline-variant/30">
          <button
            onClick={handleGenerate}
            disabled={!isGenerateReady || isGenerating}
            className={`w-full py-3.5 rounded-xl font-label text-[11px] tracking-[0.2em] transition-all uppercase flex justify-center items-center gap-2 ${
              isGenerateReady && !isGenerating
                ? "bg-secondary text-black hover:brightness-110 active:scale-[0.98] bronze-glow font-bold cursor-pointer"
                : "bg-surface-container-highest text-outline cursor-not-allowed"
            }`}
          >
            {isGenerating ? (
              <><span className="material-symbols-outlined animate-spin text-sm">autorenew</span>GENERATING...</>
            ) : "Generate Video"}
          </button>
        </div>
      </GlassPanel>
    </section>
  );
}

export default Sidebar;