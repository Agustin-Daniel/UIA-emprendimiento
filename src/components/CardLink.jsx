import { Card, Grid, Link, Text } from '@nextui-org/react'

// eslint-disable-next-line react/prop-types
export const CardLink = ({ web_img, web_title, web_link, title, link }) => {
  return (
    
    <Card>
    <Card.Header>
      <img
        alt="icono"
        src={web_img}
        width="34px"
        height="34px"
      />
      <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={12}>
          <Text h4 css={{ lineHeight: "$xs" }}>
            {web_title}
          </Text>
        </Grid>
        <Grid xs={12}>
          <Text css={{ color: "$accents8" }}>{web_link}</Text>
        </Grid>
      </Grid.Container>
    </Card.Header>
    <Card.Body css={{ py: "$2" }}>
      <Text h5>
        { title }
      </Text>
    </Card.Body>
    <Card.Footer>
      <Link
        icon
        color="primary"
        target="_blank"
        href={ link }
      >
        Clickea para ver el contenido
      </Link>
    </Card.Footer>
  </Card>
  )
}
