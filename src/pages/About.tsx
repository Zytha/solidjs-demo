import Navbar from "../Components/Navbar";
import Dependency from "../Components/Dependency";

// Images
import SolidJS from "../Images/solidjs.svg";
import ViteJS from "../Images/vitejs.svg";
import TailwindCSS from "../Images/tailwindcss.svg";
import TypeScript from "../Images/typescript.svg";
import FontAwesome from "../Images/fontawesome.svg";

function About() {
    return (
        <>
            <Navbar />
            <div class="flex flex-col justify-center items-center h-[85vh]">
                <h1 class="text-6xl font-bold text-[#aeaeae] py-8">
                    Dependencies Used
                </h1>
                <div class="flex flex-wrap justify-evenly items-center gap-4">
                    <Dependency
                        text="SolidJS"
                        image={SolidJS}
                        alt="SolidJS"
                        href="https://solidjs.com"
                    />
                    <Dependency
                        text="ViteJS"
                        image={ViteJS}
                        alt="ViteJS"
                        href="https://vitejs.dev"
                    />
                    <Dependency
                        text="Tailwind"
                        image={TailwindCSS}
                        alt="TailwindCSS"
                        href="https://tailwindcss.com"
                    />
                    <Dependency
                        text="TypeScript"
                        image={TypeScript}
                        alt="TypeScript"
                        href="https://www.typescriptlang.org"
                    />
                    <Dependency
                        text="FontAwesome"
                        image={FontAwesome}
                        alt="FontAwesome"
                        href="https://fontawesome.com"
                    />
                </div>
            </div>
        </>
    );
}

export default About;
