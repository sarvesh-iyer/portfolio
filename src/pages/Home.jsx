import { Experiences } from "../components/experiences/Experiences"
import { Hero } from "../components/hero/Hero"
import { MyWorks } from "../components/my-works/MyWorks"

export const Home = () => {
    return (
        <>
            <Hero />
            <MyWorks />
            <Experiences />
        </>
    )
}
