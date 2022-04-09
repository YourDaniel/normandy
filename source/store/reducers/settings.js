const CHANGE_THEME = "CHANGE_THEME";
const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
const AUDIO_THEME_TOGGLE = "AUDIO_THEME_TOGGLE";
const AUDIO_VOLUME_CHANGE = "AUDIO_VOLUME_CHANGE";
const VIDEO_EFFECTS_VOLUME_CHANGE = "VIDEO_EFFECTS_VOLUME_CHANGE";

const defaultState = {
    themes: {
        activeTheme: 'usa',
        themesList: [
            "usa",
            "germany"
        ]
    },
    languages: {
        activeLanguage: 'ru',
        languagesList: [
            'en',
            'ru',
            'pl',
            'de'
        ]
    },
    audio: {
        themeAudioIsPlaying: false,
        volumes: {
            theme: 0.5,
            sounds: 0.5
        }
    },
    effects: {
        volume: 2
    }
}

export default function settings(state = defaultState, action) {
    switch (action.type) {
        
        case CHANGE_THEME:
            return {
                ...state,
                themes: {
                    ...state.themes,
                    activeTheme: action.payload
                }
            }
    
        case CHANGE_LANGUAGE:
            return {
                ...state,
                languages: {
                    ...state.languages,
                    activeLanguage: action.payload
                }
            }
    
        case AUDIO_THEME_TOGGLE:
            return {
                ...state,
                audio: {
                    ...state.audio,
                    themeAudioIsPlaying: action.payload
                }
            }
        
        case AUDIO_VOLUME_CHANGE:
            return {
                ...state,
                audio: {
                    ...state.audio,
                    volumes: {
                        ...state.audio.volumes,
                        [action.payload.audioType]: action.payload.newVolume
                    }
                }
            }
    
        case VIDEO_EFFECTS_VOLUME_CHANGE:
            return {
                ...state,
                effects: {
                    ...state.effects,
                    volume: action.payload
                }
            }
            
        default:
            return state;
    }
}
// Change active theme
export const onThemeChange = (newTheme) => ({type: CHANGE_THEME, payload: newTheme})
// Change active language
export const onLanguageChange = (newLanguage) => ({type: CHANGE_LANGUAGE, payload: newLanguage})
// Toggle audio theme
export const onAudioThemeToggle = (newStatus) => ({type: AUDIO_THEME_TOGGLE, payload: newStatus})
// Change audio volume
export const onAudioVolumeChange = (audioType, newVolume) => ({type: AUDIO_VOLUME_CHANGE, payload: {audioType, newVolume}})
// Change audio volume
export const onVideoEffectsVolumeChange = (newVolume) => ({type: VIDEO_EFFECTS_VOLUME_CHANGE, payload: newVolume})

