import { useState } from "react";

import Button from "../Button/Button.jsx";

import JourneyIcon from "../../svg/journey-icon.svg"

export default function PricingCard({
    title,
    description,
    price,
    features,
    buttonText,
    onButtonClick,
    showPerMonth = true
}) {
    const [isLifetime, setIsLifetime] = useState(false); // State to track checkbox status

    // Handle checkbox toggle
    const handleToggle = () => {
        setIsLifetime(!isLifetime); // Toggle the lifetime state
    };

    return (
        <div className="bg-gray-800  flex flex-col rounded-lg shadow-lg p-6 ">
            <div className="mb-8">
                <h3 className="text-4xl mb-4 place-self-center font-semibold uppercase text-white">
                    {isLifetime ? 'Lifetime' : title}
                </h3>
                <div className="form-control items-center">
                    <label className="flex align-middle gap-4 cursor-pointer">
                        <input
                            type="checkbox"
                            className="toggle toggle-primary"
                            defaultChecked={isLifetime}
                            onChange={handleToggle}
                        />
                        <span className="label-text">Pay once, own it forever.</span>
                    </label>
                </div>
            </div>
            <div className="mb-8">
                <span className="text-5xl  text-white">
                    {isLifetime ? '$44.99' : price}
                </span>
                {showPerMonth && !isLifetime && <span className="text-xl font-medium text-gray-400">/mo</span>}
            </div>
            <ul className="mb-8 space-y-4 text-gray-400">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg
                            className="h-6 w-6 text-primary mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <Button isBlock iconRight={JourneyIcon} iconAlt="Journey Icon" onClick={onButtonClick} className='text-secondary'>{buttonText}</Button>

        </div>
    );
}
