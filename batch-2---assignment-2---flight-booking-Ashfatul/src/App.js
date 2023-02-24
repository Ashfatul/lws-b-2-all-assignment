import BookingCreator from "./components/BookingCreator";
import BookingList from "./components/BookingList";
import Header from "./components/Header";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
   return (
      <Provider store={store}>
         <div className="main-container">
            <Header />
            <section>
               <BookingCreator />
               <BookingList />
            </section>
         </div>
      </Provider>
   );
}

export default App;
