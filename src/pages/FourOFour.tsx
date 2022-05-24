import { Link, useNavigate } from "solid-app-router";

function FourOFour() {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/", { replace: true });
    }, 3000);

    return (
        <>
            <div class="flex flex-col justify-center items-center h-[100vh] gap-4">
                <h1 class="text-8xl text-[#aeaeae] font-bold">
                    404 Page Not Found
                </h1>
                <h1 class="text-5xl text-[#aeaeae] font-bold">
                    <i class="fa-solid fa-spinner"></i> Redirecting to{" "}
                    <Link
                        href="/"
                        class="text-blue-500 hover:underline duration-150"
                    >
                        Home
                    </Link>
                </h1>
            </div>
        </>
    );
}
export default FourOFour;
