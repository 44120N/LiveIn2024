import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function CustomParallax() {
    return (
        <>
            <ParallaxProvider>
                <header>
                    <ParallaxBanner 
                        style={{height: '100vh', background: '#009CFF'}}
                        layers={[
                            {
                                children: <img src="parallax_sun.png" style={{backgroundRepeat: "no-repeat", backgroundSize: "auto", maxWidth: '80%'}} />,
                                translateY: [20, -50],
                                shouldAlwaysCompleteAnimation: true,
                                expanded: false
                            },
                            {
                                image: "parallax_mountain.png",
                                translateY: [30, 50],
                                shouldAlwaysCompleteAnimation: true,
                                expanded: false
                            },
                            {
                                children: <img src="parallax_cloud.png" style={{backgroundRepeat: "no-repeat", backgroundSize: "auto", maxWidth: '80%'}} />,
                                // image: "parallax_cloud.png",
                                translateX: [-40, -100],
                                translateY: [50, 50],
                                opacity: [1, 0.3],
                                shouldAlwaysCompleteAnimation: true,
                                expanded: false
                            },
                            {
                                children: <img src="parallax_cloud.png" style={{backgroundRepeat: "no-repeat", backgroundSize: "auto", maxWidth: '80%'}} />,
                                // image: "parallax_cloud.png",
                                translateX: [60, 100],
                                translateY: [50, 50],
                                opacity: [1, 0.3],
                                shouldAlwaysCompleteAnimation: true,
                                expanded: false
                            },
                            {
                                children: <div className="center"><div id="title__parallax">Live In</div></div>,
                                translateY: [50, 0],
                                shouldAlwaysCompleteAnimation: true,
                                expanded: false
                            }
                        ]}
                    />
                </header>
            </ParallaxProvider>
        </>
    );
}