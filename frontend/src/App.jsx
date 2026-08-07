import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import VideoArea from "./components/VideoArea/VideoArea";

function App() {
  // STATE CỦA SIDEBAR
  const [scriptText, setScriptText] = useState("");
  const [activeTab, setActiveTab] = useState("TEXT");
  const [selectedImage, setSelectedImage] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [portraitFile, setPortraitFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // STATE CỦA VIDEO AREA & GENERATION
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const isGenerateReady = selectedImage && ((activeTab === "TEXT" && scriptText.trim().length > 5) || (activeTab === "AUDIO" && audioFile !== null));

  // --- FUNCTIONS ---
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setPortraitFile(file);
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };

  const handleGenerate = () => {
    setErrorMessage("");

    if (!selectedImage) {
      setErrorMessage("Please upload a historical portrait.");
      return;
    }

    if (activeTab === "TEXT" && scriptText.trim().length <= 5) {
      setErrorMessage("Please enter at least 6 characters.");
      return;
    }

    if (activeTab === "AUDIO" && !audioFile) {
      setErrorMessage("Please upload an audio file.");
      return;
    }

    setIsGenerating(true);
    setGeneratedVideoUrl(null);
    setIsPlaying(false);

    // Giả lập API
    setTimeout(() => {
      setGeneratedVideoUrl("https://www.w3schools.com/html/mov_bbb.mp4");
      setIsGenerating(false);
    }, 3000);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = () => {
    if (!generatedVideoUrl) return;
    const a = document.createElement("a");
    a.href = generatedVideoUrl;
    a.download = "historical-ai-video.mp4";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="bg-background text-on-surface font-body min-h-screen relative overflow-x-hidden">
      <div className="film-grain"></div>

      <main className="relative z-10 flex min-h-screen max-w-[1440px] mx-auto px-10 py-12 gap-12 items-start">
        
        <Sidebar 
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          handleImageUpload={handleImageUpload}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          scriptText={scriptText}
          setScriptText={setScriptText}
          audioFile={audioFile}
          setAudioFile={setAudioFile}
          isGenerateReady={isGenerateReady}
          isGenerating={isGenerating}
          handleGenerate={handleGenerate}
          errorMessage={errorMessage}
        />

        <VideoArea 
          isGenerating={isGenerating}
          generatedVideoUrl={generatedVideoUrl}
          setGeneratedVideoUrl={setGeneratedVideoUrl}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          togglePlay={togglePlay}
          handleDownload={handleDownload}
          videoRef={videoRef}
        />

      </main>
    </div>
  );
}

export default App;