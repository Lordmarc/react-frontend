
export default function UserTab({tabs, activeTab, onActive,}) {
   
  return(
    <div className="border-b border-b-[#B0B0B0] flex">
      {tabs.map(tab => (
        <button key={tab.id} onClick={() => onActive(tab.name)} className={`user-tab-btn ${activeTab === tab.name ? 'border-b border-b-[#7B542F] text-[#7B532F]' : ''}`}>{`${tab.name} (${tab.count})`}</button>
      ))}
    </div>
  );
}