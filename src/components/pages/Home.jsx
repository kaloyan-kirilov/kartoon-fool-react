import kartoon_fool from "../../img/kartoon-fool.png";

function Home() {
    return(
        <>
            <div className="page-title">
                <p className="title-text">A place for wacky Kartoons!</p>
            </div>
            <img id="home-image" src={kartoon_fool} alt="kartoon fool" />
        </>
    );
}

export default Home;