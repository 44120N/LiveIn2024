import Carousel from "../components/Carousel"

const Science = () =>{
    const title = [];
    const src = ["science_1.jpg", "science_2.jpg", "science_3.jpg"];
    return(
        <>
            <Carousel title={title} src={src}/>
            <section>
                <div className="row-center">
                    <div>
                        <div className="title">Deskripsi</div>
                        <hr />
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <p>
                            Wilayah Wonosobo di Jawa Tengah merupakan rumah bagi beragam flora dan fauna yang menarik. Dengan lanskap pegunungan dan dataran tinggi, Wonosobo menawarkan berbagai jenis tanaman dan hewan yang hidup di lingkungan alaminya. Di antara flora yang dapat ditemui adalah kina, pohon pinus, serta beragam jenis sayuran dan buah-buahan. Sementara itu, fauna yang menghuni Wonosobo meliputi burung endemik seperti jalak Bali, kera Jawa, dan berbagai jenis burung hutan lainnya.
                        </p>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(science_ketul.jpg)`}}>
                            <div className="desc">
                                <a>Ketul (<i>Bidens pilosa</i>)</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(science_owa.jpg)`}}>
                            <div className="desc">
                                <a>Owa jawa (<i>Hylobates moloch</i>)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row-center">
                    <div>
                        <div className="title">Latar Belakang</div>
                        <hr />
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <p>
                            Pertanian dan perkebunan menjadi tulang punggung ekonomi masyarakat Wonosobo. Mayoritas penduduk menggantungkan hidup dari hasil pertanian dan perkebunan seperti tanaman sayuran, buah-buahan, dan tanaman keras lainnya. Kondisi geografis yang subur memungkinkan pertanian menjadi sektor utama dalam perekonomian daerah ini.
                        </p>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(science_coffee.jpg)`}}>
                            <div className="desc">
                                <a>Kopi Arabika (<i>Coffea arabica</i>)</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(science_guava.jpg)`}}>
                            <div className="desc">
                                <a>Jambu Biji (<i>Psidium guajava</i>)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row-center">
                    <div>
                        <div className="title">Permasalahan</div>
                        <hr />
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <p>
                            Salah satu tantangan utama dalam pertanian dan perkebunan di Wonosobo adalah serangan hama yang merusak tanaman. Beberapa hama yang sering ditemui meliputi ulat, tikus, dan kutu kebul. Serangan-serangan ini dapat mengakibatkan kerugian besar bagi petani dan mengganggu ketahanan pangan di wilayah tersebut.
                        </p>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(science_kebul.jpg)`}}>
                            <div className="desc">
                                <a>Kutu kebul berdaun perak (<i>Bemisia tabaci</i>)</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(science_mouse.jpg)`}}>
                            <div className="desc">
                                <a>Tikus sawah (<i>Rattus argentiventer</i>)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row-center">
                    <div>
                        <div className="title">Solusi</div>
                        <hr />
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <p>
                            Untuk mengatasi masalah serangan hama, petani di Wonosobo telah mengadopsi berbagai strategi kontrol yang efektif. Salah satu solusi utama adalah penggunaan pestisida yang tepat dan perangkap tikus. Pestisida digunakan secara selektif dan hati-hati untuk mengendalikan populasi hama tanpa merusak ekosistem lokal. Sementara itu, perangkap tikus dipasang di area-area yang rentan terhadap serangan tikus.
                        </p>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(science_pestisida.jpg)`}}>
                            <div className="desc">
                                <a>Pestisida</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(science_trap.jpg)`}}>
                            <div className="desc">
                                <a>Perangkap Tikus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Science;