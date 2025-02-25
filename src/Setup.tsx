import { useNavigate } from "react-router";

export const Setup = () => {
    
    const foobarcat = useNavigate();

    return (
        <>
            <h3
                className='text-2x1 font-bold'
            >
                Setup (0 games played)
            </h3>
            <button className="btn btn-active btn-secondary btn-xl mt-4"
                onClick={
                    () => foobarcat('/play')
                }
            >
                Start Playing
            </button>
        </>
    );
};