import TabGroup from "../common/TabGroup";

function InputArea({ activeTab, setActiveTab, scriptText, setScriptText, audioFile, setAudioFile }) {
  return (
    <>
      <div className="mb-4">
        <label className="block font-label text-[10px] text-outline mb-3">
          CHOOSE INPUT METHOD (TEXT OR AUDIO)
        </label>
        <TabGroup activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {activeTab === "TEXT" && (
        <textarea
          value={scriptText}
          onChange={(e) => setScriptText(e.target.value)}
          placeholder="Enter the script for the historical character to speak..."
          className="w-full flex-1 min-h-[100px] text-sm bg-black/40 rounded-xl border border-outline-variant p-4 outline-none focus:border-primary resize-none transition-colors custom-scrollbar"
        />
      )}
      
      {activeTab === "AUDIO" && (
        <div className="border border-dashed border-outline-variant rounded-2xl p-6 text-center">
          <input
            type="file"
            accept=".mp3,.wav,.m4a,audio/*"
            id="audio-upload"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setAudioFile(file);
            }}
          />
          <label htmlFor="audio-upload" className="cursor-pointer block">
            <p className="text-sm text-outline">Click to upload audio</p>
            <p className="text-xs mt-2 text-outline">MP3, WAV, M4A</p>
          </label>
          {audioFile && (
            <div className="mt-4 text-primary text-sm">✓ {audioFile.name}</div>
          )}
        </div>
      )}
      
      {activeTab === "AUDIO" && audioFile && (
        <audio controls className="w-full mt-3" src={URL.createObjectURL(audioFile)} />
      )}
    </>
  );
}

export default InputArea;