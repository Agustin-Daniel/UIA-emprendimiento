import { Container, Grid, Text } from '@nextui-org/react'
import { ArrowRight } from '@mui/icons-material'
import { CardLink } from '../CardLink'

export const Text3 = () => {
  return (
    <Container css={{ mt:"80px", mw:"1000px", pl:"4em", pr:"4em", pb:"4em"}}>
        <Text transform='uppercase' weight="bold" h2>
        Precios
        </Text>

        <Text h3 weight="bold">
        <br />
        Preguntas frecuentes
        </Text>
        <Text size="22px" className='text-p-pop'>
        ¿Cuáles son los costos de distribución de tu producto? ¿Qué valor tiene? ¿Cuál es el margen de ganancia? ¿Qué tipo de consumo tiene?
        <br /><br />
        Estas son las preguntas que siempre nos hacemos al lanzar un producto/servicio al mercado o al querer modificar la imagen de uno ya existente.
        <br /><br />
        Es importante estar informados sobre lo que significa el precio en un producto y las distintas estrategias para colocarlo según los objetivos que esperamos del mismo.
        <br /><br />
        </Text>

        <Text h3 weight="bold">
        Mix de Marketing
        </Text>

        <Text size="22px" className='text-p-pop'>
        Aunque no lo crean, el precio, también forma parte del Marketing de un producto, es parte del llamado Mix de Marketing el cual incluye las 4p del marketing que son:
        <br /><br />
        “Emprender es tener la iniciativa de llevar a la práctica una idea de negocio, es decir, crear una empresa y llevar a cabo la producción del bien o prestación del servicio, sin que esto quede en una mera intención.“
        En conclusión, emprender es llevar a cabo una idea de negocio en la cual deberemos invertir tiempo y dinero.
        <br /><br />
        <ArrowRight />Producto
        <br />
        <ArrowRight />Precio
        <br />
        <ArrowRight />Plaza
        <br />
        <ArrowRight />Promoción
        <br /><br />
        </Text>

        <Grid.Container fluid gap={1}>
            <Grid  xs={12} sm={6} md={6}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
                web_title='Hubspot'
                web_link='blog.hubspot.es'


                title='Cómo calcular el precio de un producto (con fórmula y ejemplos)'
                link='https://blog.hubspot.es/sales/como-calcular-precio-producto'
              />
            </Grid>

            <Grid  xs={12} sm={6} md={6}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
                web_title='Hubspot'
                web_link='blog.hubspot.es'


                title='16 estrategias de fijación de precios (con ejemplos)'
                link='https://blog.hubspot.es/marketing/estrategias-precio'
              />
            </Grid>

            <Grid  xs={12} sm={6} md={6}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/174/174883.png'
                web_title='Youtube'
                web_link='youtube.com'


                title='Como poner PRECIOS BASADOS EN EL VALOR para el CLIENTE'
                link='https://www.youtube.com/watch?v=nQSgxaXe0F4'
              />
            </Grid>

            <Grid  xs={12} sm={6} md={6}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/174/174883.png'
                web_title='Youtube'
                web_link='youtube.com'


                title='Cómo colocar el PRECIO A UN PRODUCTO en MARKETING'
                link='https://www.youtube.com/watch?v=OWcIm4wlSGk'
              />
            </Grid>

        </Grid.Container>
    </Container>
  )
}
