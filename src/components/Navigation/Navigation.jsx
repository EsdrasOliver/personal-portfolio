import "./styles.css"

export function Navigation() {
    return (
        <header>
            <h1 className="title-header">Esdras</h1>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">Sobre</a>
                <a href="#projects">Projetos</a>
                <a href="#">Habilidades</a>
            </nav>
        </header>
    )
}