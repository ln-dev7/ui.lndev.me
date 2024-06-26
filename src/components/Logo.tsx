export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {

    return (
        <div className="flex items-center justify-center gap-4 group">
            <div className="transform transition duration-300 ease-in-out group-hover:rotate-[40deg] group-hover:translate-x-2">
                <svg width="60"
                     height="60" viewBox="0 0 179 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="179" height="179" rx="44.75" fill="#060911"/>
                    <path
                        d="M29.1153 50.7394C22.7196 58.3616 19.6137 68.2123 20.4809 78.1245C21.3481 88.0366 26.1173 97.1983 33.7395 103.594C41.3617 109.99 51.2124 113.096 61.1245 112.229C71.0367 111.361 80.1984 106.592 86.5942 98.9699L57.8548 74.8547L29.1153 50.7394Z"
                        fill="white"/>
                    <path
                        d="M128 50C128 66.0163 115.016 79 99.0001 79C82.9838 79 70.0001 66.0163 70.0001 50C70.0001 33.9837 82.9838 21 99.0001 21C115.016 21 128 33.9837 128 50Z"
                        fill="white"/>
                    <rect x="65.0001" y="134.082" width="95.0266" height="29.2286"
                          transform="rotate(-40 65.0001 134.082)"
                          fill="white"/>
                </svg>
            </div>
            <span className="font-bold text-lg text-white block transform transition duration-300 ease-in-out group-hover:translate-x-2">lndev/ui</span>
        </div>
    )
}
