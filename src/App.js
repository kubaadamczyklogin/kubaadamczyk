import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Paper,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Chip, 
  Stack
} from "@mui/material";
import { Phone, Mail, LinkedIn , Menu, GitHub} from "@mui/icons-material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import React, {useState} from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#00695c',
    },
    secondary: {
      main: '#1b5e20',
    },
  },
});

const CustomSection = styled(Box)`
  &:first-of-type {
    padding-top: 80px;
  }

  padding: 15px 0;

  .MuiPaper-root {
    padding: 25px;
  }

  h1 {
    color: white;
  }

  h3 {
    margin: 15px 0 10px;
  }

  p {
    margin: 10px 0;
  }

  hr {
    margin-top: 20px;
  }

  .MuiButton-root {
    margin-top: 5px;
  }

  &.skills {
    h2 {
      margin-bottom: 15px;
    }

    .MuiChip-root {
      margin: 5px;
      padding: 20px 5px;
      font-size: 17px;
    }
  }
`;

export default function App() {

  const [menuOpened, setMenuOpened] = useState(false);

  function menuTrigger(){    
    setMenuOpened((prev)=>!prev)
  }

  function menuButtonScroll(target){
    const offsetTop = document.getElementById(target).offsetTop - 80;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
    setMenuOpened(false) 
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ background: "#b2dfdb" }}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Container>
              <Toolbar>
              <IconButton
                size="large"
                edge="start"                             
                sx={{ mr: 2, color: "#ffffff" }}
                onClick={menuTrigger} 
              >
                <Menu />
              </IconButton>
                <Typography
                  align="center"
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Kuba Adamczyk
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
        </Box>
        <Drawer         
          open={menuOpened}
          onClose={menuTrigger}
        >
          <Box sx={{ width: 200, bgcolor: 'background.paper' }}>
            <nav>
              <List>
                <ListItem disablePadding sx={{padding: "50px 20px 0"}}>
                  <ListItemButton onClick={()=>{
                    menuButtonScroll('projects')
                  }}>                    
                    <ListItemText primary="Projekty" primaryTypographyProps={{fontSize: 20}} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{padding: "0 20px"}}>
                  <ListItemButton onClick={()=>{
                    menuButtonScroll('about')
                  }}>                    
                    <ListItemText primary="O mnie" primaryTypographyProps={{fontSize: 20}}/>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{padding: "0 20px"}}>
                  <ListItemButton onClick={()=>{
                    menuButtonScroll('skills')
                  }}>                    
                    <ListItemText primary="Umiejętności" primaryTypographyProps={{fontSize: 20}}/>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{padding: "0 20px"}}> 
                  <ListItemButton onClick={()=>{
                    menuButtonScroll('courses')
                  }}>                    
                    <ListItemText primary="Kursy" primaryTypographyProps={{fontSize: 20}}/>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{padding: "0 20px"}}>
                  <ListItemButton onClick={()=>{
                    menuButtonScroll('contact')
                  }}>                    
                    <ListItemText primary="Kontakt" primaryTypographyProps={{fontSize: 20}}/>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Drawer>
        <Container>
          
          <CustomSection>
            <Paper id='projects'>        

              <Typography variant="h4" component="h2">
                  Oponeo.pl
                </Typography>
                <Typography component="p">
                  Przykładowe projekty które wykonałem w obecnej pracy - Oponeo.PL S.A.:
                </Typography>
                <Divider />
 
             <Typography variant="h5" component="h3">
                  Hawk
                </Typography>
                <Typography component="p">
                  System Erp firmy Oponeo. Z przyczyn oczywistych niestety nie mogę go podlinkować.
                  Budujemy go w małym zespole, wykorzystujac najnowsze dobrodziejstwa Angulara. By zachować łatwość rozwijania łączymy Atomic Design i konwencje BEM.
                  Najnowszą wersję którą właśnie tworzymy postawiliśmy jako monorepo NX.
                </Typography>               

                <Divider />
            
            <Typography variant="h5" component="h3">
                  CentrumRowerowe.pl: Porównywarka oświetlenia
                </Typography>
                <Typography component="p">
                  Interaktywne narzędzie do porównywania lampek na podstawie realnych, nocnych zdjęć. Zawiera również wykres spadku mocy pod wpływem upływu czasu. 
                </Typography>
                <Button variant="outlined" href="https://www.centrumrowerowe.pl/porownywarka-oswietlenia/">
                  Sprawdź
                </Button>

                <Divider />

                <Typography variant="h5" component="h3">
                  Dadelo.pl
                </Typography>
                <Typography component="p">
                  Strona one-page spółki akcyjnej Dadelo.
                </Typography>
                <Button variant="outlined" href="https://www.dadelo.pl/">
                  Sprawdź
                </Button>

                <Divider />

                <Typography variant="h5" component="h3">
                  CentrumRowerowe.pl: Trasy rowerowe
                </Typography>
                <Typography component="p">
                  Sekcja z trasami rowerowymi w sklepie CentrumRowerowe.pl. Opisy
                  poszczególnych tras są tworzone w oddzielnym edytorze (froala)
                  przez dział contentu.
                </Typography>
                <Button
                  variant="outlined"
                  href="https://www.centrumrowerowe.pl/trasy-rowerowe/"
                >
                  Sprawdź
                </Button>

                <Divider />

                <Typography variant="h5" component="h3">
                  CentrumRowerowe.pl: Rowery Orbea
                </Typography>
                <Typography component="p">
                  Landing page marki Orbea w sklepie CentrumRowerowe.pl.
                </Typography>
                <Button
                  variant="outlined"
                  href="https://www.centrumrowerowe.pl/.orbea/"
                >
                  Sprawdź
                </Button>

                </Paper>
          </CustomSection>
          <CustomSection>
            <Paper >

                <Typography variant="h4" component="h2">
                  Nauka React JS
                </Typography>

                <Typography component="p">
                  Przykładowe mini aplikacje które zrobiłem w ramach treningu React.js.<br/>                                                  
                </Typography>  

                <Divider />

                <Typography variant="h5" component="h3">
                Bankomat
              </Typography>
              <Typography component="p">
                Symulacja bankomatu. React.js + Scss. W pliku konfiguracyjnym można zmienić walutę, limity i obsługiwane nominały.
              </Typography>

              <Stack spacing={2} direction="row">
                <Button variant="outlined" href="https://atm-kubaadamczykweb.vercel.app/">
                  Sprawdź
                </Button>
                <Button variant="outlined" href="https://github.com/KubaAdamczykWeb/Atm" startIcon={<GitHub />}>
                  Git Hub
                </Button>
              </Stack>             

                <Divider />              
       
              <Typography variant="h5" component="h3">
              Pomodoro
              </Typography>
              <Typography component="p">
                Timer pomodoro z edytowalną listą zadań. Działa również w
                nieaktywnej karcie przeglądarki. Material UI.
              </Typography>
              <Button
                variant="outlined"
                href="https://pomodoro-ecru-one.vercel.app/"
              >
                Sprawdź
              </Button>
              
            </Paper>
          </CustomSection>
          <CustomSection>
            <Paper id='about'>
              <Typography variant="h4" component="h2">
                O mnie
              </Typography>

               <Typography component="p">
                W Oponeo przez długi czas byłem głównym frontendem sklepu CentrumRowerowe.pl.
                Sklep napisany w staromodnym MVC na ES5 i jQuery.Jednak mogłem potworzyć w nim ładnie stylowane strony. Pozatym najwięcej radości sprawiało mi pisanie od podstaw funkcjonalności takich jak zoom, slajdery itp.
              </Typography>
              <Typography component="p">    
                Obecnie jednak mogę poszaleć w Angularze - w małym, ambitnym zespole tworzymy własny duży system Erp. Możemy używać nanowszych technologii i mamy czas poeksperymentować.
                Jedyny poważny minus dla mnie to "ponury" wygląd: apka musi fajnie działać, ale design ma być skromny.  
              </Typography>             
              
                <Divider />

                <Typography component="p">
                 Obecnie niestety niemam zasobów na własne projekty - mam 3-kę małych dzieci.
                  Z pracy jestem zadowolony, choć czasem myślę o zmianie, szczególnie był bym zadowolony gdybym mógł robić mniejsze a bardziej zróżnicowane projekty, koniecznie w Angularze lub ReactJS.
                </Typography>   
             
            </Paper>
          </CustomSection>
          <CustomSection className="skills">
            <Paper align="center" id='skills'>
              <Typography align="left" variant="h4" component="h2">
                Umiejętności
              </Typography>
              <Chip label="Angular" variant="outlined" />   
              <Chip label="Typescript" variant="outlined" /> 
              <Chip label="ES5 / ES6" variant="outlined" />
              <Chip label="jQuery" variant="outlined" />
              <Chip label="Less" variant="outlined" />
              <Chip label="Scss" variant="outlined" />
              <Chip label="BEM" variant="outlined" />  
              <Chip label="Css" variant="outlined" />              
              <Chip label="Html 5" variant="outlined" /> 
              <Chip label="Git" variant="outlined" />
              <Chip label="Git Lab" variant="outlined" />
              <Chip label="Atomic Design" variant="outlined" />
              <Chip label="Scrum" variant="outlined" /> 
              <Typography align="left" variant="p" component="h3">
                Podstawy / uczę się :
              </Typography>   
              <Chip label="Angular NGRX" variant="outlined" />
              <Chip label="Angular NX" variant="outlined" />
              <Chip label="SQL" variant="outlined" />             
              <Chip label="React JS" variant="outlined" />               
              <Chip label="Material" variant="outlined" />               
              <Chip label="GraphQL" variant="outlined" />                            
            </Paper>
          </CustomSection>
          <CustomSection>
            <Paper id='courses'>
              <Typography variant="h4" component="h2">
                Kursy
              </Typography>

              <Typography variant="h5" component="h3">
                Angular The Complete Guide
              </Typography>
              <Typography variant="h6" component="p">
                Maximilian Shwarzmüller 
              </Typography>
              <Typography component="p">
                Kompleksowy kurs Angulara na platformie Udemy.
              </Typography>
              <Divider />

              <Typography variant="h5" component="h3">
              WCAG 2.1 - Audytowanie stron internetowych
              </Typography>
              <Typography variant="h6" component="p">
                Widzialni.eu 
              </Typography>
              <Typography component="p">
                Kurs audytowania i korekty stron pod kontem dostępności
                dla osób z różnymi niepełnosprawnościami,
                zgodnie ze standardem WCAG 2.1. Trzy dni wykładów online.
              </Typography>
              <Divider />

              <Typography variant="h5" component="h3">
                Kurs Reacta
              </Typography>
              <Typography variant="h6" component="p">
                Creative Mind - Michał Taszycki
              </Typography>
              <Typography component="p">
                Kompleksowy kurs fundamentów React Js w formie online, ze
                wsparciem wykładowcy Adres:{" "}
                <Link href="https://kursreacta.pl/">kursreacta.pl</Link>.
              </Typography>
              <Divider />

              <Typography variant="h5" component="h3">
                GraphQL Mastery - Szybki Start
              </Typography>
              <Typography variant="h6" component="p">
                Creative Mind - Michał Taszycki
              </Typography>
              <Typography component="p">
                Krótki kurs podstaw GraphQL i przykładowa implementacja z
                wykorzystaniem React Js i Apollo Client - online.
              </Typography>
              <Divider />

              <Typography variant="h5" component="h3">
                Programista PHP
              </Typography>
              <Typography variant="h6" component="p">
                #!/ALX
              </Typography>
              <Typography component="p">
                Kompleksowy kurs frontendowy zawierający podstawy Java Script,
                Css, PHP i SQL. Stacjonarny intensywny, dwu tygodniowy.
              </Typography>
            </Paper>
          </CustomSection>
          <CustomSection>
            <Paper id='contact'>
              <Typography variant="h4" component="h2">
                Kontakt
              </Typography>
              <List>
                <ListItem>
                  <ListItemButton href="tel:693773711">
                    <ListItemIcon>
                      <Phone />
                    </ListItemIcon>
                    <ListItemText>693 773 711</ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton href="mailto:poczta@kubaadamczyk.pl">
                    <ListItemIcon>
                      <Mail />
                    </ListItemIcon>
                    <ListItemText>poczta@kubaadamczyk.pl</ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton href="https://www.linkedin.com/in/jakub-adamczyk-a9516123a/">
                    <ListItemIcon>
                      <LinkedIn />
                    </ListItemIcon>
                    <ListItemText>Jakub Adamczyk - LinkedIn</ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Paper>
          </CustomSection>
        </Container>
      </div>
    </ThemeProvider>
  );
}
