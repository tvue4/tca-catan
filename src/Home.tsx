import { useNavigate } from "react-router";

interface HomeProps {
    totalGameCount: number;
}

export const Home: React.FC<HomeProps> = ({
    totalGameCount
}) => {

    // Use a react hook for button navigation
    const nav = useNavigate();

    return (
        <>
            <h3
                className='text-2x1 font-bold'
            >
                Home ({totalGameCount} games played)
            </h3>
            <button className="btn btn-active btn-secondary btn-xl mt-4"
                onClick={
                    () => nav("/setup")
                }
            >
                Play Catan
            </button>
        </>
    );
};