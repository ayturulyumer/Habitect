


const timelineItems = [
    {
        id: 1,
        title: "Start Small",
        image: "../../../start-small.png", // Add image URL here
    },
    {
        id: 2,
        title: "Gamify",

        image: "../../../gamify.png", // Add image URL here
    },
    {
        id: 3,
        title: "Celebrate small wins",
        image: "../../../celebrate.png", // Add image URL here
    },
    {
        id: 4,
        title: "Level up",
        image: "../../../level-up.png", // Add image URL here
    },
]

export default function Roadmap() {
    return (
        <ul className="timeline timeline-snap-icon text-center tracking-wide  max-md:timeline-compact timeline-vertical">
            {timelineItems.map((item, index) => (
                <li key={item.id}>
                    <div className="timeline-middle  ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-10 w-10"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"

                                fill="#98FF98"
                            />
                        </svg>
                    </div>

                    {index % 2 === 0 ? (
                        <div className="timeline-start space-y-6 mb-10 ">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-40 h-40 md:w-72 md:h-72 object-cover rounded-full mb-2"
                            />
                            <div className="text-xl md:text-3xl uppercase font-medium  italic">{item.title}</div>
                        </div>
                    ) : (
                        <div className="timeline-end space-y-6 mb-10">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-40 h-40 md:w-72 md:h-72 object-cover rounded-full mb-2"
                            />
                            <div className="text-xl md:text-3xl   uppercase font-medium italic">{item.title}</div>
                        </div>
                    )}

                    <hr className="bg-black" />
                </li>
            ))}
        </ul>
    )
}
