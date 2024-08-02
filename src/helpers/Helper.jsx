export const Helper = {
    SERVICE_ID: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    PUBLIC_KEY: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,

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