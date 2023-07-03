import { Container, Grid, Text } from '@nextui-org/react'
import { ArrowRight } from '@mui/icons-material'
import { CardLink } from '../CardLink'

export const Text1 = () => {
  return (
    <Container css={{ mt:"80px", mw:"1000px", pl:"4em", pr:"4em", pb:"4em"}}>
        <Text transform='uppercase' weight="bold" h2>
        Introducción
        </Text>

        <Text size="22px" className='text-p-pop'>
        ¡Hola, bienvenido! ¿Decidiste adentrarte en el largo camino del emprendimiento? Es un sendero lleno de desafío y crecimiento personal.
        <br /><br />
        En las diferentes secciones vamos a ir analizando aspectos importantes a la hora de emprender los cuales puede que te sean útiles.
        <br /><br />
        </Text>

        <Text h3 weight="bold">
        ¿Qué es emprender?
        </Text>

        <Text size="22px" className='text-p-pop'>
        “Emprender va más allá de tener una idea para generar ingresos o “ser tu propio jefe”. Dicho en otras palabras, necesitas prepararte, contar con un plan de trabajo, destinar una inversión inicial –de tiempo y dinero– y analizar muchas variables que existen en el mercado. “
        <br /><br />
        “Emprender es tener la iniciativa de llevar a la práctica una idea de negocio, es decir, crear una empresa y llevar a cabo la producción del bien o prestación del servicio, sin que esto quede en una mera intención.“
        En conclusión, emprender es llevar a cabo una idea de negocio en la cual deberemos invertir tiempo y dinero.
        <br /><br />
        </Text>

        <Text h3 weight="bold">
        ¿Cuál puede ser mi emprendimiento?
        </Text>

        <Text size="22px" className='text-p-pop'>
        El cielo es el límite! Lo que es importante es que sea algo que te guste y que te llame la atención, para no dejar todo a mitad de camino debido a la desmotivación. Cualquier idea o cosa que te guste se puede transformar en una fuente de ingresos, solo hay que buscarle la vuelta.
        <br /><br />
        <ArrowRight />Elige un tema que te guste.
        <br />
        <ArrowRight />Investiga sobre el.
        <br />
        <ArrowRight />Pregúntate, ¿cómo puedo generar ingresos con mi idea/habilidad?
        <br /><br />
        </Text>

        

        <Grid.Container fluid gap={1}>
            <Grid  xs={12} sm={6} md={6}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
                web_title='Hubspot'
                web_link='blog.hubspot.es'


                title='Plan de negocios: 15 ejemplos y cómo hacer el tuyo'
                link='https://blog.hubspot.es/marketing/como-crear-plan-comercial'
              />
            </Grid>

            <Grid  xs={12} sm={6} md={6}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
                web_title='Hubspot'
                web_link='blog.hubspot.es'


                title='Guía para crear una identidad de marca destacable (con ejemplos)'
                link='https://blog.hubspot.es/marketing/guia-desarrollar-identidad-marca'
              />
            </Grid>

            <Grid  xs={12} sm={6} md={6}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
                web_title='Hubspot'
                web_link='blog.hubspot.es'


                title='¿Qué es un nicho de mercado? Tipos y ejemplos'
                link='https://blog.hubspot.es/marketing/nicho-de-mercado'
              />
            </Grid>

            <Grid  xs={12} sm={6} md={6}>
              <CardLink
                web_img='https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
                web_title='Hubspot'
                web_link='blog.hubspot.es'


                title='Análisis FODA de una empresa: qué es, cómo se hace y ejemplos'
                link='https://blog.hubspot.es/marketing/analisis-foda'
              />
            </Grid>

        </Grid.Container>
    </Container>
  )
}
