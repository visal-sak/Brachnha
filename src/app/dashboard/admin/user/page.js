// import AddForm from "@/components/Dashboard/InsertForm";
// import TableData from "@/components/Dashboard/UserList";
import AddForm from "../../../../components/Dashboard/InsertForm";
import TableUser from "src/components/Dashboard/UserList";


export default function UserList(){
    return(

        <div className="my-0 p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-solid rounded-lg mb-5">
             <AddForm/>
          </div>
          {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg"> */}
          <div>
            <TableUser/>
          </div>
      </div>
    )
}