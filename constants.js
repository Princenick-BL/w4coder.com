export const SECTION_TYPE = {
    TEXT_BLOCK : "TEXT_BLOCK",
    IMAGE_BLOCK : "IMAGE_BLOCK",
    VIDEO_BLOCK : "VIDEO_BLOCK",
    CODE_BLOCK : "CODE_BLOCK",
    GIT_BLOCK : "GIT_BLOCK"

}

export const config ={
    API_ENDPOINT : process.env.NEXT_PUBLIC_APP_API_ENDPOINT,
    CURRENT_DOMAIN : process.env.NEXT_PUBLIC_APP_CURRENT_DOMAIN || 'https://w4coder.com'
}

export const THEME = {
    DARK : "dark-theme",
    LIGHT : "light-theme"
}

export const menu = [
    {
        name : "accueil",
        slug : "/",
        level : 1
    },
    {
        name : "webstories",
        slug : "/web-stories",
        level : 1
    },
    {
        name : "youtube",
        slug : "/youtube",
        level : 1
    },
    {
        name : "codepen",
        slug : "/codepen",
        level : 1
    },
    {
        name : "about",
        slug : "/about",
        level : 0
    },
    {
        name : "contact",
        slug : "/contact",
        level : 0
    }
]

export const resources = {
    en: {
      translation: {
        home: 'Home',
        about: 'About',
        contact: 'Contact'
      },
    },
    fr: {
      translation: {
        home: 'Accueil',
        about: 'À propos',
        contact: 'Contact'
      },
    },
  };