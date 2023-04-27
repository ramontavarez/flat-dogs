import { useState } from 'react';
import Header from './Header';
import Search from './Search';
import Select from './Select';
import Grid from './Grid';
import raceList from 'pages/Dogs/races.json';
import sizeList from 'pages/Dogs/sizes.json';

export default function Dogs() {

    const [search, setSearch] = useState('');
    const [race, setRace] = useState('');
    const [size, setSize] = useState('');

    return (
        <div className="container mx-auto px-8">
            <Header />

            <div>
                <Search 
                    search={search}
                    setSearch={setSearch}
                />
            </div>

            <div className="flex flex-col lg:flex-row mt-6 gap-4 font-semibold">
                <Select 
                    list={raceList}
                    setValue={setRace}
                    defaultText='Todas as raças'
                />
                <Select 
                    list={sizeList}
                    setValue={setSize}
                    defaultText='Todos os tamanhos'
                />
            </div>

            <Grid 
                search={search}
                race={race}
                size={size}
            />
        </div>
    )
}