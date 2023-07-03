import { Grid, Text } from '@nextui-org/react'
import { IconTolls } from '../components/IconTolls'
import { useContext } from 'react'
import { ThemeContext } from '../components/context/ContextProvider'


export const ToolsSection = () => {

  const contex = useContext(ThemeContext)

  const { toggle } = contex


  return (
    <>
    <Text
    h2
    size={{xs:"5px", sm:"10px"}}
    css={{
      // textGradient: "45deg, $blue600 -20%, $pink600 50%",
      color:"#F6AD37"
      
    }}
    weight="bold"
  >
    Herramientas Utiles
  </Text>
  <Grid.Container className={toggle && 'tolls-cards'} fluid gap={1}>
    
    <Grid xs={12} sm={4}>
     <IconTolls title='Canva' link='https://www.canva.com' text='Diseño digital'/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Chat GPT' link='https://openai.com/blog/chatgpt' text='Inteligencia artificial' img="https://static.vecteezy.com/system/resources/previews/021/059/827/original/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Semrush' link='https://es.semrush.com/' text='Marketing' img="https://asset.brandfetch.io/idt3n8W3ef/idgEzuzwRW.png"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Hubspot' link='https://www.hubspot.es/' text='Marketing' img="https://cdn-icons-png.flaticon.com/512/5968/5968872.png"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Color Hunt' link='https://colorhunt.co/' text='Paleta de colores' img="https://colorhunt.co/img/color-hunt-icon-ios.png"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Coolors' link='https://coolors.co/' text='Paleta de colores' img="data:image/png;base64,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"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Hostinger' link='https://www.hostinger.com/' text='Hospedaje web' img="https://images.glints.com/unsafe/1200x0/glints-dashboard.s3.amazonaws.com/company-logo/d6012f676992d51a149e24c971cb73ad.jpg"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Excalidraw' link='https://excalidraw.com/' text='Bocetos' img="https://pbs.twimg.com/profile_images/1220893792540221440/zgoZ6ucg_400x400.png"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Trello' link='https://www.atlassian.com/es/software/trello' text='Organizacion' img="https://cdn.icon-icons.com/icons2/3041/PNG/512/trello_logo_icon_189227.png"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Udemy' link='https://www.udemy.com/' text='Aprendizaje' img="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='To Do' link='https://todo.microsoft.com/tasks' text='Organizacion' img="https://play-lh.googleusercontent.com/PH-2iORSfQs-iizoHzePXBaJCXml443pgoC14-lZESLFIp78A4SvxLKUVv1FyIQFtC8"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Mailchimp' link='https://mailchimp.com/' text='Email marketing' img="data:image/png;base64,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"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Drive' link='https://drive.google.com/' text='Almacenamiento' img="https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Wordpress' link='https://wordpress.com/' text='Desarrollo web sin codigo' img="https://cdn.icon-icons.com/icons2/70/PNG/512/wordpress_14066.png"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Stipo' link='https://stripo.email/?fpr=untyped58&gclid=CjwKCAjw1YCkBhAOEiwA5aN4AY9a_Yi5Tc5HAh3uv3IMuPn8iafGaNVxUb6LLLOEhjfgo3LLYgu6zhoCe6kQAvD_BwE' text='Plantillas email' img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GXLCBMnE90Ttb9rsQo2fmvArj31OzZWgVknLQj1m-oYtpXkwOVgIL6ByIKzBchmQbx0&usqp=CAU"/>
    </Grid>
    <Grid xs={12} sm={4}>
      <IconTolls title='Ahrefs' link='https://ahrefs.com/' text='MetaTags web' img="https://www.saashub.com/images/app/service_logos/181/ohq5uc33gzy1/large.png?1625467464"/>
    </Grid>
  </Grid.Container>
  </>
  )
}
