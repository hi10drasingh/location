/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadGoogleMaps } from "./map"
import { LoadSuggestion } from "./suggestion"
import { LoadCacheStore, LoadUserStore, GetCacheData } from "./persist"
import IPlaceData, { Settings } from "./interface"
import { TriggerGlobalChange } from "./location"
import { ErrorHandler } from "./utils"

const load = () =>
    new Promise<IPlaceData>((resolve, reject) => {
        LoadGoogleMaps()
            .then(() => {
                LoadSuggestion()
                LoadCacheStore()
                LoadUserStore()
            })
            .then(() => {
                const cacheData = GetCacheData()
                resolve(cacheData)
            })
            .catch(error => reject(error))
    })

const wrapper = <F extends (...params: any[]) => void>(
    settings: Settings,
    CB: F
) =>
    ((...args: any[]) => {
        const newSettings = settings
        if (!newSettings.isLoaded) {
            load()
                .then(placeData => {
                    newSettings.isLoaded = true
                    newSettings.placeData = placeData
                    CB(...args)
                    TriggerGlobalChange(newSettings.placeData)
                })
                .catch(err => ErrorHandler.error(err))
        } else {
            CB(...args)
            TriggerGlobalChange(newSettings.placeData as IPlaceData)
        }
    }) as F

export default wrapper
