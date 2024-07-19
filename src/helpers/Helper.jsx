export const Helper = {
    imageContainerStyle: (image) => {
        return {
            position: 'relative',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: "center center",
            width: '100%',
            height: '100%'
        }
    },
}