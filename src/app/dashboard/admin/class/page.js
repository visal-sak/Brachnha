import ClassC from "../../../../components/Dashboard/ClassCard";
import GameData from "../../../../components/Dashboard/GameList";


export default async function Game() {

  return (
    <div className="my-0 p-4 sm:ml-64">
      <div className="flex flex-wrap justify-between">
        <ClassC />
      </div>
      <div className="mt-10">
        <GameData  />
      </div>
    </div>
  );
}
