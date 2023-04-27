interface Race {
    id: string,
    name: string,
    price: string,
    averagePrice: string
}

interface Size {
    id: string,
    name: string
}

interface Props {
    list: Race[] | Size[]
    setValue: React.Dispatch<React.SetStateAction<string>>
    defaultText: string
}

export default function Select({list, setValue, defaultText}: Props) {
    return (
        <select 
            onChange={e => setValue(e.target.value)}
            defaultValue="" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
            <option value="">{defaultText}</option>
            {list.map((option) => (
                <option key={option.id} value={option.id}>{option.name}</option>
            ))}
        </select>
    )
}