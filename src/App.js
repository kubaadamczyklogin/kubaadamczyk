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
  Button
} from "@mui/material";
import { Phone, Mail, LinkedIn } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const CustomSection = styled(Box)`
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
`;

export default function App() {
  return (
    <div style={{ background: "#5b7c99" }}>
      <CssBaseline />
      <Container>
        <CustomSection>
          <Typography variant="h4" component="h1">
            Kuba Adamczyk
          </Typography>
        </CustomSection>
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
              <Button variant="outlined" href="https://www.centrumrowerowe.pl/">
                CentrumRowerowe.pl
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
            <Typography component="p">Timer pomodoro z listą zadań.</Typography>
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
