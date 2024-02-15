import { BiSupport } from "react-icons/bi";
interface IAboutCard {
    icon: React.ReactNode;
    title: string;
    subTitle: string;
    color: string
}
export default function AboutUsCard({ icon, title, subTitle, color }: IAboutCard) {

    return (
        <div className="flex lg:gap-3 gap-2">
            <div>
                <p className={`${color === 'blue' ? 'text-blue-500 bg-blue-100'
                    : color === 'orange' ? 'text-orange-500 bg-orange-100'
                        : color === 'green' ? 'text-green-500 bg-green-100'
                            : 'text-purple-500 bg-purple-100'} rounded-xl p-3 shadow text-3xl`}>
                    {icon}
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <h3 className="text-lg font-semibold">{subTitle}</h3>
            </div>
        </div>
    )
}
