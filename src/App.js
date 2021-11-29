import './App.css';
import MenuList from './containers/Menu';
import FilmsList from './containers/FilmList';
import Footer from './containers/Footer';
import styled from 'styled-components';
import './file/fonts.css';
import { useState } from 'react';


function App() {

  const tabFilms= [
    {
        title: "Hellobound",
        rating: "6.4",
        description: "Pozaziemskie istoty wydają krwawe wyroki i wysyłają ziemian do piekła, przyczyniając się do powstania grupy wyznaniowej opartej na idei boskiej sprawiedliwości.",
        src: "https://fwcdn.pl/fpo/36/55/853655/7982283.3.jpg",
    },
    {
        title: "Skazani na Shawshank",
        rating: "8.8",
        description: "Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.",
        src: "https://fwcdn.pl/fpo/10/48/1048/6925401.3.jpg",
    },
    {
        title: "Nietykalni",
        rating: "8.7",
        description: "Sparaliżowany milioner zatrudnia do opieki młodego chłopaka z przedmieścia, który właśnie wyszedł z więzienia.",
        src: "https://fwcdn.pl/fpo/33/90/583390/7441162.3.jpg",
    },
    {
        title: "Zielona Mila",
        rating: "8.6",
        description: "Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie, którego skazano na śmierć za zabójstwo dwóch 9-letnich dziewczynek.",
        src: "https://fwcdn.pl/fpo/08/62/862/7517878.3.jpg",
    },
    {
        title: "Ojciec Chrzestny",
        rating: "8.6",
        description: "Opowieść o nowojorskiej rodzinie mafijnej. Starzejący się Don Corleone pragnie przekazać władzę swojemu synowi.",
        src: "https://fwcdn.pl/fpo/10/89/1089/7196615.3.jpg",
    },
    {
        title: "Dwunastu gniewnych ludzi",
        rating: "8.7",
        description: "Dwunastu przysięgłych ma wydać wyrok w procesie o morderstwo. Jeden z nich ma wątpliwości dotyczące winy oskarżonego.",
        src: "https://fwcdn.pl/fpo/07/01/30701/7492190.3.jpg",
    },
    {
        title: "Forrest Gump",
        rating: "8.5",
        description: "Historia życia Forresta, chłopca o niskim ilorazie inteligencji z niedowładem kończyn, który staje się miliarderem i bohaterem wojny w Wietnamie.",
        src: "https://fwcdn.pl/fpo/09/98/998/7314731.3.jpg",
    },
    {
        title: "Lot nad kukułczym gniazdem",
        rating: "8.5",
        description: "Historia złodzieja, szulera i chuligana, który, by uniknąć więzienia, udaje niepoczytalność. Trafia do szpitala dla umysłowo chorych, gdzie twardą ręką rządzi siostra Ratched.",
        src: "https://fwcdn.pl/fpo/10/19/1019/7386645.3.jpg",
    },
    {
        title: "Ojciec Chrzestny II",
        rating: "8.5",
        description: "Rok 1917. Młody Vito Corleone stawia pierwsze kroki w mafijnym świecie Nowego Jorku. Ponad 40 lat później jego syn Michael walczy o interesy i dobro rodziny.",
        src: "https://fwcdn.pl/fpo/10/90/1090/7196616.3.jpg",
    },
    {
        title: "Władca Pierścieni: Powrót króla",
        rating: "8.4",
        description: "Zwieńczenie filmowej trylogii wg powieści Tolkiena. Aragorn jednoczy siły Śródziemia, szykując się do bitwy, która ma odwrócić uwagę Saurona od podążających w kierunku Góry Przeznaczenia hobbitów.",
        src: "https://fwcdn.pl/fpo/18/41/11841/7494142.3.jpg",
    },
    {
        title: "Lista Schindlera",
        rating: "8.4",
        description: "Historia przedsiębiorcy Oskara Schindlera, który podczas II wojny światowej uratował przed pobytem w obozach koncentracyjnych 1100 Żydów.",
        src: "https://fwcdn.pl/fpo/12/11/1211/7254286.3.jpg",
    }
];

   const [draftValue, setDraftValue] = useState(''); 

  return (
    <div className="App">
      <MenuList draftValue={draftValue} setDraftValue={setDraftValue} />
      <FilmsList films={tabFilms} draftValue={draftValue}/>
      <Footer />
    </div>
  );
}

export default App;
