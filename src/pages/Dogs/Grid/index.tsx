import { useEffect, useState } from "react";
import Card from "../Card";
import dogs from "pages/Dogs/dogs.json";
import racesJson from "pages/Dogs/races.json";
import sizesJson from "pages/Dogs/sizes.json";

interface Props {
    search: string,
    race: string,
    size: string
}

export default function Grid({search, race, size}: Props) {
    const [arr, setArr] = useState(dogs);

    function matchSearch(txt: string) {
        const regex = new RegExp(search, 'i')
        return regex.test(txt);
    }

    function matchRace(raceValue: string) {
        if (race !== "") return race === raceValue;
        return true;
    }

    function matchSize(sizeValue: string) {
        if (size !== "") return size === sizeValue;
        return true;
    }

    function getSize(raceId: string) {
        const sizeName = racesJson.filter(item => item.id === raceId)[0].size;
        return sizesJson.filter(item => item.name === sizeName)[0].id;
    }

    useEffect(() => {
        const filteredArr = dogs.filter(item => matchSearch(item.name) && matchRace(item.race) && matchSize(getSize(item.race)))
        setArr(filteredArr);
    }, [search, race, size])
    return (
        <main className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
            {arr.map(dog => (
                <Card 
                    dog={dog}
                    key={dog.name}
                />
            ))}
        </main>
    )
}