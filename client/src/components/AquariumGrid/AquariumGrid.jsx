import { useMemo } from "react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale-extreme.css";
import Tippy from "@tippyjs/react";
import Button from "../Button/Button.jsx";
import LevelUpIcon from "../../svg/levelup-icon.svg";
import AquaCoins from "../../assets/aquagem.png";

export default function AquariumGrid({
    creatures,
    grid,
    handleItemSelect,
    growAnimal,
    removeAnimal,
    setActiveCell,
    activeCell,
    aquaCoins,
    levelUpCreatureMutation
}) {

    const rarityClassMap = {
        legendary: 'bg-yellow-600',
        common: 'bg-gray-600',
        rare: 'bg-blue-400',
        epic: 'bg-purple-800',
    };



    const getRarityClass = (rarity) => {
        return rarityClassMap[rarity.toLowerCase()] || 'bg-gray-400'; // default to common if not found
    };

    // Memoize the grid rendering
    const renderedGrid = useMemo(() => {
        return grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
                <Tippy
                    key={`${rowIndex}-${colIndex}`}
                    content={
                        cell ? (
                            <div className="p-1 flex flex-col gap-2">
                                <section className="flex justify-between align-baseline items-baseline">
                                    <h4 className="font-thin tracking-widest text-lg font-bangers ">{cell.name}</h4>
                                    <p className={`text-xs ml-6 p-2   uppercase badge badge-xs ${getRarityClass(cell.rarity)}`}>{cell.rarity}</p>
                                </section>
                                <p className="text-sm badge">Level: {cell.level}</p>
                                <div className="flex gap-2">
                                    <Button
                                        iconAlt="Grow Icon"

                                        className={`bg-blue-600  text-white`}
                                        onClick={() => growAnimal(rowIndex, colIndex)}
                                        disabled={levelUpCreatureMutation.isLoading ||
                                            cell.level === 3 ||
                                            aquaCoins < cell.growthCost[`level${cell.level + 1}`]
                                        }
                                    >
                                        {cell.level === 3 ? (
                                            "Max Level"
                                        ) : (
                                            <>
                                                <img className="w-4 h-4" src={AquaCoins} alt="Aqua Coins" />
                                                {cell.growthCost[`level${cell.level + 1}`]}
                                            </>
                                        )}
                                    </Button>

                                    <Button
                                        className="bg-red-500 text-white"
                                        onClick={() => {
                                            removeAnimal(rowIndex, colIndex)
                                            setActiveCell(null); // Close the tooltip
                                        }}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 max-w-42 max-h-32 md:max-h-48 md:grid-cols-2 lg:max-h-52 transition-all ease-in-out duration-500 overflow-y-auto gap-4 p-2 transform hover:scale-105">
                                {creatures?.map((item) => (
                                    <button
                                        key={item.name}
                                        className={`p-2 rounded-lg shadow-md flex md:flex-col items-center justify-between gap-2 ${aquaCoins >= item.cost ? "bg-green-500/30" : "bg-red-500/30 cursor-not-allowed"
                                            }`}
                                        onClick={() => handleItemSelect(rowIndex, colIndex, item)}
                                        disabled={aquaCoins < item.cost}
                                    >
                                        <img src={item.icon} alt={item.name} className="w-8 h-8 mb-1" />
                                        <span className="text-sm">{item.name}</span>
                                        <div className="flex text-primary font-medium gap-2">
                                            {item.cost}
                                            <img className="w-4 h-4" src={AquaCoins} alt="Aqua Coins" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )
                    }
                    visible={activeCell && activeCell.row === rowIndex && activeCell.col === colIndex}
                    onClickOutside={() => setActiveCell(null)}
                    placement="auto-start"
                    interactive={true}
                    arrow={true}
                    animation="scale-extreme"
                >
                    <div
                        className={`relative aspect-square border rounded border-dotted border-gray-500 flex items-center justify-center cursor-pointer hover:bg-base-100 animate-pulse transition-colors duration-200 ${cell && cell.isGrowing ? "glowing-border" : ""
                            }`}
                        onClick={() => {
                            setActiveCell({ row: rowIndex, col: colIndex });
                        }}
                    >
                        {cell?.icon && (
                            <img
                                src={cell.icon}
                                alt={cell.name}
                                className={`transition-transform duration-200 ease-in-out ${cell.level === 1
                                    ? "w-6 h-6 md:w-8 md:h-8 "
                                    : cell.level === 2
                                        ? "w-8 h-8 md:w-10 md:h-10"
                                        : "w-10 h-10 md:w-14 md:h-14 "
                                    }`}
                            />
                        )}

                        {cell?.isGrowing && (
                            <span className="level-up-icon h-3 w-3 md:h-6 md:w-6">
                                <img src={LevelUpIcon} alt="Level Up" />
                            </span>
                        )}
                    </div>
                </Tippy>
            ))
        );
    }, [grid, growAnimal, removeAnimal, setActiveCell, activeCell, aquaCoins, creatures]);

    return <>{renderedGrid}</>;
}
