import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GameResult } from "./GameResults";

interface PlayProps {
    addNewGameResult: (r: GameResult) => void;
    setTitle: (t: string) => void;
    currentPlayers: string[];
}

export const Play: React.FC<PlayProps> = ({
    addNewGameResult,
    setTitle,
    currentPlayers,
}) => {
    useEffect(() => setTitle("Play"), []);

    const nav = useNavigate();

    const [turnNumber, setTurnNumber] = useState(0);

    const [startTimestamp] = useState(new Date().toISOString());

    // Special card tracker state
    const [longestRoadPlayer, setLongestRoadPlayer] = useState<string | null>(
        null
    );
    const [largestArmyPlayer, setLargestArmyPlayer] = useState<string | null>(
        null
    );

    return (
        <>
            <h4 className="text-lg font-semibold">
                Turn #{turnNumber}
                <button
                    className="btn btn-xs btn-outline btn-light ml-4"
                    onClick={() => {
                        setTurnNumber(turnNumber + 1);
                        console.log(turnNumber);
                    }}
                >
                    +
                </button>
            </h4>
            {/* Special Card Tracker */}
            <div className="mt-6">
                <h3 className="text-lg font-bold">Special Card Tracker</h3>
                <div className="mt-4">
                    <label className="block">
                        Longest Road:
                        <select
                            className="select select-bordered ml-2"
                            value={longestRoadPlayer || ""}
                            onChange={(e) =>
                                setLongestRoadPlayer(e.target.value || null)
                            }
                        >
                            <option value="">None</option>
                            {currentPlayers.map((x) => (
                                <option key={x} value={x}>
                                    {x}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
                <div className="mt-4">
                    <label className="block">
                        Largest Army:
                        <select
                            className="select select-bordered ml-2"
                            value={largestArmyPlayer || ""}
                            onChange={(e) =>
                                setLargestArmyPlayer(e.target.value || null)
                            }
                        >
                            <option value="">None</option>
                            {currentPlayers.map((x) => (
                                <option key={x} value={x}>
                                    {x}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>

            {/* Display Special Card Holders */}
            <div className="mt-6">
                <h3 className="text-lg font-bold">Special Cards at Game End</h3>
                <p>
                    <strong>Longest Road:</strong>{" "}
                    {longestRoadPlayer || "None"}
                </p>
                <p>
                    <strong>Largest Army:</strong>{" "}
                    {largestArmyPlayer || "None"}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
                {currentPlayers.map((x) => (
                    <button
                        key={x}
                        className="btn btn-active btn-secondary btn-xl mt-4"
                        onClick={() => {
                            addNewGameResult({
                                winner: x,
                                players: currentPlayers,
                                start: startTimestamp,
                                end: new Date().toISOString(),
                                longestRoadHolder: longestRoadPlayer,
                                largestArmyHolder: largestArmyPlayer,
                            });
                            nav(-2);
                        }}
                    >
                        {x} Won
                    </button>
                ))}
            </div>

            {/* Quit Button */}
            <div className="mt-6">
                <button
                    className="btn btn-outline btn-error btn-lg w-full"
                    onClick={() => nav("/")}
                >
                    Quit
                </button>
            </div>
        </>
    );
};