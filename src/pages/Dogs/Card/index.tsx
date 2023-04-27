import races from "pages/Dogs/races.json";

interface Dog {
    name: string,
    race: string,
    pic: string
}

interface Props {
    dog: Dog
}

export default function Card({dog}: Props) {

    function getRaceData(raceId: string) {
        return races.filter(race => race.id === raceId)[0]
    }

    const raceData = getRaceData(dog.race);
    return (
        <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={dog.pic} alt="" />
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dog.name}</h5>
                </a>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-2 font-semibold">
                        <span className="bg-slate-100 py-1 px-2">Raça:</span>
                        <span className="bg-slate-100 py-1 px-2">Porte:</span>
                        <span className="bg-slate-100 py-1 px-2">Preço médio:</span>
                    </div>
                    <div className="flex flex-col gap-2 font-medium">
                        <span className="bg-slate-200 py-1 px-2">{raceData.name}</span>
                        <span className="bg-slate-200 py-1 px-2">{raceData.size}</span>
                        <span className="bg-slate-200 py-1 px-2">{raceData.averagePrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}