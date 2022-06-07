function Dependency(props) {
    return (
        <>
            <a
                href={props.href}
                target="_blank"
                class="flex flex-col justify-center items-center p-8 gap-4 bg-[#242424] rounded-xl drop-shadow-xl"
            >
                <img
                    src={props.image}
                    alt={props.alt}
                    height={125}
                    width={125}
                />
                <h1 class="text-2xl xl:text-4xl font-bold text-[#aeaeae]">
                    {props.text}
                </h1>
            </a>
        </>
    );
}

export default Dependency;
