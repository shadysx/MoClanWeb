import React from 'react'
import { useMediaQuery } from 'react-responsive'

const ImageGallery = () => {

    const isTabletOrMobile = useMediaQuery({query: '(max-width: 600px)'})

    const images = [
        "/assets/moclothes11e.jpg",
        "/assets/moclothes2e.jpg",
        "/assets/moclothes3e.jpg",
        "/assets/moclothes4e.jpg",
        "/assets/moclothes5e.jpg",
        "/assets/moclothes7e.jpg",
        "/assets/moclothes8e.jpg",
        "/assets/moclothes9e.jpg",
        "/assets/moclothes6e.jpg",
    ]

    const styles = {
        container: {
            backgroundColor: "white",
            width: "97%",
            margin: "-60px auto 0 auto",
            borderRadius: "6px",
            boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
            position: "relative",
        },
        imageContainer: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridColumnGap: "7px",
            gridRowGap: "7px",
            padding: "0.5% 0.5%",
            overflow: "hidden"
        },
        imageContainerMobile: {
            display: "grid",
            gridTemplateColumns: "1fr",
            gridColumnGap: "7px",
            gridRowGap: "7px",
            padding: "0.5% 0.5%",
            overflow: "hidden",
        },
        image:{
            width: "100%",
            objectFit: "cover"
        }
    }
 
    return (
                
                <div style={styles.container}>
                    {isTabletOrMobile && 
                        <div style={styles.imageContainerMobile}  >
                            {images.map(image => (
                                <img src={image} style={styles.image} alt='clothes' />
                            ))}
                        </div>
                    }
                    {!isTabletOrMobile && 
                        <div style={styles.imageContainer}  >
                            {images.map(image => (
                                <img src={image} style={styles.image} alt='clothes' />
                            ))}
                        </div>
                    }
                </div>
   )
}
export default ImageGallery