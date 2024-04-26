import Carousel from "../components/Carousel"
import CustomParallax from "../components/Parallax";

const Home = () =>{
    const title = [
        "Img1",
        "Img2",
        "Img3"
    ];
    const src = [];
    return(
        <>
            <CustomParallax />
            <section>
                <div className="row-center">
                    <div>
                        <div className="title">Dokumentasi</div>
                        <hr />
                    </div>
                </div>
                <div className="row-center" style={{margin: 0, padding: 0}}>
                    <div style={{width: "100%"}}>
                        <Carousel title={title} src={src}/>
                    </div>
                </div>
            </section>
            <section>
                <div className="row-center">
                    <div>
                        <div className="title">Daftar Konten Blog</div>
                        <hr />
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(home_science.jpg)`}}>
                            <div className="desc">
                                <a href="">Sains</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(home_economy.jpg)`}}>
                            <div className="desc">
                                <a href="">Ekonomi</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(home_social.jpg)`}}>
                            <div className="desc">
                                <a href="">Sosial Budaya</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;