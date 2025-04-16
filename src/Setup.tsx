import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface SetupProps {
    setTitle: (t: string) => void;
    previousPlayers: string[];
    setCurrentPlayers: (players: string[]) => void;
}

export const Setup: React.FC<SetupProps> = ({
    setTitle
    , previousPlayers
    , setCurrentPlayers
}) => {
    
    useEffect(
        () => setTitle("Setup")
        , []
    );
    
    const nav = useNavigate();

    const [availablePlayers, setAvailablePlayers] = useState(
        previousPlayers.map(
            x => ({
                name: x
                , checked: false
            })
        )
    );

    return (
        <>
            <button className="btn btn-active btn-secondary btn-xl mt-4"
                onClick={
                    () => {
                        setCurrentPlayers(
                            availablePlayers
                            .filter(
                                x => x.checked
                            )
                            .map(
                                x => (
                                    x.name
                                )
                            )
                        );
                        nav('/play')
                    }
                }
            >
                Start Playing
            </button>
            <div 
                className="mt-4"
            >
                {
                    availablePlayers.map(
                        x => (
                            <label
                                className="block mt-2 "
                            >
                                <input 
                                    type="checkbox"
                                    className="checkbox mr-2"
                                    checked={x.checked}
                                    onChange={
                                        () => setAvailablePlayers(
                                            availablePlayers.map(
                                                y => ({
                                                    name: y.name
                                                    , checked: y.name === x.name
                                                        ? !y.checked
                                                        : y.checked
                                                })
                                            )
                                        )
                                    }
                                />
                                {x.name}
                            </label>
                        )
                    )
                }
            </div>
        </>
    );
};