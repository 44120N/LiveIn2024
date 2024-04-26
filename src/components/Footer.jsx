import './Footer.css'
import Wave from 'react-wavify';

const Footer = () => {
    return (
        <>
            <Wave fill='#364d79'
                paused={false}
                style={{ display: 'flex', width: "100%", height: "10vh" }}
                options={{
                    amplitude: 20,
                    speed: .32,
                    points: 4
                }}
            />
            <footer className="site-footer">
                <div className="contents">
                    <div className="logo">
                        <img src="CC_Footer.png" alt="logo" />
                    </div>
                </div>
                <div className="contents">
                    <div className="container" id='sosmed'>
                        <ul className="social-icons size-sm">
                            <li><a className='pages' href='https://kanisius.sch.id'><i className="ri-pages-line"></i></a></li>
                            <li><a className="instagram" href="https://www.instagram.com/kolesekanisius/"><i className="ri-instagram-line"></i></a></li>
                            <li><a className="github" href="https://github.com/44120N"><i className="ri-github-fill"></i></a></li>
                            <li><a className="youtube" href="https://www.youtube.com/@KoleseKanisiusOfficial"><i className="ri-youtube-line"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>© Copyright 2024 | All Rights Reserved</p>
                    <p>Canisius College</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;