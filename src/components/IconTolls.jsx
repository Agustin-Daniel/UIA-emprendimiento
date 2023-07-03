import { Card, Image, Text } from "@nextui-org/react";



// eslint-disable-next-line react/prop-types
export const IconTolls = ({title, link, text, img='https://cdn.icon-icons.com/icons2/2699/PNG/512/canva_logo_icon_168460.png'}) => {

  
  return (
    <>
    <a href={link} target="_blank" rel="noreferrer" style={{ width:"100%" }}>
      <Card
        isPressable
        isHoverable
        variant="bordered"
      >
        <Card.Body css={{ flexDirection:"initial", alignItems:"center", padding:"1rem" }}>
          <Image
              width={50}
              height={50}  
              src={img}
              className="img-tools"
          />
          <div>
          <Text h4 css={{ display:"flex", alignItems:"center", margin:"0px" }}>{title}</Text>
          <Text css={{ display:"flex", alignItems:"center" }}>{text}</Text>
          </div>
        </Card.Body>
      </Card>
    </a>
  </>
  )
}
