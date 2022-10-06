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
  Chip
} from "@mui/material";
import { Phone, Mail, LinkedIn } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import React from "react";

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
  return (
    <div style={{ background: "#5b7c99" }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              align="center"
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Kuba Adamczyk
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <CustomSection>
          <Paper>
            <Typography variant="h4" component="h2">
              Praca
            </Typography>
            <Box>
              <Typography component="p">
                Obecnie pracuje w spółce Oponeo.PL S.A. Zajmuje się pracami
                frontendowymi w zespole rozwijającym internetowy sklep
                CentrumRowerowe.pl. Aplikacja zbudowana jest na klasycznym
                wzorcu MVC, frontend oparty o jQuery i Less.
              </Typography>
              <Typography component="p">
                Czasem biorę udział w powiązanych projektach np:{" "}
                <Link href="https://www.edrabiny.pl/">eDrabiny.pl</Link> czy{" "}
                <Link href="https://www.dadelo.pl/">Dadelo.pl</Link>. Jestem
                również jednym z supervisorów w procesie code reviw w dziale IT
                WEB Oponeo.PL.
              </Typography>

              <Typography component="p">
                Poniżej umieściłem kilka przykładowych realizacji - w których wykonałem całą lub większość prac frontendowych. 
              </Typography>

              <Divider />

              <Typography variant="h5" component="h3">
                Porównywarka oświetlenia
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
                Trasy rowerowe
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
                Rowery Orbea
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
            </Box>
          </Paper>
        </CustomSection>
        <CustomSection>
          <Paper>
            <Typography variant="h4" component="h2">
              React JS
            </Typography>
            <Typography component="p">
              W wolnym czasie uczę się React JS, by porobić coś ciekawszego i
              bardziej nowoczesnego niż w pracy :). Powolutku przerabiam kurs{" "}
              <Link href="https://kursreacta.pl/">kursreacta.pl</Link> i piszę
              drobne aplikacje.
            </Typography>

            <Divider />

            <Typography variant="h5" component="h3">
              Pomodoro
            </Typography>
            <Typography component="p">
              Timer pomodoro z edytowalną listą zadań. Działa również w
              nieaktywnej karcie przeglądarki.
            </Typography>
            <Button
              variant="outlined"
              href="https://pomodoro-ecru-one.vercel.app/"
            >
              Sprawdź
            </Button>

            <Divider />

            <Typography variant="h5" component="h3">
              Dojazdy PKP
            </Typography>
            <Typography component="p">
              Aplikacja na telefon ułatwiająca moje dojazdy pociągiem do pracy.
            </Typography>
            <Button variant="outlined" href="https://trains.vercel.app/">
              Sprawdź
            </Button>

            <Divider />

            <Typography variant="h5" component="h3">
              Losowy cytat
            </Typography>
            <Typography component="p">
              Reactowa apka pobiera losowy cytat z serwera GraphQl przy pomocy
              Apollo Client.
            </Typography>
            <Button
              variant="outlined"
              href="https://inspirational-quotes-theta.vercel.app/"
            >
              Sprawdź
            </Button>

            <Divider />

            <Typography variant="h5" component="h3">
              Music Player
            </Typography>
            <Typography component="p">
              Prosty audio player, pobierający utwory muzyczne z zewnętrznego
              api.
            </Typography>
            <Button
              variant="outlined"
              href="https://music-player-nine-self.vercel.app/"
            >
              Sprawdź
            </Button>
          </Paper>
        </CustomSection>
        <CustomSection className="skills">
          <Paper align="center">
            <Typography align="left" variant="h4" component="h2">
              Umiejętności
            </Typography>
            <Chip label="Java Script" variant="outlined" />
            <Chip label="jQuery" variant="outlined" />
            <Chip label="Css" variant="outlined" />
            <Chip label="Less" variant="outlined" />
            <Chip label="Scss" variant="outlined" />
            <Chip label="Html 5" variant="outlined" />
            <Chip label="Canvas" variant="outlined" />
            <Chip label="Material Ui" variant="outlined" />
            <Chip label="Bootstrap" variant="outlined" />
            <Chip label="Git" variant="outlined" />
            <Chip label="Git Lab" variant="outlined" />
            <Chip label="Mercurial" variant="outlined" />
            <Chip label="Scrum" variant="outlined" />
            <Chip label="podstawy React JS" variant="outlined" />
            <Chip label="podstawy GraphQL" variant="outlined" />
          </Paper>
        </CustomSection>
        <CustomSection className="skills">
          <Paper>
            <Typography variant="h4" component="h2">
              Kursy
            </Typography>

            <Typography variant="h5" component="h3">
              Kurs Reacta
            </Typography>
            <Typography variant="h6" component="p">
              Creative Mind - Michał Taszycki
            </Typography>
            <Typography component="p">
              Kompleksowy kurs fundamentów React Js w formie online, ze
              wsparciem wykładowcy - obecnie jestem w trakcie przerabiania
              kursu. Adres:{" "}
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
              wykorzystaniem React Js i Apollo Client - online z wsparciem
              wykładowcy.
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
          <Paper>
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
  );
}
