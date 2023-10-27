
import GameTable from "../../../components/Dashboard/Game";
import ScoreTable from "../../../components/Dashboard/Score";
import TableUser from "src/components/Dashboard/UserList";



export default function Admin() {
   return (

      <div className="my-0 p-4 sm:ml-64">
         <div className="p-4">
            <TableUser/>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4 mb-2">
            <GameTable/>
            <ScoreTable/>
          </div>
          
      
      </div>

   )
}