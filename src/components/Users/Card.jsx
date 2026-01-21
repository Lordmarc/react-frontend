
export default function Card({  colors, text, count  })
{
  return(
    <div className="flex items-center gap-2 w-full border border-gray-300 p-3 rounded-lg shadow">
      <div className="flex items-center gap-2">
        <div className={`rounded-full p-1 h-4 w-4 relative ${colors.bg}`}>
        <div className={`rounded-full w-full h-full top-1/2 left-1/2 ${colors.bg1}`}></div>
        </div>
        <p className="text-lg">{text}</p>
      </div>
 
      <p className={`text-4xl ml-auto `}>{count}</p>
    </div>
  )
}