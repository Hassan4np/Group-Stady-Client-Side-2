import { useEffect } from "react";
import useAxios from "../../../Hooks/useAxios";


const Assignment = () => {
  
    return (
        <div className="min-h-[350px]">
            <div>
                <div className="flex justify-between h-24 border rounded-md px-10 mt-10">
                    <div className="mt-10">
                        <h5 className="text-xl font-bold ">This is all project for student</h5>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-base font-medium mb-1">Category:</h3>
                        <select className="select select-bordered w-full max-w-xs text-base font-medium">
                            <option disabled selected>Select one</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-5">

            </div>
        </div>
    );
};

export default Assignment;