import banner from 'assets/banner.png';

export default function Header() {
    return (
        <header className="flex flex-col items-center text-white mt-8 gap-4">
            <h1 className="text-5xl font-bold">FLAT DOGS</h1>
            <span className="font-normal">Cachorros gerados por inteligência artificial (midjourney).</span>
            <img src={banner} />
        </header>
    )
}