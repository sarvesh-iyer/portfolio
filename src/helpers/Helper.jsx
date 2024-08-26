export const Helper = {
    SERVICE_ID: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    PUBLIC_KEY: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    SITE_URL: "https://sarveshiyer.in",
    RESUME_LINK: "https://drive.google.com/file/d/1tABqQQ0_4daYWLl0YtAkEYo0W3QUR6a3/view?usp=drive_link",

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
    
    getScreenSize: () => {
        return(window.innerWidth)
    },
    
    updateSpecificKeyInList: (list, id, key, value) => {
        let newArr = list?.map(obj => {
            if(obj?.id === id){
                return {
                    ...obj,
                    [key]: value
                }
            }else{
                return obj   
            }
        })
        return newArr
    },

    toggleKeysValueInList: (list, id, key, value) => {
        let newArr = list?.map(obj => {
            if(obj?.id === id){
                return {
                    ...obj,
                    [key]: value
                }
            }else{
                return {
                    ...obj,
                    [key]: false
                }   
            }
        })
        return newArr
    },

    filterAndReorderArray: (list, orderArray) => {
        return list.filter(each => orderArray.includes(each.id))
                .sort((a, b) => orderArray.indexOf(a.id) - orderArray.indexOf(b.id))

    },

    openLinkInNewTab: (link) => {
        window.open(link)
    }
}