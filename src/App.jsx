import { useState } from "react";

function App() {
  const [scriptText, setScriptText] = useState("");
  const [activeTab, setActiveTab] = useState("TEXT");

  const isGenerateReady = scriptText.trim().length > 5;

  // Dữ liệu giả lập (Mock data) cho các ảnh lịch sử đã tải lên
  const recentCharacters = [
    "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1551727041-5b347d65b633?w=150&h=150&fit=crop"
  ];

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-hidden">
      <div className="film-grain"></div>

      <main className="relative z-10 flex h-screen max-w-[1440px] mx-auto px-10 py-8 gap-12 items-center">
        
        {/* ================= CỘT TRÁI ================= */}
        <section className="w-[420px] flex-shrink-0 h-[90vh]">
          <div className="glass-panel h-full rounded-2xl p-8 flex flex-col shadow-2xl">

            {/* HEADER */}
            <div className="mb-8">
              <h1
                className="
                  font-display
                  font-bold
                  text-[32px]
                  leading-[1]
                  tracking-[0.03em]
                  text-secondary
                  bronze-glow
                "
              >
                AI VIDEO
                <br />
                GENERATOR
              </h1>

              <p
                className="
                  mt-4
                  font-label
                  text-[10px]
                  tracking-[0.25em]
                  text-outline
                "
              >
                TURN HISTORICAL PORTRAITS INTO SPEAKING VIDEOS
              </p>
            </div>

            {/* UPLOAD AREA */}
            <div className="mb-6">
              <label className="block font-label text-[10px] text-outline mb-2">
                SOURCE PORTRAIT
              </label>
              <div className="border-2 border-dashed border-outline-variant/60 bg-surface-container-lowest/30 rounded-xl p-5 text-center cursor-pointer hover:border-primary transition-all group">
                <span className="material-symbols-outlined text-3xl text-outline group-hover:text-primary transition-colors">
                  upload_file
                </span>
                <p className="mt-2 text-sm font-medium text-on-surface">
                  Upload Historical Portrait
                </p>
                <p className="text-[11px] text-outline mt-1">
                  Drag & drop or click to browse
                </p>
              </div>
            </div>

            {/* RECENT CHARACTERS */}
            <div className="mb-6">
              <label className="block font-label text-[10px] text-outline mb-2">
                RECENT CHARACTERS
              </label>
              <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                {recentCharacters.map((src, idx) => (
                  <img 
                    key={idx} 
                    src={src} 
                    alt={`Character ${idx}`}
                    className={`w-14 h-14 rounded-lg object-cover border-2 cursor-pointer transition-all ${idx === 0 ? 'border-secondary bronze-glow' : 'border-outline-variant/50 opacity-60 hover:opacity-100 hover:border-primary'}`}
                  />
                ))}
              </div>
            </div>

            {/* TABS (CHOOSE INPUT) */}
            <div className="mb-4">
              <label className="block font-label text-[10px] text-outline mb-3">
                CHOOSE INPUT METHOD (TEXT OR AUDIO)
              </label>
              <div className="flex gap-6 border-b border-outline-variant/50 pb-2">
                <button
                  onClick={() => setActiveTab("TEXT")}
                  className={`font-label text-xs transition-all ${activeTab === "TEXT" ? "text-primary border-b border-primary" : "text-outline hover:text-on-surface"}`}
                >
                  TEXT
                </button>
                <button
                  onClick={() => setActiveTab("AUDIO")}
                  className={`font-label text-xs transition-all ${activeTab === "AUDIO" ? "text-primary border-b border-primary" : "text-outline hover:text-on-surface"}`}
                >
                  AUDIO
                </button>
              </div>
            </div>

            {/* INPUT AREA */}
            {activeTab === "TEXT" ? (
              <textarea
                value={scriptText}
                onChange={(e) => setScriptText(e.target.value)}
                placeholder="Enter the script for the historical character to speak..."
                className="w-full flex-1 min-h-[100px] text-sm bg-black/40 rounded-xl border border-outline-variant p-4 outline-none focus:border-primary resize-none transition-colors custom-scrollbar"
              />
            ) : (
              <div className="w-full flex-1 min-h-[100px] text-sm rounded-xl border border-outline-variant flex items-center justify-center text-outline bg-black/20">
                Audio Upload Coming Soon
              </div>
            )}

            {/* GENERATE BUTTON */}
            <div className="mt-6 pt-4 border-t border-outline-variant/30">
              <button
                disabled={!isGenerateReady}
                className={`w-full py-3.5 rounded-xl font-label text-[11px] tracking-[0.2em] transition-all uppercase ${
                  isGenerateReady
                    ? "bg-secondary text-black hover:brightness-110 active:scale-[0.98] bronze-glow font-bold"
                    : "bg-surface-container-highest text-outline cursor-not-allowed"
                }`}
              >
                Generate Video
              </button>
            </div>
          </div>
        </section>

        {/* ================= CỘT PHẢI ================= */}
        <section className="flex-1 flex flex-col justify-center pl-4 lg:pl-10">
          <div className="w-full max-w-[800px] mx-auto">
            
            {/* Tiêu đề và nút Download */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-label text-secondary text-[11px] tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                GENERATED HISTORICAL VIDEO
              </h2>
              <button className="border border-secondary/40 text-secondary text-[10px] px-4 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-secondary hover:text-black transition-all bronze-glow">
                <span className="material-symbols-outlined text-sm">download</span> DOWNLOAD
              </button>
            </div>

            {/* KHUNG VIDEO CHÍNH */}
            <div className="glass-panel rounded-2xl overflow-hidden aspect-video relative shadow-2xl ring-1 ring-white/10 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full border border-secondary/50 bg-secondary/10 backdrop-blur-md flex items-center justify-center hover:scale-110 hover:bg-secondary/20 transition-all group">
                  <span className="material-symbols-outlined text-secondary text-3xl group-hover:text-white transition-colors">
                    play_arrow
                  </span>
                </button>
              </div>
            </div>

            {/* RECENT GENERATIONS (ĐÃ THÊM VÀO) */}
            <div>
              <h3 className="font-label text-[10px] text-outline mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                RECENT GENERATIONS
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="aspect-video glass-panel rounded-xl relative group cursor-pointer hover:border-primary/50 transition-all overflow-hidden border border-outline-variant/30">
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
                    <span className="material-symbols-outlined text-outline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-primary transition-colors text-3xl">
                      play_circle
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}

export default App;