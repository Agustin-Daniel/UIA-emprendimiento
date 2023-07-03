import { Grid } from "@nextui-org/react";
import { Cards } from "../components/Cards";
import { useContext, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Text1 } from "../components/texts/Text1";
import { ThemeContext } from "../components/context/ContextProvider";
import { Text2 } from "../components/texts/Text2";
import { Text3 } from "../components/texts/Text3";
import { Text4 } from "../components/texts/Text4";


export const CardSection = () => {

  const contex = useContext(ThemeContext)
  const { setToggle } = contex


  const [view, setView] = useState(0)

  console.log(view);

  view !== 0 ? setToggle(true) : setToggle(false)

  const handleClick = (num) => {
    setView(num)
    event.preventDefault();
    window.scrollTo({ top: 0 });
  };

  return (
    <>

      {
      view === 1 &&
        <div className="div-absolute" style={{ background: "#ffff", position:"absolute", top:0, left:0, height:"100%", zIndex:5, padding:0, width:"100%"}}>
            <div style={{ position:"fixed" }}><div onClick={() => setView(0)} style={{ cursor:"pointer", width:"50px", height:"50px", background:"#FDD8E5", display:"flex", justifyContent:"center", alignItems:"center" }}><a href="#card"><CloseIcon sx={{ color:"#F75F94" }} fontSize="large"/></a></div></div>
            <Text1 />
        </div>
      }
      {

      view === 2 &&
        <div className="div-absolute" style={{ background: "#ffff", position:"absolute", top:0, left:0, height:"100%", zIndex:5, padding:0, width:"100%"}}>
            <div style={{ position:"fixed" }}><div onClick={() => setView(0)} style={{ cursor:"pointer", width:"50px", height:"50px", background:"#FDD8E5", display:"flex", justifyContent:"center", alignItems:"center" }}><a href="#card"><CloseIcon sx={{ color:"#F75F94" }} fontSize="large"/></a></div></div>
            <Text2 />
        </div>
      }
      {
      view === 3 &&
        <div className="div-absolute" style={{ background: "#ffff", position:"absolute", top:0, left:0, height:"100%", zIndex:5, padding:0, width:"100%"}}>
            <div style={{ position:"fixed" }}><div onClick={() => setView(0)} style={{ cursor:"pointer", width:"50px", height:"50px", background:"#FDD8E5", display:"flex", justifyContent:"center", alignItems:"center" }}><a href="#card"><CloseIcon sx={{ color:"#F75F94" }} fontSize="large"/></a></div></div>
            <Text3 />
        </div>
      }
      {
      view === 4 &&
        <div className="div-absolute" style={{ background: "#ffff", position:"absolute", top:0, left:0, height:"100%", zIndex:5, padding:0, width:"100%"}}>
            <div style={{ position:"fixed" }}><div onClick={() => setView(0)} style={{ cursor:"pointer", width:"50px", height:"50px", background:"#FDD8E5", display:"flex", justifyContent:"center", alignItems:"center" }}><a href="#card"><CloseIcon sx={{ color:"#F75F94" }} fontSize="large"/></a></div></div>
            <Text4 />
        </div>
      }

      <Grid.Container fluid gap={2}>
      <Grid onClick={() => (handleClick(1))} xs={12} sm={6}>
          <Cards text='1. Introducción' img='https://ipmark.com/wp-content/uploads/ESPECIAL-MARKETING-DIGITAL-2023-e1681203521754-1140x549.jpg'/>
      </Grid>
      <Grid onClick={() => (handleClick(2))} xs={12} sm={6}>
        <Cards text='2. Marketing' img="https://interactivadigital.com/uploads/2022/11/tendencias-en-marketing-digital-para-2023-090057.jpg"/>
      </Grid>
      <Grid onClick={() => (handleClick(3))} xs={12} sm={6}>
        <Cards text='3. Precio' img="https://cdn.shopify.com/s/files/1/0426/9209/articles/marketing-digital-todo-lo-que-debes-saber_1200x1200.png?v=1597170487"/>
      </Grid>
      <Grid onClick={() => (handleClick(4))} xs={12} sm={6}>
        <Cards text='4. Branding' img="https://img2.rtve.es/i/?w=1600&i=1665272916186.jpg"/>
      </Grid>
    </Grid.Container>
  </>
  )
}
