import TableAdmin from "src/components/Dashboard/AdminList";
import AdminForm from "../../../../components/Dashboard/AdminForm"


export default async function AddAdmin(){
    return(

        <div className="my-0 p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
           <AdminForm/>
          </div>
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
            <TableAdmin/>
          </div>
      </div>
    )
}

async function listAdmin() {
  const res = await fetch(
    "http://136.228.158.126:8005/api/v1/admins",
    {
      cache: "no-store",
    }
  );
  const data = res.json();
  return data;
}