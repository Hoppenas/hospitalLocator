import { TextField, Grid, IconButton, InputAdornment, Paper, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import latinize from 'latinize';

function App() {
  const [city, setCity] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const hospitalList = {
      ligonines: [
         //Nauojoji Akmenė
         {name:"Naujosios Akmenės Ligoninė", miestas:"Naujoji akmenė", adresas:"Žemaitjijos g. 6", telefonas:"(8-425) 56527"},
         {name:"Naujosios Akmenės Greitosios Medicinos Pagalbos Centras", miestas:"Naujoji akmenė", adresas:"Respublikos g. 32", telefonas:"(8-425) 56979"},
         //Alytus,
         {name:"Alytaus apskrities S. Kudirkos ligonine", miestas:"Alytus", adresas:"Ligoninės g. 12", telefonas:"(8-315) 69900"},
         //Anykščiai,
         {name:"Anykščių r. municipal Hospital", miestas:"Anykščiai", adresas:"Ramybės g. 15", telefonas:"(8-381) 59435"},
         //Ariogala,
         {name:"Ariogalos palaikomojo gydymo ir slaugos ligonine, Ariogalos pirmines sveikatos prieziuros centras", miestas:"Ariogala", adresas:"Vytauto g. 96", telefonas:"(8-428) 50393"},
         //Baltoji Vokė,
         {name:"Baltosios Vokes ambulatorija, Salcininku pirmines sveikatos prieziuros centras", miestas:"Baltoji Vokė", adresas:"Vilniaus g. 19", telefonas:"(8-380) 43168"},
         //Birštonas
         {name:"Birštono pirminės sveikatos priežiūros centras", miestas:"Birštonas", adresas:"Jaunimo g. 8", telefonas:"(8-319) 67018"},
         //Biržai
         {name:"Biržų ligoninė", miestas:"Biržai", adresas:"Vilniaus g. 115", telefonas:"(8-45) 043090"},
         //Daugai
         {name:"Daugu ambulatorija, Alytaus r. savivaldybes pirmines sveikatos prieziuros centras", miestas:"Daugai", adresas:"Vlado Mirono g. 9", telefonas:"(8-315) 69230"},
         //Druskininkai
         {name:"Druskininkų lignoninė", miestas:"Druskininkai", adresas:"Sveikatos g. 30", telefonas:"(8-313) 59144"},
         //Dūkštai
         //Dusetos
         {name:"Dusetu ambulatorija, Zarasu r. pirmines sveikatos prieziuros centras", miestas:"Dusetos", adresas:"Vytauto g. 29", telefonas:"(8-385) 56290"},
         //Eisiškės
         {name:"Eišiškių asmens sveikatos priežiūros centras", miestas:"Eisiškės", adresas:"Ligoninės g. 2", telefonas:"(8-380) 56433"},
         //Elektrėnai
         {name:"Elektrėnų ligoninė", miestas:"Elektrėnai", adresas:"Taikos g. 8", telefonas:"(8-528) 39297"},
         //Ežerėlis
         //Gargždai
         {name:"Garždų ligoninė", miestas:"Gargždai", adresas:"Tilto g. 2", telefonas:"(8-46) 453942"},
         //Garliava
         {name:"Garliava ligoninė", miestas:"Garliava", adresas:"Vytauto g. 61", telefonas:"(8-37) 393399"},
         //Gelgaudiškis
         {name:"Gelgaudiškio Ligoninė", miestas:"Gelgaudiškis", adresas:"Nemuno g. 31", telefonas:"(8-37) 393399"},
         //Grigiškės
         {name:"Grigiškės ligoninė", miestas:"Grigiškės", adresas:"Mokyklos g. 10", telefonas:"(8-5) 243 2103"},
         //Ignalina
         {name:"Ignalinos rajono ligoninė", miestas:"Ignalina", adresas:"Ligoninės g. 13A", telefonas:"(8-386) 53532"},
         //Jieznas
         {name:"Jiezno pirmines sveikatos prieziuros centras", miestas:"Jieznas", adresas:"Vilniaus g. 3", telefonas:"(8-319) 57203"},
         //Jonava
         {name:"Jonavos ligoninė", miestas:"Jonavos", adresas:"Žeimių g. 19", telefonas:"(8-658) 49589"},
         //Joniškėlis
         {name:"Joniškėlio ligoninė", miestas:"Joniškėlis", adresas:"Vytauto g. 3", telefonas:"(8-45) 138203"},
         //Joniškis
         {name:"Jokiškio ligoninė", miestas:"Joniškis", adresas:"Pašvitinio g. 21", telefonas:"(8-646) 62115"},
         //Jurbarkas
         {name:"Jurbarko ligoninė", miestas:"Jurbarkas", adresas:"Vydūno g. 56", telefonas:"(8-447) 72534"},
         //Kaišiadorys
         {name:"Kaišiadorių ligoninė", miestas:"Kaišiadorys", adresas:"Beržyno g. 27", telefonas:"(8-346) 60355"},
         //Kalvarija
         {name:"Kalvarijos ligoninė", miestas:"Kalvarijos", adresas:"Vytauto g. 9", telefonas:"(8-343) 23457"},
         //Kaunas
         {name:"Clinical Hospital of Kaunas",miestas:"Kaunas",adresas:"Josvainių g. 2",telefonas:"(8-37) 306000"},
         //Kavarskas
         {name:"Kavarsko ambulatorija, Anyksciu r. savivaldybes pirmines sveikatos prieziuros centras", miestas:"Kavarskas", adresas:"P. Cvirkos g. 11", telefonas:"(8-381) 55280"},
         {name:"Anykščių rajono ligoninė", miestas:"Kavarskas", adresas:"Ramybės g. 15", telefonas:"(8-381) 59435"},
         //Kazlų Rūda
         {name:"Kazlų Rūdos ligoninė", miestas:"Kazlų Rūda", adresas:"Vytauto g. 45", telefonas:"(8-343) 96061"},
         //Kėdainiai
         {name:"Kėdainių ligoninė", miestas:"Kėdainiai", adresas:"Budrio g. 5", telefonas:"(8-347) 67080"},
         //Kelmė
         {name:"Kelmės viešoji ligoninė", miestas:"Kelmė", adresas:"Nepriklausomybės g. 2", telefonas:"(8-645) 07872"},
         //Kybartai
         {name:"Kybartu pirmines sveikatos prieziuros centras", miestas:"Kybartai", adresas:"Tarybų g. 4", telefonas:"(8-342) 30535"},
         //Klaipėda
         {name:"Republican Hospital in Klaipėda", miestas:"Klaipėda", adresas:"S. Nėries g. 3", telefonas:"(8-46) 410688"},
         {name:"VŠĮ respublikinė Klaipėdos ligoninė - Konsultacinė poliklinika", miestas:"Klaipėda", adresas:"Taikos pr. 103", telefonas:"8 700 50 011"},
         {name:"Klaipėdos universitetinė ligoninė", miestas:"Klaipėda", adresas:"Liepojos g. 41", telefonas:"(8-46) 396500"},
         //Kretinga
         {name:"Kretingos ligoninė", miestas:"Kretinga", adresas:"Žemaitės al. 1", telefonas:"(8-445) 79046"},
         //Kudirkos Naumiestis
         {name:"Kudirkos Naumiescio pirmines sveikatos prieziuros centras", miestas:"Kudirkos Naumiestis", adresas:"Dariaus ir Girėno g. 24", telefonas:"(8-345) 57243"},
         //Kupiškis
         {name:"Kupiškio ligoninė", miestas:"Kupiškis", adresas:"Krantinės 28", telefonas:"(8-45) 935400"},
         //Kuršėnai
         {name:"Kuršėnų ligoninė", miestas:"Kuršėnai", adresas:"Jono Basanavičiaus g. 10", telefonas:"(8-41) 582443"},
         //Lazdijai
         {name:"Lazdijų ligoninė", miestas:"Lazdijai", adresas:"Kauno g. 8", telefonas:"(8-318) 51552"},
         //Lentvaris
         {name:"Lentvario ambulatorija", miestas:"Lentvaris", adresas:"Lauko g. 26", telefonas:"(8-528) 28528"},
         {name:"Trakų ligoninė", miestas:"Lentvaris", adresas:"Mindaugo g. 13", telefonas:"(8-528) 55814"},
         //Linkuva
         {name:"Linkuvos ambulatorija, Pakruojo r. pirmines sveikatos prieziuros centras", miestas:"Linkuva", adresas:"Parko g. 4", telefonas:"(8-421) 64266"},
         {name:"Pakruojo ligoninė", miestas:"Linkuva", adresas:"L. Giros g. 3", telefonas:"(8-421) 69031"},
         //Marijampolė
         {name:"Marijampolės ligoninė", miestas:"Marijampolė", adresas:" Palangos g. 1", telefonas:"(8-343) 74934"},
         //Mažeikiai
         {name:"Mažeikių ligoninė", miestas:"Mažeikiai", adresas:"J. Basanavičiaus g. 24", telefonas:"(8-443) 98293"},
         //Molėtai
         {name:"Molėtų ligoninė", miestas:"Molėtai", adresas:"Graužinių g. 3", telefonas:"(8-383) 51742"},
         //Nemenčinė
         {name:"Vilniaus r. Nemencines poliklinika", miestas:"Nemenčinė", adresas:"Švenčionių g. 80", telefonas:"(8-5) 237 1365"},
         //Neringa
         {name:"Juodkrantes medicinos punktas, Neringos pirmines sveikatos prieziuros centras", miestas:"Neringa", adresas:"Kalno g. 29", telefonas:"(8-469) 53282"},
         {name:"Neringa Primary Health Care Centre", miestas:"Neringa", adresas:"Taikos g. 11", telefonas:"(8-469) 52164"},
         //Obeliai
         {name:"Obeliu palaikomojo gydymo ir slaugos ligonine", miestas:"Obeliai", adresas:"Stoties g. 68", telefonas:"(8-45) 878630"},
         //Pabradė
         {name:"Pabradės nursing Hospital", miestas:"Pabradė", adresas:"Upės g. 40", telefonas:"(8-387) 54133"},
         //Pagėgiai
         {name:"Pagegiu pirmines sveikatos prieziuros centras", miestas:"Pagėgiai", adresas:"Jaunimo g. 6", telefonas:"(8-441) 57307"},
         //Pakruojis
         {name:"Pakruojo ligoninė", miestas:"Parkuojis", adresas:"L. Giros g. 3", telefonas:"(8-421) 69031"},
         //Palanga?
         {name:"VšĮ KLAIPĖDOS JŪRININKŲ LIGONINĖ, Palangos departamentas", miestas:"Palanga", adresas:"Klaipėdos pl. 76", telefonas:"(8-460) 41280"},
         //Pandėlys
         {name:"Pandelio ambulatorija, Rokiskio pirmines asmens sveikatos prieziuros centras", miestas:"Pandėlis", adresas:"Vytauto a. 12", telefonas:"(8-45) 879153"},
         //Panevėžys
         {name:"Republican Panevezys Hospital",miestas:"Panevezys",adresas:"Smėlynės g. 25",telefonas:"(8-45) 507184"},
         //Pasvalys
         {name:"Pasvalio ligoninė", miestas:"Pasvalys", adresas:"Geležinkeliečių g. 70", telefonas:"(8-45) 154140"},
         //Plungė
         {name:"Plungės r. savivaldybės ligoninė", miestas:"Plungė", adresas:"J. Tumo-Vaižganto g. 89", telefonas:"(8-448) 73269"},
         //Priekutė?
         {name:"", miestas:"Priekutė", adresas:"", telefonas:""},
         //Prienai
         {name:"Prienų ligoninė", miestas:"Prienai", adresas:"Pušyno g. 2", telefonas:"(8-319) 60465"},
         //Radviliškis
         {name:"Radviliškio ligoninė", miestas:"Radviliškis", adresas:"Gedimino g. 9", telefonas:"(8-422) 51646"},
         //Ramygala?
         {name:"Ramygalos palaikomojo gydymo ir slaugos ligonine, Panevezio rajono savivaldybes poliklinika", miestas:"Ramygala", adresas:"Ramygala", telefonas:"(8-45) 592340"},
         //Raseiniai
         {name:"Raseinių ligoninė", miestas:"Raseiniai", adresas:"Ligoninės g. 4", telefonas:"(8-428) 79055"},
         //Rietavas
         {name:"Rietavo palaikomojo gydymo ir slaugos ligoninė, Rietavo pirminės sveikatos priežiūros centras", miestas:"Rietavas", adresas:"Parko g. 8", telefonas:"(8-448) 68323"},
         //Rokiškis
         {name:"Rokiškio r. ligoninė", miestas:"Rokiškis", adresas:"V. Lašo g. 3", telefonas:"(8-45) 855096"},
         //Rūdiškės
         {name:"GRudiskiu pirmines sveikatos prieziuros centras", miestas:"Rūdiškės", adresas:"Trakų g. 28", telefonas:"(8-528) 57303"},
         //Salantai
         {name:"Salantų palaikomojo gydymo ir slaugos ligoninė, Salantų pirminės sveikatos priežiūros centras", miestas:"Salantai", adresas:" S. Nėries g. 13", telefonas:"(8-445) 58153"},
         //Seda
         {name:"Sedos palaikomojo gydymo ir slaugos ligoninė", miestas:"Seda", adresas:"A. Baranausko a. 8,", telefonas:"(8-443) 46463"},
         //Simnas
         {name:"Simno ambulatorija, Alytaus r. savivaldybės pirminės sveikatos priežiūros centras", miestas:"Simnas", adresas:"Vytauto g. 55", "Tleefonas":"(8-315) 28571"},
         //Skaudvilė
         {name:"Skaudvilės extended care Hospital", miestas:"Skaudvilė", adresas:"Vilniaus g. 14", telefonas:"(8-446) 58294"},
         //Skuodas
         {name:"GSkuodo pirminės sveikatos priežiūros centras, VšĮ poliklinika", miestas:"Skuodas", adresas:"Šatrijos g. 5", telefonas:"(8-440) 73646"},
         //Smailininkai
         {name:"Smalininkų ambulatorija, Jurbarko r. pirminės sveikatos priežiūros centras", miestas:"Smailininkai", adresas:"Nemuno g. 54", telefonas:"(8-447) 56203"},
         //Šakiai
         {name:"Šakių ligoninė", miestas:"Šakiai", adresas:"Bažnyčios g. 37", telefonas:"(8-345) 60712"},
         //Šalčininkai
         {name:"Šalčininkų ligoninė", miestas:"Šalčininkai", adresas:"Nepriklausomybės g. 38", telefonas:"(8-380) 51434"},
         //Šeduva
         {name:"Šeduvos ligoninė", miestas:"Šeduva", adresas:"Laisvės a. 29", telefonas:"(8-422) 56142"},
         //Šiauliai
         {name:"Republikinė Šiaulių ligoninė", miestas:"Šiauliai", adresas:"V. Kudirkos g. 99", telefonas:"(8-41) 524257"},
         //Šilutė
         {name:"Šilutės ligoninė", miestas:"Šilutė", adresas:"Rusnės g. 1", telefonas:"(8-441) 61040"},
         //Širvintos
         {name:"Širintų ligoninė", miestas:"Širvintos", adresas:"Vilniaus g. 85", telefonas:"(8-382) 51435"},
         //Švenčionėliai
         {name:"Švenčionėlių poliklinika, Švenčionių r. pirminės sveikatos priežiūros centras", miestas:"Švenčionėliai", adresas:"Švenčionių g. 1", telefonas:"(8-387) 31243"},
         //Švenčionys
         {name:"Švenčionių r. centrinė ligoninė, Konsultacinė poliklinika", miestas:"Švenčionys", adresas:"Strūnaičio g. 3", telefonas:"(8-387) 51913"},
         //Tauragė
         {name:"Tauragės ligoninė", miestas:"Tauragė", adresas:"V. Kudirkos g. 2", telefonas:"(8-446) 62747"},
         //Telšiai
         {name:"Regioninė Telšių ligoninė", miestas:"Telšiai", adresas:"Kalno g. 40", telefonas:"(8-444) 77000"},
         //Tytuvėnai
         {name:"Tytuvėnų pirminės sveikatos priežiūros centras", miestas:"Tytuvėnai", adresas:"J. Basanavičiaus g. 6", telefonas:"(8-427) 56274"},
         //Trakai
         {name:"Trakų ligoninė", miestas:"Trakai", adresas:"Mindaugo g. 13", telefonas:"(8-528) 55814"},
         //Troškūnai
         {name:"Troškūnų palaikomojo gydymo ir slaugos ligoninė, Anykščių r. savivaldbės pirminės sveikatos priežiūros centras", miestas:"Troškūnai", adresas:"Vytauto g. 15", telefonas:"(8-381) 56230"},
         //Ukmergė
         {name:"Ukmergės ligoninė", miestas:"Ukmergė", adresas:"Vytauto g. 105", telefonas:"(8-340) 65299"},
         //Utena
         {name:"Utenos ligoninė", miestas:"Utena", adresas:"Aukštakalnio g. 3", telefonas:"(8-389) 63861"},
         //Užventis
         {name:"A. Jokso seimos sveikatos centras", miestas:"Užventis", adresas:"Vilties g. 2", telefonas:"(8-427) 60114"},
         //Varėna
         {name:"Varėnos ligoninė", miestas:"Varėna", adresas:"M. K. Čiurlionio g. 61", telefonas:"(8-310) 51435"},
         //Varniai
         {name:"Varnių palaikomojo gydymo ir slaugos ligoninė, Varnių pirminės sveikatos priežiūros centras", miestas:"Varniai", adresas:"Ligoninės g. 3", telefonas:"(8-444) 47435"},
         //Veisiejai
         {name:"Veisiejų ambulatorija, Lazdijų savivaldybės pirminės sveikatos priežiūros centras", miestas:"Veisiejai", adresas:"V. Montvilos g. 22A", telefonas:"(8-318) 56691"},
         //Venta
         {name:"Ventos ambulatorija", miestas:"Venta", adresas:"Ventos g. 28", telefonas:"(8-425) 39335"},
         //Vievis
         {name:"Vievio m. palaikomojo gydymo ir slaugos ligoninė", miestas:"Vievis", adresas:"Liepų g. 16", telefonas:"(8-528) 27237"},
         //Vilkaviškis
         {name:"Vilkaviškio ligoninė", miestas:"Vilkaviškis", adresas:"Maironio g. 25", telefonas:"(8-342) 60161"},
         //Vilkija
         {name:"Vilkijos slaugos ir palaikomojo gydymo ligoninė, Vilkijos pirminės sveikatos priežiūros centras", miestas:"Vilkija", adresas:"Bažnyčios g. 27", telefonas:"(8-37) 556220"},
         //Vilnius,
         {name:"Vilnius university hospital", miestas:"Vilnius", adresas:"Antakalnio g. 57", telefonas:"(8-5) 216 9069"},
         {name:"Vilnius City Clinical Hospital",miestas:"Vilnius",adresas:"Antakalnio g. 57",telefonas:"(8-5) 234 4519"},
         {name:"Vilnius City Clinical Hospital",miestas:"Vilnius",adresas:"Antakalnio g. 57",telefonas:"(8-5) 234 4519"},
         {name:"Vilnius University Hospital Santaros klinikos",miestas:"Vilnius",adresas:"Santariškių g. 2",telefonas:"(8-5) 236 5000"},
         //Virbalis
         {name:"Virbalio ambulatorija", miestas:"Virbalis", adresas:"Vilniaus g. 7", telefonas:"(8-342) 50135"},
         //Visaginas
         {name:"Visagino ligoninė", miestas:"Visaginas", adresas:"Taikos pr. 15", telefonas:"(8-386) 73001"},
         //Zarasai
         {name:"Zarasų ligoninė", miestas:"Zarasai", adresas:"Vilniaus g. 1B", telefonas:"(8-385) 54570"},
         //Žagarė
         {name:"Žagarės amubulatroija, Joniškio pirminės sveikatos priežiūros centras", miestas:"Žagarė", adresas:"Miesto a. 39", telefonas:"(8-426) 56422"},
         //Žiežmariai
         {name:"Žiežmarių pirminės sveikatos priežiūros centras", miestas:"Žiežmariai", adresas:"Narimanto g. 35", telefonas:"(8-346) 58248"}
      ]
  };

//   const hospitalList = {
//     ligonines: [
//        {
//           name: "Vilnius university hospital",
//           miestas: "Šiauliai",
//           adresas: "Antakalnio g. 57",
//           telefonas: "(8-5) 216 9069"
//        },
//        {
//           name: "Vilnius City Clinical Hospital",
//           miestas: "Vilnius",
//           adresas: "Antakalnio g. 57",
//           telefonas: "(8-5) 234 4519"
//        },
//        {
//           name: "Vilnius City Clinical Hospital",
//           miestas: "Vilnius",
//           adresas: "Antakalnio g. 57",
//           telefonas: "(8-5) 234 4519"
//        },
//        {
//           name: "Vilnius University Hospital Santaros klinikos",
//           miestas: "Vilnius",
//           adresas: "Santariškių g. 2",
//           telefonas: "(8-5) 236 5000"
//        },
//        {
//           name: "Clinical Hospital of Kaunas",
//           miestas: "Kaunas",
//           adresas: "Josvainių g. 2",
//           telefonas: "(8-37) 306000"
//        },
//        {
//           name: "Republican Panevezys Hospital",
//           miestas: "Panevezys",
//           adresas: "Smėlynės g. 25",
//           telefonas:"(8-45) 507184"
//        }
//     ]
//  };

  return (
    <Grid container justifyContent='center'>
      <Grid item margin='10px'>
        <TextField id="filled-basic" label="Pld enter your location" variant="filled" onChange={(value) => setCity(value.target.value)} InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton edge="end" color="primary" onClick={() => setSearchLocation(city)}>
          Search
        </IconButton>
      </InputAdornment>
    ),
  }} />
      </Grid>
      <Grid item container xs={12} justifyContent='center' padding='10px'>
        {hospitalList.ligonines.map((hospital, id) => 
        latinize(hospital.miestas.toLocaleLowerCase()).includes(latinize(searchLocation.toLocaleLowerCase())) && 
        searchLocation !== '' &&
          <Grid item container xs={3} margin='15px'>
            <Paper elevation={3} key={id} padding='10px' style={{width: '100%'}}>
            <Typography item marginTop='10px'>
              {hospital.name}
            </Typography>
            <Typography item>
              {hospital.adresas}
            </Typography>
            <Typography item>
              {hospital.miestas}
            </Typography>
            <Typography item>
              {hospital.telefonas}
            </Typography>
            <Link href={`https://www.google.com/maps/search/${hospital.name}`} marginBottom='10px'>
              Link
            </Link>
          </Paper>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}

export default App;
