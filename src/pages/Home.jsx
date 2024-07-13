import { Experiences } from "../components/experiences/Experiences"
import { Hero } from "../components/hero/Hero"
import { MyWorks } from "../components/my-works/MyWorks"
import { Skills } from "../components/skills/Skills"

export const Home = () => {
    return (
        <>
            <Hero />
            <MyWorks />
            <Experiences />
            <Skills />
        </>
    )
}
