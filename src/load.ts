/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadGoogleMaps } from "./map"
import { LoadSuggestion } from "./suggestion"
import { LoadCacheStore, LoadUserStore, GetCacheData } from "./persist"
import IPlaceData, { Settings } from "./interface"
import { TriggerGlobalChange } from "./location"
import { ErrorHandler } from "./utils"

/**
 * Loads all dependencies required for plugin.
 *
 * @returns {Promise<IPlaceData>} - Loads all plugin dependencies and return global placeData from cache.
 */
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

/**
 * Loads all relevent dependencies if not already loaded before execution of callback.
 *
 * @param {Settings} settings - Load Setting of Plugin.
 * @param {(...params: any[]) => void} CB - Callback func after load function resolves.
 * @returns {(...params: any[]) => void} - Wrapper func whose signature is same as Cb func.
 */
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
