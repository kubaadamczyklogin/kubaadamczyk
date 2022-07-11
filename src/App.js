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
          <Typography variant="h4" component="h2">
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
                frontendowymi w zespole rozwijającym największy polski
                internetowy sklep rowerowy CentrumRowerowe.pl. Sklep zbudowany
                jest w oparciu o klasyczne MVC: c-sharp i frontend oparty o
                jQuery i Less.
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
              Music Player
            </Typography>
            <Typography component="p">
              Prosty audio player, pobierający utwory muzyczne z zewnętrznego
              api. Wykonałem podczas kursu{" "}
              <Link href="https://kursreacta.pl/">
                "kurs reacta - szybki start"
              </Link>
              .
            </Typography>
            <Button
              variant="outlined"
              href="https://music-player-nine-self.vercel.app/"
            >
              Sprawdź
            </Button>
            <Divider />
            <Typography variant="h5" component="h3">
              Losowy cytat
            </Typography>
            <Typography component="p">
              Aplikację wykonałem dla mojej żony, uczącej się języka
              angielskiego. Reactowa apka pobiera losowy cytat z serwera GraphQl
              przy pomocy Apollo Client. Jest owocem kursu{" "}
              <Link href="https://graphqlmastery.pl/">
                GraphQL Mastery - Szybki Start
              </Link>
              .
            </Typography>
            <Button
              variant="outlined"
              href="https://inspirational-quotes-theta.vercel.app/"
            >
              Sprawdź
            </Button>
            <Divider />
            <Typography variant="h5" component="h3">
              Dojazdy PKP
            </Typography>
            <Typography component="p">
              Dojeżdżam do pracy z Torunia do Bydgoszczy rowerem i pociągiem.
              Napisałem więc webową aplikacje na telefon - pomagającą wyszukać
              optymalne połączenie. Po wybraniu pociągu można zobaczyć ile czasu
              przepracuję, o której powinienem wyjść z firmy, o której będę w
              domu itp. Umożliwia również skorygowanie czasu pracy o np
              spóźnienie pociągu lub gdy zamierzam coś załatwić w drodze
              powrotnej. Dane o rozkładzie jazdy oraz czasy dojazdu rowerem na
              stacje - przechowuje na serwerze Apollo GraphQl, który sam
              napisałem. (niestety obecnie dane nie są aktualne - zmienił się
              rozkład jazdy, a ja niezdążyłem zaktualizować)
            </Typography>
            <Button variant="outlined" href="https://trains.vercel.app/">
              Sprawdź
            </Button>
            <Divider />
            <Typography variant="h5" component="h3">
              Pomodoro (w budowie)
            </Typography>
            <Typography component="p">
              Timer pomodoro do poprawy skuteczności pracy. Posiada również
              panel do dodawania i edytowania zadań. Wykonany tak by
              sygnalizował ukończenie zadania nawet gdy działa w tle (na
              nieaktywnej karcie przeglądarki). Stylowanie z użyciem biblioteki
              Material Ui. Inspirowany timerem pomodoro z kursu{" "}
              <Link href="https://kursreacta.pl/">kursreacta.pl</Link>, jednak
              wprowadziłem w nim dużo modyfikacji.
            </Typography>
            <Button
              variant="outlined"
              href="https://pomodoro-g3a5unkb2-kubaadamczyklogin.vercel.app/"
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
