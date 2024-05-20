import Header from "../components/Header/Header";
import NewTask from "../components/Model/NewTask";

function MainPage(){
    return (
        <>
        <Header />
        <h1>Main page</h1>
        <button type="button" className="btn btn-success" name="addTask">+</button>
        <NewTask />
        </>
        )
}

export default MainPage;