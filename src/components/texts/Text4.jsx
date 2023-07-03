import { Container, Grid, Text } from '@nextui-org/react'
import { ArrowRight } from '@mui/icons-material'
import { CardLink } from '../CardLink'

export const Text4 = () => {
  return (
    <Container css={{ mt:"80px", mw:"1000px", pl:"4em", pr:"4em", pb:"4em"}}>
        <Text transform='uppercase' weight="bold" h2>
        Branding
        </Text>

        <Text h3 weight="bold">
        Introducción al Branding
        </Text>

        <Text size="22px" className='text-p-pop'>
        El Branding es fundamental para nuestra imagen corporativa, es lo que nos da personalidad y lo que nos hace destacar de la competencia.
        <br /><br />
        El área del Branding es muy amplio y hay muchas cosas que podemos hacer , lo podemos encontrar en:
        <br /><br />
        <ArrowRight />El sitio web.
        <br />
        <ArrowRight />Las redes sociales.
        <br />
        <ArrowRight />La papelería corporativa.
        <br />
        <ArrowRight />En la comunicación.
        <br />
        entre otras.
        <br /><br />
        </Text>

        <Text size="22px" className='text-p-pop'>
        Para comenzar, no hace falta ser un experto, pero sí tener conocimientos básicos sobre el mismo para causar una buena impresión a nuestros clientes potenciales.
        <br /><br />
        </Text>

        

        <Grid.Container fluid gap={1}>
            <Grid  xs={12} sm={12} md={12}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
                web_title='Hubspot'
                web_link='blog.hubspot.es'


                title='Qué es el branding: tipos, objetivos e importancia'
                link='https://blog.hubspot.es/marketing/guia-branding'
              />
            </Grid>

            <Grid  xs={12} sm={12} md={12}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
                web_title='Hubspot'
                web_link='blog.hubspot.es'


                title='Estrategia de branding: 7 elementos esenciales para crear una marca sólida'
                link='https://blog.hubspot.es/marketing/estrategia-branding-elementos-esenciales-marca-solida'
              />
            </Grid>
        </Grid.Container>
    </Container>
  )
}
