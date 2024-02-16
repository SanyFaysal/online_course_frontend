'use client'

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function AdminDashboardHome() {
    const data = [
        { name: "Students", value: 1200, color: "#0088FE" },
        { name: "Teachers", value: 790, color: "#00C49F" },
        { name: "Admins", value: 1789, color: "#FFBB28" },

    ];
    return (
        <div className="flex flex-col w-[300px] justify-between  bg-gray-100 shadow px-4 py-2 rounded-lg ">
            <h1 className="text-xl">Total Users</h1>
            <div className="flex items-center justify-center w-full h-full">
                <ResponsiveContainer width={'50%'} height={150}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }}
                        />
                        <Pie
                            data={data}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-between text-[10px] px-3">
                {data.map((item) => (
                    <div className="flex flex-col  items-center" key={item.name}>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
