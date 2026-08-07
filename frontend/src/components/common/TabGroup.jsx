function TabGroup({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-6 border-b border-outline-variant/50 pb-2">
      <button
        type="button"
        onClick={() => setActiveTab("TEXT")}
        className={`font-label text-xs transition-all ${
          activeTab === "TEXT"
            ? "text-primary border-b border-primary"
            : "text-outline hover:text-on-surface"
        }`}
      >
        TEXT
      </button>

      <button
        type="button"
        onClick={() => setActiveTab("AUDIO")}
        className={`font-label text-xs transition-all ${
          activeTab === "AUDIO"
            ? "text-primary border-b border-primary"
            : "text-outline hover:text-on-surface"
        }`}
      >
        AUDIO
      </button>
    </div>
  );
}

export default TabGroup;