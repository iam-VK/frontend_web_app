import './MainPage.css'
import Header from "../../components/TitleBanner/TitleBanner"
import SearchFunc from "../../components/SearchFunc/SearchFunc"

function MainPage()
{
    return (
        <div>
            <div className="appcontent">
                <Header />
                <SearchFunc />
            </div>
        </div>
    )
}

export default MainPage