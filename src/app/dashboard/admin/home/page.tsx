'use client'

import DashboardOverViewCard from "@/components/dashboard/dashboard_ui/DashboardOverViewCard";
import RecentEnrollment from "@/components/dashboard/dashboard_ui/RecentEnrollment";
import UserPieChart from "@/components/dashboard/dashboard_ui/UserPieChart";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function AdminDashboardHome() {
    // const {data:teacherData} = 

    return (
        <div>

            <div className="mb-5 grid lg:grid-cols-3 grid-cols-1 gap-2">
                <DashboardOverViewCard title={'Total Courses'} count={150} icon={<p>hel</p>} subTitle="hi" />
                <DashboardOverViewCard title={'Total Enrollment'} count={150} icon={<p>hel</p>} subTitle="hi" />
                <DashboardOverViewCard title={'Pending Teachers'} count={150} icon={<p>hel</p>} subTitle="hi" />

            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                <UserPieChart />
                <RecentEnrollment />
            </div>
        </div>
    );
}
