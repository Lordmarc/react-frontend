import { PiChartBarFill } from "react-icons/pi";
import Card from "./Card";

export default function LiveSummary({ summary }) {
  
  return (
    <div className=" bg-white rounded-xl p-8 w-80 border border-gray-300 shadow flex flex-col  max-h-96">
      <div className="flex items-center gap-3 text-2xl">
        <div className="bg-[#7B542F] p-2 text-white rounded-md">
          <PiChartBarFill/>
        </div>
    
        <h2>Live Summary</h2>

      </div>
      
        <div className="flex flex-col gap-4 mt-10">
          {summary.map(card => (
            <Card colors={card.colors} text={card.text} count={card.count} />
          ))}
          
        </div>
    </div>
  );
}