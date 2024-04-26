import Carousel from "../components/Carousel"

const About = () =>{
    const title = [
        "Img1",
        "Img2",
        "Img3"
    ];
    const src = [];
    return(
        <>
            <Carousel title={title} src={src}/>
            <section id="profile">
                <div className="row-center">
                    <div>
                        <div className="title">Anggota Kelompok 21</div>
                        <hr />
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box">
                            <div className="desc">
                                <a>Aaron Hartono</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box">
                            <div className="desc">
                                <a>Alexander Bayuarsa Narresputra</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box">
                            <div className="desc">
                                <a>Alfon Aoki Anwari</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box">
                            <div className="desc">
                                <a>Damianus Adhyaraka Gudigda Kadatyana</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box">
                            <div className="desc">
                                <a>Gareth Darien Bong</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box">
                            <div className="desc">
                                <a>Joel Abia Widjaja</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box">
                            <div className="desc">
                                <a>Johannes Marco Moses Sibuea</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box">
                            <div className="desc">
                                <a>Jovan Iskandar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box">
                            <div className="desc">
                                <a>Michael David Chan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row-center">
                    <div>
                        <div className="title">Desa Kapencar</div>
                        <hr />
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div style={{marginInline: "10vw"}}>
                            <p>
                                Desa Kapencar, terletak di Kabupaten Wonosobo, Jawa Tengah 
                                adalah sebuah destinasi yang menawarkan kedamaian dan keindahan alam yang menakjubkan. 
                                Dikelilingi oleh dua raksasa alam, Gunung Sindoro dan Gunung Sumbing, 
                                desa ini menawarkan pemandangan indah yang memukau dari perbukitan yang hijau. 
                                Keberadaan gunung-ganung tersebut tidak hanya menjadi ciri khas visual desa, 
                                tetapi juga memberikan iklim yang ideal untuk pertanian.
                            </p>
                            <br />
                            <p>
                                Di samping keindahan alamnya, Desa Kapencar juga kaya akan adat dan kebudayaan khas Wonosobo. 
                                Masyarakatnya menjaga dengan cermat tradisi-tradisi adat yang telah diwariskan dari generasi ke generasi. 
                                Upacara adat dan seni pertunjukan tradisional sering diadakan untuk 
                                memperingati acara-acara penting dalam kehidupan masyarakat.
                            </p>
                            <br />
                            <p>
                                Salah satu hal yang paling memikat tentang Desa Kapencar adalah keramahan penduduknya. 
                                Warga desa ini dikenal karena sambutan hangat dan ramahnya terhadap para pengunjung. 
                                Siapa pun yang berkunjung akan disambut dengan senyuman dan kebaikan hati yang tulus.
                            </p>
                            <br />
                            <p>
                                Aktivitas perkebunan dan perdagangan menjadi kegiatan utama di Desa Kapencar. 
                                Sawah-sawah hijau yang subur dan kebun-kebun buah menjadi sumber penghidupan utama bagi penduduk desa ini. 
                                Anda dapat melihat petani bekerja di ladang-ladang mereka atau berbelanja di pasar tradisional yang ramai, 
                                di mana hasil pertanian lokal ditawarkan dengan beragam jenis dan kualitas dengan harga yang terjangkau murah.
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;