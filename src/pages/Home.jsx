import Button from "../components/Button";
import ThemeSettings from "../components/ThemeSettings";
import { useStateValue } from "../StateProvider";

const Home = () => {
    const { currentColor } = useStateValue();

    return (
        <div>
            <Button currentColor={currentColor}>Button</Button>
            <ThemeSettings />
        </div>
    )
}

export default Home;