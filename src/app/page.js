import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Home(){
    return(
      <div style ={styles.wrapper}>

        <main style={styles.main}>
          <Header />
          <h1> Ola mundo React</h1>

        </main>
        

        <Footer />
        
      </div>
    )
}

const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "Column",
      minHeight: "100vh",
    },
    main: {
      flex: 1
    }
};