import { Card, Col, Text } from "@nextui-org/react";




// eslint-disable-next-line react/prop-types
export const Cards = ({text, img='https://nextui.org/images/card-example-3.jpeg'}) => {


  return (
    <>
      <Card isHoverable isPressable>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
              Emprendimiento
            </Text>
            <Text h3 color="white" css={{ letterSpacing:"0px" }}>
              {text}
            </Text>
          </Col>
        </Card.Header>
        <Card.Image
          src={img}
          width="100%"
          className="card-img"
          objectFit="cover"
          css={{
            h:150,
           "@xs":{
            h:200
           },
          }}
          alt="Card image background"
        />
      </Card>
  </>
  )
}
