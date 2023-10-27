import TableAdmin from "src/components/Dashboard/AdminList";
import GameTable from "../../../components/Dashboard/Game";
import ScoreTable from "../../../components/Dashboard/Score";
import TableUser from "src/components/Dashboard/UserList";
import StaticDash from "src/components/Dashboard/StaticDash";





export default function SuperAdmin() {
   return (

      <div className="my-0 p-4 sm:ml-64">
        <div className="grid grid-cols-4 gap-3">
        <StaticDash/>
        </div>
          <div className="grid grid-cols-2 gap-3">
            <div>  <TableUser/></div>
            <div><TableAdmin/></div>
            </div>
        <div className="mt-10 grid grid-cols-2 gap-3 mb-2">
            <GameTable/>
            <ScoreTable/>
          </div>
      </div>

   )
}