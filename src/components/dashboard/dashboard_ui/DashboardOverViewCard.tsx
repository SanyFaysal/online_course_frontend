import { Line, LineChart } from "recharts";

interface IOverview {
    title: string;
    subTitle: string;
    icon: React.ReactNode;
    count: number
}
export default function DashboardOverViewCard({ title, subTitle, icon, count }: IOverview) {
    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="px-3 py-2 bg-gray-100  rounded">
            <p className="text-[16px] font-semibold" >{title}</p>
            <hr className="mx-[-12px] my-1" />
            <div className="flex justify-between">
                <p className="text-4xl my-2">{count}</p>
                <LineChart
                    width={100}
                    height={50}
                    data={data}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    )
}
