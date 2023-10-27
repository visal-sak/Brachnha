import CompareList from "src/components/Dashboard/ListCompare";
import GameTable from "../../../../components/Dashboard/Game";
import NewGameForm from "../../../../components/Dashboard/GameFormNew";
import GameData from "../../../../components/Dashboard/GameList";

export async function getSubjects() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/subjects?page=1&limit=20`,
    { cache: "no-store" }
  );
  return response.json();
}
export async function getGameTypes() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/game-types?page=1&limit=20`,
    { cache: "no-store" }
  );
  return response.json();
}
export async function getGrades() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + `/grades?page=1&limit=20`,
    {
      cache: "no-store",
    }
  );
  return response.json();
}

export default async function Game(){
  const subjects=await getSubjects()
  const grades=await getGrades()
  const gametypes=await getGameTypes()
    return(
        <div className="my-0 p-4 sm:ml-64">
           <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
           <NewGameForm subjects={subjects} grades={grades} gametypes={gametypes}/>
           </div>
           <CompareList/>
      </div>

    )
}