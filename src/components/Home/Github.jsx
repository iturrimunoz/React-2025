import githubLogo from "../../assets/github.svg";
const Github =() => {
    return(
        <div>
                <a href="https://github.com/iturrimunoz/React-2025" target="_blank">
                    <img src={githubLogo} className="logo github" alt="Github logo" />
                </a>
        </div>
    );
};

export default Github;