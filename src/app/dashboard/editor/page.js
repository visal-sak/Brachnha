import ClassList from "src/components/Dashboard/ClassCard";
// import ClassC from "../../../../components/Dashboard/ClassCard";
// import GameData from "../../../../components/Dashboard/GameList";
import GameTable from "src/components/Dashboard/Game";


export default async function Editor() {

  return (
    <div className="my-0 p-4 sm:ml-64">
      <div className="flex flex-wrap justify-between">
        <ClassList/>
      </div>
      <div className="mt-10">
        <GameTable/>
      </div>
    </div>
  );
}
