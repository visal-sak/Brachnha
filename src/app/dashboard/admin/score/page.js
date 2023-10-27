
import ScoreTable from "../../../../components/Dashboard/Score";
import ScoreData from "../../../../components/Dashboard/ScoreCard";

export default function ScoreList(){
    return(
        <div className="my-0 p-4 sm:ml-64">
          {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg"> */}
          <div>
          <ScoreTable/>
          </div>
          {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg"> */}
          {/* <div>
          <ScoreData/>
          </div> */}
      </div>
    )
}