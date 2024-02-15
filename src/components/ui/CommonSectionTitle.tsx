interface ITitle {
    subTitle: string;
    title_1: string;
    title_2?: string;

    highlight?: string;

}
export default function CommonSectionTitle({ subTitle, title_1, title_2, highlight }: ITitle) {
    return (
        <>
            <p className="bg-blue-100 mb-3 text-blue-500 font-semibold w-fit px-3 rounded text-lg">{subTitle}</p>
            <h3 className=" text-4xl text-blue-900 font-bold">{title_1}<span className="text-blue-500 mx-3">{highlight} </span>
                <br />{title_2}</h3>
        </>
    )
}
