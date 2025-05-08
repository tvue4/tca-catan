import { useNavigate } from "react-router";
import { GeneralFacts, LeaderboardEntry } from "./GameResults";
import { useEffect } from "react";

export const AppTitle = "Catan Companion by tvue4";

interface HomeProps {
    leaderboardData: LeaderboardEntry[];
    setTitle: (t: string) => void;
    generalFacts: GeneralFacts;
    gamesByMonthData: Array<[string, number]>;
    specialCardHolders: { longestRoad: string | null; largestArmy: string | null };
}

export const Home: React.FC<HomeProps> = ({
    leaderboardData
    , setTitle
    , generalFacts
    , gamesByMonthData
    , specialCardHolders
}) => {

    useEffect(
        () => setTitle(AppTitle)
        ,[]
    );

    // Use a react hook for button navigation
    const nav = useNavigate();

    return (
        <>
            <button className="btn btn-active btn-secondary btn-xl mt-4"
                onClick={
                    () => nav("/setup")
                }
            >
                Play Catan
            </button>
            <div
                className="card w-full bg-base-100 card-md shadow-lg mt-4"
            >
                <div
                    className="card-body"
                >
                    <h2
                        className="card-title"
                    >
                        General
                    </h2>
                            <div 
                                className="overflow-x-auto"
                            >
                                <table 
                                    className="table"
                                >
                                    <tbody>
                                        <tr>
                                            <td>
                                                Last Played
                                            </td>
                                            <th>
                                                {generalFacts.lastPlayed}
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                Total Games
                                            </td>
                                            <th>
                                                {generalFacts.totalGames}
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                Shortest Game
                                            </td>
                                            <th>
                                                {generalFacts.shortestGame}
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                Longest Game
                                            </td>
                                            <th>
                                                {generalFacts.longestGame}
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                </div>
            </div>

            <div
                className="card w-full bg-base-100 card-md shadow-lg mt-4"
            >
                <div
                    className="card-body"
                >
                    <h2
                        className="card-title"
                    >
                        Leaderboard
                    </h2>
                    {
                        leaderboardData.length > 0
                            ? (
                                <div 
                                className="overflow-x-auto"
                            >
                                <table 
                                    className="table"
                                >
                                    <thead>
                                        <tr>
                                            <th>
                                                W
                                            </th>
                                            <th>
                                                L
                                            </th>
                                            <th>
                                                AVG
                                            </th>
                                            <th>
                                                PLAYER
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            leaderboardData.map(
                                                x => (
                                                    <tr
                                                        key={x.player}
                                                    >
                                                    <td>
                                                        {x.wins}
                                                    </td>
                                                    <td>
                                                        {x.losses}
                                                    </td>
                                                    <td>
                                                        {x.average}
                                                    </td>
                                                    <td>
                                                        {x.player}
                                                    </td>
                                                </tr>
                                                )
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            )
                            : (
                                <p>
                                    Play a game of Catan to see the leaderboard ! ! !
                                </p>
                            )
                    }
                    
                </div>
            </div>

            {/* Special Card Holders Card */}
            <div className="card w-full bg-base-100 card-md shadow-lg mt-4">
                <div className="card-body">
                    <h2 className="card-title">Special Card Holders</h2>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Longest Road</td>
                                    <th>{specialCardHolders.longestRoad || "None"}</th>
                                </tr>
                                <tr>
                                    <td>Largest Army</td>
                                    <th>{specialCardHolders.largestArmy || "None"}</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="card w-full bg-base-100 card-md shadow-lg mt-4">
                <div className="card-body">
                    <h2 className="card-title">Games By Month</h2>
                    {leaderboardData.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Month</th>
                                        <th># OF GAMES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gamesByMonthData.map((x) => (
                                        <tr key={x[0]}>
                                            <td>{x[0]}</td>
                                            <td>{x[1]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>Yeah right buddy, play a game to see ! ! !</p>
                    )}
                </div>
            </div>
        </>
    );
};