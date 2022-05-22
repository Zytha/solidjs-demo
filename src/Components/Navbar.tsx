import { Link, useLocation } from "solid-app-router";
import { Switch, Match, createSignal, Show } from "solid-js";

function Navbar() {
    const [isOpen, setOpen] = createSignal(false);
    const location = useLocation();

    return (
        <>
            {/* Normal Navbar */}
            <div class="hidden lg:flex justify-between items-center bg-[#242424] p-[1.25rem]">
                <div class="flex justify-center items-center text-4xl text-white font-semibold">
                    <Show when={location.pathname === "/"}>
                        <p>
                            <i class="fa-solid fa-house"></i> Home
                        </p>
                    </Show>
                    <Show when={location.pathname === "/about"}>
                        <p>
                            <i class="fa-solid fa-align-left"></i> About
                        </p>
                    </Show>
                </div>
                <div class="flex flex-row gap-[1.25rem]">
                    <Link
                        href="/"
                        class={`Link ${
                            location.pathname == "/" ? "active" : ""
                        }`}
                    >
                        <i class="fa-solid fa-house"></i>&nbsp;Home
                    </Link>
                    <Link
                        href="/about"
                        class={`Link ${
                            location.pathname == "/about" ? "active" : ""
                        }`}
                    >
                        <i class="fa-solid fa-align-left"></i>&nbsp;About
                    </Link>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div class="block lg:hidden">
                <div class="flex justify-between items-center bg-[#242424] p-[1.25rem]">
                    <div class="flex justify-center items-center text-3xl text-white font-[Ubuntu] font-semibold">
                        <Switch>
                            <Match when={location.pathname == "/"}>
                                <p>
                                    <i class="fa-solid fa-house"></i> Home
                                </p>
                            </Match>
                            <Match when={location.pathname == "/about"}>
                                <p>
                                    <i class="fa-solid fa-align-left"></i> About
                                </p>
                            </Match>
                        </Switch>
                    </div>
                    <div class="flex flex-row gap-[1.25rem]">
                        <div
                            class="text-white text-5xl"
                            onClick={() => setOpen(!isOpen())}
                        >
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
                <Show when={isOpen() == true}>
                    <div class="flex justify-start flex-col gap-[1rem] m-[1rem] p-[1rem] bg-[#242424] rounded-md">
                        <Link
                            href="/"
                            class={`Link ${
                                location.pathname == "/" ? "active" : ""
                            }`}
                        >
                            <i class="fa-solid fa-house"></i>&nbsp;Home
                        </Link>
                        <Link
                            href="/about"
                            class={`Link ${
                                location.pathname == "/about" ? "active" : ""
                            }`}
                        >
                            <i class="fa-solid fa-align-left"></i>
                            &nbsp;About
                        </Link>
                    </div>
                </Show>
            </div>
        </>
    );
}

export default Navbar;
