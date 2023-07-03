import { Container, Grid, Text } from '@nextui-org/react'
import { CardLink } from '../CardLink'

export const Text2 = () => {
  return (
    <Container css={{ mt:"80px", mw:"1000px", pl:"4em", pr:"4em", pb:"4em"}}>
        <Text transform='uppercase' weight="bold" h2>
        Marketing
        </Text>

        <Text h3 weight="bold">
        ¿Qué es el Marketing?
        </Text>

        <Text size="22px" className='text-p-pop'>
        El tener conocimiento en el área de marketing es muy importante a la hora de comenzar a emprender ya que el mismo es el que nos permite “conectar” con nuestros clientes a la hora de comercializar un producto o servicio.
        <br /><br />
        “El Marketing es un conjunto de técnicas y estudios que tienen como objeto mejorar la comercialización de un producto.”
        </Text>
        <Text i span small weight='bold' transform='' className='text-span-pop'>
          Definiciones de Oxford Languages
          <br /><br />
        </Text>


        <Text h3 weight="bold">
        La Importancia de las Redes Sociales y de un Sitio Web
        </Text>

        <Text size="22px" className='text-p-pop'>
        Hoy en día, el 70% de las  personas antes de adquirir un producto o servicio, lo buscan en internet.
        <br /><br />
        Por esto mismo, algo que considero muy importante a la hora de emprender es estar presente en internet, tanto en las redes sociales como en un sitio web.
        <br /><br />
        Las personas quieren estar seguros de lo que compran y a quien le compran. El tener una buena imagen en internet no solo hará que tus productos sean más visibles en línea, sino que además les va a generar confianza a tus clientes potenciales.        <br /><br />
        </Text>    

        <Grid.Container fluid gap={1}>
            <Grid  xs={12} sm={6} md={6}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
                web_title='Hubspot'
                web_link='blog.hubspot.es'


                title='Introducción al marketing: qué es, para qué sirve, tipos y guía'
                link='https://blog.hubspot.es/marketing/introduccion-al-marketing'
              />
            </Grid>

            <Grid  xs={12} sm={6} md={6}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
                web_title='Hubspot'
                web_link='blog.hubspot.es'


                title='Marketing digital vs. marketing tradicional: diferencias y ventajas'
                link='https://blog.hubspot.es/marketing/marketing-digital-vs-marketing-tradicional'
              />
            </Grid>

            <Grid  xs={12} sm={6} md={6}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
                web_title='Hubspot'
                web_link='blog.hubspot.es'


                title='Manual de estrategias de marketing: definición, tipos y ejemplos'
                link='https://blog.hubspot.es/marketing/estrategias-de-marketing'
              />
            </Grid>

            <Grid  xs={12} sm={6} md={6}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
                web_title='Hubspot'
                web_link='blog.hubspot.es'


                title='Guía completa para crear estrategias de marketing digital (con ejemplos)'
                link='https://blog.hubspot.es/marketing/guia-completa-estrategia-marketing-digital'
              />
            </Grid>

        </Grid.Container>
    </Container>
  )
}
