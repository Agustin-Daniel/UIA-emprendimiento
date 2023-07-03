import { CardSection } from "./sections/CardSection"
import './App.css' 
import { Grid, Image, Text } from "@nextui-org/react"
import { ToolsSection } from "./sections/ToolsSection"
import { ContextProvider } from "./components/context/ContextProvider"
import { IconTolls } from "./components/IconTolls"







function App() {
  


  return (
    <ContextProvider>
    <main>
      <div id="top" className="container">
       <div  style={{ position:"relative", height:"100%", padding:"2rem" }}>

        
        <Text h1 css={{ color:"#F31260", textAlign:'center'}} weight="bold">
          Introducción al Emprendimiento
        </Text>
        <Image className="img-uai" src='https://aicogestion.org/wp-content/uploads/2018/06/Logo-UAI.png' height='150px' />
        <Text h2 transform="capitalize" css={{ color:"#F31260" }} weight="bold">competencias trabajadas</Text>

        <Grid.Container className="imagen-cont" css={{ pt:'1em', pb:'1em', flexWrap:"nowrap" }} fluid gap={0}>
          <Grid xs={12} md={6}>
            <Image css={{mh:'500px'}} src='./img/competencias_1.png'/>
          </Grid>
          <Grid xs={12} md={6}>
            <Image css={{mh:'500px'}} src='./img/12.png'/>
          </Grid>
        </Grid.Container>

        <Text id="card" h2 transform="capitalize" css={{ color:"#F31260" }} weight="bold">unidades</Text>

        <CardSection />

        <ToolsSection />

        <Text id="card" h2 transform="capitalize" css={{ color:"#F31260" }} weight="bold">tecnologías utilizadas</Text>
        <Grid.Container fluid gap={1}>
          <Grid xs={12} sm={4}>
          <IconTolls title='CSS' text='Programación' img="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202020css3htmllogosocialsocialmedia-115668_115633.png"/>
          </Grid>
          <Grid xs={12} sm={4}>
          <IconTolls title='JS' text='Programación' img="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png"/>
          </Grid>
          <Grid xs={12} sm={4}>
          <IconTolls title='HTML' text='Programación' img="https://cdn-icons-png.flaticon.com/512/174/174854.png"/>
          </Grid>
          <Grid xs={12} sm={4}>
          <IconTolls title='React' text='Programación' img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
          </Grid>
          <Grid xs={12} sm={4}>
          <IconTolls title='Next Ui' text='Programación' img="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"/>
          </Grid>
        </Grid.Container>

        <Text h3 i css={{ textAlign:'center', mt:'4em' }} weight="bold">
          Agustin Daniel Messina
        </Text>

        </div>
      </div>
    </main>
    </ContextProvider>
  )
}

export default App
