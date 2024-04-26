import Carousel from "../components/Carousel"

const Economy = () =>{
    const title = [];
    const src = ["economy_1.jpg", "economy_2.jpg", "economy_3.jpg"];
    return(
        <>
            <Carousel title={title} src={src} none={true}/>
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
                            Pendapatan ekonomi di Wonosobo, Jawa Tengah, sebagian besar berasal dari sektor pertanian dan perkebunan. Wilayah ini dikenal sebagai lumbung sayur-sayuran di Jawa Tengah, dengan produksi kentang, wortel, kubis, dan buah-buahan yang melimpah. Selain itu, sektor perdagangan dan jasa juga turut berkontribusi terhadap perekonomian daerah ini.
                        </p>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(economy_pertanian.jpg)`}}>
                            <div className="desc">
                                <a>Pertanian</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(economy_perkebunan.jpg)`}}>
                            <div className="desc">
                                <a>Perkebunan</a>
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
                            Pertanian dan perkebunan menjadi mata pencaharian utama masyarakat Wonosobo. Mayoritas penduduk menggantungkan hidup dari hasil pertanian dan perkebunan seperti tanaman sayuran, buah-buahan, dan tanaman keras lainnya. Kondisi geografis yang subur memungkinkan pertanian menjadi sektor utama dalam perekonomian daerah ini. Wilayah ini memiliki sumber daya alam yang melimpah, namun sayangnya, sumber daya manusia (SDM) tidak dapat memanfaatkan sumber daya alam (SDA) secara maksimal dikarenakan keterbatasan yang ada di desa.
                        </p>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(economy_producent.jpg)`}}>
                            <div className="desc">
                                <a>Produsen</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(economy_distributor.png)`}}>
                            <div className="desc">
                                <a>Distributor</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(economy_consument.jpg)`}}>
                            <div className="desc">
                                <a>Konsumen</a>
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
                            Meskipun mayoritas penduduk Wonosobo adalah produsen dalam sektor pertanian dan sektor perkebunan, namun masih terdapat beberapa produsen yang mengalami gagal panen. Faktor-faktor seperti cuaca ekstrem, serangan hama, dan penyakit tanaman menjadi penyebab utama kegagalan panen ini. Gagal panen dapat berdampak buruk pada pendapatan ekonomi dan kesejahteraan keluarga petani dan pekebun.
                        </p>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(economy_gagal-panen.jpeg)`}}>
                            <div className="desc">
                                <a>Gagal Panen</a>
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
                            Untuk mengatasi masalah kegagalan panen, diperlukan pendekatan yang komprehensif dan berkelanjutan. Beberapa solusi yang dapat dipertimbangkan antara lain peningkatan pemahaman tentang praktik pertanian yang baik, penerapan teknologi pertanian modern, diversifikasi tanaman, dan penggunaan sistem irigasi yang efisien. Selain itu, pendampingan dan pelatihan kepada petani tentang manajemen risiko dan penanganan serangan hama juga dapat membantu meningkatkan produktivitas dan ketahanan petani terhadap risiko-risiko yang ada.
                        </p>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(economy_irigasi.jpg)`}}>
                            <div className="desc">
                                <a>Sistem Irigasi</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(economy_tech.jpg)`}}>
                            <div className="desc">
                                <a>Teknologi</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Economy;