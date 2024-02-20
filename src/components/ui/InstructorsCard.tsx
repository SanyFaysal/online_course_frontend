
interface InstructorType {
    name: string;
    designation: string;
    img: string
}
export default function InstructorsCard({ instructor }: { instructor: InstructorType }) {

    return (
        <div className=" px-4  rounded  relative bg-transparent flex flex-col justify-center items-center">
            <img src="/assets/vectors/bg.png" className="absolute  mx-auto w-[230px]  -z-10 opacity-75 " />
            <img src={instructor.img} className=" h-[200px] z-8" alt="" />
            <div className="mt-1 text-center">
                <h1 className="font-semibold">{instructor.name}</h1>
                <h1>Senior Software developer</h1>
            </div>
        </div>
    )
}
