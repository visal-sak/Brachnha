import ScoreTable from "../../../../components/Dashboard/Score";
import ScoreData from "../../../../components/Dashboard/ScoreCard";


export default function ScoreList(){
    return(
        <div className="my-0 p-4 sm:ml-64">
      
            <div>
            <h1 className="font-extrabold leading-none tracking-tight text-gray-600 md:text-2xl lg:text-4xl mb-5">
                TOP OF THE DAY
            </h1>
            <ScoreData/>
          
          </div>
         
          <div>
          <ScoreTable/>
          </div>
      </div>
    )
}