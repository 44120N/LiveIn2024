import Carousel from "../components/Carousel"

const Social = () =>{
    const title = [];
    const src = ["social_1.jpeg", "social_2.jpg", "social_3.jpg"];
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
                            Warga Desa Kapencar dikenal dengan keramahan dan kepeduliannya terhadap sesama. Mereka menyambut tamu dengan senyuman ramah dan sikap yang hangat. Kehangatan ini tidak hanya terbatas pada lingkungan sosial, tetapi juga tercermin dalam kepedulian mereka terhadap lingkungan dan komunitas lokal. Warga Desa Kapencar sering kali saling membantu dalam berbagai kegiatan sosial, budaya, dan pembangunan.
                        </p>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(social_compassion.jpg)`}}>
                            <div className="desc">
                                <a>Compassion</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(social_society.jpg)`}}>
                            <div className="desc">
                                <a>Masyarakat</a>
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
                            Pendidikan di Desa Kapencar memiliki ciri khasnya sendiri, dengan fokus pada pembelajaran yang terkait dengan praktek sehari-hari. Sekolah-sekolah di desa ini berusaha untuk mengintegrasikan kurikulum formal dengan pengetahuan lokal dan keterampilan praktis yang relevan dengan kehidupan masyarakat. Pendekatan ini bertujuan untuk mempersiapkan generasi muda Desa Kapencar agar dapat sukses dalam kehidupan sehari-hari dan berkontribusi secara positif terhadap pembangunan desa.
                        </p>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(social_edu.png)`}}>
                            <div className="desc">
                                <a>Pendidikan</a>
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
                            Meskipun pendidikan di Desa Kapencar berfokus pada praktek sehari-hari, masih terdapat tantangan dalam hal keterampilan dasar seperti menulis dan berhitung. Banyak anak-anak masih mengalami kesulitan dalam menguasai keterampilan ini dengan baik. Faktor-faktor seperti kurangnya sumber daya pendidikan, tingkat partisipasi yang rendah, dan kurangnya dukungan dari orang tua menjadi penyebab utama permasalahan ini.
                        </p>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(social_writing.jpg)`}}>
                            <div className="desc">
                                <a>Menulis</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(social_count.png)`}}>
                            <div className="desc">
                                <a>Berhitung</a>
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
                            Untuk mengatasi masalah keterampilan menulis dan berhitung di Desa Kapencar, diperlukan pendekatan yang berkelanjutan. Solusi yang dapat dipertimbangkan antara lain adalah peningkatan kualitas dan aksesibilitas pendidikan (perpustakaan), pelatihan guru dalam metode pengajaran yang efektif, serta keterlibatan aktif orang tua dalam pendidikan anak-anak mereka. Dengan pendekatan yang komprehensif dan dukungan yang kuat dari semua pihak terkait, diharapkan anak-anak Desa Kapencar dapat mengatasi kesulitan ini dan mencapai potensi akademik mereka dengan lebih baik.
                        </p>
                    </div>
                </div>
                <div className="row-center">
                    <div className="col-sm">
                        <div className="col-box" style={{backgroundImage: `url(social_library.jpg)`}}>
                            <div className="desc">
                                <a>Perpustakaan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Social;