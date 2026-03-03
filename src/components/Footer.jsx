export default function Footer(){
    return(
        <footer style={styles.container}>
            <ul style={styles.nav}>
                <li> Sobre nos</li>
                <li> Redes sociais</li>
            </ul>
        </footer>
    )
}

const styles = {
    container: {
        backgroundColor: "#111111",
        color: "#FFF",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        alignItems: "center",
        flexDirection: "column",
        height: "300px"

    
    },
    nav: {
        display: "flex",
        listStyleType: "none",
        gap: 20,
        margin: 0,
        padding: 0
    }
}