import './MainPage.css'
import Header from "../../components/header/Header"
import SearchFunc from "../../components/SearchFunc/SearchFunc"

function MainPage()
{
    return (
        <div>
            <div className="appcontent">
                <Header subtitle={"Find your videos"} />
                <SearchFunc path={"search/"} />
            </div>
        </div>
    )
}

export default MainPage