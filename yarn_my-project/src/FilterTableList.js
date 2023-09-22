import TableFilterData from "./TableFilterData";
import bookinfo from "./JSON/filter.json"


const FilterTableList = () => {
    return (
        <>
            <div className="h-auto w-full mt-2 ">
                <table className="border-2 border-slate-800 border-colapse mx-auto">
                    <thead>
                        <tr className="h-14 text-grey-500">
                            <th className="h-14 text-center text-gray-700">Image</th>
                            <th className="h-14  text-gray-700">Title</th>
                            <th className="h-14  text-gray-700">Auther</th>
                            <th className="h-14  text-gray-700">Type</th>
                            <th className="h-14  text-gray-700">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        bookinfo.filter((ele1)=>{return (ele1 => ele1.type === "Action")}).map((ele1)=>{
                            return(
                                <TableFilterData image={ele1.image} title={ele1.title} auther={ele1.auther} type={ele1.type} price={ele1.price}/>
                                )
                        })
                    }</tbody>
                </table>
            </div>
        </>
    )
}



export default FilterTableList ;