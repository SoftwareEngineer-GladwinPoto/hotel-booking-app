import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestSection = () => {
    const {register,formState: {errors}} = useFormContext<HotelFormData>();
    return (
        <div>
            <h2 className="text-2xl font-bold mb-3">Guests</h2>
            <div className="grid grid-cols-2 p-6 gap-5 bg-gray-300">
                    <label className="text-sm flex-gap-1 text-gray-700 font-semibold">
                        Adults
                        <input min={1} type="number" className="border rounded w-full py-2 px-3 font-normal" {...register("adultCount", {
                            required: "This field is required",
                        })}/>
                        {errors.adultCount?.message &&(
                            <span className="text-red-500 text-sm font-bold">
                                {errors.adultCount.message}
                                </span>

                        )}

                    </label>


                    <label className="text-sm flex-gap-1 text-gray-700 font-semibold" >
                        Children
                        <input min={0} type="number" className="border rounded w-full py-2 px-3 font-normal" {...register("childCount", {
                            required: "This field is required",
                        })}/>
                        {errors.childCount?.message &&(
                            <span className="text-red-500 text-sm font-bold">
                                {errors.childCount.message}
                                </span>

                        )}

                    </label>

                    
                   
                
            </div>
        </div>
    );
};
export default GuestSection;