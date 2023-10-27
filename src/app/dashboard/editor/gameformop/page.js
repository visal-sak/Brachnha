
import React from "react";
import GameFormOp from "../../../../components/Dashboard/GameFormOp";
import OperatorList from "src/components/Dashboard/ListOperator";


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

export default async function GameFormPageOp() {
  const subjects = await getSubjects();
  const grades = await getGrades();
  const gametypes = await getGameTypes();
  return (
    <div className="my-0 p-4 sm:ml-64">
      <div className="p-4 border-2 ">
        <GameFormOp subjects={subjects} grades={grades} gametypes={gametypes} />
      </div>
      <OperatorList/>
    </div>
  );
}

